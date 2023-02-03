import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Nasa from "./components/nasa";
import { useState, useEffect } from "react";

const dummy = {
  copyright: "Daniel Stern",
  date: "2023-02-02",
  explanation:
    "The 1970s are sometimes ignored by astronomers, like this beautiful grouping of reflection nebulae in Orion - NGC 1977, NGC 1975, and NGC 1973 - usually overlooked in favor of the substantial glow from the nearby stellar nursery better known as the Orion Nebula. Found along Orion's sword just north of the bright Orion Nebula complex, these reflection nebulae are also associated with Orion's giant molecular cloud about 1,500 light-years away, but are dominated by the characteristic blue color of interstellar dust reflecting light from hot young stars. In this sharp color image a portion of the Orion Nebula appears along the bottom border with the cluster of reflection nebulae at picture center. NGC 1977 stretches across the field just below center, separated from NGC 1973 (above right) and NGC 1975 (above left) by dark regions laced with faint red emission from hydrogen atoms. Taken together, the dark regions suggest the region's popular moniker, the Running Man Nebula. At the estimated distance of Orion's dusty molecular cloud this running man would be about 15 light-years across.",
  hdurl: "https://apod.nasa.gov/apod/image/2302/NGC1975RunningMan.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Reflections on the 1970s",
  url: "https://apod.nasa.gov/apod/image/2302/NGC1975RunningMan_1024.jpg",
};

function App() {
  const [data, setData] = useState(dummy);
  const [tarih, setTarih] = useState("2023-02-03");
  const changeHandler = (e) => {
    setTarih(e);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=xCzIXoTO6E5246JrirxfQX7XuY30vYxBjodm5o0G&date=" +
          tarih
      )
      .then((res) => {
        setData(res.data);
      });
  }, [tarih]);

  return (
    <div className="App">
      <Header />
      <Search changeHandler={changeHandler} tarih={tarih} />
      <Nasa data={data} />
    </div>
  );
}

export default App;
