declare module "packages/appeng/thirdparty/fabric/$SpriteFinderImpl" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$QuadView, $QuadView$Type} from "packages/appeng/thirdparty/fabric/$QuadView"
import {$SpriteFinder, $SpriteFinder$Type} from "packages/appeng/thirdparty/fabric/$SpriteFinder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $SpriteFinderImpl implements $SpriteFinder {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($TextureAtlasSprite$Type)>, arg1: $TextureAtlas$Type)

public static "get"(arg0: $TextureAtlas$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$Type = ($SpriteFinderImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl_ = $SpriteFinderImpl$Type;
}}
declare module "packages/appeng/thirdparty/fabric/$SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$Type} from "packages/appeng/thirdparty/fabric/$SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess {

 "fabric_spriteFinder"(): $SpriteFinderImpl

(): $SpriteFinderImpl
}

export namespace $SpriteFinderImpl$SpriteFinderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$Type = ($SpriteFinderImpl$SpriteFinderAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl$SpriteFinderAccess_ = $SpriteFinderImpl$SpriteFinderAccess$Type;
}}
declare module "packages/appeng/thirdparty/fabric/$MutableQuadView" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$QuadView, $QuadView$Type} from "packages/appeng/thirdparty/fabric/$QuadView"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $MutableQuadView extends $QuadView {

 "colorIndex"(arg0: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$Type, arg1: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$Type, arg1: $Direction$Type): $MutableQuadView
 "cullFace"(arg0: $Direction$Type): $MutableQuadView
 "faceNormal"(): $Vector3f
 "colorIndex"(): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$Type): $BakedQuad
 "nominalFace"(): $Direction
 "copyUv"(arg0: integer, arg1: $Vector2f$Type): $Vector2f
 "copyNormal"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "toBlockBakedQuad"(): $BakedQuad
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "copyTo"(arg0: $MutableQuadView$Type): void
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
}

export namespace $MutableQuadView {
const BAKE_ROTATE_NONE: integer
const BAKE_ROTATE_90: integer
const BAKE_ROTATE_180: integer
const BAKE_ROTATE_270: integer
const BAKE_LOCK_UV: integer
const BAKE_FLIP_U: integer
const BAKE_FLIP_V: integer
const BAKE_NORMALIZED: integer
function getInstance(): $MutableQuadView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$Type = ($MutableQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableQuadView_ = $MutableQuadView$Type;
}}
declare module "packages/appeng/thirdparty/fabric/$QuadView" {
import {$MutableQuadView, $MutableQuadView$Type} from "packages/appeng/thirdparty/fabric/$MutableQuadView"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $QuadView {

 "faceNormal"(): $Vector3f
 "colorIndex"(): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$Type): $BakedQuad
 "nominalFace"(): $Direction
 "copyUv"(arg0: integer, arg1: $Vector2f$Type): $Vector2f
 "copyNormal"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "toBlockBakedQuad"(): $BakedQuad
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "copyTo"(arg0: $MutableQuadView$Type): void
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "normalZ"(arg0: integer): float
}

export namespace $QuadView {
const VANILLA_VERTEX_STRIDE: integer
const VANILLA_QUAD_STRIDE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$Type = ($QuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadView_ = $QuadView$Type;
}}
declare module "packages/appeng/thirdparty/fabric/$SpriteFinder" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$QuadView, $QuadView$Type} from "packages/appeng/thirdparty/fabric/$QuadView"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $SpriteFinder {

 "find"(arg0: $QuadView$Type): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(arg0: $TextureAtlas$Type): $SpriteFinder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$Type = ($SpriteFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinder_ = $SpriteFinder$Type;
}}
