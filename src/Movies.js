import React from 'react';
import './App.css';

const base_url = "http://api.themoviedb.org/3/"
const APIKEY = "307b04211dce250a210f6b24fa5afedc"

class Movies extends React.Component {
	
	constructor() {
		super();
		this.state = {
		  keyword: "",
		  movies: [],
		  isLoading: true
		};
	}
	componentWillMount() {
		localStorage.getItem('contacts') && this.setState({
			isLoading: false
		})
	}
	searchMovies(event) {
		event.preventDefault();
		this.setState({
			keyword: this.refs.keyword.value
		})
		this.fetchData(this.refs.keyword.value)
	}

	fetchData(keyword) {
		this.setState({
		  isLoading: true,
		  movies: []
		})
		const targetUrl = "".concat(base_url, 'search/movie?api_key=', APIKEY, '&query=', keyword)
		fetch(targetUrl)
		.then(response=>response.json())
		.then(results=>results.results.filter(result=>(
			result.backdrop_path != null && result.overview != null
		)))
		.then(parsedJSON=>parsedJSON.map(movie=>(
			{
				title:`${movie.title}`,
				id: `${movie.id}`,
				backdrop_path: `${movie.backdrop_path}`,
				overview: `${movie.overview}`,
				release_date: `${movie.release_date}`,
				vote_average: `${movie.vote_average}`,
				original_language: `${movie.original_language}`
			}
	  	)))
		.then(movies=>this.setState({
	  		movies: movies,
	  		isLoading: false
		}))
		.catch(error=>console.log('parsing failed', error))
	}
	
	render() {
		const{movies, isLoading} = this.state
		return(
			<div className={`${isLoading? 'is-loading' : ''}`}>
				<form onSubmit={this.searchMovies.bind(this)}>
			    	<input type="text" ref="keyword" />
			    	<button type="submit">Search movie</button>
			    </form>
				<div className="row">
					{
					  movies.map(movie=> {
						return	<div className="col-md-5 movie-block" key={movie.id}>
									<img src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path}/>
									<span>
										<h3>{movie.title}</h3>
										<p>{movie.release_date}</p>
										<p>{movie.overview}</p>
									</span>
								</div>
					  })
					}
				</div>
				<div className="loader">
				  	<p>Content loading...</p>
				</div>
			</div>
		)
	}
}

export default Movies;