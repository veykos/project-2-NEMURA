import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/Image_not_available.png";
import axios from "axios";
import CardGrid from "../Components/cards/CardGrid";

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


    let urls = [];
    let IDs = [];
    const getId = (str) => {
      return str.split("/")[4]
    };

    if (!loading) {
      const arrayShows = people._embedded.castcredits;
      for (let i=0; i<arrayShows.length; i++) {
        urls.push(arrayShows[i]._links.show.href);
      };
      
    };

    if (!loading) {
      const arrayShows = people._embedded.castcredits;
      console.log(arrayShows, "arrayShows");
      for (let i=0; i<arrayShows.length; i++) {
        IDs.push(getId(arrayShows[i]._links.show.href));
      };
      
    };

    console.log(urls, "urls");
    console.log(IDs, "IDs");

    const handleFetching = async (setResp, setLoading) => {
       Promise.all(urls.map((url)=>  axios.get(url)))
        .then(axios.spread((...allData)=> {
          console.log(allData, "ilk consol");
          
          setResp(allData);

         
          // && resp[1].data
          // setResp(resp[1].data);
          console.log(allData);
          if (allData) {
            setLoading(false);
          }
          
        }))
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      handleFetching(setShows, setIsLoading);
    }, [people]);

    console.log(shows, "shows");

    if (!isLoading) {
      console.log('rerender')
    
    return  (
      <>


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
            {!isLoading && shows.map((show, index) => {
              return (
                <>
                  <div>

              
                    
              
                  
                      <a href={"/shows/" + show.data.name + "/" + IDs[index]}><p>{show.data.name}</p></a>
                      {/* <p>{show.data.name}</p> */}

                {/* { !isLoading && <p>{shows[index].data.name}</p>} */}
                {/* <td className="tab-name">{key + 1}. <a href={"/CurrentPage" + val.id}>  </a> ({val.premiered.slice(0, 4)}-{(val.ended || "now").slice(0, 4)})</td> */}
                   
                  </div>
                </>
              );
            })}
          </section>
        </div>
      </div>
    </div>
    </>

        
    )

}

}

export default PeoplePage;