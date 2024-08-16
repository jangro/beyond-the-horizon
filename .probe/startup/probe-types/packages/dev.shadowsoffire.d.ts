declare module "packages/dev/shadowsoffire/placebo/util/$CachedObject$CachedObjectSource" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CachedObject$CachedObjectSource {

 "getOrCreate"<T>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ItemStack$Type), (T)>): T
 "getOrCreate"<T>(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ItemStack$Type), (T)>, arg2: $ToIntFunction$Type<($ItemStack$Type)>): T

(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>): T
function getOrCreate<T>(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: $Function$Type<($ItemStack$Type), (T)>, arg3: $ToIntFunction$Type<($ItemStack$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedObject$CachedObjectSource$Type = ($CachedObject$CachedObjectSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedObject$CachedObjectSource_ = $CachedObject$CachedObjectSource$Type;
}}
declare module "packages/dev/shadowsoffire/placebo/mixin/$AbstractContainerMenuInvoker" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuInvoker {

 "_moveItemStackTo"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean

(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $AbstractContainerMenuInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuInvoker$Type = ($AbstractContainerMenuInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuInvoker_ = $AbstractContainerMenuInvoker$Type;
}}
