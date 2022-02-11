import React, {Component} from 'react';
import Genre  from './Genre';
import axios from "axios";

/* let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
] */

class GenresInDb extends Component{

    constructor(){

        super()

        this.state = {
            genres: ""
        }
    }

    componentDidMount(){

        axios("http://localhost:3001/api/genres")
        .then(response=>{
            console.log(response);
            this.setState({genres: response.data.genres})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
        
        return (
            <>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                {
                                this.state.genres !== "" ? this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.name}  key={index} />
                                    })
                                : <h1>Cargando....</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
               
            </>
        )
    }
    

}
export default GenresInDb;