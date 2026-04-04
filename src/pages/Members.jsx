
const Members = () => {
  const allMembers = [
    {
      id: 1,
      name: "이자현",
      role: "이사장",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=600&fit=crop&crop=face",
      career: [
        "가천대학교 대학원 회계세무학과 박사 (수료)",
        "인하대학교 대학원 기계공학 석사",
        "중소벤처기업부 비즈니스지원단 전문클리닉 위원",
        "(주)오픈손경영컨설팅 대표 컨설턴트",
      ],
      specialty: [
        "스타트업 재무분석 및 자금조달 실무",
        "중소기업 사업전환 컨설팅",
        "법인 학생 전략 컨설팅 / 중소기업 ESG 컨설팅",
      ],
    },
    {
      id: 2,
      name: "백종일",
      role: "컨설팅지원 단장",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop&crop=face",
      career: [
        "가천대학교 대학원 회계세무학과 박사 (수료)",
        "인하대학교 대학원 기계공학 석사",
        "중소벤처기업부 비즈니스지원단 전문클리닉 위원",
        "(주)오픈손경영컨설팅 대표 컨설턴트",
      ],
      specialty: [
        "스타트업 재무분석 및 자금조달 실무",
        "중소기업 사업전환 컨설팅",
        "법인 학생 전략 컨설팅 / 중소기업 ESG 컨설팅",
      ],
    },
    {
      id: 3,
      name: "여재호",
      role: "교육지원 단장",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=600&fit=crop&crop=face",
      career: [
        "가천대학교 대학원 회계세무학과 박사 (수료)",
        "인하대학교 대학원 기계공학 석사",
        "중소벤처기업부 비즈니스지원단 전문클리닉 위원",
        "(주)오픈손경영컨설팅 대표 컨설턴트",
      ],
      specialty: [
        "스타트업 재무분석 및 자금조달 실무",
        "중소기업 사업전환 컨설팅",
        "법인 학생 전략 컨설팅 / 중소기업 ESG 컨설팅",
      ],
    },
    {
      id: 4,
      name: "이동호",
      role: "기업혁신지원 단장",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop&crop=face",
      career: [
        "가천대학교 대학원 회계세무학과 박사 (수료)",
        "인하대학교 대학원 기계공학 석사",
        "중소벤처기업부 비즈니스지원단 전문클리닉 위원",
        "(주)오픈손경영컨설팅 대표 컨설턴트",
      ],
      specialty: [
        "스타트업 재무분석 및 자금조달 실무",
        "중소기업 사업전환 컨설팅",
        "법인 학생 전략 컨설팅 / 중소기업 ESG 컨설팅",
      ],
    },
    {
      id: 5,
      name: "임충일",
      role: "R&D기획지원 단장",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop&crop=face",
      career: [
        "가천대학교 대학원 회계세무학과 박사 (수료)",
        "인하대학교 대학원 기계공학 석사",
        "중소벤처기업부 비즈니스지원단 전문클리닉 위원",
        "(주)오픈손경영컨설팅 대표 컨설턴트",
      ],
      specialty: [
        "스타트업 재무분석 및 자금조달 실무",
        "중소기업 사업전환 컨설팅",
        "법인 학생 전략 컨설팅 / 중소기업 ESG 컨설팅",
      ],
    },
    {
      id: 6,
      name: "최여원",
      role: "시장진출지원 단장",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=600&fit=crop&crop=face",
      career: [
        "가천대학교 대학원 회계세무학과 박사 (수료)",
        "인하대학교 대학원 기계공학 석사",
        "중소벤처기업부 비즈니스지원단 전문클리닉 위원",
        "(주)오픈손경영컨설팅 대표 컨설턴트",
      ],
      specialty: [
        "스타트업 재무분석 및 자금조달 실무",
        "중소기업 사업전환 컨설팅",
        "법인 학생 전략 컨설팅 / 중소기업 ESG 컨설팅",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* 1. 히어로 섹션 */}
      <section className="relative h-[35vh] min-h-72 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070"
          alt="Members Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-[0.15em]">조합원 소개</h1>
        </div>
      </section>

      {/* 2. 섹션 타이틀 */}
      <section className="pt-24 pb-10 text-center px-10 md:px-20">
        <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-4 tracking-tight">함께하는 분</h2>
        <p className="text-gray-400 text-sm font-light tracking-widest">기사단의 멤버들을 소개합니다</p>
      </section>

      {/* 3. 멤버 카드 그리드 */}
      <section className="pb-32 px-10 md:px-20 max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {allMembers.map((member) => (
            <div key={member.id} className="flex flex-col">

              {/* 프로필 이미지 */}
              <div className="w-full aspect-3/4 bg-gray-300 overflow-hidden">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                )}
              </div>

              {/* 이름 | 직책 + 구분선 */}
              <div className="mt-6 pb-4 border-b border-gray-300">
                <h3 className="text-lg font-black text-gray-950 tracking-tight">
                  {member.name} &nbsp;｜&nbsp; {member.role}
                </h3>
              </div>

              {/* 경력 */}
              <ul className="mt-5 space-y-1.5">
                {member.career.map((line, i) => (
                  <li key={i} className="text-[13px] text-gray-600 font-light flex items-start gap-1.5">
                    <span className="mt-0.75 shrink-0">·</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {/* 전문분야 */}
              <div className="mt-6">
                <p className="text-[13px] font-bold text-gray-800 mb-2">[전문분야]</p>
                <ul className="space-y-1.5">
                  {member.specialty.map((s, i) => (
                    <li key={i} className="text-[13px] text-gray-600 font-light flex items-start gap-1.5">
                      <span className="mt-0.75 shrink-0">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Members;
