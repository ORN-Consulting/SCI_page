import React, { useState } from 'react';
import { supabase } from "../lib/supabase";

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // 내용 상태 추가
  const [important, setImportant] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("제목을 입력해주세요.");
    
    setLoading(true);
    const { error } = await supabase
      .from('notices')
      .insert([{ 
        title, 
        content, // 내용 데이터 포함
        important, 
        date: new Date().toISOString().split('T')[0],
        views: 0 
      }]);

    setLoading(false);

    if (error) {
      alert("등록 실패: " + error.message);
    } else {
      alert("공지사항이 성공적으로 등록되었습니다.");
      setTitle('');
      setContent('');
      setImportant(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. 상단 히어로 섹션 (다른 페이지와 디자인 통일) */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center text-center">
        <img 
          src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070" 
          alt="Admin Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="w-full px-6">
            <div className="max-w-3xl mx-auto animate-fadeInUp">
              <p className="text-[#1a4a9c] font-bold tracking-[0.2em] mb-4 text-sm md:text-base uppercase">Admin Control</p>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                관리자 페이지
              </h1>
              <p className="text-xl md:text-2xl font-bold text-white mb-10 opacity-80">
                공지사항 게시글을 관리하고 등록합니다.
              </p>
              <div className="w-12 h-1 bg-[#1a4a9c] mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 작성 폼 섹션 */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-[#1a4a9c] mr-4 rounded-full"></span>
            새 공지사항 작성
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 제목 입력 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">제목</label>
              <input 
                type="text"
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-base focus:outline-none focus:border-[#1a4a9c] focus:ring-1 focus:ring-[#1a4a9c] transition-all"
                placeholder="공지사항 제목을 입력하세요" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </div>

            {/* 내용 입력 */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">내용</label>
              <textarea 
                rows="8"
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-base focus:outline-none focus:border-[#1a4a9c] focus:ring-1 focus:ring-[#1a4a9c] transition-all resize-none"
                placeholder="상세 내용을 입력하세요" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
              />
            </div>

            {/* 중요 공지 체크박스 */}
            <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100">
              <label className="flex items-center cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-gray-300 text-[#1a4a9c] focus:ring-[#1a4a9c] cursor-pointer"
                  checked={important} 
                  onChange={() => setImportant(!important)} 
                />
                <span className="ml-3 font-bold text-gray-700 group-hover:text-[#1a4a9c] transition-colors">
                  이 게시글을 상단 중요 공지로 고정합니다
                </span>
              </label>
            </div>

            {/* 제출 버튼 */}
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-black text-lg shadow-lg transition-all ${
                loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#1a4a9c] text-white hover:bg-[#153a7a] hover:-translate-y-1 shadow-blue-900/20'
              }`}
            >
              {loading ? '등록 중...' : '공지사항 게시하기'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admin;