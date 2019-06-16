import React from "react";

//import './styles.scss';
import { Gradient } from "./page-background.style";

type Props = {
  children?: React.Node,
  className: String
};

const Pagebackground = ({ children, className }: Props) => {
  return <Gradient className={className}>{children}</Gradient>;
};

export default Pagebackground;
