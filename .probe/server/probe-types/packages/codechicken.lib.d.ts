declare module "packages/codechicken/lib/vec/$Translation" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $Translation extends $Transformation {
static readonly "CENTER": $Translation
 "vec": $Vector3
static readonly "operationIndex": integer

constructor(arg0: $Translation$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3i$Type)
constructor(arg0: $Vector3$Type)

public "toString"(): string
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "merge"(arg0: $Transformation$Type): $Transformation
public "at"(arg0: $Vector3$Type): $Transformation
public "isRedundant"(): boolean
public "applyN"(arg0: $Vector3$Type): void
public static "operationCount"(): integer
public static "registerOperation"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translation$Type = ($Translation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Translation_ = $Translation$Type;
}}
declare module "packages/codechicken/lib/vec/$Transformation" {
import {$ITransformation, $ITransformation$Type} from "packages/codechicken/lib/vec/$ITransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$TransformationList, $TransformationList$Type} from "packages/codechicken/lib/vec/$TransformationList"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $Transformation extends $ITransformation<($Vector3), ($Transformation)> implements $IVertexOperation {
static readonly "operationIndex": integer

constructor()

public "load"(arg0: $CCRenderState$Type): boolean
public "apply"(arg0: $Matrix4$Type): void
public "at"(arg0: $Vector3$Type): $Transformation
public "with"(arg0: $Transformation$Type): $TransformationList
public "operationID"(): integer
public "applyN"(arg0: $Vector3$Type): void
public "operate"(arg0: $CCRenderState$Type): void
public static "operationCount"(): integer
public static "registerOperation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transformation$Type = ($Transformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transformation_ = $Transformation$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$CCRenderPipeline$PipelineBuilder" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$CCRenderPipeline, $CCRenderPipeline$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

/**
 * 
 * @deprecated
 */
export class $CCRenderPipeline$PipelineBuilder {

constructor(arg0: $CCRenderPipeline$Type, arg1: $CCRenderState$Type)

public "build"(): void
public "add"(...arg0: ($IVertexOperation$Type)[]): $CCRenderPipeline$PipelineBuilder
public "add"(arg0: $IVertexOperation$Type): $CCRenderPipeline$PipelineBuilder
public "render"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderPipeline$PipelineBuilder$Type = ($CCRenderPipeline$PipelineBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderPipeline$PipelineBuilder_ = $CCRenderPipeline$PipelineBuilder$Type;
}}
declare module "packages/codechicken/lib/inventory/container/$ICCLContainerFactory" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $ICCLContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T
 "create"(arg0: integer, arg1: $Inventory$Type): T

(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T
}

export namespace $ICCLContainerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICCLContainerFactory$Type<T> = ($ICCLContainerFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICCLContainerFactory_<T> = $ICCLContainerFactory$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/pipeline/$CCRenderPipeline" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$VertexAttribute, $VertexAttribute$Type} from "packages/codechicken/lib/render/pipeline/$VertexAttribute"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$CCRenderPipeline$PipelineBuilder, $CCRenderPipeline$PipelineBuilder$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline$PipelineBuilder"

export class $CCRenderPipeline {
/**
 * 
 * @deprecated
 */
 "forceFormatAttributes": boolean

constructor(arg0: $CCRenderState$Type)

public "addRequirement"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "builder"(): $CCRenderPipeline$PipelineBuilder
public "reset"(): void
public "addAttribute"(arg0: $VertexAttribute$Type<(any)>): void
public "addDependency"(arg0: $VertexAttribute$Type<(any)>): void
public "rebuild"(): void
public "operate"(): void
public "setPipeline"(...arg0: ($IVertexOperation$Type)[]): void
set "pipeline"(value: ($IVertexOperation$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderPipeline$Type = ($CCRenderPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderPipeline_ = $CCRenderPipeline$Type;
}}
declare module "packages/codechicken/lib/vec/$TransformationList" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"

export class $TransformationList extends $Transformation {
static readonly "operationIndex": integer

constructor(arg0: $TransformationList$Type)
constructor(arg0: $List$Type<($Transformation$Type)>)
constructor(...arg0: ($Transformation$Type)[])

public "toString"(): string
public "compile"(): $Matrix4
public "apply"(arg0: $Matrix4$Type): void
public "apply"(arg0: $Vector3$Type): void
public "prepend"(arg0: $Transformation$Type): $TransformationList
public "with"(arg0: $Transformation$Type): $TransformationList
public "isRedundant"(): boolean
public "applyN"(arg0: $Vector3$Type): void
public "reverseCompile"(): $Matrix4
public "inverse"(): $Transformation
public static "operationCount"(): integer
public static "registerOperation"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationList$Type = ($TransformationList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationList_ = $TransformationList$Type;
}}
declare module "packages/codechicken/lib/vec/$Quat" {
import {$Rotation, $Rotation$Type} from "packages/codechicken/lib/vec/$Rotation"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Quaterniond, $Quaterniond$Type} from "packages/org/joml/$Quaterniond"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Quat implements $Copyable<($Quat)> {
 "x": double
 "y": double
 "z": double
 "s": double

constructor(arg0: $Quaterniond$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor()
constructor(arg0: $Quat$Type)
constructor(arg0: $Quaternionf$Type)

public "multiply"(arg0: $Quat$Type): $Quat
public "toString"(): string
public "set"(arg0: $Quat$Type): $Quat
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "normalize"(): $Quat
public "mag"(): double
public "rotate"(arg0: $Vector3$Type): void
public "rotation"(): $Rotation
public static "aroundAxis"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public static "aroundAxis"(arg0: $Vector3$Type, arg1: double): $Quat
public "setAroundAxis"(arg0: double, arg1: double, arg2: double, arg3: double): $Quat
public "setAroundAxis"(arg0: $Vector3$Type, arg1: double): $Quat
public "rightMultiply"(arg0: $Quat$Type): $Quat
public "toQuaternionD"(): $Quaterniond
public "toQuaternionF"(): $Quaternionf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quat$Type = ($Quat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quat_ = $Quat$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$VertexAttribute" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"

export class $VertexAttribute<T> implements $IVertexOperation {
 "active": boolean

constructor(arg0: $AttributeKey$Type<(T)>)

public "operationID"(): integer
public "load"(arg0: $CCRenderState$Type): boolean
public static "operationCount"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "registerOperation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexAttribute$Type<T> = ($VertexAttribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexAttribute_<T> = $VertexAttribute$Type<(T)>;
}}
declare module "packages/codechicken/lib/render/$CCRenderState" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$CCRenderPipeline, $CCRenderPipeline$Type} from "packages/codechicken/lib/render/pipeline/$CCRenderPipeline"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"
import {$IVertexSource, $IVertexSource$Type} from "packages/codechicken/lib/render/pipeline/$IVertexSource"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$LightMatrix, $LightMatrix$Type} from "packages/codechicken/lib/render/lighting/$LightMatrix"
import {$CachedFormat, $CachedFormat$Type} from "packages/codechicken/lib/model/$CachedFormat"
import {$VertexAttribute, $VertexAttribute$Type} from "packages/codechicken/lib/render/pipeline/$VertexAttribute"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$LC, $LC$Type} from "packages/codechicken/lib/render/lighting/$LC"
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$ColourRGBA, $ColourRGBA$Type} from "packages/codechicken/lib/colour/$ColourRGBA"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $CCRenderState {
readonly "normalAttrib": $VertexAttribute<(($Vector3)[])>
readonly "colourAttrib": $VertexAttribute<((integer)[])>
readonly "lightingAttrib": $VertexAttribute<((integer)[])>
readonly "sideAttrib": $VertexAttribute<((integer)[])>
readonly "lightCoordAttrib": $VertexAttribute<(($LC)[])>
 "model": $IVertexSource
 "firstVertexIndex": integer
 "lastVertexIndex": integer
 "vertexIndex": integer
 "pipeline": $CCRenderPipeline
 "r": $VertexConsumer
 "fmt": $VertexFormat
 "cFmt": $CachedFormat
 "baseColour": integer
 "alphaOverride": integer
 "computeLighting": boolean
 "lightMatrix": $LightMatrix
readonly "vert": $Vertex5
readonly "normal": $Vector3
 "colour": integer
 "brightness": integer
 "overlay": integer
 "side": integer
 "lc": $LC
 "sprite": $TextureAtlasSprite


public static "instance"(): $CCRenderState
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type, arg2: $PoseStack$Type): void
public "bind"(arg0: $VertexConsumer$Type, arg1: $VertexFormat$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type): void
public "bind"(arg0: $BufferBuilder$Type): void
public "bind"(arg0: $RenderType$Type, arg1: $MultiBufferSource$Type, arg2: $Matrix4$Type): void
public "reset"(): void
public "getColour"(): $ColourRGBA
public "getVertexFormat"(): $VertexFormat
public "getConsumer"(): $VertexConsumer
public "render"(): void
public "render"(...arg0: ($IVertexOperation$Type)[]): void
public "draw"(): void
public "startDrawing"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type, arg2: $BufferBuilder$Type): $BufferBuilder
public "startDrawing"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type): $BufferBuilder
public "setColour"(arg0: $Colour$Type): void
public "setBrightness"(arg0: $Entity$Type, arg1: float): void
public "setBrightness"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "setModel"(arg0: $IVertexSource$Type): void
public "setModel"(arg0: $IVertexSource$Type, arg1: integer, arg2: integer): void
public "setPipeline"(...arg0: ($IVertexOperation$Type)[]): void
public "setPipeline"(arg0: $IVertexSource$Type, arg1: integer, arg2: integer, ...arg3: ($IVertexOperation$Type)[]): void
public "preRenderWorld"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public "bindModel"(arg0: $IVertexSource$Type): void
public "setVertexRange"(arg0: integer, arg1: integer): void
public "writeVert"(): void
public "runPipeline"(): void
public "setFluidColour"(arg0: $FluidStack$Type, arg1: integer): void
public "setFluidColour"(arg0: $FluidStack$Type): void
get "colour"(): $ColourRGBA
get "vertexFormat"(): $VertexFormat
get "consumer"(): $VertexConsumer
set "colour"(value: $Colour$Type)
set "model"(value: $IVertexSource$Type)
set "pipeline"(value: ($IVertexOperation$Type)[])
set "fluidColour"(value: $FluidStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCRenderState$Type = ($CCRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCRenderState_ = $CCRenderState$Type;
}}
declare module "packages/codechicken/lib/colour/$ColourRGBA" {
import {$Colour, $Colour$Type} from "packages/codechicken/lib/colour/$Colour"

export class $ColourRGBA extends $Colour {
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor(arg0: $ColourRGBA$Type)
constructor(arg0: (float)[])
constructor(arg0: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public static "multiply"(arg0: integer, arg1: integer): integer
public "set"(arg0: integer): $Colour
public "copy"(): $Colour
public "pack"(): integer
public static "pack"(arg0: $Colour$Type): integer
public "packArray"(): (float)[]
public static "multiplyC"(arg0: integer, arg1: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColourRGBA$Type = ($ColourRGBA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColourRGBA_ = $ColourRGBA$Type;
}}
declare module "packages/codechicken/lib/colour/$Colour" {
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Colour implements $Copyable<($Colour)> {
 "r": byte
 "g": byte
 "b": byte
 "a": byte

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Colour$Type)

public "multiply"(arg0: $Colour$Type): $Colour
public "add"(arg0: $Colour$Type): $Colour
public "equals"(arg0: any): boolean
public "equals"(arg0: $Colour$Type): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double): $Colour
public "b"(): integer
public "a"(): integer
public "set"(arg0: double, arg1: double, arg2: double, arg3: double): $Colour
public "set"(arg0: $Colour$Type): $Colour
public "set"(arg0: integer): $Colour
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): $Colour
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Colour
public "set"(arg0: (double)[]): $Colour
public "set"(arg0: (float)[]): $Colour
public "g"(): integer
public "r"(): integer
public "sub"(arg0: $Colour$Type): $Colour
public static "pack"(arg0: (integer)[]): integer
public "pack"(): integer
public "bF"(): float
public "bF"(arg0: integer): $Colour
public "bF"(arg0: float): $Colour
public "aF"(arg0: integer): $Colour
public "aF"(): float
public "aF"(arg0: float): $Colour
public "rgba"(): integer
public "interpolate"(arg0: $Colour$Type, arg1: double): $Colour
public "rgb"(): integer
public static "unpack"(arg0: integer): (integer)[]
public "gF"(): float
public "gF"(arg0: float): $Colour
public "gF"(arg0: integer): $Colour
public "argb"(): integer
public "rF"(arg0: integer): $Colour
public "rF"(): float
public "rF"(arg0: float): $Colour
public "invert"(): $Colour
public "packArray"(): (float)[]
public "getARGB"(): (float)[]
public "multiplyC"(arg0: double): $Colour
public static "flipABGR"(arg0: integer): integer
public "getRGBA"(): (float)[]
public static "packRGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "packRGBA"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "packRGBA"(arg0: (float)[]): integer
public static "packRGBA"(arg0: double, arg1: double, arg2: double, arg3: double): integer
public static "packARGB"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): integer
public static "packARGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "packARGB"(arg0: (float)[]): integer
public static "packARGB"(arg0: double, arg1: double, arg2: double, arg3: double): integer
get "aRGB"(): (float)[]
get "rGBA"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$Type = ($Colour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Colour_ = $Colour$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey" {
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"

export class $AttributeKey<T> {
readonly "attributeKeyIndex": integer
readonly "operationIndex": integer

constructor(arg0: string)

public "copy"(arg0: T, arg1: integer): T
public static "create"<T>(arg0: string, arg1: $IntFunction$Type<(T)>): $AttributeKey<(T)>
public "createDefault"(arg0: integer): T
public "copyRange"(arg0: T, arg1: integer, arg2: T, arg3: integer, arg4: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$Type<(T)>;
}}
declare module "packages/codechicken/lib/vec/uv/$UVTransformationList" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"

export class $UVTransformationList extends $UVTransformation {
static readonly "operationIndex": integer

constructor(...arg0: ($UVTransformation$Type)[])
constructor(arg0: $UVTransformationList$Type)

public "toString"(): string
public "apply"(arg0: $UV$Type): void
public "copy"(): $UVTransformation
public "prepend"(arg0: $UVTransformation$Type): $UVTransformationList
public "with"(arg0: $UVTransformation$Type): $UVTransformationList
public "isRedundant"(): boolean
public "inverse"(): $UVTransformation
public static "operationCount"(): integer
public static "registerOperation"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVTransformationList$Type = ($UVTransformationList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVTransformationList_ = $UVTransformationList$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LC" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $LC implements $Copyable<($LC)> {
 "side": integer
 "fa": float
 "fb": float
 "fc": float
 "fd": float

constructor()
constructor(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float)

public "compute"(arg0: $Vector3$Type, arg1: $Vector3$Type): $LC
public "compute"(arg0: $Vector3$Type, arg1: integer): $LC
public "set"(arg0: $LC$Type): $LC
public "set"(arg0: integer, arg1: float, arg2: float, arg3: float, arg4: float): $LC
public "copy"(): $LC
public "computeO"(arg0: $Vector3$Type, arg1: integer): $LC
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LC$Type = ($LC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LC_ = $LC$Type;
}}
declare module "packages/codechicken/lib/vec/$Rotation" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Quat, $Quat$Type} from "packages/codechicken/lib/vec/$Quat"
import {$Matrix4, $Matrix4$Type} from "packages/codechicken/lib/vec/$Matrix4"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Rotation extends $Transformation {
static "quarterRotations": ($Transformation)[]
static "sideRotations": ($Transformation)[]
static "axes": ($Vector3)[]
static "sideRotMap": (integer)[]
static "rotSideMap": (integer)[]
static "sideRotOffsets": (integer)[]
 "angle": double
 "axis": $Vector3
static readonly "operationIndex": integer

constructor(arg0: double, arg1: $Vector3$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double)
constructor(arg0: $Quat$Type)
constructor(arg0: $Rotation$Type)

public "toString"(): string
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Matrix4$Type): void
public "merge"(arg0: $Transformation$Type): $Transformation
public "copy"(): $Rotation
public static "rotationTo"(arg0: integer, arg1: integer): integer
public static "getSideFromLookAngle"(arg0: $LivingEntity$Type): integer
public "isRedundant"(): boolean
public "applyN"(arg0: $Vector3$Type): void
public static "rotateSide"(arg0: integer, arg1: integer): integer
public "toQuat"(): $Quat
public static "sideOrientation"(arg0: integer, arg1: integer): $Transformation
public static "getSidedRotation"(arg0: $Player$Type, arg1: integer): integer
public static "operationCount"(): integer
public static "registerOperation"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$Type = ($Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation_ = $Rotation$Type;
}}
declare module "packages/codechicken/lib/inventory/container/$ICCLContainerType$CCLContainerType" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$ICCLContainerType, $ICCLContainerType$Type} from "packages/codechicken/lib/inventory/container/$ICCLContainerType"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"
import {$ICCLContainerFactory, $ICCLContainerFactory$Type} from "packages/codechicken/lib/inventory/container/$ICCLContainerFactory"
import {$FeatureFlag, $FeatureFlag$Type} from "packages/net/minecraft/world/flag/$FeatureFlag"

