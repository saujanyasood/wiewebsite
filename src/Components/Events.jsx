import React from "react"
import EventCard from "./EventCard"

function Events(){
    return (
        <div className="Events">
            <EventCard title="Active Events" img = "https://picsum.photos/300" />
            <EventCard title="Upcoming Events" img = "https://picsum.photos/300" />
        </div>
    )
}
export default Events;