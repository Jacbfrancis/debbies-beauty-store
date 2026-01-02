function Footer() {
  return (
    <div className="bg-[#e94a6d] text-[#fff] px-12 py-13 lg:px-20 lg:py-20">
      <div className="text-center flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:text-left">
        <span className="w-[40%] lg:w-[12%] mb-6 block">
          <img className="w-full" src="/images/logo2.png" />
        </span>

        <div className="mb-8 lg:w-[45%]">
          <h3 className="font-bold mb-2">Get in Touch with Us</h3>
          <p className="text-[#f0f0f0] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            reiciendis officiis sunt ipsum commodi aperiam maxime.
            Exercitationem neque numquam inventore, quam est a qui illum. Omnis
            corporis illo nesciunt pariatur!
          </p>
        </div>

        <div className="mb-8 lg:w-[8%]">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="text-[#f0f0f0]">
            <li>Home</li>
            <li>All Products</li>
            <li>About</li>
          </ul>
        </div>

        <div className="mb-8 lg:w-[20%]">
          <h3 className="font-bold mb-2">Customer Support</h3>
          <ul className="text-[#f0f0f0]">
            <li>myemail@gmail.com</li>
            <li>Phone/WhatsApp: +234 12345678</li>
          </ul>
        </div>
      </div>

      <div className="font-bold flex justify-center items-center gap-10 mt-8 mb-2 lg:justify-end">
        <h3>Refund Policy</h3>
        <h3>Privacy Policy</h3>
      </div>
      <hr />
      <span className="text-center block mt-4 justify-between items-center lg:text-left lg:flex">
        <p>All Right Reserved © 2026 DebbiesBeautyStore</p>
        <p>Terms of Service</p>
      </span>
    </div>
  );
}

export default Footer;
