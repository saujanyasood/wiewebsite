import React from "react";
import "./CardSlider.css";

import apis from "./WIEEvents/APIs.jpeg";
import arvr from "./WIEEvents/ARVR.jpeg";
import blockchain from "./WIEEvents/Blockchain.jpeg";
import codingblocks from "./WIEEvents/CodingBlocks.jpeg";
import cybersec from "./WIEEvents/CyberSecurity.jpeg";
import fintech from "./WIEEvents/Fintech.jpeg";
import innovation from "./WIEEvents/Innovation.jpeg";
import itrack from "./WIEEvents/iTrack.jpeg";
import webd from "./WIEEvents/WebDevelopment.jpeg";
import wiex from "./WIEEvents/WIExperience.jpeg";
import womenintech from "./WIEEvents/WomenInTech.jpeg";
import paneldisc from "./WIEEvents/PanelDisc.jpeg";

console.clear();

const slides = [
  {
    title: "APIs 101",
    description: "with Postman",
    image: apis,
  },
  {
    title: "Cloud Connected AR/VR App",
    description: "in 15 minutes",
    image: arvr,
  },
  {
    title: "BlockChain 101 Workshop",
    description: "with Tezos",
    image: blockchain,
  },
  {
    title: "Get Set Innovate",
    description: "",
    image: codingblocks,
  },
  {
    title: "CyberSecurity",
    description: "Dos and Donts",
    image: cybersec,
  },

  {
    title: "Fintech Fundamentals",
    description: "",
    image: fintech,
  },

  {
    title: "Webinar on iTrack",
    description: "",
    image: itrack,
  },

  {
    title: "Innovation in Education",
    description: "",
    image: innovation,
  },

  {
    title: "When and How to start on a project",
    description: "with Web Development",
    image: webd,
  },

  {
    title: "WIExperience",
    description: "",
    image: wiex,
  },

  {
    title: "Women in Tech",
    description: "",
    image: womenintech,
  },
  {
    title: "Panel Discussion",
    description: "Placement Opportunities for Women",
    image: paneldisc,
  },
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
      mouseY: undefined,
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
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
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
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideContent">
        <img src={slide.image} alt="slide"></img>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function CardSlider() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="CardSlider">
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
