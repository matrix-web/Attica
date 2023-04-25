import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(async () => await import("react-player"), {
  ssr: false
});

const ForwardRefReactPlayer = React.forwardRef<typeof ReactPlayer>((props, ref) => {
  return <ReactPlayer {...props} ref={ref} />
});

export default ForwardRefReactPlayer;