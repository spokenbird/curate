import React, {useState, useEffect} from "react";
import axios from "axios";
import Search from "./Search";
import Artists from "./Artists";
const BASE_URL = 'http://localhost:3001';

interface SearchResultsProps {

}

export default function Home() {
    const [token, setToken] = useState('');
    const [spotifySearchResults, setSpotifySearchResults] = useState({});

    // this is basically the same as componentDidMount.
    // this is because the use effect relies on deps, and will update when those deps change
    // since we supplied no dependencies causing a rerender, this runs at the start one time.
    // @ts-ignore
    useEffect(async () => {
        const tokenReq = await axios.get(`${BASE_URL}/api/token`);
        setToken(tokenReq.data.access_token);
    }, []);


    const handleData = (searchResults: any) => {
        setSpotifySearchResults(searchResults);
        const results = spotifySearchResults;
        console.log("THE STATE IS, ", results);
    }

    return (
        <div>
            <Search token={token}
                    handleData={handleData} />
            <Artists artists={spotifySearchResults} />
        </div>
    );
}