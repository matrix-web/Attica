import React, { useEffect } from "react";
import Head from "next/head";

export interface IMeta {
  title?: string;
  desc?: string;
  descOG?: string;
  image?: string;
}

// FIXME: 
let path: string = "";

const Meta: React.FC<IMeta> = (props): JSX.Element => {
  const { title = "", desc = "", image = "", descOG = "" } = props;

  useEffect(() => {
    path = document?.location?.pathname
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={descOG} />
      <meta property="og:site_name" content="" />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Meta;
