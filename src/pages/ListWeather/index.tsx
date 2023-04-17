import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import axios from "axios";
import './index.css'

interface State {
    state: string;
}

export function ListWeather() {

    const [states, setStates] = useState<State[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:4767/api/v1/weather/states/all')
            .then((response) => {
                setStates(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function register() {
        alert('Cadastrado com sucesso!');
    }

    function cancel() {
        alert('Cancelado com sucesso!');
    }

    return (
        <div className="register">
            <div>Lista de cidades</div>

            <div className="fields">
                <div>
                    <label>Estado </label>
                    <div className="list-states">
                        <select className="select-list">
                            {states.map(item => (
                                <option key={item.state} value={item.state}>
                                    {item.state}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label>Data </label>
                    <div>
                        <input
                            className="date"
                            type="date"
                        //   class="form-control"
                        //   formControlName="date"
                        //   data-cy="date"
                        //   required
                        />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="test">
                    <div className="weather-shift">
                        <div>
                            <label>Tempo </label>
                            <div className="list-weather">
                                <select className="select">
                                    <option>Chuva</option>
                                    <option>Tempestade</option>
                                    <option>Sol com nuves</option>
                                    <option>Sol</option>
                                    <option>Nublado</option>
                                </select>
                            </div>
                            <div className="list-weather">
                                <select className="select">
                                    <option>Chuva</option>
                                    <option>Tempestade</option>
                                    <option>Sol com nuves</option>
                                    <option>Sol</option>
                                    <option>Nublado</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label>Turno </label>
                            <div className="list-shift">
                                <select className="select">
                                    <option>Dia</option>
                                    <option>Noite</option>
                                </select>
                            </div>
                            <div className="list-shift">
                                <select className="select">
                                    <option>Dia</option>
                                    <option>Noite</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="max">
                        <div>
                            <label>Temperatura Máxima </label>
                            <div className="max-temperature">
                                <input className="max-temperature"></input>
                            </div>

                            <label>Precipitação </label>
                            <div className="precipitation">
                                <input className="precipitation"></input>
                            </div>

                            <label>Humidade </label>
                            <div className="humidity">
                                <input className="humidity"></input>
                            </div>
                        </div>
                    </div>

                    <div className="min">
                        <div>
                            <label>Temperatura Mínma </label>
                            <div className="min-temperature">
                                <input className="min-temperature"></input>
                            </div>

                            <label>Velocidade do vento </label>
                            <div className="wind-speed">
                                <input className="wind-speed"></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Button onClick={cancel} label="Cancelar" />
            <Button onClick={register} label="Salvar" />

        </div>
    );
}
