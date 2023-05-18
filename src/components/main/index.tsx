import style from "./style.module.css";
import Btn from "../buttons/gitbuttom";
import Hamburger from "../showcase/Hamburge";
import PowerButton from "../showcase/Hamburge/PowerButton";
import Card from "../card";
import Container from "../Container";

const componentes = [
  {
    title: "Hamburgue",
    component: <Hamburger className="HamburgeExemple"></Hamburger>,
  },
  {
    title: "PowerButton",
    component: <PowerButton />,
  },
  {
    title: "Btn",
    component: <Btn text="Button" />,
  },
  
  // adicione mais componentes aqui
];

export default function Main() {
  const componentAreas = componentes.map((componente, ) => (
    componente.component
  ));

  const ListMenu = [
    "All",
    "Buttons",
    "Checkboxes",
    "Toggle Switches",
    "Cards",
    "Loaders",
    "Inputs",
    "Forms",
  ];
  

  return (
    <>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexWrap="wrap"
        marginTop="10px"
      >
        {ListMenu.map((item, index) => (
          <Btn
            key={index}
            className="menuTag"
            text={item}
            color="#000"
            backgroundColor="transparent"
            hoverBorderColor ="#000"
            fontSize={15}
            borderRadius="0"
            border="1px solid #000"
          />
        ))}
      </Container>

      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        flexWrap="wrap"
        gap="3%"
        marginTop="-6%"        
        zIndex={-99999}
      >
        {componentAreas.map((componentArea, index) => (
          <Card
            key={index}
            classeName={style.btnCode}
            width="20%"
            height="15vw"
            marginTop="8%"
          >
            {componentArea}
          </Card>
        ))}
      </Container>
    </>
  );
}
