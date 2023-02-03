import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import SpriteBox from "./components/SpriteBox";
import pokeData from "./data/pokemonData";
import pokeball from "./assets/pokeball.png";
import { useState, useEffect } from "react";

export default function App() {
  const [pokeDex, setPokeDex] = useState([]),
    [name, setName] = useState(""),
    [picture, setPicture] = useState(""),
    [type, setType] = useState(""),
    [stat, setStat] = useState(""),
    [generation, setGeneration] = useState("first"),
    [bright, setBright] = useState(0),
    [hint, setHint] = useState(0),
    [guessText, setGuessText] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("pokeData")) {
      localStorage.setItem("pokeData", JSON.stringify(pokeData));
    }
    setPokeDex(JSON.parse(localStorage.getItem("pokeData")));
  }, [pokeDex]);

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        generation === "first"
          ? Math.floor(Math.random() * 151)
          : Math.floor(Math.random() * 100) + 151
      }`
    );
    const data = await response.json();
    if (data) {
      if (data.name === "nidoran-m" || data.name === "nidoran-f") {
        setName("nidoran");
      } else if (data.name === "mr-mime") {
        setName("mr.mime");
      } else {
        setName(data.name);
      }
      setPicture(data.sprites.front_default);
      setType(data.types);
      setStat(data.stats);
      setHint(0);
      setGuessText("");
    }
    console.log(data);
  };

  const guess = (guess) => {
    if (guess.toLowerCase() === name) {
      setBright(1);
      let data = JSON.parse(localStorage.getItem("pokeData"));
      data.forEach((ele) => {
        if (ele.name === name) {
          ele.regular = true;
        }
      });
      localStorage.setItem("pokeData", JSON.stringify(data));
      console.log("correct", "set local storage to true");
    }
  };

  return (
    <div className="App">
      <h1
        className="title d-flex align-items-center m-auto justify-content-center"
        onClick={fetchPokemon}
      >
        POKÉGUESS
      </h1>
      <div id="pokeDex" className="container m-auto align-items-center row p-5">
        <div id="pokeDexBodyLeft" className="bg-danger col p-0">
          <div id="lensHolder" className="sm-col d-flex">
            <div id="lensOuter" className="my-3">
              <div id="lensInner">
                <div id="lensFlare"></div>
              </div>
            </div>
            <div className="lensOuter my-auto">
              <div className="lensInner" style={{ backgroundColor: "#FF1B32" }}>
                <div id="lensFlare"></div>
              </div>
            </div>
            <div className="lensOuter my-auto">
              <div className="lensInner" style={{ backgroundColor: "#ffd639" }}>
                <div id="lensFlare"></div>
              </div>
            </div>
            <div className="lensOuter my-auto">
              <div className="lensInner" style={{ backgroundColor: "#00af54" }}>
                <div id="lensFlare"></div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="col" id="recessedLeft">
            <div id="screenBorder" className="m-auto mt-3">
              <div id="screen" className="m-auto mt-3">
                <img
                  className="pokePic"
                  alt="A random pokemon"
                  style={{ filter: `brightness(${bright})` }}
                  src={picture ? picture : pokeball}
                />
              </div>
            </div>
            <div className="barContainerLeft mx-4 row">
              <div id="smallBar" className="col m-2"></div>
              <div id="smallBar" className="col m-2"></div>
              <div id="smallBar" className="col m-2"></div>
            </div>
            <div id="guessBox" className="mt-4 mx-auto row">
              <form
                className="form-inline"
                onSubmit={(e) => {
                  e.preventDefault();
                  guess(guessText);
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Whos that Pokemon..."
                    className="form-control"
                    onChange={(e) => setGuessText(e.target.value)}
                  />
                </div>
                <div className="guessButtons form-group">
                  <button
                    className="btn"
                    onClick={() => {
                      setHint((prev) => prev + 1);
                    }}
                    disabled={hint >= 2 ? true : false}
                  >
                    <span aria-label="?" role="img">
                      &#10068;
                    </span>
                  </button>
                  <button
                    className="btn"
                    type="submit"
                    onClick={() => guess(guessText)}
                  >
                    <span aria-label="check mark" role="img">
                      &#10004;
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="pokeDexBodyRight" className="col p-0">
          <div id="blank"></div>
          <div id="recessedRight">
            <div id="dataScreen" className="row m-auto">
              <div className="col p-0 border-end border-dark">
                <h3 className="text-decoration-underline">Type</h3>
                <ul className="text-start">
                  {type ? (
                    type.map((ele) => {
                      return (
                        <li key={ele.type.name} className="text-uppercase">
                          {hint < 1 ? "unknown" : ele.type.name}
                        </li>
                      );
                    })
                  ) : (
                    <p className="text-uppercase">unknown</p>
                  )}
                </ul>
              </div>
              <div className="col p-0 border-start border-dark">
                <h3 className="text-decoration-underline">Stats</h3>
                <ul className="text-start">
                  {stat ? (
                    stat.map((ele) => {
                      return (
                        <li key={ele.stat.name} className="list-group-item">
                          {hint < 2
                            ? "unknown"
                            : `${ele.stat.name}: ${ele.base_stat}`}
                        </li>
                      );
                    })
                  ) : (
                    <p className="text-uppercase">unknown</p>
                  )}
                </ul>
              </div>
            </div>
            <div className="barContainerRight m-auto row">
              <button
                id="genButton"
                className="col btn m-1"
                onClick={() => {
                  setGeneration("first");
                }}
              >
                1St GEN
              </button>
              <button
                id="genButton"
                className="col btn m-1"
                onClick={() => {
                  setGeneration("second");
                }}
              >
                2nd GEN
              </button>
            </div>
            <div className="buttonContainer mx-auto row justify-content-center">
              <button
                id="operationButton"
                className="col-sm-12 mt-2 btn"
                onClick={fetchPokemon}
              >
                Encounter
              </button>
              <button id="systemButton" className="col-sm-3  m-1 btn">
                Collection
              </button>
              <button
                id="systemButton"
                className="col-sm-3 systemButton m-1 btn"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3 pokeCollection">
        {pokeDex.map((ele) => {
          return (
            <SpriteBox
              img={ele.sprite_img}
              shiny_img={ele.shiny_sprite_img}
              shiny_bool={ele.shiny}
              img_bool={ele.regular}
              name={ele.name}
              id={ele.id}
            />
          );
        })}
      </div>
    </div>
  );
}
