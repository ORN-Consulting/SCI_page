import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { hash } = useLocation();
  // 1. 현재 활성화된 탭 상태 (기본값: 인사말)
  const [activeTab, setActiveTab] = useState('greetings');

  // 2. 헤더의 해시 링크(#)와 연동
  useEffect(() => {
    if (hash) {
      const tab = hash.replace('#', '');
      if (['greetings', 'intro', 'organization'].includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, [hash]);

  // 사이드바 메뉴 구성
  const sideMenus = [
    { id: 'greetings', label: '인사말' },
    { id: 'intro', label: '소개' },
    { id: 'organization', label: '조직도' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 상단 히어로 섹션 (공통 유지) */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-3xl md:text-5xl font-black text-white tracking-[0.2em] uppercase">
          About Us
        </h1>
      </section>

      {/* 메인 콘텐츠 영역 (사이드바 + 내용) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[600px]">
        
        {/* === 왼쪽 사이드바 === */}
        <aside className="w-full md:w-64 flex-shrink-0 border-r border-gray-100 bg-gray-50/50">
          <nav className="flex flex-col">
            {sideMenus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveTab(menu.id)}
                className={`py-8 px-8 text-left text-sm font-black tracking-widest transition-all border-b border-gray-100 uppercase ${
                  activeTab === menu.id 
                  ? 'bg-[#1a4a9c] text-white' 
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {menu.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* === 오른쪽 콘텐츠 영역 (조건부 렌더링) === */}
        <main className="flex-grow p-10 md:p-20">
          
          {/* 1. 인사말 콘텐츠 */}
          {activeTab === 'greetings' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-black text-gray-950 mb-12 flex items-center">
                <span className="w-1.5 h-8 bg-[#1a4a9c] mr-4"></span>
                인사말
              </h2>
              <div className="text-gray-600 leading-[2.2] text-lg font-light break-keep space-y-8">
                <p>
                  「국가과학기술 경쟁력 강화를 위한 이공계지원 특별법」 제2조 제1항 및 동법 시행령 제2조 제1항에 의한 미공개 인력이 조합원으로 참여하여 과학기술 관련 서비스 등의 활동을 하기위해 「협동조합기본법」에 의해 설립된 협동 조합으로...
                </p>
                <p>
                  이런 상황에서 다수 노동자들이 한때 가졌던 직업은 거임공 노동들의 나라로 아웃소싱되거나 로봇에 넘겨지고 있으며, 일을 빼앗긴 노동자들은 스스로를 다시 만들어내야 한다는 난제에 부딪혀 어쩔 줄 몰라 할 수밖에 없다.
                </p>
                <div className="pt-10 text-right">
                  <p className="text-xl font-black text-gray-950">ㄱㅅㄷ 과학기술인협동조합 이사장 이자현</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. 소개 콘텐츠 */}
          {activeTab === 'intro' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-black text-gray-950 mb-12 flex items-center">
                <span className="w-1.5 h-8 bg-[#1a4a9c] mr-4"></span>
                소개
              </h2>
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
                    alt="Intro"
                    className="w-full h-full object-cover rounded-none shadow-xl"
                  />
                </div>
                <div className="lg:w-1/2 text-gray-600 leading-relaxed text-lg font-light space-y-6">
                  <p>
                    마침내 신이 말씀하실 때 그는 공과 그 친구들이 가졌던 능력주의 가슴을 부정함으로써, 희생자를 단죄하는 잔인한 논리를 부정한다. 발생하는 모든 일이 사람의 행동에 대한 포상이나 처벌로 이뤄지는 것은 아니라고 천명한다.
                  </p>
                  <p>
                    우리는 기술을 통해 사회적 가치를 실현하고, 분야별 전문가들의 지식을 결집하여 미래 지향적인 솔루션을 제안하는 최고의 파트너가 되고자 합니다.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. 조직도 콘텐츠 */}
          {activeTab === 'organization' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-black text-gray-950 mb-12 flex items-center">
                <span className="w-1.5 h-8 bg-[#1a4a9c] mr-4"></span>
                조직도
              </h2>
              <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center text-gray-400 font-light border border-dashed border-gray-300">
                <p>조직도 이미지를 이곳에 업로드하세요.</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default About;