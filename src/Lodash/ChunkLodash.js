import React from "react";
import _ from "lodash";
export default function ChunkLodash() {
  const array = ["id", 1, "name", "Khai", "info", "cyber"];

  const result = _.chunk(array, 2);
  console.log("result", result);
  return <div></div>;
}
