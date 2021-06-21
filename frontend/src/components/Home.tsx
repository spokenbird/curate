import React, {useState, useEffect} from "react";
import axios from "axios";
import Search from "./Search";
import Artists from "./Artists";
const BASE_URL = 'http://localhost:3001';

interface Artist {
    id: number,
    name: string,
    uri: string
}

export default function Home() {
    const [token, setToken] = useState('');
    const [spotifySearchResult, setSpotifySearchResult]: any = useState({});

    // this is basically the same as componentDidMount.
    // this is because the use effect relies on deps, and will update when those deps change
    // since we supplied no dependencies causing a rerender, this runs at the start one time.
    // @ts-ignore
    useEffect(async () => {
        const tokenReq = await axios.get(`${BASE_URL}/api/token`);
        setToken(tokenReq.data.access_token);
    }, []);


    const handleData = (searchResults: any) => {
        setSpotifySearchResult(searchResults);
    };

    return (
        <div>
            <Search token={token}
                    handleData={handleData} />
            <Artists result={spotifySearchResult} />
        </div>
    );
}