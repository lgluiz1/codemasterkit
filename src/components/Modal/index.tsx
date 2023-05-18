import { useState, CSSProperties, useRef, useEffect } from "react";
import Btn from "../buttons/gitbuttom";
import CloseIcon from "@mui/icons-material/Close";

const styleModal: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "1000",
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "100%",
};

interface ModalProps {
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

export default function Modal({
  isOpen,
  onClose,
  className,
  position,
  top,
  left,
  transform,
  zIndex,
  backgroundColor,
  opacity,  
  width,
  height,  
  showCloseButton,
  
}: ModalProps) {
  const modalStyle: CSSProperties = {
    position: position || ("fixed" && "relative"),
    top: top || "",
    left: left || "",
    transform: transform || "",
    zIndex: zIndex || "",
    backgroundColor: backgroundColor || "",
    width: width || "",
    height: height || "",
    transition: "0.5s all",
    opacity: opacity || " ",
    
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (isOpen) {
    return (
      <div
        style={{ ...styleModal, ...modalStyle }}
        className={className}
        ref={modalRef}
      >
        {/* Conteúdo do modal */}
        {showCloseButton && (
          <Btn
            onClick={onClose}
            className="btnCloseModal"
            backgroundColor=""
            border="none"
            hoverBorderColor="none"
            borderRadius="0"
            position="absolute"
            top="0"
            right="0"
            width="0"
            height="0"
          >
            <CloseIcon />
          </Btn>
        )}
      </div>
    );
  }

  return null;
}

export function ComponentCard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const viewComponentCode = () => {
    setModalOpen(true);
  };

  const closeComponentCode = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Component Card</h1>
      <button onClick={viewComponentCode}>Ver Código</button>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeComponentCode}
          showCloseButton={true} // Defina como false para ocultar o botão de fechar
        />
      )}
    </div>
  );
}
