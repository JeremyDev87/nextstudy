import axios from 'axios';
import RenderResult from 'next/dist/server/render-result';
import { useEffect, useState } from 'react';
import Seo from '../components/Seo'

export default function Home({ results }) {
    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     //async fetch 방식
    //     (async () => {
    //         const { results } = await (await (await fetch("/api/movies")).json());
    //         setMovies(results);
    //     })();
    //     //promise axios 방식
    //     // new Promise((resolve, reject) => {
    //     //     resolve(axios.get("/api/movies"));
    //     // }).then(result => {
    //     //     console.log(result);
    //     //     setMovies(result.data.results)
    //     // })
    //     //async axios 방식
    //     // (async () => {
    //     //     const { data } = await (await axios("/api/movies"));
    //     //     setMovies(data.results)
    //     // })();
    // }, [])
    return (
        <div className="container">
            <Seo title="Home" />
            {/* {!movies && <h4>Loading...</h4>} */}
            {results?.map(movie => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))
            }
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns : 1fr 1fr;
                    padding : 20px;
                    gap : 20px;
                }
                .movie img {
                    max-width : 100%;
                    border-radius : 12px;
                    transition : transform 0.2s ease-in-out;
                    box-shadow : rgba(0,0,0,0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform : scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size : 18px;
                    text-align : center;
                }
            `}
            </style>
        </div >
    )
}
export async function getServerSideProps() {
    const { results } = await (await (await fetch("http://localhost:3000/api/movies")).json());
    return {
        props: {
            results,
        },
    }
}