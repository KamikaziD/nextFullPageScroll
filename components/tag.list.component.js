import React, { createRef } from "react";
import { TagCard } from "./tag.card.component";

export const TagList = ({ tags }) => {
  return (
    <>
      {tags.map((_, i) => {
        return (
          <>
            {" "}
            <TagCard
              key={i}
              caption={tags[i].caption}
              section={tags[i].section}
              link={tags[i].link}
            />{" "}
          </>
        );
      })}
    </>
  );
};
