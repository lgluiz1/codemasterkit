import React from "react";
import style from "./style.module.css";

interface HamburgerProps {
  className?: string;
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
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
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = (props) => {
  const {
    className,
    color,
    backgroundColor,
    width,
    height,
    fontSize,
    index,
    borderRadius,
    border,
    position,
    bottom,
    right,
    top,
    left,
    display,
    onClick,
  } = props;

  const hamburgerStyle = {
    borderRadius,
    border,
    backgroundColor,
    width,
    height,
    color,
    fontSize,
    position,
    bottom,
    right,
    top,
    left,
    display,
  };

  const hamburgerSpanStyle = {
    background: backgroundColor || "#fff",
    width: "100%",
    height: "4px",
  };

  return (
    <label
      className={`${style.burger} ${className}`}
      style={hamburgerStyle}
      htmlFor={`burger-${index}`}
    >
      <input type="checkbox" id={`burger-${index}`} onClick={onClick} />
      <span style={hamburgerSpanStyle}></span>
      <span style={hamburgerSpanStyle}></span>
      <span style={hamburgerSpanStyle}></span>
    </label>
  );
};

export default Hamburger;
