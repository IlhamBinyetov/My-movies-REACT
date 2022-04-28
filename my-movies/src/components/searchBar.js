import React from "react";


class SearchBar extends React.Component {

    // state = {
    //     searchForm: ""
    // }

    Prevent = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.Prevent}>
                <div className="form-row mb-4 d-flex">
                    <div className="col-10">
                        <input
                            // onChange={(event) => this.setState({ searchForm: event.target.value })}
                            onChange={this.props.searchMovieProp}
                            type="text"
                            className="form-control"
                            placeholder="Search here"
                        //value={this.state.searchForm}
                        />

                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-md btn-primary" style={{ float: "right" }}>Add Movie</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar