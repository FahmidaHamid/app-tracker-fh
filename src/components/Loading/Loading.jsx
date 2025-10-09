import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-bold">Loading, please wait...</h1>
        <div
          class="radial-progress text-primary"
          style="--value:70; --size:12rem; --thickness:1rem;"
          role="progressbar"
        >
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </div>
    </>
  );
};

export default Loading;
