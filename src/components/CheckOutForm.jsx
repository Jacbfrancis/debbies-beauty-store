function CheckOutForm() {
  return (
    <div className="px-6 py-10 lg:px-20">
      <form className="flex flex-col gap-7 justify-center">
        <div>
          <label className="text-[1.2rem] mb-2.5 block font-semibold">
            Contact
          </label>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="tel"
            placeholder="Phone number"
          />
        </div>

        <div className="">
          <p className="text-[1.2rem] font-semibold mb-2.5">Delivery</p>
          <label className="border-1 border-slate-400 px-4 py-3 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <input className="" type="radio" name="ship" value="ship" />{" "}
              <p className="ml-5">Ship</p>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin-house-icon lucide-map-pin-house"
              >
                <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                <path d="M18 22v-3" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            </span>
          </label>
        </div>

        <div className="border-1 border-slate-400 px-4 py-1 w-full rounded">
          <p className="text-slate-500 text-[0.8rem]">Country/Region</p>
          <select className="w-full focus:outline-none focus:ring-0">
            <option value={"Nigeria"}>Nigeria</option>
          </select>
        </div>

        <div>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="text"
            placeholder="Address"
          />
        </div>

        <div>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>

        <div className="border-1 border-slate-400 px-4 py-1 w-full rounded">
          <p className="text-slate-500 text-[0.8rem]">State</p>
          <select className="w-full focus:outline-none focus:ring-0">
            <option value={""}>Select your state</option>
            <option value={"Abia"}>Abia</option>
            <option value={"Adamawa"}>Adamawa</option>
            <option value={"Akwa Ibom"}>Akwa Ibom</option>
            <option value={"Anambra"}>Anambra</option>
            <option value={"Bauchi"}>Bauchi</option>
            <option value={"Bayelsa"}>Bayelsa</option>
            <option value={"Benue"}>Benue</option>
            <option value={"Borno"}>Borno</option>
            <option value={"Cross River"}>Cross River</option>
            <option value={"Delta"}>Delta</option>
            <option value={"Ebonyi"}>Ebonyi</option>
            <option value={"Edo"}>Edo</option>
            <option value={"Ekiti"}>Ekiti</option>
            <option value={"Enugu"}>Enugu</option>
            <option value={"FCT"}>FCT (Abuja)</option>
            <option value={"Gombe"}>Gombe</option>
            <option value={"Imo"}>Imo</option>
            <option value={"Jigawa"}>Jigawa</option>
            <option value={"Kaduna"}>Kaduna</option>
            <option value={"Kano"}>Kano</option>
            <option value={"Katsina"}>Katsina</option>
            <option value={"Kebbi"}>Kebbi</option>
            <option value={"Kogi"}>Kogi</option>
            <option value={"Kwara"}>Kwara</option>
            <option value={"Lagos"}>Lagos</option>
            <option value={"Nasarawa"}>Nasarawa</option>
            <option value={"Niger"}>Niger</option>
            <option value={"Ogun"}>Ogun</option>
            <option value={"Ondo"}>Ondo</option>
            <option value={"Osun"}>Osun</option>
            <option value={"Oyo"}>Oyo</option>
            <option value={"Plateau"}>Plateau</option>
            <option value={"Rivers"}>Rivers</option>
            <option value={"Sokoto"}>Sokoto</option>
            <option value={"Taraba"}>Taraba</option>
            <option value={"Yobe"}>Yobe</option>
            <option value={"Zamfara"}>Zamfara</option>{" "}
          </select>
        </div>

        <div>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="text"
            placeholder="City"
          />
        </div>

        <div>
          <input
            className="border-1 border-slate-400 px-4 py-3 w-full rounded"
            type="text"
            placeholder="Phone"
          />
        </div>
      </form>
    </div>
  );
}

export default CheckOutForm;
