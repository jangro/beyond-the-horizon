declare module "packages/appeng/parts/automation/$AnnihilationPlanePartItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PartItem, $PartItem$Type} from "packages/appeng/items/parts/$PartItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnnihilationPlanePart, $AnnihilationPlanePart$Type} from "packages/appeng/parts/automation/$AnnihilationPlanePart"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "CALLING_DAMAGEABLE_FROM_ANVIL": $ThreadLocal<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getEnchantmentValue"(): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getId"(arg0: $IPartItem$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePartItem$Type = ($AnnihilationPlanePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePartItem_ = $AnnihilationPlanePartItem$Type;
}}
declare module "packages/appeng/parts/$CableBusContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ICableBusContainer, $ICableBusContainer$Type} from "packages/appeng/parts/$ICableBusContainer"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$Type} from "packages/appeng/helpers/$AEMultiBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$Type)

public "getPart"(arg0: $Direction$Type): $IPart
public "getFacadeContainer"(): $IFacadeContainer
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "isProvidingWeakPower"(arg0: $Direction$Type): integer
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "isProvidingStrongPower"(arg0: $Direction$Type): integer
public "notifyNeighbors"(): void
public "clearContent"(): void
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
public "addPartDrops"(arg0: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
public "getLightValue"(): integer
public "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
public "getRenderState"(): $CableBusRenderState
public "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
public "isBlocked"(arg0: $Direction$Type): boolean
public "removePart"(arg0: $IPart$Type): boolean
public "clearContainer"(): void
public "removePartFromSide"(arg0: $Direction$Type): void
public "partChanged"(): void
public "notifyNeighborNow"(arg0: $Direction$Type): void
public "getColor"(): $AEColor
public "setHost"(arg0: $IPartHost$Type): void
public "markForUpdate"(): void
public "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
public "markForSave"(): void
public "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "hasRedstone"(): boolean
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "updateConnections"(): void
public "isInWorld"(): boolean
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "isRequiresDynamicRender"(): boolean
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "getBlockEntity"(): $BlockEntity
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "removeFromWorld"(): void
public "addToWorld"(): void
public "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
get "facadeContainer"(): $IFacadeContainer
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "shape"(): $VoxelShape
get "loading"(): boolean
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
get "color"(): $AEColor
set "host"(value: $IPartHost$Type)
get "inWorld"(): boolean
get "requiresDynamicRender"(): boolean
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$Type = ($CableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusContainer_ = $CableBusContainer$Type;
}}
declare module "packages/appeng/parts/automation/$PlaneConnections" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $PlaneConnections {
static readonly "PERMUTATIONS": $List<($PlaneConnections)>


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
public "isUp"(): boolean
public "isLeft"(): boolean
public "isDown"(): boolean
public "isRight"(): boolean
get "index"(): integer
get "up"(): boolean
get "left"(): boolean
get "down"(): boolean
get "right"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaneConnections$Type = ($PlaneConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaneConnections_ = $PlaneConnections$Type;
}}
declare module "packages/appeng/parts/automation/$AnnihilationPlanePart" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PlaneConnections, $PlaneConnections$Type} from "packages/appeng/parts/automation/$PlaneConnections"
import {$AEBasePart, $AEBasePart$Type} from "packages/appeng/parts/$AEBasePart"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {

constructor(arg0: $IPartItem$Type<(any)>)

public "getEnchantments"(): $Map<($Enchantment), (integer)>
public "getModelData"(): $ModelData
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "onUpdateShape"(arg0: $Direction$Type): void
public "getStaticModels"(): $IPartModel
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public static "getModels"(): $List<($IPartModel)>
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "getConnections"(): $PlaneConnections
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "addToWorld"(): void
public static "tryClear"(arg0: any): void
get "enchantments"(): $Map<($Enchantment), (integer)>
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
get "models"(): $List<($IPartModel)>
get "connections"(): $PlaneConnections
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePart$Type = ($AnnihilationPlanePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePart_ = $AnnihilationPlanePart$Type;
}}
declare module "packages/appeng/parts/$ICableBusContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ICableBusContainer {

 "isEmpty"(): boolean
 "isLadder"(arg0: $LivingEntity$Type): boolean
 "canConnectRedstone"(arg0: $Direction$Type): boolean
 "isProvidingWeakPower"(arg0: $Direction$Type): integer
 "isProvidingStrongPower"(arg0: $Direction$Type): integer
 "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
 "getLightValue"(): integer
 "getRenderState"(): $CableBusRenderState
 "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
 "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
}

