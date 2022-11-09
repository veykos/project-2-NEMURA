import React, { useState, useEffect } from "react";

const today = new Date();
console.log(today);
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
console.log(day);
let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth()}`;
console.log(month);
let year = today.getFullYear();
console.log(year);
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate);

const SchedGrid = () => {
  const [schedule, setSchedule] = useState([]);

  const URL = `https://api.tvmaze.com/schedule/web?date=${currentDate}&country=US`;
  const getSchedule = async (url, setResp) => {
    fetch(URL).then((resp) => {
      resp
        .json()
        .then((data) => {
          setResp(data);
        })
        .catch((err) => console.log(err));
    });
  };
  useEffect(() => {
    getSchedule(URL, setSchedule);
  }, []);
  console.log(schedule, "today");

  return (
    <section>
      <ul>
        {/* {schedule.map((date) => {
          return <li key={date.id}>{date.name} </li>;
        })} */}
      </ul>
    </section>
  );
};

export default SchedGrid;
