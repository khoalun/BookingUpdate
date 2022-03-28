import React from "react";
import _ from "lodash";
export default function JoinDemo() {
  let arr = ["Khai", "Nam", "Minh"];
  let arrPerson = [
    { id: 1, name: "Khai" },
    { id: 2, name: "Hoa" },
    { id: 3, name: "Nam" },
  ];
  //es 6
  const result = arr.join("-");
  //lodash
  const resultLodash = _.join(arr, "*");

  const person = _.find(arrPerson, (item) => item.id === 2);
  return (
    <div>
      {result}
      <br />
      {resultLodash}
      <p>
        Name : {person.name} - Id : {person.id}
      </p>
    </div>
  );
}
