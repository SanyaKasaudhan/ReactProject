import React, { Component } from 'react'
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from 'react-google-map'
import "bootstrap/dist/css/bootstrap.min.css";
const myMapComponent=withScriptjs(withGoogleMap(props =>(<GoogleMap defaultZoom={8} defaultCenter={{lat:30.7333,lng:76.7794}}>{props.isMarkerShown && (<Marker position={{lat:30.7333,lng:76.7794}} />)} </GoogleMap>)))
export default class MapPage extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
