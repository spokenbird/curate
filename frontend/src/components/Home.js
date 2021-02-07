import React, {Component} from "react";
import axios from "axios";
import Search from "./Search";
import Artists from "./Artists";
const BASE_URL = 'http://localhost:3001';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            spotifySearchResults: {}
        }
        this.handleData = this.handleData.bind(this);
    }

    async componentDidMount() {
        // Call the token from the backend API endpoint.
        const tokenReq = await axios.get(`${BASE_URL}/api/token`);
        const token = tokenReq.data.access_token;
        this.setState({token});
    }

    handleData(searchResults) {
        let spotifySearchResults = searchResults;
        this.setState(state => ({
            ...state,
            spotifySearchResults
        }),
            () => console.log("THE STATE IS, ", this.state.spotifySearchResults.artists.items)
            )
    }

    render() {
        return (
            <div>
                <Search token={ this.state.token } handleData={ this.handleData } />
                <Artists artists={ this.state.spotifySearchResults.artists.items } />
            </div>
        );
    }
}

export default Home;