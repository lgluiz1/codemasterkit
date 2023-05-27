import style from "./style.module.css";
import Btn from "../buttons/gitbuttom";
import GitHubIcon from '@mui/icons-material/GitHub';

import Nav from "./nav";

export default function Header() {

  const linkUrl = 'https://github.com/lgluiz1/codemasterkit';

  const openLink = () => {
    window.open(linkUrl, '_blank');

  }

  return (
    <>
      <div className={style.header}>
        <i className="bx bxs-component bx-flip-vertical bx-tada"></i>
        <Nav />
        <div className={style.textHeader}>
          <h1>Components in React</h1>
          <p>Below are some components in React.</p>
        </div>
        <div className={style.buttons}></div>

        <Btn
          width="200px"
          height="50px"
          color="#000"
          backgroundColor="#fff"
          onClick={openLink}
          hoverBorderColor="2px solid #fff"
          hoverTextColor="#fff"
          hoverBackgroundColor="transparent"
        > <GitHubIcon/> GitHub</Btn>

      </div>
      
    </>
  );
}
