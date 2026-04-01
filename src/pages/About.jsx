import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState('greetings');
  
  const greetingsRef = useRef(null);
  const introRef = useRef(null);
  const organizationRef = useRef(null);

  // 0. hash 변경 시 해당 섹션으로 스크롤, hash 없으면 최상단
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const sectionId = hash.replace('#', '');
    setTimeout(() => scrollToSection(sectionId), 100);
  }, [hash]);

  // 1. 스크롤 감지 및 활성 탭 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const desktopOffset = 56 + 48; // 헤더(56) + 탭바(48) = 104px
      const mobileOffset = 64 + 64;  // 헤더(64) + 탭바(64) = 128px
      const currentOffset = window.innerWidth < 768 ? mobileOffset : desktopOffset;
      
      // 섹션의 상단이 탭바 바로 아래 왔을 때 감지
      const scrollPos = window.scrollY + currentOffset + 10;

      if (organizationRef.current && scrollPos >= organizationRef.current.offsetTop) {
        setActiveSection('organization');
      } else if (introRef.current && scrollPos >= introRef.current.offsetTop) {
        setActiveSection('intro');
      } else {
        setActiveSection('greetings');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. 탭 클릭 시 정밀 스크롤 이동
  const scrollToSection = (sectionId) => {
    const refs = { greetings: greetingsRef, intro: introRef, organization: organizationRef };
    const targetRef = refs[sectionId];

    if (targetRef && targetRef.current) {
      const desktopOffset = 56 + 48; 
      const mobileOffset = 64 + 64;
      const headerOffset = window.innerWidth < 768 ? mobileOffset : desktopOffset; 
      
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // snap-y mandatory: 스크롤 시 섹션에 자석처럼 붙게 함
    <div className="bg-white min-h-screen snap-y snap-mandatory">
      
      {/* 1. 히어로 배너 (기존 규격 유지) */}
      <section className="relative h-[45vh] min-h-80 overflow-hidden flex items-center justify-center snap-start">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-[0.15em]">
          과학기술인협동조합
        </h1>
      </section>

      {/* 2. 탭바 (규격: 데스크톱 48px / 모바일 64px 고정) */}
      <nav 
        className="sticky z-43 bg-black text-white border-b border-white/10 h-[64px] top-[64px] md:h-[64px] md:top-[64px] snap-start"
      >
        <div className="max-w-7xl mx-auto flex h-full items-stretch">
          {[
            { id: 'greetings', label: '인사말' },
            { id: 'intro', label: '소개' },
            { id: 'organization', label: '조직도' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`flex-1 h-full flex items-center justify-center text-[13px] md:text-[14px] font-black transition-all bg-black ${
                activeSection === tab.id 
                ? 'text-white border-b-4 border-[#1a4a9c]' 
                : 'text-white/30 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. 본문 섹션: 화면 높이에 딱 맞춰 계산됨 */}
      {/* h-[calc(100vh-offset)]를 사용하여 화면을 꽉 채웁니다. */}
      
      {/* 인사말 */}
      <section 
        id="greetings" 
        ref={greetingsRef} 
        className="w-full px-6 bg-white border-b border-gray-100 flex flex-col justify-center items-center snap-start h-[calc(100vh-128px)] md:h-[calc(100vh-104px)] scroll-mt-[128px] md:scroll-mt-[104px]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-8 tracking-tight italic">인사말</h2>
          <div className="text-gray-600 leading-[2.2] text-base md:text-lg font-light break-keep space-y-6">
            <p>전문 인력들이 모여 과학기술 관련 서비스를 제공하고 새로운 가치를 창출하는 혁신 플랫폼입니다.</p>
            <p>우리는 기술적 난제를 해결하고 중소기업의 성장을 돕는 파트너로서 최선을 다하겠습니다.</p>
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section 
        id="intro" 
        ref={introRef} 
        className="w-full px-6 bg-gray-50 border-b border-gray-100 flex flex-col justify-center items-center snap-start h-[calc(100vh-128px)] md:h-[calc(100vh-104px)] scroll-mt-[128px] md:scroll-mt-[104px]"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full aspect-video md:aspect-square overflow-hidden bg-gray-200">
             <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Intro" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-6 tracking-tight italic">소개</h2>
            <p className="text-gray-600 leading-[2.2] text-base md:text-lg font-light break-keep">
              분야별 전문가들이 결집하여 기술적 난제를 해결하고 인간의 자유의지와 기술의 조화를 통해 미래를 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 조직도 */}
      <section 
        id="organization" 
        ref={organizationRef} 
        className="w-full px-6 bg-white flex flex-col justify-center items-center snap-start h-[calc(100vh-128px)] md:h-[calc(100vh-104px)] scroll-mt-[128px] md:scroll-mt-[104px]"
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-10 tracking-tight uppercase italic">조직도</h2>
          <div className="w-full h-[200px] md:h-[300px] bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center text-gray-400">
            조직도 이미지 배치 영역 (화면 중앙 정렬됨)
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;