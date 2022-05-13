import styled from "styled-components";
import { Colors } from "../globalComponents/Colors";

export const NavContainer = styled.div`
  height: 120px;
  width: 100vw;
`;
export const NavTop = styled.div`
  height: 30%;
  width: 100%;
  color: white;
  text-transform: uppercase;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  background-color: ${Colors.secondary};
`;
export const NavBottom = styled.div`
  height: 70%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${Colors.primary};
`;
export const NavLeft = styled.div`
  padding-left: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;

  h2 {
    font-weight: bold;
    letter-spacing: 0.5px;
    color: ${Colors.secondary};
  }
  p {
    color: ${Colors.blue};
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-top: -1rem;
    font-size: 12px;
  }
`;
export const NavCenter = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavMenu = styled.div`
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-right: 20px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  p :hover div {
    opacity: 1;
    transition: all 0.6s ease-in-out;
  }
  div ul {
    color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: -2.5rem;
    width: 100%;
    text-transform: uppercase;
  }
  div ul .list {
    width: 90%;
    border-bottom: 1px solid white;
    padding: 15px 1rem 15px 0;
  }
  div ul li {
    margin-left: 1rem;
    font-size: 12px;
    width: 80%;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
  :hover {
    color: ${Colors.blue};
  }
`;
export const NavRight = styled.div`
  text-align: center;
  color: ${Colors.blue};
  overflow-x: hidden;
  flex: 1;
  div {
    display: none;
    @media screen and (max-width: 960px) {
      display: block;
      margin-right: 3rem;
      font-weight: bold;
      font-size: 1.3rem;
      color: ${Colors.secondary};
    }
  }
  button {
    margin-right: 2rem;
    background-color: ${Colors.secondary};
    border-radius: 10px;
    font-size: 13px;
    :hover {
      background-color: #0c172eab;
      transition: all 0.3s ease-in-out;
    }
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
`;
export const ListContainer = styled.div`
  position: absolute;
  opacity: 0;
  top: 60px;
  width: 12rem;
  height: auto;
  background-color: ${Colors.secondary};
  display: flex;
  justify-content: center;

  a {
    list-style: none;
    color: white;
    text-decoration: none;
  }
`;
