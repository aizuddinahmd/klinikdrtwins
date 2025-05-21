"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ServiceImage {
  name: string;
  url: string;
  created_at: string;
  last_accessed_at: string;
  metadata: {
    size: number;
    mimetype: string;
    cacheControl: string;
  };
}

interface ServiceImageGalleryProps {
  serviceTitle: string;
  defaultIcon: string;
  isAdmin: boolean;
}

export default function ServiceImageGallery({
  serviceTitle,
  defaultIcon,
  isAdmin,
}: ServiceImageGalleryProps) {
  const [images, setImages] = useState<ServiceImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageToDelete, setImageToDelete] = useState<ServiceImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `/api/admin/upload?serviceName=${encodeURIComponent(serviceTitle)}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch images");
        }

        setImages(data.images);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch images");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [serviceTitle]);

  const handleDelete = async (image: ServiceImage) => {
    try {
      const response = await fetch(
        `/api/admin/upload?serviceName=${encodeURIComponent(
          serviceTitle
        )}&imageName=${encodeURIComponent(image.name)}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      // Remove the deleted image from the state
      setImages((prevImages) =>
        prevImages.filter((img) => img.name !== image.name)
      );
      setImageToDelete(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete image");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-64 h-64 relative bg-red-50 rounded-lg flex items-center justify-center">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="relative w-[600px] h-[400px] rounded-lg overflow-hidden">
        <Image
          src={defaultIcon}
          alt={serviceTitle}
          fill
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {images.map((image) => (
          <div
            key={image.name}
            className={`relative w-[600px] h-[600px] rounded-lg overflow-hidden group ${
              isAdmin ? "hover:opacity-60" : "opacity-100"
            }`}
          >
            <Image
              src={image.url}
              alt={image.name}
              fill
              className="object-contain"
              priority
            />
            {isAdmin && (
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer"
                onClick={() => setImageToDelete(image)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <AlertDialog
        open={!!imageToDelete}
        onOpenChange={() => setImageToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this image? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => imageToDelete && handleDelete(imageToDelete)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
