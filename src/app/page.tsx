import Navbar from "../components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900">
          Your Personal AI Teacher
          <span className="text-orange-500"> for Every Subject</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Upload notes, ask doubts, generate smart summaries,
          create quizzes, and learn faster with AI-powered teaching.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600">
            Start Learning
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
            Explore Features
          </button>
        </div>
      </section>
    </main>
  );
}