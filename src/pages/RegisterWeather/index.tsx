import { useCallback, useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import "./index.css";
import { OperationsService } from "../../data/services/operations/OperationsService";
import { ApiException } from "../../data/services/ErrorException";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { City, WeatherData } from "../../data/services/interfaces";
import { DayTimeEnum } from "../../ui/enum/dayTimeEnum";
import { NightTimeEnum } from "../../ui/enum/nightTimeEnum";

const customMessages = {
  mixed: {
    required: "Campo obrigatório",
  },
  number: {
    min: "O valor deve ser maior ou igual a ${min}",
    max: "O valor deve ser menor ou igual a ${max}",
  },
};

yup.setLocale(customMessages);

const validation = yup.object().shape({
  city: yup.string().required(),
  date: yup.string().required(),
  dayTimeEnum: yup.string().required(),
  nightTimeEnum: yup.string().required(),
  maxTemperature: yup.number().required(),
  minTemperature: yup.number().required(),
  precipitation: yup.number().required(),
  humidity: yup.number().required(),
});

export function RegisterWeather() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WeatherData>({
    resolver: yupResolver(validation),
  });

  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City>();

  const [weather, setWeathers] = useState<WeatherData>({
    city: selectedCity ? selectedCity : { idCity: 0, name: "" },
    date: new Date(),
    dayTimeEnum: "",
    nightTimeEnum: "",
    maxTemperature: 0,
    minTemperature: 0,
    humidity: 0,
    precipitation: 0,
    windSpeed: 0,
  });

  useEffect(() => {
    OperationsService.getCity().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setCities(result);
      }
    });
  }, []);

  const submit = (weather: WeatherData) => {
    if (!selectedCity) {
      return;
    }

    const formWeather: WeatherData = {
      city: selectedCity,
      date: weather.date,
      dayTimeEnum: weather.dayTimeEnum.replace(/ /g, "_").toUpperCase(),
      nightTimeEnum: weather.nightTimeEnum.toUpperCase(),
      maxTemperature: weather.maxTemperature,
      minTemperature: weather.minTemperature,
      humidity: weather.humidity,
      precipitation: weather.precipitation,
      windSpeed: weather.windSpeed,
    };

    OperationsService.postWeather(formWeather).then((result) => {
      console.log(formWeather);
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        alert("Cadastrado com sucesso!");
      }
    });
  };

  function cancel() {
    alert("Cancelado com sucesso!");
  }

  return (
    <div className="register">
      <div className="title-register">Cadastro Metereológico</div>

      <form onSubmit={handleSubmit(submit)}>
        <div className="fields-register">
          <div>
            <label className="text-city">Cidade </label>
            <div>
              <select
                className="select-register"
                defaultValue=""
                data-testid="city-select"
                {...register("city")}
                onChange={(e) =>
                  setSelectedCity(cities.find((c) => c.name === e.target.value))
                }
              >
                <option value="" disabled>
                  Selecione uma cidade
                </option>
                {cities.map((item) => (
                  <option key={item.idCity} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="error-message">{errors.city?.message}</p>
            </div>
          </div>

          <div>
            <label className="text-date">Data </label>
            <div>
              <input
                className="input-date"
                type="date"
                {...register("date")}
                onChange={(e) =>
                  setWeathers({
                    ...weather,
                    date: e.target.value
                      ? new Date(e.target.value)
                      : new Date(),
                  })
                }
              />
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
                  {...register("dayTimeEnum")}
                  onChange={(e) =>
                    setWeathers({
                      ...weather,
                      dayTimeEnum: e.target.value,
                    })
                  }
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
                  {...register("nightTimeEnum")}
                  onChange={(e) =>
                    setWeathers({
                      ...weather,
                      nightTimeEnum: e.target.value,
                    })
                  }
                >
                  <option>Chuva</option>
                  <option>Tempestade</option>
                  <option>Limpa</option>
                  <option>Nublada</option>
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
                <input
                  className="input-temp"
                  type="number"
                  {...register("maxTemperature")}
                  onChange={(e) =>
                    setWeathers({
                      ...weather,
                      maxTemperature: parseInt(e.target.value),
                    })
                  }
                ></input>
                <p className="error-message">
                  {errors.maxTemperature?.message}
                </p>
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
                    onChange={(e) =>
                      setWeathers({
                        ...weather,
                        precipitation: parseInt(e.target.value),
                      })
                    }
                  ></input>
                  <p className="error-message">
                    {errors.precipitation?.message}
                  </p>
                </div>
              </div>
              <div className="label-field">
                <label className="text-fields">Umidade </label>
                <div className="fields-input">
                  <input
                    className="input-temp"
                    type="number"
                    {...register("humidity")}
                    onChange={(e) =>
                      setWeathers({
                        ...weather,
                        humidity: parseInt(e.target.value),
                      })
                    }
                  ></input>
                  <p className="error-message">{errors.humidity?.message} </p>
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
                  {...register("minTemperature")}
                  onChange={(e) =>
                    setWeathers({
                      ...weather,
                      minTemperature: parseInt(e.target.value),
                    })
                  }
                ></input>
                <p className="error-message">
                  {errors.minTemperature?.message}{" "}
                </p>
              </div>
            </div>

            <div>
              <div>
                <label className="text-fields">Velocidade do vento </label>
                <div className="wind-speed">
                  <input
                    className="input-temp"
                    type="number"
                    {...register("windSpeed")}
                    onChange={(e) =>
                      setWeathers({
                        ...weather,
                        windSpeed: parseInt(e.target.value),
                      })
                    }
                  ></input>
                  <p className="error-message">{errors.windSpeed?.message} </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn">
          <Button label="Cancelar" type="button" onClick={cancel} />
          <Button label="Salvar" type="submit" />
        </div>
      </form>
    </div>
  );
}
