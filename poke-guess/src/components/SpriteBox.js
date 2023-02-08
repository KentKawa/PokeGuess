import React, { useState } from "react";

const SpriteBox = (props) => {
  const [alternateImage, setAlternateImage] = useState(true);

  return (
    <div className="col-sm-3  spriteBox border border rounded">
      <div onClick={() => setAlternateImage(!alternateImage)}>
        {alternateImage ? (
          <img
            src={props.img}
            style={{ filter: `brightness(${props.img_bool ? 1 : 0})` }}
            alt="pokemon"
          />
        ) : (
          <img
            src={props.shiny_img}
            style={{
              filter: `brightness(${props.shiny_bool ? 1 : 0})`,
            }}
            alt="shiny pokemon"
          />
        )}
      </div>
      {props.shiny_bool ? <span>&#10024;</span> : ""}
      <h3 className="border-bottom">{props.img_bool ? props.name : "?"}</h3>
      <p>id: {props.id}</p>
    </div>
  );
};

export default React.memo(SpriteBox);
