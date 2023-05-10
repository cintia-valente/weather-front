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
  const [cityId, setCityId] = useState<number>(0);

  useEffect(() => {
    OperationsService.getWeather().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setWeathers(result);
      }
    });
  }, []);

  // const handleCitySubmit = async () => {
  //   if (cityId) {
  //     OperationsService.getWeathersByCity(cityId).then((result) => {
  //       if (result instanceof ApiException) {
  //         alert(result.message);
  //       } else {
  //         setWeathers(weatherData);
  //       }
  //     });
  //   }
  // };

  // const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setCityId(parseInt(value));
  // };

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
              <th>Cidade</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {weatherData.map((data) => (
              <div className="card-city">
                <tr key={data.idWheaterData} className="city-weather">
                  <td>{data.city.name}</td>
                  <td>{new Date(data.date).toLocaleDateString()}</td>
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
