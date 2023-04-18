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
    <div className="home">
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
            <div>23°/</div>
            <div>17°</div>
          </span>

          <div className="fields">
            <div>
              <img src={precipitation} width="50px" />
              <div>30% </div>
              <div>Precipitação</div>
            </div>

            <div>
              <img src={humidity} width="50px" />
              <div>30% </div>
              <div>Humidade</div>
            </div>

            <div>
              <img src={windSpeed} width="50px" />
              <div>9Km/h</div>
              <div>Velocidadade do vento</div>
            </div>
          </div>
        </div>
      </div>

      <table>
        <tr>
          <td>31/03/2023</td>
          <td>
            <div>
              <img src={sun} height="45px" />
              Sol
            </div>
          </td>
          <td>
            <div>+31 +51</div>
          </td>
        </tr>

        <tr>
          <td>01/04/2023</td>
          <td>
            <div>
              <img src={sunWithClouds} height="40px" />
              Sol com nuvens
            </div>
          </td>
          <td>
            <div>+31 +51</div>
          </td>
        </tr>
        <tr>
          <td>02/04/2023</td>
          <td>
            <div>
              <img src={storm} height="45px" />
              Tempestade
            </div>
          </td>
          <td>
            <div>+31 +51</div>
          </td>
        </tr>
        <tr>
          <td>03/04/2023</td>
          <td>
            <div>
              <img src={rainyNight} height="45px" />
              Chuva
            </div>
          </td>
          <td>
            <div>+31 +51</div>
          </td>
        </tr>
        <tr>
          <td>04/04/2023</td>
          <td>
            <div>
              <img src={snow} height="45px" />
              Neve
            </div>
          </td>
          <td>
            <div>+31 +51</div>
          </td>
        </tr>
        <tr>
          <td>05/04/2023</td>
          <td>
            <div>
              <img src={rainyNight} height="45px" />
              Chuva
            </div>
          </td>
          <td>
            <div>+31 +51</div>
          </td>
        </tr>
      </table>
    </div>
  );
}
