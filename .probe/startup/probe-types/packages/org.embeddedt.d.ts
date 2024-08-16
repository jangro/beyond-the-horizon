declare module "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $EmbeddiumBakedModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumBakedModelExtension$Type = ($EmbeddiumBakedModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmbeddiumBakedModelExtension_ = $EmbeddiumBakedModelExtension$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IChunkGenerator" {
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export interface $IChunkGenerator {

 "mfix$setAssociatedServerLevel"(arg0: $ServerLevel$Type): void

(arg0: $ServerLevel$Type): void
}

export namespace $IChunkGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkGenerator$Type = ($IChunkGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkGenerator_ = $IChunkGenerator$Type;
}}
declare module "packages/org/embeddedt/modernfix/forge/registry/$DelegateHolder" {
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $DelegateHolder<T> {

 "mfix$getDelegate"(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>): $Holder$Reference<(T)>
 "mfix$setDelegate"(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>, arg1: $Holder$Reference$Type<(T)>): void
}

export namespace $DelegateHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegateHolder$Type<T> = ($DelegateHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegateHolder_<T> = $DelegateHolder$Type<(T)>;
}}
declare module "packages/org/embeddedt/modernfix/world/$StrongholdLocationCache" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"

export class $StrongholdLocationCache extends $SavedData {

constructor()

public static "load"(arg: $CompoundTag$Type): $StrongholdLocationCache
public static "getFileId"(dimensionType: $Holder$Type<($DimensionType$Type)>): string
public "save"(compoundTag: $CompoundTag$Type): $CompoundTag
public "getChunkPosList"(): $List<($ChunkPos)>
public "setChunkPosList"(positions: $List$Type<($ChunkPos$Type)>): void
get "chunkPosList"(): $List<($ChunkPos)>
set "chunkPosList"(value: $List$Type<($ChunkPos$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrongholdLocationCache$Type = ($StrongholdLocationCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrongholdLocationCache_ = $StrongholdLocationCache$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {

 "embeddium$setCachingEnabled"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingPoseStack$Type = ($CachingPoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachingPoseStack_ = $CachingPoseStack$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {

 "clearCache"(): void
 "isCacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$Type = ($IBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockState_ = $IBlockState$Type;
}}
declare module "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $SafeBlockGetter implements $BlockGetter {

constructor(wrapped: $ServerLevel$Type)

public "getMaxBuildHeight"(): integer
public "getFluidState"(pos: $BlockPos$Type): $FluidState
public "getMinBuildHeight"(): integer
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getHeight"(): integer
public "getMaxLightLevel"(): integer
public "shouldUse"(): boolean
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getMinSection"(): integer
public "getMaxSection"(): integer
public "getSectionsCount"(): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "getModelDataManager"(): $ModelDataManager
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
get "maxBuildHeight"(): integer
get "minBuildHeight"(): integer
get "height"(): integer
get "maxLightLevel"(): integer
get "minSection"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeBlockGetter$Type = ($SafeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeBlockGetter_ = $SafeBlockGetter$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IServerLevel" {
import {$StrongholdLocationCache, $StrongholdLocationCache$Type} from "packages/org/embeddedt/modernfix/world/$StrongholdLocationCache"

export interface $IServerLevel {

 "mfix$getStrongholdCache"(): $StrongholdLocationCache

(): $StrongholdLocationCache
}

export namespace $IServerLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerLevel$Type = ($IServerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerLevel_ = $IServerLevel$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$IStructureCheck" {
import {$ChunkGeneratorStructureState, $ChunkGeneratorStructureState$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"

export interface $IStructureCheck {

 "mfix$setStructureState"(arg0: $ChunkGeneratorStructureState$Type): void

(arg0: $ChunkGeneratorStructureState$Type): void
}

export namespace $IStructureCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureCheck$Type = ($IStructureCheck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureCheck_ = $IStructureCheck$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {

 "mfix$getLastTickStartTime"(): long

(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$Type = ($ITimeTrackingServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITimeTrackingServer_ = $ITimeTrackingServer$Type;
}}
declare module "packages/org/embeddedt/modernfix/forge/mixin/bugfix/entity_pose_stack/$PoseStackAccessor" {
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackAccessor {

 "getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque<($PoseStack$Pose)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$Type = ($PoseStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$Type;
}}
declare module "packages/org/embeddedt/modernfix/duck/$ISafeBlockGetter" {
import {$SafeBlockGetter, $SafeBlockGetter$Type} from "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter"

export interface $ISafeBlockGetter {

 "mfix$getSafeBlockGetter"(): $SafeBlockGetter

(): $SafeBlockGetter
}

export namespace $ISafeBlockGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISafeBlockGetter$Type = ($ISafeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISafeBlockGetter_ = $ISafeBlockGetter$Type;
}}
declare module "packages/org/embeddedt/embeddium/model/$EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {

 "embeddium$epsilonize"(): void

(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpsilonizableBlockElement$Type = ($EpsilonizableBlockElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpsilonizableBlockElement_ = $EpsilonizableBlockElement$Type;
}}
