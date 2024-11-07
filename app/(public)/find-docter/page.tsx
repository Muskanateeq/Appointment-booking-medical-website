import DoctorsDetails from "@/components/DoctorsDetails";
import DoctorsCarousel from "@/components/DoctorsCarousel";


const HomePage = () => {
  return (
    <>
    <div>
      <DoctorsCarousel/>
    </div>
    <div>
      <DoctorsDetails/>
    </div>
    </>
  );
};

export default HomePage;