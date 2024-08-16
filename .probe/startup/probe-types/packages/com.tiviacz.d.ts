declare module "packages/com/tiviacz/travelersbackpack/common/recipes/$ShapedBackpackRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedBackpackRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: boolean)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public static "getProperColor"(arg0: $Item$Type): integer
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedBackpackRecipe$Type = ($ShapedBackpackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedBackpackRecipe_ = $ShapedBackpackRecipe$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/common/recipes/$BackpackUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Tiers$Tier, $Tiers$Tier$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$Tiers$Tier"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"

export class $BackpackUpgradeRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "base": $Ingredient
readonly "addition": $Ingredient
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: $ItemStack$Type)

public "matchesTier"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "upgradeInventory"(arg0: $CompoundTag$Type, arg1: $Tiers$Tier$Type): void
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Type = ($BackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe_ = $BackpackUpgradeRecipe$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/items/$UpgradeItem$Upgrade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeItem$Upgrade extends $Enum<($UpgradeItem$Upgrade)> {
static readonly "BLANK_UPGRADE": $UpgradeItem$Upgrade
static readonly "IRON_TIER_UPGRADE": $UpgradeItem$Upgrade
static readonly "GOLD_TIER_UPGRADE": $UpgradeItem$Upgrade
static readonly "DIAMOND_TIER_UPGRADE": $UpgradeItem$Upgrade
static readonly "NETHERITE_TIER_UPGRADE": $UpgradeItem$Upgrade
static readonly "CRAFTING_UPGRADE": $UpgradeItem$Upgrade


public static "values"(): ($UpgradeItem$Upgrade)[]
public static "valueOf"(arg0: string): $UpgradeItem$Upgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Upgrade$Type = (("iron_tier_upgrade") | ("blank_upgrade") | ("crafting_upgrade") | ("netherite_tier_upgrade") | ("gold_tier_upgrade") | ("diamond_tier_upgrade")) | ($UpgradeItem$Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Upgrade_ = $UpgradeItem$Upgrade$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/items/$SleepingBagItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BedItem, $BedItem$Type} from "packages/net/minecraft/world/item/$BedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SleepingBagItem extends $BedItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SleepingBagItem$Type = ($SleepingBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SleepingBagItem_ = $SleepingBagItem$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/common/recipes/$ShapelessBackpackRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessBackpackRecipe, $ShapelessBackpackRecipe$Type} from "packages/com/tiviacz/travelersbackpack/common/recipes/$ShapelessBackpackRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessBackpackRecipe$Serializer implements $RecipeSerializer<($ShapelessBackpackRecipe)> {
static readonly "INSTANCE": $ShapelessBackpackRecipe$Serializer

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessBackpackRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessBackpackRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessBackpackRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessBackpackRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessBackpackRecipe$Serializer$Type = ($ShapelessBackpackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessBackpackRecipe$Serializer_ = $ShapelessBackpackRecipe$Serializer$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/items/$HoseItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TravelersBackpackContainer, $TravelersBackpackContainer$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$TravelersBackpackContainer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HoseItem extends $Item {
static readonly "NO_ASSIGN": integer
static readonly "SUCK_MODE": integer
static readonly "SPILL_MODE": integer
static readonly "DRINK_MODE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "getSelectedFluidTank"(arg0: $ItemStack$Type, arg1: $TravelersBackpackContainer$Type): $FluidTank
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "setCompoundTag"(arg0: $ItemStack$Type): void
public static "getHoseTank"(arg0: $ItemStack$Type): integer
public static "getHoseMode"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
set "compoundTag"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoseItem$Type = ($HoseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoseItem_ = $HoseItem$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/inventory/$ITravelersBackpackContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Tiers$Tier, $Tiers$Tier$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$Tiers$Tier"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$ITanks, $ITanks$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$ITanks"
import {$SlotManager, $SlotManager$Type} from "packages/com/tiviacz/travelersbackpack/inventory/sorter/$SlotManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsManager, $SettingsManager$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$SettingsManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITravelersBackpackContainer extends $ITanks {

 "getTier"(): $Tiers$Tier
 "getHandler"(): $ItemStackHandler
 "getPosition"(): $BlockPos
 "isSleepingBagDeployed"(): boolean
 "getToolSlotsHandler"(): $ItemStackHandler
 "getSleepingBagColor"(): integer
 "getFluidSlotsHandler"(): $ItemStackHandler
 "getCraftingGridHandler"(): $ItemStackHandler
 "createTemporaryHandler"(): $ItemStackHandler
 "saveSleepingBagColor"(arg0: $CompoundTag$Type): void
 "hasSleepingBagColor"(): boolean
 "loadSleepingBagColor"(arg0: $CompoundTag$Type): void
 "getItemStack"(): $ItemStack
 "hasColor"(): boolean
 "getColor"(): integer
 "saveAllData"(arg0: $CompoundTag$Type): void
 "getSettingsManager"(): $SettingsManager
 "setDataChanged"(): void
 "setDataChanged"(...arg0: (byte)[]): void
 "loadTime"(arg0: $CompoundTag$Type): void
 "getRows"(): integer
 "m_58904_"(): $Level
 "hasBlockEntity"(): boolean
 "getAbilityValue"(): boolean
 "getCombinedHandler"(): $IItemHandlerModifiable
 "getSlotManager"(): $SlotManager
 "loadItems"(arg0: $CompoundTag$Type): void
 "loadAbility"(arg0: $CompoundTag$Type): void
 "saveItems"(arg0: $CompoundTag$Type): void
 "loadColor"(arg0: $CompoundTag$Type): void
 "saveColor"(arg0: $CompoundTag$Type): void
 "saveTime"(arg0: $CompoundTag$Type): void
 "getYOffset"(): integer
 "loadAllData"(arg0: $CompoundTag$Type): void
 "getLastTime"(): integer
 "setAbility"(arg0: boolean): void
 "saveAbility"(arg0: $CompoundTag$Type): void
 "setLastTime"(arg0: integer): void
 "getScreenID"(): byte
 "setUsingPlayer"(arg0: $Player$Type): void
 "getRightTank"(): $FluidTank
 "getLeftTank"(): $FluidTank
 "loadTanks"(arg0: $CompoundTag$Type): void
 "saveTanks"(arg0: $CompoundTag$Type): void
 "updateTankSlots"(): boolean
}

export namespace $ITravelersBackpackContainer {
const INVENTORY_DATA: byte
const TOOLS_DATA: byte
const CRAFTING_INVENTORY_DATA: byte
const COMBINED_INVENTORY_DATA: byte
const TANKS_DATA: byte
const COLOR_DATA: byte
const SLEEPING_BAG_COLOR_DATA: byte
const ABILITY_DATA: byte
const LAST_TIME_DATA: byte
const SLOT_DATA: byte
const SETTINGS_DATA: byte
const ALL_DATA: byte
const TIER: string
const INVENTORY: string
const TOOLS_INVENTORY: string
const CRAFTING_INVENTORY: string
const LEFT_TANK: string
const RIGHT_TANK: string
const SLEEPING_BAG: string
const COLOR: string
const SLEEPING_BAG_COLOR: string
const ABILITY: string
const LAST_TIME: string
const CUSTOM_NAME: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITravelersBackpackContainer$Type = ($ITravelersBackpackContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITravelersBackpackContainer_ = $ITravelersBackpackContainer$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/blocks/$TravelersBackpackBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TravelersBackpackBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "tryAbsorbWater"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelersBackpackBlock$Type = ($TravelersBackpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelersBackpackBlock_ = $TravelersBackpackBlock$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/items/$UpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITravelersBackpackContainer, $ITravelersBackpackContainer$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$ITravelersBackpackContainer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UpgradeItem$Upgrade, $UpgradeItem$Upgrade$Type} from "packages/com/tiviacz/travelersbackpack/items/$UpgradeItem$Upgrade"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $Item {
static "upgrades": $List<($Supplier<($Item)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $UpgradeItem$Upgrade$Type)

public static "getUpgrades"(arg0: $ITravelersBackpackContainer$Type): $NonNullList<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/inventory/$SettingsManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITravelersBackpackContainer, $ITravelersBackpackContainer$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$ITravelersBackpackContainer"

export class $SettingsManager {
static readonly "CRAFTING": byte
static readonly "TOOL_SLOTS": byte
static readonly "HAS_CRAFTING_GRID": integer
static readonly "SHOW_CRAFTING_GRID": integer
static readonly "SHIFT_CLICK_TO_BACKPACK": integer
static readonly "SHOW_TOOL_SLOTS": integer
static readonly "CRAFTING_SETTINGS": string
static readonly "TOOL_SLOTS_SETTINGS": string

constructor(arg0: $ITravelersBackpackContainer$Type)

public "shiftClickToBackpack"(): boolean
public "getByte"(arg0: byte, arg1: integer): byte
public "set"(arg0: byte, arg1: integer, arg2: byte): void
public "isDefault"(): boolean
public "showToolSlots"(): boolean
public "showCraftingGrid"(): boolean
public "hasCraftingGrid"(): boolean
public "loadSettings"(arg0: $CompoundTag$Type): void
public "saveSettings"(arg0: $CompoundTag$Type): void
public "setChanged"(): void
public "loadDefaults"(): void
get "default"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsManager$Type = ($SettingsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsManager_ = $SettingsManager$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/inventory/$Tiers$Tier" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export class $Tiers$Tier {
readonly "name": string
 "toolSlots": integer
readonly "storageSlots": integer
readonly "tankCapacity": integer

constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer)

public "getNextTier"(): $Tiers$Tier
public "getName"(): string
public "getTierUpgradeIngredient"(): $Item
public "getOrdinal"(): integer
public "getTankCapacity"(): integer
public "getToolSlots"(): integer
public "getStorageSlots"(): integer
get "nextTier"(): $Tiers$Tier
get "name"(): string
get "tierUpgradeIngredient"(): $Item
get "ordinal"(): integer
get "tankCapacity"(): integer
get "toolSlots"(): integer
get "storageSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tiers$Tier$Type = ($Tiers$Tier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tiers$Tier_ = $Tiers$Tier$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/common/recipes/$BackpackUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BackpackUpgradeRecipe, $BackpackUpgradeRecipe$Type} from "packages/com/tiviacz/travelersbackpack/common/recipes/$BackpackUpgradeRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BackpackUpgradeRecipe$Serializer implements $RecipeSerializer<($BackpackUpgradeRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BackpackUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BackpackUpgradeRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BackpackUpgradeRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BackpackUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Serializer$Type = ($BackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe$Serializer_ = $BackpackUpgradeRecipe$Serializer$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/inventory/sorter/$SlotManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITravelersBackpackContainer, $ITravelersBackpackContainer$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$ITravelersBackpackContainer"

export class $SlotManager {
static readonly "UNSORTABLE_SLOTS": string
static readonly "MEMORY_SLOTS": string
static readonly "UNSORTABLE": byte
static readonly "MEMORY": byte

constructor(arg0: $ITravelersBackpackContainer$Type)

public "saveUnsortableSlots"(arg0: $CompoundTag$Type): void
public "loadUnsortableSlots"(arg0: $CompoundTag$Type): void
public "setSelectorActive"(arg0: byte, arg1: boolean): void
public "setUnsortableSlots"(arg0: (integer)[], arg1: boolean): void
public "setMemorySlots"(arg0: (integer)[], arg1: ($ItemStack$Type)[], arg2: boolean): void
public "setUnsortableSlot"(arg0: integer): void
public "isSlot"(arg0: byte, arg1: integer): boolean
public "setMemorySlot"(arg0: integer, arg1: $ItemStack$Type): void
public "clearUnsortables"(): void
public "isSelectorActive"(arg0: byte): boolean
public "loadMemorySlots"(arg0: $CompoundTag$Type): void
public "saveMemorySlots"(arg0: $CompoundTag$Type): void
public "setChanged"(): void
public "getUnsortableSlots"(): $List<(integer)>
public "getMemorySlots"(): $List<($Pair<(integer), ($ItemStack)>)>
set "unsortableSlot"(value: integer)
get "unsortableSlots"(): $List<(integer)>
get "memorySlots"(): $List<($Pair<(integer), ($ItemStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotManager$Type = ($SlotManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotManager_ = $SlotManager$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/blocks/$SleepingBagBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BedBlock, $BedBlock$Type} from "packages/net/minecraft/world/level/block/$BedBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BedPart, $BedPart$Type} from "packages/net/minecraft/world/level/block/state/properties/$BedPart"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SleepingBagBlock extends $BedBlock {
static readonly "PART": $EnumProperty<($BedPart)>
static readonly "OCCUPIED": $BooleanProperty
static readonly "CAN_DROP": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $DyeColor$Type, arg1: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getSeed"(arg0: $BlockState$Type, arg1: $BlockPos$Type): long
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SleepingBagBlock$Type = ($SleepingBagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SleepingBagBlock_ = $SleepingBagBlock$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/inventory/$ITanks" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"

export interface $ITanks {

 "getRightTank"(): $FluidTank
 "getLeftTank"(): $FluidTank
 "loadTanks"(arg0: $CompoundTag$Type): void
 "saveTanks"(arg0: $CompoundTag$Type): void
 "updateTankSlots"(): boolean
}

export namespace $ITanks {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITanks$Type = ($ITanks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITanks_ = $ITanks$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/common/recipes/$ShapedBackpackRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ShapedBackpackRecipe, $ShapedBackpackRecipe$Type} from "packages/com/tiviacz/travelersbackpack/common/recipes/$ShapedBackpackRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedBackpackRecipe$Serializer implements $RecipeSerializer<($ShapedBackpackRecipe)> {
static readonly "INSTANCE": $ShapedBackpackRecipe$Serializer

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedBackpackRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedBackpackRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedBackpackRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedBackpackRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedBackpackRecipe$Serializer$Type = ($ShapedBackpackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedBackpackRecipe$Serializer_ = $ShapedBackpackRecipe$Serializer$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/items/$TravelersBackpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TravelersBackpackItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public static "updateCustomBlockEntityTag"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelersBackpackItem$Type = ($TravelersBackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelersBackpackItem_ = $TravelersBackpackItem$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/fluids/$PotionFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $PotionFluidType extends $FluidType {
static readonly "POTION_STILL_RL": $ResourceLocation
static readonly "POTION_FLOW_RL": $ResourceLocation
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "getDescription"(arg0: $FluidStack$Type): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
public "getDescriptionId"(): string
public "getDescriptionId"(arg0: $FluidStack$Type): string
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluidType$Type = ($PotionFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFluidType_ = $PotionFluidType$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/inventory/$TravelersBackpackContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Tiers$Tier, $Tiers$Tier$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$Tiers$Tier"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ITravelersBackpackContainer, $ITravelersBackpackContainer$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$ITravelersBackpackContainer"
import {$SlotManager, $SlotManager$Type} from "packages/com/tiviacz/travelersbackpack/inventory/sorter/$SlotManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SettingsManager, $SettingsManager$Type} from "packages/com/tiviacz/travelersbackpack/inventory/$SettingsManager"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $TravelersBackpackContainer implements $ITravelersBackpackContainer, $MenuProvider, $Nameable {

constructor(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: byte)

public "getTier"(): $Tiers$Tier
public "getHandler"(): $ItemStackHandler
public "getPosition"(): $BlockPos
public "isSleepingBagDeployed"(): boolean
public "getToolSlotsHandler"(): $ItemStackHandler
public "getSleepingBagColor"(): integer
public "getFluidSlotsHandler"(): $ItemStackHandler
public "getCraftingGridHandler"(): $ItemStackHandler
public "saveSleepingBagColor"(arg0: $CompoundTag$Type): void
public "hasSleepingBagColor"(): boolean
public "loadSleepingBagColor"(arg0: $CompoundTag$Type): void
public "getName"(): $Component
public "getDisplayName"(): $Component
public "loadTier"(arg0: $CompoundTag$Type): void
public "getItemStack"(): $ItemStack
public "hasColor"(): boolean
public "getColor"(): integer
public "saveAllData"(arg0: $CompoundTag$Type): void
public static "openGUI"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: byte): void
public "getSettingsManager"(): $SettingsManager
public "setDataChanged"(): void
public "setDataChanged"(...arg0: (byte)[]): void
public "getRightTank"(): $FluidTank
public "getLeftTank"(): $FluidTank
public "setStack"(arg0: $ItemStack$Type): void
public "loadTime"(arg0: $CompoundTag$Type): void
public "getRows"(): integer
public "m_58904_"(): $Level
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "hasBlockEntity"(): boolean
public "getAbilityValue"(): boolean
public "getCombinedHandler"(): $IItemHandlerModifiable
public "getSlotManager"(): $SlotManager
public static "abilityTick"(arg0: $Player$Type): void
public "loadTanks"(arg0: $CompoundTag$Type): void
public "loadItems"(arg0: $CompoundTag$Type): void
public "loadAbility"(arg0: $CompoundTag$Type): void
public "saveItems"(arg0: $CompoundTag$Type): void
public "loadColor"(arg0: $CompoundTag$Type): void
public "saveColor"(arg0: $CompoundTag$Type): void
public "saveTime"(arg0: $CompoundTag$Type): void
public "saveTanks"(arg0: $CompoundTag$Type): void
public "getYOffset"(): integer
public "updateTankSlots"(): boolean
public "loadAllData"(arg0: $CompoundTag$Type): void
public "getLastTime"(): integer
public "setAbility"(arg0: boolean): void
public "saveAbility"(arg0: $CompoundTag$Type): void
public "setLastTime"(arg0: integer): void
public "getScreenID"(): byte
public "setUsingPlayer"(arg0: $Player$Type): void
public "createTemporaryHandler"(): $ItemStackHandler
public "getCustomName"(): $Component
public "hasCustomName"(): boolean
get "tier"(): $Tiers$Tier
get "handler"(): $ItemStackHandler
get "position"(): $BlockPos
get "sleepingBagDeployed"(): boolean
get "toolSlotsHandler"(): $ItemStackHandler
get "sleepingBagColor"(): integer
get "fluidSlotsHandler"(): $ItemStackHandler
get "craftingGridHandler"(): $ItemStackHandler
get "name"(): $Component
get "displayName"(): $Component
get "itemStack"(): $ItemStack
get "color"(): integer
get "settingsManager"(): $SettingsManager
set "dataChanged"(value: (byte)[])
get "rightTank"(): $FluidTank
get "leftTank"(): $FluidTank
set "stack"(value: $ItemStack$Type)
get "rows"(): integer
get "abilityValue"(): boolean
get "combinedHandler"(): $IItemHandlerModifiable
get "slotManager"(): $SlotManager
get "yOffset"(): integer
get "lastTime"(): integer
set "ability"(value: boolean)
set "lastTime"(value: integer)
get "screenID"(): byte
set "usingPlayer"(value: $Player$Type)
get "customName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelersBackpackContainer$Type = ($TravelersBackpackContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravelersBackpackContainer_ = $TravelersBackpackContainer$Type;
}}
declare module "packages/com/tiviacz/travelersbackpack/common/recipes/$ShapelessBackpackRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapelessBackpackRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $ItemStack$Type, arg4: $NonNullList$Type<($Ingredient$Type)>)

public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessBackpackRecipe$Type = ($ShapelessBackpackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessBackpackRecipe_ = $ShapelessBackpackRecipe$Type;
}}
