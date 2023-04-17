import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import axios from "axios";
import "./index.css";
interface State {
  state: string;
}

export function RegisterWeather() {
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
      <div className="title-register">Cadastro Metereológico</div>

      <div className="fields">
        <div>
          <label className="text-state">Estado </label>
          <div className="list-states">
            <select className="select-register">
              {states.map((item) => (
                <option key={item.state} value={item.state}>
                  {item.state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-date">Data </label>
          <div className="date">
            <input
              className="input-date"
              type="date"
              //   class="form-control"
              //   formControlName="date"
              //   data-cy="date"
              //   required
            />
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
              </select>
            </div>
            <div className="fields-weather">
              <select className="select-weather">
                <option>Chuva</option>
                <option>Tempestade</option>
                <option>Sol com nuves</option>
                <option>Sol</option>
                <option>Nublado</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-register">Turno </label>
            <div className="fields-weather">
              <select className="select-shift">
                <option>Dia</option>
                <option>Noite</option>
              </select>
            </div>
            <div className="fields-weather">
              <select className="select-shift">
                <option>Dia</option>
                <option>Noite</option>
              </select>
            </div>
          </div>
        </div>

        <div className="max">
          <div className="fields-temp">
            <label>Temperatura Máxima </label>
            <div className="max-temperature">
              <input className="input-max"></input>
            </div>
          </div>

          <div className="precipitation-humidity">
            <div className="label-field">
              <label>Precipitação </label>

              <div className="precipitation">
                <input className="input-precipitation"></input>
              </div>
            </div>
            <div className="label-field">
              <label>Humidade </label>
              <div className="humidity">
                <input className="input-humidity"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="min">
          <div className="fields-temp">
            <label>Temperatura Mínma </label>
            <div className="min-temperature">
              <input className="input-min"></input>
            </div>
          </div>

          <div>
            <div>
              <label>Velocidade do vento </label>
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
