function Header() {
  return (
    <div className="bg-[url(/images/banner1.webp)] bg-center bg-cover flex justify-start items-center">
      <div className="w-[70%] px-6 py-7 h-[16rem] lg:px-20 lg:h-[75vh] lg:w-[50%] lg:py-30">
        <h2 className="text-[1.4rem] text-left font-bold lg:text-[3.3rem]">
          Transform Your Look. Explore Limitless Possibilities.
        </h2>
        <button className="border-1 px-5 py-2 mt-5 cursor-pointer hover:border-2 lg:mt-8 lg:px-7">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Header;
