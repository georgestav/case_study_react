import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Comparison from "./components/Comparison";
import Estates from "./components/Estates";
import ResetButton from "./components/ResetButton";

function App() {
  const [estates, setEstates] = useState([]);
  const [compareEstates, setCompareEstates] = useState([]);
  const fetchEstates = async () => {
    try {
      const request = await axios.get(
        "https://estate-comparison.codeboot.cz/list.php?limit=9"
      );
      const response = await request.data;
      setEstates(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEstates();
  }, []);

  return (
    <div className="comparison__container">
      {/* h2 assuming here that the component is to be included in a page with a defined h1 */}
      <h2 className="comparison__title">Estate Comparison</h2>
      <div className="estates">
        <Estates
          estates={estates}
          compareEstates={compareEstates}
          setCompareEstates={setCompareEstates}
        />
      </div>
      <ResetButton
        setCompareEstates={setCompareEstates}
        compareEstates={compareEstates}
      />
      <div className="compare__estates__container">
        <Comparison compareEstates={compareEstates} />
      </div>
    </div>
  );
}

export default App;
