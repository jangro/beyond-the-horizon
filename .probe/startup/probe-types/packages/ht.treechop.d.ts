declare module "packages/ht/treechop/common/settings/$SettingsField" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Setting, $Setting$Type} from "packages/ht/treechop/common/settings/$Setting"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $SettingsField extends $Enum<($SettingsField)> {
static readonly "CHOPPING": $SettingsField
static readonly "FELLING": $SettingsField
static readonly "SNEAK_BEHAVIOR": $SettingsField
static readonly "TREES_MUST_HAVE_LEAVES": $SettingsField
static readonly "CHOP_IN_CREATIVE_MODE": $SettingsField
static readonly "VALUES": ($SettingsField)[]


public "getValueName"(arg0: any): string
public "getFancyName"(): string
public static "values"(): ($SettingsField)[]
public static "valueOf"(arg0: string): $SettingsField
public static "decode"(arg0: $FriendlyByteBuf$Type): $Setting
public "encode"(arg0: $FriendlyByteBuf$Type, arg1: any): void
public "getDefaultValue"(): any
public "getConfigKey"(): string
public "getValues"(): $Set<(any)>
get "fancyName"(): string
get "defaultValue"(): any
get "configKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsField$Type = (("chop_in_creative_mode") | ("trees_must_have_leaves") | ("felling") | ("chopping") | ("sneak_behavior")) | ($SettingsField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsField_ = $SettingsField$Type;
}}
declare module "packages/ht/treechop/common/block/$ChoppedLogBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockImitator, $BlockImitator$Type} from "packages/ht/treechop/common/block/$BlockImitator"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ChoppedLogShape, $ChoppedLogShape$Type} from "packages/ht/treechop/common/properties/$ChoppedLogShape"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IChoppableBlock, $IChoppableBlock$Type} from "packages/ht/treechop/api/$IChoppableBlock"
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
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ChoppedLogBlock extends $BlockImitator implements $IChoppableBlock, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "DEFAULT_SUPPORT_FACTOR": integer
static readonly "DEFAULT_MAX_NUM_CHOPS": integer
static readonly "DEFAULT_UNCHOPPED_RADIUS": integer
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getImitatedBlockState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getNumChops"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
public "chop"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: integer, arg6: boolean): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getMaxNumChops"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
public "getSupportFactor"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): double
public static "getPlacementShape"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ChoppedLogShape
public "isChoppable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $ChoppedLogBlock$Type = ($ChoppedLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChoppedLogBlock_ = $ChoppedLogBlock$Type;
}}
declare module "packages/ht/treechop/common/settings/$SneakBehavior" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SneakBehavior extends $Enum<($SneakBehavior)> implements $StringRepresentable {
static readonly "NONE": $SneakBehavior
static readonly "INVERT_CHOPPING": $SneakBehavior
static readonly "INVERT_FELLING": $SneakBehavior
static readonly "maxNameLength": integer


public "toString"(): string
public static "values"(): ($SneakBehavior)[]
public static "valueOf"(arg0: string): $SneakBehavior
public "getSerializedName"(): string
public "shouldChangeChopBehavior"(arg0: $Entity$Type): boolean
public "shouldChangeFellBehavior"(arg0: $Entity$Type): boolean
public "cycle"(): $SneakBehavior
public "getFancyText"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "fancyText"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SneakBehavior$Type = (("none") | ("invert_felling") | ("invert_chopping")) | ($SneakBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SneakBehavior_ = $SneakBehavior$Type;
}}
declare module "packages/ht/treechop/common/settings/$SyncedChopData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChopSettings, $ChopSettings$Type} from "packages/ht/treechop/common/settings/$ChopSettings"

export class $SyncedChopData {

constructor(arg0: $ChopSettings$Type)

public "setSynced"(): void
public "getSettings"(): $ChopSettings
public "readSaveData"(arg0: $CompoundTag$Type): $SyncedChopData
public "makeSaveData"(): $CompoundTag
public "isSynced"(): boolean
get "settings"(): $ChopSettings
get "synced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedChopData$Type = ($SyncedChopData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedChopData_ = $SyncedChopData$Type;
}}
declare module "packages/ht/treechop/api/$IFellableBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITreeChopBlockBehavior, $ITreeChopBlockBehavior$Type} from "packages/ht/treechop/api/$ITreeChopBlockBehavior"

export interface $IFellableBlock extends $ITreeChopBlockBehavior {

 "getSupportFactor"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): double

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): double
}

export namespace $IFellableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFellableBlock$Type = ($IFellableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFellableBlock_ = $IFellableBlock$Type;
}}
declare module "packages/ht/treechop/common/settings/$ChopSettings" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Setting, $Setting$Type} from "packages/ht/treechop/common/settings/$Setting"
import {$SettingsField, $SettingsField$Type} from "packages/ht/treechop/common/settings/$SettingsField"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SneakBehavior, $SneakBehavior$Type} from "packages/ht/treechop/common/settings/$SneakBehavior"

