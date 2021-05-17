import React from "react";

export default function FilmeCard(props){
    const filme = props.filme;
    const imgCard = <img className="img-card img-fluid" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${filme.poster_path}`} alt={filme.title + ' poster'}/>;
    const imgErro = <div className="img-erro"></div>    
    console.log(filme.backdrop_path)
    return(
        <div className="col-md-3 my-4" key={filme.id}>
                <div className="h-100 cards-filmes shadow-sm overflow-hidden">
                    {filme.poster_path ? imgCard : imgErro}
                                <div className="cont-card p-4">
                                    <h2 className="titulo-card mb-0">{filme.title}</h2>
                                    <p>{filme.original_title}</p>
                                    <p className="mb-0 mt-4">📅: {filme.release_date}</p>
                                    <p>⭐: <b>{filme.vote_average}</b> (0-10)</p>
                                </div>
                </div>

                        </div>                        
    )
}