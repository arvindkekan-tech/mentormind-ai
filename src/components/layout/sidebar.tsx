import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  FileText,
  Brain,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload",
    icon: Upload,
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
  },
  {
    title: "Notes",
    icon: FileText,
  },
  {
    title: "Quiz",
    icon: Brain,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b px-6 py-5">
        <h1 className="text-2xl font-bold text-orange-500">
          MentorMind AI
        </h1>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
            >
              <Icon size={20} />
              {item.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}