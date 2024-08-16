declare module "packages/com/legacy/step/$SteppingEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SteppingEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, ...arg1: ($EquipmentSlot$Type)[])

public "getMaxCost"(arg0: integer): integer
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxLevel"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteppingEnchantment$Type = ($SteppingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteppingEnchantment_ = $SteppingEnchantment$Type;
}}
