import React from "react";
import { Box, Button, Typography } from "@mui/material";
// import myHome from "../images/myhome.svg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Card = (props) => {
  const {
    company,
    logo,
    newItem,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;

  return (
    <Box
      sx={{
        background: "#fff",
        width: "80vw",
        margin: "3% auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: "2%",
        boxShadow: "10px 10px 20px  hsl(180, 8%, 45%), -10px -10px 20px  #fff",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex",flexDirection:{xs:"column",sm:"row"} ,width: "50%" }}>
        <img src={logo}></img>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0 3%",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {/* <Button
            variant="text"
           , mr: "5px" }}
          >
            PhotoShop
          </Button> */}
            <Typography sx={{ color: "hsl(180, 29%, 50%)", mr: "5px" }}>
              {company}
            </Typography>
            {newItem && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "hsl(180, 29%, 50%)",
                  borderRadius: "25px",
                  m: "0 5px",
                }}
              >
                New
              </Button>
            )}
            {featured && (
              <Button
                variant="contained"
                size="small"
                sx={{ background: "hsl(180, 14%, 20%)", borderRadius: "25px" }}
              >
                Featured
              </Button>
            )}
          </Box>
          <Typography
            variant="h6"
            sx={{ m: "5px 0", fontWeight: "bold", color: "hsl(180, 29%, 50%)" }}
          >
            {position}
          </Typography>
          <Typography variant="body2">
            {postedAt}
            {bull}
            {contract}
            {bull}
            {location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", md: "flex-end" },
          alignItems: "center",
          flexFlow: "wrap",
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontWeight:"bold",
            color: "hsl(180, 29%, 50%)",
            background: "hsl(180, 31%, 95%)",
            "&:hover": {
              backgroundColor: "hsl(180, 29%, 50%)",
              color: "hsl(180, 31%, 95%)",
            },
            m: "0 10px",
          }}
        >
          {role}
        </Button>
        <Button
          variant="contained"
          sx={{
            fontWeight:"bold",
            color: "hsl(180, 29%, 50%)",
            background: "hsl(180, 31%, 95%)",
            "&:hover": {
              backgroundColor: "hsl(180, 29%, 50%)",
              color: "hsl(180, 31%, 95%)",
            },
            m: "0 10px",
          }}
        >
          {level}
        </Button>
        {languages.map((language, index) => (
          <Button
            variant="contained"
            key={index}
            sx={{
              fontWeight:"bold",
              color: "hsl(180, 29%, 50%)",
              background: "hsl(180, 31%, 95%)",
              "&:hover": {
                backgroundColor: "hsl(180, 29%, 50%)",
                color: "hsl(180, 31%, 95%)",
              },
              m: "0 10px",
            }}
          >
            {language}
          </Button>
        ))}
        {tools.map((tool, index) => (
          <Button
            variant="contained"
            key={index}
            sx={{
              fontWeight:"bold",
              color: "hsl(180, 29%, 50%)",
              background: "hsl(180, 31%, 95%)",
              "&:hover": {
                backgroundColor: "hsl(180, 29%, 50%)",
                color: "hsl(180, 31%, 95%)",
              },
              m: "0 10px",
            }}
          >
            {tool}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Card;
