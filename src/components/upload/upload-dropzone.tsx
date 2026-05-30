"use client";

import { useRef, useState } from "react";
import {
  FileText,
  ImageIcon,
  UploadCloud,
  X,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

type UploadedFile = {
  name: string;
  size: string;
  type: string;
  uploading?: boolean;
};

export default function UploadDropzone() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleChooseFiles = () => {
    inputRef.current?.click();
  };

  const handleFiles = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = event.target.files;

    if (!selectedFiles) return;

    for (const file of Array.from(selectedFiles)) {
      try {
        const cleanFileName = file.name
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9.-]/g, "");

        const uniqueFileName = `${Date.now()}-${cleanFileName}`;

        const filePath = uniqueFileName;

        const fileData: UploadedFile = {
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          type: file.type,
          uploading: true,
        };

        setFiles((prev) => [...prev, fileData]);

        const arrayBuffer =
          await file.arrayBuffer();

        const { data, error } =
          await supabase.storage
            .from("study-materials")
            .upload(
              filePath,
              arrayBuffer,
              {
                contentType: file.type,
                upsert: false,
              }
            );

        if (error) {
          console.error(
            "Upload Error:",
            error.message
          );
          continue;
        }
        if (file.type === "application/pdf") {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "/api/extract-pdf",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  console.log(
    "Extracted PDF Text:",
    data.text
  );
}
        const { error: dbError } =
  await supabase.from("uploads").insert([
    {
      file_name: file.name,
      file_size: fileData.size,
      file_type: file.type,
      storage_path: filePath,
      ai_processed: false,
    },
  ]);

if (dbError) {
  console.error(
    "Database Error:",
    dbError.message
  );
}

        console.log(
          "Uploaded Successfully:",
          data
        );

        setFiles((prev) =>
          prev.map((item) =>
            item.name === file.name
              ? {
                  ...item,
                  uploading: false,
                }
              : item
          )
        );
      } catch (err) {
        console.error(
          "Unexpected Upload Error:",
          err
        );
      }
    }
  };

  const removeFile = (
    fileName: string
  ) => {
    setFiles((prev) =>
      prev.filter(
        (file) => file.name !== fileName
      )
    );
  };

  return (
    <div className="mt-8">
      <div className="rounded-3xl border-2 border-dashed border-orange-200 bg-orange-50/40 p-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <UploadCloud className="h-10 w-10 text-orange-500" />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Drop files here or browse
          </h2>

          <p className="mt-3 text-gray-600">
            PDF, PPTX, DOCX, JPG, PNG up to
            50MB
          </p>

          <button
            onClick={handleChooseFiles}
            className="mt-8 rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Choose Files
          </button>

          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFiles}
          />
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Your Files
          </h2>

          <div className="mt-6 space-y-4">
            {files.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between rounded-2xl border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
                    {file.type.includes(
                      "image"
                    ) ? (
                      <ImageIcon className="text-orange-500" />
                    ) : (
                      <FileText className="text-orange-500" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {file.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-3">
                      <p className="text-sm text-gray-500">
                        {file.size}
                      </p>

                      {file.uploading ? (
                        <span className="text-xs font-medium text-orange-500">
                          Uploading...
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-green-600">
                          Uploaded
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeFile(file.name)
                  }
                  className="rounded-lg p-2 transition hover:bg-gray-100"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}