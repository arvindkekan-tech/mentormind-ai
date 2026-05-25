import UploadDropzone from "../../../components/upload/upload-dropzone";

export default function UploadPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        Upload Study Material
      </h1>

      <p className="mt-2 text-gray-600">
        Upload PDFs, notes, PPTs, and handwritten images
        for AI-powered learning.
      </p>

      <UploadDropzone />
    </div>
  );
}