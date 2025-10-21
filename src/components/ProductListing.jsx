import { useProductCategory } from "../store/useProductCategoryStore";

function ProductListing() {
  const makeup = useProductCategory((state) => state.makeup);

  return <div></div>;
}

export default ProductListing;
