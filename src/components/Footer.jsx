import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6">
      <div className="max-w-360 mx-auto">

        {/* 상단 네비게이션 */}
        <div className="flex flex-wrap gap-8 py-8 border-b border-white/10 text-[13px] font-light text-white/50 uppercase tracking-widest">
          <Link to="/about"   className="hover:text-white transition-colors">조합소개</Link>
          <Link to="/members" className="hover:text-white transition-colors">조합원소개</Link>
          <Link to="/gallery" className="hover:text-white transition-colors">컨설팅갤러리</Link>
          <Link to="/notice"  className="hover:text-white transition-colors">공지/문의</Link>
          <Link to="/login"   className="hover:text-white transition-colors">로그인</Link>
        </div>

        {/* 하단 로고 + 연락처 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 gap-8">

          {/* 로고 */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white text-black px-2 py-1.5 font-black text-xl italic leading-none">ㄱㅅㄷ</div>
            <div className="leading-tight">
              <span className="block font-black text-base tracking-tighter">과학기술인협동조합</span>
              <span className="text-[9px] opacity-40 uppercase tracking-[0.2em] font-light mt-0.5 block">기술사업화지원단</span>
            </div>
          </Link>

          {/* 연락처 */}
          <div className="text-[13px] font-light text-white/30 leading-loose tracking-wide text-left md:text-right">
            <p>00000 서울특별시 강남구 논현로12길 19-9(개포동) 06312 한국</p>
            <p>Tel. 010-0000-0000 &nbsp;&nbsp;&nbsp; Fax. 010-0000-0000</p>
            <p>Email. example@gmail.com</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