export class $ChopSettings {

constructor()
constructor(arg0: $ChopSettings$Type)

public "get"<T>(arg0: $SettingsField$Type, arg1: $Class$Type<(T)>): T
public "get"(arg0: $SettingsField$Type): any
public "equals"(arg0: any): boolean
public "set"(arg0: $Pair$Type<($SettingsField$Type), (any)>): $ChopSettings
public "set"(arg0: $SettingsField$Type, arg1: any): $ChopSettings
public "set"(arg0: $Setting$Type): $ChopSettings
public "forEach"(arg0: $BiConsumer$Type<($SettingsField$Type), (any)>): void
public "copyFrom"(arg0: $ChopSettings$Type): $ChopSettings
public "getAll"(): $List<($Setting)>
public "getSetting"(arg0: $SettingsField$Type): $Setting
public "setTreesMustHaveLeaves"(arg0: boolean): $ChopSettings
public "getChopInCreativeMode"(): boolean
public "getTreesMustHaveLeaves"(): boolean
public "setChopInCreativeMode"(arg0: boolean): $ChopSettings
public "setChoppingEnabled"(arg0: boolean): $ChopSettings
public "setFellingEnabled"(arg0: boolean): $ChopSettings
public "getChoppingEnabled"(): boolean
public "getFellingEnabled"(): boolean
public "getSneakBehavior"(): $SneakBehavior
public "setSneakBehavior"(arg0: $SneakBehavior$Type): $ChopSettings
get "all"(): $List<($Setting)>
set "treesMustHaveLeaves"(value: boolean)
get "chopInCreativeMode"(): boolean
get "treesMustHaveLeaves"(): boolean
set "chopInCreativeMode"(value: boolean)
set "choppingEnabled"(value: boolean)
set "fellingEnabled"(value: boolean)
get "choppingEnabled"(): boolean
get "fellingEnabled"(): boolean
get "sneakBehavior"(): $SneakBehavior
set "sneakBehavior"(value: $SneakBehavior$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChopSettings$Type = ($ChopSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChopSettings_ = $ChopSettings$Type;
}}
declare module "packages/ht/treechop/common/properties/$ChoppedLogShape" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ChoppedLogShape extends $Enum<($ChoppedLogShape)> implements $StringRepresentable {
static readonly "PILLAR_Y": $ChoppedLogShape
static readonly "CORNER_NWEU": $ChoppedLogShape
static readonly "CORNER_NWED": $ChoppedLogShape
static readonly "CORNER_NSWU": $ChoppedLogShape
static readonly "CORNER_NSWD": $ChoppedLogShape
static readonly "CORNER_NWUD": $ChoppedLogShape
static readonly "CORNER_SWEU": $ChoppedLogShape
static readonly "CORNER_SWED": $ChoppedLogShape
static readonly "PILLAR_Z": $ChoppedLogShape
static readonly "CORNER_SWUD": $ChoppedLogShape
static readonly "CORNER_NSEU": $ChoppedLogShape
static readonly "CORNER_NSED": $ChoppedLogShape
static readonly "CORNER_NEUD": $ChoppedLogShape
static readonly "PILLAR_X": $ChoppedLogShape
static readonly "CORNER_SEUD": $ChoppedLogShape
static readonly "END_N": $ChoppedLogShape
static readonly "END_W": $ChoppedLogShape
static readonly "CORNER_NWU": $ChoppedLogShape
static readonly "CORNER_NWD": $ChoppedLogShape
static readonly "END_S": $ChoppedLogShape
static readonly "CORNER_WEU": $ChoppedLogShape
static readonly "CORNER_WED": $ChoppedLogShape
static readonly "CORNER_SWU": $ChoppedLogShape
static readonly "CORNER_SWD": $ChoppedLogShape
static readonly "CORNER_WUD": $ChoppedLogShape
static readonly "END_E": $ChoppedLogShape
static readonly "CORNER_NEU": $ChoppedLogShape
static readonly "CORNER_NED": $ChoppedLogShape
static readonly "END_U": $ChoppedLogShape
static readonly "END_D": $ChoppedLogShape
static readonly "CORNER_NUD": $ChoppedLogShape
static readonly "CORNER_SEU": $ChoppedLogShape
static readonly "CORNER_SED": $ChoppedLogShape
static readonly "CORNER_EUD": $ChoppedLogShape
static readonly "CORNER_SUD": $ChoppedLogShape
static readonly "CORNER_NW": $ChoppedLogShape
static readonly "SLAB_YZ": $ChoppedLogShape
static readonly "CORNER_SW": $ChoppedLogShape
static readonly "CORNER_WU": $ChoppedLogShape
static readonly "CORNER_WD": $ChoppedLogShape
static readonly "CORNER_NE": $ChoppedLogShape
static readonly "SLAB_XY": $ChoppedLogShape
static readonly "CORNER_NU": $ChoppedLogShape
static readonly "CORNER_ND": $ChoppedLogShape
static readonly "CORNER_SE": $ChoppedLogShape
static readonly "CORNER_EU": $ChoppedLogShape
static readonly "CORNER_ED": $ChoppedLogShape
static readonly "CORNER_SU": $ChoppedLogShape
static readonly "CORNER_SD": $ChoppedLogShape
static readonly "SLAB_XZ": $ChoppedLogShape
static readonly "SIDE_W": $ChoppedLogShape
static readonly "SIDE_N": $ChoppedLogShape
static readonly "SIDE_E": $ChoppedLogShape
static readonly "SIDE_S": $ChoppedLogShape
static readonly "SIDE_U": $ChoppedLogShape
static readonly "SIDE_D": $ChoppedLogShape
static readonly "MAX_RADIUS": integer


public "toString"(): string
public static "values"(): ($ChoppedLogShape)[]
public static "valueOf"(arg0: string): $ChoppedLogShape
public "getSerializedName"(): string
public "getBoundingBox"(arg0: integer): $AABB
public "isSideOpen"(arg0: $Direction$Type): boolean
public static "forOpenSides"(arg0: byte): $ChoppedLogShape
public "getOcclusionShape"(): $VoxelShape
public "getSolidSides"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Set<($Direction)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "occlusionShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChoppedLogShape$Type = (("corner_nud") | ("corner_nwed") | ("corner_swd") | ("corner_nseu") | ("corner_wu") | ("corner_nwud") | ("corner_su") | ("corner_sw") | ("slab_xy") | ("slab_xz") | ("corner_nsed") | ("corner_neu") | ("corner_nswd") | ("corner_ned") | ("corner_nweu") | ("corner_swu") | ("side_n") | ("side_s") | ("side_w") | ("side_u") | ("corner_nwd") | ("end_d") | ("end_e") | ("corner_eu") | ("end_n") | ("corner_sud") | ("end_s") | ("side_e") | ("corner_swud") | ("corner_wud") | ("side_d") | ("corner_ed") | ("end_w") | ("end_u") | ("corner_eud") | ("corner_seud") | ("corner_nswu") | ("corner_sd") | ("corner_se") | ("corner_nu") | ("corner_seu") | ("corner_nw") | ("corner_sweu") | ("corner_weu") | ("corner_wd") | ("corner_nwu") | ("pillar_z") | ("corner_ne") | ("pillar_y") | ("corner_nd") | ("slab_yz") | ("corner_sed") | ("pillar_x") | ("corner_swed") | ("corner_neud") | ("corner_wed")) | ($ChoppedLogShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChoppedLogShape_ = $ChoppedLogShape$Type;
}}
declare module "packages/ht/treechop/common/settings/$Setting" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SettingsField, $SettingsField$Type} from "packages/ht/treechop/common/settings/$SettingsField"

