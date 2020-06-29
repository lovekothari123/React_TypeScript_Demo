import * as React from "react";

const classNames = require("./sidebar.css");

interface Props {
  isVisible?: boolean;
  DataList?: any;
  state?: any;
  close?: any
}

interface Props {
  children?: JSX.Element[] | JSX.Element
}

const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem"
});

export const SidebarComponent: React.StatelessComponent<Props> = props => (

  <>
  
  <div id="mySidenav" className={classNames.sidenav} style={divStyle(props)}>
    {console.log("Data List Value", props.DataList)}
    {props.children && props.children}
    {props.DataList && props.DataList}
    
  </div>
  </>
);


