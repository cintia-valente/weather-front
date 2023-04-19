import { useEffect, useState } from "react";
import { Button } from "../../ui/components/Button";
import axios from "axios";
import "./index.css";
import location from "../../assets/location.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import searchList from "../../assets/search-city.svg";
interface State {
  state: string;
}

export function ListWeather() {
  return (
    <div className="list">
      <div className="title-search">
        <div className="title-list">Lista de cidades</div>
        <div className="label-input">
          <label className="text-city">Cidade</label>
          <div className="img-search">
            <input className="search"></input>
            <img className="search-icon" src={searchList} height="40px" />
          </div>
        </div>
      </div>

      <div className="table-list">
        <table className="column-list">
          <div className="table-column">
            <div>Cidade</div>
            <div>Data</div>
            <div>Ação</div>
          </div>

          <div className="card-city">
            <tr className="city-weather">
              <td>Porto Alegre</td>
              <td>31/03/2023</td>
              <td>
                <div>
                  <img className="editIcon" src={editIcon} />
                  <img className="deleteIcon" src={deleteIcon} />
                </div>
              </td>
            </tr>
          </div>

          <div className="card-city">
            <tr className="city-weather">
              <td>Gramado</td>
              <td>31/03/2023</td>
              <td>
                <div>
                  <img className="editIcon" src={editIcon} />
                  <img className="deleteIcon" src={deleteIcon} />
                </div>
              </td>
            </tr>
          </div>

          <div className="card-city">
            <tr className="city-weather">
              <td>Los Angeles</td>
              <td>28/03/2023</td>
              <td>
                <div>
                  <img className="editIcon" src={editIcon} />
                  <img className="deleteIcon" src={deleteIcon} />
                </div>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
}
