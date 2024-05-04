import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import FAQ from "../../Components/FAQ/FAQ";
import Speciality from "../../Components/Speciality/Speciality";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Speciality></Speciality>
          <FAQ></FAQ>
          <Brands></Brands>
        </div>
    );
};

export default Home;