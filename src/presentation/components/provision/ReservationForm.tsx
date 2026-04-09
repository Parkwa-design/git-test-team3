"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 text-center space-y-6"
      >
        <div className="w-12 h-[1px] bg-[#1a1a1a]" />
        <h3 className="text-xl font-serif">Thank you.</h3>
        <p className="text-sm text-[#737373] leading-relaxed">
          공간 이용 문의가 정상적으로 접수되었습니다.<br />
          검토 후 이메일로 답변을 보내드리겠습니다.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div className="flex flex-col space-y-2 group">
          <label className="text-[10px] tracking-[0.2em] text-[#a3a3a3] uppercase font-medium">
            Name
          </label>
          <input 
            required
            type="text" 
            placeholder="성함을 입력해주세요"
            className="w-full py-2 bg-transparent border-b border-[#e5e5e5] focus:border-[#1a1a1a] focus:outline-none transition-colors text-sm font-light placeholder:text-[#d4d4d4]"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-[10px] tracking-[0.2em] text-[#a3a3a3] uppercase font-medium">
            Email
          </label>
          <input 
            required
            type="email" 
            placeholder="이메일 주소를 입력해주세요"
            className="w-full py-2 bg-transparent border-b border-[#e5e5e5] focus:border-[#1a1a1a] focus:outline-none transition-colors text-sm font-light placeholder:text-[#d4d4d4]"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-[10px] tracking-[0.2em] text-[#a3a3a3] uppercase font-medium">
          Reservation Date & Time
        </label>
        <input 
          required
          type="datetime-local" 
          className="w-full py-2 bg-transparent border-b border-[#e5e5e5] focus:border-[#1a1a1a] focus:outline-none transition-colors text-sm font-light uppercase"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-[10px] tracking-[0.2em] text-[#a3a3a3] uppercase font-medium">
          Inquiry Message
        </label>
        <textarea 
          required
          rows={3}
          placeholder="공간 이용 목적이나 궁금하신 점을 자유롭게 적어주세요"
          className="w-full py-2 bg-transparent border-b border-[#e5e5e5] focus:border-[#1a1a1a] focus:outline-none transition-colors text-sm font-light resize-none placeholder:text-[#d4d4d4] leading-relaxed"
        />
      </div>

      <div className="pt-4">
        <button 
          disabled={isSubmitting}
          type="submit"
          className="w-full py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#333] disabled:bg-[#d4d4d4] disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
