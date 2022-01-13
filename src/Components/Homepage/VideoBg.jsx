import React from 'react'
import "./Homepage.css"
import video from "./wievid.mp4"

export default function VideoBg() {
    return (
        <div className="videoBg">
            <video autoPlay loop muted src={video} type="video/mp4"/>
        </div>
    )
}
