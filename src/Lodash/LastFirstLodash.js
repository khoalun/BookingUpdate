import React from "react";
import _ from "lodash";
export default function LastFirstLodash() {
  const arrStudent = [
    { id: 1, name: "Peter" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Khoa" },
  ];

  const firstItem = _.first(arrStudent);
  const lastItem = _.last(arrStudent);
  const arr = [
    ["001", "Alice"],
    ["002", "Khoa"],
    ["003", "Hieu"],
  ];
  const [id, name] = _.first(arr);
  const [id2, name2] = _.last(arr);
  return (
    <div>
      <div>
        FirstItem :{firstItem.name}
        <br />
        LastItem : {lastItem.name}
      </div>

      <div>
        Id : {id} - Name : {name}
        <br></br>
        Id 2 : {id2} - Name 2 : {name2}
      </div>
    </div>
  );
}
