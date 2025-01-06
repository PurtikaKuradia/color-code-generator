import { useState } from "react";

function getHexColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[colorUtility(hex.length)];
  }
  return hexColor;
}

function colorUtility(length) {
  return Math.floor(Math.random() * length);
}

function getRGBColor() {
  const r = colorUtility(256);
  const g = colorUtility(256);
  const b = colorUtility(256);

  return `rgb(${r},${g},${b})`;
}

export default function RandomColor() {
  const [colorType, setColorType] = useState("rgb");
  const [color, setColor] = useState(getRGBColor());

  function handleHexColor() {
    setColor(getHexColor());
  }

  function handleRGBColor() {
    setColor(getRGBColor());
  }

  return (
    <div
      style={{
        background: color,
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem",
        }}
      >
        <button
          onClick={() => {
            setColorType("rgb");
            handleRGBColor();
          }}
        >
          Generate Random RGB Color
        </button>
        <button
          onClick={() => {
            setColorType("hex");
            handleHexColor();
          }}
        >
          Generate Random Hex Color
        </button>
        <button onClick={colorType === "hex" ? handleHexColor : handleRGBColor}>
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          color: "white",
          marginTop: "50px",
        }}
      >
        <h3>{colorType === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
