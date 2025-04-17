import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  variant?: "rounded" | "square";
  colour?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
}

export default function Badge(props: BadgeProps): React.ReactNode {
  let variant;
  if (!props.variant || props.variant === "rounded") {
    variant = styles.rounded;
  } else {
    variant = styles.square;
  }

  let colour;
  switch (props.colour) {
    case "gray":
      colour = styles.gray;
      break;
    case "red":
      colour = styles.red;
      break;
    case "yellow":
      colour = styles.yellow;
      break;
    case "green":
      colour = styles.green;
      break;
    case "blue":
      colour = styles.blue;
      break;
    case "indigo":
      colour = styles.indigo;
      break;
    case "purple":
      colour = styles.purple;
      break;
    case "pink":
      colour = styles.pink;
      break;
    default:
      colour = styles.gray;
  }

  const badgeClass = `${styles.badge} ${variant} ${colour}`;

  return <span className={badgeClass}>Badge</span>;
}
