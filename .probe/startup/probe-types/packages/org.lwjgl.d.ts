declare module "packages/org/lwjgl/system/$MemoryStack" {
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$Pointer, $Pointer$Type} from "packages/org/lwjgl/system/$Pointer"
import {$Buffer, $Buffer$Type} from "packages/java/nio/$Buffer"
import {$CLongBuffer, $CLongBuffer$Type} from "packages/org/lwjgl/$CLongBuffer"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$PointerBuffer, $PointerBuffer$Type} from "packages/org/lwjgl/$PointerBuffer"
import {$Pointer$Default, $Pointer$Default$Type} from "packages/org/lwjgl/system/$Pointer$Default"

export class $MemoryStack extends $Pointer$Default implements $AutoCloseable {


public "UTF16"(arg0: charseq): $ByteBuffer
public "UTF16"(arg0: charseq, arg1: boolean): $ByteBuffer
public "bytes"(arg0: byte): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $ByteBuffer
public "bytes"(...arg0: (byte)[]): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte): $ByteBuffer
public "bytes"(arg0: byte, arg1: byte, arg2: byte): $ByteBuffer
public "close"(): void
public "getSize"(): integer
public "getAddress"(): long
public static "create"(arg0: integer): $MemoryStack
public static "create"(arg0: $ByteBuffer$Type): $MemoryStack
public static "create"(): $MemoryStack
public "ASCII"(arg0: charseq, arg1: boolean): $ByteBuffer
public "ASCII"(arg0: charseq): $ByteBuffer
public "UTF8"(arg0: charseq, arg1: boolean): $ByteBuffer
public "UTF8"(arg0: charseq): $ByteBuffer
public "push"(): $MemoryStack
public "pop"(): $MemoryStack
public "ints"(arg0: integer, arg1: integer, arg2: integer): $IntBuffer
public "ints"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IntBuffer
public "ints"(arg0: integer, arg1: integer): $IntBuffer
public "ints"(arg0: integer): $IntBuffer
public "ints"(...arg0: (integer)[]): $IntBuffer
public "longs"(arg0: long, arg1: long): $LongBuffer
public "longs"(arg0: long, arg1: long, arg2: long): $LongBuffer
public "longs"(...arg0: (long)[]): $LongBuffer
public "longs"(arg0: long): $LongBuffer
public "longs"(arg0: long, arg1: long, arg2: long, arg3: long): $LongBuffer
public "doubles"(...arg0: (double)[]): $DoubleBuffer
public "doubles"(arg0: double, arg1: double, arg2: double, arg3: double): $DoubleBuffer
public "doubles"(arg0: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double): $DoubleBuffer
public "doubles"(arg0: double, arg1: double, arg2: double): $DoubleBuffer
public "getPointer"(): integer
public "callocInt"(arg0: integer): $IntBuffer
public "setPointer"(arg0: integer): void
public "nUTF8"(arg0: charseq, arg1: boolean): integer
public "getPointerAddress"(): long
public "nASCII"(arg0: charseq, arg1: boolean): integer
public "malloc"(arg0: integer): $ByteBuffer
public "malloc"(arg0: integer, arg1: integer): $ByteBuffer
public static "stackPush"(): $MemoryStack
public "mallocPointer"(arg0: integer): $PointerBuffer
public "calloc"(arg0: integer, arg1: integer): $ByteBuffer
public "calloc"(arg0: integer): $ByteBuffer
public static "stackGet"(): $MemoryStack
public "ncalloc"(arg0: integer, arg1: integer, arg2: integer): long
public "nmalloc"(arg0: integer, arg1: integer): long
public "nmalloc"(arg0: integer): long
public "pointers"(...arg0: ($Buffer$Type)[]): $PointerBuffer
public "pointers"(arg0: $Buffer$Type, arg1: $Buffer$Type, arg2: $Buffer$Type, arg3: $Buffer$Type): $PointerBuffer
public "pointers"(arg0: $Buffer$Type, arg1: $Buffer$Type, arg2: $Buffer$Type): $PointerBuffer
public "pointers"(arg0: long, arg1: long): $PointerBuffer
public "pointers"(arg0: long, arg1: long, arg2: long): $PointerBuffer
public "pointers"(...arg0: ($Pointer$Type)[]): $PointerBuffer
public "pointers"(arg0: $Pointer$Type, arg1: $Pointer$Type, arg2: $Pointer$Type, arg3: $Pointer$Type): $PointerBuffer
public "pointers"(arg0: $Buffer$Type): $PointerBuffer
public "pointers"(arg0: $Buffer$Type, arg1: $Buffer$Type): $PointerBuffer
public "pointers"(arg0: long): $PointerBuffer
public "pointers"(...arg0: (long)[]): $PointerBuffer
public "pointers"(arg0: $Pointer$Type): $PointerBuffer
public "pointers"(arg0: long, arg1: long, arg2: long, arg3: long): $PointerBuffer
public "pointers"(arg0: $Pointer$Type, arg1: $Pointer$Type, arg2: $Pointer$Type): $PointerBuffer
public "pointers"(arg0: $Pointer$Type, arg1: $Pointer$Type): $PointerBuffer
public "mallocInt"(arg0: integer): $IntBuffer
public "UTF16Safe"(arg0: charseq): $ByteBuffer
public "UTF16Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "callocLong"(arg0: integer): $LongBuffer
public "ASCIISafe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "ASCIISafe"(arg0: charseq): $ByteBuffer
public "mallocLong"(arg0: integer): $LongBuffer
public "mallocFloat"(arg0: integer): $FloatBuffer
public "mallocDouble"(arg0: integer): $DoubleBuffer
public "nUTF16"(arg0: charseq, arg1: boolean): integer
public "shorts"(arg0: short, arg1: short, arg2: short): $ShortBuffer
public "shorts"(arg0: short, arg1: short, arg2: short, arg3: short): $ShortBuffer
public "shorts"(...arg0: (short)[]): $ShortBuffer
public "shorts"(arg0: short, arg1: short): $ShortBuffer
public "shorts"(arg0: short): $ShortBuffer
public "callocShort"(arg0: integer): $ShortBuffer
public "mallocCLong"(arg0: integer): $CLongBuffer
public "UTF8Safe"(arg0: charseq): $ByteBuffer
public "UTF8Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public "callocCLong"(arg0: integer): $CLongBuffer
public "clongs"(arg0: long, arg1: long, arg2: long, arg3: long): $CLongBuffer
public "clongs"(...arg0: (long)[]): $CLongBuffer
public "clongs"(arg0: long, arg1: long, arg2: long): $CLongBuffer
public "clongs"(arg0: long): $CLongBuffer
public "clongs"(arg0: long, arg1: long): $CLongBuffer
public "mallocShort"(arg0: integer): $ShortBuffer
public static "nstackCalloc"(arg0: integer, arg1: integer, arg2: integer): long
public "callocDouble"(arg0: integer): $DoubleBuffer
public static "stackPop"(): $MemoryStack
public static "stackMalloc"(arg0: integer): $ByteBuffer
public static "ncreate"(arg0: long, arg1: integer): $MemoryStack
public "callocPointer"(arg0: integer): $PointerBuffer
public "nint"(arg0: integer): long
public "getFrameIndex"(): integer
public "nbyte"(arg0: byte): long
public "floats"(arg0: float): $FloatBuffer
public "floats"(...arg0: (float)[]): $FloatBuffer
public "floats"(arg0: float, arg1: float): $FloatBuffer
public "floats"(arg0: float, arg1: float, arg2: float): $FloatBuffer
public "floats"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatBuffer
public "nshort"(arg0: short): long
public "nlong"(arg0: long): long
public "nclong"(arg0: long): long
public "npointer"(arg0: $Pointer$Type): long
public "npointer"(arg0: $Buffer$Type): long
public "npointer"(arg0: long): long
public "callocFloat"(arg0: integer): $FloatBuffer
public "nfloat"(arg0: float): long
public "ndouble"(arg0: double): long
public "nASCIISafe"(arg0: charseq, arg1: boolean): integer
public "nUTF16Safe"(arg0: charseq, arg1: boolean): integer
public "nUTF8Safe"(arg0: charseq, arg1: boolean): integer
public static "nstackMalloc"(arg0: integer): long
public static "nstackMalloc"(arg0: integer, arg1: integer): long
public static "stackCallocDouble"(arg0: integer): $DoubleBuffer
public static "stackMallocLong"(arg0: integer): $LongBuffer
public static "stackInts"(arg0: integer, arg1: integer, arg2: integer): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer): $IntBuffer
public static "stackInts"(arg0: integer): $IntBuffer
public static "stackInts"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IntBuffer
public static "stackInts"(...arg0: (integer)[]): $IntBuffer
public static "stackCallocShort"(arg0: integer): $ShortBuffer
public static "stackMallocFloat"(arg0: integer): $FloatBuffer
public static "stackCLongs"(arg0: long, arg1: long, arg2: long, arg3: long): $CLongBuffer
public static "stackCLongs"(...arg0: (long)[]): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long, arg2: long): $CLongBuffer
public static "stackCLongs"(arg0: long, arg1: long): $CLongBuffer
public static "stackCLongs"(arg0: long): $CLongBuffer
public static "stackUTF16Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF16Safe"(arg0: charseq): $ByteBuffer
public static "stackCalloc"(arg0: integer): $ByteBuffer
public static "stackMallocPointer"(arg0: integer): $PointerBuffer
public static "stackShorts"(arg0: short): $ShortBuffer
public static "stackShorts"(...arg0: (short)[]): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short, arg2: short): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short, arg2: short, arg3: short): $ShortBuffer
public static "stackShorts"(arg0: short, arg1: short): $ShortBuffer
public static "stackDoubles"(arg0: double, arg1: double, arg2: double): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double): $DoubleBuffer
public static "stackDoubles"(...arg0: (double)[]): $DoubleBuffer
public static "stackDoubles"(arg0: double): $DoubleBuffer
public static "stackDoubles"(arg0: double, arg1: double, arg2: double, arg3: double): $DoubleBuffer
public static "stackCallocInt"(arg0: integer): $IntBuffer
public static "stackCallocPointer"(arg0: integer): $PointerBuffer
public static "stackASCII"(arg0: charseq): $ByteBuffer
public static "stackASCII"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackMallocShort"(arg0: integer): $ShortBuffer
public static "stackUTF16"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF16"(arg0: charseq): $ByteBuffer
public static "stackASCIISafe"(arg0: charseq): $ByteBuffer
public static "stackASCIISafe"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackCallocFloat"(arg0: integer): $FloatBuffer
public static "stackBytes"(arg0: byte, arg1: byte): $ByteBuffer
public static "stackBytes"(...arg0: (byte)[]): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte, arg2: byte, arg3: byte): $ByteBuffer
public static "stackBytes"(arg0: byte): $ByteBuffer
public static "stackBytes"(arg0: byte, arg1: byte, arg2: byte): $ByteBuffer
public static "stackMallocInt"(arg0: integer): $IntBuffer
public static "stackMallocCLong"(arg0: integer): $CLongBuffer
public static "stackFloats"(...arg0: (float)[]): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float, arg2: float): $FloatBuffer
public static "stackFloats"(arg0: float, arg1: float): $FloatBuffer
public static "stackFloats"(arg0: float): $FloatBuffer
public static "stackLongs"(arg0: long, arg1: long, arg2: long, arg3: long): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long, arg2: long): $LongBuffer
public static "stackLongs"(...arg0: (long)[]): $LongBuffer
public static "stackLongs"(arg0: long, arg1: long): $LongBuffer
public static "stackLongs"(arg0: long): $LongBuffer
public static "stackCallocLong"(arg0: integer): $LongBuffer
public static "stackPointers"(arg0: $Pointer$Type, arg1: $Pointer$Type): $PointerBuffer
public static "stackPointers"(...arg0: ($Pointer$Type)[]): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$Type): $PointerBuffer
public static "stackPointers"(...arg0: (long)[]): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long, arg2: long, arg3: long): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long, arg2: long): $PointerBuffer
public static "stackPointers"(arg0: long, arg1: long): $PointerBuffer
public static "stackPointers"(arg0: long): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$Type, arg1: $Pointer$Type, arg2: $Pointer$Type, arg3: $Pointer$Type): $PointerBuffer
public static "stackPointers"(arg0: $Pointer$Type, arg1: $Pointer$Type, arg2: $Pointer$Type): $PointerBuffer
public static "stackUTF8"(arg0: charseq, arg1: boolean): $ByteBuffer
public static "stackUTF8"(arg0: charseq): $ByteBuffer
public static "stackCallocCLong"(arg0: integer): $CLongBuffer
public static "stackMallocDouble"(arg0: integer): $DoubleBuffer
public static "stackUTF8Safe"(arg0: charseq): $ByteBuffer
public static "stackUTF8Safe"(arg0: charseq, arg1: boolean): $ByteBuffer
get "size"(): integer
get "address"(): long
get "pointer"(): integer
set "pointer"(value: integer)
get "pointerAddress"(): long
get "frameIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStack$Type = ($MemoryStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryStack_ = $MemoryStack$Type;
}}
declare module "packages/org/lwjgl/glfw/$GLFWVidMode$Buffer" {
import {$GLFWVidMode, $GLFWVidMode$Type} from "packages/org/lwjgl/glfw/$GLFWVidMode"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$StructBuffer, $StructBuffer$Type} from "packages/org/lwjgl/system/$StructBuffer"

