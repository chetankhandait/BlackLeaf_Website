import AboutSeperate from "./AboutSeperate";
import FloorPlan from "./FloorPlan";
import Form from "./Form";
// import Locality from "./Locality";
import NavbarSeperate from "./NavbarSeperate";
import Overview from "./Overview";

function SeperateApp() {
  return (
    <div className="">
      <NavbarSeperate />
      <div className="text-white sm:flex  sm:justify-center">
        <div className="flex flex-col items-start max-w-3xl">
          <AboutSeperate />
          <Overview />
          <FloorPlan />
          {/* <Locality /> */}
        </div>
        <div className=" h-full sm:sticky top-10 flex flex-col items-end">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default SeperateApp;
