import React, { createRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Chip, styled } from "@mui/material";
import styles from "./tag.module.css";

export const TagCard = ({ caption, link, section }) => {
  return (
    <>
      <ScrollLink
        activeClass="active"
        className={styles.chip}
        to={section}
        smooth={true}
        duration={1000}
        delay={200}
        offset={0}
        href={link}
        ref={createRef()}
      >
        <Chip
          component="a"
          label={caption}
          clickable
          size="small"
          sx={[
            {
              textDecoration: "none",
              backgroundColor: "#00000000",
              color: "#fff",
              fontWeight: 500,
              border: "none",
            },
            {
              "&:hover": {
                color: "#fff",
                backgroundColor: "#99999970",
                fontWeight: 700,
                border: "0.5px solid #fff",
              },
            },
          ]}
        />
      </ScrollLink>
    </>
  );
};
