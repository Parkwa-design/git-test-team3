"use client";

import React from "react";
import { MapPin, Clock, Coffee, BookOpen } from "lucide-react";

const SpaceFeature = () => {
  const features = [
    {
      icon: <MapPin strokeWidth={1} className="w-8 h-8" />,
      title: "Location",
      desc: "서울시 성동구 성수동 1가 12-34\n아침빌딩 2층",
    },
    {
      icon: <Clock strokeWidth={1} className="w-8 h-8" />,
      title: "Hours",
      desc: "매일 08:00 - 18:00\n(매주 월요일 휴관)",
    },
    {
      icon: <Coffee strokeWidth={1} className="w-8 h-8" />,
      title: "Programs",
      desc: "아침 편지 쓰기, 명상 세션,\n핸드드립 브루잉 클래스",
    },
    {
      icon: <BookOpen strokeWidth={1} className="w-8 h-8" />,
      title: "Concept",
      desc: "고요한 아침의 감각을 일깨우는\n기록과 사유의 공간",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 lg:gap-12">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col space-y-8 group">
          <div className="text-[#1a1a1a] transition-transform duration-500 group-hover:-translate-y-1">
            {item.icon}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-serif tracking-tight text-[#1a1a1a]">
              {item.title}
            </h3>
            <p className="text-sm text-[#737373] leading-[2] font-light whitespace-pre-wrap">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpaceFeature;
