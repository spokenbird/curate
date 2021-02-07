import React, { Component } from "react";
import SpotifyAPI from "../utility/SpotifyAPI";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_query: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    async handleSearch(evt) {
        evt.preventDefault();
        const searchParams = new URLSearchParams(this.state.search_query);
        const searchResults = await SpotifyAPI.requestSearch(searchParams, this.props.token);
        this.props.handleData(searchResults);
    }

    render() {
        return (
            <form onSubmit={this.handleSearch}>
                <label htmlFor="search_query">Search</label>
                <input onChange={this.handleChange} name="search_query" value={this.state.search_query}/>
            </form>

        );
    }
}

export default Search;