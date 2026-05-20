import RecentUploads from "../../components/dashboard/recent-uploads";
import StatsCards from "../../components/dashboard/stats-cards";
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-gray-600">
        Continue your AI-powered learning journey.
      </p>
      <StatsCards />
      <RecentUploads />
    </div>
  );
}