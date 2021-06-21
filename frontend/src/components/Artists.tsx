import React, {useEffect, useState} from "react";

interface Artist {
    id: number,
    name: string,
    genres: string[],
    href: string,
    popularity: number,
    images: [{
        height: number,
        width: number,
        url: string
    }][],
    followers: {
        href: string,
        total: number
    },
    type: string,
    uri: string
}

function createArtist() {

}

export default function Artists(props: any) {
    const {result} = props;
    let artistObject: Artist[] = [];

    if (result.artists !== undefined){
        artistObject = result.artists.items;
    }

    // need to figure out better constructor method that creates
    // an artist for each element in artistObject.

    // artistObject.forEach(a => {
    //     name = a.name;
    // })

    const artistNames = artistObject.map(artist => `${artist.name}, `);

    return (
        <div>
            {artistNames}
        </div>
    );
}