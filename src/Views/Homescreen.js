import React, { useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Images from "../Components/Images";
let response;

export default function Homescreen() {
  const x = async () => {
    axios.defaults.headers.common["x-api-key"] =
      "0bbc9ffe-7d9d-4c30-b8ad-97b4131c3bb8";
    response = await axios.get("https://api.thecatapi.com/v1/images/search", {
      params: { limit: 10, size: "full" },
    }); // Ask for 1 Image, at full resolution
    setImages(response.data);
  };

  const [images, setImages] = useState();

  return (
    <div>
      <Header />
      <section id="form">Form</section>
      <div className="flex  justify-around	items-center	 flex-wrap	w-5/6 m-auto	">
        {images &&
          images.map((image) => {
            console.log(image);
            return (
              <img
                className="w-80 align-middle h-80	 object-cover	mb-2"
                src={image.url}
                alt="doggo"
              />
            );
          })}
      </div>

      <Images data={response} />
      <button onClick={() => x()}>Click me</button>
      <footer>footer</footer>
    </div>
  );
}
