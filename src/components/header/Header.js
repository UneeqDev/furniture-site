import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "@mui/material";

import {
  NavContainer,
  NavRight,
  NavBottom,
  NavLeft,
  NavTop,
  NavCenter,
  NavMenu,
  ListContainer,
} from "./HeaderStyling";
import { Data } from "./Data";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavContainer>
        <NavTop>ONE DAY CONCRETE FLOOR COATINGS FOR LIFETIME</NavTop>
        <NavBottom>
          <NavLeft>
            <div>
              <h2>NIMSCRETE</h2>
              <p>CONCRETE COATINGS</p>
            </div>
          </NavLeft>
          <NavCenter>
            <NavMenu>
              <p>Visualizer</p>
              <RiArrowDropDownLine />
            </NavMenu>
            <NavMenu>
              <p>Residential</p>
              <RiArrowDropDownLine />
              <ListContainer>
                <ul>
                  {Data.map((data, index) => {
                    return (
                      <div className="list" key={index}>
                        <li>{data}</li>
                      </div>
                    );
                  })}
                </ul>
              </ListContainer>
            </NavMenu>
            <NavMenu>
              <p>Commercial</p>
              <RiArrowDropDownLine />
              <ListContainer>
                <a href=""></a>
              </ListContainer>
            </NavMenu>
            <NavMenu show={show}>
              <p>Finishes</p>
              <RiArrowDropDownLine />
              <ListContainer>
                <p>hi</p>
              </ListContainer>
            </NavMenu>
            <NavMenu>
              <p>Project</p>
              <RiArrowDropDownLine />
              <ListContainer>
                <a href=""></a>
              </ListContainer>
            </NavMenu>
            <NavMenu>
              <p>About</p>
              <RiArrowDropDownLine />
              <ListContainer show={show}>
                <a href=""></a>
              </ListContainer>
            </NavMenu>
          </NavCenter>
          <NavRight>
            <div>
              <AiOutlineMenu />
            </div>
            <Button variant="contained">Get A Quote</Button>
          </NavRight>
        </NavBottom>
      </NavContainer>
    </>
  );
}

export default Header;
