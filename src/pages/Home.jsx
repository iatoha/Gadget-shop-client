import Accordion from "../components/home/Accordion";
import Banner from "../components/home/banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";


const Home = () => {
    return (
        <div>
            <Banner/>
           <div className="container mx-auto">
             {/* featured section */}
             <div className="my-24">
                <h1 className="mb-10 text-2xl font-semibold text-center">Featured Products</h1>
            <FeaturedProducts/>
            </div>
            {/* review section */}
            <div className="my-24">
                <h1 className="mb-10 text-2xl font-semibold text-center">User Review</h1>
            <UserReview/>
            </div>
            {/* accordion section */}
            <div className="my-24">
                <h1 className="mb-10 text-2xl font-semibold text-center">FAQ</h1>
            <Accordion/>
            </div>
           </div>
        </div>
    );
};

export default Home;