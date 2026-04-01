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
  const isMainPage = location.pathname === '/';

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
        {}
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    };
    checkUser();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

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

  const handleNavClick = () => {
    closeAllMenus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shouldShowWhite = isScrolled || isHovered || isMobileMenuOpen;

  return (
    <>
      <header 
        // 높이 축소: 모바일 h-14(56px), 데스크톱 h-16(64px)
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 h-16 md:h-18 border-b ${
          shouldShowWhite ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100' : 'bg-transparent border-white/10'
        }`}
        onMouseEnter={() => window.innerWidth > 1024 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth > 1024 && setIsHovered(false)}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          
          {/* 1. 로고 영역 (너비 250px 고정) */}
          <div className="w-auto lg:w-[250px] flex-shrink-0">
            <Link to="/" onClick={handleNavClick} className={`flex items-center gap-2 transition-colors ${shouldShowWhite ? 'text-black' : 'text-white'}`}>
              <div className="bg-black text-white px-1.5 py-1 font-black text-sm md:text-base leading-none italic">ㄱㅅㄷ</div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] md:text-[12px] font-bold tracking-tight">과학기술인협동조합</span>
                <span className="text-[7px] md:text-[8px] font-light opacity-50 italic hidden sm:inline uppercase tracking-widest">SCI COOP</span>
              </div>
            </Link>
          </div>

          {/* 2. 메인 네비게이션 (중앙 800px 그리드 정렬) */}
          <nav className="hidden lg:flex flex-grow max-w-[800px] h-full justify-between items-center">
            {menuConfig.map((item, idx) => (
              <div key={idx} className="flex-1 text-center h-full">
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`h-full flex items-center justify-center text-[14px] font-bold transition-all relative px-2 ${
                    shouldShowWhite ? 'text-gray-900' : 'text-white'
                  } hover:text-[#1a4a9c] group`}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a4a9c] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* 3. 우측 유틸리티 (너비 250px 고정) */}
          <div className={`hidden lg:flex w-[250px] justify-end items-center space-x-4 text-[11px] font-bold tracking-tighter ${
            shouldShowWhite ? 'text-gray-400' : 'text-white/70'
          }`}>
            {isAdmin ? (
              <button onClick={handleLogout} className="hover:text-red-500">LOGOUT</button>
            ) : (
              <Link to="/login" onClick={handleNavClick} className="hover:text-black">LOGIN</Link>
            )}
            <span className="opacity-20">|</span>
            <Link to="/signup" onClick={handleNavClick} className="hover:text-black">JOIN</Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button 
            className="lg:hidden p-2 flex flex-col items-end gap-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-5 h-0.5 transition-all ${shouldShowWhite ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`w-5 h-0.5 transition-all ${shouldShowWhite ? 'bg-black' : 'bg-white'}`}></div>
          </button>
        </div>

        {/* 4. 드롭다운 판넬 (높이 축소에 맞춰 top-14/16 조정) */}
        <div 
          className={`hidden lg:block absolute top-16 md:top-18 left-0 w-full bg-white/90 backdrop-blur-md overflow-hidden transition-all duration-500 ${
            isHovered ? 'max-h-[350px] py-10 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-10 flex justify-between">
            <div className="w-[250px] flex-shrink-0" />
            
            {/* 상단 메뉴와 수직 일치 시키는 그리드 */}
            <div className="flex-grow max-w-[800px] grid grid-cols-4 justify-items-center">
              {menuConfig.map((menu, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-3.5">
                  {menu.subItems.map((sub, sIdx) => (
                    <Link key={sIdx} to={sub.path} onClick={closeAllMenus} className="text-gray-400 hover:text-[#1a4a9c] text-[13px] font-medium transition-colors break-keep">
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
    </>
  );
};

export default Header;