declare module "packages/net/irisshaders/iris/texture/pbr/$PBRDumpable" {
import {$Dumpable, $Dumpable$Type} from "packages/net/minecraft/client/renderer/texture/$Dumpable"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PBRDumpable extends $Dumpable {

 "getDefaultDumpLocation"(): $ResourceLocation
 "dumpContents"(arg0: $ResourceLocation$Type, arg1: $Path$Type): void
}

export namespace $PBRDumpable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRDumpable$Type = ($PBRDumpable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRDumpable_ = $PBRDumpable$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$BufferBuilderExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderExt {

 "splitStrip"(): void

(): void
}

export namespace $BufferBuilderExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExt$Type = ($BufferBuilderExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderExt_ = $BufferBuilderExt$Type;
}}
declare module "packages/net/irisshaders/iris/vertices/$IrisExtendedBufferBuilder" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export interface $IrisExtendedBufferBuilder {

 "iris$isTerrain"(): boolean
 "iris$mode"(): $VertexFormat$Mode
 "iris$currentBlock"(): short
 "iris$vertexCount"(): integer
 "iris$extending"(): boolean
 "iris$format"(): $VertexFormat
 "iris$currentLocalPosZ"(): integer
 "iris$currentRenderType"(): short
 "iris$incrementVertexCount"(): void
 "iris$resetVertexCount"(): void
 "iris$currentLocalPosY"(): integer
 "iris$currentLocalPosX"(): integer
 "iris$injectNormalAndUV1"(): boolean
}

export namespace $IrisExtendedBufferBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IrisExtendedBufferBuilder$Type = ($IrisExtendedBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IrisExtendedBufferBuilder_ = $IrisExtendedBufferBuilder$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/$LightTextureAccessor" {
import {$DynamicTexture, $DynamicTexture$Type} from "packages/net/minecraft/client/renderer/texture/$DynamicTexture"

export interface $LightTextureAccessor {

 "getLightTexture"(): $DynamicTexture

(): $DynamicTexture
}

export namespace $LightTextureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTextureAccessor$Type = ($LightTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightTextureAccessor_ = $LightTextureAccessor$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/mixin/$RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {

 "shouldSortOnUpload"(): boolean

(): boolean
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$Type = ($RenderTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$AnimationMetadataSectionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimationMetadataSectionAccessor {

 "getFrameWidth"(): integer
 "getFrameHeight"(): integer
 "setFrameHeight"(arg0: integer): void
 "setFrameWidth"(arg0: integer): void
}

export namespace $AnimationMetadataSectionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationMetadataSectionAccessor$Type = ($AnimationMetadataSectionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationMetadataSectionAccessor_ = $AnimationMetadataSectionAccessor$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/mixin/$RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {

}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$Type = ($RenderStateShardAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderStateShardAccessor_ = $RenderStateShardAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/texture/$SpriteContentsExtension" {
import {$SpriteContents$Ticker, $SpriteContents$Ticker$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$Ticker"

export interface $SpriteContentsExtension {

 "getCreatedTicker"(): $SpriteContents$Ticker

(): $SpriteContents$Ticker
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/mixin/$CompositeStateAccessor" {
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard"

export interface $CompositeStateAccessor {

 "getTransparency"(): $RenderStateShard$TransparencyStateShard

(): $RenderStateShard$TransparencyStateShard
}

export namespace $CompositeStateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeStateAccessor$Type = ($CompositeStateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeStateAccessor_ = $CompositeStateAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/vertices/$ExtendingBufferBuilder" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export interface $ExtendingBufferBuilder {

 "iris$beginWithoutExtending"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type): void

(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type): void
}

export namespace $ExtendingBufferBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendingBufferBuilder$Type = ($ExtendingBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendingBufferBuilder_ = $ExtendingBufferBuilder$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/loader/$AtlasPBRLoader$PBRTextureAtlasSprite" {
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $AtlasPBRLoader$PBRTextureAtlasSprite extends $TextureAtlasSprite {
 "u0": float
 "u1": float
 "v0": float
 "v1": float


public "getBaseSprite"(): $TextureAtlasSprite
get "baseSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtlasPBRLoader$PBRTextureAtlasSprite$Type = ($AtlasPBRLoader$PBRTextureAtlasSprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtlasPBRLoader$PBRTextureAtlasSprite_ = $AtlasPBRLoader$PBRTextureAtlasSprite$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/rendertype/$RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {

 "shouldSortOnUpload"(): boolean

(): boolean
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$Type = ($RenderTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/$LevelRendererAccessor" {
import {$EntityRenderDispatcher, $EntityRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $LevelRendererAccessor {

 "invokeRenderChunkLayer"(arg0: $RenderType$Type, arg1: $PoseStack$Type, arg2: double, arg3: double, arg4: double, arg5: $Matrix4f$Type): void
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
 "shouldRegenerateClouds"(): boolean
 "setShouldRegenerateClouds"(arg0: boolean): void
 "getLevel"(): $ClientLevel
 "setRenderBuffers"(arg0: $RenderBuffers$Type): void
 "invokeRenderEntity"(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$Type, arg6: $MultiBufferSource$Type): void
 "getRenderBuffers"(): $RenderBuffers
 "invokeSetupRender"(arg0: $Camera$Type, arg1: $Frustum$Type, arg2: boolean, arg3: boolean): void
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/api/v0/item/$IrisItemLightProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IrisItemLightProvider {

 "getLightColor"(player: $Player$Type, stack: $ItemStack$Type): $Vector3f
 "getLightEmission"(player: $Player$Type, stack: $ItemStack$Type): integer
}

export namespace $IrisItemLightProvider {
const DEFAULT_LIGHT_COLOR: $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IrisItemLightProvider$Type = ($IrisItemLightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IrisItemLightProvider_ = $IrisItemLightProvider$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/mixin/$BufferSourceAccessor" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $BufferSourceAccessor {

 "getFixedBuffers"(): $Map<($RenderType), ($BufferBuilder)>

(): $Map<($RenderType), ($BufferBuilder)>
}

export namespace $BufferSourceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferSourceAccessor$Type = ($BufferSourceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferSourceAccessor_ = $BufferSourceAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/pipeline/programs/$ShaderInstanceInterface" {
import {$ResourceProvider, $ResourceProvider$Type} from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ShaderInstanceInterface {

 "iris$createExtraShaders"(arg0: $ResourceProvider$Type, arg1: $ResourceLocation$Type): void

(arg0: $ResourceProvider$Type, arg1: $ResourceLocation$Type): void
}

export namespace $ShaderInstanceInterface {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstanceInterface$Type = ($ShaderInstanceInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderInstanceInterface_ = $ShaderInstanceInterface$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$RenderBuffersExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderBuffersExt {

 "endLevelRendering"(): void
 "beginLevelRendering"(): void
}

export namespace $RenderBuffersExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBuffersExt$Type = ($RenderBuffersExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBuffersExt_ = $RenderBuffersExt$Type;
}}
declare module "packages/net/irisshaders/iris/fantastic/$PhasedParticleEngine" {
import {$ParticleRenderingPhase, $ParticleRenderingPhase$Type} from "packages/net/irisshaders/iris/fantastic/$ParticleRenderingPhase"

export interface $PhasedParticleEngine {

 "setParticleRenderingPhase"(arg0: $ParticleRenderingPhase$Type): void

(arg0: $ParticleRenderingPhase$Type): void
}

export namespace $PhasedParticleEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhasedParticleEngine$Type = ($PhasedParticleEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhasedParticleEngine_ = $PhasedParticleEngine$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/$PBRAtlasTexture" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$AtlasPBRLoader$PBRTextureAtlasSprite, $AtlasPBRLoader$PBRTextureAtlasSprite$Type} from "packages/net/irisshaders/iris/texture/pbr/loader/$AtlasPBRLoader$PBRTextureAtlasSprite"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$PBRDumpable, $PBRDumpable$Type} from "packages/net/irisshaders/iris/texture/pbr/$PBRDumpable"
import {$SpriteContents$Ticker, $SpriteContents$Ticker$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$Ticker"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PBRType, $PBRType$Type} from "packages/net/irisshaders/iris/texture/pbr/$PBRType"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$AbstractTexture, $AbstractTexture$Type} from "packages/net/minecraft/client/renderer/texture/$AbstractTexture"

export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable {
static readonly "NOT_ASSIGNED": integer

constructor(atlasTexture: $TextureAtlas$Type, type: $PBRType$Type)

public "tryUpload"(atlasWidth: integer, atlasHeight: integer, mipLevel: integer): boolean
public "addSprite"(sprite: $AtlasPBRLoader$PBRTextureAtlasSprite$Type): void
public static "syncAnimation"(source: $SpriteContents$Ticker$Type, target: $SpriteContents$Ticker$Type): void
public "getAtlasId"(): $ResourceLocation
public "clear"(): void
public "close"(): void
public "getType"(): $PBRType
public "load"(manager: $ResourceManager$Type): void
public "upload"(atlasWidth: integer, atlasHeight: integer, mipLevel: integer): void
public "dumpContents"(id: $ResourceLocation$Type, path: $Path$Type): void
public "getDefaultDumpLocation"(): $ResourceLocation
public "cycleAnimationFrames"(): void
public "getSprite"(id: $ResourceLocation$Type): $AtlasPBRLoader$PBRTextureAtlasSprite
get "atlasId"(): $ResourceLocation
get "type"(): $PBRType
get "defaultDumpLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRAtlasTexture$Type = ($PBRAtlasTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRAtlasTexture_ = $PBRAtlasTexture$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$DrawCallTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DrawCallTrackingRenderBuffers {

 "resetDrawCounts"(): void
 "getRenderTypes"(): integer
 "getDrawCalls"(): integer
}

export namespace $DrawCallTrackingRenderBuffers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawCallTrackingRenderBuffers$Type = ($DrawCallTrackingRenderBuffers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawCallTrackingRenderBuffers_ = $DrawCallTrackingRenderBuffers$Type;
}}
declare module "packages/net/irisshaders/iris/compat/sodium/mixin/shadow_map/$SodiumWorldRendererAccessor" {
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockDestructionProgress, $BlockDestructionProgress$Type} from "packages/net/minecraft/server/level/$BlockDestructionProgress"
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"

export interface $SodiumWorldRendererAccessor {

 "invokeRenderBlockEntities"(arg0: $PoseStack$Type, arg1: $RenderBuffers$Type, arg2: $Long2ObjectMap$Type<($SortedSet$Type<($BlockDestructionProgress$Type)>)>, arg3: float, arg4: $MultiBufferSource$BufferSource$Type, arg5: double, arg6: double, arg7: double, arg8: $BlockEntityRenderDispatcher$Type): void
 "invokeRenderGlobalBlockEntities"(arg0: $PoseStack$Type, arg1: $RenderBuffers$Type, arg2: $Long2ObjectMap$Type<($SortedSet$Type<($BlockDestructionProgress$Type)>)>, arg3: float, arg4: $MultiBufferSource$BufferSource$Type, arg5: double, arg6: double, arg7: double, arg8: $BlockEntityRenderDispatcher$Type): void
}

export namespace $SodiumWorldRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRendererAccessor$Type = ($SodiumWorldRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumWorldRendererAccessor_ = $SodiumWorldRendererAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$SimpleTextureAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SimpleTextureAccessor {

 "getLocation"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $SimpleTextureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTextureAccessor$Type = ($SimpleTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTextureAccessor_ = $SimpleTextureAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/fantastic/$ParticleRenderingPhase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ParticleRenderingPhase extends $Enum<($ParticleRenderingPhase)> {
static readonly "EVERYTHING": $ParticleRenderingPhase
static readonly "OPAQUE": $ParticleRenderingPhase
static readonly "TRANSLUCENT": $ParticleRenderingPhase


public static "values"(): ($ParticleRenderingPhase)[]
public static "valueOf"(name: string): $ParticleRenderingPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleRenderingPhase$Type = (("translucent") | ("opaque") | ("everything")) | ($ParticleRenderingPhase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleRenderingPhase_ = $ParticleRenderingPhase$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsAnimatedTextureAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimatedTextureAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "invokeUploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $SpriteContentsAnimatedTextureAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimatedTextureAccessor$Type = ($SpriteContentsAnimatedTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimatedTextureAccessor_ = $SpriteContentsAnimatedTextureAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/$PBRAtlasHolder" {
import {$PBRAtlasTexture, $PBRAtlasTexture$Type} from "packages/net/irisshaders/iris/texture/pbr/$PBRAtlasTexture"

export class $PBRAtlasHolder {

constructor()

public "cycleAnimationFrames"(): void
public "getNormalAtlas"(): $PBRAtlasTexture
public "setNormalAtlas"(atlas: $PBRAtlasTexture$Type): void
public "getSpecularAtlas"(): $PBRAtlasTexture
public "setSpecularAtlas"(atlas: $PBRAtlasTexture$Type): void
get "normalAtlas"(): $PBRAtlasTexture
set "normalAtlas"(value: $PBRAtlasTexture$Type)
get "specularAtlas"(): $PBRAtlasTexture
set "specularAtlas"(value: $PBRAtlasTexture$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRAtlasHolder$Type = ($PBRAtlasHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRAtlasHolder_ = $PBRAtlasHolder$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$MemoryTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingRenderBuffers {

 "freeAndDeleteBuffers"(): void
 "getEntityBufferAllocatedSize"(): integer
 "getMiscBufferAllocatedSize"(): integer
 "getMaxBegins"(): integer
}

export namespace $MemoryTrackingRenderBuffers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryTrackingRenderBuffers$Type = ($MemoryTrackingRenderBuffers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryTrackingRenderBuffers_ = $MemoryTrackingRenderBuffers$Type;
}}
declare module "packages/net/irisshaders/iris/vertices/$BlockSensitiveBufferBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockSensitiveBufferBuilder {

 "endBlock"(): void
 "beginBlock"(arg0: short, arg1: short, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $BlockSensitiveBufferBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSensitiveBufferBuilder$Type = ($BlockSensitiveBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSensitiveBufferBuilder_ = $BlockSensitiveBufferBuilder$Type;
}}
declare module "packages/net/irisshaders/iris/parsing/$ExtendedBiome" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedBiome {

 "getBiomeCategory"(): integer
 "getDownfall"(): float
 "setBiomeCategory"(arg0: integer): void
}

export namespace $ExtendedBiome {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBiome$Type = ($ExtendedBiome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBiome_ = $ExtendedBiome$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$TransparencyType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TransparencyType extends $Enum<($TransparencyType)> {
static readonly "OPAQUE": $TransparencyType
static readonly "OPAQUE_DECAL": $TransparencyType
static readonly "GENERAL_TRANSPARENT": $TransparencyType
static readonly "DECAL": $TransparencyType
static readonly "WATER_MASK": $TransparencyType
static readonly "LINES": $TransparencyType


public static "values"(): ($TransparencyType)[]
public static "valueOf"(name: string): $TransparencyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransparencyType$Type = (("water_mask") | ("opaque") | ("opaque_decal") | ("general_transparent") | ("lines") | ("decal")) | ($TransparencyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransparencyType_ = $TransparencyType$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/$DimensionTypeAccessor" {
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"

export interface $DimensionTypeAccessor {

 "getFixedTime"(): $OptionalLong
 "getAmbientLight"(): float
}

export namespace $DimensionTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionTypeAccessor$Type = ($DimensionTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionTypeAccessor_ = $DimensionTypeAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/targets/$Blaze3dRenderTargetExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Blaze3dRenderTargetExt {

 "iris$getColorBufferVersion"(): integer
 "iris$getDepthBufferVersion"(): integer
}

export namespace $Blaze3dRenderTargetExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Blaze3dRenderTargetExt$Type = ($Blaze3dRenderTargetExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blaze3dRenderTargetExt_ = $Blaze3dRenderTargetExt$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/$PBRSpriteHolder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $PBRSpriteHolder {

constructor()

public "close"(): void
public "getNormalSprite"(): $TextureAtlasSprite
public "getSpecularSprite"(): $TextureAtlasSprite
public "setSpecularSprite"(sprite: $TextureAtlasSprite$Type): void
public "setNormalSprite"(sprite: $TextureAtlasSprite$Type): void
get "normalSprite"(): $TextureAtlasSprite
get "specularSprite"(): $TextureAtlasSprite
set "specularSprite"(value: $TextureAtlasSprite$Type)
set "normalSprite"(value: $TextureAtlasSprite$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRSpriteHolder$Type = ($PBRSpriteHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRSpriteHolder_ = $PBRSpriteHolder$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/$SpriteContentsExtension" {
import {$PBRSpriteHolder, $PBRSpriteHolder$Type} from "packages/net/irisshaders/iris/texture/pbr/$PBRSpriteHolder"

export interface $SpriteContentsExtension {

 "getPBRHolder"(): $PBRSpriteHolder
 "getOrCreatePBRHolder"(): $PBRSpriteHolder
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$BlendingStateHolder" {
import {$TransparencyType, $TransparencyType$Type} from "packages/net/irisshaders/batchedentityrendering/impl/$TransparencyType"

export interface $BlendingStateHolder {

 "getTransparencyType"(): $TransparencyType
 "setTransparencyType"(arg0: $TransparencyType$Type): void
}

export namespace $BlendingStateHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendingStateHolder$Type = ($BlendingStateHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendingStateHolder_ = $BlendingStateHolder$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsTickerAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor {

 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "setSubFrame"(arg0: integer): void
 "getSubFrame"(): integer
 "setFrame"(arg0: integer): void
 "getFrame"(): integer
}

export namespace $SpriteContentsTickerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsTickerAccessor$Type = ($SpriteContentsTickerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsTickerAccessor_ = $SpriteContentsTickerAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/$GameRendererAccessor" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {

 "getRenderHand"(): boolean
 "getPanoramicMode"(): boolean
 "invokeBobView"(arg0: $PoseStack$Type, arg1: float): void
 "invokeBobHurt"(arg0: $PoseStack$Type, arg1: float): void
 "invokeGetFov"(arg0: $Camera$Type, arg1: float, arg2: boolean): double
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/shadows/$CullingDataCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CullingDataCache {

 "saveState"(): void
 "restoreState"(): void
}

export namespace $CullingDataCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CullingDataCache$Type = ($CullingDataCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CullingDataCache_ = $CullingDataCache$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/rendertype/$RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {

 "getName"(): string

(): string
}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$Type = ($RenderStateShardAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderStateShardAccessor_ = $RenderStateShardAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/$TextureAtlasExtension" {
import {$PBRAtlasHolder, $PBRAtlasHolder$Type} from "packages/net/irisshaders/iris/texture/pbr/$PBRAtlasHolder"

export interface $TextureAtlasExtension {

 "getPBRHolder"(): $PBRAtlasHolder
 "getOrCreatePBRHolder"(): $PBRAtlasHolder
}

export namespace $TextureAtlasExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasExtension$Type = ($TextureAtlasExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasExtension_ = $TextureAtlasExtension$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsFrameInfoAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsFrameInfoAccessor {

 "getIndex"(): integer
 "getTime"(): integer
}

export namespace $SpriteContentsFrameInfoAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsFrameInfoAccessor$Type = ($SpriteContentsFrameInfoAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsFrameInfoAccessor_ = $SpriteContentsFrameInfoAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/helpers/$VertexBufferHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexBufferHelper {

 "restoreBinding"(): void
 "saveBinding"(): void
}

export namespace $VertexBufferHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferHelper$Type = ($VertexBufferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferHelper_ = $VertexBufferHelper$Type;
}}
declare module "packages/net/irisshaders/iris/compat/sodium/mixin/vertex_format/$CommonVertexAttributeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommonVertexAttributeAccessor {

}

export namespace $CommonVertexAttributeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonVertexAttributeAccessor$Type = ($CommonVertexAttributeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonVertexAttributeAccessor_ = $CommonVertexAttributeAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/texture/pbr/$PBRType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PBRType extends $Enum<($PBRType)> {
static readonly "NORMAL": $PBRType
static readonly "SPECULAR": $PBRType


public static "values"(): ($PBRType)[]
public static "valueOf"(name: string): $PBRType
public "getDefaultValue"(): integer
public static "removeSuffix"(path: string): string
public "getSuffix"(): string
public static "fromFileLocation"(location: string): $PBRType
public "appendSuffix"(path: string): string
get "defaultValue"(): integer
get "suffix"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRType$Type = (("normal") | ("specular")) | ($PBRType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRType_ = $PBRType$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$TextureAtlasAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $TextureAtlasAccessor {

 "getTexturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "callGetHeight"(): integer
 "callGetWidth"(): integer
 "getMipLevel"(): integer
}

export namespace $TextureAtlasAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$Type = ($TextureAtlasAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasAccessor_ = $TextureAtlasAccessor$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/mixin/$ChunkBufferBuilderPackAccessor" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ChunkBufferBuilderPackAccessor {

 "getBuilders"(): $Map<($RenderType), ($BufferBuilder)>

(): $Map<($RenderType), ($BufferBuilder)>
}

export namespace $ChunkBufferBuilderPackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBufferBuilderPackAccessor$Type = ($ChunkBufferBuilderPackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBufferBuilderPackAccessor_ = $ChunkBufferBuilderPackAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/$ProgramTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ProgramTypeAccessor {

}

export namespace $ProgramTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramTypeAccessor$Type = ($ProgramTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgramTypeAccessor_ = $ProgramTypeAccessor$Type;
}}
declare module "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$AnimatedTexture"

export interface $SpriteContentsAccessor {

 "getAnimatedTexture"(): $SpriteContents$AnimatedTexture

(): $SpriteContents$AnimatedTexture
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$Type = ($SpriteContentsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/mixin/$OutlineBufferSourceAccessor" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export interface $OutlineBufferSourceAccessor {

 "getOutlineBufferSource"(): $MultiBufferSource$BufferSource

(): $MultiBufferSource$BufferSource
}

export namespace $OutlineBufferSourceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineBufferSourceAccessor$Type = ($OutlineBufferSourceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutlineBufferSourceAccessor_ = $OutlineBufferSourceAccessor$Type;
}}
declare module "packages/net/irisshaders/batchedentityrendering/impl/$MemoryTrackingBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingBuffer {

 "getUsedSize"(): integer
 "getAllocatedSize"(): integer
 "freeAndDeleteBuffer"(): void
}

export namespace $MemoryTrackingBuffer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryTrackingBuffer$Type = ($MemoryTrackingBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryTrackingBuffer_ = $MemoryTrackingBuffer$Type;
}}
