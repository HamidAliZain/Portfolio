import { Body } from "./component/body/body";
import { Navbar } from "./component/navbar/navbar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <>  
      <Navbar />
      <Body />
    </>
  );
}

export default App;
Aos.init();
 