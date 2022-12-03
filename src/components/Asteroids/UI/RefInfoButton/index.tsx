import React from "react";
import cl from "./RefInfoButton.module.scss";

const Button = ({ children }: React.PropsWithChildren) => {
  return <button className={cl.Btn}>{children}</button>;
};

export default Button;
