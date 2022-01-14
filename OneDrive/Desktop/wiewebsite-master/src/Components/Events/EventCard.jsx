import React from "react"
import "./Events.css"

function EventCard(props){
    return (<div className="eventCard">
        <h1>{props.title}</h1>
        <img src = {props.img} alt="eventPoster"/>
        <h3>Event name and info + link to the main event page</h3>
    </div>)
}

export default EventCard
