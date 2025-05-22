"use client";

import { useRef, useState } from "react";
import { CloudUpload } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  serviceName: string;
}

export default function AdminImageUpload({ serviceName }: Props) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("serviceName", serviceName);
      formData.append("image", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Reset form and refresh page
      setFile(null);
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors duration-200 ${
          dragActive
            ? "border-[#c18e4a] bg-[#f9f6f2]"
            : "border-gray-300 bg-white"
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <CloudUpload className="w-10 h-10 text-gray-400 mb-4" />
        <p className="font-medium text-gray-700 mb-1">
          Choose a file or drag & drop it here
        </p>
        <p className="text-xs text-gray-400 mb-4">
          JPEG, PNG, PDG, and MP4 formats, up to 50MB
        </p>
        <button
          type="button"
          onClick={handleBrowse}
          className="px-4 py-2 rounded-md bg-[#f5f3ff] text-[#23235b] font-medium border border-gray-200 hover:bg-[#c18e4a] hover:text-white transition-colors"
        >
          Browse File
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/pdg,video/mp4"
          className="hidden"
          onChange={handleChange}
        />
        {file && (
          <div className="mt-4 text-sm text-gray-600">
            Selected file: <span className="font-semibold">{file.name}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!file}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#c18e4a] hover:bg-[#a97a3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c18e4a] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Upload Image
      </button>
    </form>
  );
}
