import CategoryHeader from "../components/CategoryHeader";
import CustomerAssurance from "../components/CustomerAssurance";
import ProductListing from "../components/ProductListing";
import QuickView from "../components/QuickView";
import { useQuickView } from "../store/useQuickViewStore";

function CategoriesPage() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);

  return (
    <>
      {isQuickViewOpen && <QuickView />}
      <CategoryHeader />
      <ProductListing />
      <CustomerAssurance />
    </>
  );
}

export default CategoriesPage;
