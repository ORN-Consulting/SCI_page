import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else {
      alert("로그인 성공!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">

        <h2 className="text-3xl font-black text-gray-950 text-center tracking-tight mb-16">로그인</h2>

        <form onSubmit={handleLogin} className="space-y-8">
          {/* 아이디 */}
          <div className="border-b border-gray-300 pb-2">
            <input
              type="email"
              placeholder="아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          {/* 비밀번호 */}
          <div className="border-b border-gray-300 pb-2">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          {/* 로그인 유지 */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setRemember(!remember)}
              className={`w-10 h-5 rounded-full transition-colors duration-200 relative shrink-0 ${remember ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              <span
                className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
                style={{ left: remember ? '18px' : '2px' }}
              />
            </button>
            <span className="text-sm text-gray-500">로그인 유지</span>
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-black text-sm tracking-widest py-4 transition-colors"
          >
            로그인
          </button>

          {/* 회원가입 / 비밀번호 찾기 */}
          <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
            <Link to="/signup" className="hover:text-gray-700 transition-colors">
              회원가입
            </Link>
            <span className="opacity-30">|</span>
            <button type="button" className="hover:text-gray-700 transition-colors">
              비밀번호 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