export class $GLFWVidMode$Buffer extends $StructBuffer<($GLFWVidMode), ($GLFWVidMode$Buffer)> {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$Type)

public "width"(): integer
public "height"(): integer
public "refreshRate"(): integer
public "redBits"(): integer
public "greenBits"(): integer
public "blueBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GLFWVidMode$Buffer$Type = ($GLFWVidMode$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GLFWVidMode$Buffer_ = $GLFWVidMode$Buffer$Type;
}}
declare module "packages/org/lwjgl/stb/$STBTTFontinfo$Buffer" {
import {$STBTTFontinfo, $STBTTFontinfo$Type} from "packages/org/lwjgl/stb/$STBTTFontinfo"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$StructBuffer, $StructBuffer$Type} from "packages/org/lwjgl/system/$StructBuffer"
import {$NativeResource, $NativeResource$Type} from "packages/org/lwjgl/system/$NativeResource"

export class $STBTTFontinfo$Buffer extends $StructBuffer<($STBTTFontinfo), ($STBTTFontinfo$Buffer)> implements $NativeResource {

constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$Type)

public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $STBTTFontinfo$Buffer$Type = ($STBTTFontinfo$Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $STBTTFontinfo$Buffer_ = $STBTTFontinfo$Buffer$Type;
}}
declare module "packages/org/lwjgl/system/$CustomBuffer" {
import {$Pointer$Default, $Pointer$Default$Type} from "packages/org/lwjgl/system/$Pointer$Default"

export class $CustomBuffer<SELF extends $CustomBuffer<(SELF)>> extends $Pointer$Default {


public "put"(arg0: SELF): SELF
public "toString"(): string
public "clear"(): SELF
public "position"(arg0: integer): SELF
public "position"(): integer
public "limit"(): integer
public "limit"(arg0: integer): SELF
public "remaining"(): integer
public "capacity"(): integer
public "address"(): long
public "address"(arg0: integer): long
public "mark"(): SELF
public "reset"(): SELF
public "flip"(): SELF
public "rewind"(): SELF
public "hasRemaining"(): boolean
public "slice"(): SELF
public "slice"(arg0: integer, arg1: integer): SELF
public "duplicate"(): SELF
public "compact"(): SELF
public "free"(): void
public "address0"(): long
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBuffer$Type<SELF> = ($CustomBuffer<(SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBuffer_<SELF> = $CustomBuffer$Type<(SELF)>;
}}
declare module "packages/org/lwjgl/system/$Struct$StructValidation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Struct$StructValidation {

