import React, {Component} from 'react';
import axios from 'axios';

import MovieList from './MovieList';

class Movie extends Component{

	constructor(){
		super()
        this.state = {
            movies: "",
        }
	}

	componentDidMount(){
		axios("http://localhost:3001/api/movies")
		.then(response => {
			console.log(response.data.movies);
			this.setState({movies: response.data.movies});
		})
		.catch(error=>{
			console.log(error);
		})
	}

	render(){

		return(
			<>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">

									<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Titulo</th>
												<th>Calificación</th>
												<th>Premios</th>
												<th>Duración</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Id</th>
												<th>Titulo</th>
												<th>Calificación</th>
												<th>Premios</th>
												<th>Duración</th>
											</tr>
										</tfoot>
										<tbody>
											
										{
										this.state.movies !== "" ? this.state.movies.map(movie => 
											<MovieList
											key={movie.id}
											id={movie.id}
											title={movie.title}
											calificacion={movie.rating}
											premios={movie.awards}
											duracion={movie.length}
											/>
											)
											: <h1>Cargando....</h1>
										}

										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</>
		)
	}
    
}
export default Movie;