import React from "react";

const Loading = (): React.JSX.Element => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 bg-[#F2F2F2]">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-[#51BAE8] [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-[#51BAE8] [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-[#51BAE8]"></div>
    </div>
  );
};

export default Loading;
