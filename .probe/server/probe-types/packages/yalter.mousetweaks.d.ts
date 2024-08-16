declare module "packages/yalter/mousetweaks/mixin/$AbstractContainerScreenAccessor" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerScreenAccessor {

 "mousetweaks$invokeFindSlot"(arg0: double, arg1: double): $Slot
 "mousetweaks$invokeSlotClicked"(arg0: $Slot$Type, arg1: integer, arg2: integer, arg3: $ClickType$Type): void
 "mousetweaks$getIsQuickCrafting"(): boolean
 "mousetweaks$setIsQuickCrafting"(arg0: boolean): void
 "mousetweaks$getQuickCraftingButton"(): integer
 "mousetweaks$setSkipNextRelease"(arg0: boolean): void
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
