declare module "packages/immersive_armors/item/$ExtendedArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ExtendedArmorMaterial, $ExtendedArmorMaterial$Type} from "packages/immersive_armors/item/$ExtendedArmorMaterial"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExtendedArmorItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(settings: $Item$Properties$Type, slot: $ArmorItem$Type$Type, material: $ExtendedArmorMaterial$Type)

public "applyArmorToDamage"(entity: $LivingEntity$Type, source: $DamageSource$Type, amount: float, armor: $ItemStack$Type): float
public "applyArmorToAttack"(target: $LivingEntity$Type, source: $DamageSource$Type, amount: float, armor: $ItemStack$Type): float
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getMaterial"(): $ExtendedArmorMaterial
public "refreshAttributes"(): void
public "getToughness"(): float
public "getDefense"(): integer
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
get "material"(): $ExtendedArmorMaterial
get "toughness"(): float
get "defense"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedArmorItem$Type = ($ExtendedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedArmorItem_ = $ExtendedArmorItem$Type;
}}
declare module "packages/immersive_armors/item/$ExtendedArmorMaterial" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorEffect, $ArmorEffect$Type} from "packages/immersive_armors/armor_effects/$ArmorEffect"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Piece, $Piece$Type} from "packages/immersive_armors/client/render/entity/piece/$Piece"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ExtendedArmorMaterial implements $ArmorMaterial {

constructor(name: string)

public "hasEnchantment"(enchantment: $Enchantment$Type): boolean
public "getAttackDamage"(): float
public "getProtectionAmounts"(): (integer)[]
public "getDurabilityMultiplier"(): integer
public "getLoot"(): $Map<(string), (float)>
public "upper"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "lower"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "color"(color: integer): $ExtendedArmorMaterial
public "head"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "full"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "feet"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "legs"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "getDefenseForType"(slot: $ArmorItem$Type$Type): integer
public "getRepairIngredient"(): $Ingredient
public "getKnockbackResistance"(): float
public "getDurabilityForType"(slot: $ArmorItem$Type$Type): integer
public "getEquipSound"(): $SoundEvent
public "getToughness"(): float
public "getEnchantmentValue"(): integer
public "getEnchantments"(): $Map<($Enchantment), (integer)>
public "isAntiSkeleton"(): boolean
public "luck"(luck: integer): $ExtendedArmorMaterial
public "attackDamage"(attackDamage: integer): $ExtendedArmorMaterial
public "attackSpeed"(attackSpeed: integer): $ExtendedArmorMaterial
public "addLoot"(name: string, chance: float): $ExtendedArmorMaterial
public "enchantability"(enchantability: integer): $ExtendedArmorMaterial
public "antiSkeleton"(): $ExtendedArmorMaterial
public "getExtraHealth"(): integer
public "equipSound"(equipSound: $SoundEvent$Type): $ExtendedArmorMaterial
public "knockbackReduction"(knockbackReduction: float): $ExtendedArmorMaterial
public "hideCape"(): $ExtendedArmorMaterial
public "protectionAmount"(helmet: integer, chestplate: integer, legging: integer, boots: integer): $ExtendedArmorMaterial
public "getLuck"(): integer
public "getAttackSpeed"(): float
public "extraHealth"(extraHealth: integer): $ExtendedArmorMaterial
public "shouldHideCape"(): boolean
public "hidesSecondLayer"(head: boolean, chest: boolean, legs: boolean, feet: boolean): $ExtendedArmorMaterial
public "getPieces"(slot: $EquipmentSlot$Type): $List<($Piece)>
public "weight"(weight: float): $ExtendedArmorMaterial
public "enchantment"(enchantment: $Enchantment$Type, level: integer): $ExtendedArmorMaterial
public "getEnchantment"(enchantment: $Enchantment$Type): integer
public "getWeight"(): float
public "getName"(): string
public "durabilityMultiplier"(durabilityMultiplier: integer): $ExtendedArmorMaterial
public "getColor"(): integer
public "effect"(effect: $ArmorEffect$Type): $ExtendedArmorMaterial
public "toughness"(toughness: float): $ExtendedArmorMaterial
public "getEffects"(): $List<($ArmorEffect)>
public "repairIngredient"(repairIngredient: $Supplier$Type<($Ingredient$Type)>): $ExtendedArmorMaterial
public "chest"(pieceSupplier: $Piece$Type): $ExtendedArmorMaterial
public "shouldHideSecondLayer"(): (boolean)[]
get "protectionAmounts"(): (integer)[]
get "loot"(): $Map<(string), (float)>
get "knockbackResistance"(): float
get "enchantmentValue"(): integer
get "enchantments"(): $Map<($Enchantment), (integer)>
get "name"(): string
get "effects"(): $List<($ArmorEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedArmorMaterial$Type = ($ExtendedArmorMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedArmorMaterial_ = $ExtendedArmorMaterial$Type;
}}
declare module "packages/immersive_armors/item/$DyeableExtendedArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/immersive_armors/item/$ExtendedArmorItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ExtendedArmorMaterial, $ExtendedArmorMaterial$Type} from "packages/immersive_armors/item/$ExtendedArmorMaterial"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DyeableExtendedArmorItem extends $ExtendedArmorItem implements $DyeableLeatherItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(settings: $Item$Properties$Type, slot: $ArmorItem$Type$Type, material: $ExtendedArmorMaterial$Type)

public "getColor"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableExtendedArmorItem$Type = ($DyeableExtendedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableExtendedArmorItem_ = $DyeableExtendedArmorItem$Type;
}}
