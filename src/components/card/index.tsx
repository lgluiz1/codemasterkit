import style from "./style.module.css";
import Btn from "../buttons/gitbuttom";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useState } from "react";
import Modal from "../Modal";
import CloseIcon from '@mui/icons-material/Close';

interface CardProps extends React.PropsWithChildren {
  classeName?: string;
  width?: string | number;
  height?: string;
  padding?: string;
  paddingTop?: string;
  paddingBotton?: string;
  marginTop?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  text?: string;
  zIndex?: number;
}

export default function Card(props: CardProps) {
  const cardStyle = {
    backgroundColor: props.backgroundColor || "white",
    color: props.color,
    fontSize: props.fontSize,
    width: props.width,
    height: props.height,
    display: props.display || "flex",
    justifyContent: props.justifyContent || "center",
    alignItems: props.alignItems || "center",
    flexWrap: props.flexWrap || "wrap",
    padding: props.padding,
    marginTop: props.marginTop,
    gap: props.gap,
    zIndex: props.zIndex,
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const viewComponentCode = () => {
    setModalOpen(true);
  };

  const closeComponentCode = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={`${style.card} ${props.classeName}`} style={cardStyle}>
        {props.children} {props.text}
        <Btn
          index={2}
          className="btnModal"
          width="50%"
          fontSize={20}
          position="absolute"
          bottom="10px"
          right="0"
          borderRadius="0"
          onClick={viewComponentCode}
        >
          <CodeIcon sx={{ fontSize: 30 }} /> Code
        </Btn>
        <Btn
          className="btnModal"
          width="50%"
          fontSize={20}
          position="absolute"
          bottom="10px"
          left="0"
          borderRadius="0"
          index={1}
          onClick={() => console.log('Clicou')}
        >
          <LanguageIcon sx={{ fontSize: 30 }} /> Demo
        </Btn>
        {isModalOpen && (
  <Modal
    width="50%"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    backgroundColor="rgba(0,0,0,0.800)"
    zIndex="99999"
    position="fixed"
    height="50%"
    isOpen={isModalOpen}
    onClose={closeComponentCode}
    showCloseButton={true}
  >
    <Btn
      onClick={closeComponentCode}
      className='btnCloseModal'
      backgroundColor='#fff'
      border='none'
      hoverBorderColor='none'
      borderRadius='0'
      position='absolute'
      top='0'
      right='0'
      width="100px"
      height="40px"
    >
      <CloseIcon />
      Fechar
    </Btn>
  </Modal>
)}



        
      </div>
    </>
  );
}
