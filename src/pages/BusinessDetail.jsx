import React, { useState } from 'react';

const subTabs = [
  '기술창업 및 사업화',
  '아이템 발굴과 사업성 분석',
  '기업경영진단',
  '정책자금 및 각종 인증지원',
  'R&D 종강기 전략 수립',
  '맞춤형 특강'
];

const BusinessDetail = () => {
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <div className="bg-white min-h-screen">

      {/* 히어로 배너 */}
      <section className="relative h-[35vh] min-h-72 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-[0.15em]">
          사업 분야 소개
        </h1>
      </section>

      {/* 탭 1: 사업 분야 소개 */}
      {(
        <section className="py-36 px-28 md:px-56">
          <div className="max-w-5xl mx-auto">

            {/* 서브 탭바 */}
            <div className="flex flex-wrap mb-14">
              {subTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSubTab(idx)}
                  className={`flex-1 min-w-fit px-4 pt-3 pb-4 text-[12px] md:text-[13px] font-medium transition-all whitespace-nowrap bg-white border-t-2 group ${
                    activeSubTab === idx
                      ? 'border-gray-950 text-gray-950'
                      : 'border-gray-300 text-gray-400 hover:border-gray-950 hover:text-gray-950'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 인용 카드 */}
            <div className="bg-gray-100 rounded-xl px-10 py-8 mb-14 text-center">
              <p className="text-gray-700 font-medium leading-relaxed text-base md:text-lg">
                내가 가진 기술을 가지고 사업을 하고 싶은데…<br />
                해도 되는 걸까? 성공 가능성이 얼마나 있는 걸까?
              </p>
            </div>

            {/* 본문 */}
            <div className="text-gray-700 leading-6 text-[14px] md:text-[15px] font-light break-keep space-y-6">
              <p>
                기술을 통한 창업은 기술 아이템에 대한 철저한 시장분석을 통하여 기술의 경제적 가치 창출 유무를 검증하고 시장진입 전략이 함께 수립되어야 보다 성공적인 기술창업이 이루어 질수 있습니다. 이러한 일련의 과정은 비즈니스 모델 수립 과정을 통한 철저한 사업 타당성 검증이 필요합니다. 그리고 비즈니스 모델을 통한 기술 창업 기업의 가치를 담아낼 수 있는 기술사업화 사업계획서의 작성이 무엇보다 중요합니다.
              </p>
              <p>
                채용경영컨설팅은 기술창업분야의 오랜 전문 인력을 통하여 업종별 기술창업과 사업화를 지원해 드립니다.
              </p>
              <p>
                많은 기업들이 끊임없는 기술 개발을 통하여 수 많은 자체 개발 기술을 보유하고 있고 대부분 독점적 권리확보를 위해 자사가 개발한 기술을 산업재산권의 출원 및 등록합니다.
              </p>
              <p>
                그런데, 특허를 많이 보유한 기업이라고 해서 반드시 기술력이 우수한 기업이라고 할 수는 없습니다. 진정한 기술이란, 제품화나 상품화에 응용 하여 부가적인 경제적 가치를 창출하거나, 생산 공정에 반영되어 수율을 향상시키는 등 평가를 결감하는 실질적 경제적 효과가 있어야 합니다.
              </p>
              <p>
                이러한 실효력을 가진 기술은 자사 내에서 직접 활용되어 경제적 가치를 발생시키기도 하지만, 기술의 이전, 매매, 기술 거래, 기술 담보권의 설정, 기술의 현물출자, 기업의 파산 등에 따른 기술자산의 평가 등에도 활용될 수 있으므로 기술자산에 대한 기술 가치평가는 매우 중요한 의미를 갖습니다.
              </p>
              <p>
                더욱이 최근들어 우리나라가 국제회계기준을 따르게 되면서 기업이 보유한 무형자산으로써 기술의 가치에 대한 평가는 더욱 중요시 되고 있습니다.
              </p>
              <p>
                재융 경영 컨설팅에서는 회사의 MA, 기술담보 제공 등 필요시 기업이 보유한 기술가치의 평가서를 KCVA(Korea Certified Valuation Analyst : 한국 기업·기술가치평가사)이 격격하고 객관적 평가를 통해 작성해 드립니다.
              </p>
              <p>
                또한, 기업이 독자적으로 개발한 기술을 사업화하고자 할 경우, 기술사업화에 대한 구체적 전략수립을 지원해 드립니다. 기술사업화 전략 수립은 해당 기업의 기술 유형에 따라 전문가와 TCC(Technology Commercialization Coordinator) 외 체계적인 컨설팅 활동을 통하여 이루어 집니다.
              </p>
            </div>

          </div>
        </section>
      )}


    </div>
  );
};

export default BusinessDetail;