export class $ICCLContainerType$CCLContainerType<T extends $AbstractContainerMenu> extends $MenuType<(T)> implements $ICCLContainerType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>

constructor(arg0: $MenuType$MenuSupplier$Type<(T)>, arg1: $FeatureFlagSet$Type)

public "create"(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T
public static "create"<T extends $AbstractContainerMenu>(arg0: $ICCLContainerFactory$Type<(T)>): $MenuType<(T)>
public static "create"<T extends $AbstractContainerMenu>(arg0: $ICCLContainerFactory$Type<(T)>, ...arg1: ($FeatureFlag$Type)[]): $MenuType<(T)>
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICCLContainerType$CCLContainerType$Type<T> = ($ICCLContainerType$CCLContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICCLContainerType$CCLContainerType_<T> = $ICCLContainerType$CCLContainerType$Type<(T)>;
}}
declare module "packages/codechicken/lib/inventory/container/$ICCLContainerType" {
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ICCLContainerFactory, $ICCLContainerFactory$Type} from "packages/codechicken/lib/inventory/container/$ICCLContainerFactory"
import {$FeatureFlag, $FeatureFlag$Type} from "packages/net/minecraft/world/flag/$FeatureFlag"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $ICCLContainerType<T extends $AbstractContainerMenu> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $MCDataInput$Type): T

