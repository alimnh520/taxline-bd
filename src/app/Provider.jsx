import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Provider = ({ children }) => {
    return (
        <div className="w-[72%] shadow-2xl mx-auto">
            <Header />
            {children}
            <Footer/>
        </div>
    );
};

export default Provider;
