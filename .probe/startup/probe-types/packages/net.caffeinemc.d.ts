declare module "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"

export interface $VertexBufferWriter {

 "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
 "canUseIntrinsics"(): boolean
/**
 * 
 * @deprecated
 */
 "isFullWriter"(): boolean

(arg0: $VertexConsumer$Type): $VertexBufferWriter
}

export namespace $VertexBufferWriter {
function of(arg0: $VertexConsumer$Type): $VertexBufferWriter
function copyInto(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
function tryOf(arg0: $VertexConsumer$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferWriter$Type = ($VertexBufferWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferWriter_ = $VertexBufferWriter$Type;
}}
declare module "packages/net/caffeinemc/mods/sodium/api/vertex/attributes/$CommonVertexAttribute" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$CommonVertexAttributeAccessor, $CommonVertexAttributeAccessor$Type} from "packages/net/irisshaders/iris/compat/sodium/mixin/vertex_format/$CommonVertexAttributeAccessor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CommonVertexAttribute extends $Enum<($CommonVertexAttribute)> implements $CommonVertexAttributeAccessor {
static readonly "POSITION": $CommonVertexAttribute
static readonly "COLOR": $CommonVertexAttribute
static readonly "TEXTURE": $CommonVertexAttribute
static readonly "OVERLAY": $CommonVertexAttribute
static readonly "LIGHT": $CommonVertexAttribute
static readonly "NORMAL": $CommonVertexAttribute
static "COUNT": integer


public static "values"(): ($CommonVertexAttribute)[]
public static "valueOf"(arg0: string): $CommonVertexAttribute
public "getByteLength"(): integer
public static "getCommonType"(arg0: $VertexFormatElement$Type): $CommonVertexAttribute
get "byteLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonVertexAttribute$Type = (("normal") | ("tangent") | ("mid_tex_coord") | ("color") | ("overlay") | ("light") | ("texture") | ("mid_block") | ("position") | ("entity_id") | ("block_id")) | ($CommonVertexAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonVertexAttribute_ = $CommonVertexAttribute$Type;
}}
declare module "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription" {
import {$CommonVertexAttribute, $CommonVertexAttribute$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/attributes/$CommonVertexAttribute"

export interface $VertexFormatDescription {

 "id"(): integer
 "stride"(): integer
 "isSimpleFormat"(): boolean
 "getElementOffset"(arg0: $CommonVertexAttribute$Type): integer
 "containsElement"(arg0: $CommonVertexAttribute$Type): boolean
}

export namespace $VertexFormatDescription {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatDescription$Type = ($VertexFormatDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatDescription_ = $VertexFormatDescription$Type;
}}
