const s = class s {
  static async GetPokemon() {
    let t = await fetch(this.baseUrl);
    if (!t.ok)
      throw new Error("Network response was not ok");
    let e = (await t.json())?.results;
    if (!e)
      throw new Error("Something went wrong parsing the response!");
    return e.forEach((r) => {
      let a = r.url.split("/").filter((i) => i).pop();
      a && (r.id = parseInt(a));
    }), e;
  }
  static async GetPokemonById(t) {
    let o = await fetch(`${this.baseUrl}/${t}`);
    if (!o.ok)
      throw new Error("Network response was not ok");
    return await o.json();
  }
};
s.baseUrl = "https://pokeapi.co/api/v2/pokemon";
let n = s;
export {
  n as P
};
//# sourceMappingURL=pokemonService-DH26ijx6.js.map
