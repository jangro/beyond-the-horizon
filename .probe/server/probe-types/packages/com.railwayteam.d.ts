declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/be/$CRBogeyBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$AbstractBogeyBlockEntity, $AbstractBogeyBlockEntity$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CRBogeyBlockEntity extends $AbstractBogeyBlockEntity implements $IHaveGoggleInformation {
static readonly "BOGEY_STYLE_KEY": string
static readonly "BOGEY_DATA_KEY": string
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getDefaultStyle"(): $BogeyStyle
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CRBogeyBlockEntity$Type = ($CRBogeyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CRBogeyBlockEntity_ = $CRBogeyBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchConstraint" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TrackSwitchBlock$SwitchConstraint extends $Enum<($TrackSwitchBlock$SwitchConstraint)> {
static readonly "NONE": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_RIGHT": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_LEFT": $TrackSwitchBlock$SwitchConstraint


public static "values"(): ($TrackSwitchBlock$SwitchConstraint)[]
public static "valueOf"(name: string): $TrackSwitchBlock$SwitchConstraint
public "canGoLeft"(): boolean
public "canGoRight"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlock$SwitchConstraint$Type = (("to_left") | ("to_right") | ("none")) | ($TrackSwitchBlock$SwitchConstraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlock$SwitchConstraint_ = $TrackSwitchBlock$SwitchConstraint$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IOccupiedCouplers" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IOccupiedCouplers {

 "railways$getOccupiedCouplers"(): $Set<($UUID)>

(): $Set<($UUID)>
}

export namespace $IOccupiedCouplers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOccupiedCouplers$Type = ($IOccupiedCouplers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOccupiedCouplers_ = $IOccupiedCouplers$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlockEntity" {
import {$DyeableBlockEntity, $DyeableBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$DyeableBlockEntity"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$TrackTargetingBehaviour, $TrackTargetingBehaviour$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackBuffer, $TrackBuffer$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBuffer"
import {$ITransformableBlockEntity, $ITransformableBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlockEntity"

export class $TrackBufferBlockEntity extends $DyeableBlockEntity implements $ITransformableBlockEntity {
 "edgePoint": $TrackTargetingBehaviour<($TrackBuffer)>
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "transform"(transform: $StructureTransform$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBufferBlockEntity$Type = ($TrackBufferBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackBufferBlockEntity_ = $TrackBufferBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/$DieselSmokeStackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DieselSmokeStackBlockEntity, $DieselSmokeStackBlockEntity$Type} from "packages/com/railwayteam/railways/content/smokestack/block/be/$DieselSmokeStackBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapeWrapper, $ShapeWrapper$Type} from "packages/com/railwayteam/railways/util/$ShapeWrapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractSmokeStackBlock, $AbstractSmokeStackBlock$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$AbstractSmokeStackBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$SmokestackStyle, $SmokestackStyle$Type} from "packages/com/railwayteam/railways/content/smokestack/$SmokestackStyle"

export class $DieselSmokeStackBlock extends $AbstractSmokeStackBlock<($DieselSmokeStackBlockEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, shape: $ShapeWrapper$Type)

public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getBlockEntityClass"(): $Class<($DieselSmokeStackBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityClass"(): $Class<($DieselSmokeStackBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieselSmokeStackBlock$Type = ($DieselSmokeStackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DieselSmokeStackBlock_ = $DieselSmokeStackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/client/$AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorWalkAnimationState {

 "setSpeedOld"(arg0: float): void
 "setPosition"(arg0: float): void
 "getSpeedOld"(): float
}

export namespace $AccessorWalkAnimationState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWalkAnimationState$Type = ($AccessorWalkAnimationState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorWalkAnimationState_ = $AccessorWalkAnimationState$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IDeployAnywayBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDeployAnywayBlockItem {

}

export namespace $IDeployAnywayBlockItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeployAnywayBlockItem$Type = ($IDeployAnywayBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDeployAnywayBlockItem_ = $IDeployAnywayBlockItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/headstock/$HeadstockStyle" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockStateBlockItemGroup$IStyle, $BlockStateBlockItemGroup$IStyle$Type} from "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$IStyle"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HeadstockStyle extends $Enum<($HeadstockStyle)> implements $StringRepresentable, $BlockStateBlockItemGroup$IStyle<(boolean)> {
static readonly "PLAIN": $HeadstockStyle
static readonly "BUFFER": $HeadstockStyle
static readonly "LINK": $HeadstockStyle
static readonly "LINKLESS": $HeadstockStyle
static readonly "KNUCKLE": $HeadstockStyle
static readonly "KNUCKLE_SPLIT": $HeadstockStyle
static readonly "SCREWLINK": $HeadstockStyle


public static "values"(): ($HeadstockStyle)[]
public static "valueOf"(name: string): $HeadstockStyle
public "getSerializedName"(): string
public "getLangName"(copycat: boolean): string
public "getModel"(context: boolean): $ResourceLocation
public "getModel"(copycat: boolean, upsideDown: boolean): $ResourceLocation
public "getBlockId"(context: boolean): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadstockStyle$Type = (("plain") | ("knuckle_split") | ("link") | ("buffer") | ("linkless") | ("knuckle") | ("screwlink")) | ($HeadstockStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadstockStyle_ = $HeadstockStyle$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/forge/$TrackCouplerBlockImpl" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TrackCouplerBlock, $TrackCouplerBlock$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackCouplerBlockEntity$AllowedOperationMode, $TrackCouplerBlockEntity$AllowedOperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$AllowedOperationMode"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrackCouplerBlockImpl extends $TrackCouplerBlock {
static readonly "POWERED": $BooleanProperty
static readonly "MODE": $EnumProperty<($TrackCouplerBlockEntity$AllowedOperationMode)>
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


public static "create"(properties: $BlockBehaviour$Properties$Type): $TrackCouplerBlock
public "canConnectRedstone"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "shouldCheckWeakPower"(state: $BlockState$Type, level: $SignalGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockImpl$Type = ($TrackCouplerBlockImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockImpl_ = $TrackCouplerBlockImpl$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitch" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState"
import {$EdgePointType, $EdgePointType$Type} from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TrackGraph, $TrackGraph$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"
import {$SingleBlockEntityEdgePoint, $SingleBlockEntityEdgePoint$Type} from "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint"
import {$DimensionPalette, $DimensionPalette$Type} from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrackSwitch extends $SingleBlockEntityEdgePoint {
 "blockEntityDimension": $ResourceKey<($Level)>
 "blockEntityPos": $BlockPos
 "id": $UUID
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "position": double

constructor()

public "canCoexistWith"(otherType: $EdgePointType$Type<(any)>, front: boolean): boolean
public "blockEntityAdded"(tile: $BlockEntity$Type, front: boolean): void
public "isLocked"(): boolean
public "write"(buffer: $FriendlyByteBuf$Type, dimensions: $DimensionPalette$Type): void
public "write"(nbt: $CompoundTag$Type, dimensions: $DimensionPalette$Type): void
public "read"(buffer: $FriendlyByteBuf$Type, dimensions: $DimensionPalette$Type): void
public "read"(nbt: $CompoundTag$Type, migration: boolean, dimensions: $DimensionPalette$Type): void
public "isAutomatic"(): boolean
public "getType"(): $EdgePointType<(any)>
public "onRemoved"(graph: $TrackGraph$Type): void
public "tick"(graph: $TrackGraph$Type, preTrains: boolean): void
public "getTargetState"(loc: $TrackNodeLocation$Type): $TrackSwitchBlock$SwitchState
public "hasLeftExit"(): boolean
public "setSwitchState"(state: $TrackSwitchBlock$SwitchState$Type): boolean
public "updateEdges"(graph: $TrackGraph$Type): void
public "getSwitchState"(): $TrackSwitchBlock$SwitchState
public "getSwitchTarget"(): $TrackNodeLocation
public "trySetSwitchState"(state: $TrackSwitchBlock$SwitchState$Type): boolean
public "hasStraightExit"(): boolean
public "hasRightExit"(): boolean
public "setEdgesActive"(graph: $TrackGraph$Type): void
public "shouldAutoTrainsSwitch"(): boolean
public static "getSelectionPriority"(): integer
get "locked"(): boolean
get "automatic"(): boolean
get "type"(): $EdgePointType<(any)>
set "switchState"(value: $TrackSwitchBlock$SwitchState$Type)
get "switchState"(): $TrackSwitchBlock$SwitchState
get "switchTarget"(): $TrackNodeLocation
set "edgesActive"(value: $TrackGraph$Type)
get "selectionPriority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitch$Type = ($TrackSwitch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitch_ = $TrackSwitch$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IMonorailBezier" {
import {$IMonorailBezier$MonorailAngles, $IMonorailBezier$MonorailAngles$Type} from "packages/com/railwayteam/railways/mixin_interfaces/$IMonorailBezier$MonorailAngles"

export interface $IMonorailBezier {

 "getBakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]

(): ($IMonorailBezier$MonorailAngles)[]
}

export namespace $IMonorailBezier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMonorailBezier$Type = ($IMonorailBezier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMonorailBezier_ = $IMonorailBezier$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$IStyle" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BlockStateBlockItemGroup$IStyle<T> {

 "getLangName"(arg0: T): string
 "getModel"(arg0: T): $ResourceLocation
 "getBlockId"(arg0: T): string
}

export namespace $BlockStateBlockItemGroup$IStyle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateBlockItemGroup$IStyle$Type<T> = ($BlockStateBlockItemGroup$IStyle<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateBlockItemGroup$IStyle_<T> = $BlockStateBlockItemGroup$IStyle$Type<(T)>;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/invisible/$InvisibleBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Carriage, $Carriage$Type} from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InvisibleBogeyBlockEntity, $InvisibleBogeyBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/invisible/$InvisibleBogeyBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$AbstractBogeyBlock, $AbstractBogeyBlock$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"

export class $InvisibleBogeyBlock extends $AbstractBogeyBlock<($InvisibleBogeyBlockEntity)> implements $IBE<($InvisibleBogeyBlockEntity)>, $ProperWaterloggedBlock, $ISpecialBlockItemRequirement {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "isOnIncompatibleTrack"(carriage: $Carriage$Type, leading: boolean): boolean
public "getConnectorAnchorOffset"(): $Vec3
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getBlockEntityClass"(): $Class<($InvisibleBogeyBlockEntity)>
public "getDefaultStyle"(): $BogeyStyle
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTrackType"(style: $BogeyStyle$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public "getValidPathfindingTypes"(style: $BogeyStyle$Type): $Set<($TrackMaterial$TrackType)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
get "blockEntityClass"(): $Class<($InvisibleBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
get "blockEntityType"(): $BlockEntityType<(any)>
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleBogeyBlock$Type = ($InvisibleBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibleBogeyBlock_ = $InvisibleBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$TrackCouplerBlockEntity, $TrackCouplerBlockEntity$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$TrackCouplerBlockEntity$AllowedOperationMode, $TrackCouplerBlockEntity$AllowedOperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$AllowedOperationMode"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TrackCouplerBlock extends $Block implements $IBE<($TrackCouplerBlockEntity)>, $IWrenchable {
static readonly "POWERED": $BooleanProperty
static readonly "MODE": $EnumProperty<($TrackCouplerBlockEntity$AllowedOperationMode)>
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


public static "create"(properties: $BlockBehaviour$Properties$Type): $TrackCouplerBlock
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pBlock: $Block$Type, pFromPos: $BlockPos$Type, pIsMoving: boolean): void
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "getBlockEntityClass"(): $Class<($TrackCouplerBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "tick"(pState: $BlockState$Type, pLevel: $ServerLevel$Type, pPos: $BlockPos$Type, pRand: $RandomSource$Type): void
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($TrackCouplerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($TrackCouplerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($TrackCouplerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TrackCouplerBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($TrackCouplerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlock$Type = ($TrackCouplerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlock_ = $TrackCouplerBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/fuel/tank/$FuelTankBlock$Shape" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FuelTankBlock$Shape extends $Enum<($FuelTankBlock$Shape)> implements $StringRepresentable {
static readonly "PLAIN": $FuelTankBlock$Shape
static readonly "WINDOW": $FuelTankBlock$Shape
static readonly "WINDOW_NW": $FuelTankBlock$Shape
static readonly "WINDOW_SW": $FuelTankBlock$Shape
static readonly "WINDOW_NE": $FuelTankBlock$Shape
static readonly "WINDOW_SE": $FuelTankBlock$Shape


public static "values"(): ($FuelTankBlock$Shape)[]
public static "valueOf"(name: string): $FuelTankBlock$Shape
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankBlock$Shape$Type = (("window_se") | ("window_sw") | ("plain") | ("window_ne") | ("window_nw") | ("window")) | ($FuelTankBlock$Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelTankBlock$Shape_ = $FuelTankBlock$Shape$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStrictSignalTrain {

 "railways$setStrictSignals"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $IStrictSignalTrain {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStrictSignalTrain$Type = ($IStrictSignalTrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStrictSignalTrain_ = $IStrictSignalTrain$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/large/$LargeCreateStyle060BogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$LargeBogeyBlock, $LargeBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/size/$LargeBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LargeCreateStyle060BogeyBlock extends $LargeBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle060BogeyBlock$Type = ($LargeCreateStyle060BogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCreateStyle060BogeyBlock_ = $LargeCreateStyle060BogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$TrackSwitch, $TrackSwitch$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitch"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TrackSwitchBlock$SwitchConstraint, $TrackSwitchBlock$SwitchConstraint$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchConstraint"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TravellingPoint$SteerDirection, $TravellingPoint$SteerDirection$Type} from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$SteerDirection"

export class $TrackSwitchBlock$SwitchState extends $Enum<($TrackSwitchBlock$SwitchState)> implements $StringRepresentable {
static readonly "NORMAL": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_LEFT": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_RIGHT": $TrackSwitchBlock$SwitchState


public "nextStateFor"(sw: $TrackSwitch$Type, constraint: $TrackSwitchBlock$SwitchConstraint$Type): $TrackSwitchBlock$SwitchState
public static "fromSteerDirection"(direction: $TravellingPoint$SteerDirection$Type, forward: boolean): $TrackSwitchBlock$SwitchState
public static "values"(): ($TrackSwitchBlock$SwitchState)[]
public static "valueOf"(name: string): $TrackSwitchBlock$SwitchState
public "getSerializedName"(): string
public "nextStateForPonder"(constraint: $TrackSwitchBlock$SwitchConstraint$Type): $TrackSwitchBlock$SwitchState
public "canSwitchTo"(next: $TrackSwitchBlock$SwitchState$Type, constraint: $TrackSwitchBlock$SwitchConstraint$Type): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlock$SwitchState$Type = (("normal") | ("reverse_right") | ("reverse_left")) | ($TrackSwitchBlock$SwitchState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlock$SwitchState_ = $TrackSwitchBlock$SwitchState$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/remote_lens/$RemoteLensItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RemoteLensItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(pStack: $ItemStack$Type, pPlayer: $Player$Type, pInteractionTarget: $LivingEntity$Type, pUsedHand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteLensItem$Type = ($RemoteLensItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoteLensItem_ = $RemoteLensItem$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorTrain {

 "railways$setStress"(arg0: (double)[]): void
 "railways$getStress"(): (double)[]
}

export namespace $AccessorTrain {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTrain$Type = ($AccessorTrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorTrain_ = $AccessorTrain$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/narrow_gauge/$NarrowGaugeTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$TrackBlock, $TrackBlock$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $NarrowGaugeTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "HAS_BE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $TrackMaterial$Type)

public "getShape"(state: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(state: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "walkConnectedTracks"(arg0: $BlockGetter$Type, arg1: $TrackNodeLocation$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$Type, arg1: $Collection$Type<($TrackNodeLocation$DiscoveredLocation$Type)>, arg2: $BiFunction$Type<(double), (boolean), ($Vec3$Type)>, arg3: $Function$Type<(boolean), ($Vec3$Type)>, arg4: $Function$Type<(boolean), ($ResourceKey$Type<($Level$Type)>)>, arg5: $Function$Type<($Vec3$Type), (integer)>, arg6: $Vec3$Type, arg7: $BezierConnection$Type, arg8: $BiFunction$Type<(boolean), ($Vec3$Type), ($TrackMaterial$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type, arg2: $TrackMaterial$Type): $TrackMaterial
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowGaugeTrackBlock$Type = ($NarrowGaugeTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NarrowGaugeTrackBlock_ = $NarrowGaugeTrackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium/$Medium404TrailingBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $Medium404TrailingBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Medium404TrailingBogeyBlock$Type = ($Medium404TrailingBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Medium404TrailingBogeyBlock_ = $Medium404TrailingBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/be/$DieselSmokeStackBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISpeedNotifiable, $ISpeedNotifiable$Type} from "packages/com/railwayteam/railways/content/smokestack/$ISpeedNotifiable"

export class $DieselSmokeStackBlockEntity extends $SmartBlockEntity implements $ISpeedNotifiable {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getFanRotation"(rpm: double): double
public "getRpm"(partialTicks: float): double
public "tick"(): void
public "notifySpeed"(speed: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieselSmokeStackBlockEntity$Type = ($DieselSmokeStackBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DieselSmokeStackBlockEntity_ = $DieselSmokeStackBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorNavigation" {
import {$TrackNode, $TrackNode$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export interface $AccessorNavigation {

 "getCurrentPath"(): $List<($Couple<($TrackNode)>)>

(): $List<($Couple<($TrackNode)>)>
}

export namespace $AccessorNavigation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorNavigation$Type = ($AccessorNavigation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorNavigation_ = $AccessorNavigation$Type;
}}
declare module "packages/com/railwayteam/railways/forge/mixin/$ContainerLevelAccessMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerLevelAccessMixin {

}

export namespace $ContainerLevelAccessMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerLevelAccessMixin$Type = ($ContainerLevelAccessMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerLevelAccessMixin_ = $ContainerLevelAccessMixin$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCoupler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TrackGraph, $TrackGraph$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import {$Train, $Train$Type} from "packages/com/simibubi/create/content/trains/entity/$Train"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"
import {$SingleBlockEntityEdgePoint, $SingleBlockEntityEdgePoint$Type} from "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint"
import {$DimensionPalette, $DimensionPalette$Type} from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrackCoupler extends $SingleBlockEntityEdgePoint {
 "blockEntityDimension": $ResourceKey<($Level)>
 "blockEntityPos": $BlockPos
 "id": $UUID
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "position": double

constructor()

public "blockEntityAdded"(tile: $BlockEntity$Type, front: boolean): void
public "getCurrentTrain"(): $UUID
public "write"(buffer: $FriendlyByteBuf$Type, dimensions: $DimensionPalette$Type): void
public "write"(nbt: $CompoundTag$Type, dimensions: $DimensionPalette$Type): void
public "read"(nbt: $CompoundTag$Type, migration: boolean, dimensions: $DimensionPalette$Type): void
public "read"(buffer: $FriendlyByteBuf$Type, dimensions: $DimensionPalette$Type): void
public "tick"(graph: $TrackGraph$Type, preTrains: boolean): void
public "keepAlive"(train: $Train$Type): void
public "isActivated"(): boolean
get "currentTrain"(): $UUID
get "activated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCoupler$Type = ($TrackCoupler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCoupler_ = $TrackCoupler$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SmokeStackBlockEntity, $SmokeStackBlockEntity$Type} from "packages/com/railwayteam/railways/content/smokestack/block/be/$SmokeStackBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapeWrapper, $ShapeWrapper$Type} from "packages/com/railwayteam/railways/util/$ShapeWrapper"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SmokeStackBlock$SmokeStackType, $SmokeStackBlock$SmokeStackType$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock$SmokeStackType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractSmokeStackBlock, $AbstractSmokeStackBlock$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$AbstractSmokeStackBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SmokestackStyle, $SmokestackStyle$Type} from "packages/com/railwayteam/railways/content/smokestack/$SmokestackStyle"

export class $SmokeStackBlock extends $AbstractSmokeStackBlock<($SmokeStackBlockEntity)> {
readonly "type": $SmokeStackBlock$SmokeStackType
 "createsStationarySmoke": boolean
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $SmokeStackBlock$SmokeStackType$Type, shape: $ShapeWrapper$Type, createsStationarySmoke: boolean, variant: string)

public static "makeParticlesStationary"(level: $Level$Type, pos: $BlockPos$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type): void
public "blockEntityAnimateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "makeParticles"(level: $Level$Type, pos: $Vec3$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type, speedMultiplier: double, stationary: boolean, color: $DyeColor$Type, small: boolean, isSoul: boolean): void
public static "makeParticles"(level: $Level$Type, pos: $Vec3$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type, speedMultiplier: double, stationary: boolean, color: $DyeColor$Type, small: boolean): void
public static "makeParticles"(level: $Level$Type, pos: $Vec3$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type, speedMultiplier: double, stationary: boolean, color: $DyeColor$Type): void
public static "makeParticles"(level: $Level$Type, pos: $Vec3$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type): void
public static "makeParticles"(level: $Level$Type, pos: $Vec3$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type, speedMultiplier: double): void
public static "makeParticles"(level: $Level$Type, pos: $Vec3$Type, isSignalFire: boolean, spawnExtraSmoke: boolean, spawnOffset: $Vec3$Type, spawnDelta: $Vec3$Type, speedMultiplier: double, stationary: boolean): void
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($SmokeStackBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityClass"(): $Class<($SmokeStackBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeStackBlock$Type = ($SmokeStackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokeStackBlock_ = $SmokeStackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/palettes/boiler/$BoilerBlock$Style" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BoilerBlock$Style extends $Enum<($BoilerBlock$Style)> implements $StringRepresentable {
static readonly "GULLET": $BoilerBlock$Style
static readonly "SMOKEBOX": $BoilerBlock$Style


public static "values"(): ($BoilerBlock$Style)[]
public static "valueOf"(name: string): $BoilerBlock$Style
public "getSerializedName"(): string
public "getTexture"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "texture"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerBlock$Style$Type = (("smokebox") | ("gullet")) | ($BoilerBlock$Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoilerBlock$Style_ = $BoilerBlock$Style$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$InvisibleMonoBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AbstractMonoBogeyBlock, $AbstractMonoBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$AbstractMonoBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InvisibleMonoBogeyBlockEntity, $InvisibleMonoBogeyBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$InvisibleMonoBogeyBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Carriage, $Carriage$Type} from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"

export class $InvisibleMonoBogeyBlock extends $AbstractMonoBogeyBlock<($InvisibleMonoBogeyBlockEntity)> {
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "isOnIncompatibleTrack"(carriage: $Carriage$Type, leading: boolean): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($InvisibleMonoBogeyBlockEntity)>
public "getDefaultStyle"(): $BogeyStyle
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getValidPathfindingTypes"(style: $BogeyStyle$Type): $Set<($TrackMaterial$TrackType)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "blockEntityClass"(): $Class<($InvisibleMonoBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleMonoBogeyBlock$Type = ($InvisibleMonoBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibleMonoBogeyBlock_ = $InvisibleMonoBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/fuel/tank/$FuelTankBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FuelTankBlockEntity, $FuelTankBlockEntity$Type} from "packages/com/railwayteam/railways/content/fuel/tank/$FuelTankBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FuelTankBlock$Shape, $FuelTankBlock$Shape$Type} from "packages/com/railwayteam/railways/content/fuel/tank/$FuelTankBlock$Shape"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FuelTankBlock extends $Block implements $IWrenchable, $IBE<($FuelTankBlockEntity)> {
static readonly "TOP": $BooleanProperty
static readonly "BOTTOM": $BooleanProperty
static readonly "SHAPE": $EnumProperty<($FuelTankBlock$Shape)>
static readonly "SILENCED_METAL": $SoundType
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, moved: boolean): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getBlockSupportShape"(pState: $BlockState$Type, pReader: $BlockGetter$Type, pPos: $BlockPos$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($FuelTankBlockEntity)>
public "getSoundType"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "isTank"(state: $BlockState$Type): boolean
public "getLightEmission"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($FuelTankBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($FuelTankBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($FuelTankBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $FuelTankBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($FuelTankBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankBlock$Type = ($FuelTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelTankBlock_ = $FuelTankBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorOrientedContraptionEntity" {
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"

export interface $AccessorOrientedContraptionEntity {

 "railways$makeStructureTransform"(): $StructureTransform

(): $StructureTransform
}

export namespace $AccessorOrientedContraptionEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorOrientedContraptionEntity$Type = ($AccessorOrientedContraptionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorOrientedContraptionEntity_ = $AccessorOrientedContraptionEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorToolboxBlockEntity" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolboxInventory, $ToolboxInventory$Type} from "packages/com/simibubi/create/content/equipment/toolbox/$ToolboxInventory"
import {$WeakHashMap, $WeakHashMap$Type} from "packages/java/util/$WeakHashMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorToolboxBlockEntity {

 "getConnectedPlayers"(): $Map<(integer), ($WeakHashMap<($Player), (integer)>)>
 "getInventory"(): $ToolboxInventory
}

export namespace $AccessorToolboxBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorToolboxBlockEntity$Type = ($AccessorToolboxBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorToolboxBlockEntity_ = $AccessorToolboxBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$DyeableBlockEntity" {
import {$IDyedBuffer, $IDyedBuffer$Type} from "packages/com/railwayteam/railways/content/buffer/$IDyedBuffer"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DyeableBlockEntity extends $SmartBlockEntity implements $IDyedBuffer {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getColor"(): $DyeColor
public "applyDyeIfValid"(stack: $ItemStack$Type): $InteractionResult
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableBlockEntity$Type = ($DyeableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableBlockEntity_ = $DyeableBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IMonorailBezier$MonorailAngles" {
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export class $IMonorailBezier$MonorailAngles {
 "beam": $PoseStack$Pose
 "beamCaps": $Couple<($PoseStack$Pose)>
 "lightPosition": $BlockPos

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMonorailBezier$MonorailAngles$Type = ($IMonorailBezier$MonorailAngles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMonorailBezier$MonorailAngles_ = $IMonorailBezier$MonorailAngles$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/$ConductorCapItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConductorCapItem extends $ArmorItem {
readonly "color": $DyeColor
readonly "textureId": $ResourceLocation
readonly "textureStr": string
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


public static "create"(props: $Item$Properties$Type, color: $DyeColor$Type): $ConductorCapItem
public "useOn"(ctx: $UseOnContext$Type): $InteractionResult
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorCapItem$Type = ($ConductorCapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConductorCapItem_ = $ConductorCapItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/semaphore/$SemaphoreBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$SemaphoreBlockEntity, $SemaphoreBlockEntity$Type} from "packages/com/railwayteam/railways/content/semaphore/$SemaphoreBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SemaphoreBlock extends $HorizontalDirectionalBlock implements $IBE<($SemaphoreBlockEntity)>, $IWrenchable {
static readonly "placementHelperId": integer
static readonly "girderPlacementHelperId": integer
static readonly "FLIPPED": $BooleanProperty
static readonly "FULL": $BooleanProperty
static readonly "UPSIDE_DOWN": $BooleanProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "getBlockEntityClass"(): $Class<($SemaphoreBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SemaphoreBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SemaphoreBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SemaphoreBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SemaphoreBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($SemaphoreBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreBlock$Type = ($SemaphoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemaphoreBlock_ = $SemaphoreBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/monorail/$MonorailTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TrackBlock, $TrackBlock$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MonorailTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "HAS_BE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $TrackMaterial$Type)

public "getShape"(state: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "prepareAssemblyOverlay"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, direction: $Direction$Type, ms: $PoseStack$Type): $PartialModel
public "getBogeyAnchor"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public "getInteractionShape"(state: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "walkConnectedTracks"(arg0: $BlockGetter$Type, arg1: $TrackNodeLocation$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$Type, arg1: $Collection$Type<($TrackNodeLocation$DiscoveredLocation$Type)>, arg2: $BiFunction$Type<(double), (boolean), ($Vec3$Type)>, arg3: $Function$Type<(boolean), ($Vec3$Type)>, arg4: $Function$Type<(boolean), ($ResourceKey$Type<($Level$Type)>)>, arg5: $Function$Type<($Vec3$Type), (integer)>, arg6: $Vec3$Type, arg7: $BezierConnection$Type, arg8: $BiFunction$Type<(boolean), ($Vec3$Type), ($TrackMaterial$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type, arg2: $TrackMaterial$Type): $TrackMaterial
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonorailTrackBlock$Type = ($MonorailTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonorailTrackBlock_ = $MonorailTrackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/forge/$ConductorCapItemImpl" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ConductorCapItem, $ConductorCapItem$Type} from "packages/com/railwayteam/railways/content/conductor/$ConductorCapItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ConductorCapItemImpl extends $ConductorCapItem {
readonly "color": $DyeColor
readonly "textureId": $ResourceLocation
readonly "textureStr": string
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


public static "create"(props: $Item$Properties$Type, color: $DyeColor$Type): $ConductorCapItem
public "getArmorTexture"(stack: $ItemStack$Type, entity: $Entity$Type, slot: $EquipmentSlot$Type, type: string): string
public "isEnderMask"(stack: $ItemStack$Type, player: $Player$Type, endermanEntity: $EnderMan$Type): boolean
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorCapItemImpl$Type = ($ConductorCapItemImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConductorCapItemImpl_ = $ConductorCapItemImpl$Type;
}}
declare module "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor" {
import {$ChunkMap$TrackedEntity, $ChunkMap$TrackedEntity$Type} from "packages/net/minecraft/server/level/$ChunkMap$TrackedEntity"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

export interface $ChunkMapAccessor {

 "getEntityMap"(): $Int2ObjectMap<($ChunkMap$TrackedEntity)>

(): $Int2ObjectMap<($ChunkMap$TrackedEntity)>
}

export namespace $ChunkMapAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$Type = ($ChunkMapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMapAccessor_ = $ChunkMapAccessor$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IWaypointableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWaypointableNavigation {

 "railways$isWaypointMode"(): boolean

(): boolean
}

export namespace $IWaypointableNavigation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaypointableNavigation$Type = ($IWaypointableNavigation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaypointableNavigation_ = $IWaypointableNavigation$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorAbstractContraptionEntity" {
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"

export interface $AccessorAbstractContraptionEntity {

 "railways$moveCollidedEntitiesOnDisassembly"(arg0: $StructureTransform$Type): void
 "railways$setSkipActorStop"(arg0: boolean): void
}

export namespace $AccessorAbstractContraptionEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractContraptionEntity$Type = ($AccessorAbstractContraptionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorAbstractContraptionEntity_ = $AccessorAbstractContraptionEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium/$MediumTripleWheelBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $MediumTripleWheelBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumTripleWheelBogeyBlock$Type = ($MediumTripleWheelBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MediumTripleWheelBogeyBlock_ = $MediumTripleWheelBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageConductors" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ICarriageConductors {

 "railways$getControllingConductors"(): $List<($UUID)>

(): $List<($UUID)>
}

export namespace $ICarriageConductors {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICarriageConductors$Type = ($ICarriageConductors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICarriageConductors_ = $ICarriageConductors$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorBlockEntity" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $AccessorBlockEntity {

 "setWorldPosition"(arg0: $BlockPos$Type): void

(arg0: $BlockPos$Type): void
}

export namespace $AccessorBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBlockEntity$Type = ($AccessorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBlockEntity_ = $AccessorBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IFuelInventory" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CombinedTankWrapper, $CombinedTankWrapper$Type} from "packages/com/simibubi/create/foundation/fluid/$CombinedTankWrapper"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MountedFluidStorage, $MountedFluidStorage$Type} from "packages/com/simibubi/create/content/contraptions/$MountedFluidStorage"

export interface $IFuelInventory {

 "railways$getFuelFluids"(): $CombinedTankWrapper
 "railways$setFuelFluids"(arg0: $CombinedTankWrapper$Type): void
 "railways$setFluidFuelStorage"(arg0: $Map$Type<($BlockPos$Type), ($MountedFluidStorage$Type)>): void
 "railways$getFluidFuelStorage"(): $Map<($BlockPos), ($MountedFluidStorage)>
}

export namespace $IFuelInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFuelInventory$Type = ($IFuelInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFuelInventory_ = $IFuelInventory$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/generic_crossing/$TrackShapeLookup$GenericCrossingData" {
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"

export class $TrackShapeLookup$GenericCrossingData extends $Record {

constructor(merged: $Pair$Type<($TrackShape$Type), (boolean)>, existingMaterial: $TrackMaterial$Type, overlayMaterial: $TrackMaterial$Type)

public "existingMaterial"(): $TrackMaterial
public "overlayMaterial"(): $TrackMaterial
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "merged"(): $Pair<($TrackShape), (boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackShapeLookup$GenericCrossingData$Type = ($TrackShapeLookup$GenericCrossingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackShapeLookup$GenericCrossingData_ = $TrackShapeLookup$GenericCrossingData$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$AnimatedTextureDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimatedTextureDuck {

 "railways$uploadWithVisibility"(): void

(): void
}

export namespace $AnimatedTextureDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedTextureDuck$Type = ($AnimatedTextureDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedTextureDuck_ = $AnimatedTextureDuck$Type;
}}
declare module "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor$TrackedEntityAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$Type} from "packages/net/minecraft/server/network/$ServerPlayerConnection"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $ChunkMapAccessor$TrackedEntityAccessor {

 "getSeenBy"(): $Set<($ServerPlayerConnection)>

(): $Set<($ServerPlayerConnection)>
}

export namespace $ChunkMapAccessor$TrackedEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$TrackedEntityAccessor$Type = ($ChunkMapAccessor$TrackedEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMapAccessor$TrackedEntityAccessor_ = $ChunkMapAccessor$TrackedEntityAccessor$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$WoodVariantTrackBufferBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IMaterialAdaptingBuffer, $IMaterialAdaptingBuffer$Type} from "packages/com/railwayteam/railways/content/buffer/$IMaterialAdaptingBuffer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TrackTargetingBehaviour, $TrackTargetingBehaviour$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackBufferBlockEntity, $TrackBufferBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlockEntity"
import {$TrackBuffer, $TrackBuffer$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBuffer"

export class $WoodVariantTrackBufferBlockEntity extends $TrackBufferBlockEntity implements $IMaterialAdaptingBuffer {
 "edgePoint": $TrackTargetingBehaviour<($TrackBuffer)>
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "applyMaterialIfValid"(stack: $ItemStack$Type): $InteractionResult
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
get "material"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodVariantTrackBufferBlockEntity$Type = ($WoodVariantTrackBufferBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodVariantTrackBufferBlockEntity_ = $WoodVariantTrackBufferBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ILimited" {
import {$StationEditPacket, $StationEditPacket$Type} from "packages/com/simibubi/create/content/trains/station/$StationEditPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILimited {

 "setLimitEnabled"(arg0: boolean): void
 "isLimitEnabled"(): boolean
}

export namespace $ILimited {
function makeLimitEnabledPacket(pos: $BlockPos$Type, limitEnabled: boolean): $StationEditPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILimited$Type = ($ILimited);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILimited_ = $ILimited$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/$ISpeedNotifiable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpeedNotifiable {

 "notifySpeed"(arg0: double): void

(arg0: double): void
}

export namespace $ISpeedNotifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpeedNotifiable$Type = ($ISpeedNotifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpeedNotifiable_ = $ISpeedNotifiable$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageBufferDistanceTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICarriageBufferDistanceTracker {

 "railways$getLeadingDistance"(): integer
 "railways$getTrailingDistance"(): integer
 "railways$setTrailingDistance"(arg0: integer): void
 "railways$setLeadingDistance"(arg0: integer): void
}

export namespace $ICarriageBufferDistanceTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICarriageBufferDistanceTracker$Type = ($ICarriageBufferDistanceTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICarriageBufferDistanceTracker_ = $ICarriageBufferDistanceTracker$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICrashAdvancement {

 "railways$awardCrashAdvancements"(): void

(): void
}

export namespace $ICrashAdvancement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrashAdvancement$Type = ($ICrashAdvancement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrashAdvancement_ = $ICrashAdvancement$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/wide/$WideGaugeComicallyLargeBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WideGaugeBogeyBlock, $WideGaugeBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/wide/$WideGaugeBogeyBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WideGaugeComicallyLargeBogeyBlock extends $WideGaugeBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getConnectorAnchorOffset"(): $Vec3
public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideGaugeComicallyLargeBogeyBlock$Type = ($WideGaugeComicallyLargeBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideGaugeComicallyLargeBogeyBlock_ = $WideGaugeComicallyLargeBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/$FacingSmokeStackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapeWrapper, $ShapeWrapper$Type} from "packages/com/railwayteam/railways/util/$ShapeWrapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SmokeStackBlock$SmokeStackType, $SmokeStackBlock$SmokeStackType$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock$SmokeStackType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$SmokeStackBlock, $SmokeStackBlock$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$SmokestackStyle, $SmokestackStyle$Type} from "packages/com/railwayteam/railways/content/smokestack/$SmokestackStyle"

export class $FacingSmokeStackBlock extends $SmokeStackBlock {
static readonly "HORIZONTAL_FACING": $DirectionProperty
readonly "type": $SmokeStackBlock$SmokeStackType
 "createsStationarySmoke": boolean
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $SmokeStackBlock$SmokeStackType$Type, shape: $ShapeWrapper$Type, createsStationarySmoke: boolean, variant: string)

public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacingSmokeStackBlock$Type = ($FacingSmokeStackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacingSmokeStackBlock_ = $FacingSmokeStackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ILimitedGlobalStation" {
import {$ILimited, $ILimited$Type} from "packages/com/railwayteam/railways/mixin_interfaces/$ILimited"
import {$StationEditPacket, $StationEditPacket$Type} from "packages/com/simibubi/create/content/trains/station/$StationEditPacket"
import {$Train, $Train$Type} from "packages/com/simibubi/create/content/trains/entity/$Train"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILimitedGlobalStation extends $ILimited {

 "orDisablingTrain"(arg0: $Train$Type, arg1: $Train$Type): $Train
 "isStationEnabled"(): boolean
 "getDisablingTrain"(): $Train
 "setLimitEnabled"(arg0: boolean): void
 "isLimitEnabled"(): boolean
}

export namespace $ILimitedGlobalStation {
function makeLimitEnabledPacket(pos: $BlockPos$Type, limitEnabled: boolean): $StationEditPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILimitedGlobalStation$Type = ($ILimitedGlobalStation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILimitedGlobalStation_ = $ILimitedGlobalStation$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/$AxisSmokeStackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ShapeWrapper, $ShapeWrapper$Type} from "packages/com/railwayteam/railways/util/$ShapeWrapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SmokeStackBlock$SmokeStackType, $SmokeStackBlock$SmokeStackType$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock$SmokeStackType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$SmokeStackBlock, $SmokeStackBlock$Type} from "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$SmokestackStyle, $SmokestackStyle$Type} from "packages/com/railwayteam/railways/content/smokestack/$SmokestackStyle"

export class $AxisSmokeStackBlock extends $SmokeStackBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
readonly "type": $SmokeStackBlock$SmokeStackType
 "createsStationarySmoke": boolean
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $SmokeStackBlock$SmokeStackType$Type, shape: $ShapeWrapper$Type, createsStationarySmoke: boolean, variant: string)

public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "getRotatedBlockState"(originalState: $BlockState$Type, targetedFace: $Direction$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxisSmokeStackBlock$Type = ($AxisSmokeStackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxisSmokeStackBlock_ = $AxisSmokeStackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/extended_sliding_doors/$SlidingDoorMode$IHasDoorMode" {
import {$SlidingDoorMode, $SlidingDoorMode$Type} from "packages/com/railwayteam/railways/content/extended_sliding_doors/$SlidingDoorMode"

export interface $SlidingDoorMode$IHasDoorMode {

 "railways$getSlidingDoorMode"(): $SlidingDoorMode

(): $SlidingDoorMode
}

export namespace $SlidingDoorMode$IHasDoorMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorMode$IHasDoorMode$Type = ($SlidingDoorMode$IHasDoorMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingDoorMode$IHasDoorMode_ = $SlidingDoorMode$IHasDoorMode$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$StandardTrackBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$StandardTrackBufferBlock$Style, $StandardTrackBufferBlock$Style$Type} from "packages/com/railwayteam/railways/content/buffer/$StandardTrackBufferBlock$Style"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WoodVariantTrackBufferBlock, $WoodVariantTrackBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$WoodVariantTrackBufferBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $StandardTrackBufferBlock extends $WoodVariantTrackBufferBlock {
static readonly "STYLE": $EnumProperty<($StandardTrackBufferBlock$Style)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardTrackBufferBlock$Type = ($StandardTrackBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardTrackBufferBlock_ = $StandardTrackBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHasCustomOutline" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IHasCustomOutline {

 "drawLine"(vb: $VertexConsumer$Type, ms: $PoseStack$Type, x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void
 "drawLineWithAxisOffset"(vb: $VertexConsumer$Type, ms: $PoseStack$Type, x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, offset: double, axis: $Direction$Axis$Type): void
 "matrixRotation"(arg0: $PoseStack$Type, arg1: $BlockState$Type): void
 "customOutline"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $BlockState$Type): void
}

export namespace $IHasCustomOutline {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasCustomOutline$Type = ($IHasCustomOutline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasCustomOutline_ = $IHasCustomOutline$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$NonNullBiFunction, $NonNullBiFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullBiFunction"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EdgePointType, $EdgePointType$Type} from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$TrackTargetingBlockItem, $TrackTargetingBlockItem$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TrackBlockOutline$BezierPointSelection, $TrackBlockOutline$BezierPointSelection$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlockOutline$BezierPointSelection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackCouplerBlockItem extends $TrackTargetingBlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, type: $EdgePointType$Type<(any)>)

public static "ofType"<T extends $Block>(type: $EdgePointType$Type<(any)>): $NonNullBiFunction<(any), ($Item$Properties), ($TrackTargetingBlockItem)>
public "useOnCurve"(selection: $TrackBlockOutline$BezierPointSelection$Type, stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockItem$Type = ($TrackCouplerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockItem_ = $TrackCouplerBlockItem$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorScheduleRuntime" {
import {$Train, $Train$Type} from "packages/com/simibubi/create/content/trains/entity/$Train"

export interface $AccessorScheduleRuntime {

 "getTrain"(): $Train
 "setCooldown"(arg0: integer): void
}

export namespace $AccessorScheduleRuntime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorScheduleRuntime$Type = ($AccessorScheduleRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorScheduleRuntime_ = $AccessorScheduleRuntime$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageContraptionEntity" {
import {$Carriage, $Carriage$Type} from "packages/com/simibubi/create/content/trains/entity/$Carriage"

export interface $AccessorCarriageContraptionEntity {

 "railways$setCarriage"(arg0: $Carriage$Type): void
 "railways$bindCarriage"(): void
}

export namespace $AccessorCarriageContraptionEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriageContraptionEntity$Type = ($AccessorCarriageContraptionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCarriageContraptionEntity_ = $AccessorCarriageContraptionEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/handcar/$HandcarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $HandcarBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getConnectorAnchorOffset"(): $Vec3
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandcarBlock$Type = ($HandcarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandcarBlock_ = $HandcarBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/narrow/$NarrowGaugeBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle, $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/narrow/$NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"

export class $NarrowGaugeBogeyBlock extends $CRBogeyBlock {
readonly "style": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type, style: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "create"(style: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$Type): $NonNullFunction<($BlockBehaviour$Properties), ($NarrowGaugeBogeyBlock)>
public "getTrackType"(style: $BogeyStyle$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowGaugeBogeyBlock$Type = ($NarrowGaugeBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NarrowGaugeBogeyBlock_ = $NarrowGaugeBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$NarrowTrackBufferBlock$Style" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NarrowTrackBufferBlock$Style extends $Enum<($NarrowTrackBufferBlock$Style)> implements $StringRepresentable {
static readonly "STANDARD": $NarrowTrackBufferBlock$Style
static readonly "MONO": $NarrowTrackBufferBlock$Style


public static "values"(): ($NarrowTrackBufferBlock$Style)[]
public static "valueOf"(name: string): $NarrowTrackBufferBlock$Style
public "getSerializedName"(): string
public "getModel"(): $ResourceLocation
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "model"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowTrackBufferBlock$Style$Type = (("standard") | ("mono")) | ($NarrowTrackBufferBlock$Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NarrowTrackBufferBlock$Style_ = $NarrowTrackBufferBlock$Style$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/headstock/$CopycatHeadstockBarsBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CopycatHeadstockBarsBlock extends $HorizontalDirectionalBlock {
static readonly "UPSIDE_DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHeadstockBarsBlock$Type = ($CopycatHeadstockBarsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHeadstockBarsBlock_ = $CopycatHeadstockBarsBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/distant_signals/$IOverridableSignal" {
import {$SignalBlockEntity, $SignalBlockEntity$Type} from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity"
import {$SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$Type} from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$SignalState"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IOverridableSignal {

 "railways$getOverriddenState"(): $Optional<($SignalBlockEntity$SignalState)>
 "railways$refresh"(arg0: $SignalBlockEntity$Type, arg1: $SignalBlockEntity$SignalState$Type, arg2: integer, arg3: boolean): void
 "railways$refresh"(signalBE: $SignalBlockEntity$Type, state: $SignalBlockEntity$SignalState$Type, ticks: integer): void
}

export namespace $IOverridableSignal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverridableSignal$Type = ($IOverridableSignal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverridableSignal_ = $IOverridableSignal$Type;
}}
declare module "packages/com/railwayteam/railways/content/semaphore/$SemaphoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SemaphoreItem extends $BlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type)

public "place"(pContext: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreItem$Type = ($SemaphoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemaphoreItem_ = $SemaphoreItem$Type;
}}
declare module "packages/com/railwayteam/railways/util/$IHaveCustomGoggleIcon" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

/**
 * 
 * @deprecated
 */
export interface $IHaveCustomGoggleIcon {

 "railways$setGoggleIcon"(isPlayerSneaking: boolean): $ItemStack
}

export namespace $IHaveCustomGoggleIcon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveCustomGoggleIcon$Type = ($IHaveCustomGoggleIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveCustomGoggleIcon_ = $IHaveCustomGoggleIcon$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IDistanceTravelled" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDistanceTravelled {

 "railways$getDistanceTravelled"(): double

(): double
}

export namespace $IDistanceTravelled {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDistanceTravelled$Type = ($IDistanceTravelled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDistanceTravelled_ = $IDistanceTravelled$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorMountedFluidStorage" {
import {$SmartFluidTank, $SmartFluidTank$Type} from "packages/com/simibubi/create/foundation/fluid/$SmartFluidTank"

export interface $AccessorMountedFluidStorage {

 "getTank"(): $SmartFluidTank

(): $SmartFluidTank
}

export namespace $AccessorMountedFluidStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMountedFluidStorage$Type = ($AccessorMountedFluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMountedFluidStorage_ = $AccessorMountedFluidStorage$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/size/$LargeBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $LargeBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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


public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeBogeyBlock$Type = ($LargeBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeBogeyBlock_ = $LargeBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/client/$AccessorLevelRenderer" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $AccessorLevelRenderer {

 "railways$getRenderBuffers"(): $RenderBuffers
 "callAddParticleInternal"(arg0: $ParticleOptions$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
}

export namespace $AccessorLevelRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLevelRenderer$Type = ($AccessorLevelRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLevelRenderer_ = $AccessorLevelRenderer$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/$SmokestackStyle" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockStateBlockItemGroup$IStyle, $BlockStateBlockItemGroup$IStyle$Type} from "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$IStyle"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export class $SmokestackStyle extends $Enum<($SmokestackStyle)> implements $StringRepresentable, $BlockStateBlockItemGroup$IStyle<($Couple<(string)>)> {
static readonly "STEEL": $SmokestackStyle
static readonly "BRASS_CAP_STEEL": $SmokestackStyle
static readonly "COPPER_CAP_STEEL": $SmokestackStyle
static readonly "BRASS": $SmokestackStyle
static readonly "COPPER_CAP_BRASS": $SmokestackStyle
static readonly "COPPER": $SmokestackStyle
static readonly "BRASS_CAP_COPPER": $SmokestackStyle


public static "values"(): ($SmokestackStyle)[]
public static "valueOf"(name: string): $SmokestackStyle
public "getSerializedName"(): string
public static "variantToTagKey"(variant: string): $TagKey<($Item)>
public "getTexture"(variant: string): $ResourceLocation
public "getLangName"(context: $Couple$Type<(string)>): string
public "getModel"(context: $Couple$Type<(string)>): $ResourceLocation
public "getBlockId"(context: $Couple$Type<(string)>): string
public "getBlockId"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "blockId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokestackStyle$Type = (("steel") | ("copper_cap_brass") | ("brass_cap_copper") | ("copper_cap_steel") | ("copper") | ("brass") | ("brass_cap_steel")) | ($SmokestackStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokestackStyle_ = $SmokestackStyle$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$OperationMode" {
import {$TrackCouplerBlockEntity$AllowedOperationMode, $TrackCouplerBlockEntity$AllowedOperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$AllowedOperationMode"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TrackCouplerBlockEntity$OperationMode extends $Enum<($TrackCouplerBlockEntity$OperationMode)> {
static readonly "NONE": $TrackCouplerBlockEntity$OperationMode
static readonly "COUPLING": $TrackCouplerBlockEntity$OperationMode
static readonly "DECOUPLING": $TrackCouplerBlockEntity$OperationMode


public static "values"(): ($TrackCouplerBlockEntity$OperationMode)[]
public static "valueOf"(name: string): $TrackCouplerBlockEntity$OperationMode
public "permitted"(allowedMode: $TrackCouplerBlockEntity$AllowedOperationMode$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$OperationMode$Type = (("coupling") | ("decoupling") | ("none")) | ($TrackCouplerBlockEntity$OperationMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockEntity$OperationMode_ = $TrackCouplerBlockEntity$OperationMode$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenericCrossingTrackBE" {
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IGenericCrossingTrackBE {

 "railways$getSecondCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
 "railways$getFirstCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
}

export namespace $IGenericCrossingTrackBE {
function getQuads(material: $TrackMaterial$Type, shape: $TrackShape$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
function getQuads(data: $Pair$Type<($TrackMaterial$Type), ($TrackShape$Type)>, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
function getModel(data: $Pair$Type<($TrackMaterial$Type), ($TrackShape$Type)>): $BakedModel
function getModel(material: $TrackMaterial$Type, shape: $TrackShape$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenericCrossingTrackBE$Type = ($IGenericCrossingTrackBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenericCrossingTrackBE_ = $IGenericCrossingTrackBE$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageFlywheel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICarriageFlywheel {

 "railways$setAngle"(arg0: float): void
 "railways$getAngle"(): float
}

export namespace $ICarriageFlywheel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICarriageFlywheel$Type = ($ICarriageFlywheel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICarriageFlywheel_ = $ICarriageFlywheel$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CRBogeyBlockEntity, $CRBogeyBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/be/$CRBogeyBlockEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$AbstractBogeyBlock, $AbstractBogeyBlock$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"

export class $CRBogeyBlock extends $AbstractBogeyBlock<($CRBogeyBlockEntity)> implements $IBE<($CRBogeyBlockEntity)>, $ProperWaterloggedBlock, $ISpecialBlockItemRequirement {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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


public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getBlockEntityClass"(): $Class<($CRBogeyBlockEntity)>
public "getDefaultStyle"(): $BogeyStyle
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTrackType"(style: $BogeyStyle$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
get "blockEntityClass"(): $Class<($CRBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
get "blockEntityType"(): $BlockEntityType<(any)>
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CRBogeyBlock$Type = ($CRBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CRBogeyBlock_ = $CRBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$GroupedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateBlockItemGroup$GroupedBlock {

}

export namespace $BlockStateBlockItemGroup$GroupedBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateBlockItemGroup$GroupedBlock$Type = ($BlockStateBlockItemGroup$GroupedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateBlockItemGroup$GroupedBlock_ = $BlockStateBlockItemGroup$GroupedBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/$TripleAxleBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $TripleAxleBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TripleAxleBogeyBlock$Type = ($TripleAxleBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TripleAxleBogeyBlock_ = $TripleAxleBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium/$Medium202TrailingBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $Medium202TrailingBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Medium202TrailingBogeyBlock$Type = ($Medium202TrailingBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Medium202TrailingBogeyBlock_ = $Medium202TrailingBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorCarriage {

 "getSerialisedPassengers"(): $Map<(integer), ($CompoundTag)>

(): $Map<(integer), ($CompoundTag)>
}

export namespace $AccessorCarriage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriage$Type = ($AccessorCarriage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCarriage_ = $AccessorCarriage$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/whistle/$ConductorWhistleFlagBlockEntity" {
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GlobalStation, $GlobalStation$Type} from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$TrackTargetingBehaviour, $TrackTargetingBehaviour$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITransformableBlockEntity, $ITransformableBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlockEntity"

export class $ConductorWhistleFlagBlockEntity extends $SmartBlockEntity implements $ITransformableBlockEntity {
 "station": $TrackTargetingBehaviour<($GlobalStation)>
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "transform"(transform: $StructureTransform$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorWhistleFlagBlockEntity$Type = ($ConductorWhistleFlagBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConductorWhistleFlagBlockEntity_ = $ConductorWhistleFlagBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$TrackBuffer" {
import {$SingleBlockEntityEdgePoint, $SingleBlockEntityEdgePoint$Type} from "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TrackNode, $TrackNode$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Train, $Train$Type} from "packages/com/simibubi/create/content/trains/entity/$Train"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export class $TrackBuffer extends $SingleBlockEntityEdgePoint {
 "blockEntityDimension": $ResourceKey<($Level)>
 "blockEntityPos": $BlockPos
 "id": $UUID
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "position": double

constructor()

public "canNavigateVia"(side: $TrackNode$Type): boolean
public static "getBufferRoom"(train: $Train$Type, backwards: boolean): integer
public static "getBufferRoom"(train: $Train$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBuffer$Type = ($TrackBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackBuffer_ = $TrackBuffer$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/single_deco/$LinkPinBlock$Style" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockStateBlockItemGroup$IStyle, $BlockStateBlockItemGroup$IStyle$Type} from "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$IStyle"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LinkPinBlock$Style extends $Enum<($LinkPinBlock$Style)> implements $StringRepresentable, $BlockStateBlockItemGroup$IStyle<(void)> {
static readonly "LINK": $LinkPinBlock$Style
static readonly "LINKLESS": $LinkPinBlock$Style
static readonly "KNUCKLE": $LinkPinBlock$Style
static readonly "KNUCKLE_SPLIT": $LinkPinBlock$Style
static readonly "SCREWLINK": $LinkPinBlock$Style


public static "values"(): ($LinkPinBlock$Style)[]
public static "valueOf"(name: string): $LinkPinBlock$Style
public "getSerializedName"(): string
public "getLangName"(context: void): string
public "getModel"(): $ResourceLocation
public "getModel"(context: void): $ResourceLocation
public "getBlockId"(context: void): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "model"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkPinBlock$Style$Type = (("knuckle_split") | ("link") | ("linkless") | ("knuckle") | ("screwlink")) | ($LinkPinBlock$Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkPinBlock$Style_ = $LinkPinBlock$Style$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItem" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$NonNullBiFunction, $NonNullBiFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullBiFunction"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockStateBlockItem<T extends $Comparable<(T)>> extends $BlockItem {
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


public static "create"<T extends $Comparable<(T)>>(blockSupplier: $NonNullSupplier$Type<($Block$Type)>, property: $Property$Type<(T)>, value: T, primary: boolean): $NonNullFunction<($Item$Properties), ($BlockStateBlockItem<(T)>)>
public static "create"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>, value: T, primary: boolean): $NonNullBiFunction<($Block), ($Item$Properties), ($BlockStateBlockItem<(T)>)>
public "getDescriptionId"(): string
public "registerBlocks"(blockToItemMap: $Map$Type<($Block$Type), ($Item$Type)>, item: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateBlockItem$Type<T> = ($BlockStateBlockItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateBlockItem_<T> = $BlockStateBlockItem$Type<(T)>;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/generic_crossing/$GenericCrossingBlockEntity" {
import {$IGenericCrossingTrackBE, $IGenericCrossingTrackBE$Type} from "packages/com/railwayteam/railways/mixin_interfaces/$IGenericCrossingTrackBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TrackShapeLookup$GenericCrossingData, $TrackShapeLookup$GenericCrossingData$Type} from "packages/com/railwayteam/railways/content/custom_tracks/generic_crossing/$TrackShapeLookup$GenericCrossingData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMergeableBE, $IMergeableBE$Type} from "packages/com/simibubi/create/foundation/blockEntity/$IMergeableBE"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $GenericCrossingBlockEntity extends $SmartBlockEntity implements $IMergeableBE, $IGenericCrossingTrackBE {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "accept"(other: $BlockEntity$Type): void
public "initFrom"(crossingData: $TrackShapeLookup$GenericCrossingData$Type): void
public "railways$getSecondCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
public "railways$getFirstCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
public "getPrimary"(): $TrackMaterial
public "getSecondary"(): $TrackMaterial
public static "getQuads"(material: $TrackMaterial$Type, shape: $TrackShape$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
public static "getQuads"(data: $Pair$Type<($TrackMaterial$Type), ($TrackShape$Type)>, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
public static "getModel"(data: $Pair$Type<($TrackMaterial$Type), ($TrackShape$Type)>): $BakedModel
public static "getModel"(material: $TrackMaterial$Type, shape: $TrackShape$Type): $BakedModel
get "primary"(): $TrackMaterial
get "secondary"(): $TrackMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericCrossingBlockEntity$Type = ($GenericCrossingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericCrossingBlockEntity_ = $GenericCrossingBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorBlockEntityType" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $AccessorBlockEntityType {

 "getValidBlocks"(): $Set<($Block)>
 "setValidBlocks"(arg0: $Set$Type<($Block$Type)>): void
}

export namespace $AccessorBlockEntityType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBlockEntityType$Type = ($AccessorBlockEntityType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBlockEntityType_ = $AccessorBlockEntityType$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium/$MediumQuadrupleWheelBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $MediumQuadrupleWheelBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumQuadrupleWheelBogeyBlock$Type = ($MediumQuadrupleWheelBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MediumQuadrupleWheelBogeyBlock_ = $MediumQuadrupleWheelBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$IMaterialAdaptingBuffer" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IMaterialAdaptingBuffer {

 "getMaterial"(): $BlockState

(): $BlockState
}

export namespace $IMaterialAdaptingBuffer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialAdaptingBuffer$Type = ($IMaterialAdaptingBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMaterialAdaptingBuffer_ = $IMaterialAdaptingBuffer$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$WideTrackBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TrackBufferBlock, $TrackBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$TrackBufferBlockEntity, $TrackBufferBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlockEntity"

export class $WideTrackBufferBlock extends $TrackBufferBlock<($TrackBufferBlockEntity)> {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($TrackBufferBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityClass"(): $Class<($TrackBufferBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideTrackBufferBlock$Type = ($WideTrackBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideTrackBufferBlock_ = $WideTrackBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/wide_gauge/$WideGaugeTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$TrackBlock, $TrackBlock$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $WideGaugeTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "HAS_BE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $TrackMaterial$Type)

public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "walkConnectedTracks"(arg0: $BlockGetter$Type, arg1: $TrackNodeLocation$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$Type, arg1: $Collection$Type<($TrackNodeLocation$DiscoveredLocation$Type)>, arg2: $BiFunction$Type<(double), (boolean), ($Vec3$Type)>, arg3: $Function$Type<(boolean), ($Vec3$Type)>, arg4: $Function$Type<(boolean), ($ResourceKey$Type<($Level$Type)>)>, arg5: $Function$Type<($Vec3$Type), (integer)>, arg6: $Vec3$Type, arg7: $BezierConnection$Type, arg8: $BiFunction$Type<(boolean), ($Vec3$Type), ($TrackMaterial$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type, arg2: $TrackMaterial$Type): $TrackMaterial
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideGaugeTrackBlock$Type = ($WideGaugeTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideGaugeTrackBlock_ = $WideGaugeTrackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/large/$LargeCreateStyle040BogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$LargeBogeyBlock, $LargeBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/size/$LargeBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LargeCreateStyle040BogeyBlock extends $LargeBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle040BogeyBlock$Type = ($LargeCreateStyle040BogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCreateStyle040BogeyBlock_ = $LargeCreateStyle040BogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IContraptionFuel" {
import {$CombinedTankWrapper, $CombinedTankWrapper$Type} from "packages/com/simibubi/create/foundation/fluid/$CombinedTankWrapper"

export interface $IContraptionFuel {

 "railways$getSharedFuelTanks"(): $CombinedTankWrapper

(): $CombinedTankWrapper
}

export namespace $IContraptionFuel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContraptionFuel$Type = ($IContraptionFuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContraptionFuel_ = $IContraptionFuel$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/single_deco/$AbstractDyeableSingleBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DyeableBlockEntity, $DyeableBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$DyeableBlockEntity"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractDyeableSingleBufferBlock extends $HorizontalDirectionalBlock implements $IBE<($DyeableBlockEntity)>, $IWrenchable, $ProperWaterloggedBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getRotatedBlockState"(originalState: $BlockState$Type, targetedFace: $Direction$Type): $BlockState
public "getBlockEntityClass"(): $Class<($DyeableBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DyeableBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DyeableBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DyeableBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DyeableBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<($DyeableBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDyeableSingleBufferBlock$Type = ($AbstractDyeableSingleBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDyeableSingleBufferBlock_ = $AbstractDyeableSingleBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/whistle/$ConductorWhistleFlagBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ConductorWhistleFlagBlockEntity, $ConductorWhistleFlagBlockEntity$Type} from "packages/com/railwayteam/railways/content/conductor/whistle/$ConductorWhistleFlagBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ConductorWhistleFlagBlock extends $Block implements $IBE<($ConductorWhistleFlagBlockEntity)> {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getBlockEntityClass"(): $Class<($ConductorWhistleFlagBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ConductorWhistleFlagBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ConductorWhistleFlagBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ConductorWhistleFlagBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ConductorWhistleFlagBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($ConductorWhistleFlagBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorWhistleFlagBlock$Type = ($ConductorWhistleFlagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConductorWhistleFlagBlock_ = $ConductorWhistleFlagBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$TrackCouplerBlockEntity$OperationInfo, $TrackCouplerBlockEntity$OperationInfo$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$OperationInfo"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$TrackTargetingBehaviour, $TrackTargetingBehaviour$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ITransformableBlockEntity, $ITransformableBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlockEntity"
import {$TrackCouplerBlockEntity$AllowedOperationMode, $TrackCouplerBlockEntity$AllowedOperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$AllowedOperationMode"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$TrackCoupler, $TrackCoupler$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCoupler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TrackCouplerBlockEntity$ClientInfo, $TrackCouplerBlockEntity$ClientInfo$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$ClientInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackCouplerBlockEntity$OperationMode, $TrackCouplerBlockEntity$OperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$OperationMode"

export class $TrackCouplerBlockEntity extends $SmartBlockEntity implements $ITransformableBlockEntity, $IHaveGoggleInformation {
 "edgePoint": $TrackTargetingBehaviour<($TrackCoupler)>
 "secondEdgePoint": $TrackTargetingBehaviour<($TrackCoupler)>
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getTargetAnalogOutput"(): integer
public "getEdgeSpacing"(): integer
public "getCoupler"(): $TrackCoupler
public "areEdgePointsOk"(): boolean
public "setClientInfo"(info: $TrackCouplerBlockEntity$ClientInfo$Type): void
public "getOperationMode"(): $TrackCouplerBlockEntity$OperationMode
public "getReportedPower"(): boolean
public "transform"(transform: $StructureTransform$Type): void
public "getAllowedOperationMode"(): $TrackCouplerBlockEntity$AllowedOperationMode
public "getSecondaryCoupler"(): $TrackCoupler
public "tick"(): void
public "getOperationInfo"(): $TrackCouplerBlockEntity$OperationInfo
public "getClientInfo"(): $TrackCouplerBlockEntity$ClientInfo
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "targetAnalogOutput"(): integer
get "edgeSpacing"(): integer
get "coupler"(): $TrackCoupler
set "clientInfo"(value: $TrackCouplerBlockEntity$ClientInfo$Type)
get "operationMode"(): $TrackCouplerBlockEntity$OperationMode
get "reportedPower"(): boolean
get "allowedOperationMode"(): $TrackCouplerBlockEntity$AllowedOperationMode
get "secondaryCoupler"(): $TrackCoupler
get "operationInfo"(): $TrackCouplerBlockEntity$OperationInfo
get "clientInfo"(): $TrackCouplerBlockEntity$ClientInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$Type = ($TrackCouplerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockEntity_ = $TrackCouplerBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$ISwitchDisabledEdge" {
import {$TrackEdge, $TrackEdge$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"

export interface $ISwitchDisabledEdge {

 "isAutomatic"(): boolean
 "isEnabled"(): boolean
 "setAutomatic"(arg0: boolean): void
 "setEnabled"(arg0: boolean): void
 "getAutomaticallySelectedPriority"(): integer
 "isAutomaticallySelected"(): boolean
 "ackAutomaticSelection"(): void
 "setAutomaticallySelected"(): void
}

export namespace $ISwitchDisabledEdge {
function automaticallySelect(edge: $TrackEdge$Type): void
function isAutomatic(edge: $TrackEdge$Type): boolean
function isEnabled(edge: $TrackEdge$Type): boolean
function isDisabled(edge: $TrackEdge$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISwitchDisabledEdge$Type = ($ISwitchDisabledEdge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISwitchDisabledEdge_ = $ISwitchDisabledEdge$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPotentiallyInvisibleSpriteContents {

 "railways$uploadFrame"(arg0: boolean): void
 "railways$shouldDoInvisibility"(): boolean
 "railways$isVisible"(): boolean
}

export namespace $IPotentiallyInvisibleSpriteContents {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPotentiallyInvisibleSpriteContents$Type = ($IPotentiallyInvisibleSpriteContents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPotentiallyInvisibleSpriteContents_ = $IPotentiallyInvisibleSpriteContents$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation" {
import {$TrackSwitch, $TrackSwitch$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitch"
import {$TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$IGenerallySearchableNavigation$PointTest, $IGenerallySearchableNavigation$PointTest$Type} from "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation$PointTest"

export interface $IGenerallySearchableNavigation {

 "railways$searchGeneral"(arg0: double, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest$Type): void
 "railways$searchGeneral"(arg0: double, arg1: double, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest$Type): void
 "railways$findNearestApproachableSwitch"(arg0: boolean): $Pair<($TrackSwitch), ($Pair<(boolean), ($Optional<($TrackSwitchBlock$SwitchState)>)>)>
}

export namespace $IGenerallySearchableNavigation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenerallySearchableNavigation$Type = ($IGenerallySearchableNavigation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenerallySearchableNavigation_ = $IGenerallySearchableNavigation$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$AllowedOperationMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TrackCouplerBlockEntity$AllowedOperationMode extends $Enum<($TrackCouplerBlockEntity$AllowedOperationMode)> implements $StringRepresentable {
static readonly "BOTH": $TrackCouplerBlockEntity$AllowedOperationMode
static readonly "COUPLING": $TrackCouplerBlockEntity$AllowedOperationMode
static readonly "DECOUPLING": $TrackCouplerBlockEntity$AllowedOperationMode
readonly "canCouple": boolean
readonly "canDecouple": boolean


public "getTranslatedName"(): $Component
public static "values"(): ($TrackCouplerBlockEntity$AllowedOperationMode)[]
public static "valueOf"(name: string): $TrackCouplerBlockEntity$AllowedOperationMode
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translatedName"(): $Component
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$AllowedOperationMode$Type = (("coupling") | ("decoupling") | ("both")) | ($TrackCouplerBlockEntity$AllowedOperationMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockEntity$AllowedOperationMode_ = $TrackCouplerBlockEntity$AllowedOperationMode$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$WoodVariantTrackBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TrackBufferBlock, $TrackBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$WoodVariantTrackBufferBlockEntity, $WoodVariantTrackBufferBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$WoodVariantTrackBufferBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WoodVariantTrackBufferBlock extends $TrackBufferBlock<($WoodVariantTrackBufferBlockEntity)> {
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


public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($WoodVariantTrackBufferBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityClass"(): $Class<($WoodVariantTrackBufferBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodVariantTrackBufferBlock$Type = ($WoodVariantTrackBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodVariantTrackBufferBlock_ = $WoodVariantTrackBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlockEntity" {
import {$TrackSwitchBlockEntity$PonderData, $TrackSwitchBlockEntity$PonderData$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlockEntity$PonderData"
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$TrackTargetingBehaviour, $TrackTargetingBehaviour$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ITransformableBlockEntity, $ITransformableBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlockEntity"
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$TrackSwitch, $TrackSwitch$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrackSwitchBlockEntity extends $SmartBlockEntity implements $ITransformableBlockEntity, $IHaveGoggleInformation {
 "edgePoint": $TrackTargetingBehaviour<($TrackSwitch)>
 "ponderData": $TrackSwitchBlockEntity$PonderData
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getTargetAnalogOutput"(): integer
public "isReverseLeft"(): boolean
public "setStatePonder"(state: $TrackSwitchBlock$SwitchState$Type): void
public "hasExit"(state: $TrackSwitchBlock$SwitchState$Type): boolean
public "getOverlayModel"(): $PartialModel
public "getSwitch"(): $TrackSwitch
public "isReverseRight"(): boolean
public "clientLazyTick"(): void
public "isLocked"(): boolean
public "remove"(): void
public "transform"(transform: $StructureTransform$Type): void
public "getState"(): $TrackSwitchBlock$SwitchState
public "destroy"(): void
public "isAutomatic"(): boolean
public "isNormal"(): boolean
public "tick"(): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
get "targetAnalogOutput"(): integer
get "reverseLeft"(): boolean
set "statePonder"(value: $TrackSwitchBlock$SwitchState$Type)
get "overlayModel"(): $PartialModel
get "switch"(): $TrackSwitch
get "reverseRight"(): boolean
get "locked"(): boolean
get "state"(): $TrackSwitchBlock$SwitchState
get "automatic"(): boolean
get "normal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockEntity$Type = ($TrackSwitchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlockEntity_ = $TrackSwitchBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$InvisibleMonoBogeyBlockEntity" {
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$MonoBogeyBlockEntity, $MonoBogeyBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$MonoBogeyBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InvisibleMonoBogeyBlockEntity extends $MonoBogeyBlockEntity {
static readonly "BOGEY_STYLE_KEY": string
static readonly "BOGEY_DATA_KEY": string
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "getDefaultStyle"(): $BogeyStyle
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleMonoBogeyBlockEntity$Type = ($InvisibleMonoBogeyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibleMonoBogeyBlockEntity_ = $InvisibleMonoBogeyBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$IDyedBuffer" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export interface $IDyedBuffer {

 "getColor"(): $DyeColor

(): $DyeColor
}

export namespace $IDyedBuffer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDyedBuffer$Type = ($IDyedBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDyedBuffer_ = $IDyedBuffer$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/$NoCollisionCustomTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$TrackBlock, $TrackBlock$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $NoCollisionCustomTrackBlock extends $TrackBlock {
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "HAS_BE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $TrackMaterial$Type)

public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "walkConnectedTracks"(arg0: $BlockGetter$Type, arg1: $TrackNodeLocation$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$Type, arg1: $Collection$Type<($TrackNodeLocation$DiscoveredLocation$Type)>, arg2: $BiFunction$Type<(double), (boolean), ($Vec3$Type)>, arg3: $Function$Type<(boolean), ($Vec3$Type)>, arg4: $Function$Type<(boolean), ($ResourceKey$Type<($Level$Type)>)>, arg5: $Function$Type<($Vec3$Type), (integer)>, arg6: $Vec3$Type, arg7: $BezierConnection$Type, arg8: $BiFunction$Type<(boolean), ($Vec3$Type), ($TrackMaterial$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type, arg2: $TrackMaterial$Type): $TrackMaterial
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCollisionCustomTrackBlock$Type = ($NoCollisionCustomTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoCollisionCustomTrackBlock_ = $NoCollisionCustomTrackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/client/$AccessorInstance" {
import {$MaterialManager, $MaterialManager$Type} from "packages/com/jozufozu/flywheel/api/$MaterialManager"

export interface $AccessorInstance {

 "getMaterialManager"(): $MaterialManager

(): $MaterialManager
}

export namespace $AccessorInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorInstance$Type = ($AccessorInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorInstance_ = $AccessorInstance$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/wide/$WideGaugeBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"

export class $WideGaugeBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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


public "getConnectorAnchorOffset"(): $Vec3
public static "create"(large: boolean): $NonNullFunction<($BlockBehaviour$Properties), ($WideGaugeBogeyBlock)>
public "getTrackType"(style: $BogeyStyle$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideGaugeBogeyBlock$Type = ($WideGaugeBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideGaugeBogeyBlock_ = $WideGaugeBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$StandardTrackBufferBlock$Style" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $StandardTrackBufferBlock$Style extends $Enum<($StandardTrackBufferBlock$Style)> implements $StringRepresentable {
static readonly "STANDARD": $StandardTrackBufferBlock$Style
static readonly "SHORT": $StandardTrackBufferBlock$Style


public static "values"(): ($StandardTrackBufferBlock$Style)[]
public static "valueOf"(name: string): $StandardTrackBufferBlock$Style
public "getSerializedName"(): string
public "getModel"(): $ResourceLocation
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "model"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardTrackBufferBlock$Style$Type = (("standard") | ("short")) | ($StandardTrackBufferBlock$Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardTrackBufferBlock$Style_ = $StandardTrackBufferBlock$Style$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$MonoTrackBufferBlock$Style" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MonoTrackBufferBlock$Style extends $Enum<($MonoTrackBufferBlock$Style)> implements $StringRepresentable {
static readonly "STANDARD": $MonoTrackBufferBlock$Style
static readonly "MONO": $MonoTrackBufferBlock$Style
static readonly "SIDE": $MonoTrackBufferBlock$Style


public static "values"(): ($MonoTrackBufferBlock$Style)[]
public static "valueOf"(name: string): $MonoTrackBufferBlock$Style
public "getSerializedName"(): string
public "getModel"(): $ResourceLocation
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "model"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoTrackBufferBlock$Style$Type = (("standard") | ("mono") | ("side")) | ($MonoTrackBufferBlock$Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonoTrackBufferBlock$Style_ = $MonoTrackBufferBlock$Style$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/single_deco/$LinkPinBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockStateBlockItemGroup$GroupedBlock, $BlockStateBlockItemGroup$GroupedBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$GroupedBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LinkPinBlock$Style, $LinkPinBlock$Style$Type} from "packages/com/railwayteam/railways/content/buffer/single_deco/$LinkPinBlock$Style"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractDyeableSingleBufferBlock, $AbstractDyeableSingleBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/single_deco/$AbstractDyeableSingleBufferBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LinkPinBlock extends $AbstractDyeableSingleBufferBlock implements $BlockStateBlockItemGroup$GroupedBlock {
static readonly "STYLE": $EnumProperty<($LinkPinBlock$Style)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkPinBlock$Type = ($LinkPinBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkPinBlock_ = $LinkPinBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$TrackBufferBlockEntity, $TrackBufferBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlockEntity"

export class $TrackBufferBlock<BE extends $TrackBufferBlockEntity> extends $HorizontalDirectionalBlock implements $IBE<(BE)>, $IWrenchable, $ProperWaterloggedBlock {
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


public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getRotatedBlockState"(originalState: $BlockState$Type, targetedFace: $Direction$Type): $BlockState
public "getBlockEntityClass"(): $Class<(BE)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(BE)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<(BE)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<(BE), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): BE
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<(BE)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBufferBlock$Type<BE> = ($TrackBufferBlock<(BE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackBufferBlock_<BE> = $TrackBufferBlock$Type<(BE)>;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockCheckableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockCheckableNavigation {

 "railways$updateControlsBlock"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $IBufferBlockCheckableNavigation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferBlockCheckableNavigation$Type = ($IBufferBlockCheckableNavigation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBufferBlockCheckableNavigation_ = $IBufferBlockCheckableNavigation$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$NonNullBiFunction, $NonNullBiFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullBiFunction"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EdgePointType, $EdgePointType$Type} from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$TrackTargetingBlockItem, $TrackTargetingBlockItem$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TrackBlockOutline$BezierPointSelection, $TrackBlockOutline$BezierPointSelection$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlockOutline$BezierPointSelection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackSwitchBlockItem extends $TrackTargetingBlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type, type: $EdgePointType$Type<(any)>)

public static "ofType"<T extends $Block>(type: $EdgePointType$Type<(any)>): $NonNullBiFunction<(any), ($Item$Properties), ($TrackTargetingBlockItem)>
public "useOnCurve"(selection: $TrackBlockOutline$BezierPointSelection$Type, stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockItem$Type = ($TrackSwitchBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlockItem_ = $TrackSwitchBlockItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/large/$LargeCreateStyle0120BogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$LargeBogeyBlock, $LargeBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/size/$LargeBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LargeCreateStyle0120BogeyBlock extends $LargeBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle0120BogeyBlock$Type = ($LargeCreateStyle0120BogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCreateStyle0120BogeyBlock_ = $LargeCreateStyle0120BogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/palettes/boiler/$BoilerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IHasCustomOutline, $IHasCustomOutline$Type} from "packages/com/railwayteam/railways/mixin_interfaces/$IHasCustomOutline"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$BoilerBlock$Style, $BoilerBlock$Style$Type} from "packages/com/railwayteam/railways/content/palettes/boiler/$BoilerBlock$Style"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $BoilerBlock extends $Block implements $IWrenchable, $IHasCustomOutline {
static readonly "placementHelperId": integer
static readonly "STYLE": $EnumProperty<($BoilerBlock$Style)>
static readonly "HORIZONTAL_AXIS": $EnumProperty<($Direction$Axis)>
static readonly "RAISED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShapeForState"(state: $BlockState$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getInteractionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, direction: $Direction$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "getRotatedBlockState"(originalState: $BlockState$Type, targetedFace: $Direction$Type): $BlockState
public "matrixRotation"(poseStack: $PoseStack$Type, state: $BlockState$Type): void
public "customOutline"(poseStack: $PoseStack$Type, consumer: $VertexConsumer$Type, state: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "drawLine"(vb: $VertexConsumer$Type, ms: $PoseStack$Type, x1: double, y1: double, z1: double, x2: double, y2: double, z2: double): void
public "drawLineWithAxisOffset"(vb: $VertexConsumer$Type, ms: $PoseStack$Type, x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, offset: double, axis: $Direction$Axis$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerBlock$Type = ($BoilerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoilerBlock_ = $BoilerBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/casing/forge/$CasingCollisionBlockImpl" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CasingCollisionBlock, $CasingCollisionBlock$Type} from "packages/com/railwayteam/railways/content/custom_tracks/casing/$CasingCollisionBlock"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CasingCollisionBlockImpl extends $CasingCollisionBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "create"(properties: $BlockBehaviour$Properties$Type): $CasingCollisionBlock
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasingCollisionBlockImpl$Type = ($CasingCollisionBlockImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasingCollisionBlockImpl_ = $CasingCollisionBlockImpl$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHasTrackCasing" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IHasTrackCasing {

 "isAlternate"(): boolean
 "setAlternate"(alternate: boolean): void
 "setTrackCasing"(arg0: $SlabBlock$Type): void
 "getTrackCasing"(): $SlabBlock
}

export namespace $IHasTrackCasing {
function isAlternate(world: $Level$Type, pos: $BlockPos$Type): boolean
function setAlternateModel(world: $Level$Type, pos: $BlockPos$Type, useAlternateModel: boolean): boolean
function setTrackCasing(world: $Level$Type, pos: $BlockPos$Type, trackCasing: $SlabBlock$Type): void
function getTrackCasing(world: $Level$Type, pos: $BlockPos$Type): $SlabBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTrackCasing$Type = ($IHasTrackCasing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTrackCasing_ = $IHasTrackCasing$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$NarrowTrackBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WoodVariantTrackBufferBlock, $WoodVariantTrackBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$WoodVariantTrackBufferBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NarrowTrackBufferBlock$Style, $NarrowTrackBufferBlock$Style$Type} from "packages/com/railwayteam/railways/content/buffer/$NarrowTrackBufferBlock$Style"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $NarrowTrackBufferBlock extends $WoodVariantTrackBufferBlock {
static readonly "STYLE": $EnumProperty<($NarrowTrackBufferBlock$Style)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowTrackBufferBlock$Type = ($NarrowTrackBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NarrowTrackBufferBlock_ = $NarrowTrackBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/narrow/$NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle" {
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle extends $Enum<($NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle)> {
static readonly "SMALL": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
static readonly "SCOTCH_YOKE": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
static readonly "DOUBLE_SCOTCH_YOKE": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
readonly "style": $Supplier<($BogeyStyle)>
readonly "size": $Supplier<($BogeySizes$BogeySize)>


public static "values"(): ($NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle)[]
public static "valueOf"(name: string): $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$Type = (("small") | ("double_scotch_yoke") | ("scotch_yoke")) | ($NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle_ = $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$Type;
}}
declare module "packages/com/railwayteam/railways/content/semaphore/$SemaphoreBlockEntity" {
import {$SignalBlockEntity, $SignalBlockEntity$Type} from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$Type} from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$SignalState"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IOverridableSignal, $IOverridableSignal$Type} from "packages/com/railwayteam/railways/content/distant_signals/$IOverridableSignal"

export class $SemaphoreBlockEntity extends $SmartBlockEntity implements $IOverridableSignal {
 "signalState": $SignalBlockEntity$SignalState
readonly "armPosition": $LerpedFloat
 "isValid": boolean
 "isDistantSignal": boolean
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "wasCachedSearchingUpsideDown"(): boolean
public "railways$getOverriddenState"(): $Optional<($SignalBlockEntity$SignalState)>
public "tick"(): void
public "railways$refresh"(signalBE: $SignalBlockEntity$Type, state: $SignalBlockEntity$SignalState$Type, ticks: integer, distantSignal: boolean): void
public "railways$refresh"(signalBE: $SignalBlockEntity$Type, state: $SignalBlockEntity$SignalState$Type, ticks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreBlockEntity$Type = ($SemaphoreBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemaphoreBlockEntity_ = $SemaphoreBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$ClientInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TrackCouplerBlockEntity$OperationMode, $TrackCouplerBlockEntity$OperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$OperationMode"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $TrackCouplerBlockEntity$ClientInfo {
static readonly "FALLBACK": $TrackCouplerBlockEntity$ClientInfo
 "mode": $TrackCouplerBlockEntity$OperationMode
 "trainName1": string
 "trainName2": string
 "edgePointsOk": boolean
 "error": $MutableComponent
 "error2": $MutableComponent

constructor(tag: $CompoundTag$Type)

public "write"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$ClientInfo$Type = ($TrackCouplerBlockEntity$ClientInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockEntity$ClientInfo_ = $TrackCouplerBlockEntity$ClientInfo$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation$PointTest" {
import {$TrackNode, $TrackNode$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import {$TrackEdgePoint, $TrackEdgePoint$Type} from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$TrackEdge, $TrackEdge$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IGenerallySearchableNavigation$PointTest {

 "test"(arg0: double, arg1: double, arg2: $Map$Type<($TrackEdge$Type), ($Pair$Type<(boolean), ($Couple$Type<($TrackNode$Type)>)>)>, arg3: $Pair$Type<($Couple$Type<($TrackNode$Type)>), ($TrackEdge$Type)>, arg4: $TrackEdgePoint$Type): boolean

(arg0: double, arg1: double, arg2: $Map$Type<($TrackEdge$Type), ($Pair$Type<(boolean), ($Couple$Type<($TrackNode$Type)>)>)>, arg3: $Pair$Type<($Couple$Type<($TrackNode$Type)>), ($TrackEdge$Type)>, arg4: $TrackEdgePoint$Type): boolean
}

export namespace $IGenerallySearchableNavigation$PointTest {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenerallySearchableNavigation$PointTest$Type = ($IGenerallySearchableNavigation$PointTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenerallySearchableNavigation$PointTest_ = $IGenerallySearchableNavigation$PointTest$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$MonoBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$AbstractMonoBogeyBlock, $AbstractMonoBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$AbstractMonoBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$MonoBogeyBlockEntity, $MonoBogeyBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$MonoBogeyBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MonoBogeyBlock extends $AbstractMonoBogeyBlock<($MonoBogeyBlockEntity)> {
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($MonoBogeyBlockEntity)>
public "getDefaultStyle"(): $BogeyStyle
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "blockEntityClass"(): $Class<($MonoBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoBogeyBlock$Type = ($MonoBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonoBogeyBlock_ = $MonoBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageBogey" {
import {$AbstractBogeyBlock, $AbstractBogeyBlock$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"

export interface $AccessorCarriageBogey {

 "getType"(): $AbstractBogeyBlock<(any)>

(): $AbstractBogeyBlock<(any)>
}

export namespace $AccessorCarriageBogey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriageBogey$Type = ($AccessorCarriageBogey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCarriageBogey_ = $AccessorCarriageBogey$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/headstock/$HeadstockBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$HeadstockStyle, $HeadstockStyle$Type} from "packages/com/railwayteam/railways/content/buffer/headstock/$HeadstockStyle"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HeadstockBlockEntity, $HeadstockBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/headstock/$HeadstockBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockStateBlockItemGroup$GroupedBlock, $BlockStateBlockItemGroup$GroupedBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$GroupedBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HeadstockBlock extends $HorizontalDirectionalBlock implements $IBE<($HeadstockBlockEntity)>, $IWrenchable, $ProperWaterloggedBlock, $BlockStateBlockItemGroup$GroupedBlock {
static readonly "STYLE": $EnumProperty<($HeadstockStyle)>
static readonly "UPSIDE_DOWN": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getBlockEntityClass"(): $Class<($HeadstockBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($HeadstockBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($HeadstockBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($HeadstockBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $HeadstockBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<($HeadstockBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadstockBlock$Type = ($HeadstockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadstockBlock_ = $HeadstockBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/casing/$CasingCollisionBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
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
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CasingCollisionBlock extends $Block implements $EntityBlock, $ProperWaterloggedBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "create"(properties: $BlockBehaviour$Properties$Type): $CasingCollisionBlock
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getRenderShape"(pState: $BlockState$Type): $RenderShape
public "getFluidState"(pState: $BlockState$Type): $FluidState
public static "keepAlive"(level: $LevelAccessor$Type, pos: $BlockPos$Type): void
public "randomTick"(pState: $BlockState$Type, pLevel: $ServerLevel$Type, pPos: $BlockPos$Type, pRandom: $RandomSource$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasingCollisionBlock$Type = ($CasingCollisionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasingCollisionBlock_ = $CasingCollisionBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/vent/$VentBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CopycatBlock, $CopycatBlock$Type} from "packages/com/simibubi/create/content/decoration/copycat/$CopycatBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $VentBlock extends $CopycatBlock implements $IWrenchable {
static readonly "CONDUCTOR_VISIBLE": $BooleanProperty
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "OUTLINE_SHAPE": $VoxelShape
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


public "teleportConductor"(level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type, direction: $Direction$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "create"(properties: $BlockBehaviour$Properties$Type): $VentBlock
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "canFaceBeOccluded"(state: $BlockState$Type, face: $Direction$Type): boolean
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentBlock$Type = ($VentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VentBlock_ = $VentBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorTrackTargetingBehavior" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction$AxisDirection, $Direction$AxisDirection$Type} from "packages/net/minecraft/core/$Direction$AxisDirection"
import {$TrackEdgePoint, $TrackEdgePoint$Type} from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$Type} from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $AccessorTrackTargetingBehavior {

 "isOrthogonal"(): boolean
 "setTargetTrack"(arg0: $BlockPos$Type): void
 "getTargetTrack"(): $BlockPos
 "setTargetDirection"(arg0: $Direction$AxisDirection$Type): void
 "setEdgePoint"(arg0: $TrackEdgePoint$Type): void
 "setOrthogonal"(arg0: boolean): void
 "setTargetBezier"(arg0: $BezierTrackPointLocation$Type): void
 "getPrevDirection"(): $Vec3
 "setMigrationData"(arg0: $CompoundTag$Type): void
 "getMigrationData"(): $CompoundTag
 "setPrevDirection"(arg0: $Vec3$Type): void
 "getTargetBezier"(): $BezierTrackPointLocation
 "getId"(): $UUID
 "setRotatedDirection"(arg0: $Vec3$Type): void
 "getRotatedDirection"(): $Vec3
 "setId"(arg0: $UUID$Type): void
 "getTargetDirection"(): $Direction$AxisDirection
}

export namespace $AccessorTrackTargetingBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTrackTargetingBehavior$Type = ($AccessorTrackTargetingBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorTrackTargetingBehavior_ = $AccessorTrackTargetingBehavior$Type;
}}
declare module "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$OperationInfo" {
import {$Carriage, $Carriage$Type} from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$TrackCouplerBlockEntity$OperationMode, $TrackCouplerBlockEntity$OperationMode$Type} from "packages/com/railwayteam/railways/content/coupling/coupler/$TrackCouplerBlockEntity$OperationMode"

export class $TrackCouplerBlockEntity$OperationInfo extends $Record {
static readonly "NONE": $TrackCouplerBlockEntity$OperationInfo

constructor(mode: $TrackCouplerBlockEntity$OperationMode$Type, frontCarriage: $Carriage$Type, backCarriage: $Carriage$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mode"(): $TrackCouplerBlockEntity$OperationMode
public "frontCarriage"(): $Carriage
public "backCarriage"(): $Carriage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$OperationInfo$Type = ($TrackCouplerBlockEntity$OperationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackCouplerBlockEntity$OperationInfo_ = $TrackCouplerBlockEntity$OperationInfo$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IUpdateCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpdateCount {

 "railways$getUpdateCount"(): integer
 "railways$fromParent"(arg0: $IUpdateCount$Type): void
 "railways$markUpdate"(): void
}

export namespace $IUpdateCount {
function outOfSync(a: $IUpdateCount$Type, b: $IUpdateCount$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpdateCount$Type = ($IUpdateCount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpdateCount_ = $IUpdateCount$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrackSwitchBlockEntity, $TrackSwitchBlockEntity$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlockEntity"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TrackSwitchBlock extends $HorizontalDirectionalBlock implements $IBE<($TrackSwitchBlockEntity)>, $IWrenchable {
static readonly "LOCKED": $BooleanProperty
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


public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "automatic"(properties: $BlockBehaviour$Properties$Type): $TrackSwitchBlock
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "getBlockEntityClass"(): $Class<($TrackSwitchBlockEntity)>
public static "manual"(properties: $BlockBehaviour$Properties$Type): $TrackSwitchBlock
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, hit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($TrackSwitchBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($TrackSwitchBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($TrackSwitchBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TrackSwitchBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($TrackSwitchBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlock$Type = ($TrackSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlock_ = $TrackSwitchBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHandcarTrain {

 "railways$isHandcar"(): boolean
 "railways$setHandcar"(arg0: boolean): void
}

export namespace $IHandcarTrain {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandcarTrain$Type = ($IHandcarTrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandcarTrain_ = $IHandcarTrain$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageContraption" {
import {$MountedStorageManager, $MountedStorageManager$Type} from "packages/com/simibubi/create/content/contraptions/$MountedStorageManager"

export interface $AccessorCarriageContraption {

 "getStorageProxy"(): $MountedStorageManager

(): $MountedStorageManager
}

export namespace $AccessorCarriageContraption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriageContraption$Type = ($AccessorCarriageContraption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCarriageContraption_ = $AccessorCarriageContraption$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/generic_crossing/$GenericCrossingBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Direction$AxisDirection, $Direction$AxisDirection$Type} from "packages/net/minecraft/core/$Direction$AxisDirection"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ITrackBlock, $ITrackBlock$Type} from "packages/com/simibubi/create/content/trains/track/$ITrackBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType, $TrackTargetingBehaviour$RenderedTrackOverlayType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$GenericCrossingBlockEntity, $GenericCrossingBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_tracks/generic_crossing/$GenericCrossingBlockEntity"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$Type} from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $GenericCrossingBlock extends $Block implements $IBE<($GenericCrossingBlockEntity)>, $ITrackBlock, $IWrenchable, $ISpecialBlockItemRequirement, $ProperWaterloggedBlock {
static readonly "SHAPE": $EnumProperty<($TrackShape)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getRequiredItems"(state: $BlockState$Type, be: $BlockEntity$Type): $ItemRequirement
public "getShape"(state: $BlockState$Type, p_60556_: $BlockGetter$Type, p_60557_: $BlockPos$Type, p_60558_: $CollisionContext$Type): $VoxelShape
public "prepareAssemblyOverlay"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, direction: $Direction$Type, ms: $PoseStack$Type): $PartialModel
public "prepareTrackOverlay"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, bezierPoint: $BezierTrackPointLocation$Type, direction: $Direction$AxisDirection$Type, transform: $PoseStack$Type, type: $TrackTargetingBehaviour$RenderedTrackOverlayType$Type): $PartialModel
public "getMaterial"(): $TrackMaterial
public "getTrackAxes"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $List<($Vec3)>
public "getBogeyAnchor"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public "getUpNormal"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $Vec3
public "getCurveStart"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, axis: $Vec3$Type): $Vec3
public "trackEquals"(state1: $BlockState$Type, state2: $BlockState$Type): boolean
public "getInteractionShape"(state: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "onPlace"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pOldState: $BlockState$Type, pIsMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getBlockEntityClass"(): $Class<($GenericCrossingBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, p_60465_: $RandomSource$Type): void
public "getConnected"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, linear: boolean, connectedTo: $TrackNodeLocation$Type): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($GenericCrossingBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($GenericCrossingBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($GenericCrossingBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $GenericCrossingBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "walkConnectedTracks"(arg0: $BlockGetter$Type, arg1: $TrackNodeLocation$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "getNearestTrackAxis"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Vec3$Type): $Pair<($Vec3), ($Direction$AxisDirection)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$Type, arg1: $Collection$Type<($TrackNodeLocation$DiscoveredLocation$Type)>, arg2: $BiFunction$Type<(double), (boolean), ($Vec3$Type)>, arg3: $Function$Type<(boolean), ($Vec3$Type)>, arg4: $Function$Type<(boolean), ($ResourceKey$Type<($Level$Type)>)>, arg5: $Function$Type<($Vec3$Type), (integer)>, arg6: $Vec3$Type, arg7: $BezierConnection$Type, arg8: $BiFunction$Type<(boolean), ($Vec3$Type), ($TrackMaterial$Type)>): void
public "getYOffsetAt"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Vec3$Type): integer
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type, arg2: $TrackMaterial$Type): $TrackMaterial
public "isSlope"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getElevationAtCenter"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): double
public "overlay"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "material"(): $TrackMaterial
get "blockEntityClass"(): $Class<($GenericCrossingBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericCrossingBlock$Type = ($GenericCrossingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericCrossingBlock_ = $GenericCrossingBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIndexedSchedule {

 "railways$getIndex"(): integer
 "railways$setIndex"(arg0: integer): void
}

export namespace $IIndexedSchedule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIndexedSchedule$Type = ($IIndexedSchedule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIndexedSchedule_ = $IIndexedSchedule$Type;
}}
declare module "packages/com/railwayteam/railways/content/fuel/psi/$PortableFuelInterfaceBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$PortableFuelInterfaceBlockEntity, $PortableFuelInterfaceBlockEntity$Type} from "packages/com/railwayteam/railways/content/fuel/psi/$PortableFuelInterfaceBlockEntity"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PortableFuelInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE<($PortableFuelInterfaceBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(blockState: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type): integer
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "getBlockEntityClass"(): $Class<($PortableFuelInterfaceBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PortableFuelInterfaceBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PortableFuelInterfaceBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PortableFuelInterfaceBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PortableFuelInterfaceBlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($PortableFuelInterfaceBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableFuelInterfaceBlock$Type = ($PortableFuelInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableFuelInterfaceBlock_ = $PortableFuelInterfaceBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$MonoBogeyBlockEntity" {
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$AbstractBogeyBlockEntity, $AbstractBogeyBlockEntity$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MonoBogeyBlockEntity extends $AbstractBogeyBlockEntity {
static readonly "BOGEY_STYLE_KEY": string
static readonly "BOGEY_DATA_KEY": string
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "getDefaultStyle"(): $BogeyStyle
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoBogeyBlockEntity$Type = ($MonoBogeyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonoBogeyBlockEntity_ = $MonoBogeyBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium/$MediumQuintupleWheelBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $MediumQuintupleWheelBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumQuintupleWheelBogeyBlock$Type = ($MediumQuintupleWheelBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MediumQuintupleWheelBogeyBlock_ = $MediumQuintupleWheelBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$MonoTrackBufferBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$MonoTrackBufferBlock$Style, $MonoTrackBufferBlock$Style$Type} from "packages/com/railwayteam/railways/content/buffer/$MonoTrackBufferBlock$Style"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WoodVariantTrackBufferBlock, $WoodVariantTrackBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$WoodVariantTrackBufferBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MonoTrackBufferBlock extends $WoodVariantTrackBufferBlock {
static readonly "STYLE": $EnumProperty<($MonoTrackBufferBlock$Style)>
static readonly "UPSIDE_DOWN": $BooleanProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoTrackBufferBlock$Type = ($MonoTrackBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonoTrackBufferBlock_ = $MonoTrackBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/$DoubleAxleBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $DoubleAxleBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleAxleBogeyBlock$Type = ($DoubleAxleBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleAxleBogeyBlock_ = $DoubleAxleBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/$SingleAxleBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $SingleAxleBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleAxleBogeyBlock$Type = ($SingleAxleBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleAxleBogeyBlock_ = $SingleAxleBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlockEntity$PonderData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $TrackSwitchBlockEntity$PonderData extends $Record {

constructor(basePos: $Vec3$Type, leftBranch: $Vec3$Type, straightBranch: $Vec3$Type, rightBranch: $Vec3$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "basePos"(): $Vec3
public "leftBranch"(): $Vec3
public "straightBranch"(): $Vec3
public "rightBranch"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockEntity$PonderData$Type = ($TrackSwitchBlockEntity$PonderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlockEntity$PonderData_ = $TrackSwitchBlockEntity$PonderData$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$AbstractMonoBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MonoBogeyBlockEntity, $MonoBogeyBlockEntity$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/special/monobogey/$MonoBogeyBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$AbstractBogeyBlock, $AbstractBogeyBlock$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"
import {$TrackMaterial$TrackType, $TrackMaterial$TrackType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"

export class $AbstractMonoBogeyBlock<T extends $MonoBogeyBlockEntity> extends $AbstractBogeyBlock<(T)> implements $IBE<(T)>, $ProperWaterloggedBlock, $ISpecialBlockItemRequirement {
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "allowsSingleBogeyCarriage"(): boolean
public "getConnectorAnchorOffset"(upsideDown: boolean): $Vec3
public "getConnectorAnchorOffset"(): $Vec3
public "getVersion"(base: $BlockState$Type, upsideDown: boolean): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getRotatedBlockState"(state: $BlockState$Type, targetedFace: $Direction$Type): $BlockState
public "getTrackType"(style: $BogeyStyle$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public "isUpsideDown"(state: $BlockState$Type): boolean
public "propertiesToCopy"(): $List<($Property<(any)>)>
public "canBeUpsideDown"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMonoBogeyBlock$Type<T> = ($AbstractMonoBogeyBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMonoBogeyBlock_<T> = $AbstractMonoBogeyBlock$Type<(T)>;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/$SmokeStackBlock$SmokeStackType" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $SmokeStackBlock$SmokeStackType {
 "particleSpawnOffset": $Vec3
 "particleSpawnDelta": $Vec3
 "particleSpawnChance": double
 "minParticles": integer
 "maxParticles": integer

constructor(particleSpawnOffset: $Vec3$Type, particleSpawnDelta: $Vec3$Type, minParticles: integer, maxParticles: integer, particleSpawnChance: double)
constructor(particleSpawnOffset: $Vec3$Type, particleSpawnDelta: $Vec3$Type, minParticles: integer, maxParticles: integer)
constructor(particleSpawnOffset: $Vec3$Type, particleSpawnDelta: $Vec3$Type)
constructor(particleSpawnOffset: $Vec3$Type)
constructor(xOffset: double, yOffset: double, zOffset: double)

public "getParticleSpawnDelta"(): $Vec3
public "getParticleSpawnOffset"(): $Vec3
get "particleSpawnDelta"(): $Vec3
get "particleSpawnOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeStackBlock$SmokeStackType$Type = ($SmokeStackBlock$SmokeStackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokeStackBlock$SmokeStackType_ = $SmokeStackBlock$SmokeStackType$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorToolboxInventory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessorToolboxInventory {

 "getFilters"(): $List<($ItemStack)>

(): $List<($ItemStack)>
}

export namespace $AccessorToolboxInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorToolboxInventory$Type = ($AccessorToolboxInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorToolboxInventory_ = $AccessorToolboxInventory$Type;
}}
declare module "packages/com/railwayteam/railways/util/$ShapeWrapper" {
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $ShapeWrapper {

constructor(shape: $VoxelShape$Type)
constructor(shaper: $VoxelShaper$Type)

public "get"(): $VoxelShape
public "get"(axis: $Direction$Axis$Type): $VoxelShape
public "get"(direction: $Direction$Type): $VoxelShape
public static "wrapped"(shape: $VoxelShape$Type): $ShapeWrapper
public static "wrapped"(shaper: $VoxelShaper$Type): $ShapeWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeWrapper$Type = ($ShapeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeWrapper_ = $ShapeWrapper$Type;
}}
declare module "packages/com/railwayteam/railways/content/fuel/tank/$FuelTankItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuelTankItem extends $BlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "place"(ctx: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankItem$Type = ($FuelTankItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelTankItem_ = $FuelTankItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/headstock/$CopycatHeadstockBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$HeadstockStyle, $HeadstockStyle$Type} from "packages/com/railwayteam/railways/content/buffer/headstock/$HeadstockStyle"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockStateBlockItemGroup$GroupedBlock, $BlockStateBlockItemGroup$GroupedBlock$Type} from "packages/com/railwayteam/railways/content/buffer/$BlockStateBlockItemGroup$GroupedBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$WaterloggedCopycatBlock, $WaterloggedCopycatBlock$Type} from "packages/com/simibubi/create/content/decoration/copycat/$WaterloggedCopycatBlock"

export class $CopycatHeadstockBlock extends $WaterloggedCopycatBlock implements $BlockStateBlockItemGroup$GroupedBlock {
static readonly "FACING": $DirectionProperty
static readonly "STYLE": $EnumProperty<($HeadstockStyle)>
static readonly "UPSIDE_DOWN": $BooleanProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "shouldFaceAlwaysRender"(state: $BlockState$Type, face: $Direction$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "wrappedItemColor"(): $ItemColor
public "canFaceBeOccluded"(state: $BlockState$Type, face: $Direction$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHeadstockBlock$Type = ($CopycatHeadstockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHeadstockBlock_ = $CopycatHeadstockBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/whistle/$ConductorWhistleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$TrackTargetingBlockItem, $TrackTargetingBlockItem$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBlockItem"
import {$TrackBlockOutline$BezierPointSelection, $TrackBlockOutline$BezierPointSelection$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlockOutline$BezierPointSelection"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ConductorWhistleItem extends $TrackTargetingBlockItem {
static readonly "SPECIAL_MARKER": string
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "useOn"(pContext: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "interactLivingEntity"(pStack: $ItemStack$Type, pPlayer: $Player$Type, pInteractionTarget: $LivingEntity$Type, pUsedHand: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "useOnCurve"(selection: $TrackBlockOutline$BezierPointSelection$Type, stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorWhistleItem$Type = ($ConductorWhistleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConductorWhistleItem_ = $ConductorWhistleItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/palettes/smokebox/$PalettesSmokeboxBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PalettesSmokeboxBlock extends $Block {
static readonly "FACING": $EnumProperty<($Direction)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PalettesSmokeboxBlock$Type = ($PalettesSmokeboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PalettesSmokeboxBlock_ = $PalettesSmokeboxBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/fuel/tank/$FuelTankBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiBlockEntityContainer$Fluid, $IMultiBlockEntityContainer$Fluid$Type} from "packages/com/simibubi/create/foundation/blockEntity/$IMultiBlockEntityContainer$Fluid"

export class $FuelTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "sendData"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getTank"(tank: integer): $IFluidTank
public "initialize"(): void
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "getCapability"<T>(cap: $Capability$Type<(T)>, side: $Direction$Type): $LazyOptional<(T)>
public "invalidate"(): void
public "getFluid"(tank: integer): $FluidStack
public "getExtraData"(): any
public "setWidth"(width: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public static "getMaxSize"(): integer
public "tick"(): void
public "getMaxLength"(longAxis: $Direction$Axis$Type, width: integer): integer
public "getTotalTankSize"(): integer
public "getMaxWidth"(): integer
public "setHeight"(height: integer): void
public "getTankInventory"(): $IFluidTank
public "getControllerBE"(): $FuelTankBlockEntity
public "preventConnectivityUpdate"(): void
public "getMainConnectionAxis"(): $Direction$Axis
public static "getCapacityMultiplier"(): integer
public "sendDataImmediately"(): void
public "notifyMultiUpdated"(): void
public "removeController"(keepFluids: boolean): void
public "modifyExtraData"(data: any): any
public "setExtraData"(data: any): void
public "toggleWindows"(): void
public "getFillState"(): float
public "applyFluidTankSize"(blocks: integer): void
public "setWindows"(window: boolean): void
public "setTankSize"(tank: integer, blocks: integer): void
public static "getMaxHeight"(): integer
public "hasTank"(): boolean
public "getFluidLevel"(): $LerpedFloat
public "setFluidLevel"(fluidLevel: $LerpedFloat$Type): void
public "getTankSize"(tank: integer): integer
public "isController"(): boolean
public "setController"(controller: $BlockPos$Type): void
public "getLastKnownPos"(): $BlockPos
public "getController"(): $BlockPos
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
public "getMainAxisOf"(arg0: $BlockEntity$Type): $Direction$Axis
get "extraData"(): any
set "width"(value: integer)
get "width"(): integer
get "height"(): integer
get "maxSize"(): integer
get "totalTankSize"(): integer
get "maxWidth"(): integer
set "height"(value: integer)
get "tankInventory"(): $IFluidTank
get "controllerBE"(): $FuelTankBlockEntity
get "mainConnectionAxis"(): $Direction$Axis
get "capacityMultiplier"(): integer
set "extraData"(value: any)
get "fillState"(): float
set "windows"(value: boolean)
get "maxHeight"(): integer
get "fluidLevel"(): $LerpedFloat
set "fluidLevel"(value: $LerpedFloat$Type)
get "controller"(): boolean
set "controller"(value: $BlockPos$Type)
get "lastKnownPos"(): $BlockPos
get "controller"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankBlockEntity$Type = ($FuelTankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelTankBlockEntity_ = $FuelTankBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/large/$LargeCreateStyle080BogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$LargeBogeyBlock, $LargeBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/size/$LargeBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LargeCreateStyle080BogeyBlock extends $LargeBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle080BogeyBlock$Type = ($LargeCreateStyle080BogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCreateStyle080BogeyBlock_ = $LargeCreateStyle080BogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/large/$LargeCreateStyle0100BogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$LargeBogeyBlock, $LargeBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/size/$LargeBogeyBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LargeCreateStyle0100BogeyBlock extends $LargeBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle0100BogeyBlock$Type = ($LargeCreateStyle0100BogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCreateStyle0100BogeyBlock_ = $LargeCreateStyle0100BogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/$AccessorPortableStorageInterfaceBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorPortableStorageInterfaceBlockEntity {

 "railways$isConnected"(): boolean

(): boolean
}

export namespace $AccessorPortableStorageInterfaceBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorPortableStorageInterfaceBlockEntity$Type = ($AccessorPortableStorageInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorPortableStorageInterfaceBlockEntity_ = $AccessorPortableStorageInterfaceBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/conductor_possession/$AccessorKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $AccessorKeyMapping {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$Type = ($AccessorKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorKeyMapping_ = $AccessorKeyMapping$Type;
}}
declare module "packages/com/railwayteam/railways/content/fuel/psi/$PortableFuelInterfaceBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$PortableStorageInterfaceBlockEntity, $PortableStorageInterfaceBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/actors/psi/$PortableStorageInterfaceBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $PortableFuelInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
static readonly "ANIMATION": integer
 "keepAlive": integer
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "getCapability"<T>(cap: $Capability$Type<(T)>, side: $Direction$Type): $LazyOptional<(T)>
public "startTransferringTo"(contraption: $Contraption$Type, distance: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableFuelInterfaceBlockEntity$Type = ($PortableFuelInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableFuelInterfaceBlockEntity_ = $PortableFuelInterfaceBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_tracks/phantom/$PhantomTrackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction$AxisDirection, $Direction$AxisDirection$Type} from "packages/net/minecraft/core/$Direction$AxisDirection"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$Type} from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BezierConnection, $BezierConnection$Type} from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrackShape, $TrackShape$Type} from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$NoCollisionCustomTrackBlock, $NoCollisionCustomTrackBlock$Type} from "packages/com/railwayteam/railways/content/custom_tracks/$NoCollisionCustomTrackBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PartialModel, $PartialModel$Type} from "packages/com/jozufozu/flywheel/core/$PartialModel"
import {$TrackMaterial, $TrackMaterial$Type} from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TrackNodeLocation, $TrackNodeLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType, $TrackTargetingBehaviour$RenderedTrackOverlayType$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour$RenderedTrackOverlayType"

export class $PhantomTrackBlock extends $NoCollisionCustomTrackBlock {
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "HAS_BE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $TrackMaterial$Type)

public "prepareTrackOverlay"(world: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, bezierPoint: $BezierTrackPointLocation$Type, direction: $Direction$AxisDirection$Type, ms: $PoseStack$Type, type: $TrackTargetingBehaviour$RenderedTrackOverlayType$Type): $PartialModel
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "walkConnectedTracks"(arg0: $BlockGetter$Type, arg1: $TrackNodeLocation$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$Type, arg1: $Collection$Type<($TrackNodeLocation$DiscoveredLocation$Type)>, arg2: $BiFunction$Type<(double), (boolean), ($Vec3$Type)>, arg3: $Function$Type<(boolean), ($Vec3$Type)>, arg4: $Function$Type<(boolean), ($ResourceKey$Type<($Level$Type)>)>, arg5: $Function$Type<($Vec3$Type), (integer)>, arg6: $Vec3$Type, arg7: $BezierConnection$Type, arg8: $BiFunction$Type<(boolean), ($Vec3$Type), ($TrackMaterial$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$Type, arg1: $Vec3$Type, arg2: $TrackMaterial$Type): $TrackMaterial
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomTrackBlock$Type = ($PhantomTrackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomTrackBlock_ = $PhantomTrackBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/special/invisible/$InvisibleBogeyBlockEntity" {
import {$BogeyStyle, $BogeyStyle$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import {$AbstractBogeyBlockEntity, $AbstractBogeyBlockEntity$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InvisibleBogeyBlockEntity extends $AbstractBogeyBlockEntity {
static readonly "BOGEY_STYLE_KEY": string
static readonly "BOGEY_DATA_KEY": string
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "getDefaultStyle"(): $BogeyStyle
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleBogeyBlockEntity$Type = ($InvisibleBogeyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibleBogeyBlockEntity_ = $InvisibleBogeyBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/conductor/vent/forge/$VentBlockImpl" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VentBlock, $VentBlock$Type} from "packages/com/railwayteam/railways/content/conductor/vent/$VentBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $VentBlockImpl extends $VentBlock {
static readonly "CONDUCTOR_VISIBLE": $BooleanProperty
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "OUTLINE_SHAPE": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "create"(properties: $BlockBehaviour$Properties$Type): $VentBlock
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentBlockImpl$Type = ($VentBlockImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VentBlockImpl_ = $VentBlockImpl$Type;
}}
declare module "packages/com/railwayteam/railways/content/switches/forge/$TrackSwitchBlockImpl" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TrackSwitchBlock, $TrackSwitchBlock$Type} from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TrackSwitchBlockImpl extends $TrackSwitchBlock {
static readonly "LOCKED": $BooleanProperty
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


public static "automatic"(properties: $BlockBehaviour$Properties$Type): $TrackSwitchBlock
public "canConnectRedstone"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public static "manual"(properties: $BlockBehaviour$Properties$Type): $TrackSwitchBlock
public "shouldCheckWeakPower"(state: $BlockState$Type, level: $SignalGetter$Type, pos: $BlockPos$Type, side: $Direction$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockImpl$Type = ($TrackSwitchBlockImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackSwitchBlockImpl_ = $TrackSwitchBlockImpl$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/headstock/$HeadstockBlockEntity" {
import {$DyeableBlockEntity, $DyeableBlockEntity$Type} from "packages/com/railwayteam/railways/content/buffer/$DyeableBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IMaterialAdaptingBuffer, $IMaterialAdaptingBuffer$Type} from "packages/com/railwayteam/railways/content/buffer/$IMaterialAdaptingBuffer"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $HeadstockBlockEntity extends $DyeableBlockEntity implements $IMaterialAdaptingBuffer {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "applyMaterialIfValid"(stack: $ItemStack$Type): $InteractionResult
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
get "material"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadstockBlockEntity$Type = ($HeadstockBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadstockBlockEntity_ = $HeadstockBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium/$MediumBogeyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$Type} from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CRBogeyBlock, $CRBogeyBlock$Type} from "packages/com/railwayteam/railways/content/custom_bogeys/blocks/base/$CRBogeyBlock"

export class $MediumBogeyBlock extends $CRBogeyBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
 "size": $BogeySizes$BogeySize
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

constructor(props: $BlockBehaviour$Properties$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $ItemRequirement
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumBogeyBlock$Type = ($MediumBogeyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MediumBogeyBlock_ = $MediumBogeyBlock$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/client/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {

 "setYRot"(arg0: float): void
 "getYRot"(): float
 "setXRot"(arg0: float): void
 "getXRot"(): float
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$Type = ($AccessorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin/client/$AccessorPartialModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorPartialModel {

}

export namespace $AccessorPartialModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorPartialModel$Type = ($AccessorPartialModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorPartialModel_ = $AccessorPartialModel$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/be/$SmokeStackBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IHaveCustomGoggleIcon, $IHaveCustomGoggleIcon$Type} from "packages/com/railwayteam/railways/util/$IHaveCustomGoggleIcon"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SmokeStackBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveCustomGoggleIcon {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "setColor"(color: $DyeColor$Type): void
public "isSoul"(): boolean
public "railways$setGoggleIcon"(isPlayerSneaking: boolean): $ItemStack
public "tick"(): void
public "getColor"(): $DyeColor
public "setSoul"(isSoul: boolean): void
public "containedFluidTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: $LazyOptional$Type<($IFluidHandler$Type)>): boolean
set "color"(value: $DyeColor$Type)
get "soul"(): boolean
get "color"(): $DyeColor
set "soul"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeStackBlockEntity$Type = ($SmokeStackBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokeStackBlockEntity_ = $SmokeStackBlockEntity$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPreAssembleCallback {

 "railways$preAssemble"(): void

(): void
}

export namespace $IPreAssembleCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPreAssembleCallback$Type = ($IPreAssembleCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPreAssembleCallback_ = $IPreAssembleCallback$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/$TrackBufferBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EdgePointType, $EdgePointType$Type} from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$NonNullBiFunction, $NonNullBiFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullBiFunction"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$TrackTargetingBlockItem, $TrackTargetingBlockItem$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBlockItem"
import {$TrackBlockOutline$BezierPointSelection, $TrackBlockOutline$BezierPointSelection$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlockOutline$BezierPointSelection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackBufferBlockItem extends $TrackTargetingBlockItem {
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

constructor(pBlock: $Block$Type, pProperties: $Item$Properties$Type, type: $EdgePointType$Type<(any)>)

public static "ofType"<T extends $Block>(type: $EdgePointType$Type<(any)>): $NonNullBiFunction<(any), ($Item$Properties), ($TrackTargetingBlockItem)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "useOnCurve"(selection: $TrackBlockOutline$BezierPointSelection$Type, stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBufferBlockItem$Type = ($TrackBufferBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackBufferBlockItem_ = $TrackBufferBlockItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/extended_sliding_doors/$SlidingDoorMode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$INamedIconOptions, $INamedIconOptions$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$INamedIconOptions"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"

export class $SlidingDoorMode extends $Enum<($SlidingDoorMode)> implements $INamedIconOptions {
static readonly "NORMAL": $SlidingDoorMode
static readonly "MANUAL": $SlidingDoorMode
static readonly "SPECIAL": $SlidingDoorMode
static readonly "SPECIAL_INVERTED": $SlidingDoorMode


public "getIcon"(): $AllIcons
public static "values"(): ($SlidingDoorMode)[]
public static "valueOf"(name: string): $SlidingDoorMode
public static "fromNbt"(nbt: $CompoundTag$Type): $SlidingDoorMode
public "getTranslationKey"(): string
public "canOpenManually"(): boolean
public "canOpenSpecially"(): boolean
get "icon"(): $AllIcons
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorMode$Type = (("special") | ("normal") | ("special_inverted") | ("manual")) | ($SlidingDoorMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingDoorMode_ = $SlidingDoorMode$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockedTrain {

 "railways$getBlockedSign"(): integer
 "railways$isControlBlocked"(): boolean
 "railways$setControlBlocked"(arg0: boolean, arg1: boolean): void
}

export namespace $IBufferBlockedTrain {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferBlockedTrain$Type = ($IBufferBlockedTrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBufferBlockedTrain_ = $IBufferBlockedTrain$Type;
}}
declare module "packages/com/railwayteam/railways/mixin_interfaces/$IStandardBogeyTEVirtualCoupling" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IStandardBogeyTEVirtualCoupling {

 "getCouplingDistance"(): double
 "getCouplingDirection"(): $Direction
 "setCouplingDistance"(arg0: double): void
 "setCouplingDirection"(arg0: $Direction$Type): void
 "getFront"(): boolean
 "setFront"(arg0: boolean): void
}

export namespace $IStandardBogeyTEVirtualCoupling {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStandardBogeyTEVirtualCoupling$Type = ($IStandardBogeyTEVirtualCoupling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStandardBogeyTEVirtualCoupling_ = $IStandardBogeyTEVirtualCoupling$Type;
}}
declare module "packages/com/railwayteam/railways/content/handcar/$HandcarItem" {
import {$IDeployAnywayBlockItem, $IDeployAnywayBlockItem$Type} from "packages/com/railwayteam/railways/mixin_interfaces/$IDeployAnywayBlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$Type} from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$TrackGraphLocation, $TrackGraphLocation$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackGraphLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$TrackTargetingBlockItem$OverlapResult, $TrackTargetingBlockItem$OverlapResult$Type} from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBlockItem$OverlapResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrackBlockOutline$BezierPointSelection, $TrackBlockOutline$BezierPointSelection$Type} from "packages/com/simibubi/create/content/trains/track/$TrackBlockOutline$BezierPointSelection"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HandcarItem extends $BlockItem implements $IDeployAnywayBlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "placeHandcar"(trackGraphLocation: $TrackGraphLocation$Type, level: $Level$Type, player: $Player$Type, soundPos: $BlockPos$Type): boolean
public "useOnCurve"(selection: $TrackBlockOutline$BezierPointSelection$Type, stack: $ItemStack$Type): boolean
public static "withGraphLocation"(level: $Level$Type, pos: $BlockPos$Type, front: boolean, targetBezier: $BezierTrackPointLocation$Type, callback: $BiConsumer$Type<($TrackTargetingBlockItem$OverlapResult$Type), ($TrackGraphLocation$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandcarItem$Type = ($HandcarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandcarItem_ = $HandcarItem$Type;
}}
declare module "packages/com/railwayteam/railways/content/buffer/single_deco/$GenericDyeableSingleBufferBlock" {
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractDyeableSingleBufferBlock, $AbstractDyeableSingleBufferBlock$Type} from "packages/com/railwayteam/railways/content/buffer/single_deco/$AbstractDyeableSingleBufferBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"

export class $GenericDyeableSingleBufferBlock extends $AbstractDyeableSingleBufferBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type, shaper: $VoxelShaper$Type)

public static "createFactory"(shaper: $VoxelShaper$Type): $NonNullFunction<($BlockBehaviour$Properties), ($GenericDyeableSingleBufferBlock)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDyeableSingleBufferBlock$Type = ($GenericDyeableSingleBufferBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericDyeableSingleBufferBlock_ = $GenericDyeableSingleBufferBlock$Type;
}}
declare module "packages/com/railwayteam/railways/content/smokestack/block/$AbstractSmokeStackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ShapeWrapper, $ShapeWrapper$Type} from "packages/com/railwayteam/railways/util/$ShapeWrapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$SmokestackStyle, $SmokestackStyle$Type} from "packages/com/railwayteam/railways/content/smokestack/$SmokestackStyle"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractSmokeStackBlock<T extends $SmartBlockEntity> extends $Block implements $ProperWaterloggedBlock, $IWrenchable, $IBE<(T)> {
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "ENABLED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, shape: $ShapeWrapper$Type, variant: string)

public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "asItem"(): $Item
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "use"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(state: $BlockState$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<(T)>
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(T)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<(T)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<(T), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): T
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityClass"(): $Class<(T)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSmokeStackBlock$Type<T> = ($AbstractSmokeStackBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSmokeStackBlock_<T> = $AbstractSmokeStackBlock$Type<(T)>;
}}
