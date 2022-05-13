import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  Container,
  Description,
  DescriptionElements,
  Text3,
  Text1,
  Text2,
  FormContainer,
  InputElements,
  Input,
} from "./Section1Styling";

function Section1() {
  const [showQuote, setShowQuote] = useState(false);
  return (
    <>
      <Container>
        <Description>
          <DescriptionElements>
            <Text1>NIMSCRETE CONCRETE COATINGS</Text1>
            <Text2>The Industry's Best Warranty</Text2>
            <Text3>
              While our competitors offer one to five-year warranties, we
              proudly stand behind a 15 year warranty on all our products.
            </Text3>
          </DescriptionElements>
          <FormContainer showQuote={showQuote}>
            <InputElements>
              <p
                style={{
                  color: "white",
                  fontWeigth: "bold",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Receive a free quote!
              </p>
              <Input placeholder="name" type="text" />
              <Input placeholder="name" type="text" />
              <Input placeholder="name" type="text" />
              <Input placeholder="name" type="text" />
              <Input placeholder="name" type="text" />
              <Button variant="contained">Submit</Button>
            </InputElements>
          </FormContainer>
        </Description>
      </Container>
    </>
  );
}

export default Section1;