(arg0: $ICCLContainerFactory$Type<(T)>): $MenuType<(T)>
}

export namespace $ICCLContainerType {
function create<T>(arg0: $ICCLContainerFactory$Type<(T)>): $MenuType<(T)>
function create<T>(arg0: $ICCLContainerFactory$Type<(T)>, ...arg1: ($FeatureFlag$Type)[]): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICCLContainerType$Type<T> = ($ICCLContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICCLContainerType_<T> = $ICCLContainerType$Type<(T)>;
}}
declare module "packages/codechicken/lib/data/$MCDataInput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export interface $MCDataInput {

 "readResourceLocation"(): $ResourceLocation
 "readInt"(): integer
 "readBytes"(): (byte)[]
 "readChar"(): character
 "readFloat"(): float
 "readString"(): string
 "readLong"(): long
 "readByte"(): byte
 "readShort"(): short
 "readBoolean"(): boolean
 "readDouble"(): double
 "toInputStream"(): $InputStream
 "readRegistryId"<T>(): T
 "readFluidStack"(): $FluidStack
 "readUShort"(): integer
 "readUUID"(): $UUID
 "readUByte"(): short
 "readDoubleBuffer"(): $DoubleBuffer
 "readVarInts"(): (integer)[]
 "readSignedVarInts"(): (integer)[]
 "readDirection"(): $Direction
 "readCuboid"(): $Cuboid6
 "readByteBuffer"(): $ByteBuffer
 "readSignedVarLongs"(): (long)[]
 "readVec3d"(): $Vec3
 "readSignedVarInt"(): integer
 "readShortBuffer"(): $ShortBuffer
 "readVec3f"(): $Vector3f
 "readCompoundNBT"(): $CompoundTag
 "readIntBuffer"(): $IntBuffer
 "readCharBuffer"(): $CharBuffer
 "readFloatBuffer"(): $FloatBuffer
 "toDataInput"(): $DataInput
 "readVarLongs"(): (long)[]
 "readSignedVarLong"(): long
 "readVarLong"(): long
 "readLongBuffer"(): $LongBuffer
 "readVec3i"(): $Vec3i
 "readVarInt"(): integer
 "readEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<(T)>): T
 "readInts"(): (integer)[]
 "readLongs"(): (long)[]
 "readFloats"(): (float)[]
 "readDoubles"(): (double)[]
 "readShorts"(): (short)[]
 "readChars"(): (character)[]
 "readBooleans"(): (boolean)[]
 "readRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>): T
 "readPos"(): $BlockPos
 "readTextComponent"(): $MutableComponent
 "readVector"(): $Vector3
 "readItemStack"(): $ItemStack
 "readByteBuf"(): $ByteBuf
}

