declare module "packages/fuzs/easyanvils/mixin/accessor/$ItemCombinerMenuAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ItemCombinerMenuAccessor {

 "setInputSlots"(arg0: $Container$Type): void

(arg0: $Container$Type): void
}

export namespace $ItemCombinerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenuAccessor$Type = ($ItemCombinerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCombinerMenuAccessor_ = $ItemCombinerMenuAccessor$Type;
}}
declare module "packages/fuzs/easyanvils/mixin/accessor/$AnvilMenuAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnvilMenuAccessor {

 "easyanvils$setRepairItemCountCost"(arg0: integer): void
 "easyanvils$setItemName"(arg0: string): void
 "easyanvils$getRepairItemCountCost"(): integer
 "easyanvils$getItemName"(): string
}

export namespace $AnvilMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilMenuAccessor$Type = ($AnvilMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilMenuAccessor_ = $AnvilMenuAccessor$Type;
}}
declare module "packages/fuzs/easyanvils/mixin/accessor/$SlotAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $SlotAccessor {

 "setContainer"(arg0: $Container$Type): void

(arg0: $Container$Type): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
