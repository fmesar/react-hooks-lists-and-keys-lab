import React from "react";
function NavItem(props){
  return<a href={`#${props.link}`}>{props.link}</a>
}

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((key) => <NavItem link={key}/>)}</nav>;
}

export default NavBar;
