import React from 'react';
import './CarrierInfo.css';

function CarrierInfo(props) { 

    return(
        <div className="PlaceInfo">
            <table>
                <thead>
                    <tr>
                        
                        <th>Carrier Id</th>
                        <th>Carrier</th>
                    </tr>
                </thead>
                <tbody>
                    {props.carriers.map(carrier => {
                        return (<tr >
                            
                            <th>{carrier.CarrierId}</th>
                            <th>{carrier.Name}</th>
                            
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default CarrierInfo;