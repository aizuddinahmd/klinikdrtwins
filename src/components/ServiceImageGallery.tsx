"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

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
        const response = await fetch(
          `/api/admin/upload?serviceName=${encodeURIComponent(serviceTitle)}`
        );
        const data = await response.json();
        if (data.success) {
          setImages(data.images);
        }
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
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
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
    <div className="grid grid-cols-1 gap-4">
      {images.map((image) => (
        <div
          key={image.name}
          className="relative w-[600px] h-[600px] rounded-lg overflow-hidden"
        >
          <Image
            src={image.url}
            alt={image.name}
            fill
            className="object-contain"
            priority
          />
        </div>
      ))}
    </div>
  );
}
