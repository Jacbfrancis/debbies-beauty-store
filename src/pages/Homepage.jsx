import BestSelling from "../components/BestSelling";
import FeaturedCategories from "../components/FeaturedCategories";
import CategoryCarousel from "../components/CategoryCarousel";
import Header from "../components/Header";
import CategorySection from "../components/CategorySection";
import { useProductCategory } from "../store/useProductCategoryStore";
import Banner from "../components/Banner";
import QuickView from "../components/QuickView";
import { useQuickView } from "../store/useQuickViewStore";

function Homepage() {
  const makeup = useProductCategory((state) => state.makeup);
  const skincare = useProductCategory((state) => state.skincare);
  const haircare = useProductCategory((state) => state.haircare);

  const isQuickViewOpen = useQuickView((state) => state.isQuickViewOpen);
  return (
    <div>
      {isQuickViewOpen && <QuickView />}
      <Header />
      <CategoryCarousel />
      <BestSelling />
      <FeaturedCategories />
      <Banner />
      <CategorySection category={makeup} title={"Makeup"} />
      <CategorySection category={skincare} title={"Skincare"} />
      <CategorySection category={haircare} title={"Haircare"} />
    </div>
  );
}

export default Homepage;
