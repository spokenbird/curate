import React, { Component } from "react";

class Artists extends Component {

    render() {
        return (<div>
                { this.props.artists.map( artist => artist.name )}
            </div>
        );
    }
}

export default Artists;