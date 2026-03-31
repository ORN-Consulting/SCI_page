import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const menuConfig = [
    {
      title: '조합 소개',
      path: '/about',
      subItems: [
        { name: '인사말', path: '/about#greetings' },
        { name: '소개', path: '/about#intro' },
        { name: '조직도', path: '/about#organization' }
      ]
    },
    {
      title: '조합원 소개',
      path: '/members',
      subItems: [
        { name: '함께하는 분', path: '/members' }
      ]
    },
    {
      title: '조합활동',
      path: '/gallery',
      subItems: [
        { name: '사업 분야 소개', path: '/gallery#business' },
        { name: '컨설팅 & 강의 분야', path: '/gallery#lecture' }
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
    const handleScroll = () => {
      // 20px 이상 스크롤 시 흰색 배경으로 전환
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // 초기 로드 시 체크
    
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    };

    checkUser();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]); // 페이지 이동 시에도 다시 체크

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsHovered(false);
    setActiveMobileSub(null);
  };

  // === 🛠 투명도 조건 수정 완료 ===
  // !isMainPage 조건을 제거하여 모든 페이지에서 스크롤/호버 전까지 투명을 유지합니다.
  const shouldShowWhite = isScrolled || isHovered || isMobileMenuOpen;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 h-20 md:h-24 border-b ${
          shouldShowWhite 
          ? 'bg-white shadow-md border-gray-100' 
          : 'bg-transparent border-white/10'
        }`}
        onMouseEnter={() => window.innerWidth > 1024 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth > 1024 && setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          
          {/* 로고 */}
          <div className="w-auto lg:w-[250px] flex-shrink-0">
            <Link to="/" onClick={closeAllMenus} className={`flex items-center gap-2 md:gap-3 transition-colors ${shouldShowWhite ? 'text-black' : 'text-white'}`}>
              <div className="bg-black text-white p-1.5 md:p-2 font-black text-lg md:text-xl leading-none italic">ㄱㅅㄷ</div>
              <div className="flex flex-col leading-none">
                <span className="text-xs md:text-sm font-black tracking-tighter">과학기술인협동조합</span>
                <span className="text-[9px] md:text-[10px] font-light mt-0.5 opacity-70 italic hidden sm:inline">기술사업화지원단</span>
              </div>
            </Link>
          </div>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden lg:grid flex-grow max-w-[800px] h-full grid-cols-4 items-center">
            {menuConfig.map((item, idx) => (
              <div key={idx} className="text-center">
                <Link 
                  to={item.path} 
                  className={`text-[16px] xl:text-[17px] font-black transition-all border-b-2 border-transparent py-2 inline-block ${
                    shouldShowWhite ? 'text-gray-900' : 'text-white'
                  } hover:text-[#1a4a9c] hover:border-[#1a4a9c]`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* 우측 유틸리티 */}
          <div className={`hidden lg:flex w-[250px] justify-end items-center space-x-6 text-sm font-bold ${
            shouldShowWhite ? 'text-gray-600' : 'text-white'
          }`}>
            {isAdmin ? (
              <button onClick={handleLogout} className="text-red-500">LOGOUT</button>
            ) : (
              <Link to="/login" className="hover:text-[#1a4a9c]">로그인</Link>
            )}
            <Link to="/signup" className="hover:text-[#1a4a9c]">회원가입</Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button 
            className="lg:hidden p-2 focus:outline-none flex flex-col justify-center items-end gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 transition-all ${shouldShowWhite ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`w-4 h-0.5 transition-all ${shouldShowWhite ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-all ${shouldShowWhite ? 'bg-black' : 'bg-white'}`}></div>
          </button>
        </div>

        {/* 데스크탑 드롭다운 판넬 */}
        <div 
          className={`hidden lg:block absolute top-20 md:top-24 left-0 w-full bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 shadow-2xl ${
            isHovered ? 'max-h-[400px] py-12 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between">
            <div className="w-[250px] flex-shrink-0" />
            <div className="flex-grow max-w-[800px] grid grid-cols-4">
              {menuConfig.map((menu, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-5">
                  {menu.subItems.map((sub, sIdx) => (
                    <Link key={sIdx} to={sub.path} onClick={closeAllMenus} className="text-gray-500 hover:text-[#1a4a9c] text-[15px] font-semibold transition-colors">
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

      {/* 모바일 사이드바 메뉴 (전체 코드 포함) */}
      <div className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeAllMenus}></div>
        <div className={`absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-white shadow-2xl transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-end mb-10">
              <button onClick={closeAllMenus} className="text-gray-300 hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex-grow space-y-2">
              {menuConfig.map((menu, idx) => (
                <div key={idx} className="border-b border-gray-50">
                  <button 
                    className="w-full flex justify-between items-center py-5 text-lg font-black text-gray-950 uppercase tracking-tighter"
                    onClick={() => setActiveMobileSub(activeMobileSub === idx ? null : idx)}
                  >
                    {menu.title}
                    <span className={`text-[10px] transition-transform duration-300 ${activeMobileSub === idx ? 'rotate-180 text-[#1a4a9c]' : 'text-gray-300'}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeMobileSub === idx ? 'max-h-[300px] pb-6' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100">
                      {menu.subItems.map((sub, sIdx) => (
                        <Link key={sIdx} to={sub.path} onClick={closeAllMenus} className="text-[15px] font-bold text-gray-400 hover:text-[#1a4a9c]">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-gray-100 grid grid-cols-2 gap-3">
              {isAdmin ? (
                <>
                  <Link to="/admin" onClick={closeAllMenus} className="col-span-2 text-center py-4 bg-gray-950 text-white font-black text-xs uppercase tracking-widest mb-2">Admin Dashboard</Link>
                  <button onClick={handleLogout} className="col-span-2 text-center text-red-500 font-bold text-xs underline">Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeAllMenus} className="text-center py-4 bg-gray-50 text-gray-600 font-bold text-xs">로그인</Link>
                  <Link to="/signup" onClick={closeAllMenus} className="text-center py-4 bg-[#1a4a9c] text-white font-bold text-xs">회원가입</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;