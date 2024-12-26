import Carousel from "../../components/Carousel";
import ContactUs from "../../components/ContactUs";
import FAQ from "../../components/FAQ";
import Gallery from "../../components/Gallery";
import NewsRoom from "../../components/News";
import StarAlumni from "../../components/StarAlumni";
import Statistics from "../../components/Statistics";
import SuccessStoryCarousel from "../../components/Success_Story";
import WhyConnect from "../../components/WhyConnect";

const Home = () => {
  return (
    <div className="main">
      <div className="flex flex-col justify-center items-center md:gap-32 xs:gap-16 md:ml-10 md:mr-10 xs:ml-8 xs:mr-8">
        <Carousel />
        <Statistics />
        <SuccessStoryCarousel />
        <NewsRoom />
        <StarAlumni />
        <WhyConnect />
        <Gallery />
        <ContactUs />
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
