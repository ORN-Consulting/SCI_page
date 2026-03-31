import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // === ⚠️ 도안 및 어바웃 페이지 ID와 링크 연결 완료 ===
  const menuConfig = [
    {
      title: '조합 소개',
      path: '/about',
      subItems: [
        { name: '인사말', path: '/about#greetings' },    // #greetings 섹션으로 연결
        { name: '소개', path: '/about#intro' },        // #intro 섹션으로 연결
        { name: '조직도', path: '/about#organization' } // #organization 섹션으로 연결
      ]
    },
    {
      title: '조합원 소개',
      path: '/members',
      subItems: [
        { name: '함께하는 분', path: '/members' } // 현재 동일 페이지 내 탭 구조
      ]
    },
    {
   title: '조합활동', // 명칭 통일
    path: '/gallery',
    subItems: [
      { name: '사업 분야 소개', path: '/gallery#business' }, // #business로 연결
      { name: '컨설팅 & 강의 분야', path: '/gallery#lecture' } // #lecture로 연결
    ]
    },
    {
      title: '공지&문의',
      path: '/notice',
      subItems: [
        { name: '공지사항', path: '/notice' },
        { name: '문의하기', path: '/inquiry' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    };
    checkUser();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled || isHovered ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* 로고 영역 */}
        <div className="w-[250px] flex-shrink-0">
          <Link to="/" className={`flex items-center gap-3 transition-colors ${isScrolled || isHovered ? 'text-black' : 'text-white'}`}>
            <div className="bg-black text-white p-2 font-black text-xl leading-none">ㄱㅅㄷ</div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold">과학기술인협동조합</span>
              <span className="text-[10px] font-light mt-1 opacity-70 italic">기술사업화지원단</span>
            </div>
          </Link>
        </div>

        {/* 메인 네비게이션 */}
        <nav className="flex-grow max-w-[800px] h-full grid grid-cols-4 items-center">
          {menuConfig.map((item, idx) => (
            <div key={idx} className="text-center">
              <Link 
                to={item.path} 
                className={`text-[17px] font-black transition-all border-b-2 border-transparent py-2 inline-block ${
                  isScrolled || isHovered ? 'text-gray-900' : 'text-white'
                } hover:text-[#1a4a9c] hover:border-[#1a4a9c]`}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>

        {/* 우측 유틸리티 */}
        <div className={`w-[250px] flex justify-end items-center space-x-6 text-sm font-bold ${
          isScrolled || isHovered ? 'text-gray-600' : 'text-white'
        }`}>
          {isAdmin ? (
            <button onClick={handleLogout} className="text-red-500">로그아웃</button>
          ) : (
            <Link to="/login" className="hover:text-[#1a4a9c]">로그인</Link>
          )}
          <Link to="/signup" className="hover:text-[#1a4a9c]">회원가입</Link>
        </div>
      </div>

      {/* 메가 메뉴 드롭다운 (수직 정렬 최적화) */}
      <div 
        className={`absolute top-24 left-0 w-full bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 shadow-2xl ${
          isHovered ? 'max-h-[400px] py-12 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <div className="w-[250px] flex-shrink-0" />
          <div className="flex-grow max-w-[800px] grid grid-cols-4">
            {menuConfig.map((menu, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-5">
                {menu.subItems.map((sub, sIdx) => (
                  <Link 
                    key={sIdx} 
                    to={sub.path} 
                    className="text-gray-500 hover:text-[#1a4a9c] text-[15px] font-semibold transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="w-[250px] flex-shrink-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;