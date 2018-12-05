import React, { useEffect, useState } from "react";
import { TweenMax, TimelineMax } from "gsap";

function animate() {
  const text = document.getElementById("text");
  const hex1 = document.getElementById("hexagon-1");
  const hex2 = document.getElementById("hexagon-2");
  const hex3 = document.getElementById("hexagon-3");

  const hexes = [hex1, hex2, hex3];
  const timeline1 = new TimelineMax();
  const gimmick = getGimmick();

  TweenMax.fromTo(
    text,
    0.5,
    { scale: 0, opacity: 0 },
    { scale: 0.8, opacity: 1 }
  );

  timeline1.staggerFrom(
    hexes,
    0.5,
    { scale: 0, opacity: 0, rotation: 360, ease: Linear.easeNone },
    0.2
  );

  timeline1.to(text, 1, { scale: 1, ease: Elastic.easeOut });

  gimmick();

  function getGimmick() {
    console.log("GIMMICK");
    const from = { scale: 1 };
    const to = { scale: 1.125 };
    const timeline = new TimelineMax({ repeat: -1, repeatDelay: 3 });

    function gimmick() {
      timeline
        .staggerFromTo(hexes, 0.2, from, to, 0.1)
        .staggerFromTo(hexes, 0.2, to, from, 0.1);
    }

    return gimmick;
  }
}

function Logo(props) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
    animate();
  }, []);

  return (
    <svg
      version="1.1"
      viewBox="0 0 169.33334 169.33333"
      {...props}
      style={{ opacity }}>
      <g transform="translate(-36.004229,-4.5201169)" id="layer1">
        <path
          transform="rotate(-20.520458,75.772462,27.678804)"
          style={{
            opacity: "0.8",
            fill: "#2ad4ff",
            strokeWidth: "0.26458332"
          }}
          d="M 81.249934,139.0437 41.108458,145.49517 15.450585,113.95737 29.934186,75.968094 70.075662,69.516626 95.733536,101.05443 Z"
          id="hexagon-3"
        />
        <path
          transform="rotate(-20.520458,37.881351,-79.975038)"
          style={{
            opacity: "0.8",
            fill: "#ff80e5",
            strokeWidth: "0.26458332"
          }}
          d="M 81.249934,139.0437 41.108458,145.49517 15.450585,113.95737 29.934186,75.968094 70.075662,69.516626 95.733536,101.05443 Z"
          id="hexagon-2"
        />
        <path
          transform="rotate(-20.520458,-36.404063,6.6665469)"
          style={{
            opacity: "0.8",
            fill: "#80b3ff",
            strokeWidth: "0.26458332"
          }}
          d="M 81.249934,139.0437 41.108458,145.49517 15.450585,113.95737 29.934186,75.968094 70.075662,69.516626 95.733536,101.05443 Z"
          id="hexagon-1"
        />
        <text
          id="text"
          y="96.919235"
          x="66.972099"
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "10.58333302px",
            lineHeight: "1.25",
            fontFamily: "sans-serif",
            letterSpacing: 0,
            wordSpacing: 0,
            fill: "#f2f2f2",
            fillOpacity: 1,
            stroke: "#4d4d4d",
            strokeWidth: "0.26458332"
          }}
          xmlSpace="preserve">
          <tspan
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "19.75555611px",
              fontFamily: "bungee",
              InkscapeFontSpecification: "bungee",
              fill: "#f2f2f2",
              stroke: "#4d4d4d",
              strokeWidth: "0.26458332"
            }}
            y="96.919235"
            x="66.972099"
            id="tspan4554">
            ChatAdmin
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default Logo;
