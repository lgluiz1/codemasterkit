import style from "./style.module.css";
import Btn from "../buttons/gitbuttom";
import Hamburger from "../showcase/Hamburge";
import PowerButton from "../showcase/Hamburge/PowerButton";
import Card from "../card";
import Container from "../Container";

const componentes: Array<{ title: string; component: JSX.Element, code: string }> = [
  {
    title: "Hamburgue",
    component: <Hamburger className="HamburgeExemple"></Hamburger>,
    code: Hamburger.toString(),
  },
  {
    title: "PowerButton",
    component: <PowerButton />,
    code: PowerButton.toString(),

  },
  {
    title: "Btn",
    component: <Btn text="Button" hoverBackgroundColor="transparent" backgroundColor="#fff" hoverBorderColor="1px solid #fff" hoverTextColor="#fff" color="#000"/>,
    code: Btn.toString(),
  },

  // adicione mais componentes aqui
];

export default function Main() {
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
            hoverBackgroundColor="#7790ff"
            hoverTextColor="#fff"
            fontSize={15}
            borderRadius="0"
            border="none"
            width="140px"
            height="40px"
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
        {componentes.map((item, index) => (
          <Card
            key={index}
            classeName={style.btnCode}
            width="20%"
            height="15vw"
            marginTop="8%"
            value={`${item.code}`}
          >
            {item.component}
          </Card>
        ))}
      </Container>
    </>
  );
}