 "validate"(arg0: long): void

(arg0: long): void
}

export namespace $Struct$StructValidation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$StructValidation$Type = ($Struct$StructValidation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Struct$StructValidation_ = $Struct$StructValidation$Type;
}}
declare module "packages/org/lwjgl/system/$Struct" {
import {$Struct$StructValidation, $Struct$StructValidation$Type} from "packages/org/lwjgl/system/$Struct$StructValidation"
import {$Pointer$Default, $Pointer$Default$Type} from "packages/org/lwjgl/system/$Pointer$Default"

export class $Struct extends $Pointer$Default {


public "clear"(): void
public static "validate"(arg0: long, arg1: integer, arg2: integer, arg3: $Struct$StructValidation$Type): void
public "isNull"(arg0: integer): boolean
public "free"(): void
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$Type = ($Struct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Struct_ = $Struct$Type;
}}
declare module "packages/org/lwjgl/system/$Pointer$Default" {
import {$Pointer, $Pointer$Type} from "packages/org/lwjgl/system/$Pointer"

export class $Pointer$Default implements $Pointer {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$Default$Type = ($Pointer$Default);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointer$Default_ = $Pointer$Default$Type;
}}
declare module "packages/org/lwjgl/system/$NativeResource" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"

export interface $NativeResource extends $AutoCloseable {

