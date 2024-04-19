import AboutSeperate from "./AboutSeperate";
import FloorPlan from "./FloorPlan";
import Form from "./Form";
import Locality from "./Locality";
import NavbarSeperate from "./NavbarSeperate";
import Overview from "./Overview";

function SeperateApp() {
  return (
    <div className="text-white">
      <NavbarSeperate />
      <AboutSeperate />
      <Overview />
      <FloorPlan />
      <Locality />
      <Form />
    </div>
  );
}

export default SeperateApp;
