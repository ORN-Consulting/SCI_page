import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../lib/supabase";

const Notice = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Supabase에서 공지사항 데이터 불러오기
  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('notices')
          .select('*')
          .order('important', { ascending: false }) // 중요 공지 우선
          .order('date', { ascending: false });    // 최신순 정렬

        if (error) throw error;
        setNotices(data || []);
      } catch (error) {
        console.error('Error fetching notices:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* 2. 상단 히어로 섹션 */}
      <section className="relative h-[35vh] min-h-72 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-[0.15em]">
          공지사항
        </h1>
      </section>

      {/* 3. 게시판 본문 섹션 */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        {/* 상단 검색 및 정보 영역 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-sm text-gray-500">
            총 <span className="font-bold text-gray-900">{notices.length}</span>건의 게시물이 있습니다.
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="검색어를 입력하세요" 
              className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a4a9c] focus:ring-1 focus:ring-[#1a4a9c] transition-all"
            />
            <button className="absolute right-4 top-3 text-gray-400 hover:text-[#1a4a9c]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 4. 게시판 테이블 영역 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-t-2 border-gray-900">
            <thead>
              <tr className="bg-gray-50 text-sm font-bold text-gray-700 border-b border-gray-200">
                <th className="px-6 py-5 w-24 text-center">번호</th>
                <th className="px-6 py-5">제목</th>
                <th className="px-6 py-5 w-32 text-center">날짜</th>
                <th className="px-6 py-5 w-24 text-center">조회수</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="py-20 text-center text-gray-400">데이터를 불러오는 중입니다...</td>
                </tr>
              ) : notices.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-20 text-center text-gray-400">등록된 공지사항이 없습니다.</td>
                </tr>
              ) : (
                notices.map((notice, index) => (
                  <tr 
                    key={notice.id} 
                    onClick={() => navigate(`/notice/${notice.id}`)}
                    className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-5 text-center">
                      {notice.important ? (
                        <span className="inline-block bg-[#1a4a9c]/10 text-[#1a4a9c] text-xs font-black px-3 py-1 rounded-md">
                          공지
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400 font-medium">
                          {notices.length - index}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5">
                      <span className={`text-base tracking-tight ${notice.important ? 'font-bold text-gray-900' : 'text-gray-700'} group-hover:text-[#1a4a9c] transition-colors`}>
                        {notice.title}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-400 font-medium">
                      {notice.date}
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-400 font-medium">
                      {notice.views || 0}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 5. 페이지네이션 (디자인 유지) */}
        <div className="mt-12 flex justify-center space-x-2">
          <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:border-black hover:text-black transition-all">
            &lt;
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg font-bold shadow-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:border-black hover:text-black transition-all">
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Notice;