export namespace $MCDataInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataInput$Type = ($MCDataInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataInput_ = $MCDataInput$Type;
}}
declare module "packages/codechicken/lib/vec/$Matrix4" {
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$Rotation, $Rotation$Type} from "packages/codechicken/lib/vec/$Rotation"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $Matrix4 extends $Transformation {
 "m00": double
 "m01": double
 "m02": double
 "m03": double
 "m10": double
 "m11": double
 "m12": double
 "m13": double
 "m20": double
 "m21": double
 "m22": double
 "m23": double
 "m30": double
 "m31": double
 "m32": double
 "m33": double
static readonly "operationIndex": integer

constructor(arg0: $Matrix4f$Type)
constructor(arg0: $DoubleBuffer$Type)
constructor(arg0: $PoseStack$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: double, arg14: double, arg15: double)
constructor()
constructor(arg0: $Matrix4$Type)
constructor(arg0: $FloatBuffer$Type)
constructor(arg0: (double)[])
constructor(arg0: (float)[])

public "setIdentity"(): $Matrix4
public "leftMultiply"(arg0: $Matrix4$Type): $Matrix4
public "multiply"(arg0: $Matrix4$Type): $Matrix4
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double): $Matrix4
public "scale"(arg0: $Vector3$Type): $Matrix4
public "scale"(arg0: double, arg1: double, arg2: double): $Matrix4
public "apply"(arg0: $Matrix4$Type): void
public "apply"(arg0: $Vector3$Type): void
public "apply"(arg0: $Transformation$Type): $Matrix4
public "set"(arg0: $DoubleBuffer$Type): $Matrix4
public "set"(arg0: $FloatBuffer$Type): $Matrix4
public "set"(arg0: $PoseStack$Type): $Matrix4
public "set"(arg0: $Matrix4f$Type): $Matrix4
public "set"(arg0: $Matrix4$Type): $Matrix4
public "set"(arg0: (float)[]): $Matrix4
public "set"(arg0: (double)[]): $Matrix4
public "save"(arg0: $DoubleBuffer$Type): void
public "save"(arg0: $FloatBuffer$Type): void
public "rotate"(arg0: $Rotation$Type): $Matrix4
public "rotate"(arg0: double, arg1: $Vector3$Type): $Matrix4
public "toArrayF"(): (float)[]
public "toArrayD"(): (double)[]
public "applyN"(arg0: $Vector3$Type): void
public "multMatrix"(arg0: $Vector4f$Type): void
public "toFloatBuffer"(): $FloatBuffer
public static "gluProject"(arg0: $Vector3$Type, arg1: $Matrix4$Type, arg2: $Matrix4$Type, arg3: $IntBuffer$Type): $Vector3
public "toDoubleBuffer"(): $DoubleBuffer
public "transpose"(): $Matrix4
public "translate"(arg0: $Vec3i$Type): $Matrix4
public "translate"(arg0: $Vector3$Type): $Matrix4
public "translate"(arg0: double, arg1: double, arg2: double): $Matrix4
public "toMatrix4f"(): $Matrix4f
public static "operationCount"(): integer
public static "registerOperation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix4$Type = ($Matrix4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix4_ = $Matrix4$Type;
}}
declare module "packages/codechicken/lib/vec/$Vertex5" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $Vertex5 implements $Copyable<($Vertex5)> {
 "vec": $Vector3
 "uv": $UV

constructor(arg0: $Vertex5$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double)
constructor()
constructor(arg0: $Vector3$Type, arg1: $UV$Type)
constructor(arg0: $Vector3$Type, arg1: double, arg2: double)

public "toString"(): string
public "apply"(arg0: $Transformation$Type): $Vertex5
public "apply"(arg0: $UVTransformation$Type): $Vertex5
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double): $Vertex5
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: integer): $Vertex5
public "set"(arg0: $Vector3$Type, arg1: double, arg2: double): $Vertex5
public "set"(arg0: $Vertex5$Type): $Vertex5
public "copy"(): $Vertex5
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vertex5$Type = ($Vertex5);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vertex5_ = $Vertex5$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$IVertexSource" {
import {$Vertex5, $Vertex5$Type} from "packages/codechicken/lib/vec/$Vertex5"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$AttributeKey, $AttributeKey$Type} from "packages/codechicken/lib/render/pipeline/attribute/$AttributeKey"

