import React, { useState } from 'react';

const Members = () => {
  const [expandedMembers, setExpandedMembers] = useState({});

  const toggleExpand = (id) => {
    setExpandedMembers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allMembers = [
    {
      id: 1,
      name: "이자현",
      role: "이사장",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
      career: ["가천대학교 박사(수료)", "아주대학교 석사", "(주)브이에스 경영컨설팅 대표"],
      specialty: ["재무분석", "ESG 컨설팅"]
    },
    {
      id: 2,
      name: "백종일",
      role: "컨설팅지원 단장",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      career: ["가천대학교 박사(수료)", "인하대학교 석사", "비즈니스지원단 전문위원"],
      specialty: ["자금조달", "사업전환"]
    },
    {
      id: 3,
      name: "여재호",
      role: "교육지원 단장",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
      career: ["가천대학교 박사(수료)", "인하대학교 석사", "비즈니스지원단 전문위원"],
      specialty: ["교육 기획", "기술 자문"]
    },
    {
      id: 4,
      name: "이동호",
      role: "기업혁신지원 단장",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
      career: ["가천대학교 박사 과정", "기업 혁신 전략 전문가"],
      specialty: ["경영 혁신", "프로세스 개선"]
    },
    {
      id: 5,
      name: "임충일",
      role: "R&D기획지원 단장",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
      career: ["가천대학교 박사(수료)", "인하대학교 석사", "연구소 설립 자문"],
      specialty: ["R&D 전략", "국책과제 지원"]
    },
    {
      id: 6,
      name: "최여원",
      role: "시장진출지원 단장",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
      career: ["가천대학교 박사(수료)", "진하대학교 석사", "마케팅 전략 전문가"],
      specialty: ["글로벌 진출", "시장 조사"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. 히어로 섹션 */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
          alt="Members Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-[0.2em] mb-4 uppercase">함께하는 분</h1>
          <p className="text-white/70 font-light tracking-widest uppercase text-sm">Professional Members</p>
        </div>
      </section>

      {/* 2. 멤버 리스트 섹션 */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-black text-gray-950 mb-4 tracking-tighter italic">기사단의 멤버들을 소개합니다</h2>
          <div className="w-12 h-1 bg-[#1a4a9c] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {allMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              {/* 프로필 이미지 (테두리 제거, 호버 액션 제거, 컬러 유지) */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" // grayscale 및 hover 애니메이션 삭제
                />
              </div>

              {/* 정보 영역 */}
              <div className="mt-10">
                <div className="flex items-end justify-between border-b-2 border-gray-900 pb-4 mb-6">
                  <h3 className="text-2xl font-black text-gray-950">{member.name}</h3>
                  <span className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-tighter">{member.role}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {member.career.map((line, i) => (
                    <li key={i} className="text-[14px] text-gray-500 font-light flex items-start">
                      <span className="text-[#1a4a9c] mr-2">▪</span> {line}
                    </li>
                  ))}
                </ul>

                {/* 전문분야 */}
                <div className="bg-gray-50 p-6">
                  <p className="text-[11px] font-black text-[#1a4a9c] uppercase tracking-[0.2em] mb-3">Specialty</p>
                  <div className="flex flex-wrap gap-2 leading-relaxed">
                    {member.specialty.map((s, i) => (
                      <span key={i} className="text-[14px] text-gray-800 font-medium">
                        {s}{i !== member.specialty.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 상세 정보 버튼 (클릭 인터랙션만 유지) */}
                <button 
                  onClick={() => toggleExpand(member.id)}
                  className="mt-6 flex items-center text-[11px] font-black text-gray-400 hover:text-[#1a4a9c] transition-colors tracking-widest uppercase"
                >
                  {expandedMembers[member.id] ? '▲ Close' : '▼ More Info'}
                </button>
                
                {expandedMembers[member.id] && (
                  <div className="mt-4 p-5 border border-gray-100 text-[13px] text-gray-400 leading-relaxed bg-white">
                    해당 위원의 상세 프로젝트 수행 이력 및 주요 컨설팅 실적은 사무국을 통해 확인하실 수 있습니다.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;