export class $Setting {

constructor(arg0: $SettingsField$Type, arg1: any)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "decode"(arg0: $FriendlyByteBuf$Type): $Setting
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "getValue"(): any
public "getField"(): $SettingsField
public "set"(arg0: any): void
get "value"(): any
get "field"(): $SettingsField
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Setting$Type = ($Setting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Setting_ = $Setting$Type;
}}
declare module "packages/ht/treechop/common/settings/$ChoppingEntity" {
import {$SyncedChopData, $SyncedChopData$Type} from "packages/ht/treechop/common/settings/$SyncedChopData"

export interface $ChoppingEntity {

 "setChopData"(arg0: $SyncedChopData$Type): $SyncedChopData
 "getChopData"(): $SyncedChopData
}

export namespace $ChoppingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChoppingEntity$Type = ($ChoppingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChoppingEntity_ = $ChoppingEntity$Type;
}}
declare module "packages/ht/treechop/api/$ITreeChopBlockBehavior" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITreeChopBlockBehavior {

}

export namespace $ITreeChopBlockBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITreeChopBlockBehavior$Type = ($ITreeChopBlockBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITreeChopBlockBehavior_ = $ITreeChopBlockBehavior$Type;
}}
declare module "packages/ht/treechop/api/$IChoppableBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IFellableBlock, $IFellableBlock$Type} from "packages/ht/treechop/api/$IFellableBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IChoppableBlock extends $IFellableBlock {

 "isChoppable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
 "getNumChops"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
 "chop"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type, arg5: integer, arg6: boolean): void
 "getMaxNumChops"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): integer
 "getSupportFactor"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): double
}

export namespace $IChoppableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChoppableBlock$Type = ($IChoppableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChoppableBlock_ = $IChoppableBlock$Type;
}}
declare module "packages/ht/treechop/common/block/$BlockImitator" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockImitator extends $Block {
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

public "getImitatedBlockState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "handlePrecipitation"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Biome$Precipitation$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockImitator$Type = ($BlockImitator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockImitator_ = $BlockImitator$Type;
}}
declare module "packages/ht/treechop/common/block/$ForgeChoppedLogBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ChoppedLogBlock, $ChoppedLogBlock$Type} from "packages/ht/treechop/common/block/$ChoppedLogBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ForgeChoppedLogBlock extends $ChoppedLogBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "DEFAULT_SUPPORT_FACTOR": integer
static readonly "DEFAULT_MAX_NUM_CHOPS": integer
static readonly "DEFAULT_UNCHOPPED_RADIUS": integer
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
public "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isBurning"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeChoppedLogBlock$Type = ($ForgeChoppedLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeChoppedLogBlock_ = $ForgeChoppedLogBlock$Type;
}}