export interface $IVertexSource {

 "getAttribute"<T>(arg0: $AttributeKey$Type<(T)>): T
 "hasAttribute"(arg0: $AttributeKey$Type<(any)>): boolean
 "getVertexCount"(): integer
 "getVertices"(): ($Vertex5)[]
 "prepareVertex"(arg0: $CCRenderState$Type): void
}

export namespace $IVertexSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexSource$Type = ($IVertexSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexSource_ = $IVertexSource$Type;
}}
declare module "packages/codechicken/lib/render/pipeline/$IVertexOperation" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"

export interface $IVertexOperation {

 "load"(arg0: $CCRenderState$Type): boolean
 "operationID"(): integer
 "operate"(arg0: $CCRenderState$Type): void
}

export namespace $IVertexOperation {
function operationCount(): integer
function registerOperation(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexOperation$Type = ($IVertexOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexOperation_ = $IVertexOperation$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UV" {
import {$UVTransformation, $UVTransformation$Type} from "packages/codechicken/lib/vec/uv/$UVTransformation"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $UV implements $Copyable<($UV)> {
 "u": double
 "v": double
 "tex": integer

constructor()
constructor(arg0: $UV$Type)
constructor(arg0: double, arg1: double, arg2: integer)
constructor(arg0: double, arg1: double)

public "multiply"(arg0: double): $UV
public "add"(arg0: $UV$Type): $UV
public "equals"(arg0: any): boolean
public "toString"(): string
public "apply"(arg0: $UVTransformation$Type): $UV
public "set"(arg0: double, arg1: double): $UV
public "set"(arg0: double, arg1: double, arg2: integer): $UV
public "set"(arg0: (double)[]): $UV
public "set"(arg0: (float)[]): $UV
public "set"(arg0: $UV$Type): $UV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UV$Type = ($UV);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UV_ = $UV$Type;
}}
declare module "packages/codechicken/lib/vec/$Cuboid6" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Cuboid6 implements $Copyable<($Cuboid6)> {
static "full": $Cuboid6
 "min": $Vector3
 "max": $Vector3

constructor(arg0: $AABB$Type)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $Cuboid6$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor()
constructor(arg0: $Vector3$Type, arg1: $Vector3$Type)
constructor(arg0: $Vec3i$Type, arg1: $Vec3i$Type)

public "add"(arg0: $BlockPos$Type): $Cuboid6
public "add"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "add"(arg0: double): $Cuboid6
public "add"(arg0: $Vector3$Type): $Cuboid6
public "add"(arg0: $Vec3i$Type): $Cuboid6
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: $Transformation$Type): $Cuboid6
public "offset"(arg0: $Cuboid6$Type): $Cuboid6
public "contains"(arg0: double, arg1: double, arg2: double): boolean
public "contains"(arg0: $Vector3$Type): boolean
public "set"(arg0: $Vector3$Type, arg1: $Vector3$Type): $Cuboid6
public "set"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $Cuboid6
public "set"(arg0: $AABB$Type): $Cuboid6
public "set"(arg0: $Vec3i$Type, arg1: $Vec3i$Type): $Cuboid6
public "set"(arg0: $Cuboid6$Type): $Cuboid6
public "copy"(): $Cuboid6
public "expand"(arg0: double): $Cuboid6
public "expand"(arg0: $Vector3$Type): $Cuboid6
public "expand"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "subtract"(arg0: $Vector3$Type): $Cuboid6
public "subtract"(arg0: $Vec3i$Type): $Cuboid6
public "subtract"(arg0: $Vec3$Type): $Cuboid6
public "subtract"(arg0: $BlockPos$Type): $Cuboid6
public "subtract"(arg0: double): $Cuboid6
public "subtract"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "shape"(): $VoxelShape
public "aabb"(): $AABB
public "volume"(): double
public "getSide"(arg0: $Direction$Type): double
public "getSide"(arg0: integer): double
public "setSide"(arg0: integer, arg1: double): $Cuboid6
public "setSide"(arg0: $Direction$Type, arg1: double): $Cuboid6
public "intersects"(arg0: $Cuboid6$Type): boolean
public "center"(): $Vector3
public "expandSide"(arg0: $Direction$Type, arg1: integer): $Cuboid6
public "shrinkSide"(arg0: $Direction$Type, arg1: integer): $Cuboid6
public "getSideSize"(arg0: $Direction$Type): double
public "equalsT"(arg0: $Cuboid6$Type): boolean
public "enclose"(arg0: double, arg1: double, arg2: double): $Cuboid6
public "enclose"(arg0: $Cuboid6$Type): $Cuboid6
public "enclose"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $Cuboid6
public "enclose"(arg0: $Vector3$Type): $Cuboid6
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cuboid6$Type = ($Cuboid6);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cuboid6_ = $Cuboid6$Type;
}}
declare module "packages/codechicken/lib/vec/$ITransformation" {
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"

export class $ITransformation<Vector, Transformation extends $ITransformation<(Vector), (Transformation)>> implements $Copyable<(Transformation)> {

constructor()

public "apply"(arg0: Vector): void
public "merge"(arg0: Transformation): Transformation
public "at"(arg0: Vector): Transformation
public "with"(arg0: Transformation): Transformation
public "isRedundant"(): boolean
public "$plus$plus"(arg0: Transformation): Transformation
public "inverse"(): Transformation
public "copy"(): Transformation
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITransformation$Type<Vector, Transformation> = ($ITransformation<(Vector), (Transformation)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITransformation_<Vector, Transformation> = $ITransformation$Type<(Vector), (Transformation)>;
}}
declare module "packages/codechicken/lib/model/$CachedFormat" {
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $CachedFormat {
static readonly "BLOCK": $CachedFormat
readonly "format": $VertexFormat
readonly "hasPosition": boolean
readonly "hasNormal": boolean
readonly "hasColor": boolean
readonly "hasUV": boolean
readonly "hasOverlay": boolean
readonly "hasLightMap": boolean
readonly "positionIndex": integer
readonly "normalIndex": integer
readonly "colorIndex": integer
readonly "uvIndex": integer
readonly "overlayIndex": integer
readonly "lightMapIndex": integer
readonly "elementCount": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "lookup"(arg0: $VertexFormat$Type): $CachedFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedFormat$Type = ($CachedFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedFormat_ = $CachedFormat$Type;
}}
declare module "packages/codechicken/lib/render/lighting/$LightMatrix" {
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $LightMatrix implements $IVertexOperation {
static readonly "operationIndex": integer
 "computed": integer
 "ao": ((float)[])[]
 "brightness": ((integer)[])[]
 "access": $BlockAndTintGetter
 "pos": $BlockPos
static readonly "ssamplem": ((integer)[])[]
static readonly "qsamplem": ((integer)[])[]
static readonly "sideao": (float)[]

constructor()

public "brightness"(arg0: integer): (integer)[]
public "load"(arg0: $CCRenderState$Type): boolean
public "ao"(arg0: integer): (float)[]
public "sample"(arg0: integer): void
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public "locate"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): void
public static "interpAO"(arg0: float, arg1: float, arg2: float, arg3: float): float
public "sideSample"(arg0: integer): void
public static "interpBrightness"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "operationCount"(): integer
public static "registerOperation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightMatrix$Type = ($LightMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightMatrix_ = $LightMatrix$Type;
}}
declare module "packages/codechicken/lib/data/$MCDataOutput" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CharBuffer, $CharBuffer$Type} from "packages/java/nio/$CharBuffer"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export interface $MCDataOutput {

