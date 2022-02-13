import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../Components/Image";
let response;

export default function Homescreen(props) {
  const [images, setImages] = useState();
  const [breeds, setBreeds] = useState();
  const [selectedOrder, setSelectedOrder] = useState("Random");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(9);

  //Function that pings the API and recieves the dog images
  const loadData = async () => {
    let contentType;
    axios.defaults.headers.common["x-api-key"] =
      "0bbc9ffe-7d9d-4c30-b8ad-97b4131c3bb8";

    //Filtering types
    if (selectedType === "All") {
      contentType = "jpg,png,gif";
    } else if (selectedType === "Static") {
      contentType = "jpg,png";
    } else {
      contentType = "gif";
    }

    //Filtering Breed
    let params;
    if (parseInt(selectedBreed) < 1) {
      params = {
        limit: selectedNumber,
        size: "full",
        order: selectedOrder,
        mime_types: contentType,
      };
    } else {
      params = {
        limit: selectedNumber,
        size: "full",
        breed_id: selectedBreed,
        order: selectedOrder,
        mime_types: contentType,
      };
    }
    //Getting the images and writing them into Hook
    response = await axios.get("https://api.thedogapi.com/v1/images/search", {
      params: params,
    });
    setImages(response.data);
  };

  //Configured so that when the page loads, we preload breed data
  //and then load sample images into app
  const getBreeds = async () => {
    if (!breeds) {
      response = await axios.get("https://api.thedogapi.com/v1/breeds");
      setBreeds(response.data);
      loadData();
    }
  };

  useEffect(() => {
    getBreeds();
  });
  return (
    <div className="bg-slate-300">
      <div className="flex flex-wrap text-center ">
        <div className="w-1/2 p-4	">
          <label>
            Order{" "}
            <input
              className="border-b-2 border-black"
              list="orders"
              onMouseDown={(e) => (e.target.value = "")}
              value={selectedOrder}
              name="order"
              onChange={(e) => {
                setSelectedOrder(e.target.value);
              }}
            />
          </label>
          <datalist id="orders">
            <option value="Random"></option>
            <option value="Desc"></option>
            <option value="Asc"></option>
          </datalist>
        </div>
        <div className="w-1/2 p-4">
          <label>
            Type{" "}
            <input
              value={selectedType}
              className="border-b-2 border-black"
              list="types"
              onMouseDown={(e) => (e.target.value = "")}
              name="type"
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            />
          </label>
          <datalist id="types">
            <option value="All"></option>
            <option value="Static"></option>
            <option value="Animated"></option>
          </datalist>
        </div>
        <div className="w-1/2 p-4">
          <label>
            Category{" "}
            <input
              className="border-b-2 border-black"
              list="categories"
              name="category"
              readOnly
              value="None"
            />
          </label>
          <datalist id="categories">
            <option value="None"></option>
          </datalist>
        </div>
        <div className="w-1/2 p-4 b-1">
          <label>
            Breed{" "}
            <input
              className="border-b-2 border-black"
              list="breeds"
              name="breed"
              onMouseDown={(e) => (e.target.value = "")}
              defaultValue="None"
              onChange={(e) => {
                setSelectedBreed(e.target.value);
              }}
            />
          </label>
          <datalist id="breeds">
            <option value="0">None</option>
            {breeds &&
              breeds.map((breed) => {
                return (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                );
              })}

            <option value="Harrier"></option>
          </datalist>
        </div>
      </div>
      <div className="flex  justify-around	items-center	 flex-wrap	w-5/6 m-auto	">
        {images &&
          images.map((image) => {
            return (
              <Image
                key={image.id}
                data={image}
                favorite={props.favorite}
                setFavorite={props.setFavorite}
              />
            );
          })}
      </div>

      <footer>
        {" "}
        <div className="w-full h-1/6 p-4	flex items-center justify-around ">
          <label>
            Per Page{" "}
            <input
              className="border-b-2 border-black"
              list="numbers"
              onMouseDown={(e) => (e.target.value = "")}
              value={selectedNumber}
              name="order"
              onChange={(e) => {
                setSelectedNumber(e.target.value);
              }}
            />
          </label>
          <datalist id="numbers">
            <option value={9}></option>
            <option value={18}></option>
            <option value={80}></option>
          </datalist>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
            onClick={() => loadData()}
          >
            Click me
          </button>
        </div>
      </footer>
    </div>
  );
}
