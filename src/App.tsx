import "./App.css";
import Layout from "./components/Layout";
import TopAppBar from "./components/TopAppBar";
import HeroSection from "./components/HeroSection";
import CoreCompetencies from "./components/CoreCompetencies";
import PortfolioSection from "./components/PortfolioSection";
import PhilosophySection from "./components/PhilosophySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
	return (
		<Layout>
			<TopAppBar />
			<main className="pt-24">
				<HeroSection />
				<CoreCompetencies />
				<PortfolioSection />
				<PhilosophySection />
				<ContactSection />
			</main>
			<Footer />
		</Layout>
	);
}

export default App;
