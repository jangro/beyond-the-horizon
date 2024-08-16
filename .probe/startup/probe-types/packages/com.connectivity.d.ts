declare module "packages/com/connectivity/networkstats/$IWrappedPacket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWrappedPacket {

 "getOriginalMsg"(): any
 "setOrgMsg"(arg0: any): void
}

export namespace $IWrappedPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrappedPacket$Type = ($IWrappedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrappedPacket_ = $IWrappedPacket$Type;
}}
