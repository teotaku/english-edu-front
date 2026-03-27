import { Link } from 'react-router-dom';
import logo from '../assets/login/Frame 393.png';
import bg from '../assets/login/bg.jpg';
import invisible from '../assets/login/ic_invisible_16.png';
import google from '../assets/login/Google.png';
import naver from '../assets/login/Naver.png';
import kakao from '../assets/login/Kakao.png';
import { useState } from 'react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* 왼쪽 */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-[50vh] md:min-h-full pb-10 md:pb-0">
        <img className="w-80 object-contain" src={logo} />
      </div>

      {/* 오른쪽 */}
      {/* 가운데 정렬을 위한 div */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        {/* 인풋창 전체 div */}
        <div className="w-full max-w-[400px] min-h-[500px]  md:min-h-[600px] bg-white p-8 rounded-2xl shadow-lg border border-green-400">
          <h2 className="text-xl font-bold mb-6">Login</h2>
          <p className="text-sm mb-1">이메일</p>
          {/* 이메일 인풋창 */}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            type="email"
            placeholder="이메일주소를 입력해주세요."
            className="w-full h-10 px-3 border border-gray-300 rounded-xl mb-4"
          />

          <p className="text-sm mb-1">비밀번호</p>
          {/* 눈모양 이모티콘의 기준점을 위한 relativ */}
          <div className="relative mb-1">
            {/* 비밀번호 인풋창 */}
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-full h-10 px-3 border border-gray-300 rounded-xl "
            />

            {error && (
              <p className="text-red-500 text-sm mt-2">아이디 또는 비밀번호를 입력해주세요!</p>
            )}

            {/* 로그인 버튼 */}
            <div className="flex justify-center">
              <button
                onClick={handleLogin}
                className="h-10 w-56 px-12 border border-gray-400 rounded-2xl mt-6 mb-5"
              >
                Login
              </button>
            </div>
            {/* 눈 아이콘 자리 */}
            <img className="absolute right-3 top-3" src={invisible} />
          </div>

          {/* 회원가입과 비밀번호찾기 */}
          <div className="flex justify-between px-16 text-xs text-gray-400">
            <Link to="/">
              <p className="text-black">회원가입</p>
            </Link>
            <Link to="/">
              <p className="text-black">비밀번호 찾기</p>
            </Link>
          </div>
          {/* 간편 로그인 줄, 텍스트 */}
          <div className="flex items-center justify-center my-4">
            <div className="w-12 h-px bg-black" />

            <p className="mx-3 text-xs ">SNS 간편 로그인</p>

            <div className="w-12 h-px bg-black" />
          </div>
          {/* 간편 로그인 아이콘 별 */}
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <img src={google} />
            </Link>
            <Link to="/">
              <img src={naver} />
            </Link>
            <Link to="/">
              <img src={kakao} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
