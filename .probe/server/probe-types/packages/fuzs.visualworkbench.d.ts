declare module "packages/fuzs/visualworkbench/world/level/block/$VisualCraftingTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VisualCraftingTableBlock {

 "hasBlockEntity"(): boolean

(): boolean
}

export namespace $VisualCraftingTableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualCraftingTableBlock$Type = ($VisualCraftingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualCraftingTableBlock_ = $VisualCraftingTableBlock$Type;
}}
declare module "packages/fuzs/visualworkbench/mixin/accessor/$CraftingMenuAccessor" {
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResultContainer, $ResultContainer$Type} from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $CraftingMenuAccessor {

 "visualworkbench$getResultSlots"(): $ResultContainer
 "visualworkbench$setCraftSlots"(arg0: $CraftingContainer$Type): void
}

export namespace $CraftingMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenuAccessor$Type = ($CraftingMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMenuAccessor_ = $CraftingMenuAccessor$Type;
}}
