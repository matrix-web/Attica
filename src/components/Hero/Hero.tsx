import React, { FC, useCallback, useEffect, useState } from "react";

import { 
  SUBSCRIBE, 
  SUBTITLE, 
  SUBTITLETEXT, 
  SUBTITLEMOBILE,
  SUBTITLETEXTMOBILE, 
  TITLE 
} from "@/mocks/hero";
import { Transition } from 'react-transition-group';
import { Loader } from "@/libs/Loader/Loader";

import {
  StyledHero,
  StyledLogo,
  StyledTitle,
  StyledSubtitle,
  StyledVideo,
  StyledReactVideo,
  StyledSubscribe,
  StyledSubscribeText,
  StyledFrame,
  StyledLoaderWrapper,
  StyledPicture
} from "./Hero.style";


interface HeroProps {
  isLoadingPage: boolean;
}

const Hero: FC<HeroProps> = ({ isLoadingPage }): JSX.Element => {
  const [isLoadFirstImage, setIsLoadFirstImage] = useState<boolean>(false);
  const [isLoadSecondImage, setIsLoadSecondImage] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSafary, setIsSafary] = useState<boolean>(false);
  const [videoVisible, setVideoVisible] = useState<boolean>(true);
  const [stateVisible, setStateVisible] = useState({
    logo: false,
    title: false,
    subtitle: false,
    subscribe: false
  });

  const DURATION = 1000;

  const defaultStyle = {
    transition: `opacity ${DURATION}ms ease-in-out`,
    opacity: 0,
  }
  
  const transitionStyles: { [key: string]: { [key: string]: number } } = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  const handlerPlay = useCallback(() => {
    setTimeout(() => {
      setStateVisible((prev) => ({
        ...prev,
        logo: true,
        title: true,
        subtitle: true,
        subscribe: true,
      }));

      setTimeout(() => {
        setVideoVisible(false);
      }, 400);
    }, 2400);
  }, [])

  const checkMedia = useCallback(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(false);
    if (mql.matches)  {
      console.log("mobile")
      setIsMobile(true);
    }
  }, [])

  useEffect(() => {
    if (typeof window !== undefined) {
      const isNotChrome = navigator.userAgent.indexOf('Chrome') === -1 && navigator.vendor !== "Google Inc.";
      setIsSafary(false);
      if (isNotChrome && navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Mac") != -1
      || navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("iPhone") != -1
      ){
        if (isNotChrome){
          setIsSafary(true);
          handlerPlay()
        }
      }

      checkMedia()
      window.addEventListener("resize", checkMedia);

      if (isLoadingPage && isSafary) {
        setIsLoadFirstImage(true);
        setIsLoadSecondImage(true);
      }

      return () => {
        window.removeEventListener("resize", checkMedia);
      }
    }
  }, [isSafary]);


  return (
    <StyledHero>
      {isSafary ? <>
        <StyledPicture 
          style={{ 
            opacity: videoVisible && !isLoadFirstImage && isSafary ? 1 : 0, transition: "opacity 1s linear" }}
          src={isMobile ? "/video/attica-intro-mob.mp4" : "/video/attica-intro.mp4"} 
          onLoad={() => setIsLoadFirstImage(false)}
        />
        <StyledPicture 
          style={{ 
            opacity: videoVisible && !isLoadSecondImage && isSafary ? 0 : 1, transition: "opacity 1s linear" }}
          src={isMobile ? "/images/ford-mobile.png" : "/images/ford.jpg"} 
          onLoad={() => setIsLoadSecondImage(false)}
        />
      </> : <>
        {!isLoadFirstImage && !isLoadSecondImage ? <>
          <StyledReactVideo
          style={{ 
            opacity: videoVisible && !isSafary ? 1 : 0, transition: "opacity 1s linear" }}
          playing={true}
          playsinline
          preload="auto"
          muted
          url={"/video/attica-intro.mp4"}
          onStart={handlerPlay}
          onReady={(event: any) => {
            const reactPlayerWrapper = event?.wrapper;
            if (reactPlayerWrapper) {
              const video = reactPlayerWrapper?.querySelector("video");

              if (video && video?.readyState === 4) {
                video.play();

                video.addEventListener("suspend", (ev: any) => {
                  ev?.target.play();
                })
              }
            }
          }}
          fallback={<StyledLoaderWrapper>
            <Loader />
          </StyledLoaderWrapper> 
        }
        />
        <StyledPicture 
          style={{
            opacity: videoVisible && !isSafary ? 0 : 1,
            transition: "opacity 1s linear"
          }}
          src={isMobile ? "/images/ford-mobile.png" : "/images/ford.jpg"} 
        />
        </> : <></>}
      </>}
      {/* { isSafary ? <>
        <StyledPicture 
          style={{ 
            opacity: videoVisible && !isLoadFirstImage ? 1 : 0, transition: "opacity 1s linear" }}
          src={isMobile ? "/images/1m.mp4" : "/video/1.mp4"} 
          onLoad={() => setIsLoadFirstImage(false)}
        />
        <StyledPicture 
          style={{ 
            opacity: videoVisible && !isLoadSecondImage ? 0 : 1, transition: "opacity 1s linear" }}
          src={isMobile ? "/video/2m.mp4" : "/video/2.mp4"} 
          onLoad={() => setIsLoadSecondImage(false)}
        />
      </> : 
        <>
          <StyledReactVideo
            style={{ 
              opacity: videoVisible ? 1 : 0, transition: "opacity 1s linear" }}
            playing={true}
            playsinline
            preload="auto"
            muted
            url={isMobile ? "/video/1m.mp4" : "/video/1.mp4"}
            onStart={handlerPlay}
            onReady={(event: any) => {
              const reactPlayerWrapper = event?.wrapper;
              if (reactPlayerWrapper) {
                const video = reactPlayerWrapper?.querySelector("video");

                if (video && video?.readyState === 4) {
                  video.play();

                  video.addEventListener("suspend", (ev: any) => {
                    ev?.target.play();
                  })
                }
              }
            }}
            fallback={<StyledLoaderWrapper>
              <Loader />
            </StyledLoaderWrapper> }
          />
          <StyledReactVideo 
            style={{
              opacity: videoVisible ? 0 : 1,
              transition: "opacity 1s linear"
            }}
            preload="auto"
            playsinline
            loop  
            playing={true}
            muted
            url={isMobile ? "/video/2m.mp4" : "/video/2.mp4"}
            onReady={(event: any) => {
              const reactPlayerWrapper = event?.wrapper;
              if (reactPlayerWrapper) {
                const video = reactPlayerWrapper?.querySelector("video");

                if (video && video?.readyState === 4) {
                  video.play();

                  video.addEventListener("suspend", (ev: any) => {
                    ev?.target.play();
                  })
                }
              }
            }}
            fallback={<StyledLoaderWrapper>
              <Loader />
            </StyledLoaderWrapper> }
          />
        </>
      }  */}
      <Transition in={stateVisible.logo} timeout={300}>
        {state => (
          <StyledLogo 
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          />
        )}
      </Transition>
      <Transition in={stateVisible.title} timeout={400}>
        {state => (
          <StyledTitle 
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }} 
            tag="h1" 
            weight={900} 
            color="white"
          >
            {TITLE}
          </StyledTitle>
        )}
      </Transition>
      <Transition in={stateVisible.subtitle} timeout={500}>
        {state => (
          <StyledSubtitle style={{
            ...defaultStyle,
            ...transitionStyles[state]
            }}  
            size={16} 
            weight={500} 
            color="white"
          >
            {isMobile ? SUBTITLEMOBILE : SUBTITLE}
          </StyledSubtitle>
        )}
      </Transition>
      <Transition in={stateVisible.subtitle} timeout={500}>
        {state => (
          <StyledSubtitle style={{
            ...defaultStyle,
            ...transitionStyles[state]
            }}  
            size={16} 
            weight={500} 
            color="white"
          >
            {isMobile ? SUBTITLETEXTMOBILE : ""}
          </StyledSubtitle>
        )}
      </Transition>
      <Transition in={stateVisible.subtitle} timeout={500}>
        {state => (
          <StyledSubtitle style={{
            ...defaultStyle,
            ...transitionStyles[state]
            }}  
            size={16} 
            weight={500} 
            color="white"
          >
            { SUBTITLETEXT }
          </StyledSubtitle>
        )}
      </Transition>
      <Transition in={stateVisible.subscribe} timeout={600}>
        {state => (
          <StyledSubscribe style={{
            ...defaultStyle,
            ...transitionStyles[state]
            }} >
              <StyledSubscribeText size={24} weight={900} color="white">
                {SUBSCRIBE}
              </StyledSubscribeText>
          <StyledFrame data-cursor="-hidden" src="/mailchimp/mailchimp.attica.html" />
        </StyledSubscribe>
        )}
      </Transition>
    </StyledHero>
  );
};

export default Hero;
