import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

export const DASHBOARD_ALIAS = 'MySite.Dashboard';

export const DashboardManifest: ManifestDashboard = {
    type: 'dashboard',
    name: 'My New Dashboard',
    alias: DASHBOARD_ALIAS,
    meta: {
        label: 'My Dashboard',
        pathname: 'my-dashboard'
    },
    conditions: [
        {
            alias: 'Umb.Condition.SectionAlias',
            match: "Umb.Section.Content"
        }
    ]
};