import { products } from "../ProductsArray";
import BestSelling from "../components/BestSelling";
import FeaturedCategories from "../components/FeaturedCategories";
import CategoryCarousel from "../components/CategoryCarousel";
import Header from "../components/Header";
import CategorySection from "../components/CategorySection";
import Banner from "../components/Banner";
import QuickView from "../components/QuickView";
import { useQuickView } from "../store/useQuickViewStore";
import CustomerAssurance from "../components/CustomerAssurance";

function Homepage() {
  const makeup = products.filter((product) => product.category === "Makeup");
  const skincare = products.filter(
    (product) => product.category === "Skincare (Face)"
  );
  const haircare = products.filter(
    (product) => product.category === "Hair Care"
  );

  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);
  return (
    <>
      {isQuickViewOpen && <QuickView />}
      <Header />
      <CategoryCarousel />
      <BestSelling />
      <FeaturedCategories />
      <Banner />
      <CategorySection category={makeup} title={"Makeup"} />
      <CategorySection category={skincare} title={"Skincare (Face)"} />
      <CategorySection category={haircare} title={"Hair Care"} />
      <CustomerAssurance />
    </>
  );
}

export default Homepage;
