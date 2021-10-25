import React from "react";

const Info = () => {
  let URL = "https://pokeapi.co/api/v2/pokemon/1";

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default Info;
