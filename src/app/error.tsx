"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
      <h2 className="text-2xl font-serif mb-4">문제가 발생했습니다.</h2>
      <p className="text-[#888] mb-8">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-[#111] text-white text-xs tracking-widest uppercase"
      >
        다시 시도
      </button>
    </div>
  );
}
