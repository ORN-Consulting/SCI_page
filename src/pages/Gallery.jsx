import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

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

  const businessTopCards = [
    { id: 1, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800' },
    { id: 2, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세.', image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=800' },
    { id: 3, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세.', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800' },
  ];

  const businessHistoryItems = [
    { id: 1, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세. 남 씩 소나무 철갑을 두른 도 바람서리 불변함은 우리 기상일세 무궁화 성천의 화려강산 대한 사람 대한으로 길이 보전하세.' },
    { id: 2, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세. 남 씩 소나무 철갑을 두른 도 바람서리 불변함은 우리 기상일세 무궁화 성천의 화려강산 대한 사람 대한으로 길이 보전하세.' },
    { id: 3, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세. 남 씩 소나무 철갑을 두른 도 바람서리 불변함은 우리 기상일세 무궁화 성천의 화려강산 대한 사람 대한으로 길이 보전하세.' },
    { id: 4, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세. 남 씩 소나무 철갑을 두른 도 바람서리 불변함은 우리 기상일세 무궁화 성천의 화려강산 대한 사람 대한으로 길이 보전하세.' },
    { id: 5, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세. 남 씩 소나무 철갑을 두른 도 바람서리 불변함은 우리 기상일세 무궁화 성천의 화려강산 대한 사람 대한으로 길이 보전하세.' },
    { id: 6, title: '이자현 | 이사장', desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세. 남 씩 소나무 철갑을 두른 도 바람서리 불변함은 우리 기상일세 무궁화 성천의 화려강산 대한 사람 대한으로 길이 보전하세.' },
  ];

  const lectureItems = [
    {
      id: 1,
      category: '기술창업 및 사업화',
      title: '창업 성공의 핵심 요인,\n철저한 사업 타당성 분석에서 시작.',
      desc1: '기술을 통한 창업은 기술 아이템에 대한 철저한 시장분석을 통하여 기술의 경제적 가치 창출 유무를 검증하고 사장진입 전략과 함께 수립되어야 보다 성공적인 기술창업이 이루어 질수 있습니다.',
      desc2: '이러한 일련의 과정은 비즈니스 모델 수립 과정을 통한 철저한 사업 타당성 검증이 필요합니다. 그리고 비즈니스 모델을 통한 기술 창업 가치를 담아낼 수 있는 기술 사업화 사업계획서의 작성이 무엇보다 중요합니다. 재율경영컨설팅은 기술창업분야의 오랜 전문 인력을 통하여 업종별 기술창업과 사업화를 지원해 드립니다.',
    },
    {
      id: 2,
      category: '기술창업 및 사업화',
      title: '창업 성공의 핵심 요인,\n철저한 사업 타당성 분석에서 시작.',
      desc1: '기술을 통한 창업은 기술 아이템에 대한 철저한 시장분석을 통하여 기술의 경제적 가치 창출 유무를 검증하고 사장진입 전략과 함께 수립되어야 보다 성공적인 기술창업이 이루어 질수 있습니다.',
      desc2: '이러한 일련의 과정은 비즈니스 모델 수립 과정을 통한 철저한 사업 타당성 검증이 필요합니다. 그리고 비즈니스 모델을 통한 기술 창업 가치를 담아낼 수 있는 기술 사업화 사업계획서의 작성이 무엇보다 중요합니다. 재율경영컨설팅은 기술창업분야의 오랜 전문 인력을 통하여 업종별 기술창업과 사업화를 지원해 드립니다.',
    },
    {
      id: 3,
      category: '기술창업 및 사업화',
      title: '창업 성공의 핵심 요인,\n철저한 사업 타당성 분석에서 시작.',
      desc1: '기술을 통한 창업은 기술 아이템에 대한 철저한 시장분석을 통하여 기술의 경제적 가치 창출 유무를 검증하고 사장진입 전략과 함께 수립되어야 보다 성공적인 기술창업이 이루어 질수 있습니다.',
      desc2: '이러한 일련의 과정은 비즈니스 모델 수립 과정을 통한 철저한 사업 타당성 검증이 필요합니다. 그리고 비즈니스 모델을 통한 기술 창업 가치를 담아낼 수 있는 기술 사업화 사업계획서의 작성이 무엇보다 중요합니다. 재율경영컨설팅은 기술창업분야의 오랜 전문 인력을 통하여 업종별 기술창업과 사업화를 지원해 드립니다.',
    },
    {
      id: 4,
      category: '기술창업 및 사업화',
      title: '창업 성공의 핵심 요인,\n철저한 사업 타당성 분석에서 시작.',
      desc1: '기술을 통한 창업은 기술 아이템에 대한 철저한 시장분석을 통하여 기술의 경제적 가치 창출 유무를 검증하고 사장진입 전략과 함께 수립되어야 보다 성공적인 기술창업이 이루어 질수 있습니다.',
      desc2: '이러한 일련의 과정은 비즈니스 모델 수립 과정을 통한 철저한 사업 타당성 검증이 필요합니다. 그리고 비즈니스 모델을 통한 기술 창업 가치를 담아낼 수 있는 기술 사업화 사업계획서의 작성이 무엇보다 중요합니다. 재율경영컨설팅은 기술창업분야의 오랜 전문 인력을 통하여 업종별 기술창업과 사업화를 지원해 드립니다.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* 히어로 섹션 — Members와 동일 */}
      <section className="relative h-[45vh] min-h-80 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070"
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-[0.15em]">과학기술인협동조합</h1>
      </section>

      {/* 탭 네비게이션 */}
      <nav className="bg-black text-white border-b border-white/10 h-16">
        <div className="max-w-360 mx-auto flex h-full items-stretch">
          <button
            onClick={() => setActiveTab('business')}
            className={`flex-1 h-full flex items-center justify-center text-[13px] md:text-[14px] font-black transition-all bg-black ${
              activeTab === 'business' ? 'text-white border-b-2 border-white' : 'text-white/30 hover:text-white/60'
            }`}
          >
            사업 분야 소개
          </button>
          <button
            onClick={() => setActiveTab('lecture')}
            className={`flex-1 h-full flex items-center justify-center text-[13px] md:text-[14px] font-black transition-all bg-black ${
              activeTab === 'lecture' ? 'text-white border-b-2 border-white' : 'text-white/30 hover:text-white/60'
            }`}
          >
            컨설팅 & 강의 분야 소개
          </button>
        </div>
      </nav>

      {/* 콘텐츠 */}
      <section className="py-20 px-10 md:px-20">
        <div className="max-w-5xl mx-auto">

        {/* === 탭 1: 사업 분야 소개 === */}
        {activeTab === 'lecture' && (
          <div>
            {/* 대표 활동 소개 */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-3 tracking-tight">대표 활동 소개</h2>
              <p className="text-gray-400 text-sm font-light">어떤 일을 하는지, 간략하게 요약하는 페이지</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-28">
              {businessTopCards.map((card) => (
                <div key={card.id} className="group overflow-hidden aspect-4/3 cursor-pointer">
                  <div className="flex flex-col h-[200%] transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                    {/* 기본: 이미지 + 하단 그라디언트 + 텍스트 */}
                    <div className="h-1/2 shrink-0 relative overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-7">
                        <h4 className="text-white text-base font-black mb-2">{card.title}</h4>
                        <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-2">{card.desc}</p>
                      </div>
                    </div>
                    {/* 호버: 검은 배경 + 전체 텍스트 */}
                    <div className="h-1/2 bg-gray-950 shrink-0 flex flex-col justify-center px-7">
                      <h4 className="text-white text-base font-black mb-3">{card.title}</h4>
                      <p className="text-white/60 text-xs font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 mb-28" />

            {/* 조합의 지난 활동 */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-3 tracking-tight">조합의 지난 활동</h2>
              <p className="text-gray-400 text-sm font-light tracking-widest">기사단이 그동안 쌓은 히스토리</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
              {businessHistoryItems.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="aspect-4/3 bg-gray-300 mb-5" />
                  <h4 className="text-base font-black text-gray-950 mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-[13px] font-light leading-6 mb-6">{item.desc}</p>
                  <button className="self-start px-6 py-2.5 text-gray-950 text-xs font-bold tracking-widest uppercase rounded-full border border-gray-950 hover:bg-gray-950 hover:text-white transition-all">
                    VIEW MORE
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === 탭 2: 조합 활동 === */}
        {activeTab === 'business' && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-3 tracking-tight">사업 분야 소개</h2>
              <p className="text-gray-400 text-sm font-light">어떤 일을 하는지, 간략하게 요약하는 페이지</p>
            </div>

            <div className="space-y-8">
              {lectureItems.map((item) => (
                <div key={item.id} className="rounded-2xl border border-gray-200 p-10 md:p-14">
                  <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    <div className="md:w-2/5 shrink-0">
                      <p className="text-xs text-gray-400 font-light mb-4 tracking-widest">{item.category}</p>
                      <hr className="border-gray-300 mb-6" />
                      <h3 className="text-xl md:text-2xl font-black text-gray-950 leading-snug whitespace-pre-line">{item.title}</h3>
                    </div>
                    <div className="md:w-3/5">
                      <p className="text-[14px] text-gray-500 font-light leading-6 mb-5 break-keep">{item.desc1}</p>
                      <p className="text-[14px] text-gray-500 font-light leading-6 mb-10 break-keep">{item.desc2}</p>
                      <Link to="/business" className="inline-block px-8 py-3 text-gray-950 text-xs font-bold tracking-widest uppercase rounded-full border border-gray-950 hover:bg-gray-950 hover:text-white transition-all">
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        </div>
      </section>
    </div>
  );
};

export default Gallery;
