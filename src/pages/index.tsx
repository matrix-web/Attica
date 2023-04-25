import React, { useState, useEffect, useCallback } from "react";
import Default from "@/layouts/default";
import Hero from "@/components/Hero/Hero";
import Description from "@/components/Description";
import Products from "@/components/Products";
import Meta from "@/components/common/Meta";
import logo from "@/assets/images/logo/logo.png";
import { DESC, DESC_OG, TITLE } from "@/mocks/meta";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import styled from "styled-components";
import { Loader } from "@/libs/Loader/Loader";
const Insta = dynamic(async () => await import("@/components/Insta"), {
  ssr: false,
  loading: () => <></>,
});

const StyledLoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomePage: React.FC = () => {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);
  const loadHandler = () => {
    try {
      setIsLoadingPage(false);
      console.log("page loaded")
      document.body.style.overflow = "auto";
    } finally {
      setIsLoadingPage(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      
      if (document.readyState !== "complete") {
        setIsLoadingPage(true);
        window.addEventListener("load", loadHandler);
      } else {
        loadHandler();
      }
      

      return () => {
        setIsLoadingPage(false);
        window.removeEventListener("load", loadHandler);
      }
    }
  }, []);

  return (
    <>
      {
        isLoadingPage ? 
          <StyledLoaderWrapper>
            <Loader />
          </StyledLoaderWrapper> : 
          <Default>
            <Meta desc={DESC} descOG={DESC_OG} image={logo.src} title={TITLE} />
            <Hero isLoadingPage={isLoadingPage}/>
            <Description />
            <Products />
            <Suspense>
              <Insta />
            </Suspense>
          </Default>
      }
    </>
    
  );
};

export default HomePage;
