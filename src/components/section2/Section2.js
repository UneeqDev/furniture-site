import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Bottom, Container, Wrapper, Top } from "./Section2Stylling";
import { Data } from "./Data";
import { Button } from "@mui/material";
function Section2() {
  return (
    <>
      <Container id="section2">
        <Wrapper>
          <Top>
            {/* <p> */}
            <center>
              Enahance the durability and the appearance of your indoor and
              outdoor spaces with Nimscrete concrete caotings.
              {/* </p> */}
            </center>
          </Top>
          <Bottom>
            <Grid
              className="GridContainer"
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {Data.map((data, index) => (
                <Grid
                  className="GridItem"
                  key={index}
                  item
                  md={3}
                  sm={6}
                  xs={12}
                >
                  <h2>{data.Heading}</h2>
                  <p>{data.Text}</p>
                  {/* <Button variant="contained">Read More</Button> */}
                </Grid>
              ))}
            </Grid>
          </Bottom>
        </Wrapper>
        {/* <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
          >
            
            <Grid item md={6} item xs={12}>
              <p>6</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <p>4</p>
            </Grid>
            <Grid item md={6} xs={12}>
              <p>7</p>
            </Grid>
            <Grid item md={6} item xs={12}>
              <p>7</p>
            </Grid>
            <Grid item md={6} item xs={12}>
              <p>7</p>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </>
  );
}

export default Section2;
