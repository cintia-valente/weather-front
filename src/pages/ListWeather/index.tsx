import "./index.css";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import searchList from "../../assets/search-city.svg";
import { useEffect, useState } from "react";
import { OperationsService } from "../../data/services/operations/OperationsService";
import { ApiException } from "../../data/services/ErrorException";
import { WeatherData } from "../../data/services/interfaces";

export function ListWeather() {
  const [weatherData, setWeathers] = useState<WeatherData[]>([]);
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    OperationsService.getWeather().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setWeathers(result);
      }
    });
  }, []);

  const getByCity = async () => {
    const result = await OperationsService.getWeathersByCity(cityFilter);
    if (result instanceof ApiException) {
      alert(result.message);
    } else {
      setWeathers(result);
    }
  };

  const handleCityFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCityFilter(event.target.value);
  };

  const filteredWeatherData = weatherData.filter((data) => {
    const cityName = data.city.name.toLowerCase();
    const filterValue = cityFilter.toLowerCase();
    return cityName.includes(filterValue);
  });

  const deleteWeather = (idWeather: number) => {
    OperationsService.deleteById(idWeather).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setWeathers((item: WeatherData[]) => {
          return item.filter((item) => item.idWeatherData !== idWeather);
        });
        alert("Excluído com sucesso!");
      }
    });
  };

  return (
    <div className="list">
      <div>
        <div className="title-list">Lista de cidades</div>
        <div className="label-input">
          <label className="text-city">Cidade</label>
          <div className="img-search">
            <input
              className="search-input"
              onChange={handleCityFilterChange}
            ></input>
            <img src={searchList} height="40px" onClick={getByCity} />
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
            {filteredWeatherData.map((data) => (
              <div className="card-city">
                <tr key={data.idWeatherData} className="city-weather">
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
                      <img
                        className="deleteIcon"
                        src={deleteIcon}
                        onClick={() => deleteWeather(data.idWeatherData ?? 0)}
                      />
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
