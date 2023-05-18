interface ContainerProps extends React.PropsWithChildren {
    width?: string;
    height? : string;
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
    overflow?: "hidden" | "auto" | "none";
    zIndex?: number;
    // outras propriedades do Container, se houver
  }
  
  const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
    const ConteinerStyle = {
        width: props.width || "100%", 
        display: props.display || "flex", 
        justifyContent: props.justifyContent || "center", 
        alignItems: props.alignItems || "center", 
        flexWrap: props.flexWrap || "wrap", 
        padding: props.padding, 
        marginTop: props.marginTop, 
        gap: props.gap,
        backgroundColor: props.backgroundColor,
        overflow: props.overflow || "",
        zIndex: props.zIndex,
    }
    return (
       

      <div className="container" style={ConteinerStyle}>
        {children} 
      </div>
    );
  };
  
  export default Container;
  