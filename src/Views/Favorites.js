import React from "react";
import Image from "../Components/Image";

export default function Favorites(props) {
  console.log(props.favorite);
  const favorites = props.favorite;
  return (
    <div>
      <h2>Favorites</h2>

      <div className="flex  justify-around	items-center	inline-block flex-wrap	w-5/6 m-auto	">
        {favorites.map((image) => {
          return (
            <Image
              key={image.id}
              data={image}
              favorite={favorites}
              setFavorite={props.setFavorite}
            />
          );
        })}
      </div>
    </div>
  );
}
