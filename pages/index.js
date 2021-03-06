import Section from "../components/Section";
import { Searchbox } from "../components/Searchbox.component";
import { TagList } from "../components/tag.list.component";
import React, { useState, useEffect } from "react";
import Link from "next/Link";

import styles from "../styles/styles.module.css";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [tags, setTags] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const getTags = () => {
    fetch("./hashtags.json")
      .then((response) => response.json())
      .then((hash) => {
        setTags(hash.hashtag);
      });
  };

  const handleChange = (e) => {
    setSearchfield(e.target.value);
  };

  useEffect(() => {
    {
      !tags.length ? getTags() : null;
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const filteredTags = tags.filter((tag) =>
    tag.keyword.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div>
      <Section id="usecases">
        <div className={styles.container}>
          <h1>Click the #hashtags</h1>
          <Searchbox placeholder="search tags" handleChange={handleChange} />

          <div>
            <h5>
              <TagList tags={filteredTags} />
            </h5>
          </div>
          <div>
            <Link href="/other">
              <a>Another Page</a>
            </Link>
            <div>
              <Link href="/new-scroller">
                <a>Another Page</a>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section id="casino">
        <div className={styles.container1}>
          <h1>Casino</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="passport">
        <div className={styles.container2}>
          <h1>Passport</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="bank">
        <div className={styles.container3}>
          <h1>Bank</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>

      <Section id="documents">
        <div className={styles.container4}>
          <h1>Documents</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>

      {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8673;
        </button>
      )}
    </div>
  );
}
