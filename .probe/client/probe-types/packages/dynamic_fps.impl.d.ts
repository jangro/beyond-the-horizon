declare module "packages/dynamic_fps/impl/util/duck/$DuckSoundEngine" {
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"

export interface $DuckSoundEngine {

 "dynamic_fps$updateVolume"(source: $SoundSource$Type): void
}

export namespace $DuckSoundEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuckSoundEngine$Type = ($DuckSoundEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuckSoundEngine_ = $DuckSoundEngine$Type;
}}
declare module "packages/dynamic_fps/impl/util/duck/$DuckScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DuckScreen {

 "dynamic_fps$rendersBackground"(): boolean
 "dynamic_fps$setRendersBackground"(): void
}

export namespace $DuckScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuckScreen$Type = ($DuckScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuckScreen_ = $DuckScreen$Type;
}}
