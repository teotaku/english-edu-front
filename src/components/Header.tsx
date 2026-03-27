import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#11734A] px-[48px] py-[10px] flex items-center justify-between h-[60px]">
      <div className="text-[24px] font-[Outfit] font-semibold">
        <span>news</span>
        <span className="text-[#DFFFEA]">pepper</span>
      </div>
      <button
        onClick={() => navigate('/login')}
        className="bg-white w-[106px] h-[40px] rounded-[20px] text-sm flex items-center justify-center border
      font-normal text-[#444444] border-[#A0A0A0]"
      >
        Login
      </button>
    </div>
  );
}