 "close"(): void
 "free"(): void

(): void
}

export namespace $NativeResource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeResource$Type = ($NativeResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeResource_ = $NativeResource$Type;
}}
declare module "packages/org/lwjgl/$PointerBuffer" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$DoubleBuffer, $DoubleBuffer$Type} from "packages/java/nio/$DoubleBuffer"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pointer, $Pointer$Type} from "packages/org/lwjgl/system/$Pointer"
import {$ShortBuffer, $ShortBuffer$Type} from "packages/java/nio/$ShortBuffer"
import {$CustomBuffer, $CustomBuffer$Type} from "packages/org/lwjgl/system/$CustomBuffer"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$LongBuffer, $LongBuffer$Type} from "packages/java/nio/$LongBuffer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $PointerBuffer extends $CustomBuffer<($PointerBuffer)> implements $Comparable<($PointerBuffer)> {


public "get"(arg0: (long)[], arg1: integer, arg2: integer): $PointerBuffer
public static "get"(arg0: $ByteBuffer$Type): long
public "get"(): long
public "get"(arg0: integer): long
public static "get"(arg0: $ByteBuffer$Type, arg1: integer): long
public "get"(arg0: (long)[]): $PointerBuffer
public "put"(arg0: $IntBuffer$Type): $PointerBuffer
public "put"(arg0: $ShortBuffer$Type): $PointerBuffer
public "put"(arg0: $FloatBuffer$Type): $PointerBuffer
public "put"(arg0: $DoubleBuffer$Type): $PointerBuffer
public "put"(arg0: $LongBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $DoubleBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $FloatBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $LongBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $IntBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $ShortBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $ByteBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: long): $PointerBuffer
public static "put"(arg0: $ByteBuffer$Type, arg1: long): void
public "put"(arg0: long): $PointerBuffer
public "put"(arg0: (long)[]): $PointerBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $PointerBuffer
public "put"(arg0: $ByteBuffer$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $Pointer$Type): $PointerBuffer
public "put"(arg0: $Pointer$Type): $PointerBuffer
public static "put"(arg0: $ByteBuffer$Type, arg1: integer, arg2: long): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $PointerBuffer$Type): integer
public static "create"(arg0: long, arg1: integer): $PointerBuffer
public static "create"(arg0: $ByteBuffer$Type): $PointerBuffer
public "getByteBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "getByteBuffer"(arg0: integer): $ByteBuffer
public static "allocateDirect"(arg0: integer): $PointerBuffer
public "getIntBuffer"(arg0: integer): $IntBuffer
public "getIntBuffer"(arg0: integer, arg1: integer): $IntBuffer
public "getShortBuffer"(arg0: integer): $ShortBuffer
public "getShortBuffer"(arg0: integer, arg1: integer): $ShortBuffer
public "getStringUTF8"(arg0: integer): string
public "getStringUTF8"(): string
public "getStringUTF16"(arg0: integer): string
public "getStringUTF16"(): string
public "getStringASCII"(): string
public "getStringASCII"(arg0: integer): string
public "putAddressOf"(arg0: $CustomBuffer$Type<(any)>): $PointerBuffer
public "putAddressOf"(arg0: integer, arg1: $CustomBuffer$Type<(any)>): $PointerBuffer
public "getLongBuffer"(arg0: integer): $LongBuffer
public "getLongBuffer"(arg0: integer, arg1: integer): $LongBuffer
public "getFloatBuffer"(arg0: integer): $FloatBuffer
public "getFloatBuffer"(arg0: integer, arg1: integer): $FloatBuffer
public "getDoubleBuffer"(arg0: integer): $DoubleBuffer
public "getDoubleBuffer"(arg0: integer, arg1: integer): $DoubleBuffer
public "getPointerBuffer"(arg0: integer, arg1: integer): $PointerBuffer
public "getPointerBuffer"(arg0: integer): $PointerBuffer
public "sizeof"(): integer
get "stringUTF8"(): string
get "stringUTF16"(): string
get "stringASCII"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointerBuffer$Type = ($PointerBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointerBuffer_ = $PointerBuffer$Type;
}}
declare module "packages/org/lwjgl/stb/$STBTTFontinfo" {
import {$STBTTFontinfo$Buffer, $STBTTFontinfo$Buffer$Type} from "packages/org/lwjgl/stb/$STBTTFontinfo$Buffer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$Struct, $Struct$Type} from "packages/org/lwjgl/system/$Struct"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$NativeResource, $NativeResource$Type} from "packages/org/lwjgl/system/$NativeResource"

export class $STBTTFontinfo extends $Struct implements $NativeResource {
static readonly "SIZEOF": integer
static readonly "ALIGNOF": integer

constructor(arg0: $ByteBuffer$Type)

public static "create"(): $STBTTFontinfo
public static "create"(arg0: integer): $STBTTFontinfo$Buffer
public static "create"(arg0: long): $STBTTFontinfo
public static "create"(arg0: long, arg1: integer): $STBTTFontinfo$Buffer
public static "malloc"(): $STBTTFontinfo
public static "malloc"(arg0: integer, arg1: $MemoryStack$Type): $STBTTFontinfo$Buffer
public static "malloc"(arg0: integer): $STBTTFontinfo$Buffer
public static "malloc"(arg0: $MemoryStack$Type): $STBTTFontinfo
public "sizeof"(): integer
/**
 * 
 * @deprecated
 */
public static "callocStack"(): $STBTTFontinfo
/**
 * 
 * @deprecated
 */
public static "callocStack"(arg0: integer): $STBTTFontinfo$Buffer
/**
 * 
 * @deprecated
 */
public static "callocStack"(arg0: integer, arg1: $MemoryStack$Type): $STBTTFontinfo$Buffer
/**
 * 
 * @deprecated
 */
public static "callocStack"(arg0: $MemoryStack$Type): $STBTTFontinfo
public static "createSafe"(arg0: long): $STBTTFontinfo
public static "createSafe"(arg0: long, arg1: integer): $STBTTFontinfo$Buffer
/**
 * 
 * @deprecated
 */
public static "mallocStack"(): $STBTTFontinfo
/**
 * 
 * @deprecated
 */
public static "mallocStack"(arg0: integer, arg1: $MemoryStack$Type): $STBTTFontinfo$Buffer
/**
 * 
 * @deprecated
 */
public static "mallocStack"(arg0: $MemoryStack$Type): $STBTTFontinfo
/**
 * 
 * @deprecated
 */
public static "mallocStack"(arg0: integer): $STBTTFontinfo$Buffer
public static "calloc"(arg0: integer, arg1: $MemoryStack$Type): $STBTTFontinfo$Buffer
public static "calloc"(): $STBTTFontinfo
public static "calloc"(arg0: integer): $STBTTFontinfo$Buffer
public static "calloc"(arg0: $MemoryStack$Type): $STBTTFontinfo
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $STBTTFontinfo$Type = ($STBTTFontinfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $STBTTFontinfo_ = $STBTTFontinfo$Type;
}}
declare module "packages/org/lwjgl/system/$StructBuffer" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$CustomBuffer, $CustomBuffer$Type} from "packages/org/lwjgl/system/$CustomBuffer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Struct, $Struct$Type} from "packages/org/lwjgl/system/$Struct"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $StructBuffer<T extends $Struct, SELF extends $StructBuffer<(T), (SELF)>> extends $CustomBuffer<(SELF)> implements $Iterable<(T)> {


