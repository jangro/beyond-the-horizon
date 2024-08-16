declare module "packages/de/mari_023/ae2wtlib/wut/$ItemWUT" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ItemWT, $ItemWT$Type} from "packages/de/mari_023/ae2wtlib/terminal/$ItemWT"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWUT extends $ItemWT implements $ICurioItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "open"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $MenuLocator$Type, arg3: boolean): boolean
public "countInstalledTerminals"(arg0: $ItemStack$Type): integer
public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "onUpgradesChanged"(arg0: $ItemStack$Type, arg1: $IUpgradeInventory$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWUT$Type = ($ItemWUT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWUT_ = $ItemWUT$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wut/recipe/$CombineSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Combine, $Combine$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Combine"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Serializer, $Serializer$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Serializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CombineSerializer extends $Serializer<($Combine)> {
static readonly "NAME": string

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $Combine
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $Combine$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $Combine
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineSerializer$Type = ($CombineSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineSerializer_ = $CombineSerializer$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wut/recipe/$Common" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $Common implements $CraftingRecipe {


public "getId"(): $ResourceLocation
public static "mergeTerminal"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: string): $ItemStack
public "getResultItem"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getType"(): $ResourceLocation
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getMod"(): string
get "id"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "schema"(): $RecipeSchema
set "group"(value: string)
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Common$Type = ($Common);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Common_ = $Common$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/terminal/$IUniversalWirelessTerminalItem" {
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IUniversalWirelessTerminalItem {

 "open"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $MenuLocator$Type, arg3: boolean): boolean
 "checkUniversalPreconditions"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
 "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
 "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
 "getMenuHost"(arg0: $Player$Type, arg1: $MenuLocator$Type, arg2: $ItemStack$Type): $ItemMenuHost
 "tryOpen"(arg0: $Player$Type, arg1: $MenuLocator$Type, arg2: $ItemStack$Type, arg3: boolean): boolean
 "m_6883_"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
}

export namespace $IUniversalWirelessTerminalItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUniversalWirelessTerminalItem$Type = ($IUniversalWirelessTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUniversalWirelessTerminalItem_ = $IUniversalWirelessTerminalItem$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wet/$ItemWET" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ItemWT, $ItemWT$Type} from "packages/de/mari_023/ae2wtlib/terminal/$ItemWT"

export class $ItemWET extends $ItemWT {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWET$Type = ($ItemWET);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWET_ = $ItemWET$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wut/recipe/$Upgrade" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UpgradeSerializer, $UpgradeSerializer$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$UpgradeSerializer"
import {$Common, $Common$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Common"

export class $Upgrade extends $Common {
static "serializer": $UpgradeSerializer

constructor(arg0: $Ingredient$Type, arg1: string, arg2: $ResourceLocation$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getTerminalName"(): string
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getTerminal"(): $Ingredient
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "terminalName"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "terminal"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$Type = ($Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade_ = $Upgrade$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wat/$ItemWAT" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ItemWT, $ItemWT$Type} from "packages/de/mari_023/ae2wtlib/terminal/$ItemWT"

export class $ItemWAT extends $ItemWT {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWAT$Type = ($ItemWAT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWAT_ = $ItemWAT$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/terminal/$ItemWT" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUniversalWirelessTerminalItem, $IUniversalWirelessTerminalItem$Type} from "packages/de/mari_023/ae2wtlib/terminal/$IUniversalWirelessTerminalItem"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AppEngInternalInventory, $AppEngInternalInventory$Type} from "packages/appeng/util/inv/$AppEngInternalInventory"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$WirelessTerminalItem, $WirelessTerminalItem$Type} from "packages/appeng/items/tools/powered/$WirelessTerminalItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemWT extends $WirelessTerminalItem implements $IUniversalWirelessTerminalItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "getBoolean"(arg0: $ItemStack$Type, arg1: string): boolean
public static "setBoolean"(arg0: $ItemStack$Type, arg1: boolean, arg2: string): void
public "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
/**
 * 
 * @deprecated
 */
public static "setSavedSlot"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: string): void
/**
 * 
 * @deprecated
 */
public static "getSavedSlot"(arg0: $ItemStack$Type, arg1: string): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getQEFrequency"(arg0: $ItemStack$Type, arg1: $AppEngInternalInventory$Type): long
public static "findQuantumBridge"(arg0: $Level$Type, arg1: long): $IActionHost
public static "getQuantumBridge"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $AppEngInternalInventory$Type, arg3: $IUpgradeInventory$Type): $IActionHost
public "open"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $MenuLocator$Type, arg3: boolean): boolean
public "checkUniversalPreconditions"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "getMenuHost"(arg0: $Player$Type, arg1: $MenuLocator$Type, arg2: $ItemStack$Type): $ItemMenuHost
public "tryOpen"(arg0: $Player$Type, arg1: $MenuLocator$Type, arg2: $ItemStack$Type, arg3: boolean): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWT$Type = ($ItemWT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWT_ = $ItemWT$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wut/recipe/$UpgradeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Serializer, $Serializer$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Serializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Upgrade, $Upgrade$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Upgrade"

export class $UpgradeSerializer extends $Serializer<($Upgrade)> {
static readonly "NAME": string

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $Upgrade
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $Upgrade$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $Upgrade
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSerializer$Type = ($UpgradeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSerializer_ = $UpgradeSerializer$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wut/recipe/$Combine" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CombineSerializer, $CombineSerializer$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$CombineSerializer"
import {$Common, $Common$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Common"

export class $Combine extends $Common {
static "serializer": $CombineSerializer

constructor(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: string, arg3: string, arg4: $ResourceLocation$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getTerminalB"(): $Ingredient
public "getTerminalAName"(): string
public "getTerminalA"(): $Ingredient
public "getTerminalBName"(): string
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "terminalB"(): $Ingredient
get "terminalAName"(): string
get "terminalA"(): $Ingredient
get "terminalBName"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Combine$Type = ($Combine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Combine_ = $Combine$Type;
}}
declare module "packages/de/mari_023/ae2wtlib/wut/recipe/$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Common, $Common$Type} from "packages/de/mari_023/ae2wtlib/wut/recipe/$Common"

export class $Serializer<T extends $Common> implements $RecipeSerializer<(T)> {

constructor()

public "validateOutput"(arg0: string): boolean
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Type<T> = ($Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer_<T> = $Serializer$Type<(T)>;
}}
