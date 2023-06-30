import { MainBottomSection } from "./MainBottomSection";
import { BottomBar } from "../components/BottomBar";

export const Main = ({dataInvitation={}}) => {

  

  return (
    <div className="w-full h-full bg-white overflow-auto">
        <MainBottomSection dataInvitation= {dataInvitation}/>
        <BottomBar/>
    </div>
  );
};
