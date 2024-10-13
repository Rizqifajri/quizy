import "./App.css";
import { CardReviewers } from "./components/card-reviewers";
import { CardCategories } from "./components/categories-card";
import { Footer } from "./components/footer";
import { Header } from "./components/headers";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation-menu";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CardCategories/>
      <CardReviewers/>
      <Footer />
    </>
  );
}

export default App;
