import React from "react";

type Tprops = {
  date: string;
};

const Footer = ({ date }: Tprops) => {
  return (
    <footer>
      <div className="calendar"></div>
      <p>INFORMATION UPDATED : {date}</p>
    </footer>
  );
};

export default Footer;
