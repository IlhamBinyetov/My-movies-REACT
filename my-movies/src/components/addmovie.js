import React from "react";

class AddMovie extends React.Component {
    render() {
        return (
            <div className="container">
                <form className="mt-5 ">
                    <input className="form-control" placeholder="Fill the form for Adding Movie" />
                    <div className="row mt-2">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" name="name" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input type="text" className="form-control" name="rating" />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input type="text" className="form-control" name="imageUrl" />
                        </div>

                    </div>

                    <div className="row mt-2">
                        <div className="form-group col-md-12">
                            <label htmlFor="overViewTextArea">Overview</label>
                            <textarea className="form-control" name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block col-12 mt-3" value="Add movie" />
                </form >
            </div >
        )
    }
}

export default AddMovie;