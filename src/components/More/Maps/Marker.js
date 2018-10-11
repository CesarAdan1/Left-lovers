
import React from "react";
import { Marker } from "react-google-maps";
import cereza from "../../images/cereza.png";

const style ={
    width: '20px',
}
export default class DoctorMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={cereza} styles={style}
        >
        </Marker>
    );
  }
}