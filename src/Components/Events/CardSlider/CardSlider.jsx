import React from 'react';
import './CardSlider.css'

import apis from "./WIEEvents/APIs.jpeg"
import arvr from "./WIEEvents/ARVR.jpeg"
import blockchain from "./WIEEvents/Blockchain.jpeg"
import codingblocks from "./WIEEvents/CodingBlocks.jpeg"
import cybersec from "./WIEEvents/CyberSecurity.jpeg"
import fintech from "./WIEEvents/Fintech.jpeg"
import innovation from "./WIEEvents/Innovation.jpeg"
import itrack from "./WIEEvents/iTrack.jpeg"
import webd from "./WIEEvents/WebDevelopment.jpeg"
import wiex from "./WIEEvents/WIExperience.jpeg"
import womenintech from "./WIEEvents/WomenInTech.jpeg"
import paneldisc from "./WIEEvents/PanelDisc.jpeg"

console.clear();

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image: apis
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image: arvr
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: blockchain
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: codingblocks
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: cybersec
  },

  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: fintech
  },

  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: itrack
  },

  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: innovation
  },

  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: webd
  },

  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: wiex
  },

  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: womenintech
  },
  {
    title: "Panel Discussion",
    subtitle: "Australia",
    description: "A piece of heaven",
    image: paneldisc
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        // style={{
        //   backgroundImage: `url('${slide.image}')`
        // }}
      />
      <div
        className="slideContent" 
        // style={{
        //   backgroundImage: `url('${slide.image}')`
        // }}
      ><img src = {wiex}></img>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function CardSlider() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className = "CardSlider">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
}


export default CardSlider;
