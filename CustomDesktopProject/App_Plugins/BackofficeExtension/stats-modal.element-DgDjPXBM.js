import { html as i, state as p, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as u } from "@umbraco-cms/backoffice/modal";
import { P as h } from "./pokemonService-DH26ijx6.js";
var f = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, l = (t, a, r, o) => {
  for (var e = o > 1 ? void 0 : o ? _(a, r) : a, m = t.length - 1, n; m >= 0; m--)
    (n = t[m]) && (e = (o ? n(a, r, e) : n(e)) || e);
  return o && e && f(a, r, e), e;
};
const c = "pokedex-stats-modal";
let s = class extends u {
  constructor() {
    super();
    debugger;
  }
  firstUpdated() {
    if (!this.data)
      throw new Error("Id is required to delete a form");
    h.GetPokemonById(this.data.id).then((t) => {
      this._pokemonData = t;
    });
  }
  render() {
    return this._pokemonData && i`
        <uui-dialog-layout>
            <h3>
                ${this._pokemonData?.name ?? "Not found"}
            </h3>
            <hr />
            <div>
                    <img src=${this._pokemonData.sprites.front_default} alt=${this._pokemonData?.name} />
            </div>
            <h2>Stats</h2>
                <ul>
                    ${this._pokemonData.stats.map((t) => i`<li>
                        <b>${t.stat.name}</b>
                        <span>${t.base_stat}</span>
                    </li>`)}
                </ul>
        </uui-dialog-layout>
    `;
  }
};
l([
  p()
], s.prototype, "_pokemonData", 2);
s = l([
  d(c)
], s);
const P = s;
export {
  s as StatsModalElement,
  P as default
};
//# sourceMappingURL=stats-modal.element-DgDjPXBM.js.map
