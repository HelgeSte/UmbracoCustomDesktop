const t = "MySite.Dashboard", o = {
  type: "dashboard",
  name: "My New Dashboard",
  alias: t,
  meta: {
    label: "My Dashboard",
    pathname: "my-dashboard"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Content"
    }
  ]
}, n = [
  o
], e = (s, a) => {
  a.registerMany(n);
};
export {
  e as onInit
};
//# sourceMappingURL=mysite-backofficeextension.js.map
