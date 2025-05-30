import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { SupabaseClient } from "@supabase/supabase-js";

// Function to convert public URL to signed URL
async function getSignedUrl(supabase: SupabaseClient, path: string) {
  const { data } = await supabase.storage
    .from("services")
    .createSignedUrl(path, 31536000); // 1 year expiry
  return data?.signedUrl;
}

// GET function to fetch all images for a service
export async function GET(request: Request) {
  try {
    // Get serviceName from URL query parameters
    const url = new URL(request.url);
    const serviceName = url.searchParams.get("serviceName");

    if (!serviceName) {
      return NextResponse.json(
        { error: "Service name is required" },
        { status: 400 }
      );
    }

    // Create a safe folder name from the service name
    const safeServiceName = serviceName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");

    // Get images from Supabase Storage
    const supabase = await createClient();
    const { data: images, error } = await supabase.storage
      .from("services")
      .list(safeServiceName);

    if (error) {
      throw error;
    }

    // Get signed URLs for all images
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const signedUrl = await getSignedUrl(
          supabase,
          `${safeServiceName}/${image.name}`
        );

        return {
          name: image.name,
          url: signedUrl,
          created_at: image.created_at,
          last_accessed_at: image.last_accessed_at,
          metadata: image.metadata,
        };
      })
    );

    return NextResponse.json({
      success: true,
      images: imageUrls,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const serviceName = formData.get("serviceName") as string;

    if (!file || !serviceName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a safe filename from the service name
    const safeServiceName = serviceName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");

    // Get file extension
    const fileExt = file.name.split(".").pop();
    let filename = `${safeServiceName}.${fileExt}`;

    // Check if file exists
    const supabase = await createClient();
    const { data: existingFiles } = await supabase.storage
      .from("services")
      .list(safeServiceName);

    if (existingFiles) {
      // Create a regex to match the base filename with optional number suffix
      const baseFilename = `${safeServiceName}`;
      const filenameRegex = new RegExp(
        `^${baseFilename}(?:-(\\d+))?\\.${fileExt}$`
      );

      // Find the highest number used in existing filenames
      let maxNumber = 0;
      existingFiles.forEach((file) => {
        const match = file.name.match(filenameRegex);
        if (match) {
          const number = match[1] ? parseInt(match[1]) : 0;
          maxNumber = Math.max(maxNumber, number);
        }
      });

      // If base filename exists, start from 2, otherwise use the next number
      if (existingFiles.some((f) => f.name === filename)) {
        filename = `${safeServiceName}-${maxNumber + 1}.${fileExt}`;
      }
    }

    // Upload to Supabase Storage
    const { error } = await supabase.storage
      .from(`services/${safeServiceName}`)
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: true, // overwrite if exists
      });

    if (error) {
      throw error;
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("services")
      .getPublicUrl(`${safeServiceName}/${filename}`);

    return NextResponse.json({
      success: true,
      path: publicUrl,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const serviceName = url.searchParams.get("serviceName");
    const imageName = url.searchParams.get("imageName");

    if (!serviceName || !imageName) {
      return NextResponse.json(
        { error: "Service name and image name are required" },
        { status: 400 }
      );
    }

    // Create a safe folder name from the service name
    const safeServiceName = serviceName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");

    const supabase = await createClient();
    const { error } = await supabase.storage
      .from("services")
      .remove([`${safeServiceName}/${imageName}`]);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Error deleting image" },
      { status: 500 }
    );
  }
}
