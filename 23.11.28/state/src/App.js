import "./App.css";
import { First } from "./components/firstTask";
import { Second } from "./components/secondTask";
import { Third } from "./components/thirdTask";
import { Fourth } from "./components/fourthTask";
import { Fifth } from "./components/fifthTask";

function App() {
  return (
    <>
      <div>
        <First />
        <Second />
        <Third />
        <Fourth/>
        <Fifth/>
      </div>
    </>
  );
}

export default App;
