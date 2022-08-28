import { CSSProperties } from "react";

export interface BaseChildren {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export interface BaseStyle {
  className?: string;
  style?: CSSProperties;
}

/**
 * All tailwind maxWidth support
 */
export type BaseMaxWidthType =
  | "max-w-none"
  | "max-w-xs"
  | "max-w-sm"
  | "max-w-md"
  | "max-w-lg"
  | "max-w-xl"
  | "max-w-2xl"
  | "max-w-3xl"
  | "max-w-4xl"
  | "max-w-5xl"
  | "max-w-6xl"
  | "max-w-7xl"
  | "max-w-full"
  | "max-w-min"
  | "max-w-max"
  | "max-w-fit"
  | "max-w-prose"
  | "max-w-screen-sm"
  | "max-w-screen-md"
  | "max-w-screen-lg"
  | "max-w-screen-xl"
  | "max-w-screen-2xl";

export interface BaseMaxWidth {
  maxWidth?: BaseMaxWidthType;
}
