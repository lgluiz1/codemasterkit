import style from './style.module.css';

interface BntProps extends React.PropsWithChildren {
  className?: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
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
  hoverTextColor?: string; // Cor do texto no hover
  hoverBorderColor?: string; // Cor da borda no hover
  hoverBackgroundColor?: string; // Cor do fundo no hover
}

export default function Btn(props: BntProps) {
  const buttonStyle = {
    borderRadius: props.borderRadius || "none",
    border: props.border || "none",
    backgroundColor: props.backgroundColor || "white",
    width: props.width || 200,
    height: props.height || 50,
    color: props.color || "black",
    fontSize: props.fontSize || 20,
    position: props.position, // Corrigido: "position" em vez de "positon"
    bottom: props.bottom,
    right: props.right,
    top: props.top,
    left: props.left,
    display: props.display,
  };

  const hoverStyle = {
    ...(props.hoverTextColor && { color: props.hoverTextColor || "#fff" }),
    ...(props.hoverBorderColor && { borderColor: props.hoverBorderColor }),
    ...(props.hoverBackgroundColor && { backgroundColor: props.hoverBackgroundColor }),
  };

  return (
    <button className={`${style.btn} ${props.className}`} style={{ ...buttonStyle, ...hoverStyle }} onClick={props.onClick}>
      {props.children} {props.text}
    </button>
  );
}

