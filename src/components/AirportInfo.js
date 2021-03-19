import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';
import PlaceInfo from './PlaceInfo';
import CarrierInfo from './CarrierInfo';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [quotes,setQuotes] = useState([])
    const [carriers,setCarrier] = useState([])
    const [source,setSource] = useState("")
    const [currency,setCurrency] = useState("")
    const [destination,setDestination] = useState("")
    const [inboundDate,setInboundDate] = useState("")
    const [outboundDate,setOutboundDate] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)
    const [showPlaceInfo,setShowPlaceInfo] = useState(false)
    const [showCarrierInfo,setShowCarrierInfo] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            // TO DO: ask the user for an input origin and destination. Using the API, we will translate these into the airport codes needed for the final url call
            // Do this for origin and destination, then use the created id's in the response
            let originresponse = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: source}), reqOptions)
            originresponse = await originresponse.json()
            let sourceId = originresponse.Places[0].PlaceId
            let desresponse = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: destination}), reqOptions)
            desresponse = await desresponse.json()
            let destinationId = desresponse.Places[0].PlaceId
            // use the currency, sourceId, destinationId, and outbound date to find the available flights
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/"+ currency + "/en-US/" + sourceId + "/" + destinationId + "/" + outboundDate , reqOptions)
            response = await response.json()
            let currenciesResponse = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", reqOptions)
            // use the response to gain access to Places, Quotes, and Carriers (the three tables that will be present on the page)
            setPlaces(response.Places)
            setQuotes(response.Quotes)
            setCarrier(response.Carriers)
        }
        fetchMyAPI()
        setShowPlaces(true)
        setShowPlaceInfo(true)
        setShowCarrierInfo(true)
        // reset all of the fields for the next call
        setSource("")
        setDestination("")
        setInboundDate("")
        setOutboundDate("")
        setCurrency("")
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="source">Source:</label>
                <input id="source" value={source} onChange={e => setSource(e.target.value)} required/>
                <label htmlFor="destination">Destination:</label>
                <input id="destination" value={destination} onChange={e => setDestination(e.target.value)} required/>
                <label htmlFor="outboundDate">Outbound Date:</label>
                <input id="outboundDate" value={outboundDate} onChange={e => setOutboundDate(e.target.value)} required/>
                <label htmlFor="currency">Currency:</label>
                <input id="currency" value={currency} onChange={e => setCurrency(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           { showPlaces ? <Places quotes = {quotes}></Places> : <></>}
           { showPlaceInfo ? <PlaceInfo places = {places}></PlaceInfo> : <></>}
           { showCarrierInfo ? <CarrierInfo carriers = {carriers}></CarrierInfo> : <></>}
        </div>
    )
}

export default AirportInfo;