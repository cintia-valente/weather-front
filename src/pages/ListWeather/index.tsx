import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import axios from "axios";
import "./index.css";
import location from "../../assets/location.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
interface State {
  state: string;
}

export function ListWeather() {
  return (
    <div className="list">
      <div className="title-list">Lista de cidades</div>
      <div className="input-search">
        <label className="text-city">Cidade</label>
        <div className="img-search">
          <input className="search"></input>
          <img src={location} className="position-img" />
        </div>
      </div>
      <table>
        <tr>
          <th>Cidade</th>
          <th>Data</th>
          <th>Ação</th>
        </tr>
        <tr>
          <td>Porto Alegre</td>
          <td>31/03/2023</td>
          <td>
            <div>
              <img src={editIcon} />
              <img src={deleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Gramado</td>
          <td>31/03/2023</td>
          <td>
            <div>
              <img src={editIcon} />
              <img src={deleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Los Angeles</td>
          <td>28/03/2023</td>
          <td>
            <div>
              <img src={editIcon} />
              <img src={deleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Rio de Janeiro</td>
          <td>15/01/2023</td>
          <td>
            <div>
              <img src={editIcon} />
              <img src={deleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <td>São Paulo</td>
          <td>10/01/2023</td>
          <td>
            <div>
              <img src={editIcon} />
              <img src={deleteIcon} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Floripa</td>
          <td>02/01/2023</td>
          <td>
            <div>
              <img src={editIcon} />
              <img src={deleteIcon} />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
