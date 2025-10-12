import BestSelling from "../components/BestSelling";
import FeaturedCategories from "../components/FeaturedCategories";
import CategoryCarousel from "../components/CategoryCarousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <CategoryCarousel />
      <BestSelling />
      <FeaturedCategories />
      <CategorySection />
    </div>
  );
}

export default Homepage;
