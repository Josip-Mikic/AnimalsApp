import React, { useEffect, useState } from "react";

export default function Image(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(
      props.favorite.filter((item) => {
        return item.id === props.data.id;
      }).length > 0
    );
  }, [props.data.id, props.favorite]);

  return (
    <div>
      <div className="relative">
        {" "}
        {props && (
          <img
            className="w-80 align-middle h-80	 object-cover	mb-2 "
            onClick={() => {
              if (!isFavorite) {
                props.setFavorite([...props.favorite, props.data]);
              }
            }}
            src={props.data.url}
            alt="doggo"
          />
        )}
        {isFavorite ? (
          <div className="fa fa-heart absolute bottom-0 left-0 bg-white"> </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
