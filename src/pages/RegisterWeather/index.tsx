import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import "./index.css";
import { OperationsService } from "../../data/services/operations/OperationsService";
import { ApiException } from "../../data/services/ErrorException";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { City, WeatherData } from "../../data/services/interfaces";

const validation = yup.object().shape({
  maxTemp: yup.string().required(),
});

export function RegisterWeather() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    OperationsService.getCity().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
        console.log(result.message);
      } else {
        setCities(result);
      }
    });
  }, []);

  const [data, setData] = useState({
    idCity: 0,
    date: "",
    dayTimeEnum: null,
    nightTimeEnum: null,
    maxTemperature: 0,
    minTemperature: 0,
    precipitation: 0,
    humidity: 0,
    windSpeed: 0,
  });

  const formData = {
    date: "2023-05-10",
  };

  const onSubmit = async () => {
    OperationsService.postWeather({
      idCity: parseInt(selectedCity),
      date: new Date(formData.date + "T00:00:00.000Z"),
      dayTimeEnum: data.dayTimeEnum,
      nightTimeEnum: data.nightTimeEnum,
      maxTemperature: data.maxTemperature,
      minTemperature: data.minTemperature,
      precipitation: data.precipitation,
      humidity: data.humidity,
      windSpeed: data.windSpeed,
    }).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setData(data);
      }
    });
  };

  function cancel() {
    alert("Cancelado com sucesso!");
  }

  return (
    <div className="register">
      <div className="title-register">Cadastro Metereológico</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields-register">
          <div>
            <label className="text-city">Cidade </label>
            <div>
              <select
                className="select-register"
                data-testid="city-select"
                {...register("register")}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Selecione uma cidade
                </option>
                {cities.map((item) => (
                  <option key={item.idCity} value={item.idCity}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-date">Data </label>
            <div>
              <input className="input-date" type="date" {...register("date")} />
            </div>
          </div>
        </div>

        <div className="card-weather">
          <div className="weather-shift">
            <div>
              <label className="text-register">Tempo </label>
              <div className="fields-weather">
                <select
                  className="select-weather"
                  data-testid="fields-select"
                  {...register("temperature-day")}
                >
                  <option>Chuva</option>
                  <option>Tempestade</option>
                  <option>Sol com nuves</option>
                  <option>Sol</option>
                  <option>Nublado</option>
                  <option>Neve</option>
                </select>
              </div>
              <div className="fields-weather">
                <select
                  className="select-weather"
                  {...register("temperature-night")}
                >
                  <option>Chuva</option>
                  <option>Tempestade</option>
                  <option>Limpo</option>
                  <option>Nublado</option>
                  <option>Neve</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-register">Turno </label>
              <div className="field-shift">
                <input
                  className="input-shift"
                  value="Dia"
                  {...register("shift-day")}
                ></input>
                <input
                  className="input-shift"
                  value="Noite"
                  {...register("shift-nigth")}
                ></input>
              </div>
            </div>
          </div>

          <div className="max">
            <div className="fields-temp">
              <label className="text-fields">Temperatura Máxima </label>
              <div className="temperature">
                <input
                  className="input-temp"
                  type="number"
                  {...register("maxTemp")}
                ></input>
              </div>
            </div>

            <div className="precipitation-humidity">
              <div className="label-field">
                <label className="text-fields">Precipitação </label>

                <div className="fields-input">
                  <input
                    className="input-temp"
                    type="number"
                    {...register("precipitation")}
                  ></input>
                </div>
              </div>
              <div className="label-field">
                <label className="text-fields">Umidade </label>
                <div className="fields-input">
                  <input
                    className="input-temp"
                    type="number"
                    {...register("humidity")}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="min">
            <div className="fields-temp">
              <label className="text-fields">Temperatura Mínima </label>
              <div className="temperature">
                <input
                  className="input-temp"
                  type="number"
                  {...register("min-temp")}
                ></input>
              </div>
            </div>

            <div>
              <div>
                <label className="text-fields">Velocidade do vento </label>
                <div className="wind-speed">
                  <input
                    className="input-temp"
                    type="number"
                    {...register("speed")}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn">
          <Button onClick={cancel} label="Cancelar" />
          <Button onClick={onSubmit} label="Salvar" />
        </div>
      </form>
    </div>
  );
}
