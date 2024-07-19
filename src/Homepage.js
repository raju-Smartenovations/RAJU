import { Button, Grid } from "@mui/material";
import React from "react";

const WhatsAppLink = () => {
  const phoneNumber = "7483195095";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const openWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <p>
        Hello <br /> I'm RAJU
      </p>
      <p>#Front end developer</p>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          onClick={openWhatsApp}
          variant="contained"
          sx={{ m: 1, width: "200px" }}
        >
          WhatsApp
        </Button>
        <Button
          variant="contained"
          sx={{ m: 1, width: "200px" }}
          href="https://github.com/raju-Smartenovations"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Grid>
    </div>
  );
};

export default WhatsAppLink;
