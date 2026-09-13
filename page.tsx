import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <main className="flex flex-col items-center gap-6 text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          NagrikSetu
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          AI‑powered civic issue reporting platform. Capture, report, and track public infrastructure problems in your community.
        </p>
        <div className="flex gap-4">
          <a href="/report" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Report an Issue
          </a>
            <a href="/anonymous-report" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              🚨 Complain Anonymously
            </a>
        </div>
        <Image src="/next.svg" alt="Next.js" width={120} height={30} className="opacity-70" />
      </main>
    </div>
  );
}
