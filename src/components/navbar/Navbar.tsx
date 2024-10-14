import Logo from '../../assets/Logo';
import NotLogged from '../../assets/NotLogged';

const Navbar = () => {
  return (
    <div className="bg-white w-full h-[100px] border-b-[3px] border-black flex justify-between px-5">
      <div className="w-full h-full flex justify-start items-center">
        <Logo className="h-[80%]"></Logo>
      </div>
      <div className="w-full h-full flex justify-end items-center space-x-8 font-[Jua] text-3xl">
        <button className="hover:underline">Projects</button>
        <button className="hover:underline">Timesheet</button>
        <button className="hover:underline">About</button>
        <NotLogged className="h-[80%] hover:cursor-pointer"></NotLogged>
      </div>
    </div>
  );
};

export default Navbar;
