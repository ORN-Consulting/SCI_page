import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return alert(error.message);

    if (data.user) {
      await supabase.from("profiles").insert([
        { id: data.user.id, full_name: name, organization: org }
      ]);
      alert("회원가입 성공! 이메일을 확인해주세요.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">

        <h2 className="text-3xl font-black text-gray-950 text-center tracking-tight mb-16">회원가입</h2>

        <form onSubmit={handleSignup} className="space-y-8">
          {/* 성명 */}
          <div className="border-b border-gray-300 pb-2">
            <input
              type="text"
              placeholder="성명"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          {/* 소속 */}
          <div className="border-b border-gray-300 pb-2">
            <input
              type="text"
              placeholder="소속 (기관/회사)"
              onChange={(e) => setOrg(e.target.value)}
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          {/* 이메일 */}
          <div className="border-b border-gray-300 pb-2">
            <input
              type="email"
              placeholder="이메일 (ID)"
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
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          {/* 가입 버튼 */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-black text-sm tracking-widest py-4 transition-colors"
          >
            가입하기
          </button>

          {/* 로그인 링크 */}
          <div className="text-right">
            <Link to="/login" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
              로그인
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
