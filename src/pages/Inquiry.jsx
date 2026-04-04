import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 수파베이스 'inquiries' 테이블에 저장 로직 (필요 시)
    const { error } = await supabase.from('inquiries').insert([formData]);
    
    if (!error) {
      alert('문의가 성공적으로 접수되었습니다.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* === 1. 상단 히어로 섹션 === */}
      <section className="relative h-[35vh] min-h-72 overflow-hidden flex items-center justify-center bg-black">
        <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-[0.15em]">
          문의하기
        </h1>
      </section>

      {/* === 2. 문의 폼 섹션 === */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-950 mb-4 tracking-tighter italic">Get in Touch</h2>
          <p className="text-gray-500 font-light">궁금하신 점을 남겨주시면 전문가가 직접 답변해 드립니다.</p>
          <div className="w-12 h-1 bg-[#1a4a9c] mx-auto mt-6"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 성함 */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Name</label>
              <input 
                type="text"
                required
                className="w-full border-b-2 border-gray-100 p-4 focus:border-[#1a4a9c] outline-none transition-all font-medium rounded-none bg-gray-50/30"
                placeholder="성함을 입력하세요"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            {/* 이메일 */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                type="email"
                required
                className="w-full border-b-2 border-gray-100 p-4 focus:border-[#1a4a9c] outline-none transition-all font-medium rounded-none bg-gray-50/30"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* 제목 */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Subject</label>
            <input 
              type="text"
              required
              className="w-full border-b-2 border-gray-100 p-4 focus:border-[#1a4a9c] outline-none transition-all font-medium rounded-none bg-gray-50/30"
              placeholder="문의 제목을 입력하세요"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>

          {/* 내용 */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">Message</label>
            <textarea 
              rows="6"
              required
              className="w-full border-b-2 border-gray-100 p-4 focus:border-[#1a4a9c] outline-none transition-all font-medium rounded-none bg-gray-50/30 resize-none"
              placeholder="상세 내용을 입력해 주세요"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          {/* 전송 버튼 */}
          <div className="pt-6">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gray-950 text-white font-black tracking-[0.3em] uppercase hover:bg-[#1a4a9c] transition-all rounded-none disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </section>

    </div>
  );
};

export default Inquiry;