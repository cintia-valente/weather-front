import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import axios from "axios";
import "./index.css";
interface State {
  state: string;
}

export function RegisterWeather() {
  const [states, setStates] = useState<State[]>([]);
  const [selectedState, setSelectedState] = useState("");

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
      <div className="title-register">Cadastro Metereológico</div>

      <div className="fields-register">
        <div className="select-state">
          <label className="text-state">Estado </label>
          <div className="list-states">
            <select
              className="select-register"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="" disabled selected>
                Selecione um estado
              </option>
              {states.map((item) => (
                <option key={item.state} value={item.state}>
                  {item.state}
                </option>
              ))}
            </select>
          </div>
          <div>
            {selectedState && (
              <div className="select-city">
                <label className="text-city">Cidade </label>
                <div className="list-cities">
                  <select className="select-register">
                    <option value="" disabled selected>
                      Selecione uma cidade
                    </option>
                    {states.map((item) => (
                      <option key={item.state} value={item.state}>
                        {item.state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="text-date">Data </label>
          <div className="date">
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
            <div className="max-temperature">
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
            <div className="min-temperature">
              <input className="input-temp"></input>
            </div>
          </div>

          <div>
            <div>
              <label className="text-fields">Velocidade do vento </label>
              <div className="wind-speed">
                <input className="input-speed"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn">
        <Button onClick={cancel} label="Cancelar" />
        <Button onClick={register} label="Salvar" />
      </div>
    </div>
  );
}
