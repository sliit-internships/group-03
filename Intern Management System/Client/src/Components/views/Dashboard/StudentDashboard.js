import * as React from "react";
//import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GridItem from "../../Grid/GridItem";

import one from "../../../Assets/img/cards/1.JPG";
import two from "../../../Assets/img/cards/2.JPG";
import three from "../../../Assets/img/cards/3.JPG";
import four from "../../../Assets/img/cards/4.JPG";

import pdf from "../../../Assets/img/pdf.jpg";

/*const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));*/

export default function RowAndColumnSpacing() {
  return (
    <Grid container spacing={3} md={12}>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <img src={one} height={350} width={350} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Internship is Mandatory for All Specializations
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p align="justify">
                Internship is mandatory for all specializations of 2019 3rd year
                regular batch who will be graduating in Feb 2021 and subsequent
                batches and the duration should be 6 months at a stretch in one
                company . Three months duration of internship is not valid.
              </p>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <img src={two} height={350} width={350} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Plagiarism
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p align="justify">
                {" "}
                The examiners will be strictly checking for copying of
                components (e.g. reports, and daily diaries) by students. If any
                student get caught copying any component the minimum punishment
                is outlined below The copied component will carry 0 marks
                whether partially or fully copied.)
              </p>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <img src={three} height={350} width={350} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ask Us Your Question Here..!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p align="justify">
                {" "}
                Offering world class higher education in computing technology
                and producing skilled and able graduates to fulfill the dynamic
                needs of the fast changing world
              </p>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <img src={four} height={350} width={350} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ask Us Your Question Here..!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p align="justify">
                {" "}
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="info">
              Ask Here !
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <GridItem>
        <Grid item>
          <Card>
            <CardContent align="center">
              <Typography gutterBottom variant="h5" component="div">
                Internship Reference Material
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All material to refer of this module can be found here.
                Especially students need to refer industrial training student
                guide to get a comprehensive update on how this module needs to
                be completed. There won't be any lectures, tutorials or labs for
                this module. This is a Non-GPA module with 8 course credits
                worth of workload. 
              </Typography>
            </CardContent>

            <GridItem>
              <card>
                <CardActions>
                  <Grid>
                    <GridItem>
                      <img src={pdf} />
                      <a href="https://courseweb.sliit.lk/pluginfile.php/259103/mod_folder/content/0/Industrial%20Training%20Student%20Guide.pdf?forcedownload=1">
                        &nbsp;&nbsp;Industrial Training Student Guide.pdf
                      </a>
                    </GridItem>
                    <GridItem>
                      <img src={pdf} />
                      <a href="https://courseweb.sliit.lk/pluginfile.php/288366/mod_folder/content/0/Internship%20Pain%20Points%20Q%20and%20A.pdf?forcedownload=1">
                        &nbsp;&nbsp;Internship Pain Points Q and A.pdf
                      </a>
                    </GridItem>
                    <GridItem>
                      <img src={pdf} />
                      <a href="https://courseweb.sliit.lk/pluginfile.php/288366/mod_folder/content/0/Internship%20Roll%20Out%20-%20Slides%20for%20Recorded%20Presentation.pdf?forcedownload=1">
                        &nbsp;&nbsp;Internship Roll Out - Slides for Recorded
                        Presentation.pdf
                      </a>
                    </GridItem>
                    <GridItem>
                      <img src={pdf} />
                      <a href="https://courseweb.sliit.lk/pluginfile.php/288366/mod_folder/content/0/IT3110-%20Industrial%20Placement%20Module%20Outline.pdf?forcedownload=1">
                        &nbsp;&nbsp;IT3110- Industrial Placement Module
                        Outline.pdf
                      </a>
                    </GridItem>
                    <GridItem>
                      <a>&nbsp;&nbsp;&nbsp;</a>
                    </GridItem>

                    <GridItem>
                      {" "}
                      <Button size="small" color="info">
                        Download Folder
                      </Button>
                    </GridItem>
                  </Grid>
                </CardActions>
              </card>
            </GridItem>
          </Card>
        </Grid>
      </GridItem>
    </Grid>
  );
}
