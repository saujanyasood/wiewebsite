import React from "react"

function TestimonialCard(props){
    return (
        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna sed turpis dictum laoreet. Donec eleifend nunc ante, ac malesuada nunc faucibus quis. Cras pretium sapien eget magna sodales imperdiet. Nulla rhoncus augue non ligula rhoncus vestibulum. Aliquam iaculis purus at leo volutpat sagittis. Curabitur varius, dui consequat placerat pellentesque, orci tellus pulvinar mauris, a consequat ante metus in turpis. Pellentesque imperdiet nisi </p>

                <img src = {props.img} alt="testimonialPicture"/>
                <p>{props.position}</p>

        </div>
    )
}

export default TestimonialCard