 "writeEnum"(arg0: $Enum$Type<(any)>): $MCDataOutput
 "append"(arg0: (byte)[]): $MCDataOutput
 "append"(arg0: $ByteBuf$Type): $MCDataOutput
 "writeInt"(arg0: integer): $MCDataOutput
 "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeBytes"(arg0: (byte)[]): $MCDataOutput
 "writeChar"(arg0: integer): $MCDataOutput
 "writeFloat"(arg0: float): $MCDataOutput
 "writeString"(arg0: string, arg1: integer): $MCDataOutput
 "writeString"(arg0: string): $MCDataOutput
 "writeLong"(arg0: long): $MCDataOutput
 "writeBoolean"(arg0: boolean): $MCDataOutput
 "writeByte"(arg0: integer): $MCDataOutput
 "writeShort"(arg0: integer): $MCDataOutput
 "writeDouble"(arg0: double): $MCDataOutput
 "writeChars"(arg0: (character)[]): $MCDataOutput
 "writeChars"(arg0: (character)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeItemStack"(arg0: $ItemStack$Type): $MCDataOutput
 "writeItemStack"(arg0: $ItemStack$Type, arg1: boolean): $MCDataOutput
 "writeFluidStack"(arg0: $FluidStack$Type): $MCDataOutput
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
 "writeVarInt"(arg0: integer): $MCDataOutput
 "writeShorts"(arg0: (short)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeShorts"(arg0: (short)[]): $MCDataOutput
 "writeInts"(arg0: (integer)[]): $MCDataOutput
 "writeInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeLongs"(arg0: (long)[]): $MCDataOutput
 "writeFloats"(arg0: (float)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeFloats"(arg0: (float)[]): $MCDataOutput
 "writeDoubles"(arg0: (double)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeDoubles"(arg0: (double)[]): $MCDataOutput
 "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): $MCDataOutput
 "writeRegistryIdDirect"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: $ResourceLocation$Type): $MCDataOutput
 "writeResourceLocation"(arg0: $ResourceLocation$Type): $MCDataOutput
 "writeSignedVarLongs"(arg0: (long)[]): $MCDataOutput
 "writeSignedVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeBooleans"(arg0: (boolean)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeBooleans"(arg0: (boolean)[]): $MCDataOutput
 "writeSignedVarInt"(arg0: integer): $MCDataOutput
 "writeSignedVarLong"(arg0: long): $MCDataOutput
 "writeVarLong"(arg0: long): $MCDataOutput
 "writeVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarInts"(arg0: (integer)[]): $MCDataOutput
 "writeDirection"(arg0: $Direction$Type): $MCDataOutput
 "writeCompoundNBT"(arg0: $CompoundTag$Type): $MCDataOutput
 "writeSignedVarInts"(arg0: (integer)[]): $MCDataOutput
 "writeSignedVarInts"(arg0: (integer)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVec3f"(arg0: $Vector3f$Type): $MCDataOutput
 "writeCharBuffer"(arg0: $CharBuffer$Type): $MCDataOutput
 "writeVector"(arg0: $Vector3$Type): $MCDataOutput
 "writeShortBuffer"(arg0: $ShortBuffer$Type): $MCDataOutput
 "writeCuboid"(arg0: $Cuboid6$Type): $MCDataOutput
 "writeFloatBuffer"(arg0: $FloatBuffer$Type): $MCDataOutput
 "toDataOutput"(): $DataOutput
 "writeByteBuffer"(arg0: $ByteBuffer$Type): $MCDataOutput
 "writeUUID"(arg0: $UUID$Type): $MCDataOutput
 "writeDoubleBuffer"(arg0: $DoubleBuffer$Type): $MCDataOutput
 "writePos"(arg0: $BlockPos$Type): $MCDataOutput
 "writeVarLongs"(arg0: (long)[], arg1: integer, arg2: integer): $MCDataOutput
 "writeVarLongs"(arg0: (long)[]): $MCDataOutput
 "writeLongBuffer"(arg0: $LongBuffer$Type): $MCDataOutput
 "writeIntBuffer"(arg0: $IntBuffer$Type): $MCDataOutput
 "writeVec3d"(arg0: $Vec3$Type): $MCDataOutput
 "writeVec3i"(arg0: $Vec3i$Type): $MCDataOutput
 "writeByteBuf"(arg0: $ByteBuf$Type): $MCDataOutput
 "writeTextComponent"(arg0: $Component$Type): $MCDataOutput
 "toOutputStream"(): $OutputStream
}

export namespace $MCDataOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MCDataOutput$Type = ($MCDataOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MCDataOutput_ = $MCDataOutput$Type;
}}
declare module "packages/codechicken/lib/util/$Copyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Copyable<T> {

 "copy"(): T

(): T
}

export namespace $Copyable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Copyable$Type<T> = ($Copyable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Copyable_<T> = $Copyable$Type<(T)>;
}}
declare module "packages/codechicken/lib/vec/$Vector3" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quat, $Quat$Type} from "packages/codechicken/lib/vec/$Quat"
import {$Translation, $Translation$Type} from "packages/codechicken/lib/vec/$Translation"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Copyable, $Copyable$Type} from "packages/codechicken/lib/util/$Copyable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Vector3 implements $Copyable<($Vector3)> {
static readonly "ZERO": $Vector3
static readonly "CENTER": $Vector3
static readonly "ONE": $Vector3
static readonly "X_POS": $Vector3
static readonly "X_NEG": $Vector3
static readonly "Y_POS": $Vector3
static readonly "Y_NEG": $Vector3
static readonly "Z_POS": $Vector3
static readonly "Z_NEG": $Vector3
 "x": double
 "y": double
 "z": double

