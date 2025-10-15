import BestSelling from "../components/BestSelling";
import FeaturedCategories from "../components/FeaturedCategories";
import CategoryCarousel from "../components/CategoryCarousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";
import { useProductCategory } from "../store/useProductCategoryStore";
import Banner from "../components/Banner";
import CustomerAssurance from "../components/CustomerAssurance";
import Footer from "../components/Footer";

function Homepage() {
  const makeup = useProductCategory((state) => state.makeup);
  const skincare = useProductCategory((state) => state.skincare);
  const haircare = useProductCategory((state) => state.haircare);

  return (
    <div>
      <Navbar />
      <Header />
      <CategoryCarousel />
      <BestSelling />
      <FeaturedCategories />
      <Banner />
      <CategorySection category={makeup} title={"Makeup"} />
      <CategorySection category={skincare} title={"Skincare"} />
      <CategorySection category={haircare} title={"Haircare"} />
      <CustomerAssurance />
      <Footer />
    </div>
  );
}

export default Homepage;
