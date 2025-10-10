import BestSelling from "../components/BestSelling";
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
    </div>
  );
}

export default Homepage;
