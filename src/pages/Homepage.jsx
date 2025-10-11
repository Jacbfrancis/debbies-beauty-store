import BestSelling from "../components/BestSelling";
import FeaturedCategories from "../components/FeaturedCategories";
import CategoryCarousel from "../components/CategoryCarousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <CategoryCarousel />
      <BestSelling />
      <FeaturedCategories />
    </div>
  );
}

export default Homepage;
