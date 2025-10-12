import { useProductCategory } from "../store/useProductCategoryStore";

function CategorySection() {
  const makeup = useProductCategory((state) => state.makeup);
  console.log(makeup);

  return (
    <div className="mt-14 pb-90 px-6 lg:px-20">
      <h1 className="text-center text-[1.8rem] mt-8 mb-5 lg:text-[2.2rem]">
        Makeup
      </h1>
      <div className="hidden justify-end items-center mb-8 lg:flex">
        <button className="text-center font-semibold w-[5.5rem] border-1 rounded-4xl px-3 py-1 cursor-pointer hover:bg-black hover:text-white">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:justify-start lg:items-start">
        {makeup.slice(0, 4).map((product) => (
          <div key={product.id}>
            <div className="text-center py-4 px-3 lg:[19rem]">
              <span className="bg-[#f0f0f0] block rounded-xl">
                <img src={product.productImage} alt="" />
              </span>
              <div className="mx-auto my-4">
                <p>{product.productName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center lg:hidden">
        <button className="text-center font-semibold w-[5.5rem] border-1 rounded-4xl px-3 py-1 cursor-pointer hover:bg-black hover:text-white">
          View all
        </button>
      </div>
    </div>
  );
}

export default CategorySection;
