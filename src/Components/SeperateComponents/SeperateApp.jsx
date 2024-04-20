import AboutSeperate from "./AboutSeperate";
import FloorPlan from "./FloorPlan";
import Form from "./Form";
import Locality from "./Locality";
import NavbarSeperate from "./NavbarSeperate";
import Overview from "./Overview";

function SeperateApp() {
  return (
    <div className="text-white flex justify-center">
      <div className="flex flex-col items-start">
        <NavbarSeperate />
        <AboutSeperate />
        <Overview />
        <FloorPlan />
        <Locality />
      </div>
      <div className=" h-full sticky top-0 flex flex-col items-end">
        <Form />
      </div>
    </div>
  );
}

export default SeperateApp;
