import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as r } from "@umbraco-cms/backoffice/modal";
import { S as s } from "./index-CajdTang.js";
class u extends o {
  async execute() {
    const t = await this.getContext(r);
    if (this.args.unique == null)
      throw new Error("Unique is required to delete form");
    let e = parseInt(this.args.unique);
    t.open(this._host, s, {
      data: {
        id: e
      }
    });
  }
}
export {
  u as ShowStats,
  u as default
};
//# sourceMappingURL=show-stats.api-DMAB2C7Z.js.map
