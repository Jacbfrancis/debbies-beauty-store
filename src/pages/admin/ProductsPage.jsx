import { Link } from "react-router-dom";
import AdminProductCard from "../../components/admin/AdminProductCard";
import { useProducts } from "../../store/useProductsStore";
import { useState } from "react";

export default function ProductsPage() {
  const products = useProducts((state) => state.products);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className="px-6 pb-12 md:w-[75%]">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-[1.3rem] font-bold">Products</h2>

        <span className="text-[#4e4e4e] text-[0.9rem] font-light flex justify-center items-center gap-2">
          <p>
            <Link to={"/admin/dashboard"}>Admin</Link>
          </p>{" "}
          {">"}{" "}
          <p>
            <Link to={"/admin/products"}>Products</Link>
          </p>
        </span>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between items-start gap-5">
          <span className="block">
            <h2 className="text-xl font-bold text-gray-900">Products</h2>
            <p className="text-sm text-gray-500 mt-1">
              Add and edit your products.
            </p>
          </span>

          <span className="bg-[#e94a6d] rounded-xl px-3 py-2 hidden md:block">
            <button className="text-white">+ Add Product</button>
          </span>
        </div>

        <span className="bg-[#e94a6d] text-center w-[45%] mx-auto mt-7 rounded-xl px-2 py-3 block md:hidden">
          <button className="text-white">+ Add Product</button>
        </span>

        <div className="grid grid-cols-2 gap-7 mt-10 lg:px-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseOver={() => setCurrentIndex(index)}
              onMouseOut={() => setCurrentIndex(null)}
            >
              <AdminProductCard
                product={product}
                index={index}
                currentIndex={currentIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
