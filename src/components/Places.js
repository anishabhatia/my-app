import React from 'react';
import './Places.css';

function Places(props) { 

    return(
        <div className="places">
            <table>
                <thead>
                    <tr>
                        
                        <th>Origin Airport Id</th>
                        <th>Departure Date</th>
                        <th>Destination Airport Id</th>
                        <th>Price</th>
                        <th>Carrier Id</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr >
                            
                            <th>{quote.OutboundLeg.OriginId}</th>
                            <th>{quote.OutboundLeg.DepartureDate}</th>
                            <th>{quote.OutboundLeg.DestinationId}</th>
                            <th>{quote.MinPrice}</th>
                            <th>{quote.OutboundLeg.CarrierIds[0]}</th>
                            
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Places;