import React from "react";
import _ from "lodash";
export default function SortLodash() {
  const users = [
    { id: 5, name: "Fred", age: 48 },
    { id: 3, name: "Kaito", age: 35 },
    { id: 7, name: "Bake", age: 40 },
  ];
  const result_sortByAge = _.sortBy(users, (item) => item.age);

  console.log(result_sortByAge);
  return <div></div>;
}
