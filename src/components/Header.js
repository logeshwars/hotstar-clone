import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import Menu from "./Menu";

function Header({ fun }) {
  const [searchClick, setSearchClick] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const funcs = () => fun(true);
  return (
    <Head>
      <Nav>
        <Name>
          <List
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <MenuIcon />
            {showMenu && <Menu />}
          </List>
          <Logo src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />
        </Name>
        <NavMenu>
          <a>
            <span>TV</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>Movies</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>Sports</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>News</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>Premium</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>Disney+</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>Kids</span>
          </a>
        </NavMenu>
      </Nav>
      <Left>
        <Search className={` ${searchClick && "searchOnclick"}`}>
          <input
            className={` ${searchClick && "searchclick"}`}
            type="text"
            placeholder="Search"
            onFocus={(e) => setSearchClick(true)}
            onBlur={(e) => setSearchClick(false)}
          />
          <SearchIcon className="search" />
        </Search>
        <Subscribe>
          <Button>Subscribe</Button>
          <span onClick={funcs}>LOGIN</span>
        </Subscribe>
      </Left>
    </Head>
  );
}

export default Header;

const Head = Styled.div`
display:flex;
align-items:center;
padding:5px 50px;
top:0;
position: fixed;
z-index:1;
width: 100vw;
 background: #141b29 ;
justify-content:space-between;
`;

const Name = Styled.div`
display:flex;
align-items:center;
`;
const Nav = Styled.div`
height:70px;
display:flex;
align-items:center;
`;
const Logo = Styled.img`
width:115px;
padding-bottom:10px;
margin-left:0px;

`;
const NavMenu = Styled.div`

a{
    display:flex;
    align-items:center;
    padding:0px 15px;
    font-size:16px;
    font-weight:300;
  }
}
`;
const Left = Styled.div`
display: flex;
align-items:center;
.searchOnclick{
  border-bottom:1px solid blue;
}
`;
const Search = Styled.div`
display: flex;
align-items:center;
border-bottom:1px solid white;
input{
    background-color:transparent;
    border:none;
    font-size:17px;
    height:30px;
    color:white;
}
input::placeholder{
   color:lightgray;
}
.search{
  color:gray;
  font-size: 4vh !important;
  padding: 5px;
}
.searchclick{
  width:50vh;
}
`;
const Subscribe = Styled.div`
Button{
    background-color:blue;
    height:25px;
    width:90px !important;
    font-weight:bold;
    font-size:12px;
    color: white;
    margin-left: 15px;
     margin-right:  15px;
}
span{
  cursor:pointer;
}
`;
const List = Styled.div`
  display:flex;
  flex-direction:column;  
  width: 50px;
  height:55px;  
  padding:15px 10px;
  overflow: visible;
`;
