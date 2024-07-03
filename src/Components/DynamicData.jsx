import React from "react";

const DynamicData = () => {
  const myName = "Akhil";
  return (
    <>
      React Practise 1
      <div>
        <h2>Dynamic Data</h2>
        <p>2+2 = {2 + 2}</p>
        <p>2*3 = {2 * 3}</p>
        <p>2/2 = {2 / 2}</p>
        <p>My name is {myName}</p>
        <p>My Friends List: {["Apple", "Banana", "Cat", "Dog"]}</p>
        {/* My Friends List: AppleBananaCatDog  */}
      </div>
    </>
  );
};

export default DynamicData;
