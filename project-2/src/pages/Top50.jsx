import React from "react";
import "../App.css";
import Quotes from "../Components/Quotes/Quotes"
import axios from "axios"
import { useMemo, useEffect, useState } from "react";
import "./Top50.css";


export const Top50 = () => {
    const [top, setTop] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const urlTop = 'https://api.tvmaze.com/shows'

    // const data = [
    //     {
    //       col1: 'image in here',
    //       col2: 'name in here',
    //       col3: 'genre in here',
    //     },
    //   ]

    // const columns = [
    //     {
    //         // first group - TV Show
    //         Header: "TV Show",
    //         // First group columns
    //         columns: [
    //             {
    //                 Header: "Image",
    //                 accessor: "col1"
    //             },
    //             {
    //                 Header: "Name",
    //                 accessor: "col2"
    //             },
    //             {
    //                 Header: "Genre",
    //                 accessor: "col3"
    //             },
    //         ]
    //     }]

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = useTable({ columns, data : data })

    const fetchWithAxios = async (urlTop, setTop) => {
        axios
            .get(urlTop)
            .then((res) => setTop(res.data
                .filter(ele => ele.rating.average > 8)
                .sort((a, b) => b.rating.average - a.rating.average)
                .slice(0, 50)
            ))
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        fetchWithAxios(urlTop, setTop);
    }, []);



    console.log(top)
    if (top.length === 0) {
        return 'Loading'
    }

    return (
        <div>
            <div className="hero">
                <Quotes />
            </div>
            <h1 className="top50-heading">Top 50 TV Shows </h1>

            <div className="table">

                <table>
                    <thead>
                        <tr className="titles">
                            <th colspan="2">Name</th>
                            <th>Genre</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {top.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className="tab-image"><a href={"/CurrentPage/" + val.id}><img src={val.image.medium}/></a></td>
                                    <td className="tab-name">{key + 1}. <a href={"/CurrentPage/" + val.id}> {val.name} </a> ({val.premiered.slice(0, 4)} 
                                    -{(val.ended || "now").slice(0, 4)})</td>
                                    <td className="tab-genre" >{val.genres.join(', ')}</td>
                                    <td className="tab-rating">⭐️{val.rating.average}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>



        </div>

    );
};