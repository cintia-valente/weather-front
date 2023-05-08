import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import "./index.css";
import {
  City,
  OperationsService,
  WheaterData,
} from "../../data/services/operations/OperationsService";
import { ApiException } from "../../data/services/ErrorException";
import { DayTimeEnum } from "../../ui/enum/dayTimeEnum";
import { NightTimeEnum } from "../../ui/enum/nightTimeEnum";

export function RegisterWeather() {
  const [cities, setCities] = useState<City[]>([]);
  const [wheaterData, setWheaterData] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  // const payload = {
  //   city: {
  //     idCity: 202,
  //     name: "Porto Alegre",
  //   },
  //   date: new Date(),
  //   dayTimeEnum: DayTimeEnum.SOL,
  //   nightTimeEnum: NightTimeEnum.CHUVA,
  //   maxTemperature: 25,
  //   minTemperature: 19,
  //   precipitation: 9,
  //   humidity: 30,
  //   windSpeed: 5,
  // };

  useEffect(() => {
    //  debugger;
    OperationsService.getCity().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setCities(result);
      }
    });
  }, []);

  // useEffect(() => {
  //   if (payload.city.idCity && payload.city.name && payload.date) {
  //     OperationsService.postWheater(payload);
  //     alert("Cadastrado com sucesso!");
  //   } else {
  //     console.error("Payload inválido!");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (selectedState) {
  //     OperationsService.getCityByState(selectedState).then((result) => {
  //       if (result instanceof ApiException) {
  //         alert(result.message);
  //       } else {
  //         setCities(result);
  //       }
  //     });
  //   }
  // }, [selectedState]);

  function submit() {
    alert("Cadastrado com sucesso!");
  }

  function cancel() {
    alert("Cancelado com sucesso!");
  }

  return (
    <div className="register">
      <div className="title-register">Cadastro Metereológico</div>

      <div className="fields-register">
        <div>
          <label className="text-city">Cidade </label>
          <div>
            <select
              className="select-register"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Selecione uma cidade
              </option>
              {cities.map((item) => (
                <option key={item.idCity} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-date">Data </label>
          <div>
            <input className="input-date" type="date" />
          </div>
        </div>
      </div>

      <div className="card-weather">
        <div className="weather-shift">
          <div>
            <label className="text-register">Tempo </label>
            <div className="fields-weather">
              <select className="select-weather">
                <option>Chuva</option>
                <option>Tempestade</option>
                <option>Sol com nuves</option>
                <option>Sol</option>
                <option>Nublado</option>
                <option>Neve</option>
              </select>
            </div>
            <div className="fields-weather">
              <select className="select-weather">
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
              <input className="input-shift" value="Dia"></input>
              <input className="input-shift" value="Noite"></input>
            </div>
          </div>
        </div>

        <div className="max">
          <div className="fields-temp">
            <label className="text-fields">Temperatura Máxima </label>
            <div className="temperature">
              <input className="input-temp"></input>
            </div>
          </div>

          <div className="precipitation-humidity">
            <div className="label-field">
              <label className="text-fields">Precipitação </label>

              <div className="fields-input">
                <input className="input-temp"></input>
              </div>
            </div>
            <div className="label-field">
              <label className="text-fields">Humidade </label>
              <div className="fields-input">
                <input className="input-temp"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="min">
          <div className="fields-temp">
            <label className="text-fields">Temperatura Mínima </label>
            <div className="temperature">
              <input className="input-temp"></input>
            </div>
          </div>

          <div>
            <div>
              <label className="text-fields">Velocidade do vento </label>
              <div className="wind-speed">
                <input className="input-temp"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn">
        <Button onClick={cancel} label="Cancelar" />
        <Button onClick={submit} label="Salvar" />
      </div>
    </div>
  );
}
