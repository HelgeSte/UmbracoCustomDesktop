import { UmbModalToken as i } from "@umbraco-cms/backoffice/modal";
const s = "MySite.Dashboard", m = {
  type: "dashboard",
  name: "My Dashboard",
  alias: s,
  meta: {
    label: "My New Dashobard",
    pathname: "my-dashboard"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Content"
    }
  ]
}, n = "MySite.PokedexSection", d = {
  type: "section",
  alias: n,
  name: "Pokedex Section",
  weight: 10,
  meta: {
    label: "Pokedex",
    pathname: "pokedex"
  }
}, o = "POKEDEX.STATS.MODAL", P = new i(o, {
  modal: {
    type: "dialog",
    size: "medium"
  }
}), c = "MySite.PokedexSidebarApp", e = "MySite.PokedexMenu", S = "MySite.PokedexMenuItems", t = "MySite.PokemonEntity", l = {
  type: "sectionSidebarApp",
  kind: "menuWithEntityActions",
  alias: c,
  name: "Pokedex Sidebar App",
  meta: {
    label: "Pokemon",
    menu: e
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: n
    }
  ]
}, M = {
  type: "menu",
  alias: e,
  name: "Pokedex Menu"
}, A = {
  type: "menuItem",
  kind: "tree",
  alias: S,
  name: "Pokedex Menu Items",
  meta: {
    label: "Pokemon",
    menus: [e]
  },
  element: () => import("./menu-items-CLta1-wU.js")
}, p = [
  {
    type: "entityAction",
    alias: "showMoves",
    name: "Show Moves",
    kind: "default",
    api: () => import("./show-moves.api-C4Nlu-HM.js"),
    forEntityTypes: [t],
    meta: {
      icon: "icon-bird",
      label: "Moves"
    }
  },
  {
    type: "entityAction",
    alias: "showStats",
    name: "Show Stats",
    kind: "default",
    api: () => import("./show-stats.api-DMAB2C7Z.js"),
    forEntityTypes: [t],
    meta: {
      icon: "icon-pulse",
      label: "Stats"
    }
  }
], y = [
  {
    type: "modal",
    alias: o,
    name: "Stats Modal",
    element: () => import("./stats-modal.element-DgDjPXBM.js")
  }
], r = [l, M, A, ...p, ...y], b = [
  d,
  m,
  ...r
], u = (k, a) => {
  a.registerMany(b);
};
export {
  P as S,
  u as o
};
//# sourceMappingURL=index-CajdTang.js.map
