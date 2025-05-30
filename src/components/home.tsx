import Header from "./header";
import CategoryBar from "./categoryBar";
import SearchBar from "./searchBar";
import Footer from "./footer";
import { RecipeCard, RecipeDetails } from "./recipeCard";


const Home = () => (
  <div className="w-[430px] mx-auto min-h-screen flex flex-col justify-between bg-[#FFF7EC]">
    <Header />
    <CategoryBar />
    <SearchBar />
    <main className="px-4 py-4 space-y-4">
      <RecipeDetails />
      <RecipeCard />
    </main>
    <Footer />
  </div>
);

export default Home;