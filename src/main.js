import ProjectPlan from "./components/projectPlan";
import HomeLogos from "./components/homeLogos";
import Count from "./components/count";
import Living from "./components/livingSherzodbek";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/peopleThink";
import Wanna from "./components/wanna";
import Footer from "./components/footer";
import Articles from "./components/article";
function Main() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <ProjectPlan />
      <Living />
      <About />
      <HomeLogos />
      <Count />
      <Articles />
      <Wanna />
      <Footer />
    </div>
  );
}

export default Main;
