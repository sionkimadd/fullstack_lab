import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Landing() {
    return (
        <div className="landing-page">
            <NavBar />
            <Header />
            <Body />
            <Footer />
        </div>
    );
}