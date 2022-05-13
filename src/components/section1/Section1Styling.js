import styled from "styled-components";
import Image from "../globalComponents/assets/HeroBg.jpg";
import { Colors } from "../globalComponents/Colors";
export const Container = styled.div`
  max-width: 100vw;

  height: 80vh;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Image});
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media screen and (max-width: 960px) {
    background-size: cover;
  }
`;

export const DescriptionElements = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  width: 30%;

  /* height: 5%; */
`;

export const Text1 = styled.span`
  font-size: 17px;
  letter-spacing: 2px;
  font-weight: bold;
  color: aliceblue;

  margin-bottom: -1.5rem;
`;
export const Text2 = styled.h1`
  font-size: 3rem;
  line-height: 3rem; ;
`;

export const Text3 = styled.span`
  font-size: 17px;
  margin-top: -1rem;
`;

export const FormContainer = styled.form`
  width: 14rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 3rem;
  right: 2rem;
  padding: 2rem;
  padding-top: 1rem;
  border-radius: 20px;
  background-color: ${Colors.secondary};
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const InputElements = styled.div`
  width: 70;
  button {
    margin-top: 1rem;
    background-color: ${Colors.secondary};
    :hover {
      background-color: #17233fab;
    }
  }
`;
export const Input = styled.input`
  padding: 12px 2.4rem 12px 10px;
  background-color: aliceblue;
  outline: none;
  font-size: 15px;
  color: ${Colors.secondary};
  margin-bottom: 5px;
  :focus {
    border: 1px solid blue;
  }
`;
