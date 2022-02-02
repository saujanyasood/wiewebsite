import React, {useState} from "react"
import Homepage from "./Components/Homepage/Homepage"
import Contact from "./Components/Contact/Footer"
import About from "./Components/About/About"
import Events from "./Components/Events/Blogs"
import "./App.css"
import Timeline from "./Components/Timeline/Timeline"

function App(){

    const [navBarVisible, setNavBarVisible] = useState(true);
    // eslint-disable-next-line
    const [scrollValue, setScrollValue] = useState(0);
    const [darkbg, setdarkbg] = useState(false)

    function handleScroll(e){
        if(e.target.scrollTop > window.innerHeight){
            setdarkbg(true);
        }
        else{
            setdarkbg(false);
        }
        setScrollValue(prevValue =>{
            if(e.target.scrollTop > prevValue){
                setNavBarVisible(false);
            }
            else if(e.target.scrollTop < prevValue){
                setNavBarVisible(true);
            }
            return e.target.scrollTop;
        })
    }

    return (
        <div className="app" onScroll={handleScroll}>
            <div className="sections">
                <div className="homepageContainer">
                    <Homepage navBarActive={(navBarVisible && "navBarActive ")} darkbg = {(darkbg && "darkBGColor")}/>
                </div>
                <About />
                <Events />
                
                <Timeline/>
                <Contact />
            </div>
        </div>
    );
}

export default App;
