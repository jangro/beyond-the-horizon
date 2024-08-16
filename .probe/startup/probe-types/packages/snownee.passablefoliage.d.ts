declare module "packages/snownee/passablefoliage/$PassableFoliageBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PassableFoliageBlock {

 "pfoliage$isPassable"(): boolean
 "pfoliage$setPassable"(arg0: boolean): void
}

export namespace $PassableFoliageBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassableFoliageBlock$Type = ($PassableFoliageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassableFoliageBlock_ = $PassableFoliageBlock$Type;
}}
declare module "packages/snownee/passablefoliage/enchantment/$LeafWalkerEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $LeafWalkerEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor()

public "isCurse"(): boolean
public "isDiscoverable"(): boolean
public "isTradeable"(): boolean
get "curse"(): boolean
get "discoverable"(): boolean
get "tradeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafWalkerEnchantment$Type = ($LeafWalkerEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeafWalkerEnchantment_ = $LeafWalkerEnchantment$Type;
}}