constructor()
constructor(arg0: $Vec3$Type)
constructor(arg0: $Vector3$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: (float)[])
constructor(arg0: (double)[])

public static "fromEntity"(arg0: $Entity$Type): $Vector3
public "multiply"(arg0: double): $Vector3
public "multiply"(arg0: $Vector3$Type): $Vector3
public "multiply"(arg0: double, arg1: double, arg2: double): $Vector3
public "add"(arg0: double): $Vector3
public "add"(arg0: $Vector3$Type): $Vector3
public "add"(arg0: $Vec3$Type): $Vector3
public "add"(arg0: double, arg1: double, arg2: double): $Vector3
public "add"(arg0: $BlockPos$Type): $Vector3
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "floor"(): $Vector3
public "ceil"(): $Vector3
public "apply"(arg0: $Transformation$Type): $Vector3
public "set"(arg0: $Vec3i$Type): $Vector3
public "set"(arg0: $Vector3$Type): $Vector3
public "set"(arg0: double): $Vector3
public "set"(arg0: (double)[]): $Vector3
public "set"(arg0: (float)[]): $Vector3
public "set"(arg0: double, arg1: double, arg2: double): $Vector3
public "copy"(): $Vector3
public "pos"(): $BlockPos
public "normalize"(): $Vector3
public "mag"(): double
public "distance"(arg0: $Vector3$Type): double
public "rotate"(arg0: $Quat$Type): $Vector3
public "rotate"(arg0: double, arg1: $Vector3$Type): $Vector3
public "isZero"(): boolean
public "divide"(arg0: double): $Vector3
public "divide"(arg0: $BlockPos$Type): $Vector3
public "divide"(arg0: double, arg1: double, arg2: double): $Vector3
public "divide"(arg0: $Vector3$Type): $Vector3
public "subtract"(arg0: $Vector3$Type): $Vector3
public "subtract"(arg0: double): $Vector3
public "subtract"(arg0: double, arg1: double, arg2: double): $Vector3
public "subtract"(arg0: $BlockPos$Type): $Vector3
public "subtract"(arg0: $Vec3$Type): $Vector3
public "negate"(): $Vector3
public "angle"(arg0: $Vector3$Type): double
public "distanceSquared"(arg0: $Vector3$Type): double
public "vec3"(): $Vec3
public "perpendicular"(): $Vector3
public "vector4f"(): $Vector4f
public "vector3f"(): $Vector3f
public static "fromBlockPosCenter"(arg0: $BlockPos$Type): $Vector3
public "YZintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "XZintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public "toArrayF"(): (float)[]
public static "fromBlockPos"(arg0: $BlockPos$Type): $Vector3
public static "fromArray"(arg0: (float)[]): $Vector3
public static "fromArray"(arg0: (double)[]): $Vector3
public "scalarProject"(arg0: $Vector3$Type): double
public "XYintercept"(arg0: $Vector3$Type, arg1: double): $Vector3
public static "fromAxes"(arg0: (double)[]): $Vector3
public static "fromAxes"(arg0: (float)[]): $Vector3
public "isAxial"(): boolean
public "toArrayD"(): (double)[]
public "magSquared"(): double
public "dotProduct"(arg0: double, arg1: double, arg2: double): double
public "dotProduct"(arg0: $Vector3$Type): double
public "yCrossProduct"(): $Vector3
public static "fromTileCenter"(arg0: $BlockEntity$Type): $Vector3
public "zCrossProduct"(): $Vector3
public static "fromTile"(arg0: $BlockEntity$Type): $Vector3
public "xCrossProduct"(): $Vector3
public "$plus"(arg0: $Vector3$Type): $Vector3
public "$minus"(arg0: $Vector3$Type): $Vector3
public "$div"(arg0: double): $Vector3
public "$dot$times"(arg0: $Vector3$Type): double
public "$times"(arg0: double): $Vector3
public "$times"(arg0: $Vector3$Type): $Vector3
public "$tilde"(): $Vector3
public "unary_$tilde"(): $Vector3
public "getSide"(arg0: integer): double
public "setSide"(arg0: integer, arg1: double): $Vector3
public static "fromEntityCenter"(arg0: $Entity$Type): $Vector3
public static "fromNBT"(arg0: $CompoundTag$Type): $Vector3
public "translation"(): $Translation
public "crossProduct"(arg0: $Vector3$Type): $Vector3
public static "fromVec3i"(arg0: $Vec3i$Type): $Vector3
public "equalsT"(arg0: $Vector3$Type): boolean
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "project"(arg0: $Vector3$Type): $Vector3
get "zero"(): boolean
get "axial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$Type = ($Vector3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector3_ = $Vector3$Type;
}}
declare module "packages/codechicken/lib/vec/uv/$UVTransformation" {
import {$UVTransformationList, $UVTransformationList$Type} from "packages/codechicken/lib/vec/uv/$UVTransformationList"
import {$ITransformation, $ITransformation$Type} from "packages/codechicken/lib/vec/$ITransformation"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$UV, $UV$Type} from "packages/codechicken/lib/vec/uv/$UV"
import {$IVertexOperation, $IVertexOperation$Type} from "packages/codechicken/lib/render/pipeline/$IVertexOperation"

