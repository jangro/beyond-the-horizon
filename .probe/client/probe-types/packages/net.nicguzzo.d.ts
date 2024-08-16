declare module "packages/net/nicguzzo/wands/items/$PaletteItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$PaletteItem$PaletteMode, $PaletteItem$PaletteMode$Type} from "packages/net/nicguzzo/wands/items/$PaletteItem$PaletteMode"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PaletteItem extends $Item {
static "mode_val_random": $Component
static "mode_val_rr": $Component
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "getMode"(stack: $ItemStack$Type): $PaletteItem$PaletteMode
public static "toggleRotate"(stack: $ItemStack$Type): void
public static "getRotate"(stack: $ItemStack$Type): boolean
public "use"(world: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public static "nextMode"(stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteItem$Type = ($PaletteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteItem_ = $PaletteItem$Type;
}}
declare module "packages/net/nicguzzo/wands/items/$MagicBagItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicBagItem extends $Item {
 "tier": integer
 "limit": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(tier: integer, limit: integer, properties: $Item$Properties$Type)

public "getName"(itemStack: $ItemStack$Type): $Component
public static "dec"(bag: $ItemStack$Type, n: integer): void
public static "inc"(bag: $ItemStack$Type, n: integer): boolean
public static "getItem"(bag: $ItemStack$Type): $ItemStack
public static "setItem"(bag: $ItemStack$Type, item: $ItemStack$Type): void
public static "getTotal"(bag: $ItemStack$Type): integer
public "use"(world: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicBagItem$Type = ($MagicBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicBagItem_ = $MagicBagItem$Type;
}}
declare module "packages/net/nicguzzo/wands/items/$PaletteItem$PaletteMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PaletteItem$PaletteMode extends $Enum<($PaletteItem$PaletteMode)> {
static readonly "RANDOM": $PaletteItem$PaletteMode
static readonly "ROUND_ROBIN": $PaletteItem$PaletteMode


public static "values"(): ($PaletteItem$PaletteMode)[]
public static "valueOf"(name: string): $PaletteItem$PaletteMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteItem$PaletteMode$Type = (("random") | ("round_robin")) | ($PaletteItem$PaletteMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteItem$PaletteMode_ = $PaletteItem$PaletteMode$Type;
}}
declare module "packages/net/nicguzzo/wands/items/$WandItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WandItem extends $TieredItem implements $Vanishable {
 "limit": integer
 "can_blast": boolean
 "unbreakable": boolean
 "removes_water": boolean
 "removes_lava": boolean
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(tier: $Tier$Type, limit: integer, removes_water: boolean, removes_lava: boolean, unbreakable: boolean, can_blast: boolean, properties: $Item$Properties$Type)

public "getEnchantmentValue"(): integer
public "send_placement"(side: $Direction$Type, p1: $BlockPos$Type, p2: $BlockPos$Type, hit: $Vec3$Type, seed: long): void
public "use"(world: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandItem$Type = ($WandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandItem_ = $WandItem$Type;
}}
