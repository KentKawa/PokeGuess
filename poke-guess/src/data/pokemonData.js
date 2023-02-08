const pokeData = [
  {
    id: 1,
    name: "bulbasaur",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
  },
  {
    id: 2,
    name: "ivysaur",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
  },
  {
    id: 3,
    name: "venusaur",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
  },
  {
    id: 4,
    name: "charmander",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
  },
  {
    id: 5,
    name: "charmeleon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
  },
  {
    id: 6,
    name: "charizard",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
  },
  {
    id: 7,
    name: "squirtle",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
  },
  {
    id: 8,
    name: "wartortle",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
  },
  {
    id: 9,
    name: "blastoise",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
  },
  {
    id: 10,
    name: "caterpie",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
  },
  {
    id: 11,
    name: "metapod",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
  },
  {
    id: 12,
    name: "butterfree",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
  },
  {
    id: 13,
    name: "weedle",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
  },
  {
    id: 14,
    name: "kakuna",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png",
  },
  {
    id: 15,
    name: "beedrill",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
  },
  {
    id: 16,
    name: "pidgey",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png",
  },
  {
    id: 17,
    name: "pidgeotto",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
  },
  {
    id: 18,
    name: "pidgeot",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
  },
  {
    id: 19,
    name: "rattata",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png",
  },
  {
    id: 20,
    name: "raticate",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
  },
  {
    id: 21,
    name: "spearow",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png",
  },
  {
    id: 22,
    name: "fearow",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png",
  },
  {
    id: 23,
    name: "ekans",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
  },
  {
    id: 24,
    name: "arbok",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png",
  },
  {
    id: 25,
    name: "pikachu",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
  },
  {
    id: 26,
    name: "raichu",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png",
  },
  {
    id: 27,
    name: "sandshrew",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png",
  },
  {
    id: 28,
    name: "sandslash",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png",
  },
  {
    id: 29,
    name: "nidoran-f",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/29.png",
  },
  {
    id: 30,
    name: "nidorina",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/30.png",
  },
  {
    id: 31,
    name: "nidoqueen",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/31.png",
  },
  {
    id: 32,
    name: "nidoran-m",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/32.png",
  },
  {
    id: 33,
    name: "nidorino",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/33.png",
  },
  {
    id: 34,
    name: "nidoking",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/34.png",
  },
  {
    id: 35,
    name: "clefairy",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
  },
  {
    id: 36,
    name: "clefable",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/36.png",
  },
  {
    id: 37,
    name: "vulpix",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/37.png",
  },
  {
    id: 38,
    name: "ninetales",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png",
  },
  {
    id: 39,
    name: "jigglypuff",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png",
  },
  {
    id: 40,
    name: "wigglytuff",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
  },
  {
    id: 41,
    name: "zubat",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/41.png",
  },
  {
    id: 42,
    name: "golbat",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/42.png",
  },
  {
    id: 43,
    name: "oddish",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/43.png",
  },
  {
    id: 44,
    name: "gloom",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/44.png",
  },
  {
    id: 45,
    name: "vileplume",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/45.png",
  },
  {
    id: 46,
    name: "paras",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/46.png",
  },
  {
    id: 47,
    name: "parasect",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/47.png",
  },
  {
    id: 48,
    name: "venonat",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/48.png",
  },
  {
    id: 49,
    name: "venomoth",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
  },
  {
    id: 50,
    name: "diglett",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/50.png",
  },
  {
    id: 51,
    name: "dugtrio",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/51.png",
  },
  {
    id: 52,
    name: "meowth",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png",
  },
  {
    id: 53,
    name: "persian",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png",
  },
  {
    id: 54,
    name: "psyduck",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png",
  },
  {
    id: 55,
    name: "golduck",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/55.png",
  },
  {
    id: 56,
    name: "mankey",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/56.png",
  },
  {
    id: 57,
    name: "primeape",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/57.png",
  },
  {
    id: 58,
    name: "growlithe",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/58.png",
  },
  {
    id: 59,
    name: "arcanine",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/59.png",
  },
  {
    id: 60,
    name: "poliwag",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/60.png",
  },
  {
    id: 61,
    name: "poliwhirl",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/61.png",
  },
  {
    id: 62,
    name: "poliwrath",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/62.png",
  },
  {
    id: 63,
    name: "abra",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/63.png",
  },
  {
    id: 64,
    name: "kadabra",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/64.png",
  },
  {
    id: 65,
    name: "alakazam",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/65.png",
  },
  {
    id: 66,
    name: "machop",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/66.png",
  },
  {
    id: 67,
    name: "machoke",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/67.png",
  },
  {
    id: 68,
    name: "machamp",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/68.png",
  },
  {
    id: 69,
    name: "bellsprout",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/69.png",
  },
  {
    id: 70,
    name: "weepinbell",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/70.png",
  },
  {
    id: 71,
    name: "victreebel",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/71.png",
  },
  {
    id: 72,
    name: "tentacool",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/72.png",
  },
  {
    id: 73,
    name: "tentacruel",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/73.png",
  },
  {
    id: 74,
    name: "geodude",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/74.png",
  },
  {
    id: 75,
    name: "graveler",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/75.png",
  },
  {
    id: 76,
    name: "golem",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/76.png",
  },
  {
    id: 77,
    name: "ponyta",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/77.png",
  },
  {
    id: 78,
    name: "rapidash",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/78.png",
  },
  {
    id: 79,
    name: "slowpoke",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/79.png",
  },
  {
    id: 80,
    name: "slowbro",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/80.png",
  },
  {
    id: 81,
    name: "magnemite",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/81.png",
  },
  {
    id: 82,
    name: "magneton",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png",
  },
  {
    id: 83,
    name: "farfetchd",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/83.png",
  },
  {
    id: 84,
    name: "doduo",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/84.png",
  },
  {
    id: 85,
    name: "dodrio",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/85.png",
  },
  {
    id: 86,
    name: "seel",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/86.png",
  },
  {
    id: 87,
    name: "dewgong",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/87.png",
  },
  {
    id: 88,
    name: "grimer",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/88.png",
  },
  {
    id: 89,
    name: "muk",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/89.png",
  },
  {
    id: 90,
    name: "shellder",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/90.png",
  },
  {
    id: 91,
    name: "cloyster",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png",
  },
  {
    id: 92,
    name: "gastly",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png",
  },
  {
    id: 93,
    name: "haunter",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/93.png",
  },
  {
    id: 94,
    name: "gengar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png",
  },
  {
    id: 95,
    name: "onix",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/95.png",
  },
  {
    id: 96,
    name: "drowzee",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/96.png",
  },
  {
    id: 97,
    name: "hypno",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/97.png",
  },
  {
    id: 98,
    name: "krabby",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/98.png",
  },
  {
    id: 99,
    name: "kingler",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/99.png",
  },
  {
    id: 100,
    name: "voltorb",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/100.png",
  },
  {
    id: 101,
    name: "electrode",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/101.png",
  },
  {
    id: 102,
    name: "exeggcute",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/102.png",
  },
  {
    id: 103,
    name: "exeggutor",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/103.png",
  },
  {
    id: 104,
    name: "cubone",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/104.png",
  },
  {
    id: 105,
    name: "marowak",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/105.png",
  },
  {
    id: 106,
    name: "hitmonlee",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/106.png",
  },
  {
    id: 107,
    name: "hitmonchan",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/107.png",
  },
  {
    id: 108,
    name: "lickitung",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/108.png",
  },
  {
    id: 109,
    name: "koffing",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/109.png",
  },
  {
    id: 110,
    name: "weezing",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/110.png",
  },
  {
    id: 111,
    name: "rhyhorn",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/111.png",
  },
  {
    id: 112,
    name: "rhydon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png",
  },
  {
    id: 113,
    name: "chansey",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/113.png",
  },
  {
    id: 114,
    name: "tangela",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/114.png",
  },
  {
    id: 115,
    name: "kangaskhan",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/115.png",
  },
  {
    id: 116,
    name: "horsea",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/116.png",
  },
  {
    id: 117,
    name: "seadra",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/117.png",
  },
  {
    id: 118,
    name: "goldeen",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/118.png",
  },
  {
    id: 119,
    name: "seaking",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/119.png",
  },
  {
    id: 120,
    name: "staryu",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/120.png",
  },
  {
    id: 121,
    name: "starmie",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/121.png",
  },
  {
    id: 122,
    name: "mr-mime",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/122.png",
  },
  {
    id: 123,
    name: "scyther",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/123.png",
  },
  {
    id: 124,
    name: "jynx",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/124.png",
  },
  {
    id: 125,
    name: "electabuzz",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/125.png",
  },
  {
    id: 126,
    name: "magmar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/126.png",
  },
  {
    id: 127,
    name: "pinsir",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/127.png",
  },
  {
    id: 128,
    name: "tauros",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/128.png",
  },
  {
    id: 129,
    name: "magikarp",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/129.png",
  },
  {
    id: 130,
    name: "gyarados",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
  },
  {
    id: 131,
    name: "lapras",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/131.png",
  },
  {
    id: 132,
    name: "ditto",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
  },
  {
    id: 133,
    name: "eevee",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png",
  },
  {
    id: 134,
    name: "vaporeon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/134.png",
  },
  {
    id: 135,
    name: "jolteon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/135.png",
  },
  {
    id: 136,
    name: "flareon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/136.png",
  },
  {
    id: 137,
    name: "porygon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/137.png",
  },
  {
    id: 138,
    name: "omanyte",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/138.png",
  },
  {
    id: 139,
    name: "omastar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/139.png",
  },
  {
    id: 140,
    name: "kabuto",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/140.png",
  },
  {
    id: 141,
    name: "kabutops",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/141.png",
  },
  {
    id: 142,
    name: "aerodactyl",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/142.png",
  },
  {
    id: 143,
    name: "snorlax",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png",
  },
  {
    id: 144,
    name: "articuno",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png",
  },
  {
    id: 145,
    name: "zapdos",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
  },
  {
    id: 146,
    name: "moltres",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png",
  },
  {
    id: 147,
    name: "dratini",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png",
  },
  {
    id: 148,
    name: "dragonair",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/148.png",
  },
  {
    id: 149,
    name: "dragonite",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png",
  },
  {
    id: 150,
    name: "mewtwo",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png",
  },
  {
    id: 151,
    name: "mew",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png",
  },
  {
    id: 152,
    name: "chikorita",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png",
  },
  {
    id: 153,
    name: "bayleef",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/153.png",
  },
  {
    id: 154,
    name: "meganium",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/154.png",
  },
  {
    id: 155,
    name: "cyndaquil",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/155.png",
  },
  {
    id: 156,
    name: "quilava",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/156.png",
  },
  {
    id: 157,
    name: "typhlosion",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/157.png",
  },
  {
    id: 158,
    name: "totodile",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/158.png",
  },
  {
    id: 159,
    name: "croconaw",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/159.png",
  },
  {
    id: 160,
    name: "feraligatr",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/160.png",
  },
  {
    id: 161,
    name: "sentret",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/161.png",
  },
  {
    id: 162,
    name: "furret",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/162.png",
  },
  {
    id: 163,
    name: "hoothoot",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/163.png",
  },
  {
    id: 164,
    name: "noctowl",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/164.png",
  },
  {
    id: 165,
    name: "ledyba",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/165.png",
  },
  {
    id: 166,
    name: "ledian",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/166.png",
  },
  {
    id: 167,
    name: "spinarak",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/167.png",
  },
  {
    id: 168,
    name: "ariados",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/168.png",
  },
  {
    id: 169,
    name: "crobat",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/169.png",
  },
  {
    id: 170,
    name: "chinchou",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/170.png",
  },
  {
    id: 171,
    name: "lanturn",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/171.png",
  },
  {
    id: 172,
    name: "pichu",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/172.png",
  },
  {
    id: 173,
    name: "cleffa",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/173.png",
  },
  {
    id: 174,
    name: "igglybuff",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/174.png",
  },
  {
    id: 175,
    name: "togepi",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/175.png",
  },
  {
    id: 176,
    name: "togetic",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/176.png",
  },
  {
    id: 177,
    name: "natu",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/177.png",
  },
  {
    id: 178,
    name: "xatu",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/178.png",
  },
  {
    id: 179,
    name: "mareep",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/179.png",
  },
  {
    id: 180,
    name: "flaaffy",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/180.png",
  },
  {
    id: 181,
    name: "ampharos",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/181.png",
  },
  {
    id: 182,
    name: "bellossom",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/182.png",
  },
  {
    id: 183,
    name: "marill",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/183.png",
  },
  {
    id: 184,
    name: "azumarill",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/184.png",
  },
  {
    id: 185,
    name: "sudowoodo",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/185.png",
  },
  {
    id: 186,
    name: "politoed",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/186.png",
  },
  {
    id: 187,
    name: "hoppip",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/187.png",
  },
  {
    id: 188,
    name: "skiploom",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/188.png",
  },
  {
    id: 189,
    name: "jumpluff",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/189.png",
  },
  {
    id: 190,
    name: "aipom",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/190.png",
  },
  {
    id: 191,
    name: "sunkern",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/191.png",
  },
  {
    id: 192,
    name: "sunflora",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/192.png",
  },
  {
    id: 193,
    name: "yanma",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/193.png",
  },
  {
    id: 194,
    name: "wooper",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/194.png",
  },
  {
    id: 195,
    name: "quagsire",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/195.png",
  },
  {
    id: 196,
    name: "espeon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/196.png",
  },
  {
    id: 197,
    name: "umbreon",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/197.png",
  },
  {
    id: 198,
    name: "murkrow",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/198.png",
  },
  {
    id: 199,
    name: "slowking",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/199.png",
  },
  {
    id: 200,
    name: "misdreavus",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/200.png",
  },
  {
    id: 201,
    name: "unown",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/201.png",
  },
  {
    id: 202,
    name: "wobbuffet",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/202.png",
  },
  {
    id: 203,
    name: "girafarig",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/203.png",
  },
  {
    id: 204,
    name: "pineco",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/204.png",
  },
  {
    id: 205,
    name: "forretress",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/205.png",
  },
  {
    id: 206,
    name: "dunsparce",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/206.png",
  },
  {
    id: 207,
    name: "gligar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/207.png",
  },
  {
    id: 208,
    name: "steelix",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/208.png",
  },
  {
    id: 209,
    name: "snubbull",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/209.png",
  },
  {
    id: 210,
    name: "granbull",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/210.png",
  },
  {
    id: 211,
    name: "qwilfish",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/211.png",
  },
  {
    id: 212,
    name: "scizor",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/212.png",
  },
  {
    id: 213,
    name: "shuckle",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/213.png",
  },
  {
    id: 214,
    name: "heracross",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/214.png",
  },
  {
    id: 215,
    name: "sneasel",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/215.png",
  },
  {
    id: 216,
    name: "teddiursa",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/216.png",
  },
  {
    id: 217,
    name: "ursaring",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/217.png",
  },
  {
    id: 218,
    name: "slugma",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/218.png",
  },
  {
    id: 219,
    name: "magcargo",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/219.png",
  },
  {
    id: 220,
    name: "swinub",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/220.png",
  },
  {
    id: 221,
    name: "piloswine",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/221.png",
  },
  {
    id: 222,
    name: "corsola",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/222.png",
  },
  {
    id: 223,
    name: "remoraid",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/223.png",
  },
  {
    id: 224,
    name: "octillery",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/224.png",
  },
  {
    id: 225,
    name: "delibird",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/225.png",
  },
  {
    id: 226,
    name: "mantine",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/226.png",
  },
  {
    id: 227,
    name: "skarmory",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/227.png",
  },
  {
    id: 228,
    name: "houndour",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/228.png",
  },
  {
    id: 229,
    name: "houndoom",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/229.png",
  },
  {
    id: 230,
    name: "kingdra",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/230.png",
  },
  {
    id: 231,
    name: "phanpy",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/231.png",
  },
  {
    id: 232,
    name: "donphan",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/232.png",
  },
  {
    id: 233,
    name: "porygon2",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/233.png",
  },
  {
    id: 234,
    name: "stantler",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/234.png",
  },
  {
    id: 235,
    name: "smeargle",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/235.png",
  },
  {
    id: 236,
    name: "tyrogue",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/236.png",
  },
  {
    id: 237,
    name: "hitmontop",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/237.png",
  },
  {
    id: 238,
    name: "smoochum",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/238.png",
  },
  {
    id: 239,
    name: "elekid",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/239.png",
  },
  {
    id: 240,
    name: "magby",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/240.png",
  },
  {
    id: 241,
    name: "miltank",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/241.png",
  },
  {
    id: 242,
    name: "blissey",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/242.png",
  },
  {
    id: 243,
    name: "raikou",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/243.png",
  },
  {
    id: 244,
    name: "entei",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/244.png",
  },
  {
    id: 245,
    name: "suicune",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/245.png",
  },
  {
    id: 246,
    name: "larvitar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/246.png",
  },
  {
    id: 247,
    name: "pupitar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/247.png",
  },
  {
    id: 248,
    name: "tyranitar",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/248.png",
  },
  {
    id: 249,
    name: "lugia",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/249.png",
  },
  {
    id: 250,
    name: "ho-oh",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/250.png",
  },
  {
    id: 251,
    name: "celebi",
    regular: false,
    shiny: false,
    sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    shiny_sprite_img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/251.png",
  },
];

export default pokeData;
