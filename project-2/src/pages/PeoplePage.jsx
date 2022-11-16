import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/Image_not_available.png";

const PeoplePage = () => {
    const params = useParams();
    const [people, setPeople] = useState({});
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setLoading(false);
    //     }, 800);
    //     return () => {
    //       clearTimeout(timer);
    //     };
    //   }, []);

    const fetchPeople = async () => {
        const data = await fetch(`https://api.tvmaze.com/people/${params.id}?embed=castcredits`);
        const dataPeople = await data.json();
        setPeople(dataPeople);
        setLoading(false);
    };

    useEffect(() => {
        fetchPeople();
        console.log(people, "dataPeopleEffect");
    }, []);
    console.log(people, "dataPeople");


    let arrayShowID = [];
    const getId = (str) => {
      return str.split("/")[4]
    };

    if (!loading) {
      const arrayShows = people._embedded.castcredits;
      console.log(arrayShows, "arrayShows");
      for (let i=0; i<arrayShows.length; i++) {
        arrayShowID.push(getId(arrayShows[i]._links.show.href));
      };
      console.log(arrayShowID, "arrayShowID");
    };

    // async function fetchAllShows() {
    //   try {
    //     const shows = await axios.get(
    //       `https://api.tvmaze.com/search/shows?q=${searchInput}`
    //     );
    //     const showsData = shows.data;
    //     const people = await axios.get(
    //       `https://api.tvmaze.com/search/people?q=${searchInput}`
    //     );
    //     const peopleData = people.data;
    //     setShows(showsData);
    //     setPeople(peopleData);
    //     setIsLoading(false);
    //     console.log({ showsData }, { peopleData });
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   console.log(shows)
    // }


    return loading ? (
      `loading...`
    ) : (

      <div className="card" >
        <div className="card-image">
          <img className="card-img" alt = "image"  src={people.image ? people.image?.medium : image}/>
      </div>
      <div className="card-info">
          <p className="result-name"><strong>{people.name}</strong> </p>
          <p>{people.gender ?  people.gender==="Male" ? "Actor" : "Actress" : "Actor/Actress"}</p>
          <p>Country: {people.country?.name ? people.country.name : " Unknown"}</p>
      </div>
      <div>
        <div>
          <h2><strong>Known For</strong></h2>
        </div>
        <div>
        <section className="cards-section">
     {people._embedded.castcredits.map((peoplecredit, key) => {
        return (
          <>
            <div>
              
              <tr key={key}>
                <td className="tab-image"><a href={"/shows/:name/" + getId(peoplecredit._links.show.href)}><p>{peoplecredit._links.show.href}</p></a></td>
                {/* <td className="tab-name">{key + 1}. <a href={"/CurrentPage" + val.id}>  </a> ({val.premiered.slice(0, 4)}-{(val.ended || "now").slice(0, 4)})</td> */}
              </tr>
            </div>
          </>
        );
      })}
    </section>
        </div>
      </div>
    </div>

        
    )


};

export default PeoplePage;