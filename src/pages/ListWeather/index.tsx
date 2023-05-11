import "./index.css";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import searchList from "../../assets/search-city.svg";
import { useEffect, useState } from "react";
import { OperationsService } from "../../data/services/operations/OperationsService";
import { ApiException } from "../../data/services/ErrorException";
import { WeatherDataNameCity } from "../../data/services/interfaces";

export function ListWeather() {
  const [weatherData, setWeathers] = useState<WeatherDataNameCity[]>([]);

  useEffect(() => {
    OperationsService.getWeather().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setWeathers(result);
      }
    });
  }, []);

  return (
    <div className="list">
      <div>
        <div className="title-list">Lista de cidades</div>
        <div className="label-input">
          <label className="text-city">Cidade</label>
          <div className="img-search">
            <input className="search-input"></input>
            <img src={searchList} height="40px" />
          </div>
        </div>
      </div>

      <div className="table-list">
        <table className="column-list">
          <thead>
            <tr className="table-column">
              <th className="col-city">Cidade</th>
              <th className="col-date">Data</th>
              <th className="col-action">Ação</th>
            </tr>
          </thead>

          <tbody>
            {weatherData.map((data) => (
              <div className="card-city">
                <tr key={data.idWheaterData} className="city-weather">
                  <td>{data.city.name}</td>
                  <td>
                    {new Date(data.date)
                      .toISOString()
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}
                  </td>
                  <td>
                    <div>
                      <img className="editIcon" src={editIcon} />
                      <img className="deleteIcon" src={deleteIcon} />
                    </div>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
