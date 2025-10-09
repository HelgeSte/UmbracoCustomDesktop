import { UmbEntityActionBase as t } from "@umbraco-cms/backoffice/entity-action";
class i extends t {
  async execute() {
    if (this.args.unique == null)
      throw new Error("Unique is required to delete form");
    let e = parseInt(this.args.unique);
    window.history.pushState({}, "", `section/pokedex/view/pokemon/moves/${e}`);
  }
}
export {
  i as ShowMoves,
  i as default
};
//# sourceMappingURL=show-moves.api-C4Nlu-HM.js.map
