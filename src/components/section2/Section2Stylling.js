import styled from "styled-components";
import { Colors } from "../globalComponents/Colors";

export const Container = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: ${Colors.primary};
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  /* height: 80%; */
  background-color: ${Colors.secondary};
`;
export const Top = styled.div`
  height: 25%;
  background-color: #060f25f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  padding: 1rem 0;

  p {
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: 70%;
  padding: 1rem 0;

  .GridItem {
    color: aliceblue;
    /* background-color: red; */
    margin-left: 2px solid blue;
    padding: 0 3rem;
    h2 {
      font-size: 1.7rem;
      line-height: 1rem;
    }
  }
  .GridContainer {
    padding-left: 1rem;
  }
`;
