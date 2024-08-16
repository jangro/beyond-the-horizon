declare module "packages/com/smoothchunk/world/$IChunkTimeSave" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChunkTimeSave {

 "smoothchunk$getNextSaveTime"(): long
 "smoothchunk$setSaveTimePoint"(arg0: long): void
}

export namespace $IChunkTimeSave {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkTimeSave$Type = ($IChunkTimeSave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkTimeSave_ = $IChunkTimeSave$Type;
}}