export namespace $ICableBusContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$Type = ($ICableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableBusContainer_ = $ICableBusContainer$Type;
}}
declare module "packages/appeng/parts/$AEBasePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BusSupport, $BusSupport$Type} from "packages/appeng/api/parts/$BusSupport"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ISegmentedInventory, $ISegmentedInventory$Type} from "packages/appeng/api/inventories/$ISegmentedInventory"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AEBasePart implements $IPart, $IActionHost, $ISegmentedInventory, $IPowerChannelState, $Nameable {

constructor(arg0: $IPartItem$Type<(any)>)

public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getName"(): $Component
public "getCustomName"(): $Component
public "onPartShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "readVisualStateFromNBT"(arg0: $CompoundTag$Type): void
public "writeVisualStateToNBT"(arg0: $CompoundTag$Type): void
public "useStandardMemoryCard"(): boolean
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "onPlacement"(arg0: $Player$Type): void
public "onPartActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "isClientSide"(): boolean
public "getSide"(): $Direction
public "getLevel"(): $Level
public "addEntityCrashInfo"(arg0: $CrashReportCategory$Type): void
public "isPowered"(): boolean
public "getGridNode"(): $IGridNode
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "getPartItem"(): $IPartItem<(any)>
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "getBlockEntity"(): $BlockEntity
public "getMainNode"(): $IManagedGridNode
public "getActionableNode"(): $IGridNode
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "isMissingChannel"(): boolean
public "setPartHostInfo"(arg0: $Direction$Type, arg1: $IPartHost$Type, arg2: $BlockEntity$Type): void
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "removeFromWorld"(): void
public "addToWorld"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "getModelData"(): $ModelData
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "canConnectRedstone"(): boolean
public "getExternalCableConnectionType"(): $AECableType
public "isProvidingWeakPower"(): integer
public "requireDynamicRender"(): boolean
public "isProvidingStrongPower"(): integer
public "getDesiredConnectionType"(): $AECableType
public "getExternalFacingNode"(): $IGridNode
public "onUpdateShape"(arg0: $Direction$Type): void
public "addPartDrop"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "onShiftClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "getStaticModels"(): $IPartModel
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public "isSolid"(): boolean
public "renderDynamic"(arg0: float, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: integer, arg4: integer): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "canBePlacedOn"(arg0: $BusSupport$Type): boolean
public "getLightLevel"(): integer
public "onClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "clearContent"(): void
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "host"(): $IPartHost
get "active"(): boolean
get "name"(): $Component
get "customName"(): $Component
get "clientSide"(): boolean
get "side"(): $Direction
get "level"(): $Level
get "powered"(): boolean
get "gridNode"(): $IGridNode
get "partItem"(): $IPartItem<(any)>
get "blockEntity"(): $BlockEntity
get "mainNode"(): $IManagedGridNode
get "actionableNode"(): $IGridNode
get "missingChannel"(): boolean
get "modelData"(): $ModelData
get "externalCableConnectionType"(): $AECableType
get "providingWeakPower"(): boolean
get "providingStrongPower"(): boolean
get "desiredConnectionType"(): $AECableType
get "externalFacingNode"(): $IGridNode
get "staticModels"(): $IPartModel
get "solid"(): boolean
get "lightLevel"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$Type = ($AEBasePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePart_ = $AEBasePart$Type;
}}
