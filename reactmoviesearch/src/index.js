import React from 'react';
import ReactDOM from 'react-dom';
import BuscaFilmes from './buscaFilmes';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col">
                        <h1 className="text-center" > React Movie Search </h1>
                    </div>
                </div>
                    <BuscaFilmes />
            </div>
        );
    }
}

ReactDOM.render( <Main /> , document.getElementById('root'));