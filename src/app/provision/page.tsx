"use client";

import React from "react";
import SpaceHero from "@/presentation/components/provision/SpaceHero";
import SpaceFeature from "@/presentation/components/provision/SpaceFeature";
import MapSection from "@/presentation/components/provision/MapSection";
import ReservationForm from "@/presentation/components/provision/ReservationForm";

/**
 * /provision 라우터 페이지
 * 오프라인 공간 소개, 지도, 예약 폼을 포함하는 통합 페이지입니다.
 */
export default function ProvisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section: 공간의 첫인상 */}
      <SpaceHero />

      {/* Feature Section: 공간 상세 정보 및 특징 */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <SpaceFeature />
      </section>

      {/* Map Section: 위치 안내 */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-serif mb-10 text-[#111]">LOCATION</h2>
          <MapSection />
        </div>
      </section>

      {/* Reservation Section: 예약 및 문의 */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-serif mb-10 text-center text-[#111]">RESERVATION</h2>
        <ReservationForm />
      </section>
    </div>
  );
}