public "get"(arg0: integer, arg1: T): SELF
public "get"(arg0: T): SELF
public "get"(arg0: integer): T
public "get"(): T
public "put"(arg0: integer, arg1: T): SELF
public "put"(arg0: T): SELF
public "iterator"(): $Iterator<(T)>
public "apply"(arg0: integer, arg1: $Consumer$Type<(T)>): SELF
public "apply"(arg0: $Consumer$Type<(T)>): SELF
public "stream"(): $Stream<(T)>
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "parallelStream"(): $Stream<(T)>
public "sizeof"(): integer
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructBuffer$Type<T, SELF> = ($StructBuffer<(T), (SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructBuffer_<T, SELF> = $StructBuffer$Type<(T), (SELF)>;
}}
declare module "packages/org/lwjgl/$CLongBuffer" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CustomBuffer, $CustomBuffer$Type} from "packages/org/lwjgl/system/$CustomBuffer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $CLongBuffer extends $CustomBuffer<($CLongBuffer)> implements $Comparable<($CLongBuffer)> {


public "get"(arg0: integer): long
public "get"(): long
public static "get"(arg0: $ByteBuffer$Type): long
public static "get"(arg0: $ByteBuffer$Type, arg1: integer): long
public "get"(arg0: (long)[]): $CLongBuffer
public "get"(arg0: (long)[], arg1: integer, arg2: integer): $CLongBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $CLongBuffer
public static "put"(arg0: $ByteBuffer$Type, arg1: integer, arg2: long): void
public "put"(arg0: integer, arg1: long): $CLongBuffer
public "put"(arg0: (long)[]): $CLongBuffer
public static "put"(arg0: $ByteBuffer$Type, arg1: long): void
public "put"(arg0: long): $CLongBuffer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CLongBuffer$Type): integer
public static "create"(arg0: long, arg1: integer): $CLongBuffer
public static "create"(arg0: $ByteBuffer$Type): $CLongBuffer
public static "allocateDirect"(arg0: integer): $CLongBuffer
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CLongBuffer$Type = ($CLongBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CLongBuffer_ = $CLongBuffer$Type;
}}
declare module "packages/org/lwjgl/glfw/$GLFWVidMode" {
import {$Struct, $Struct$Type} from "packages/org/lwjgl/system/$Struct"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$GLFWVidMode$Buffer, $GLFWVidMode$Buffer$Type} from "packages/org/lwjgl/glfw/$GLFWVidMode$Buffer"

