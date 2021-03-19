import React from 'react';
import './PlaceInfo.css';

function PlaceInfo(props) { 

    return(
        <div className="PlaceInfo">
            <table>
                <thead>
                    <tr>
                        <th>Airport Id</th>
                        <th>Airport Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.places.map(place => {
                        return (<tr >
                            <th>{place.PlaceId}</th>
                            <th>{place.Name}</th>
                            
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default PlaceInfo;