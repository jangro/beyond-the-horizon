declare module "packages/appbot/item/$CreativeManaCellItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreativeManaCellItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeManaCellItem$Type = ($CreativeManaCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeManaCellItem_ = $CreativeManaCellItem$Type;
}}
declare module "packages/appbot/item/$ManaCellItem" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IManaCellItem, $IManaCellItem$Type} from "packages/appbot/item/cell/$IManaCellItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AEToolItem, $AEToolItem$Type} from "packages/appeng/hooks/$AEToolItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManaCellItem extends $Item implements $IManaCellItem, $AEToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type, coreItem: $ItemLike$Type, kilobytes: integer, idleDrain: double)

public "getIdleDrain"(): double
public "getTotalBytes"(): long
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(is: $ItemStack$Type, level: $Level$Type, lines: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getConfigInventory"(is: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(is: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(is: $ItemStack$Type, fzMode: $FuzzyMode$Type): void
public "isEditable"(is: $ItemStack$Type): boolean
public "addCellInformationToTooltip"(is: $ItemStack$Type, lines: $List$Type<($Component$Type)>): void
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
get "idleDrain"(): double
get "totalBytes"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManaCellItem$Type = ($ManaCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManaCellItem_ = $ManaCellItem$Type;
}}
declare module "packages/appbot/item/cell/$IManaCellItem" {
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"

export interface $IManaCellItem extends $ICellWorkbenchItem {

 "getConfigInventory"(is: $ItemStack$Type): $ConfigInventory
 "getFuzzyMode"(is: $ItemStack$Type): $FuzzyMode
 "setFuzzyMode"(is: $ItemStack$Type, fzMode: $FuzzyMode$Type): void
 "getIdleDrain"(): double
 "isEditable"(is: $ItemStack$Type): boolean
 "getTotalBytes"(): long
 "addCellInformationToTooltip"(is: $ItemStack$Type, lines: $List$Type<($Component$Type)>): void
 "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
 "asItem"(): $Item
}

export namespace $IManaCellItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaCellItem$Type = ($IManaCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManaCellItem_ = $IManaCellItem$Type;
}}
declare module "packages/appbot/item/$PortableManaCellItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IManaCellItem, $IManaCellItem$Type} from "packages/appbot/item/cell/$IManaCellItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$AbstractPortableCell, $AbstractPortableCell$Type} from "packages/appeng/items/tools/powered/$AbstractPortableCell"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableManaCellItem extends $AbstractPortableCell implements $IManaCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(props: $Item$Properties$Type, kilobytes: integer, idleDrain: double)

public "getIdleDrain"(): double
public "getRecipeId"(): $ResourceLocation
public "getTotalBytes"(): long
public "getChargeRate"(stack: $ItemStack$Type): double
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, lines: $List$Type<($Component$Type)>, advancedTooltips: $TooltipFlag$Type): void
public "getConfigInventory"(is: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(is: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(is: $ItemStack$Type, fzMode: $FuzzyMode$Type): void
public "isEditable"(is: $ItemStack$Type): boolean
public "addCellInformationToTooltip"(is: $ItemStack$Type, lines: $List$Type<($Component$Type)>): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "asItem"(): $Item
get "idleDrain"(): double
get "recipeId"(): $ResourceLocation
get "totalBytes"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableManaCellItem$Type = ($PortableManaCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableManaCellItem_ = $PortableManaCellItem$Type;
}}
