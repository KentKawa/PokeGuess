const SpriteBox = (props) => {
  return (
    <div className="col-sm-3  spriteBox border border rounded">
      <img
        src={props.img}
        style={{ filter: `brightness(${props.img_bool ? 1 : 0})` }}
        alt="pokemon"
      />
      <img
        src={props.shiny_img}
        style={{
          filter: `brightness(${props.shiny_bool ? 1 : 0})`,
          display: "none",
        }}
        alt="shiny pokemon"
      />
      <h3 className="border-bottom">{props.img_bool ? props.name : "?"}</h3>
      <p>id: {props.id}</p>
    </div>
  );
};

export default SpriteBox;
