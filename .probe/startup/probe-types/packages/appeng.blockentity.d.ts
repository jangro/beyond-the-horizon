declare module "packages/appeng/blockentity/misc/$PaintSplotchesBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$PaintSplotches, $PaintSplotches$Type} from "packages/appeng/block/paint/$PaintSplotches"
import {$Splotch, $Splotch$Type} from "packages/appeng/helpers/$Splotch"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $PaintSplotchesBlockEntity extends $AEBaseBlockEntity {
static readonly "SPLOTCHES": $ModelProperty<($PaintSplotches)>
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBlot"(arg0: $AEColor$Type, arg1: boolean, arg2: $Direction$Type, arg3: $Vec3$Type): void
public "addBlot"(arg0: $ItemStack$Type, arg1: $Direction$Type, arg2: $Vec3$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "neighborChanged"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "cleanSide"(arg0: $Direction$Type): void
public "getDots"(): $Collection<($Splotch)>
public "isSideValid"(arg0: $Direction$Type): boolean
public static "tryClear"(arg0: any): void
get "modelData"(): $ModelData
get "dots"(): $Collection<($Splotch)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSplotchesBlockEntity$Type = ($PaintSplotchesBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSplotchesBlockEntity_ = $PaintSplotchesBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$Type} from "packages/appeng/me/helpers/$IGridConnectedBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AENetworkInvBlockEntity extends $AEBaseInvBlockEntity implements $IGridConnectedBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getMainNode"(): $IManagedGridNode
public "setOwner"(arg0: $Player$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
public "saveChanges"(): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getActionableNode"(): $IGridNode
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkInvBlockEntity$Type = ($AENetworkInvBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkInvBlockEntity_ = $AENetworkInvBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialAnchorBlockEntity" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Setting, $Setting$Type} from "packages/appeng/api/config/$Setting"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$GridChunkEvent$GridChunkAdded, $GridChunkEvent$GridChunkAdded$Type} from "packages/appeng/api/networking/events/statistics/$GridChunkEvent$GridChunkAdded"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$GridChunkEvent$GridChunkRemoved, $GridChunkEvent$GridChunkRemoved$Type} from "packages/appeng/api/networking/events/statistics/$GridChunkEvent$GridChunkRemoved"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IOverlayDataSource, $IOverlayDataSource$Type} from "packages/appeng/client/render/overlay/$IOverlayDataSource"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IConfigManagerListener, $IConfigManagerListener$Type} from "packages/appeng/util/$IConfigManagerListener"

export class $SpatialAnchorBlockEntity extends $AENetworkBlockEntity implements $IGridTickable, $IConfigManagerListener, $IConfigurableObject, $IOverlayDataSource {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getOverlaySourceLocation"(): $DimensionalBlockPos
public "getOverlayBlockEntity"(): $BlockEntity
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "getConfigManager"(): $IConfigManager
public "onSettingChanged"(arg0: $IConfigManager$Type, arg1: $Setting$Type<(any)>): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "countLoadedChunks"(): integer
public "registerChunk"(arg0: $ChunkPos$Type): void
public "chunkRemoved"(arg0: $GridChunkEvent$GridChunkRemoved$Type): void
public "getOverlayColor"(): integer
public "chunkAdded"(arg0: $GridChunkEvent$GridChunkAdded$Type): void
public "getLoadedChunks"(): $Set<($ChunkPos)>
public "getOverlayChunks"(): $Set<($ChunkPos)>
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "overlaySourceLocation"(): $DimensionalBlockPos
get "overlayBlockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "overlayColor"(): integer
get "loadedChunks"(): $Set<($ChunkPos)>
get "overlayChunks"(): $Set<($ChunkPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialAnchorBlockEntity$Type = ($SpatialAnchorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialAnchorBlockEntity_ = $SpatialAnchorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$CrankBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$Type} from "packages/appeng/blockentity/$ClientTickingBlockEntity"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"

export class $CrankBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity, $ClientTickingBlockEntity {
static readonly "POWER_PER_CRANK_TURN": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "power"(): boolean
public "clientTick"(): void
public "serverTick"(): void
public "getVisibleRotation"(): float
public static "tryClear"(arg0: any): void
get "visibleRotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlockEntity$Type = ($CrankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrankBlockEntity_ = $CrankBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$InterfaceBlockEntity" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InterfaceLogic, $InterfaceLogic$Type} from "packages/appeng/helpers/$InterfaceLogic"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$InterfaceLogicHost, $InterfaceLogicHost$Type} from "packages/appeng/helpers/$InterfaceLogicHost"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $InterfaceBlockEntity extends $AENetworkBlockEntity implements $IPriorityHost, $IUpgradeableObject, $IConfigurableObject, $InterfaceLogicHost {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getInterfaceLogic"(): $InterfaceLogic
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getMainMenuIcon"(): $ItemStack
public "clearContent"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "getUpgrades"(): $IUpgradeInventory
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getConfigManager"(): $IConfigManager
public "getStorage"(): $GenericStackInv
public "getConfig"(): $GenericStackInv
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "saveChanges"(): void
public "getBlockEntity"(): $BlockEntity
public static "tryClear"(arg0: any): void
get "interfaceLogic"(): $InterfaceLogic
get "mainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "storage"(): $GenericStackInv
get "config"(): $GenericStackInv
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceBlockEntity$Type = ($InterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceBlockEntity_ = $InterfaceBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$SkyChestBlockEntity" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LidBlockEntity, $LidBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LidBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$Type} from "packages/appeng/blockentity/$ClientTickingBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SkyChestBlockEntity extends $AEBaseInvBlockEntity implements $ClientTickingBlockEntity, $LidBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getInternalInventory"(): $InternalInventory
public "disassembleWithWrench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $InteractionResult
public "clientTick"(): void
public "getOpenNess"(arg0: float): float
public "recheckOpen"(): void
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyChestBlockEntity$Type = ($SkyChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyChestBlockEntity_ = $SkyChestBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$IOPortBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $IOPortBlockEntity extends $AENetworkInvBlockEntity implements $IUpgradeableObject, $IConfigurableObject, $IGridTickable {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateRedstoneState"(): void
public "matchesFullnessMode"(arg0: $StorageCell$Type): boolean
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "clearContent"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPortBlockEntity$Type = ($IOPortBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOPortBlockEntity_ = $IOPortBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$EnergyCellBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $EnergyCellBlockEntity extends $AENetworkBlockEntity implements $IAEPowerStorage, $IGridTickable {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getPriority"(): integer
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public static "getStorageLevelFromFillFactor"(arg0: double): integer
public "isAEPublicPowerStorage"(): boolean
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "priority"(): integer
get "aEPublicPowerStorage"(): boolean
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCellBlockEntity$Type = ($EnergyCellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCellBlockEntity_ = $EnergyCellBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$WirelessAccessPointBlockEntity" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IWirelessAccessPoint, $IWirelessAccessPoint$Type} from "packages/appeng/api/implementations/blockentities/$IWirelessAccessPoint"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $WirelessAccessPointBlockEntity extends $AENetworkInvBlockEntity implements $IWirelessAccessPoint, $IPowerChannelState {
static readonly "POWERED_FLAG": integer
static readonly "CHANNEL_FLAG": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getLocation"(): $DimensionalBlockPos
public "isActive"(): boolean
public "getRange"(): double
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getClientFlags"(): integer
public "onReady"(): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "saveChanges"(): void
public "getGrid"(): $IGrid
public "isPowered"(): boolean
public "getActionableNode"(): $IGridNode
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "location"(): $DimensionalBlockPos
get "active"(): boolean
get "range"(): double
get "internalInventory"(): $InternalInventory
get "clientFlags"(): integer
get "grid"(): $IGrid
get "powered"(): boolean
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessAccessPointBlockEntity$Type = ($WirelessAccessPointBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessAccessPointBlockEntity_ = $WirelessAccessPointBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$CraftingMonitorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CraftingBlockEntity, $CraftingBlockEntity$Type} from "packages/appeng/blockentity/crafting/$CraftingBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $CraftingMonitorBlockEntity extends $CraftingBlockEntity implements $IColorableBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "m_183515_"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "getColor"(): $AEColor
public "loadTag"(arg0: $CompoundTag$Type): void
public "setJob"(arg0: $GenericStack$Type): void
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "getJobProgress"(): $GenericStack
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "modelData"(): $ModelData
get "color"(): $AEColor
set "job"(value: $GenericStack$Type)
get "jobProgress"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMonitorBlockEntity$Type = ($CraftingMonitorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMonitorBlockEntity_ = $CraftingMonitorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$CraftingBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$CraftingCPUCluster, $CraftingCPUCluster$Type} from "packages/appeng/me/cluster/implementations/$CraftingCPUCluster"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AbstractCraftingUnitBlock, $AbstractCraftingUnitBlock$Type} from "packages/appeng/block/crafting/$AbstractCraftingUnitBlock"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $CraftingBlockEntity extends $AENetworkBlockEntity implements $IAEMultiBlock<($CraftingCPUCluster)>, $IPowerChannelState, $IConfigurableObject {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setName"(arg0: string): void
public "isActive"(): boolean
public "isValid"(): boolean
public "getAcceleratorThreads"(): integer
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "disconnect"(arg0: boolean): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "getModelData"(): $ModelData
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "isFormed"(): boolean
public "breakCluster"(): void
public "updateMultiBlock"(arg0: $BlockPos$Type): void
public "updateSubType"(arg0: boolean): void
public "getUnitBlock"(): $AbstractCraftingUnitBlock<(any)>
public "setPreviousState"(arg0: $CompoundTag$Type): void
public "getPreviousState"(): $CompoundTag
public "setCoreBlock"(arg0: boolean): void
public "isCoreBlock"(): boolean
public "updateStatus"(arg0: $CraftingCPUCluster$Type): void
public "getCluster"(): $CraftingCPUCluster
public "getStorageBytes"(): long
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "isPowered"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "active"(): boolean
get "valid"(): boolean
get "acceleratorThreads"(): integer
set "blockState"(value: $BlockState$Type)
get "modelData"(): $ModelData
get "configManager"(): $IConfigManager
get "formed"(): boolean
get "unitBlock"(): $AbstractCraftingUnitBlock<(any)>
set "previousState"(value: $CompoundTag$Type)
get "previousState"(): $CompoundTag
set "coreBlock"(value: boolean)
get "coreBlock"(): boolean
get "cluster"(): $CraftingCPUCluster
get "storageBytes"(): long
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingBlockEntity$Type = ($CraftingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingBlockEntity_ = $CraftingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$CondenserBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CondenserBlockEntity extends $AEBaseInvBlockEntity implements $IConfigurableObject {
static readonly "BYTE_MULTIPLIER": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getStorage"(): double
public "getInternalInventory"(): $InternalInventory
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getConfigManager"(): $IConfigManager
public "addPower"(arg0: double): void
public "getFluidHandler"(): $IFluidHandler
public "getRequiredPower"(): double
public "getMEStorage"(): $MEStorage
public "getExternalInv"(): $InternalInventory
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getStoredPower"(): double
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "storage"(): double
get "internalInventory"(): $InternalInventory
get "configManager"(): $IConfigManager
get "fluidHandler"(): $IFluidHandler
get "requiredPower"(): double
get "mEStorage"(): $MEStorage
get "externalInv"(): $InternalInventory
get "storedPower"(): double
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CondenserBlockEntity$Type = ($CondenserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CondenserBlockEntity_ = $CondenserBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$DriveBlockEntity" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$IStorageProvider, $IStorageProvider$Type} from "packages/appeng/api/storage/$IStorageProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IStorageMounts, $IStorageMounts$Type} from "packages/appeng/api/storage/$IStorageMounts"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IChestOrDrive, $IChestOrDrive$Type} from "packages/appeng/api/implementations/blockentities/$IChestOrDrive"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $DriveBlockEntity extends $AENetworkInvBlockEntity implements $IChestOrDrive, $IPriorityHost, $IStorageProvider {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "openMenu"(arg0: $Player$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getMainMenuIcon"(): $ItemStack
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCellInventory"(arg0: integer): $MEStorage
public "getCellItem"(arg0: integer): $Item
public "isCellBlinking"(arg0: integer): boolean
public "isPowered"(): boolean
public "mountInventories"(arg0: $IStorageMounts$Type): void
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "priority"(value: integer)
get "priority"(): integer
get "internalInventory"(): $InternalInventory
get "modelData"(): $ModelData
get "cellCount"(): integer
get "mainMenuIcon"(): $ItemStack
get "powered"(): boolean
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriveBlockEntity$Type = ($DriveBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DriveBlockEntity_ = $DriveBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$Type} from "packages/appeng/me/helpers/$IGridConnectedBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AEBasePoweredBlockEntity, $AEBasePoweredBlockEntity$Type} from "packages/appeng/blockentity/powersink/$AEBasePoweredBlockEntity"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AENetworkPowerBlockEntity extends $AEBasePoweredBlockEntity implements $IGridConnectedBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getMainNode"(): $IManagedGridNode
public "setOwner"(arg0: $Player$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
public "saveChanges"(): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getActionableNode"(): $IGridNode
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkPowerBlockEntity$Type = ($AENetworkPowerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkPowerBlockEntity_ = $AENetworkPowerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$ClientState" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$SpatialPylonBlockEntity$AxisPosition, $SpatialPylonBlockEntity$AxisPosition$Type} from "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$AxisPosition"

export class $SpatialPylonBlockEntity$ClientState extends $Record {
static readonly "DEFAULT": $SpatialPylonBlockEntity$ClientState

constructor(powered: boolean, online: boolean, axisPosition: $SpatialPylonBlockEntity$AxisPosition$Type, axis: $Direction$Axis$Type)

public "writeToNbt"(arg0: $CompoundTag$Type): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "powered"(): boolean
public "axis"(): $Direction$Axis
public "online"(): boolean
public static "readFromNbt"(arg0: $CompoundTag$Type): $SpatialPylonBlockEntity$ClientState
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public static "readFromStream"(arg0: $FriendlyByteBuf$Type): $SpatialPylonBlockEntity$ClientState
public "axisPosition"(): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$ClientState$Type = ($SpatialPylonBlockEntity$ClientState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity$ClientState_ = $SpatialPylonBlockEntity$ClientState$Type;
}}
declare module "packages/appeng/blockentity/misc/$GrowthAcceleratorBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $GrowthAcceleratorBlockEntity extends $AENetworkBlockEntity implements $IPowerChannelState {
static readonly "MAX_STORED_POWER": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "isPowered"(): boolean
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthAcceleratorBlockEntity$Type = ($GrowthAcceleratorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthAcceleratorBlockEntity_ = $GrowthAcceleratorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$ClientTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientTickingBlockEntity {

 "clientTick"(): void

(): void
}

export namespace $ClientTickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickingBlockEntity$Type = ($ClientTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientTickingBlockEntity_ = $ClientTickingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$InscriberBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InscriberRecipe, $InscriberRecipe$Type} from "packages/appeng/recipes/handlers/$InscriberRecipe"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $InscriberBlockEntity extends $AENetworkPowerBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getMaxProcessingTime"(): integer
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "getTask"(): $InscriberRecipe
public "isSmash"(): boolean
public "setSmash"(arg0: boolean): void
public "setRepeatSmash"(arg0: boolean): void
public "getClientStart"(): long
public "isRepeatSmash"(): boolean
public "getProcessingTime"(): integer
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "clearContent"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "maxProcessingTime"(): integer
get "upgrades"(): $IUpgradeInventory
get "task"(): $InscriberRecipe
get "smash"(): boolean
set "smash"(value: boolean)
set "repeatSmash"(value: boolean)
get "clientStart"(): long
get "repeatSmash"(): boolean
get "processingTime"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberBlockEntity$Type = ($InscriberBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberBlockEntity_ = $InscriberBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$EnergyAcceptorBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyAcceptorBlockEntity extends $AENetworkPowerBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyAcceptorBlockEntity$Type = ($EnergyAcceptorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyAcceptorBlockEntity_ = $EnergyAcceptorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$SkyStoneTankBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $SkyStoneTankBlockEntity extends $AEBaseBlockEntity {
static readonly "BUCKET_CAPACITY": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getStorage"(): $IFluidTank
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onPlayerUse"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public static "tryClear"(arg0: any): void
get "storage"(): $IFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyStoneTankBlockEntity$Type = ($SkyStoneTankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyStoneTankBlockEntity_ = $SkyStoneTankBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/powersink/$AEBasePoweredBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PowerUnits, $PowerUnits$Type} from "packages/appeng/api/config/$PowerUnits"
import {$IExternalPowerSink, $IExternalPowerSink$Type} from "packages/appeng/blockentity/powersink/$IExternalPowerSink"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseInvBlockEntity"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $AEBasePoweredBlockEntity extends $AEBaseInvBlockEntity implements $IAEPowerStorage, $IExternalPowerSink {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "setInternalCurrentPower"(arg0: double): void
public "getInternalMaxPower"(): double
public "getExternalPowerDemand"(arg0: $PowerUnits$Type, arg1: double): double
public "injectExternalPower"(arg0: $PowerUnits$Type, arg1: double, arg2: $Actionable$Type): double
public "setInternalMaxPower"(arg0: double): void
public "getInternalCurrentPower"(): double
public "setInternalPublicPowerStorage"(arg0: boolean): void
public "setInternalPowerFlow"(arg0: $AccessRestriction$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "isAEPublicPowerStorage"(): boolean
public "loadTag"(arg0: $CompoundTag$Type): void
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "getPriority"(): integer
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "internalCurrentPower"(value: double)
get "internalMaxPower"(): double
set "internalMaxPower"(value: double)
get "internalCurrentPower"(): double
set "internalPublicPowerStorage"(value: boolean)
set "internalPowerFlow"(value: $AccessRestriction$Type)
get "aEPublicPowerStorage"(): boolean
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
get "priority"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredBlockEntity$Type = ($AEBasePoweredBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePoweredBlockEntity_ = $AEBasePoweredBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/storage/$ChestBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CellState, $CellState$Type} from "packages/appeng/api/storage/cells/$CellState"
import {$IStorageProvider, $IStorageProvider$Type} from "packages/appeng/api/storage/$IStorageProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IStorageMounts, $IStorageMounts$Type} from "packages/appeng/api/storage/$IStorageMounts"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITerminalHost, $ITerminalHost$Type} from "packages/appeng/api/storage/$ITerminalHost"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$StorageCell, $StorageCell$Type} from "packages/appeng/api/storage/cells/$StorageCell"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$IMEChest, $IMEChest$Type} from "packages/appeng/api/implementations/blockentities/$IMEChest"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $ChestBlockEntity extends $AENetworkPowerBlockEntity implements $IMEChest, $ITerminalHost, $IPriorityHost, $IColorableBlockEntity, $ServerTickingBlockEntity, $IStorageProvider {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "getExposedInventoryForSide"(arg0: $Direction$Type): $InternalInventory
public "openCellInventoryMenu"(arg0: $Player$Type): void
public "getCell"(): $ItemStack
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "serverTick"(): void
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "openGui"(arg0: $Player$Type): boolean
public "getFluidHandler"(arg0: $Direction$Type): $IFluidHandler
public "getMEStorage"(arg0: $Direction$Type): $MEStorage
public "getColor"(): $AEColor
public "loadTag"(arg0: $CompoundTag$Type): void
public "getInventory"(): $MEStorage
public "getMainMenuIcon"(): $ItemStack
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getCellInventory"(arg0: integer): $MEStorage
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "getCellItem"(arg0: integer): $Item
public "setCell"(arg0: $ItemStack$Type): void
public "isCellBlinking"(arg0: integer): boolean
public "isPowered"(): boolean
public "mountInventories"(arg0: $IStorageMounts$Type): void
public "getCloseHotkey"(): string
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "getUpgrades"(): $IUpgradeInventory
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "priority"(value: integer)
get "priority"(): integer
get "internalInventory"(): $InternalInventory
get "cell"(): $ItemStack
get "configManager"(): $IConfigManager
get "cellCount"(): integer
get "color"(): $AEColor
get "inventory"(): $MEStorage
get "mainMenuIcon"(): $ItemStack
set "cell"(value: $ItemStack$Type)
get "powered"(): boolean
get "closeHotkey"(): string
get "upgrades"(): $IUpgradeInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlockEntity$Type = ($ChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChestBlockEntity_ = $ChestBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$ChargerBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ICrankable, $ICrankable$Type} from "packages/appeng/api/implementations/blockentities/$ICrankable"

export class $ChargerBlockEntity extends $AENetworkPowerBlockEntity implements $IGridTickable {
static readonly "POWER_MAXIMUM_AMOUNT": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCrankable"(arg0: $Direction$Type): $ICrankable
public "isWorking"(): boolean
public "activate"(arg0: $Player$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "working"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerBlockEntity$Type = ($ChargerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerBlockEntity_ = $ChargerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity" {
import {$SpatialPylonBlockEntity$ClientState, $SpatialPylonBlockEntity$ClientState$Type} from "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$ClientState"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$SpatialPylonCluster, $SpatialPylonCluster$Type} from "packages/appeng/me/cluster/implementations/$SpatialPylonCluster"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $SpatialPylonBlockEntity extends $AENetworkBlockEntity implements $IAEMultiBlock<($SpatialPylonCluster)> {
static readonly "STATE": $ModelProperty<($SpatialPylonBlockEntity$ClientState)>
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isValid"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "disconnect"(arg0: boolean): void
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getClientState"(): $SpatialPylonBlockEntity$ClientState
public "neighborChanged"(arg0: $BlockPos$Type): void
public "updateStatus"(arg0: $SpatialPylonCluster$Type): void
public "getCluster"(): $SpatialPylonCluster
public "onReady"(): void
public "recalculateDisplay"(): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "valid"(): boolean
get "modelData"(): $ModelData
get "clientState"(): $SpatialPylonBlockEntity$ClientState
get "cluster"(): $SpatialPylonCluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$Type = ($SpatialPylonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity_ = $SpatialPylonBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialIOPortBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"

export class $SpatialIOPortBlockEntity extends $AENetworkInvBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateRedstoneState"(): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getRedstoneState"(): boolean
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "internalInventory"(): $InternalInventory
get "redstoneState"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialIOPortBlockEntity$Type = ($SpatialIOPortBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialIOPortBlockEntity_ = $SpatialIOPortBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$VibrationChamberBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $VibrationChamberBlockEntity extends $AENetworkInvBlockEntity implements $IGridTickable, $IUpgradeableObject {
 "isOn": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "hasBurnTime"(arg0: $ItemStack$Type): boolean
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getCurrentFuelTicksPerTick"(): double
public "getMaxFuelTicksPerTick"(): double
public "getMinFuelTicksPerTick"(): double
public "getRemainingFuelTicks"(): double
public "getFuelItemFuelTicks"(): double
public "getEnergyPerFuelTick"(): double
public static "getBurnTime"(arg0: $ItemStack$Type): integer
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "getMaxEnergyRate"(): double
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "clearContent"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "currentFuelTicksPerTick"(): double
get "maxFuelTicksPerTick"(): double
get "minFuelTicksPerTick"(): double
get "remainingFuelTicks"(): double
get "fuelItemFuelTicks"(): double
get "energyPerFuelTick"(): double
get "upgrades"(): $IUpgradeInventory
get "maxEnergyRate"(): double
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VibrationChamberBlockEntity$Type = ($VibrationChamberBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VibrationChamberBlockEntity_ = $VibrationChamberBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$ControllerBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"

export class $ControllerBlockEntity extends $AENetworkPowerBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "updateState"(): void
public "onReady"(): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntity$Type = ($ControllerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockEntity_ = $ControllerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/powersink/$IExternalPowerSink" {
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$PowerUnits, $PowerUnits$Type} from "packages/appeng/api/config/$PowerUnits"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $IExternalPowerSink extends $IAEPowerStorage {

 "getExternalPowerDemand"(arg0: $PowerUnits$Type, arg1: double): double
 "injectExternalPower"(arg0: $PowerUnits$Type, arg1: double, arg2: $Actionable$Type): double
 "getPriority"(): integer
 "isAEPublicPowerStorage"(): boolean
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
 "getAECurrentPower"(): double
 "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
 "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
}

export namespace $IExternalPowerSink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExternalPowerSink$Type = ($IExternalPowerSink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExternalPowerSink_ = $IExternalPowerSink$Type;
}}
declare module "packages/appeng/blockentity/networking/$CreativeEnergyCellBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$PowerMultiplier, $PowerMultiplier$Type} from "packages/appeng/api/config/$PowerMultiplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IAEPowerStorage, $IAEPowerStorage$Type} from "packages/appeng/api/networking/energy/$IAEPowerStorage"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $CreativeEnergyCellBlockEntity extends $AENetworkBlockEntity implements $IAEPowerStorage {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getPriority"(): integer
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "isAEPublicPowerStorage"(): boolean
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "extractAEPower"(arg0: double, arg1: $Actionable$Type, arg2: $PowerMultiplier$Type): double
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$Type): double
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "priority"(): integer
get "aEPublicPowerStorage"(): boolean
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "aECurrentPower"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyCellBlockEntity$Type = ($CreativeEnergyCellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyCellBlockEntity_ = $CreativeEnergyCellBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$CrystalResonanceGeneratorBlockEntity" {
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $CrystalResonanceGeneratorBlockEntity extends $AENetworkBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "isSuppressed"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "suppressed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalResonanceGeneratorBlockEntity$Type = ($CrystalResonanceGeneratorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalResonanceGeneratorBlockEntity_ = $CrystalResonanceGeneratorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/networking/$CableBusBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CableBusContainer, $CableBusContainer$Type} from "packages/appeng/parts/$CableBusContainer"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$Type} from "packages/appeng/helpers/$AEMultiBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $CableBusBlockEntity extends $AEBaseBlockEntity implements $AEMultiBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getPart"(arg0: $Direction$Type): $IPart
public "getFacadeContainer"(): $IFacadeContainer
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "disassembleWithWrench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $InteractionResult
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "notifyNeighbors"(): void
public "getCableBus"(): $CableBusContainer
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
public "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
public "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
public "isBlocked"(arg0: $Direction$Type): boolean
public "removePart"(arg0: $IPart$Type): boolean
public "clearContainer"(): void
public "removePartFromSide"(arg0: $Direction$Type): void
public "partChanged"(): void
public "notifyNeighborNow"(arg0: $Direction$Type): void
public "getColor"(): $AEColor
public "markForUpdate"(): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
public "markForSave"(): void
public "hasRedstone"(): boolean
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "isInWorld"(): boolean
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "clearContent"(): void
public "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
public static "tryClear"(arg0: any): void
get "facadeContainer"(): $IFacadeContainer
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "modelData"(): $ModelData
get "cableBus"(): $CableBusContainer
get "color"(): $AEColor
get "inWorld"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusBlockEntity$Type = ($CableBusBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusBlockEntity_ = $CableBusBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/misc/$LightDetectorBlockEntity" {
import {$CommonTickingBlockEntity, $CommonTickingBlockEntity$Type} from "packages/appeng/blockentity/$CommonTickingBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LightDetectorBlockEntity extends $AEBaseBlockEntity implements $CommonTickingBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "commonTick"(): void
public "isReady"(): boolean
public "updateLight"(): void
public "clientTick"(): void
public "serverTick"(): void
public static "tryClear"(arg0: any): void
get "ready"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightDetectorBlockEntity$Type = ($LightDetectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightDetectorBlockEntity_ = $LightDetectorBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/qnb/$QuantumBridgeBlockEntity" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$QnbFormedState, $QnbFormedState$Type} from "packages/appeng/block/qnb/$QnbFormedState"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$QuantumCluster, $QuantumCluster$Type} from "packages/appeng/me/cluster/implementations/$QuantumCluster"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"

export class $QuantumBridgeBlockEntity extends $AENetworkInvBlockEntity implements $IAEMultiBlock<($QuantumCluster)>, $ServerTickingBlockEntity {
static readonly "FORMED_STATE": $ModelProperty<($QnbFormedState)>
static readonly "TAG_FREQUENCY": string
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isValid"(): boolean
public static "isValidEntangledSingularity"(arg0: $ItemStack$Type): boolean
public "getInternalInventory"(): $InternalInventory
public "getExposedInventoryForSide"(arg0: $Direction$Type): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "breakClusterOnRemove"(): void
public "getAdjacentQuantumBridges"(): $EnumSet<($Direction)>
public "disconnect"(arg0: boolean): void
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "isFormed"(): boolean
public "neighborUpdate"(arg0: $BlockPos$Type): void
public "serverTick"(): void
public "isCorner"(): boolean
public "hasQES"(): boolean
public "getCorner"(): byte
public static "assignFrequency"(arg0: $ItemStack$Type): void
public "updateStatus"(arg0: $QuantumCluster$Type, arg1: byte, arg2: boolean): void
public "getCluster"(): $QuantumCluster
public "onReady"(): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getQEFrequency"(): long
public "isPowered"(): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "valid"(): boolean
get "internalInventory"(): $InternalInventory
get "adjacentQuantumBridges"(): $EnumSet<($Direction)>
get "modelData"(): $ModelData
get "formed"(): boolean
get "corner"(): boolean
get "corner"(): byte
get "cluster"(): $QuantumCluster
get "qEFrequency"(): long
get "powered"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumBridgeBlockEntity$Type = ($QuantumBridgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumBridgeBlockEntity_ = $QuantumBridgeBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$MolecularAssemblerBlockEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICraftingMachine, $ICraftingMachine$Type} from "packages/appeng/api/implementations/blockentities/$ICraftingMachine"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$AENetworkInvBlockEntity, $AENetworkInvBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkInvBlockEntity"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IMolecularAssemblerSupportedPattern, $IMolecularAssemblerSupportedPattern$Type} from "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$AssemblerAnimationStatus, $AssemblerAnimationStatus$Type} from "packages/appeng/client/render/crafting/$AssemblerAnimationStatus"

export class $MolecularAssemblerBlockEntity extends $AENetworkInvBlockEntity implements $IUpgradeableObject, $IGridTickable, $ICraftingMachine, $IPowerChannelState {
static readonly "INV_MAIN": $ResourceLocation
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "getCraftingProgress"(): integer
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[], arg2: $Direction$Type): boolean
public "acceptsPlans"(): boolean
public "getCurrentPattern"(): $IMolecularAssemblerSupportedPattern
public "getAnimationStatus"(): $AssemblerAnimationStatus
public "setAnimationStatus"(arg0: $AssemblerAnimationStatus$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "isPowered"(): boolean
public "clearContent"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public static "of"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ICraftingMachine
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockEntity$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "internalInventory"(): $InternalInventory
get "craftingMachineInfo"(): $PatternContainerGroup
get "craftingProgress"(): integer
get "upgrades"(): $IUpgradeInventory
get "currentPattern"(): $IMolecularAssemblerSupportedPattern
get "animationStatus"(): $AssemblerAnimationStatus
set "animationStatus"(value: $AssemblerAnimationStatus$Type)
get "powered"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolecularAssemblerBlockEntity$Type = ($MolecularAssemblerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolecularAssemblerBlockEntity_ = $MolecularAssemblerBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity$AxisPosition" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SpatialPylonBlockEntity$AxisPosition extends $Enum<($SpatialPylonBlockEntity$AxisPosition)> {
static readonly "NONE": $SpatialPylonBlockEntity$AxisPosition
static readonly "START": $SpatialPylonBlockEntity$AxisPosition
static readonly "MIDDLE": $SpatialPylonBlockEntity$AxisPosition
static readonly "END": $SpatialPylonBlockEntity$AxisPosition


public static "values"(): ($SpatialPylonBlockEntity$AxisPosition)[]
public static "valueOf"(arg0: string): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$AxisPosition$Type = (("middle") | ("start") | ("end") | ("none")) | ($SpatialPylonBlockEntity$AxisPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity$AxisPosition_ = $SpatialPylonBlockEntity$AxisPosition$Type;
}}
declare module "packages/appeng/blockentity/crafting/$PatternProviderBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$PatternProviderLogicHost, $PatternProviderLogicHost$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderLogicHost"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PatternProviderLogic, $PatternProviderLogic$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderLogic"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export class $PatternProviderBlockEntity extends $AENetworkBlockEntity implements $PatternProviderLogicHost {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "getTargets"(): $EnumSet<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getLogic"(): $PatternProviderLogic
public "getTerminalIcon"(): $AEItemKey
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getMainMenuIcon"(): $ItemStack
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "clearContent"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "isVisibleInTerminal"(): boolean
public "getTerminalPatternInventory"(): $InternalInventory
public "getTerminalSortOrder"(): long
public "getConfigManager"(): $IConfigManager
public "getTerminalGroup"(): $PatternContainerGroup
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "saveChanges"(): void
public "getGrid"(): $IGrid
public "getBlockEntity"(): $BlockEntity
public static "tryClear"(arg0: any): void
set "blockState"(value: $BlockState$Type)
get "targets"(): $EnumSet<($Direction)>
get "logic"(): $PatternProviderLogic
get "terminalIcon"(): $AEItemKey
get "mainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "visibleInTerminal"(): boolean
get "terminalPatternInventory"(): $InternalInventory
get "terminalSortOrder"(): long
get "configManager"(): $IConfigManager
get "terminalGroup"(): $PatternContainerGroup
get "grid"(): $IGrid
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderBlockEntity$Type = ($PatternProviderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderBlockEntity_ = $PatternProviderBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$CommonTickingBlockEntity" {
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$Type} from "packages/appeng/blockentity/$ClientTickingBlockEntity"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$Type} from "packages/appeng/blockentity/$ServerTickingBlockEntity"

export interface $CommonTickingBlockEntity extends $ServerTickingBlockEntity, $ClientTickingBlockEntity {

 "commonTick"(): void
 "clientTick"(): void
 "serverTick"(): void

(): void
}

export namespace $CommonTickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTickingBlockEntity$Type = ($CommonTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTickingBlockEntity_ = $CommonTickingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern" {
import {$IMolecularAssemblerSupportedPattern$CraftingGridAccessor, $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type} from "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern$CraftingGridAccessor"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$IPatternDetails$PatternInputSink, $IPatternDetails$PatternInputSink$Type} from "packages/appeng/api/crafting/$IPatternDetails$PatternInputSink"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$IPatternDetails$IInput, $IPatternDetails$IInput$Type} from "packages/appeng/api/crafting/$IPatternDetails$IInput"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export interface $IMolecularAssemblerSupportedPattern extends $IPatternDetails {

 "isSlotEnabled"(arg0: integer): boolean
 "isItemValid"(arg0: integer, arg1: $AEItemKey$Type, arg2: $Level$Type): boolean
 "fillCraftingGrid"(arg0: ($KeyCounter$Type)[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type): void
 "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
 "supportsPushInputsToExternalInventory"(): boolean
 "assemble"(arg0: $Container$Type, arg1: $Level$Type): $ItemStack
 "getDefinition"(): $AEItemKey
 "getInputs"(): ($IPatternDetails$IInput)[]
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$Type)[], arg1: $IPatternDetails$PatternInputSink$Type): void
 "getPrimaryOutput"(): $GenericStack
 "getOutputs"(): ($GenericStack)[]
}

export namespace $IMolecularAssemblerSupportedPattern {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$Type = ($IMolecularAssemblerSupportedPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMolecularAssemblerSupportedPattern_ = $IMolecularAssemblerSupportedPattern$Type;
}}
declare module "packages/appeng/blockentity/$AEBaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ISegmentedInventory, $ISegmentedInventory$Type} from "packages/appeng/api/inventories/$ISegmentedInventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AEBaseBlockEntity extends $BlockEntity implements $Nameable, $ISegmentedInventory, $Clearable {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setName"(arg0: string): void
public "disassembleWithWrench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockHitResult$Type, arg3: $ItemStack$Type): $InteractionResult
public static "registerBlockEntityItem"(arg0: $BlockEntityType$Type<(any)>, arg1: $Item$Type): void
public "getName"(): $Component
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "setBlockState"(arg0: $BlockState$Type): void
public "getModelData"(): $ModelData
public "getCustomName"(): $Component
public "markForUpdate"(): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getReadyInvoked"(): byte
public "getQueuedForReady"(): byte
public "getOrientation"(): $BlockOrientation
public "notLoaded"(): boolean
public "getGlobalPos"(): $GlobalPos
public "getTop"(): $Direction
public "loadTag"(arg0: $CompoundTag$Type): void
public "getFront"(): $Direction
public "onReady"(): void
public "isClientSide"(): boolean
public "getRenderBoundingBox"(): $AABB
public "saveChanges"(): void
public "getBlockEntity"(): $BlockEntity
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "clearContent"(): void
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "name"(): $Component
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
set "blockState"(value: $BlockState$Type)
get "modelData"(): $ModelData
get "customName"(): $Component
get "readyInvoked"(): byte
get "queuedForReady"(): byte
get "orientation"(): $BlockOrientation
get "globalPos"(): $GlobalPos
get "top"(): $Direction
get "front"(): $Direction
get "clientSide"(): boolean
get "renderBoundingBox"(): $AABB
get "blockEntity"(): $BlockEntity
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseBlockEntity$Type = ($AEBaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseBlockEntity_ = $AEBaseBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/grid/$AENetworkBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$Type} from "packages/appeng/me/helpers/$IGridConnectedBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AENetworkBlockEntity extends $AEBaseBlockEntity implements $IGridConnectedBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "getMainNode"(): $IManagedGridNode
public "setOwner"(arg0: $Player$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
public "saveChanges"(): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "getActionableNode"(): $IGridNode
public static "tryClear"(arg0: any): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkBlockEntity$Type = ($AENetworkBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkBlockEntity_ = $AENetworkBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$ServerTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerTickingBlockEntity {

 "serverTick"(): void

(): void
}

export namespace $ServerTickingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickingBlockEntity$Type = ($ServerTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerTickingBlockEntity_ = $ServerTickingBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/$AEBaseInvBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AEBaseInvBlockEntity extends $AEBaseBlockEntity implements $InternalInventoryHost {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getInternalInventory"(): $InternalInventory
public "m_183515_"(arg0: $CompoundTag$Type): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "clearContent"(): void
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseInvBlockEntity$Type = ($AEBaseInvBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseInvBlockEntity_ = $AEBaseInvBlockEntity$Type;
}}
declare module "packages/appeng/blockentity/crafting/$IMolecularAssemblerSupportedPattern$CraftingGridAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {

 "set"(arg0: integer, arg1: $ItemStack$Type): void

(arg0: integer, arg1: $ItemStack$Type): void
}

export namespace $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type = ($IMolecularAssemblerSupportedPattern$CraftingGridAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_ = $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$Type;
}}
declare module "packages/appeng/blockentity/misc/$CellWorkbenchBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$IConfigInvHost, $IConfigInvHost$Type} from "packages/appeng/helpers/$IConfigInvHost"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"

export class $CellWorkbenchBlockEntity extends $AEBaseBlockEntity implements $IConfigurableObject, $IUpgradeableObject, $InternalInventoryHost, $IConfigInvHost {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "copy"(arg0: $GenericStackInv$Type, arg1: $GenericStackInv$Type): void
public "getCell"(): $ICellWorkbenchItem
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getConfig"(): $GenericStackInv
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "clearContent"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "isClientSide"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "cell"(): $ICellWorkbenchItem
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "config"(): $GenericStackInv
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellWorkbenchBlockEntity$Type = ($CellWorkbenchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellWorkbenchBlockEntity_ = $CellWorkbenchBlockEntity$Type;
}}
