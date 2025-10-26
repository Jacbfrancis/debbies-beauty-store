import CategoryHeader from "../components/CategoryHeader";
import CustomerAssurance from "../components/CustomerAssurance";
import ProductListing from "../components/ProductListing";
import QuickView from "../components/QuickView";
import SearchResults from "../components/SearchResults";
import { useQuickView } from "../store/useQuickViewStore";

function SearchResultsPage() {
  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);

  return (
    <>
      {isQuickViewOpen && <QuickView />}
      <SearchResults />
      <CustomerAssurance />
    </>
  );
}

export default SearchResultsPage;
