import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { LiWrapper } from "./navigation.style";

type Props = {
  navigation: Object
};

const Navigation = ({ navigation }: Props) => {
  return (
    <LiWrapper>
    <nav role="navigation" className="nav nav__primary">
      <ul>
        {navigation &&
          navigation.map(item => (
            <li key={item.id}>
              <NavLink to={item.to} activeClassName="active">
                <Icon iconName = {item.iconName}/>
                <span className="label">{item.label}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
    </LiWrapper>
  );
};

export default Navigation;
