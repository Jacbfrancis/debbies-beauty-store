function Navmenu() {
  return (
    <div className="w-full h-[90vh] lg:hidden">
      <ul className="flex flex-col gap-5 px-6 py-7">
        <li className="flex justify-between items-center">
          Makeup <span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li className="flex justify-between items-center">
          Skin Care<span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li className="flex justify-between items-center">
          Bath & Body
          <span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li className="flex justify-between items-center">
          Hair Care
          <span className="text-[1.4rem]">&#8964;</span>
        </li>
        <li>Fragrance</li>
        <hr />
        <li>Create Account</li>
        <li>Sign in</li>
        <li>FAQs</li>
      </ul>
    </div>
  );
}

export default Navmenu;
