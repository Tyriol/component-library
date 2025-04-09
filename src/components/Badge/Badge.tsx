import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  size?: "sm" | "lg";
}

export default function Badge(props: BadgeProps): React.ReactNode {
  let size;
  if (props.size === "sm") {
    size = styles.sm;
  } else if (props.size === "lg") {
    size = styles.lg;
  }
  return <span className={`${styles.badge} ${size}`}>Badge</span>;
}
