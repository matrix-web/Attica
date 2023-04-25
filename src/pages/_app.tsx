import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "@/assets/css/main.css";
import "@/assets/css/fonts.css";
import "@/assets/css/cursor.css";
import { Styles } from "@/components/styles/Styles";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

const insert2body = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  div.style.display = "none";
  document.querySelector("body")?.prepend(div);
};

(async () => {
  if (typeof window !== "undefined" && "caches" in window) {
    const spriteLink = "/sprite.svg";
    const newCache = await caches.open("sprite");
    const options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "image/svg+xml",
      }),
    };
    let response = await newCache.match(spriteLink);
    let html;

    if (!response) {
      const req = new Request(spriteLink, options);
      await newCache.add(req);
      response = await newCache.match(spriteLink);

      html = await response?.text();
      insert2body(html || "");
      return;
    }

    html = await response.text();
    insert2body(html);
  }
})();

let prevPage = "";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  let cursor: MouseFollower | null  = null;

  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow: boolean }
    ): void => {
      const currentPrevPage = !prevPage ? router.asPath : prevPage;

      const isSameRoute = currentPrevPage === url;

      if (shallow || isSameRoute) {
        return;
      }
    };

    const initCursor = () => {
      const mql = window.matchMedia(`(min-width: 1024px)`);
      
      if (mql.matches) {
        cursor = new MouseFollower({
          stateDetection: {
            "-pointer": ["button", "a", "input", "textarea", "select"]
          }
        });
      } else {
        cursor && cursor.destroy();
        cursor = null;
      }
    }

    router.events.on("routeChangeStart", handleRouteChange);
    
    if (typeof window !== undefined) {
      window.addEventListener("resize", initCursor);

      initCursor();
    }
    
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("resize", initCursor);

      if (typeof window !== undefined) {
        cursor && cursor.destroy();
        cursor = null;
      }
    };
  }, []);

  return (
    <>
      <Styles />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
