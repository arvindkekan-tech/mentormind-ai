const stats = [
  {
    title: "Uploaded Files",
    value: "24",
  },
  {
    title: "AI Questions Asked",
    value: "182",
  },
  {
    title: "Generated Notes",
    value: "56",
  },
  {
    title: "Quiz Accuracy",
    value: "89%",
  },
];

export default function StatsCards() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}