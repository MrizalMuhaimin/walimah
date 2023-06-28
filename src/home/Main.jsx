import { MainBottomSection } from "./MainBottomSection";
import { BottomBar } from "../components/BottomBar";

export const Main = () => {

  

  return (
    <div className="w-full h-full bg-white overflow-auto">

        <MainBottomSection/>
        <BottomBar/>
    </div>
  );
};
