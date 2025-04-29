import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  title: string;
  variant?: "rounded" | "square";
  colour?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
}

export default function Badge(props: BadgeProps): React.ReactNode {
  const variantClass = props.variant === "square" ? styles.square : styles.rounded;

  let colourClass = styles.gray;

  if (props.colour) {
    switch (props.colour) {
      case "red":
        colourClass = styles.red;
        break;
      case "yellow":
        colourClass = styles.yellow;
        break;
      case "green":
        colourClass = styles.green;
        break;
      case "blue":
        colourClass = styles.blue;
        break;
      case "indigo":
        colourClass = styles.indigo;
        break;
      case "purple":
        colourClass = styles.purple;
        break;
      case "pink":
        colourClass = styles.pink;
        break;
    }
  }

  const badgeClass = `${styles.badge} ${variantClass} ${colourClass}`;

  return <span className={badgeClass}>{props.title}</span>;
}
