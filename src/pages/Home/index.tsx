import { useEffect, useState } from "react";
import axios from "axios";
import location from "../../assets/location.svg";
import rainyDay from "../../assets/rainy-day.svg";
import cloudyDay from "../../assets/cloudy-day.svg";
import cloudyNight from "../../assets/cloudy-night.svg";
import storm from "../../assets/storm.svg";
import sunWithClouds from "../../assets/sun-with-clouds.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.png";
import rainyNight from "../../assets/rainy-night.svg";
import precipitation from "../../assets/precipitation.svg";
import humidity from "../../assets/humidity.svg";
import snow from "../../assets/snow.svg";
import windSpeed from "../../assets/wind-speed.svg";
import "./index.css";

interface State {
  state: string;
}

export function Home() {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4767/api/v1/weather/states/all")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function register() {
    alert("Cadastrado com sucesso!");
  }

  function cancel() {
    alert("Cancelado com sucesso!");
  }

  return (
    <div className="register">
      <div className="text-search">
        <div className="title-home">Hoje</div>

        <div className="input-search">
          <label className="text-search">Pesquise a cidade</label>
          <div className="img-search">
            <input className="search"></input>
            <img src={location} className="position-img" />
          </div>
        </div>
      </div>

      <div className="card-home">
        <div className="weather-today">
          <span className="img-today">
            <img src={sunWithClouds} width="100px" />
          </span>

          <span>
            <img src={precipitation} width="50px" />
            <img src={humidity} width="50px" />
            <img src={windSpeed} width="50px" />
          </span>
        </div>
      </div>

      <img src={rainyNight} />
      <img src={rainyDay} />
      <img src={storm} />

      <img src={sun} />
      <img src={cloudyNight} />
      <img src={cloudyDay} />
      <img src={snow} />
      <img src={moon} height="53px" />
    </div>
  );
}
