import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const perspectiveContainerStyle: React.CSSProperties = {
    width: "300px",
    height: "200px",
    perspective: "2000px",
  };

  const flipCardInnerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "",
  };

  const flipCardFrontStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    textAlign: "center",
    borderRadius: "15px",
    backfaceVisibility: "hidden",
    backgroundColor: "#bbb",
  };

  const flipCardBackStyle: React.CSSProperties = {
    ...flipCardFrontStyle,
    transform: "rotateY(180deg)",
  };

  return (
    <>
      <div style={perspectiveContainerStyle}>
        <div style={flipCardInnerStyle}>
          <div style={flipCardFrontStyle}>
            <p>This is the front</p>
          </div>
          <div style={flipCardBackStyle}>
            <p>This is the back</p>
          </div>
        </div>
      </div>
      <button onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
    </>
  );
};

export default Card;
