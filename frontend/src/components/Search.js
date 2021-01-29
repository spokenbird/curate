import React, {Component} from "react";
import SpotifyAPI from "../utility/SpotifyAPI";
import './App.css';

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

        console.log(this.state.search_query);
    }

    async handleSearch(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const searchParams = new URLSearchParams(formData).toString();
        const searchResults = await SpotifyAPI.requestSearch(searchParams, this.props.token);
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