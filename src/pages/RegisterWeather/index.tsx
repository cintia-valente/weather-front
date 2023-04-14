import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import axios from "axios";

import './index.css'
interface State {
    state: string;
}

export function RegisterWeather() {

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

    return (
        <div>
            <div className="list-states">
                <select className="select">
                    {states.map(item => (
                        <option key={item.state} value={item.state}>
                            {item.state}
                        </option>
                    ))}
                </select>
                <Button onClick={register} />
            </div>
        </div>
    );
}
