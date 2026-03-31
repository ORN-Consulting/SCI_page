import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Gallery = () => {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState('business');

  useEffect(() => {
    if (hash === '#lecture') {
      setActiveTab('lecture');
    } else {
      setActiveTab('business');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  // 1. 사업 분야 데이터 (이전 도안 기준)
  const businessData = [
    { id: 1, title: "이자현 | 이사장", career: ["가천대학교 박사(수료)", "비즈니스지원단 위원"], specialty: ["재무분석", "ESG 컨설팅"], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" },
    { id: 2, title: "백종일 | 단장", career: ["인하대학교 석사", "기업진단 전문위원"], specialty: ["자금조달", "사업전환"], image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000" }
  ];

  // 2. 컨설팅 & 강의 분야 데이터 (새 도안 image_128c78 기준)
  const lectureData = {
    topCards: [
      { id: 1, title: "커리큘럼 개발", desc: "현장 실무 중심의 기술 교육 커리큘럼을 설계하고 전문가 매칭을 지원합니다.", image: "https://images.unsplash.com/photo-1524178232363-1fb280714553?q=80&w=800" },
      { id: 2, title: "기술 가치 평가", desc: "특허 및 원천 기술에 대한 경제적 가치를 분석하여 사업화 전략을 제안합니다.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
      { id: 3, title: "기업 역량 강화", desc: "중소기업 및 스타트업의 조직 혁신과 비즈니스 고도화 강의를 수행합니다.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" }
    ],
    historyItems: [
      { id: 1, title: "기술 창업 교육 과정 운영", desc: "예비 창업자들을 대상으로 한 기술 기반 창업 실무 강의를 20회 이상 수행하였습니다.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
      { id: 2, title: "지자체 기술 자문 컨설팅", desc: "지역 특화 산업 발전을 위한 정책 자문 및 기술 도입 컨설팅 프로젝트를 완료했습니다.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" },
      { id: 3, title: "R&D 기획 및 전략 수립", desc: "정부 지원 사업 매칭 및 연구 개발 로드맵 수립을 통해 기업의 성장을 도왔습니다.", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=800" },
      { id: 4, title: "글로벌 시장 진출 강의", desc: "국내 기술의 해외 시장 판로 개척과 글로벌 네트워킹 전략 강의를 성료했습니다.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" },
      { id: 5, title: "대학 연계 기술 이전 세미나", desc: "대학 보유 미활용 기술의 민간 이전 촉진을 위한 기술 설명회 및 매칭을 주도했습니다.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" },
      { id: 6, title: "산업 트렌드 분석 리포트", desc: "4차 산업 혁명 주요 기술 트렌드 분석 및 기업 맞춤형 대응 전략 강의를 진행했습니다.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800" }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-4xl font-black text-white tracking-[0.2em] uppercase">과학기술인협동조합</h1>
      </section>

      {/* 블랙 서브 메뉴바 */}
      <nav className="sticky top-24 z-40 bg-black text-white">
        <div className="max-w-7xl mx-auto flex h-16">
          <button onClick={() => setActiveTab('business')} className={`flex-1 text-sm font-black tracking-widest ${activeTab === 'business' ? 'bg-[#1a4a9c]' : 'hover:bg-white/10'}`}>사업 분야 소개</button>
          <button onClick={() => setActiveTab('lecture')} className={`flex-1 text-sm font-black tracking-widest border-l border-white/10 ${activeTab === 'lecture' ? 'bg-[#1a4a9c]' : 'hover:bg-white/10'}`}>컨설팅 & 강의 분야</button>
        </div>
      </nav>

      {/* 콘텐츠 영역 */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        
        {/* === 탭 1: 사업 분야 소개 (이전과 동일) === */}
        {activeTab === 'business' && (
          <div className="animate-fadeIn space-y-32">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">사업 분야 소개</h2>
              <p className="text-gray-500 font-light italic">핵심 사업 영역을 소개합니다.</p>
            </div>
            {businessData.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-5/12 w-full aspect-square bg-gray-100"><img src={item.image} className="w-full h-full object-cover" /></div>
                <div className="md:w-7/12 w-full">
                  <h3 className="text-3xl font-black text-gray-950 border-b-2 border-gray-900 pb-6 mb-8">{item.title}</h3>
                  <ul className="text-gray-500 space-y-3 font-light mb-10">{item.career.map((c, i) => <li key={i}>· {c}</li>)}</ul>
                  <div className="bg-gray-50 p-8"><p className="text-xs font-black text-[#1a4a9c] mb-4 uppercase tracking-widest">[전문분야]</p><p className="text-gray-800 font-medium">{item.specialty.join(", ")}</p></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === 탭 2: 컨설팅 & 강의 분야 (도안 image_128c78 반영) === */}
        {activeTab === 'lecture' && (
          <div className="animate-fadeIn">
            {/* 대표 활동 소개 */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">대표 활동 소개</h2>
              <p className="text-gray-500 font-light italic">어떤 일을 하는지, 간략하게 요약하는 페이지</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
              {lectureData.topCards.map((card) => (
                <div key={card.id} className="group relative h-[400px] overflow-hidden">
                  <img src={card.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/70 p-10 flex flex-col justify-end">
                    <h4 className="text-white text-2xl font-black mb-4">{card.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 조합의 지난 활동 (기사단 히스토리) */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-950 mb-4 tracking-tight uppercase">조합의 지난 활동</h2>
              <p className="text-gray-500 font-light tracking-widest">기사단이 그동안 쌓은 히스토리</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
              {lectureData.historyItems.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-8">
                    <img src={item.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h4 className="text-xl font-black text-gray-950 mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">{item.desc}</p>
                  <button className="self-start px-6 py-2.5 bg-gray-950 text-white text-[11px] font-black tracking-widest uppercase hover:bg-[#1a4a9c] transition-all rounded-none">
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;