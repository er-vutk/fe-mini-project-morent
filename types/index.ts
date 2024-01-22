import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  iconOnly?: React.ReactNode;
  minimal?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  largeSize?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
