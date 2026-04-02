import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PersonCard = ({ name = 'John Smith' }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center">
      <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
    <span className="text-sm text-gray-700 font-medium">{name}</span>
  </div>
);

const About = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState('greetings');

  const greetingsRef = useRef(null);
  const introRef = useRef(null);
  const organizationRef = useRef(null);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const sectionId = hash.replace('#', '');
    setTimeout(() => scrollToSection(sectionId), 100);
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      const desktopOffset = 56 + 48;
      const mobileOffset = 64 + 64;
      const currentOffset = window.innerWidth < 768 ? mobileOffset : desktopOffset;
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

  const scrollToSection = (sectionId) => {
    const refs = { greetings: greetingsRef, intro: introRef, organization: organizationRef };
    const targetRef = refs[sectionId];

    if (targetRef && targetRef.current) {
      const desktopOffset = 56 + 48;
      const mobileOffset = 64 + 64;
      const headerOffset = window.innerWidth < 768 ? mobileOffset : desktopOffset;

      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">

      {/* 1. 히어로 배너 */}
      <section className="relative h-[45vh] min-h-80 overflow-hidden flex items-center justify-center">
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

      {/* 2. 탭바 */}
      <nav className="sticky top-16 md:top-18 z-40 bg-black text-white border-b border-white/10 h-16">
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
                ? 'text-white border-b-2 border-white'
                : 'text-white/30 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* 인사말 */}
      <section
        id="greetings"
        ref={greetingsRef}
        className="py-20 px-10 md:px-20 bg-white scroll-mt-32 md:scroll-mt-26"
      >
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-10 md:p-14">
          <h2 className="text-2xl font-black text-gray-950 text-center mb-8 tracking-tight">인사말</h2>
          <div className="text-gray-600 leading-loose text-sm md:text-base font-light break-keep space-y-4">
            <p>국가과학기술 경쟁력 강화를 위한 이공계지원 특별법, 제2조 제1항 및 동법 시행령 제2조 제1항에 의한 이공계 인력이 조합원으로 참여하여 과학기술 관련 서비스 동력 활동을 하기위해 '협동조합기본법'에 의해 설립된 협동 조합으로, 과학기술인 협동조합지원센터의 확인을 받은 기업입니다. 과학기술인 협동조합은 중소기업기본법 이래 중소기업으로 중소기업과 같이 전자 세금계산서 발급 등, 공공입찰 등 모든 업무처리가 동일하게 가능합니다.</p>
            <p>이런 상황에서 다수 노동자들이 한때 가졌던 직업은 저임금 노동자들의 나라로 아웃소싱되거나 로봇에 넘겨지고 있으며, 일을 빼앗긴 노동자들은 스스로를 다시 만들어내야 한다는 난제에 부딪혀 어쩔 줄 몰라 할 수밖에 없다. 이들은 마치 향수병에 걸린 사람들처럼 안정적인 동료집단과 과거의 경력을 아쉬워 한다.</p>
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section
        id="intro"
        ref={introRef}
        className="py-20 px-10 md:px-20 bg-gray-50 scroll-mt-32 md:scroll-mt-26"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-gray-950 text-center mb-10 tracking-tight">소개</h2>
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
            alt="Intro"
            className="w-full aspect-video object-cover rounded-lg mb-10"
          />
          <div className="text-gray-600 leading-loose text-sm md:text-base font-light break-keep space-y-4">
            <p>마침내 신이 말씀하실 때 그는 그 친구들이 가졌던 능력주의 가설을 부정함으로써, 욥성자를 관리하는 전인한 논리를 부정한다. 발생하는 모든 일이 사람의 행동을 대한 보상이나 벌이라는 생각이나 이어지는 것은 아니라고 전명한다.</p>
            <p>신앙적으로 다음의 세기가 전제가 발생하기만 해야 인하다: '신은 정의롭다.' '신은 전능하다.' '악은 존재한다.' 이 난제를 푸는 방법 하나는 인간의 자유의지를 인정하는 것이다. 이로써 악의 존재에 대한 책임은 신에게서 우리에게로 돌거간다. 만약 신이 어떤 규범을 세웠을 뿐 아니라 개인에게 그것을 따르거나 따르지 않을 자유를 부여했다면, 우리는 옳은 것 대신 잘못된 것을 선택한 대 대한 책임을 져야 한다.</p>
            <p>신앙적으로 다음의 세기가 전제가 발생하기만 해야 인하다: '신은 정의롭다.' '신은 전능하다.' '악은 존재한다.' 이 난제를 푸는 방법 하나는 인간의 자유의지를 인정하는 것이다. 이로써 악의 존재에 대한 책임은 신에게서 우리에게로 돌거간다. 만약 신이 어떤 규범을 세웠을 뿐 아니라 개인에게 그것을 따르거나 따르지 않을 자유를 부여했다면, 우리는 옳은</p>
          </div>
        </div>
      </section>

      {/* 조직도 */}
      <section
        id="organization"
        ref={organizationRef}
        className="py-20 px-10 md:px-20 bg-white scroll-mt-32 md:scroll-mt-26"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-950 mb-14 tracking-tight">조직도</h2>
          {/* 대표 1인 */}
          <div className="flex justify-center mb-10">
            <PersonCard />
          </div>
          {/* 하위 5인 */}
          <div className="flex justify-center gap-6 flex-wrap">
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
