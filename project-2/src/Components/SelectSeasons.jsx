import React, {useState} from "react";
import Seasons from "./Seasons";

const SelectSeasons = ({seasons, isloading, id}) => {
    const [selected, setSelected] = useState(1);
    const selectedValue = (e) => setSelected(Number(e.target.value));
    // console.log(selected);
    return isloading ? (
        `loading...`) : (
            <div>
            <h1>Seasons</h1>
      <select onChange={selectedValue}>
        {seasons.map((item) => {
          return <option>{item.number}</option>;
        })}
      </select>
        <div>
            <Seasons selected= {selected} id = {id}/>
        </div>
        </div>
        );

    };


export default SelectSeasons;

