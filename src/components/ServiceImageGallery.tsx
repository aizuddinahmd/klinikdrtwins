"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = new URL("/api/admin/upload", window.location.origin);
        url.searchParams.append("serviceName", serviceTitle);

        const response = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [serviceTitle]);

  if (isLoading) {
    return (
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c18e4a]"></div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0">
      {images && images.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {images.map((image) => (
            <div key={image.name} className="relative w-[300px] h-[300px]">
              <Image
                src={image.url}
                alt={`${serviceTitle} - ${image.name}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-[300px] h-[300px]">
          <Image
            src={defaultIcon}
            alt={serviceTitle}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
