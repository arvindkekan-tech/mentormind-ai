const uploads = [
  {
    name: "DSA Notes.pdf",
    subject: "Data Structures",
    time: "2 hours ago",
  },
  {
    name: "DBMS Unit 3.pdf",
    subject: "Database Management",
    time: "Yesterday",
  },
  {
    name: "Operating Systems.pptx",
    subject: "Operating Systems",
    time: "2 days ago",
  },
];

export default function RecentUploads() {
  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Uploads
        </h2>

        <button className="text-sm font-medium text-orange-500 hover:text-orange-600">
          View All
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {uploads.map((upload) => (
          <div
            key={upload.name}
            className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-gray-50"
          >
            <div>
              <h3 className="font-medium text-gray-900">
                {upload.name}
              </h3>

              <p className="text-sm text-gray-500">
                {upload.subject}
              </p>
            </div>

            <span className="text-sm text-gray-400">
              {upload.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}