export class $UVTransformation extends $ITransformation<($UV), ($UVTransformation)> implements $IVertexOperation {
static readonly "operationIndex": integer

constructor()

public "load"(arg0: $CCRenderState$Type): boolean
public "at"(arg0: $UV$Type): $UVTransformation
public "with"(arg0: $UVTransformation$Type): $UVTransformationList
public "operationID"(): integer
public "operate"(arg0: $CCRenderState$Type): void
public static "operationCount"(): integer
public static "registerOperation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVTransformation$Type = ($UVTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVTransformation_ = $UVTransformation$Type;
}}
declare module "packages/codechicken/lib/colour/$EnumColour" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$ColourRGBA, $ColourRGBA$Type} from "packages/codechicken/lib/colour/$ColourRGBA"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnumColour extends $Enum<($EnumColour)> implements $StringRepresentable {
static readonly "WHITE": $EnumColour
static readonly "ORANGE": $EnumColour
static readonly "MAGENTA": $EnumColour
static readonly "LIGHT_BLUE": $EnumColour
static readonly "YELLOW": $EnumColour
static readonly "LIME": $EnumColour
static readonly "PINK": $EnumColour
static readonly "GRAY": $EnumColour
static readonly "LIGHT_GRAY": $EnumColour
static readonly "CYAN": $EnumColour
static readonly "PURPLE": $EnumColour
static readonly "BLUE": $EnumColour
static readonly "BROWN": $EnumColour
static readonly "GREEN": $EnumColour
static readonly "RED": $EnumColour
static readonly "BLACK": $EnumColour


public "getWoolTagName"(): $ResourceLocation
public "getDyeTagName"(): $ResourceLocation
public "getUnlocalizedName"(): string
public "getWoolMeta"(): integer
public "getDyeMeta"(): integer
public static "fromWoolMeta"(arg0: integer): $EnumColour
public static "fromWoolTag"(arg0: $ResourceLocation$Type): $EnumColour
public static "fromWoolStack"(arg0: $ItemStack$Type): $EnumColour
public static "fromDyeTag"(arg0: $ResourceLocation$Type): $EnumColour
public static "fromDyeMeta"(arg0: integer): $EnumColour
public static "fromDyeStack"(arg0: $ItemStack$Type): $EnumColour
public static "values"(): ($EnumColour)[]
public static "valueOf"(arg0: string): $EnumColour
public static "mix"(arg0: $EnumColour$Type, arg1: $EnumColour$Type): $EnumColour
public "mix"(arg0: $EnumColour$Type): $EnumColour
public "getSerializedName"(): string
public static "fromName"(arg0: string): $EnumColour
public "bF"(): float
public "getColour"(arg0: integer): $ColourRGBA
public "getColour"(): $ColourRGBA
public "rgba"(): integer
public "rgba"(arg0: integer): integer
public "getLocalizedName"(): string
public "rgb"(): integer
public "gF"(): float
public "argb"(): integer
public "argb"(arg0: integer): integer
public "rF"(): float
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "woolTagName"(): $ResourceLocation
get "dyeTagName"(): $ResourceLocation
get "unlocalizedName"(): string
get "woolMeta"(): integer
get "dyeMeta"(): integer
get "serializedName"(): string
get "colour"(): $ColourRGBA
get "localizedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumColour$Type = (("magenta") | ("pink") | ("green") | ("lime") | ("light_gray") | ("yellow") | ("black") | ("light_blue") | ("brown") | ("cyan") | ("orange") | ("red") | ("gray") | ("white") | ("blue") | ("purple")) | ($EnumColour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumColour_ = $EnumColour$Type;
}}
