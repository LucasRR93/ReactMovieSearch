import React, {useState} from "react";
import FilmeCard from "./filmeCard"


export default function BuscaFilmes(){

    const [query, setQuery] = useState('Jurassic Park');
    const [filmes, setFilmes] = useState([]);    

    const buscaFilmes = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=343b78cd399990a508c7b6e9302de472&language=pt-BR&query=${query}&page=1&include_adult=false`;
        
        try {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data.results);
            } catch(err) {
                console.error(err);
            }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form className="form row mt-5 rounded-pill overflow-hidden" onSubmit={buscaFilmes}>
                    <div className="col-sm-9 p-0"><input className="input form-control border-0 px-4" type="text" name="query" placeholder="i.e. Jurassic Park" onChange={(e) => setQuery(e.target.value)}/></div>
                    <div className="col-sm-3 p-0"><button className="button form-control border-0 rounded-pill" type="submit">Procurar</button></div>
                </form>
            </div>
            <div className="col-md-12 pt-5">
            <div className="row lista-filmes">
                    {filmes.map(filme => (
                        <FilmeCard filme={filme} key={filme.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}