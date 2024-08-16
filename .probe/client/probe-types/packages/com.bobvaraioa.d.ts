declare module "packages/com/bobvaraioa/kubejspowah/$KubeJSPowahPlugin$HeatSourceEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $KubeJSPowahPlugin$HeatSourceEvent extends $EventJS {
static "INSTANCE": $KubeJSPowahPlugin$HeatSourceEvent


public "add"(arg0: $ResourceLocation$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSPowahPlugin$HeatSourceEvent$Type = ($KubeJSPowahPlugin$HeatSourceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSPowahPlugin$HeatSourceEvent_ = $KubeJSPowahPlugin$HeatSourceEvent$Type;
}}
declare module "packages/com/bobvaraioa/kubejspowah/$KubeJSPowahPlugin$MagmaticFluidEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $KubeJSPowahPlugin$MagmaticFluidEvent extends $EventJS {
static "INSTANCE": $KubeJSPowahPlugin$MagmaticFluidEvent


public "add"(arg0: $ResourceLocation$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSPowahPlugin$MagmaticFluidEvent$Type = ($KubeJSPowahPlugin$MagmaticFluidEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSPowahPlugin$MagmaticFluidEvent_ = $KubeJSPowahPlugin$MagmaticFluidEvent$Type;
}}
declare module "packages/com/bobvaraioa/kubejspowah/$KubeJSPowahPlugin$CoolantsEvent" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $KubeJSPowahPlugin$CoolantsEvent extends $EventJS {
static "INSTANCE": $KubeJSPowahPlugin$CoolantsEvent


public "addFluid"(arg0: $ResourceLocation$Type, arg1: integer): void
public "addSolid"(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSPowahPlugin$CoolantsEvent$Type = ($KubeJSPowahPlugin$CoolantsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeJSPowahPlugin$CoolantsEvent_ = $KubeJSPowahPlugin$CoolantsEvent$Type;
}}
