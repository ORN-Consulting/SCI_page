import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const NoticeDetail = () => {
  const { id } = useParams(); // URL에서 공지사항 ID 추출
  const navigate = useNavigate();

  // 임시 데이터 (실제로는 API나 DB에서 가져옵니다)
  const notice = {
    title: "2026년 창립기념일 휴무 안내",
    date: "2026.03.17",
    views: 125,
    author: "관리자",
    content: `
      안녕하세요. 과학기술인협동조합입니다.
      
      2026년 창립기념일을 맞이하여 아래와 같이 휴무를 안내드리오니, 
      업무 및 서비스 이용에 참고하시기 바랍니다.
      
      1. 휴무 일자: 2026년 3월 19일 (목)
      2. 휴무 대상: 전 부서 및 고객센터
      
      휴무 기간 동안 접수된 문의사항은 3월 20일(금)부터 순차적으로 처리될 예정입니다.
      조합원 여러분의 너른 양해 부탁드립니다.
      
      감사합니다.
    `
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. 히어로 섹션 */}
      <section className="relative h-[35vh] min-h-72 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070"
          alt="Notice Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-[0.15em]">공지사항</h1>
      </section>

      {/* 2. 게시글 상세 영역 */}
      <article className="max-w-4xl mx-auto px-6 mt-12">
        {/* 제목 섹션 */}
        <div className="border-t-2 border-gray-900 py-8 px-4 bg-gray-50/50">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {notice.title}
          </h2>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="font-bold text-gray-900 mr-2">작성일</span> {notice.date}
            </div>
            <div className="flex items-center">
              <span className="font-bold text-gray-900 mr-2">조회수</span> {notice.views}
            </div>
          </div>
        </div>

        {/* 본문 내용 */}
        <div className="py-12 px-4 border-b border-gray-100 min-h-[400px]">
          <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
            {notice.content}
          </div>
          
          {/* 첨부파일 영역 (필요 시) */}
          <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-600">첨부파일</span>
            <button className="text-sm text-[#1a4a9c] font-bold hover:underline">
              창립기념일_공고문.pdf (1.2MB) ↓
            </button>
          </div>
        </div>

        {/* 3. 이전글/다음글 내비게이션 */}
        <div className="mt-8 border-t border-gray-100">
          <div className="flex items-center py-4 border-b border-gray-100 group cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="w-24 text-sm font-bold text-gray-400 pl-4">이전글 ▲</span>
            <span className="flex-grow text-gray-700 group-hover:text-[#1a4a9c]">신규 조합원 가입 절차 안내 (개정)</span>
          </div>
          <div className="flex items-center py-4 border-b border-gray-100 group cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="w-24 text-sm font-bold text-gray-400 pl-4">다음글 ▼</span>
            <span className="flex-grow text-gray-400 italic">다음글이 없습니다.</span>
          </div>
        </div>

        {/* 4. 버튼 영역 */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/notice')}
            className="px-10 py-4 border-2 border-[#1a4a9c] text-[#1a4a9c] font-bold rounded-full hover:bg-[#1a4a9c] hover:text-white transition-all shadow-lg"
          >
            목록으로 돌아가기
          </button>
        </div>
      </article>
    </div>
  );
};

export default NoticeDetail;