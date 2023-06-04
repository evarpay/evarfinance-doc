import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Low transaction fees",
    Svg: require("@site/static/img/low_fees.svg").default,
    description: <>Pay way less for all your international transactions.</>,
  },
  {
    title: "Fast Withdrawal",
    Svg: require("@site/static/img/fast_withdrawal.svg").default,
    description: <>Withdraw funds easily into your crypto wallet.</>,
  },
  {
    title: "Secure Transactions",
    Svg: require("@site/static/img/security.svg").default,
    description: (
      <>
        With the use of the latest cutting edge technology, all transactions on
        our platforms are guaranteed safe.
      </>
    ),
  },
  {
    title: "Instant settlement",
    Svg: require("@site/static/img/settlement.svg").default,
    description: <>Send and receive payment in as little as 5 minutes.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
