declare module "packages/fudge/notenoughcrashes/$StateManager$IResettable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateManager$IResettable {

 "register"(): void
 "resetState"(): void

(): void
}

export namespace $StateManager$IResettable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateManager$IResettable$Type = ($StateManager$IResettable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateManager$IResettable_ = $StateManager$IResettable$Type;
}}
declare module "packages/fudge/notenoughcrashes/patches/$MinecraftClientAccess" {
import {$MetricsRecorder, $MetricsRecorder$Type} from "packages/net/minecraft/util/profiling/metrics/profiling/$MetricsRecorder"

export interface $MinecraftClientAccess {

 "getRecorder"(): $MetricsRecorder
 "setRecorder"(arg0: $MetricsRecorder$Type): void
}

export namespace $MinecraftClientAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccess$Type = ($MinecraftClientAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccess_ = $MinecraftClientAccess$Type;
}}
