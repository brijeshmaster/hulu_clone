import React from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <FlipMove className=" px-5 my-10 sm:grid md:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result, i) => (
        <Thumbnail key={result.id || i} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
