import React, { useState } from "react";

interface BtnProps extends React.PropsWithChildren {
  className?: string;
  color?: string;
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
  fontSize?: number;
  text?: string;
  index?: number;
  borderRadius?: string;
  border?: string;
  position?: "absolute" | "relative" | "fixed";
  bottom?: string;
  right?: string;
  top?: string;
  left?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  onClick?: () => void;
  hoverTextColor?: string; // Cor do texto no hover
  hoverBorderColor?: string; // Cor da borda no hover
  hoverBackgroundColor?: string; // Cor do fundo no hover
  cursor?: string;
  transition?: string;
}

export default function Btn(props: BtnProps) {
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({
    borderRadius: props.borderRadius || "10px",
    border: props.border || "none",
    backgroundColor: props.backgroundColor || "white",
    width: props.width || 200,
    height: props.height || 50,
    color: props.color || "black",
    fontSize: props.fontSize || 20,
    position: props.position,
    bottom: props.bottom,
    right: props.right,
    top: props.top,
    left: props.left,
    display: props.display || "flex",
    alignItems: props.alignItems || "center",
    justifyContent: props.justifyContent || "center",
    gap: props.gap || "5px",
    cursor: props.cursor || "pointer",
    transition: props.transition || "0.5s all",
  });

  const handleMouseOver = () => {
    setButtonStyle({
      ...buttonStyle,
      color: props.hoverTextColor || buttonStyle.color,
      borderColor: props.hoverBorderColor || buttonStyle.borderColor,
      backgroundColor:
        props.hoverBackgroundColor || buttonStyle.backgroundColor,
    });
  };

  const handleMouseOut = () => {
    setButtonStyle({
      ...buttonStyle,
      color: props.color || buttonStyle.color,
      backgroundColor: props.backgroundColor || buttonStyle.backgroundColor,
    });
  };

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      <button
        style={buttonStyle}
        className={props.className}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {props.children} {props.text}
      </button>
    </>
  );
}
