import React from "react";
import SearchBar from './searchBar';
import MovieList from "./movieList";
import AddMovie from "./addmovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
//require("dotenv").config();
console.log(process.env.REACT_APP_API_KEY);
//console.log(process.env.NODE_ENV);





// const App = () => {
//     return (
//         <h1>Hello World</h1>
//     )
// }

class App extends React.Component {

    state = {
        // movies: [
        //     {
        //         "id": 1,
        //         "name": "Beyin ogurlanmasi",
        //         "rating": 9,
        //         "overview": "Bey ogurlandi",
        //         "imageUrl": "https://www.themoviedb.org/t/p/original/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg"
        //     },
        //     {
        //         "id": 2,
        //         "name": "Qaynana",
        //         "rating": 8,
        //         "overview": "Nesibe Zeynalova",
        //         "imageUrl": "https://www.themoviedb.org/t/p/original/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg"
        //     },
        //     {
        //         "id": 3,
        //         "name": "Ulduz",
        //         "rating": 8.5,
        //         "overview": "Nazik ona dermandir",
        //         "imageUrl": "https://www.themoviedb.org/t/p/original/vDHsLnOWKlPGmWs0kGfuhNF4w5l.jpg"
        //     },
        //     {
        //         "id": 4,
        //         "name": "Yeddi ogul isterem",
        //         "rating": 7.5,
        //         "overview": "Yeddi ogul",
        //         "imageUrl": "https://www.themoviedb.org/t/p/original/mn1GYIQ1tvFuuu0YBNZBvrHyrkO.jpg"
        //     }
        // ],
        movies: [],

        searchQuery: ""


    }

    // async componentDidMount() {
    //     const baseUrl = "http://localhost:3002/movies";
    //     const response = await fetch(baseUrl);
    //     console.log(response);
    //     const result = await response.json();
    //     console.log(result);
    //     this.setState({ movies: result });
    // }


    // FAKE API
    async componentDidMount() {
        const response = await axios("http://localhost:3002/movies");
        console.log(response);
        this.setState({ movies: response.data })
    }

    // Real API 
    // async componentDidMount() {
    //     const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    //     console.log(response);
    //     this.setState({ movies: response.data.results })
    // }


    // deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter(m => m.id !== movie.id);


    //     //first editiion
    //     // this.setState({
    //     //     movies: newMovieList
    //     // });

    //     //second edition
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    //Fetch API
    // deleteMovie = async (movie) => {
    //     const mainUrl = `http://localhost:3002/movies/${movie.id}`;
    //     await fetch(mainUrl, {
    //         method: "DELETE"
    //     })

    //     const newMovieList = this.state.movies.filter(m => m.id !== movie.id);

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    // Axios API

    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        //console.log(event.target.value);
        this.setState({ searchQuery: event.target.value })
    }




    render() {

        let filteredMovie = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
            }
        )

        return (
            <Router>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={[< SearchBar searchMovieProp={this.searchMovie} />, <MovieList movies={filteredMovie}
                            deleteProp={this.deleteMovie} />]}  >

                        </Route>


                        <Route path="/add" element={<AddMovie />}></Route >
                    </Routes>




                </div>
            </Router >
        );
    }
}

export default App;