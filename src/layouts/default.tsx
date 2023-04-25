import React from "react";
import Footer from "@/libs/Footer/Footer";
import { DOCUMENTS, INFO, RIGHTS } from "@/mocks/footer";

interface IDefault {
  children: JSX.Element | JSX.Element[];
}

const Default: React.FC<IDefault> = (props): JSX.Element => {
  const { children } = props;

  return (
    <>
      {children}
      <Footer info={INFO} rights={RIGHTS} documents={DOCUMENTS} />
    </>
  );
};

export default Default;
