import React from "react";
import _ from "lodash";
export default function CompareObjectArray() {
  const arrA = [1, 2];
  const arrB = [2, 1];

  const result = _.isEqual(arrA.sort(), arrB.sort());

  console.log("result", result);

  const arrObject1 = [
    { id: 1, name: "Khoa" },
    { id: 2, name: "Nhan" },
  ];

  const arrObject2 = [
    { id: 3, name: "Khai" },
    { id: 4, name: "Kiet" },
  ];

  const result1 = _.differenceWith(arrObject1, arrObject2, _.isEqual);

  console.log("result", result1);
  return <div></div>;
}
