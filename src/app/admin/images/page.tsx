"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ImageUpload {
  serviceName: string;
  image: File | null;
}

export default function AdminImageUpload() {
  const router = useRouter();
  const [upload, setUpload] = useState<ImageUpload>({
    serviceName: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!upload.image || !upload.serviceName) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", upload.image);
    formData.append("serviceName", upload.serviceName);

    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      router.refresh();
      setUpload({ serviceName: "", image: null });
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload Service Images</h1>

      <form onSubmit={handleSubmit} className="max-w-md space-y-6">
        <div>
          <label
            htmlFor="serviceName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Name
          </label>
          <input
            type="text"
            id="serviceName"
            value={upload.serviceName}
            onChange={(e) =>
              setUpload((prev) => ({ ...prev, serviceName: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18e4a] focus:border-transparent"
            placeholder="Enter service name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) =>
              setUpload((prev) => ({
                ...prev,
                image: e.target.files?.[0] || null,
              }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c18e4a] focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium hover:bg-[#a97a3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
    </div>
  );
}
