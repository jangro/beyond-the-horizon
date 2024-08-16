declare module "packages/fuzs/easymagic/mixin/client/accessor/$ChiseledBookShelfBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChiseledBookShelfBlockAccessor {

}

export namespace $ChiseledBookShelfBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledBookShelfBlockAccessor$Type = ($ChiseledBookShelfBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledBookShelfBlockAccessor_ = $ChiseledBookShelfBlockAccessor$Type;
}}
declare module "packages/fuzs/easymagic/mixin/accessor/$EnchantmentMenuAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$DataSlot, $DataSlot$Type} from "packages/net/minecraft/world/inventory/$DataSlot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $EnchantmentMenuAccessor {

 "setEnchantSlots"(arg0: $Container$Type): void
 "getEnchantmentSeed"(): $DataSlot
 "getRandom"(): $RandomSource
 "callGetEnchantmentList"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $List<($EnchantmentInstance)>
}

export namespace $EnchantmentMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuAccessor$Type = ($EnchantmentMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuAccessor_ = $EnchantmentMenuAccessor$Type;
}}
declare module "packages/fuzs/easymagic/mixin/accessor/$PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {

 "setEnchantmentSeed"(arg0: integer): void

(arg0: integer): void
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$Type = ($PlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAccessor_ = $PlayerAccessor$Type;
}}
