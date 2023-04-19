import { useEffect, useState } from "react";
import axios from "axios";
import location from "../../assets/location.svg";
import storm from "../../assets/storm.svg";
import sunWithClouds from "../../assets/sun-with-clouds.svg";
import sun from "../../assets/sun.svg";
import rainyNight from "../../assets/rainy-night.svg";
import precipitation from "../../assets/precipitation.svg";
import humidity from "../../assets/humidity.svg";
import snow from "../../assets/snow.svg";
import windSpeed from "../../assets/wind-speed.svg";
import search from "../../assets/search.svg";

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
          <div className="label-search">
            <img src={search} className="icon-search" />
            <label className="text-search">Pesquise a cidade</label>
          </div>
          <div className="img-search">
            <input className="search"></input>
            <div>
              <img src={location} className="icon-location" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-home">
        <div className="weather-today">
          <div className="img-today">
            <div className="today-icon">
              <img src={sunWithClouds} width="150px" />
            </div>
            <div className="max-min">
              <div>23</div>°<div>/</div>
              <div>17°</div>
            </div>
          </div>

          <div className="fields-home">
            <div>
              <img src={precipitation} width="70px" className="img-card" />
              <div className="fields-card">
                <div>30% </div>
                <div>Precipitação</div>
              </div>
            </div>

            <div>
              <img src={humidity} width="70px" className="img-card" />
              <div className="fields-card">
                <div>20% </div>
                <div>Humidade</div>
              </div>
            </div>

            <div>
              <img src={windSpeed} width="70px" className="img-card" />
              <div className="fields-card">
                <div>9Km/h</div>
                <div>Velocidade vento</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="table-home">
        <table className="column-home">
          <div className="home-row">
            <tr className="city-home">
              <td>31/03/2023</td>
              <td>
                <div className="img-temp">
                  <img src={sun} height="45px" />
                  <div>Sol</div>
                </div>
              </td>
              <td>
                <div className="last-column">
                  <div>+31</div>
                  <div>+51</div>
                </div>
              </td>
            </tr>
          </div>

          <div className="home-row">
            <tr className="city-home">
              <td>01/04/2023</td>
              <td>
                <div className="img-temp">
                  <img src={sunWithClouds} height="40px" />
                  <div>Sol com nuvens</div>
                </div>
              </td>
              <td>
                <div className="last-column">
                  <div>+31</div>
                  <div>+51</div>
                </div>
              </td>
            </tr>
          </div>

          <div className="home-row">
            <tr className="city-home">
              <td>02/04/2023</td>
              <td>
                <div className="img-temp">
                  <img src={storm} height="50px" />
                  <div>Tempestade</div>
                </div>
              </td>
              <td>
                <div className="last-column">
                  <div>+31</div>
                  <div>+51</div>
                </div>
              </td>
            </tr>
          </div>

          <div className="home-row">
            <tr className="city-home">
              <td>03/04/2023</td>
              <td>
                <div className="img-temp">
                  <img src={rainyNight} height="45px" />
                  <div>Chuva</div>
                </div>
              </td>
              <td>
                <div className="last-column">
                  <div>+31</div>
                  <div>+51</div>
                </div>
              </td>
            </tr>
          </div>

          <div className="home-row">
            <tr className="city-home">
              <td>04/04/2023</td>
              <td>
                <div className="img-temp">
                  <img src={snow} height="50px" />
                  <div>Neve</div>
                </div>
              </td>
              <td>
                <div className="last-column">
                  <div>+31</div>
                  <div>+51</div>
                </div>
              </td>
            </tr>
          </div>

          <div className="home-row">
            <tr className="city-home">
              <td>05/04/2023</td>
              <td>
                <div className="img-temp">
                  <img src={rainyNight} height="45px" />
                  <div>Chuva</div>
                </div>
              </td>
              <td>
                <div className="last-column">
                  <div>+31</div>
                  <div>+51</div>
                </div>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
}
