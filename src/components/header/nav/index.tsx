import style from "./style.module.css";
import GridViewIcon from "@mui/icons-material/GridView";
import Btn from "../../buttons/gitbuttom";
import Hamburger from "../../showcase/Hamburge";
import { useState } from "react";
import Modal from "../../Modal";

export default function Nav() {
  const list = ["Home", "About Us", "Services", "Contact Us"];


  const [isModalOpen, setModalOpen] = useState(false);

  const viewComponentCode = () => {
    setModalOpen(true);
  };

  const closeComponentCode = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={style.nav}>
        <GridViewIcon sx={{ fontSize: 50, color: "white" }} />
        <div className={style.menu}>
          {list.map((item, index) => (
            <Btn
              width="140px"
              height="40px"
              backgroundColor="transparent"
              color="white"
              fontSize={15}
              key={index}
            >
              {item}
            </Btn>
          ))}
        </div>
        <Hamburger className="MenuMobile" index={0} onClick={isModalOpen ? closeComponentCode : viewComponentCode} ></Hamburger>
      </div>
      {isModalOpen && (
  <>
    <Modal className="ModalMenu" showCloseButton={false} width="100%" height="100%" top="11%" backgroundColor="rgba(0,0,0,0.800)" zIndex="99999" position="absolute" text="Ola Povo" isOpen={isModalOpen} onClose={closeComponentCode} />
    
  </>
)}

    </>
  );
}
