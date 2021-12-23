import Section from "../components/Section";
import Link from "next/Link";

import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <div>
      <Section id="use-cases" color="red">
        <div className={styles.container}>
          <h1>Click the #hashtags</h1>
          <div>
            <h5>
              <Link href="#casino">
                <a>#casino</a>
              </Link>{" "}
              <Link href="#passport">
                <a>#passport</a>
              </Link>{" "}
              <Link href="#bank">
                <a>#bank</a>
              </Link>{" "}
              <Link href="#documents">
                <a>#documents</a>
              </Link>
            </h5>
          </div>
          <div>
            <Link href="/other">
              <a>Another Page</a>
            </Link>
          </div>
        </div>
      </Section>
      <Section id="casino" color="red">
        <div className={styles.container1}>
          <h1>Casino</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="passport" color="red">
        <div className={styles.container2}>
          <h1>Passport</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="bank" color="red">
        <div className={styles.container3}>
          <h1>Bank</h1>
          <h3>Some useful information</h3>
        </div>
      </Section>
      <Section id="documents" color="red">
        <div className={styles.container4}>
          <h1>Documents</h1>
          <h3>Some useful information</h3>
          <Link href="#use-cases">
            <a>TOP</a>
          </Link>
        </div>
      </Section>
    </div>
  );
}
