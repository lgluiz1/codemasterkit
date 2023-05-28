import { useState, CSSProperties, useRef, useEffect } from "react";
import Btn from "../buttons/gitbuttom";
import CloseIcon from "@mui/icons-material/Close";

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  position?: "absolute" | "relative" | "fixed";
  top?: string;
  left?: string;
  transform?: string;
  zIndex?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
  text?: string;
  opacity?: string;
  transition?: "0.5s all";
  showCloseButton?: boolean; // Propriedade opcional para controlar a exibição do botão de fechar
}

export default function Modal(props: ModalProps) {
  const modalStyle: CSSProperties = {
    position: props.position || ("fixed" && "relative"),
    top: props.top || "50%",
    left: props.left || "50%",
    transform: props.transform || "translate(-50%, -50%)",
    zIndex: props.zIndex || "1000",
    backgroundColor: props.backgroundColor || "rgba(0,0,0,0.1)",
    width: props.width || "100%",
    height: props.height || "100%",
    transition: props.transition || "0.5s all",
    opacity: props.opacity || " ",
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.onClose?.();
      }
    };

    props.isOpen
      ? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);
  }, [props.isOpen, props.onClose]);

  return props.isOpen ? (
    <div style={modalStyle} className={props.className} ref={modalRef}>
      {/* Conteúdo do modal */}
      {props.showCloseButton && (
        <>
          <Btn
            onClick={props.onClose}
            className="btnCloseModal"
            backgroundColor="transparent"
            border="none"
            hoverBorderColor="none"
            borderRadius="0"
            position="absolute"
            top="0px"
            right="0px"
            width="20px"
            height="20px"
            hoverBackgroundColor="red"
          >
            <CloseIcon sx={{ color: "white" }} />
          </Btn>
          <div> {props.text}</div>
        </>
      )}
    </div>
  ) : null;
}

export function ComponentCard() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Component Card</h1>
      <button onClick={() => setModalOpen(true)}>Ver Código</button>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          showCloseButton={true} // Defina como false para ocultar o botão de fechar
        />
      )}
    </div>
  );
}
