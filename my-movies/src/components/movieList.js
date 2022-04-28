import React from "react";


// class MovieList extends React.Component {

//     render() {
//         return (
//             <div className="row">

//                 {this.props.movies.map((movie) => (
//                     <div className="col-lg-4" key={movie.id}>
//                         <div className="card mb-4 shadow-sm">
//                             <img src={movie.imageUrl} alt="Movie Name" className="card-img-top" />
//                             <div className="card-body">
//                                 <h4 className="card-title">{movie.name}</h4>
//                                 <p className="card-text">{movie.overview}</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
//                                     <h2><span className="badge rounded-pill bg-primary">{movie.rating}</span></h2>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 ))}



//             </div>
//         )
//     }
// }

const MovieList = (props) => {


    // // function deleteBtn(event) {
    //     console.log("btn clicked");
    // }

    return (
        <div className="row">

            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageUrl} alt="Movie Name" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">{movie.name}</h4>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger" onClick={() => props.deleteProp(movie)}>Delete</button>
                                <h2><span className="badge rounded-pill bg-primary">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            }



        </div >
    )
}

export default MovieList;