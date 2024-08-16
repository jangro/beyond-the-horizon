declare module "packages/gripe/_90/arseng/item/$PortableSourceCellItem" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$RegisterColorHandlersEvent$Item, $RegisterColorHandlersEvent$Item$Type} from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Item"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ISourceCellItem, $ISourceCellItem$Type} from "packages/gripe/_90/arseng/me/cell/$ISourceCellItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$AbstractPortableCell, $AbstractPortableCell$Type} from "packages/appeng/items/tools/powered/$AbstractPortableCell"
import {$StorageTier, $StorageTier$Type} from "packages/appeng/items/storage/$StorageTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableSourceCellItem extends $AbstractPortableCell implements $ISourceCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $StorageTier$Type)

public "getIdleDrain"(): double
public "getRecipeId"(): $ResourceLocation
public "getTier"(): $StorageTier
public "getTotalBytes"(): long
public static "initColours"(arg0: $RegisterColorHandlersEvent$Item$Type): void
public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "isEditable"(arg0: $ItemStack$Type): boolean
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "asItem"(): $Item
get "idleDrain"(): double
get "recipeId"(): $ResourceLocation
get "tier"(): $StorageTier
get "totalBytes"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableSourceCellItem$Type = ($PortableSourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableSourceCellItem_ = $PortableSourceCellItem$Type;
}}
declare module "packages/gripe/_90/arseng/block/$SourceAcceptorBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SourceAcceptorBlockEntity, $SourceAcceptorBlockEntity$Type} from "packages/gripe/_90/arseng/block/entity/$SourceAcceptorBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $SourceAcceptorBlock extends $AEBaseEntityBlock<($SourceAcceptorBlockEntity)> {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceAcceptorBlock$Type = ($SourceAcceptorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceAcceptorBlock_ = $SourceAcceptorBlock$Type;
}}
declare module "packages/gripe/_90/polyeng/mixin/$AbstractContainerScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractContainerScreenAccessor {

 "getImageHeight"(): integer

(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/gripe/_90/arseng/item/$SourceCellItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegisterColorHandlersEvent$Item, $RegisterColorHandlersEvent$Item$Type} from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ISourceCellItem, $ISourceCellItem$Type} from "packages/gripe/_90/arseng/me/cell/$ISourceCellItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$StorageTier, $StorageTier$Type} from "packages/appeng/items/storage/$StorageTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SourceCellItem extends $AEBaseItem implements $ISourceCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $StorageTier$Type, arg2: $ItemLike$Type)

public "getIdleDrain"(): double
public "getTier"(): $StorageTier
public "getTotalBytes"(): long
public static "initColours"(arg0: $RegisterColorHandlersEvent$Item$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "isEditable"(arg0: $ItemStack$Type): boolean
public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
get "idleDrain"(): double
get "tier"(): $StorageTier
get "totalBytes"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceCellItem$Type = ($SourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceCellItem_ = $SourceCellItem$Type;
}}
declare module "packages/gripe/_90/arseng/block/$MESourceJarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IOrientableBlock, $IOrientableBlock$Type} from "packages/appeng/api/orientation/$IOrientableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MESourceJarBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock, $IOrientableBlock {
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getOrientationStrategy"(): $IOrientationStrategy
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getOrientation"(arg0: $BlockState$Type): $BlockOrientation
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MESourceJarBlock$Type = ($MESourceJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MESourceJarBlock_ = $MESourceJarBlock$Type;
}}
declare module "packages/gripe/_90/arseng/item/$CreativeSourceCellItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $CreativeSourceCellItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeSourceCellItem$Type = ($CreativeSourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeSourceCellItem_ = $CreativeSourceCellItem$Type;
}}
declare module "packages/gripe/_90/arseng/me/cell/$ISourceCellItem" {
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"

export interface $ISourceCellItem extends $ICellWorkbenchItem {

 "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
 "getIdleDrain"(): double
 "isEditable"(arg0: $ItemStack$Type): boolean
 "getTotalBytes"(): long
 "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
 "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
 "asItem"(): $Item
}

export namespace $ISourceCellItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISourceCellItem$Type = ($ISourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISourceCellItem_ = $ISourceCellItem$Type;
}}
declare module "packages/gripe/_90/arseng/block/entity/$SourceAcceptorBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PowerUnits, $PowerUnits$Type} from "packages/appeng/api/config/$PowerUnits"
import {$IExternalPowerSink, $IExternalPowerSink$Type} from "packages/appeng/blockentity/powersink/$IExternalPowerSink"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $SourceAcceptorBlockEntity extends $AENetworkBlockEntity implements $IExternalPowerSink {
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getExternalPowerDemand"(arg0: $PowerUnits$Type, arg1: double): double
public "injectExternalPower"(arg0: $PowerUnits$Type, arg1: double, arg2: $Actionable$Type): double
public "invalidateCaps"(): void
public "isAEPublicPowerStorage"(): boolean
public "onLoad"(): void
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "getPriority"(): integer
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "aEPublicPowerStorage"(): boolean
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
get "priority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceAcceptorBlockEntity$Type = ($SourceAcceptorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceAcceptorBlockEntity_ = $SourceAcceptorBlockEntity$Type;
}}
