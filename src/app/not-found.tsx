import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
      <h2 className="text-2xl font-serif mb-4">페이지를 찾을 수 없습니다.</h2>
      <p className="text-[#888] mb-8">요청하신 경로는 존재하지 않거나 현재 접근할 수 없습니다.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-[#111] text-white text-xs tracking-widest uppercase"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
