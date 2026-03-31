import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Main = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchLatestNotices = async () => {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('date', { ascending: false })
        .limit(4); // 상단 배치를 고려해 깔끔하게 4개로 조정
      if (!error) setNotices(data);
    };
    fetchLatestNotices();
  }, []);

  const slides = [
    {
      title: "과학기술인협동조합",
      desc: "기술창업, 기술사업화, 투자유치 등 국내 최고의 전문가들이 참여한 조합입니다.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      title: "창의적인 미래 선도",
      desc: "전문가들의 결집된 기술력으로 새로운 가치를 창출합니다.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. 히어로 슬라이더 (기존 유지) */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.img} alt="hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
              <div className="max-w-4xl px-6">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 animate-fadeInUp uppercase tracking-tighter">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
                  {slide.desc}
                </p>
                <div className="flex justify-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${currentSlide === 0 ? 'bg-white' : 'bg-white/30'}`}></div>
                  <div className={`w-2 h-2 rounded-full ${currentSlide === 1 ? 'bg-white' : 'bg-white/30'}`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

     

      {/* 3. 조합의 지난 활동 (기존 동일) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-black text-gray-950 tracking-tighter italic">조합의 지난 활동</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-500 leading-relaxed mb-10 font-light text-lg">
              ㄱㅅㄷ 과학기술인협동조합은 설립 이후 다양한 기술 컨설팅과 R&D 지원 사업을 통해 
              혁신적인 성과를 거두어 왔습니다. 우리는 단순한 기술 제공을 넘어 파트너사와 함께 성장하는 가치를 지향합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
              <div>
                <h4 className="font-bold text-[#1a4a9c] mb-2 uppercase text-xs tracking-widest">인적연결사업</h4>
                <p className="text-sm text-gray-500 leading-relaxed">분야별 최고의 전문가 네트워크를 통해 최적의 매칭 서비스를 제공합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#1a4a9c] mb-2 uppercase text-xs tracking-widest">기술자문사업</h4>
                <p className="text-sm text-gray-500 leading-relaxed">복잡한 기술적 난제를 해결하기 위한 전문적인 솔루션을 제안합니다.</p>
              </div>
            </div>
            <Link to="/about" className="inline-block px-8 py-3 bg-gray-900 text-white font-bold text-sm hover:bg-[#1a4a9c] transition-all rounded-none">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>
 {/* 2. News & Update (가운데 정렬 및 상단 배치) */}
      <section className="py-24 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-3 tracking-tight">News & Update</h2>
            <div className="w-8 h-1 bg-[#1a4a9c] mx-auto mb-4"></div>
            <p className="text-gray-500 font-light">조합의 최신 소식을 가장 먼저 확인하세요.</p>
          </div>

          <div className="bg-white shadow-sm border border-gray-100">
            {notices.length > 0 ? (
              notices.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/notice/${item.id}`)}
                  className="group p-6 md:p-8 border-b border-gray-50 hover:bg-gray-50 transition-all cursor-pointer text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      {item.important && (
                        <span className="bg-[#1a4a9c] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter">Important</span>
                      )}
                      <span className="text-gray-400 text-xs font-medium tracking-widest">{item.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#1a4a9c] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center text-gray-400 font-light italic">등록된 소식이 없습니다.</div>
            )}
            <Link 
              to="/notice" 
              className="block w-full py-5 text-sm font-black text-gray-400 hover:text-[#1a4a9c] hover:bg-gray-50 transition-all uppercase tracking-[0.2em]"
            >
              View All Notices
            </Link>
          </div>
        </div>
      </section>
      {/* 4. 조합활동 (직사각형 이미지) */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
              alt="activity" 
              className="rounded-none shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black text-gray-950 mb-8 tracking-tighter">조합활동</h2>
            <p className="text-gray-500 leading-relaxed text-lg font-light mb-10">
              우리는 단순한 영리 목적을 넘어, 과학기술인들의 권익을 보호하고 
              지역 사회의 기술적 난제를 해결하는 데 앞장서고 있습니다. 
              정기적인 세미나와 기술 교류회를 통해 지식을 공유하고 협력합니다.
            </p>
            <Link to="/gallery" className="inline-block px-10 py-4 bg-gray-900 text-white font-bold hover:bg-[#1a4a9c] transition-all rounded-none">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;