export class $GLFWVidMode extends $Struct {
static readonly "SIZEOF": integer
static readonly "ALIGNOF": integer
static readonly "WIDTH": integer
static readonly "HEIGHT": integer
static readonly "REDBITS": integer
static readonly "GREENBITS": integer
static readonly "BLUEBITS": integer
static readonly "REFRESHRATE": integer

constructor(arg0: $ByteBuffer$Type)

public static "create"(arg0: long, arg1: integer): $GLFWVidMode$Buffer
public static "create"(arg0: long): $GLFWVidMode
public "width"(): integer
public "height"(): integer
public "sizeof"(): integer
public static "createSafe"(arg0: long): $GLFWVidMode
public static "createSafe"(arg0: long, arg1: integer): $GLFWVidMode$Buffer
public static "nwidth"(arg0: long): integer
public static "nheight"(arg0: long): integer
public "refreshRate"(): integer
public static "nredBits"(arg0: long): integer
public static "ngreenBits"(arg0: long): integer
public static "nblueBits"(arg0: long): integer
public "redBits"(): integer
public static "nrefreshRate"(arg0: long): integer
public "greenBits"(): integer
public "blueBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GLFWVidMode$Type = ($GLFWVidMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GLFWVidMode_ = $GLFWVidMode$Type;
}}
declare module "packages/org/lwjgl/system/$Pointer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Pointer {

 "address"(): long

(): long
}

export namespace $Pointer {
const POINTER_SIZE: integer
const POINTER_SHIFT: integer
const CLONG_SIZE: integer
const CLONG_SHIFT: integer
const BITS32: boolean
const BITS64: boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$Type = ($Pointer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointer_ = $Pointer$Type;
}}
