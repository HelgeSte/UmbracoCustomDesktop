/*import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';*/
import type { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';
import { DashboardManifest } from './dashboard/manifest';
import { SectionManifest } from './section/manifest';
import { menuManifests } from './section/menu/manifest';

const manifests: Array<ManifestTypes> = [
    SectionManifest,
    DashboardManifest,
    ...menuManifests
    
];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
    extensionRegistry.registerMany(manifests);
};