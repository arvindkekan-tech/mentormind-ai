export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-orange-500">
          MentorMind AI
        </h1>

        <nav className="flex items-center gap-6">
          <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}