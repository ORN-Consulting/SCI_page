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
        .limit(4);
      if (!error) setNotices(data);
    };
    fetchLatestNotices();
  }, []);

  const slides = [
    {
      title: "과학기술인협동조합",
      desc: "기술창업, 기술사업화, 투자유치 등 국내 최고의 전문가들이 참여한 조합입니다.",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070"
    },
    {
      title: "창의적인 미래 선도",
      desc: "전문가들의 결집된 기술력으로 새로운 가치를 창출합니다.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      title: "함께 성장하는 조합",
      desc: "조합원 모두가 상생하며 발전하는 미래를 만들어갑니다.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-white min-h-screen">
      
      {/* === 1. 히어로 슬라이더 === */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.img} alt="hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center px-16 md:px-28">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tighter">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed font-light">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* 슬라이드 도트 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-white' : 'bg-white/40'}`}></button>
          ))}
        </div>
        {/* 화살표 버튼 */}
        <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all z-20">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all z-20">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

      {/* === 2. 조합의 지난 활동 (도안 일치) === */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20 md:gap-32">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black text-gray-950 tracking-tighter italic">조합의 지난 활동</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 leading-[1.8] mb-12 font-light text-lg break-keep">
              소득 격차가 벌어짐에 따라 인생 실패에 대한 두려움도 커졌다. 거듭 헤어질지라도 다시 만나고 싶은 존재들. 영원 나타나지 말라고 깊숙이 매장한 공포들. 그 두 개가 하나로 이어져 있다는 것을 알기 위해 글을 씁니다. 완벽하게 끌려갈 수밖에 없는 꿈의 힘을 날마다 체험합니다. 지독한 잠꼬대 끝에 젖은 얼굴로 깨어나면 죽음의 얼굴을 마주하고 돌아온 기분. 그러던 어느 새벽, 저는 알았습니다. 나쁜 꿈이 저를 살리고 있었다는 것을요.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="font-black text-xl mb-4 text-gray-900">인적연결사업</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed font-light">연구개발특구내의 우수한 인적자원과 유,무형 과학기술자 산을 국내 및 해외산업, 교육 등의 과학기술 연결이 필요 한 곳으로 연결</p>
              </div>
              <div>
                <h4 className="font-black text-xl mb-4 text-gray-900">인적연결사업</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed font-light">연구개발특구내의 우수한 인적자원과 유,무형 과 학기술자산을 국내 및 해외산업, 교육 등의 과학 기술 연결이 필요한 곳으로 연결</p>
              </div>
            </div>
            <Link to="/about" className="inline-block px-12 py-3.5 text-gray-950 font-bold text-xs uppercase tracking-widest rounded-full border border-transparent hover:border-gray-950 transition-all">
              VIEW MORE
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* === 3. News & Update (카드 그리드 도안 일치) === */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)] px-6 bg-white flex items-center">
        <div className="max-w-[1440px] mx-auto w-full py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-4 tracking-tighter">News & Update</h2>
            <p className="text-gray-400 font-light tracking-widest text-sm">뉴스 및 새로운 소식을 전달합니다.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {notices.length > 0 ? (
              notices.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => navigate(`/notice/${item.id}`)}
                  className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img 
                    src={item.image_url || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070"} 
                    alt="news" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">Vision</h3>
                    <p className="text-[11px] opacity-60 font-light leading-relaxed">
                      {item.date}, {item.title.substring(0, 20)}...
                    </p>
                  </div>
                </div>
              ))
            ) : (
              [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800"
              ].map((img, i) => (
                <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-gray-200 cursor-pointer">
                  <img src={img} alt="news" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-xl font-black mb-1 uppercase tracking-tighter">Vision</h3>
                    <p className="text-[11px] opacity-60 font-light">3월, 주요사업 소개 및 최신 내용을 전달합니다.</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* === 4. 조합활동 (이미지 좌측 배치) === */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)] px-6 bg-gray-100 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full py-16 flex flex-col md:flex-row items-center gap-20 md:gap-32">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
              alt="activity" 
              className="w-full object-cover h-[500px] md:h-[600px] shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-10 tracking-tighter italic">조합활동</h2>
            <div className="text-gray-600 leading-[1.8] text-lg font-light mb-12 space-y-6 break-keep">
              <p>이런 상황에서 다수 노동자들이 한때 가졌던 직업은 저임금 노동자들의 나라로 아웃소싱되거나 로봇에 넘겨지고 있으며, 일을 빼앗긴 노동자들은 스스로를 다시 만들어내야 한다는 난제에 부딪혀 어쩔 줄 몰라 할 수밖에 없다.</p>
              <p>저임금 노동자들의 나라로 아웃소싱되거나 로봇에 넘겨지고 있으며, 일을 빼앗긴 노동자들은 다시 만들어내야만 한다는 난제에 부딪혀 어쩔 줄 몰라 할 수밖에 없다. 이들은 마치 향수병에 걸린 사람드러럼 안정적인 동료집단과 과거의 경력을 아쉬워 한다.</p>
            </div>
            <div className="flex gap-4">
              <Link to="/gallery" className="px-10 py-3.5 text-gray-950 font-bold text-xs uppercase tracking-widest rounded-full border border-transparent hover:border-gray-950 transition-all">
                VIEW MORE
              </Link>
              <Link to="/gallery" className="px-10 py-3.5 text-gray-950 font-bold text-xs uppercase tracking-widest rounded-full border border-transparent hover:border-gray-950 transition-all">
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Main;