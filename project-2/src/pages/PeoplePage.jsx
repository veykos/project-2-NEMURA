import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeoplePage = () => {
    const params = useParams();
    const [people, setPeople] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 800);
        return () => {
          clearTimeout(timer);
        };
      }, []);

    const fetchPeople = async () => {
        const data = await fetch(`https://api.tvmaze.com/people/${params.id}?embed=castcredits`);
        const dataPeople = await data.json();
        setPeople(dataPeople);
        console.log(people, "dataPeople");
        console.log(params);
    };

    useEffect(() => {
        fetchPeople();
        console.log(people, "dataPeopleEffect");
    }, []);

    return (
        <div>
            <h1>People Info</h1>
            <h1>{people.name}</h1>
        </div>
    )


};

export default PeoplePage;