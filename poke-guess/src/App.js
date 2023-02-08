import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SpriteBox from "./components/SpriteBox";
import pokeData from "./data/pokemonData";
import pokeball from "./assets/pokeball.png";
import bop from "./assets/Girasol-QuincasMoreira.mp3";
import { useState, useEffect } from "react";

export default function App() {
  const [pokeDex, setPokeDex] = useState([]),
    [fetchedPokemon, setFetchedPokemon] = useState(),
    [name, setName] = useState(""),
    [picture, setPicture] = useState(pokeball),
    [type, setType] = useState(""),
    [stat, setStat] = useState(""),
    [shiny, setShiny] = useState(false),
    [generation, setGeneration] = useState("first"),
    [bright, setBright] = useState(1),
    [hint, setHint] = useState(0),
    [guessText, setGuessText] = useState(""),
    [music, setMusic] = useState(true),
    [audio] = useState(new Audio(bop));

  useEffect(() => {
    if (!localStorage.getItem("pokeData")) {
      localStorage.setItem("pokeData", JSON.stringify(pokeData));
    }
    setPokeDex(JSON.parse(localStorage.getItem("pokeData")));
    const localPokeDex = JSON.parse(localStorage.getItem("pokeData"));
    if (fetchedPokemon) {
      localPokeDex.forEach((pokemon) => {
        if (pokemon.name === fetchedPokemon.name) {
          if (!pokemon.regular) {
            setShiny(() => false);
            setPicture(fetchedPokemon.sprites.front_default);
            setBright(0);
            setHint(0);
          } else if (!pokemon.shiny) {
            setShiny(() => true);
            setPicture(fetchedPokemon.sprites.front_shiny);
            setBright(0);
            setHint(0);
          } else {
            setShiny(() => false);
            setPicture(fetchedPokemon.sprites.front_default);
            setBright(1);
            setHint(2);
          }
        }
      });
    }
  }, [name, fetchedPokemon]);

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        generation === "first"
          ? Math.floor(Math.random() * 151)
          : Math.floor(Math.random() * 100) + 151
      }`
    );
    const data = await response.json();
    setFetchedPokemon(data);
    if (data) {
      if (data.name === "nidoran-m" || data.name === "nidoran-f") {
        setName("nidoran");
      } else if (data.name === "mr-mime") {
        setName("mr.mime");
      } else {
        setName(data.name);
      }
      setType(data.types);
      setStat(data.stats);
      setGuessText(() => "");
    }
    console.log(data);
  };

  const guess = (guess) => {
    if (guess.toLowerCase() === name) {
      setBright(1);
      let localPokeDex = JSON.parse(localStorage.getItem("pokeData"));
      if (shiny) {
        localPokeDex.forEach((ele) => {
          if (ele.name === fetchedPokemon.name) {
            ele.shiny = true;
          }
        });
      } else {
        localPokeDex.forEach((ele) => {
          if (ele.name === fetchedPokemon.name) {
            ele.regular = true;
          }
        });
      }

      localStorage.setItem("pokeData", JSON.stringify(localPokeDex));
      setPokeDex(JSON.parse(localStorage.getItem("pokeData")));
      setHint(2);
    }
  };

  const musicPlayer = () => {
    audio.volume = 0.05;
    audio.loop = true;
    setMusic(!music);
    if (music) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="App">
      <div
        id="pokeDex"
        className="container-fluid align-items-center row m-auto"
      >
        <div id="pokeDexBodyLeft" className="bg-danger col p-0">
          <div id="lensHolder" className="sm-col d-flex">
            <div id="lensOuter" className="my-3">
              <div id="lensInner">
                <div id="lensFlare"></div>
              </div>
            </div>
            <div className="lensOuter mt-3">
              <div className="lensInner" style={{ backgroundColor: "#FF1B32" }}>
                <div id="lensFlare"></div>
              </div>
            </div>
            <div className="lensOuter mt-3">
              <div className="lensInner" style={{ backgroundColor: "#ffd639" }}>
                <div id="lensFlare"></div>
              </div>
            </div>
            <div className="lensOuter mt-3">
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
                  style={{
                    filter: `brightness(${bright})`,
                    animation: `${
                      picture !== pokeball ? "" : "pokeball"
                    } 1s infinite alternate`,
                  }}
                  src={picture}
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
                    value={guessText}
                  />
                </div>
                <div className="guessButtons form-group">
                  <button
                    className="btn m-2"
                    type="submit"
                    onClick={() => guess(guessText)}
                  >
                    <span aria-label="check mark" role="img" id="emote">
                      &#10004; CHECK
                    </span>
                  </button>
                  <button
                    className="btn m-2"
                    onClick={() => {
                      setHint((prev) => prev + 1);
                    }}
                    disabled={hint >= 2 ? true : false}
                  >
                    <span aria-label="?" role="img" id="emote">
                      &#10068; HINT
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="pokeDexBodyRight" className="col p-0">
          <div
            id="blank"
            className="d-flex align-items-center justify-content-center"
          >
            <h1 className="title" onClick={fetchPokemon}>
              <span id="poke">POKÉ</span>GUESS
            </h1>
          </div>
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
                ENCOUNTER
              </button>
              <button
                id="systemButton"
                className="col-sm-4  m-1 btn"
                onClick={() => (window.location.href = "#pokeCollection")}
              >
                <a
                  href="#pokeCollection"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  COLLECTION
                </a>
              </button>
              <button
                id="systemButton"
                className="col-sm-4 systemButton m-1 btn"
              >
                ABOUT
              </button>
              <button
                id="systemButton"
                className="col-sm-2 m-1 btn"
                onClick={musicPlayer}
              >
                <audio id="bop" loop={true}>
                  Your browser does not support the audio element.
                </audio>
                <span aria-label="speaker" role="img" id="emote">
                  {music ? "\u{1F508}" : "\u{1F50A}"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="pokeCollection" className="row m-0">
        <div id="pokeCollectionBar" className="d-flex justify-content-end">
          <button
            id="backButton"
            className="btn m-1"
            onClick={() => (window.location.href = "#pokeDex")}
          >
            <a
              href="#pokeDex"
              style={{ textDecoration: "none", color: "black", height: "100%" }}
            >
              Back
            </a>
          </button>
        </div>
        <div className="row m-0 pokeCollection">
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
    </div>
  );
}
