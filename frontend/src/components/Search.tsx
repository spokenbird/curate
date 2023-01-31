import React, {useState} from "react";
// @ts-ignore
import SpotifyAPI from "../utility/SpotifyAPI";

export default function Search(props: any) {
    const {handleData, token} = props;
    const [searchQuery, setSearchQuery] = useState("");

    const updateSearchQuery = (event: any) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = async (event: any) => {
        event.preventDefault();
        const searchParams = new URLSearchParams(searchQuery);
        const searchResults = await SpotifyAPI.requestSearch(searchParams, token);
        handleData(searchResults);
    }

    return (
        <form onSubmit={handleSearch}>
            <label htmlFor="searchQuery">Search</label>
            <input onChange={updateSearchQuery}
                   name="searchQuery"
                   value={searchQuery}/>
        </form>
    );
}