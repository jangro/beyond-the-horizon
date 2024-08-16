declare module "packages/immersive_armors/mixin/$MixinMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinMinecraftClient {

 "getPaused"(): boolean
 "getPausedTickDelta"(): float
}

export namespace $MixinMinecraftClient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinMinecraftClient$Type = ($MixinMinecraftClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinMinecraftClient_ = $MixinMinecraftClient$Type;
}}
declare module "packages/immersive_armors/mixin/$MixinItemRenderer" {
import {$ItemColors, $ItemColors$Type} from "packages/net/minecraft/client/color/item/$ItemColors"

export interface $MixinItemRenderer {

 "getColors"(): $ItemColors

(): $ItemColors
}

export namespace $MixinItemRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinItemRenderer$Type = ($MixinItemRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinItemRenderer_ = $MixinItemRenderer$Type;
}}
