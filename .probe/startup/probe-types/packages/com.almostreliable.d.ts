declare module "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder" {
import {$DistancePredicate, $DistancePredicate$Type} from "packages/net/minecraft/advancements/critereon/$DistancePredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $DistancePredicateBuilder {

constructor()

public "horizontal"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "build"(): $DistancePredicate
public "x"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "z"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "y"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
public "absolute"(bounds: $MinMaxBounds$Doubles$Type): $DistancePredicateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistancePredicateBuilder$Type = ($DistancePredicateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistancePredicateBuilder_ = $DistancePredicateBuilder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PaletteWrapper {

constructor(arg0: $StructureTemplate$Palette$Type, arg1: $Vec3i$Type)

public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $CompoundTag$Type): void
public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "get"(arg0: $BlockPos$Type): $StructureTemplate$StructureBlockInfo
public "clear"(): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteWrapper$Type = ($PaletteWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteWrapper_ = $PaletteWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$PlayerEnchantEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$EnchantmentTableServerEventJS, $EnchantmentTableServerEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $PlayerEnchantEventJS extends $EnchantmentTableServerEventJS {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $EnchantmentMenuProcess$Type)

public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getClickedButton"(): integer
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getCosts"(): integer
get "enchantments"(): $List<($EnchantmentInstance)>
get "clickedButton"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
get "costs"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantEventJS$Type = ($PlayerEnchantEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEnchantEventJS_ = $PlayerEnchantEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/potion/$PotionBrewingRegisterEvent" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionBrewingRegisterEvent extends $EventJS {

constructor()

public "validateContainer"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
public "addContainerRecipe"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
public "addCustomBrewing"(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): void
public "removeContainer"(arg0: $Ingredient$Type): void
public "removeByPotion"(arg0: $Potion$Type, arg1: $Ingredient$Type, arg2: $Potion$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type, arg2: $Potion$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingRegisterEvent$Type = ($PotionBrewingRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingRegisterEvent_ = $PotionBrewingRegisterEvent$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$WandererTradingEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"

export class $WandererTradingEventJS extends $EventJS {

constructor(arg0: $Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)

public "removeVanillaTrades"(arg0: integer): void
public "getTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "removeTrades"(arg0: $TradeFilter$Type): void
public "addCustomTrade"(arg0: integer, arg1: $TransformableTrade$Transformer$Type): void
public "removeModdedTrades"(arg0: integer): void
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: integer, arg1: T): T
public "addTrade"(arg0: integer, arg1: ($TradeItem$Type)[], arg2: $TradeItem$Type): $SimpleTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradingEventJS$Type = ($WandererTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandererTradingEventJS_ = $WandererTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$FilterAvailableEnchantmentsEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterAvailableEnchantmentsEventJS extends $EventJS {

constructor(arg0: $List$Type<($EnchantmentInstance$Type)>, arg1: integer, arg2: $ItemStack$Type)

public "getEnchantmentInstances"(): $List<($EnchantmentInstance)>
public "printEnchantmentInstances"(): void
public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "getItem"(): $ItemStack
public "addWithLevel"(arg0: $Enchantment$Type, arg1: integer): void
public "getPowerLevel"(): integer
get "enchantmentInstances"(): $List<($EnchantmentInstance)>
get "item"(): $ItemStack
get "powerLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAvailableEnchantmentsEventJS$Type = ($FilterAvailableEnchantmentsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAvailableEnchantmentsEventJS_ = $FilterAvailableEnchantmentsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapPosInfo extends $Record {

constructor(pos: $BlockPos$Type, name: $Component$Type)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Type = ($MapPosInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo_ = $MapPosInfo$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureLoadEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplateAccess, $StructureTemplateAccess$Type} from "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess"
import {$PaletteWrapper, $PaletteWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityInfoWrapper, $EntityInfoWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export class $StructureLoadEventJS extends $EventJS {

constructor(arg0: $StructureTemplateAccess$Type, arg1: $ResourceLocation$Type)

public static "invoke"(arg0: $StructureTemplate$Type, arg1: $ResourceLocation$Type): void
public "getId"(): string
public "getPalette"(arg0: integer): $PaletteWrapper
public "getEntities"(): $EntityInfoWrapper
public "getStructureSize"(): $Vec3i
public "getPalettesSize"(): integer
public "getEntitiesSize"(): integer
public "removePalette"(arg0: integer): void
public "forEachPalettes"(arg0: $Consumer$Type<($PaletteWrapper$Type)>): void
get "id"(): string
get "entities"(): $EntityInfoWrapper
get "structureSize"(): $Vec3i
get "palettesSize"(): integer
get "entitiesSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLoadEventJS$Type = ($StructureLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLoadEventJS_ = $StructureLoadEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/$MoreJSBinding" {
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WeightedList$Builder, $WeightedList$Builder$Type} from "packages/com/almostreliable/morejs/util/$WeightedList$Builder"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MoreJSBinding {

constructor()

public static "ofWeightedList"(arg0: any): $WeightedList<(any)>
public static "ofTradeFilter"(arg0: any): $TradeFilter
public static "ofTradeItem"(arg0: any): $TradeItem
public static "findStructure"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "findBiome"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "range"(arg0: any): $IntRange
public static "weightedList"(): $WeightedList$Builder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreJSBinding$Type = ($MoreJSBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreJSBinding_ = $MoreJSBinding$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeFilter" {
import {$TriConsumer, $TriConsumer$Type} from "packages/com/almostreliable/morejs/util/$TriConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeTypes, $TradeTypes$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeTypes"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $TradeFilter {

constructor(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type)

public "setProfessions"(arg0: $Set$Type<($VillagerProfession$Type)>): void
public "setTradeTypes"(arg0: $Set$Type<($TradeTypes$Type)>): void
public "matchMerchantLevel"(arg0: integer): boolean
public "matchProfession"(arg0: $VillagerProfession$Type): boolean
public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $TradeTypes$Type): boolean
public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $TradeTypes$Type): boolean
public "matchType"(arg0: $TradeTypes$Type): boolean
public "setSecondCountMatcher"(arg0: $IntRange$Type): void
public "setMerchantLevelMatcher"(arg0: $IntRange$Type): void
public "setFirstCountMatcher"(arg0: $IntRange$Type): void
public "setOutputCountMatcher"(arg0: $IntRange$Type): void
public "onMatch"(arg0: $TriConsumer$Type<($ItemStack$Type), ($ItemStack$Type), ($ItemStack$Type)>): void
set "professions"(value: $Set$Type<($VillagerProfession$Type)>)
set "tradeTypes"(value: $Set$Type<($TradeTypes$Type)>)
set "secondCountMatcher"(value: $IntRange$Type)
set "merchantLevelMatcher"(value: $IntRange$Type)
set "firstCountMatcher"(value: $IntRange$Type)
set "outputCountMatcher"(value: $IntRange$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeFilter$Type = ($TradeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeFilter_ = $TradeFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry$Generator" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootEntry$Generator {

 "create"(arg0: $LootContext$Type): $ItemStack

(arg0: $LootContext$Type): $ItemStack
}

export namespace $LootEntry$Generator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Generator$Type = ($LootEntry$Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry$Generator_ = $LootEntry$Generator$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess" {
import {$EnchantmentState, $EnchantmentState$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $EnchantmentMenuProcess {

constructor(arg0: $EnchantmentMenu$Type)

public "setCurrentItem"(arg0: $ItemStack$Type): void
public "getState"(): $EnchantmentState
public "setState"(arg0: $EnchantmentState$Type): void
public "clearEnchantments"(): void
public "setPlayer"(arg0: $Player$Type): void
public "isFreezeBroadcast"(): boolean
public "isItemEnchantable"(arg0: $ItemStack$Type): boolean
public "setEnchantments"(arg0: integer, arg1: $List$Type<($EnchantmentInstance$Type)>): void
public "getEnchantments"(arg0: integer): $List<($EnchantmentInstance)>
public "matchesCurrentItem"(arg0: $ItemStack$Type): boolean
public "prepareEvent"(arg0: $ItemStack$Type): void
public "getCurrentItem"(): $ItemStack
public "abortEvent"(arg0: $ItemStack$Type): void
public "setFreezeBroadcast"(arg0: boolean): void
public "getPlayer"(): $Player
public "getMenu"(): $EnchantmentMenu
public "storeItemIsEnchantable"(arg0: boolean, arg1: $ItemStack$Type): boolean
set "currentItem"(value: $ItemStack$Type)
get "state"(): $EnchantmentState
set "state"(value: $EnchantmentState$Type)
set "player"(value: $Player$Type)
get "freezeBroadcast"(): boolean
get "currentItem"(): $ItemStack
set "freezeBroadcast"(value: boolean)
get "player"(): $Player
get "menu"(): $EnchantmentMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuProcess$Type = ($EnchantmentMenuProcess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuProcess_ = $EnchantmentMenuProcess$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier {

constructor(probability: float, attribute: $Attribute$Type, operation: $AttributeModifier$Operation$Type, amount: $NumberProvider$Type, name: string, slots: $Function$Type<($ItemStack$Type), (($EquipmentSlot$Type)[])>, uuid: $UUID$Type)

public "createAttributeModifier"(context: $LootContext$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Type = ($AddAttributesFunction$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder" {
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AddAttributesFunction$Modifier$Builder, $AddAttributesFunction$Modifier$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder"
import {$AddAttributesFunction, $AddAttributesFunction$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {

constructor()

public "build"(): $AddAttributesFunction
public "add"(attribute: $Attribute$Type, amount: $NumberProvider$Type, action: $Consumer$Type<($AddAttributesFunction$Modifier$Builder$Type)>): $AddAttributesFunction$Builder
public "add"(modifier: $AddAttributesFunction$Modifier$Type): $AddAttributesFunction$Builder
public "simple"(attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "simple"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type): $AddAttributesFunction$Builder
public "forSlots"(attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(probability: float, attribute: $Attribute$Type, amount: $NumberProvider$Type, slots: ($EquipmentSlot$Type)[]): $AddAttributesFunction$Builder
public "preserveDefaults"(flag: boolean): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$Type = ($AddAttributesFunction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantedItemTrade extends $TransformableTrade<($EnchantedItemTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $Item$Type)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "amount"(arg0: integer): $EnchantedItemTrade
public "amount"(arg0: integer, arg1: integer): $EnchantedItemTrade
public "enchantments"(...arg0: ($Enchantment$Type)[]): $EnchantedItemTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrade$Type = ($EnchantedItemTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedItemTrade_ = $EnchantedItemTrade$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootActionsContainer" {
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootActionsContainer<A extends $LootActionsContainer<(any)>> {

 "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): A
 "triggerLightningStrike"(shouldDamage: boolean): A
 "dropExperience"(amount: integer): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): A
 "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): A
 "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): A
 "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): A
 "addSequenceLoot"(...entries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): A
 "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): A
 "removeLoot"(filter: $ItemFilter$Type): A
 "addLoot"(...entries: ($LootEntry$Type)[]): A
 "addAction"(arg0: $ILootAction$Type): A
 "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): A

(...entries: ($LootEntry$Type)[]): A
}

export namespace $LootActionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsContainer$Type<A> = ($LootActionsContainer<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsContainer_<A> = $LootActionsContainer$Type<(A)>;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootHandler" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootHandler$Type = ($ILootHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootHandler_ = $ILootHandler$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$LootContextJS, $LootContextJS$Type} from "packages/com/almostreliable/lootjs/kube/$LootContextJS"
import {$GroupedLootBuilder, $GroupedLootBuilder$Type} from "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LootActionsBuilderJS implements $LootConditionsContainer<($LootActionsBuilderJS)>, $LootFunctionsContainer<($LootActionsBuilderJS)>, $LootActionsContainer<($LootActionsBuilderJS)> {
static readonly "DEPRECATED_MSG": string

constructor()

public "getLogName"(alternative: string): string
public "playerAction"(action: $Consumer$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "group"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "apply"(action: $Consumer$Type<($LootContextJS$Type)>): $LootActionsBuilderJS
public "pool"(callback: $Consumer$Type<($GroupedLootBuilder$Type)>): $LootActionsBuilderJS
public "logName"(logName: string): $LootActionsBuilderJS
public "addAction"(action: $ILootAction$Type): $LootActionsBuilderJS
public "timeCheck"(period: long, min: integer, max: integer): $LootActionsBuilderJS
public "timeCheck"(min: integer, max: integer): $LootActionsBuilderJS
public "randomChanceWithLooting"(value: float, looting: float): $LootActionsBuilderJS
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $LootActionsBuilderJS
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $LootActionsBuilderJS
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "killedByPlayer"(): $LootActionsBuilderJS
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $LootActionsBuilderJS
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $LootActionsBuilderJS
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $LootActionsBuilderJS
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $LootActionsBuilderJS
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $List<($ILootCondition)>
public "hasAnyStage"(...stages: (string)[]): $LootActionsBuilderJS
public "customCondition"(json: $JsonObject$Type): $LootActionsBuilderJS
public "matchMainHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchOffHand"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $LootActionsBuilderJS
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $LootActionsBuilderJS
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $LootActionsBuilderJS
public "anyStructure"(idOrTags: (string)[], exact: boolean): $LootActionsBuilderJS
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $LootActionsBuilderJS
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "randomChance"(value: float): $LootActionsBuilderJS
public "lightLevel"(min: integer, max: integer): $LootActionsBuilderJS
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $LootActionsBuilderJS
public "survivesExplosion"(): $LootActionsBuilderJS
public "biome"(...resolvers: ($Resolver$Type)[]): $LootActionsBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $LootActionsBuilderJS
public "addCondition"(builder: $LootItemCondition$Builder$Type): $LootActionsBuilderJS
public "enchantRandomly"(): $LootActionsBuilderJS
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootActionsBuilderJS
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootActionsBuilderJS
public "addNBT"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "smeltLoot"(): $LootActionsBuilderJS
public "customFunction"(json: $JsonObject$Type): $LootActionsBuilderJS
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootActionsBuilderJS
public "limitCount"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "addPotion"(potion: $Potion$Type): $LootActionsBuilderJS
public "replaceLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "setName"(component: $Component$Type): $LootActionsBuilderJS
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootActionsBuilderJS$Type)>)>): $LootActionsBuilderJS
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootActionsBuilderJS
public "damage"(numberProvider: $NumberProvider$Type): $LootActionsBuilderJS
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootActionsBuilderJS
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootActionsBuilderJS
public "simulateExplosionDecay"(): $LootActionsBuilderJS
public "addNbt"(tag: $CompoundTag$Type): $LootActionsBuilderJS
public "addLore"(...components: ($Component$Type)[]): $LootActionsBuilderJS
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "triggerLightningStrike"(shouldDamage: boolean): $LootActionsBuilderJS
public "dropExperience"(amount: integer): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $LootActionsBuilderJS
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "removeLoot"(filter: $ItemFilter$Type): $LootActionsBuilderJS
public "addLoot"(...entries: ($LootEntry$Type)[]): $LootActionsBuilderJS
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $LootActionsBuilderJS
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionsBuilderJS$Type = ($LootActionsBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionsBuilderJS_ = $LootActionsBuilderJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureAfterPlaceEventJS" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$PiecesContainer, $PiecesContainer$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StructureAfterPlaceEventJS extends $LevelEventJS {

constructor(arg0: $Structure$Type, arg1: $WorldGenLevel$Type, arg2: $StructureManager$Type, arg3: $ChunkGenerator$Type, arg4: $RandomSource$Type, arg5: $BoundingBox$Type, arg6: $ChunkPos$Type, arg7: $PiecesContainer$Type)

public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "getStructure"(): $Structure
public "getStructureManager"(): $StructureManager
public "getChunkPos"(): $ChunkPos
public "getChunkBoundingBox"(): $BoundingBox
public "getStructureBoundingBox"(): $BoundingBox
public "getIntersectionPieces"(): $Collection<($StructurePiece)>
public "getIntersectionBoxes"(): $Collection<($BoundingBox)>
public "getRandomSource"(): $RandomSource
public "getWorldGenLevel"(): $WorldGenLevel
public "getGenStep"(): string
public "getIntersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
public "getPiecesContainer"(): $PiecesContainer
public "getPieceType"(arg0: $StructurePieceType$Type): $ResourceLocation
public "getChunkGenerator"(): $ChunkGenerator
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "structure"(): $Structure
get "structureManager"(): $StructureManager
get "chunkPos"(): $ChunkPos
get "chunkBoundingBox"(): $BoundingBox
get "structureBoundingBox"(): $BoundingBox
get "intersectionPieces"(): $Collection<($StructurePiece)>
get "intersectionBoxes"(): $Collection<($BoundingBox)>
get "randomSource"(): $RandomSource
get "worldGenLevel"(): $WorldGenLevel
get "genStep"(): string
get "intersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
get "piecesContainer"(): $PiecesContainer
get "chunkGenerator"(): $ChunkGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAfterPlaceEventJS$Type = ($StructureAfterPlaceEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAfterPlaceEventJS_ = $StructureAfterPlaceEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureBlockInfoModification" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StructureBlockInfoModification {

 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "getPosition"(): $BlockPos
 "getBlock"(): $Block
 "getNbt"(): $CompoundTag
 "setBlock"(arg0: $ResourceLocation$Type): void
 "setBlock"(arg0: $ResourceLocation$Type, arg1: $Map$Type<(string), (any)>): void
 "setVanillaBlockState"(arg0: $BlockState$Type): void
 "setNbt"(arg0: $CompoundTag$Type): void
 "hasNbt"(): boolean
}

export namespace $StructureBlockInfoModification {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoModification$Type = ($StructureBlockInfoModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoModification_ = $StructureBlockInfoModification$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ItemFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemFilter extends $Predicate<($ItemStack)> {

 "test"(arg0: $ItemStack$Type): boolean
 "or"(other: $ItemFilter$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(filter: $ResourceLocationFilter$Type): $ItemFilter
}

export namespace $ItemFilter {
const ALWAYS_FALSE: $ItemFilter
const ALWAYS_TRUE: $ItemFilter
const SWORD: $ItemFilter
const PICKAXE: $ItemFilter
const AXE: $ItemFilter
const SHOVEL: $ItemFilter
const HOE: $ItemFilter
const TOOL: $ItemFilter
const POTION: $ItemFilter
const HAS_TIER: $ItemFilter
const PROJECTILE_WEAPON: $ItemFilter
const ARMOR: $ItemFilter
const WEAPON: $ItemFilter
const HEAD_ARMOR: $ItemFilter
const CHEST_ARMOR: $ItemFilter
const LEGS_ARMOR: $ItemFilter
const FEET_ARMOR: $ItemFilter
const FOOD: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTABLE: $ItemFilter
const ENCHANTED: $ItemFilter
const BLOCK: $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$StartTradingEventJS" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Merchant, $Merchant$Type} from "packages/net/minecraft/world/item/trading/$Merchant"
import {$OfferExtension, $OfferExtension$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferExtension"

export class $StartTradingEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: $Merchant$Type)

public "forEachOffers"(arg0: $BiConsumer$Type<($OfferExtension$Type), (integer)>): void
public "getMerchant"(): $Merchant
get "merchant"(): $Merchant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartTradingEventJS$Type = ($StartTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartTradingEventJS_ = $StartTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferExtension" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $OfferExtension {

 "isDisabled"(): boolean
 "setOutput"(arg0: $ItemStack$Type): void
 "setDemand"(arg0: integer): void
 "setDisabled"(arg0: boolean): void
 "getOutput"(): $ItemStack
 "setMaxUses"(arg0: integer): void
 "setVillagerExperience"(arg0: integer): void
 "setSecondInput"(arg0: $ItemStack$Type): void
 "isRewardingExp"(): boolean
 "getSecondInput"(): $ItemStack
 "getFirstInput"(): $ItemStack
 "setFirstInput"(arg0: $ItemStack$Type): void
 "setPriceMultiplier"(arg0: float): void
 "setRewardExp"(arg0: boolean): void
 "replaceEmeralds"(arg0: $Item$Type): void
 "replaceItems"(arg0: $Ingredient$Type, arg1: $ItemStack$Type): void
}

export namespace $OfferExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferExtension$Type = ($OfferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferExtension_ = $OfferExtension$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList$Builder" {
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"

export class $WeightedList$Builder<T> {

constructor()

public "build"(): $WeightedList<(T)>
public "add"(arg0: integer, arg1: T): $WeightedList$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Builder$Type<T> = ($WeightedList$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList$Builder_<T> = $WeightedList$Builder$Type<(T)>;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LootConditionsContainer<B extends $LootConditionsContainer<(any)>> {

 "timeCheck"(period: long, min: integer, max: integer): B
 "timeCheck"(min: integer, max: integer): B
 "randomChanceWithLooting"(value: float, looting: float): B
 "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): B
 "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): B
 "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "killedByPlayer"(): B
 "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): B
 "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): B
 "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): B
 "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): B
 "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): B
 "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): $List<($ILootCondition)>
 "hasAnyStage"(...stages: (string)[]): B
 "customCondition"(json: $JsonObject$Type): B
 "matchMainHand"(filter: $ItemFilter$Type): B
 "matchOffHand"(filter: $ItemFilter$Type): B
 "matchLoot"(filter: $ItemFilter$Type, exact: boolean): B
 "matchLoot"(filter: $ItemFilter$Type): B
 "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): B
 "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): B
 "weatherCheck"(map: $Map$Type<(string), (boolean)>): B
 "anyStructure"(idOrTags: (string)[], exact: boolean): B
 "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): B
 "anyBiome"(...resolvers: ($Resolver$Type)[]): B
 "or"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "and"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "not"(action: $Consumer$Type<($LootConditionsContainer$Type<(B)>)>): B
 "randomChance"(value: float): B
 "lightLevel"(min: integer, max: integer): B
 "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): B
 "survivesExplosion"(): B
 "biome"(...resolvers: ($Resolver$Type)[]): B
 "matchFluid"(resolver: $Resolver$Type): B
 "addCondition"(builder: $LootItemCondition$Builder$Type): B
 "addCondition"(arg0: $ILootCondition$Type): B

(period: long, min: integer, max: integer): B
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$Type<B> = ($LootConditionsContainer<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionsContainer_<B> = $LootConditionsContainer$Type<(B)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferModification" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OfferModification {

constructor(arg0: $MerchantOffer$Type)

public "getOutput"(): $ItemStack
public "getDemand"(): integer
public "setMaxUses"(arg0: integer): void
public "setPriceMultiplier"(arg0: float): void
public "setOutput"(arg0: $ItemStack$Type): void
public "getVillagerExperience"(): integer
public "setVillagerExperience"(arg0: integer): void
public "getMerchantOffer"(): $MerchantOffer
public "setFirstInput"(arg0: $ItemStack$Type): void
public "getSecondInput"(): $ItemStack
public "setSecondInput"(arg0: $ItemStack$Type): void
public "getFirstInput"(): $ItemStack
public "setDemand"(arg0: integer): void
public "getMaxUses"(): integer
public "isRewardingExp"(): boolean
public "getPriceMultiplier"(): float
public "setRewardExp"(arg0: boolean): void
get "output"(): $ItemStack
get "demand"(): integer
set "maxUses"(value: integer)
set "priceMultiplier"(value: float)
set "output"(value: $ItemStack$Type)
get "villagerExperience"(): integer
set "villagerExperience"(value: integer)
get "merchantOffer"(): $MerchantOffer
set "firstInput"(value: $ItemStack$Type)
get "secondInput"(): $ItemStack
set "secondInput"(value: $ItemStack$Type)
get "firstInput"(): $ItemStack
set "demand"(value: integer)
get "maxUses"(): integer
get "rewardingExp"(): boolean
get "priceMultiplier"(): float
set "rewardExp"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferModification$Type = ($OfferModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferModification_ = $OfferModification$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootAction extends $ILootHandler {

 "applyLootHandler"(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean

(arg0: $LootContext$Type, arg1: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootAction$Type = ($ILootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootAction_ = $ILootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootContextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LootContextType extends $Enum<($LootContextType)> {
static readonly "UNKNOWN": $LootContextType
static readonly "BLOCK": $LootContextType
static readonly "ENTITY": $LootContextType
static readonly "CHEST": $LootContextType
static readonly "FISHING": $LootContextType
static readonly "GIFT": $LootContextType
static readonly "PIGLIN_BARTER": $LootContextType
static readonly "ADVANCEMENT_ENTITY": $LootContextType
static readonly "ADVANCEMENT_REWARD": $LootContextType


public static "values"(): ($LootContextType)[]
public static "valueOf"(name: string): $LootContextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextType$Type = (("gift") | ("chest") | ("piglin_barter") | ("advancement_entity") | ("advancement_reward") | ("fishing") | ("block") | ("entity") | ("unknown")) | ($LootContextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextType_ = $LootContextType$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$LootEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$LootEntry$Generator, $LootEntry$Generator$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry$Generator"

export class $LootEntry implements $LootFunctionsContainer<($LootEntry)> {

constructor(item: $Item$Type)
constructor(itemStack: $ItemStack$Type)
constructor(generator: $LootEntry$Generator$Type)

public "createItem"(context: $LootContext$Type): $ItemStack
public "hasWeight"(): boolean
public "withWeight"(weight: integer): $LootEntry
public "matchesConditions"(context: $LootContext$Type): boolean
public "when"(action: $Consumer$Type<($LootConditionsContainer$Type<(any)>)>): $LootEntry
public "getWeight"(): integer
public "withChance"(chance: integer): $LootEntry
public "enchantRandomly"(): $LootEntry
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $LootEntry
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $LootEntry
public "applyOreBonus"(enchantment: $Enchantment$Type): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $LootEntry
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $LootEntry
public "addNBT"(tag: $CompoundTag$Type): $LootEntry
public "smeltLoot"(): $LootEntry
public "customFunction"(json: $JsonObject$Type): $LootEntry
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $LootEntry
public "limitCount"(numberProvider: $NumberProvider$Type): $LootEntry
public "addPotion"(potion: $Potion$Type): $LootEntry
public "replaceLore"(...components: ($Component$Type)[]): $LootEntry
public "setName"(component: $Component$Type): $LootEntry
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($LootEntry$Type)>)>): $LootEntry
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $LootEntry
public "damage"(numberProvider: $NumberProvider$Type): $LootEntry
public "addFunction"(builder: $LootItemFunction$Builder$Type): $LootEntry
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $LootEntry
public "simulateExplosionDecay"(): $LootEntry
public "addNbt"(tag: $CompoundTag$Type): $LootEntry
public "addLore"(...components: ($Component$Type)[]): $LootEntry
get "weight"(): integer
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$Type = ($LootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry_ = $LootEntry$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TradeItem {
static readonly "EMPTY": $TradeItem

constructor(arg0: $ItemStack$Type, arg1: $IntRange$Type)

public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $CompoundTag$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $CompoundTag$Type): $TradeItem
public "createItemStack"(arg0: $RandomSource$Type): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeItem$Type = ($TradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeItem_ = $TradeItem$Type;
}}
declare module "packages/com/almostreliable/lootjs/filters/$Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Resolver {


public static "of"(value: string): $Resolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resolver$Type = ($Resolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resolver_ = $Resolver$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$TeleportType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TeleportType extends $Enum<($TeleportType)> {
static readonly "CHORUS_FRUIT": $TeleportType
static readonly "ENDER_PEARL": $TeleportType


public static "values"(): ($TeleportType)[]
public static "valueOf"(arg0: string): $TeleportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportType$Type = (("ender_pearl") | ("chorus_fruit")) | ($TeleportType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportType_ = $TeleportType$Type;
}}
declare module "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootItemConditionMixin extends $ILootCondition {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $LootItemConditionMixin {
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemConditionMixin$Type = ($LootItemConditionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootItemConditionMixin_ = $LootItemConditionMixin$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$VillagerUtils" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreasureMapTrade, $TreasureMapTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade"
import {$EnchantedItemTrade, $EnchantedItemTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$CustomTrade, $CustomTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StewTrade, $StewTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$PotionTrade, $PotionTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerUtils {
static readonly "CACHED_PROFESSION_TRADES": $Map<($VillagerProfession), ($List<($VillagerTrades$ItemListing)>)>
static readonly "VANILLA_TRADE_TYPES": $Set<($Class<(any)>)>

constructor()

public static "getProfession"(arg0: $ResourceLocation$Type): $VillagerProfession
public static "isModdedTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "isMoreJSTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "isVanillaTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "getProfessions"(): $Collection<($VillagerProfession)>
public static "getAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "createPotionTrade"(arg0: ($TradeItem$Type)[]): $PotionTrade
public static "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public static "createSimpleTrade"(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type): $SimpleTrade
public static "setAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer, arg2: $List$Type<($VillagerTrades$ItemListing$Type)>): void
public static "createStewTrade"(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer): $StewTrade
public static "createCustomTrade"(arg0: $TransformableTrade$Transformer$Type): $CustomTrade
public static "getRandomWandererTrade"(arg0: integer): $VillagerTrades$ItemListing
public static "createStructureMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "createBiomeMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type, arg1: integer): $VillagerTrades$ItemListing
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type): $VillagerTrades$ItemListing
public static "createCustomMapTrade"(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type): $TreasureMapTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$Type)[], arg1: $Item$Type): $EnchantedItemTrade
public static "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public static "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
get "professions"(): $Collection<($VillagerProfession)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerUtils$Type = ($VillagerUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerUtils_ = $VillagerUtils$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EntityPredicate, $EntityPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityPredicate"
import {$ExtendedEntityFlagsPredicate$IBuilder, $ExtendedEntityFlagsPredicate$IBuilder$Type} from "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityPredicateBuilderJS implements $ExtendedEntityFlagsPredicate$IBuilder<($EntityPredicate)> {

constructor()

public "isOnGround"(flag: boolean): $EntityPredicateBuilderJS
public "isInWater"(flag: boolean): $EntityPredicateBuilderJS
public "matchSlot"(slot: $EquipmentSlot$Type, itemFilter: $ItemFilter$Type): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type, amplifier: integer): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$Type): $EntityPredicateBuilderJS
public "isSprinting"(flag: boolean): $EntityPredicateBuilderJS
public "nbt"(nbt: $CompoundTag$Type): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$Type, propertyMap: $Map$Type<(string), (string)>): $EntityPredicateBuilderJS
public "matchFluid"(resolver: $Resolver$Type): $EntityPredicateBuilderJS
public "isOnFire"(flag: boolean): $EntityPredicateBuilderJS
public "isUndeadMob"(flag: boolean): $EntityPredicateBuilderJS
public "isWaterMob"(flag: boolean): $EntityPredicateBuilderJS
public "matchMount"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
public "anyType"(...resolvers: ($Resolver$Type)[]): $EntityPredicateBuilderJS
public "matchTargetedEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $EntityPredicateBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicateBuilderJS$Type = ($EntityPredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPredicateBuilderJS_ = $EntityPredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnchantmentState extends $Enum<($EnchantmentState)> {
static readonly "IDLE": $EnchantmentState
static readonly "STORE_ENCHANTMENTS": $EnchantmentState
static readonly "USE_STORED_ENCHANTMENTS": $EnchantmentState


public static "values"(): ($EnchantmentState)[]
public static "valueOf"(arg0: string): $EnchantmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentState$Type = (("idle") | ("use_stored_enchantments") | ("store_enchantments")) | ($EnchantmentState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentState_ = $EnchantmentState$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$GroupedLootBuilder" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GroupedLootAction, $GroupedLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction"
import {$LootConditionsContainer, $LootConditionsContainer$Type} from "packages/com/almostreliable/lootjs/kube/$LootConditionsContainer"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Resolver, $Resolver$Type} from "packages/com/almostreliable/lootjs/filters/$Resolver"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootActionsContainer, $LootActionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootActionsContainer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$Type} from "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$DamageSourcePredicateBuilderJS, $DamageSourcePredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LootFunctionsContainer, $LootFunctionsContainer$Type} from "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer"
import {$ILootCondition, $ILootCondition$Type} from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$DistancePredicateBuilder, $DistancePredicateBuilder$Type} from "packages/com/almostreliable/lootjs/loot/condition/builder/$DistancePredicateBuilder"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$Type} from "packages/net/minecraft/world/level/$Explosion$BlockInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GroupedLootBuilder implements $LootConditionsContainer<($GroupedLootBuilder)>, $LootFunctionsContainer<($GroupedLootBuilder)>, $LootActionsContainer<($GroupedLootBuilder)> {

constructor()

public "rolls"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "build"(): $GroupedLootAction
public "addCondition"(condition: $ILootCondition$Type): $GroupedLootBuilder
public "timeCheck"(period: long, min: integer, max: integer): $GroupedLootBuilder
public "timeCheck"(min: integer, max: integer): $GroupedLootBuilder
public "randomChanceWithLooting"(value: float, looting: float): $GroupedLootBuilder
public "customDistanceToPlayer"(action: $Consumer$Type<($DistancePredicateBuilder$Type)>): $GroupedLootBuilder
public "randomChanceWithEnchantment"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "directKillerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "blockEntityPredicate"(predicate: $Predicate$Type<($BlockEntity$Type)>): $GroupedLootBuilder
public "entityPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "killedByPlayer"(): $GroupedLootBuilder
public "matchKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchDirectKiller"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchPlayer"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $GroupedLootBuilder
public "matchDamageSource"(action: $Consumer$Type<($DamageSourcePredicateBuilderJS$Type)>): $GroupedLootBuilder
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$Type): $GroupedLootBuilder
public "matchBlockState"(block: $Block$Type, propertyMap: $Map$Type<(string), (string)>): $GroupedLootBuilder
public "killerPredicate"(predicate: $Predicate$Type<($Entity$Type)>): $GroupedLootBuilder
public "createConditions"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $List<($ILootCondition)>
public "hasAnyStage"(...stages: (string)[]): $GroupedLootBuilder
public "customCondition"(json: $JsonObject$Type): $GroupedLootBuilder
public "matchMainHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchOffHand"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type, exact: boolean): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "matchEquip"(slot: $EquipmentSlot$Type, filter: $ItemFilter$Type): $GroupedLootBuilder
public "randomTableBonus"(enchantment: $Enchantment$Type, chances: (float)[]): $GroupedLootBuilder
public "weatherCheck"(map: $Map$Type<(string), (boolean)>): $GroupedLootBuilder
public "anyStructure"(idOrTags: (string)[], exact: boolean): $GroupedLootBuilder
public "anyDimension"(...dimensions: ($ResourceLocation$Type)[]): $GroupedLootBuilder
public "anyBiome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "or"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "and"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "not"(action: $Consumer$Type<($LootConditionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "randomChance"(value: float): $GroupedLootBuilder
public "lightLevel"(min: integer, max: integer): $GroupedLootBuilder
public "playerPredicate"(predicate: $Predicate$Type<($ServerPlayer$Type)>): $GroupedLootBuilder
public "survivesExplosion"(): $GroupedLootBuilder
public "biome"(...resolvers: ($Resolver$Type)[]): $GroupedLootBuilder
public "matchFluid"(resolver: $Resolver$Type): $GroupedLootBuilder
public "addCondition"(builder: $LootItemCondition$Builder$Type): $GroupedLootBuilder
public "enchantRandomly"(): $GroupedLootBuilder
public "enchantRandomly"(enchantments: ($Enchantment$Type)[]): $GroupedLootBuilder
public "applyLootingBonus"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "applyOreBonus"(enchantment: $Enchantment$Type): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): $GroupedLootBuilder
public "addNBT"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "smeltLoot"(): $GroupedLootBuilder
public "customFunction"(json: $JsonObject$Type): $GroupedLootBuilder
public "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): $GroupedLootBuilder
public "limitCount"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "addPotion"(potion: $Potion$Type): $GroupedLootBuilder
public "replaceLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "setName"(component: $Component$Type): $GroupedLootBuilder
public "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<($GroupedLootBuilder$Type)>)>): $GroupedLootBuilder
public "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): $GroupedLootBuilder
public "damage"(numberProvider: $NumberProvider$Type): $GroupedLootBuilder
public "addFunction"(builder: $LootItemFunction$Builder$Type): $GroupedLootBuilder
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): $GroupedLootBuilder
public "simulateExplosionDecay"(): $GroupedLootBuilder
public "addNbt"(tag: $CompoundTag$Type): $GroupedLootBuilder
public "addLore"(...components: ($Component$Type)[]): $GroupedLootBuilder
public "addAlternativesLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "triggerLightningStrike"(shouldDamage: boolean): $GroupedLootBuilder
public "dropExperience"(amount: integer): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type, preserveCount: boolean): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$Type, lootEntry: $LootEntry$Type): $GroupedLootBuilder
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $GroupedLootBuilder
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$Type, fire: boolean): $GroupedLootBuilder
public "addSequenceLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, allowDuplicateLoot: boolean, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$Type, poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "addWeightedLoot"(poolEntries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "removeLoot"(filter: $ItemFilter$Type): $GroupedLootBuilder
public "addLoot"(...entries: ($LootEntry$Type)[]): $GroupedLootBuilder
public "modifyLoot"(filter: $ItemFilter$Type, callback: $ModifyLootAction$Callback$Type): $GroupedLootBuilder
set "name"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootBuilder$Type = ($GroupedLootBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootBuilder_ = $GroupedLootBuilder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SimpleTrade extends $TransformableTrade<($SimpleTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrade$Type = ($SimpleTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrade_ = $SimpleTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export interface $VillagerTradingEventJS$ForEachCallback {

 "accept"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void

(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void
}

export namespace $VillagerTradingEventJS$ForEachCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$ForEachCallback$Type = ($VillagerTradingEventJS$ForEachCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS$ForEachCallback_ = $VillagerTradingEventJS$ForEachCallback$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$LootActionsBuilderJS, $LootActionsBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$LootActionsBuilderJS"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"

export class $LootModificationEventJS extends $EventJS {

constructor()

public "disableWitherStarDrop"(): void
public "addLootTypeModifier"(...types: ($LootContextType$Type)[]): $LootActionsBuilderJS
public "addEntityLootModifier"(...entities: ($EntityType$Type<(any)>)[]): $LootActionsBuilderJS
public "addLootTableModifier"(...filters: ($ResourceLocationFilter$Type)[]): $LootActionsBuilderJS
public "disableCreeperHeadDrop"(): void
public "disableLootModification"(...filters: ($ResourceLocationFilter$Type)[]): void
public "disableZombieHeadDrop"(): void
public "addBlockLootModifier"(o: any): $LootActionsBuilderJS
public "disableSkeletonHeadDrop"(): void
public "enableLogging"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEventJS$Type = ($LootModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableServerEventJS$Data {


public "hasEnchantment"(arg0: $ResourceLocation$Type): boolean
public "hasEnchantment"(arg0: $ResourceLocation$Type, arg1: $IntRange$Type): boolean
public "clearEnchantments"(): void
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getRequiredLevel"(): integer
public "forEachEnchantments"(arg0: $BiConsumer$Type<($Enchantment$Type), (integer)>): void
public "getEnchantmentCount"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
get "requiredLevel"(): integer
get "enchantmentCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Data$Type = ($EnchantmentTableServerEventJS$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS$Data_ = $EnchantmentTableServerEventJS$Data$Type;
}}
declare module "packages/com/almostreliable/lootjs/predicate/$ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedEntityFlagsPredicate$IBuilder<T> {

 "isOnGround"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isInWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "build"(): T
 "isMonster"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCrouching"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSprinting"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUnderWater"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isSwimming"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isBaby"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isOnFire"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isCreature"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isArthropodMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isUndeadMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isWaterMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
 "isIllegarMob"(arg0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<(T)>
}

export namespace $ExtendedEntityFlagsPredicate$IBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedEntityFlagsPredicate$IBuilder$Type<T> = ($ExtendedEntityFlagsPredicate$IBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedEntityFlagsPredicate$IBuilder_<T> = $ExtendedEntityFlagsPredicate$IBuilder$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentTableServerEventJS$Data, $EnchantmentTableServerEventJS$Data$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $EnchantmentMenuProcess$Type)

public "get"(arg0: integer): $EnchantmentTableServerEventJS$Data
public "getSize"(): integer
public "getPosition"(): $BlockPos
public "itemWasChanged"(): boolean
public "setItem"(arg0: $ItemStack$Type): void
get "size"(): integer
get "position"(): $BlockPos
set "item"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Type = ($EnchantmentTableServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS_ = $EnchantmentTableServerEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/core/$ILootCondition" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ILootCondition extends $ILootHandler, $Predicate<($LootContext)> {

 "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
 "test"(arg0: $LootContext$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
 "negate"(): $Predicate<($LootContext)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>

(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}

export namespace $ILootCondition {
function isEqual<T>(arg0: any): $Predicate<($LootContext)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootCondition$Type = ($ILootCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootCondition_ = $ILootCondition$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionTrade extends $TransformableTrade<($PotionTrade)> {

constructor(arg0: ($TradeItem$Type)[])

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "onlyBrewablePotion"(): $PotionTrade
public "noBrewablePotion"(): $PotionTrade
public "item"(arg0: $Item$Type): $PotionTrade
public "potions"(...arg0: ($Potion$Type)[]): $PotionTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTrade$Type = ($PotionTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTrade_ = $PotionTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeTypes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TradeTypes extends $Enum<($TradeTypes)> {
static readonly "DyedArmorForEmeralds": $TradeTypes
static readonly "EnchantBookForEmeralds": $TradeTypes
static readonly "EnchantedItemForEmeralds": $TradeTypes
static readonly "ItemsForEmeralds": $TradeTypes
static readonly "ItemsAndEmeraldsToItems": $TradeTypes
static readonly "EmeraldForItems": $TradeTypes
static readonly "TippedArrowForItemsAndEmeralds": $TradeTypes
static readonly "SuspiciousStewForEmeralds": $TradeTypes
static readonly "TreasureMapForEmeralds": $TradeTypes
static readonly "EmeraldsForVillagerTypeItem": $TradeTypes
static readonly "ForgeBasic": $TradeTypes


public static "values"(): ($TradeTypes)[]
public static "valueOf"(arg0: string): $TradeTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTypes$Type = (("treasuremapforemeralds") | ("dyedarmorforemeralds") | ("enchanteditemforemeralds") | ("tippedarrowforitemsandemeralds") | ("emeraldsforvillagertypeitem") | ("forgebasic") | ("emeraldforitems") | ("itemsandemeraldstoitems") | ("suspiciousstewforemeralds") | ("itemsforemeralds") | ("enchantbookforemeralds")) | ($TradeTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeTypes_ = $TradeTypes$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $WeightedList<T> {


public "map"<T2>(arg0: $Function$Type<(T), (T2)>): $WeightedList<(T2)>
public "roll"(): T
public "roll"(arg0: $RandomSource$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Type<T> = ($WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList_<T> = $WeightedList$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $EntityInfoWrapper {

constructor(arg0: $List$Type<($StructureTemplate$StructureEntityInfo$Type)>, arg1: $Vec3i$Type)

public "add"(arg0: $CompoundTag$Type): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInfoWrapper$Type = ($EntityInfoWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInfoWrapper_ = $EntityInfoWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuExtension" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export interface $EnchantmentMenuExtension {

 "getMoreJSProcess"(): $EnchantmentMenuProcess
 "getMoreJsEnchantSlots"(): $Container
}

export namespace $EnchantmentMenuExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuExtension$Type = ($EnchantmentMenuExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuExtension_ = $EnchantmentMenuExtension$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<($PiglinPlayerBehaviorEventJS$PiglinBehavior)> {
static readonly "ATTACK": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "IGNORE": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "KEEP": $PiglinPlayerBehaviorEventJS$PiglinBehavior


public static "values"(): ($PiglinPlayerBehaviorEventJS$PiglinBehavior)[]
public static "valueOf"(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type = (("attack") | ("keep") | ("ignore")) | ($PiglinPlayerBehaviorEventJS$PiglinBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ILootAction, $ILootAction$Type} from "packages/com/almostreliable/lootjs/core/$ILootAction"

export class $CompositeLootAction implements $ILootAction {

constructor(handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootAction$Type = ($CompositeLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeLootAction_ = $CompositeLootAction$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$ExperiencePlayerEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $ExperiencePlayerEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: integer)

public "setTotalExperience"(arg0: integer): void
public "setExperienceLevel"(arg0: integer): void
public "willLevelUp"(): boolean
public "getTotalExperience"(): integer
public "getExperienceLevel"(): integer
public "getAmount"(): integer
public "getExperienceProgress"(): float
public "setExperienceProgress"(arg0: float): void
public "getRemainingExperience"(): integer
public "setAmount"(arg0: integer): void
public "getXpNeededForNextLevel"(): integer
set "totalExperience"(value: integer)
set "experienceLevel"(value: integer)
get "totalExperience"(): integer
get "experienceLevel"(): integer
get "amount"(): integer
get "experienceProgress"(): float
set "experienceProgress"(value: float)
get "remainingExperience"(): integer
set "amount"(value: integer)
get "xpNeededForNextLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePlayerEventJS$Type = ($ExperiencePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePlayerEventJS_ = $ExperiencePlayerEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateVillagerOffersEventJS" {
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$UpdateAbstractVillagerOffersEventJS, $UpdateAbstractVillagerOffersEventJS$Type} from "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateVillagerOffersEventJS extends $UpdateAbstractVillagerOffersEventJS {

constructor(arg0: $Villager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getProfession"(): $VillagerProfession
public "getVillagerData"(): $VillagerData
public "isProfession"(arg0: $VillagerProfession$Type): boolean
public "getVillagerLevel"(): integer
public "getEntity"(): $Villager
get "profession"(): $VillagerProfession
get "villagerData"(): $VillagerData
get "villagerLevel"(): integer
get "entity"(): $Villager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateVillagerOffersEventJS$Type = ($UpdateVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateVillagerOffersEventJS_ = $UpdateVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/forge/filters/$ForgeItemFilter" {
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocationFilter, $ResourceLocationFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ForgeItemFilter extends $ItemFilter {

 "test"(arg0: $ItemStack$Type): boolean
 "or"(other: $ItemFilter$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(other: $ItemFilter$Type): $ItemFilter
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>

(...actions: (string)[]): $ItemFilter
}

export namespace $ForgeItemFilter {
function canPerformAction(...actions: (string)[]): $ItemFilter
function canPerformAnyAction(...actions: (string)[]): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$Type, min: integer, max: integer): $ItemFilter
function or(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function and(...itemFilters: ($ItemFilter$Type)[]): $ItemFilter
function not(itemFilter: $ItemFilter$Type): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$Type): $ItemFilter
function custom(predicate: $Predicate$Type<($ItemStack$Type)>): $ItemFilter
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItemFilter$Type = ($ForgeItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItemFilter_ = $ForgeItemFilter$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$GroupedLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CompositeLootAction, $CompositeLootAction$Type} from "packages/com/almostreliable/lootjs/loot/action/$CompositeLootAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $GroupedLootAction extends $CompositeLootAction {

constructor(numberProvider: $NumberProvider$Type, handlers: $Collection$Type<($ILootHandler$Type)>)

public "applyLootHandler"(context: $LootContext$Type, loot: $List$Type<($ItemStack$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Type = ($GroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootEntryWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LootEntryWrapper {

constructor()

public static "of"(arg0: $ItemStack$Type, count: integer, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, nbt: $CompoundTag$Type): $LootEntry
public static "of"(arg0: $ItemStack$Type, count: integer): $LootEntry
public static "of"(o: any): $LootEntry
public static "ofJson"(json: $JsonObject$Type): $LootEntry
public static "withChance"(o: any, chance: integer): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryWrapper$Type = ($LootEntryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryWrapper_ = $LootEntryWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StewTrade extends $TransformableTrade<($StewTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StewTrade$Type = ($StewTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StewTrade_ = $StewTrade$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/builder/$DamageSourcePredicateBuilderJS" {
import {$EntityPredicateBuilderJS, $EntityPredicateBuilderJS$Type} from "packages/com/almostreliable/lootjs/kube/builder/$EntityPredicateBuilderJS"
import {$AllOfCondition$Builder, $AllOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnyOfCondition$Builder, $AnyOfCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $DamageSourcePredicateBuilderJS implements $LootItemCondition$Builder {

constructor()

public "is"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "isNot"(tag: $ResourceLocation$Type): $DamageSourcePredicateBuilderJS
public "matchSourceEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "matchDirectEntity"(action: $Consumer$Type<($EntityPredicateBuilderJS$Type)>): $DamageSourcePredicateBuilderJS
public "anyType"(...names: (string)[]): $DamageSourcePredicateBuilderJS
public "or"(arg0: $LootItemCondition$Builder$Type): $AnyOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
public "and"(arg0: $LootItemCondition$Builder$Type): $AllOfCondition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcePredicateBuilderJS$Type = ($DamageSourcePredicateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourcePredicateBuilderJS_ = $DamageSourcePredicateBuilderJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier$Builder" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {

constructor(attribute: $Attribute$Type, amount: $NumberProvider$Type)

public "setOperation"(operation: $AttributeModifier$Operation$Type): void
public "setSlots"(slots: ($EquipmentSlot$Type)[]): void
public "build"(): $AddAttributesFunction$Modifier
public "setName"(name: string): void
public "setUuid"(uuid: $UUID$Type): void
public "setProbability"(probability: float): void
set "operation"(value: $AttributeModifier$Operation$Type)
set "slots"(value: ($EquipmentSlot$Type)[])
set "name"(value: string)
set "uuid"(value: $UUID$Type)
set "probability"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$MapDecoration$Type, $MapDecoration$Type$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TreasureMapTrade extends $TransformableTrade<($TreasureMapTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type)

public static "forStructure"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "forBiome"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "noPreview"(): $TreasureMapTrade
public "scale"(arg0: byte): $TreasureMapTrade
public "displayName"(arg0: $Component$Type): $TreasureMapTrade
public "marker"(arg0: $MapDecoration$Type$Type): $TreasureMapTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureMapTrade$Type = ($TreasureMapTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureMapTrade_ = $TreasureMapTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$FilterEnchantedTradeEventJS" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"

export class $FilterEnchantedTradeEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $RandomSource$Type, arg2: $List$Type<($Enchantment$Type)>)

public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "getEnchantments"(): $List<($Enchantment)>
public "getRandom"(): $RandomSource
public "isWanderer"(): boolean
public "printEnchantments"(): void
public "isVillager"(): boolean
get "enchantments"(): $List<($Enchantment)>
get "random"(): $RandomSource
get "wanderer"(): boolean
get "villager"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterEnchantedTradeEventJS$Type = ($FilterEnchantedTradeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterEnchantedTradeEventJS_ = $FilterEnchantedTradeEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$EntityTeleportsEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TeleportType, $TeleportType$Type} from "packages/com/almostreliable/morejs/features/teleport/$TeleportType"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTeleportsEventJS extends $EntityEventJS {

constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $TeleportType$Type)
constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $Level$Type, arg5: $TeleportType$Type)

public "setZ"(arg0: double): void
public "getType"(): $TeleportType
public "getY"(): double
public "getEntity"(): $Entity
public "getZ"(): double
public "setX"(arg0: double): void
public "setY"(arg0: double): void
public "getX"(): double
set "z"(value: double)
get "type"(): $TeleportType
get "y"(): double
get "entity"(): $Entity
get "z"(): double
set "x"(value: double)
set "y"(value: double)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportsEventJS$Type = ($EntityTeleportsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTeleportsEventJS_ = $EntityTeleportsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS" {
import {$PiglinPlayerBehaviorEventJS$PiglinBehavior, $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type} from "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Piglin, $Piglin$Type} from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"

export class $PiglinPlayerBehaviorEventJS extends $PlayerEventJS {

constructor(arg0: $Piglin$Type, arg1: $Player$Type, arg2: $Optional$Type<($Player$Type)>)

public "ignoreHoldingCheck"(): void
public "getBehavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
public "getPiglin"(): $Piglin
public "setBehavior"(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type): void
public "isAggressiveAlready"(): boolean
public "getPreviousTargetPlayer"(): $Player
public "isIgnoreHoldingCheck"(): boolean
get "behavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
get "piglin"(): $Piglin
set "behavior"(value: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type)
get "aggressiveAlready"(): boolean
get "previousTargetPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$Type = ($PiglinPlayerBehaviorEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS_ = $PiglinPlayerBehaviorEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$LootFunctionsContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Builder"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export interface $LootFunctionsContainer<F extends $LootFunctionsContainer<(any)>> {

 "enchantRandomly"(): F
 "enchantRandomly"(enchantments: ($Enchantment$Type)[]): F
 "applyLootingBonus"(numberProvider: $NumberProvider$Type): F
 "applyOreBonus"(enchantment: $Enchantment$Type): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type, allowTreasure: boolean): F
 "enchantWithLevels"(numberProvider: $NumberProvider$Type): F
 "applyBonus"(enchantment: $Enchantment$Type, multiplier: integer): F
 "addNBT"(tag: $CompoundTag$Type): F
 "smeltLoot"(): F
 "customFunction"(json: $JsonObject$Type): F
 "limitCount"(numberProviderMin: $NumberProvider$Type, numberProviderMax: $NumberProvider$Type): F
 "limitCount"(numberProvider: $NumberProvider$Type): F
 "addPotion"(potion: $Potion$Type): F
 "replaceLore"(...components: ($Component$Type)[]): F
 "setName"(component: $Component$Type): F
 "functions"(filter: $ItemFilter$Type, action: $Consumer$Type<($LootFunctionsContainer$Type<(F)>)>): F
 "addAttributes"(action: $Consumer$Type<($AddAttributesFunction$Builder$Type)>): F
 "damage"(numberProvider: $NumberProvider$Type): F
 "addFunction"(builder: $LootItemFunction$Builder$Type): F
 "addFunction"(arg0: $LootItemFunction$Type): F
 "applyBinomialDistributionBonus"(enchantment: $Enchantment$Type, probability: float, n: integer): F
 "simulateExplosionDecay"(): F
 "addNbt"(tag: $CompoundTag$Type): F
 "addLore"(...components: ($Component$Type)[]): F

(): F
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$Type<F> = ($LootFunctionsContainer<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionsContainer_<F> = $LootFunctionsContainer$Type<(F)>;
}}
declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceLocationFilter extends $Predicate<($ResourceLocation)> {

 "test"(arg0: $ResourceLocation$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>

(arg0: $ResourceLocation$Type): boolean
}

export namespace $ResourceLocationFilter {
function isEqual<T>(arg0: any): $Predicate<($ResourceLocation)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationFilter$Type = ($ResourceLocationFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLocationFilter_ = $ResourceLocationFilter$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$OfferModification, $OfferModification$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferModification"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TransformableTrade$Transformer {

 "accept"(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void

(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void
}

export namespace $TransformableTrade$Transformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Transformer$Type = ($TransformableTrade$Transformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade$Transformer_ = $TransformableTrade$Transformer$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateAbstractVillagerOffersEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(): $List<($VillagerTrades$ItemListing)>
public "getUsedTrades"(): $List<($VillagerTrades$ItemListing)>
public "getVillagerData"(): $VillagerData
public "getAddedOffers"(): $Collection<($MerchantOffer)>
public "deleteAddedOffers"(): void
public "addRandomOffer"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>): $MerchantOffer
public "addRandomOffer"(): $MerchantOffer
public "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "isWanderer"(): boolean
public "isVillager"(): boolean
public "getOffers"(): $MerchantOffers
public static "invokeEvent"(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>): void
get "wandererTrades"(): $List<($VillagerTrades$ItemListing)>
get "usedTrades"(): $List<($VillagerTrades$ItemListing)>
get "villagerData"(): $VillagerData
get "addedOffers"(): $Collection<($MerchantOffer)>
get "wanderer"(): boolean
get "villager"(): boolean
get "offers"(): $MerchantOffers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateAbstractVillagerOffersEventJS$Type = ($UpdateAbstractVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateAbstractVillagerOffersEventJS_ = $UpdateAbstractVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/kube/wrapper/$IntervalJS" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export class $IntervalJS {

constructor()

public static "ofDoubles"(o: any): $MinMaxBounds$Doubles
public "toString"(): string
public "min"(min: double): $IntervalJS
public "max"(max: double): $IntervalJS
public "matches"(value: double): boolean
public "between"(min: double, max: double): $IntervalJS
public "matchesSqr"(value: double): boolean
public "getVanillaInt"(): $MinMaxBounds$Ints
public "getVanillaDoubles"(): $MinMaxBounds$Doubles
public static "ofInt"(o: any): $MinMaxBounds$Ints
get "vanillaInt"(): $MinMaxBounds$Ints
get "vanillaDoubles"(): $MinMaxBounds$Doubles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntervalJS$Type = ($IntervalJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntervalJS_ = $IntervalJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CustomTrade implements $VillagerTrades$ItemListing {

constructor(arg0: $TransformableTrade$Transformer$Type)

public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrade$Type = ($CustomTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrade_ = $CustomTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StructureTemplateAccess {

 "getBorderSize"(): $Vec3i
 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
}

export namespace $StructureTemplateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccess$Type = ($StructureTemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccess_ = $StructureTemplateAccess$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$IntRange" {
import {$IntPredicate, $IntPredicate$Type} from "packages/java/util/function/$IntPredicate"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $IntRange implements $IntPredicate {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "test"(arg0: integer): boolean
public static "all"(): $IntRange
public "getRandom"(arg0: $RandomSource$Type): integer
public "getMin"(): integer
public "getMax"(): integer
public "or"(arg0: $IntPredicate$Type): $IntPredicate
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$Type): $IntPredicate
get "min"(): integer
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntRange$Type = ($IntRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntRange_ = $IntRange$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider" {
import {$MapPosInfo, $MapPosInfo$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MapPosInfo$Provider {

 "apply"(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo

(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo
}

export namespace $MapPosInfo$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Provider$Type = ($MapPosInfo$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo$Provider_ = $MapPosInfo$Provider$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$VillagerTradingEventJS$ForEachCallback, $VillagerTradingEventJS$ForEachCallback$Type} from "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerTradingEventJS extends $EventJS {

constructor(arg0: $Map$Type<($VillagerProfession$Type), ($Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)>)

public "removeVanillaTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeVanillaTrades"(): void
public "getTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "removeTrades"(arg0: $TradeFilter$Type): void
public "addCustomTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: $TransformableTrade$Transformer$Type): void
public "forEachTrades"(arg0: $VillagerTradingEventJS$ForEachCallback$Type): void
public "forEachTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type, arg2: $Consumer$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>): void
public "removeModdedTrades"(): void
public "removeModdedTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "addTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: ($TradeItem$Type)[], arg3: $TradeItem$Type): $SimpleTrade
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: $VillagerProfession$Type, arg1: integer, arg2: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$Type = ($VillagerTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS_ = $VillagerTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T1, T2, T3> {

 "accept"(arg0: T1, arg1: T2, arg2: T3): void

(arg0: T1, arg1: T2, arg2: T3): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<T1, T2, T3> = ($TriConsumer<(T1), (T2), (T3)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T1, T2, T3> = $TriConsumer$Type<(T1), (T2), (T3)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {

constructor(arg0: ($TradeItem$Type)[])

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "transform"(arg0: $TransformableTrade$Transformer$Type): T
public "villagerExperience"(arg0: integer): T
public "priceMultiplier"(arg0: float): T
public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "maxUses"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Type<T> = ($TransformableTrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade_<T> = $TransformableTrade$Type<(T)>;
}}
declare module "packages/com/almostreliable/lootjs/kube/$LootContextJS" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LootEntry, $LootEntry$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/almostreliable/lootjs/filters/$ItemFilter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LootContextType, $LootContextType$Type} from "packages/com/almostreliable/lootjs/core/$LootContextType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LootContextJS {

constructor(context: $LootContext$Type)

public "getBlockPos"(): $BlockPos
public "getDamageSource"(): $DamageSource
public "getCustomData"(): $Map<(string), (any)>
public "getLoot"(): $List<($ItemStack)>
public "removeLoot"(itemFilter: $ItemFilter$Type): void
public "getType"(): $LootContextType
public "getPosition"(): $Vec3
public "getRandom"(): $RandomSource
public "getEntity"(): $Entity
public "addLoot"(lootEntry: $LootEntry$Type): void
public "getLuck"(): float
public "cancel"(): void
public "getServer"(): $MinecraftServer
public "getPlayer"(): $ServerPlayer
public "isCanceled"(): boolean
public "getLootTableId"(): $ResourceLocation
public "getTool"(): $ItemStack
public "getLevel"(): $ServerLevel
public "getExplosionRadius"(): float
public "getDestroyedBlock"(): $BlockContainerJS
public "getVanillaContext"(): $LootContext
public "lootSize"(): integer
public "findLoot"(itemFilter: $ItemFilter$Type): $List<($ItemStack)>
public "hasLoot"(ingredient: $ItemFilter$Type): boolean
public "getKillerEntity"(): $Entity
public "forEachLoot"(action: $Consumer$Type<($ItemStack$Type)>): void
public "getLooting"(): integer
public "isExploded"(): boolean
get "blockPos"(): $BlockPos
get "damageSource"(): $DamageSource
get "customData"(): $Map<(string), (any)>
get "loot"(): $List<($ItemStack)>
get "type"(): $LootContextType
get "position"(): $Vec3
get "random"(): $RandomSource
get "entity"(): $Entity
get "luck"(): float
get "server"(): $MinecraftServer
get "player"(): $ServerPlayer
get "canceled"(): boolean
get "lootTableId"(): $ResourceLocation
get "tool"(): $ItemStack
get "level"(): $ServerLevel
get "explosionRadius"(): float
get "destroyedBlock"(): $BlockContainerJS
get "vanillaContext"(): $LootContext
get "killerEntity"(): $Entity
get "looting"(): integer
get "exploded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextJS$Type = ($LootContextJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextJS_ = $LootContextJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootItemFunctionType, $LootItemFunctionType$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$Type} from "packages/com/almostreliable/lootjs/loot/$AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {

constructor(preserveDefaultModifier: boolean, modifiers: $List$Type<($AddAttributesFunction$Modifier$Type)>)

public "apply"(itemStack: $ItemStack$Type, context: $LootContext$Type): $ItemStack
public "getType"(): $LootItemFunctionType
public "preserveDefaultAttributes"(itemStack: $ItemStack$Type, slot: $EquipmentSlot$Type): void
public static "decorate"(arg0: $BiFunction$Type<($ItemStack$Type), ($LootContext$Type), ($ItemStack$Type)>, arg1: $Consumer$Type<($ItemStack$Type)>, arg2: $LootContext$Type): $Consumer<($ItemStack)>
public "validate"(arg0: $ValidationContext$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Type = ($AddAttributesFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableTooltipEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type, arg5: integer, arg6: $List$Type<(any)>)

public "getSlot"(): integer
public "getLines"(): $List<(any)>
public "getRequiredLevel"(): integer
public "getClue"(): $EnchantmentInstance
public "getClueId"(): $ResourceLocation
get "slot"(): integer
get "lines"(): $List<(any)>
get "requiredLevel"(): integer
get "clue"(): $EnchantmentInstance
get "clueId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableTooltipEventJS$Type = ($EnchantmentTableTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableTooltipEventJS_ = $EnchantmentTableTooltipEventJS$Type;
}}
declare module "packages/com/almostreliable/lootjs/loot/action/$ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ModifyLootAction$Callback {

 "modify"(arg0: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type): $ItemStack
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$Type = ($ModifyLootAction$Callback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $EnchantmentTableEventJS extends $LevelEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type)

public "getItem"(): $ItemStack
public "getPlayer"(): $Player
public "getSecondItem"(): $ItemStack
public "getLevel"(): $Level
get "item"(): $ItemStack
get "player"(): $Player
get "secondItem"(): $ItemStack
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableEventJS$Type = ($EnchantmentTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableEventJS_ = $EnchantmentTableEventJS$Type;
}}
