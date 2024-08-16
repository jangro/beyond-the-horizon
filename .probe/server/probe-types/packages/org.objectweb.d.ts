declare module "packages/org/objectweb/asm/$Type" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Type {
static readonly "VOID": integer
static readonly "BOOLEAN": integer
static readonly "CHAR": integer
static readonly "BYTE": integer
static readonly "SHORT": integer
static readonly "INT": integer
static readonly "FLOAT": integer
static readonly "LONG": integer
static readonly "DOUBLE": integer
static readonly "ARRAY": integer
static readonly "OBJECT": integer
static readonly "METHOD": integer
static readonly "VOID_TYPE": $Type
static readonly "BOOLEAN_TYPE": $Type
static readonly "CHAR_TYPE": $Type
static readonly "BYTE_TYPE": $Type
static readonly "SHORT_TYPE": $Type
static readonly "INT_TYPE": $Type
static readonly "FLOAT_TYPE": $Type
static readonly "LONG_TYPE": $Type
static readonly "DOUBLE_TYPE": $Type


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getDescriptor"(arg0: $Class$Type<(any)>): string
public "getDescriptor"(): string
public static "getReturnType"(arg0: string): $Type
public static "getReturnType"(arg0: $Method$Type): $Type
public "getReturnType"(): $Type
public static "getType"(arg0: string): $Type
public static "getType"(arg0: $Class$Type<(any)>): $Type
public static "getType"(arg0: $Method$Type): $Type
public static "getType"(arg0: $Constructor$Type<(any)>): $Type
public "getSize"(): integer
public static "getMethodType"(arg0: string): $Type
public static "getMethodType"(arg0: $Type$Type, ...arg1: ($Type$Type)[]): $Type
public static "getMethodDescriptor"(arg0: $Type$Type, ...arg1: ($Type$Type)[]): string
public static "getMethodDescriptor"(arg0: $Method$Type): string
public "getClassName"(): string
public static "getInternalName"(arg0: $Class$Type<(any)>): string
public "getInternalName"(): string
public "getSort"(): integer
public static "getConstructorDescriptor"(arg0: $Constructor$Type<(any)>): string
public "getDimensions"(): integer
public static "getArgumentTypes"(arg0: $Method$Type): ($Type)[]
public "getArgumentTypes"(): ($Type)[]
public static "getArgumentTypes"(arg0: string): ($Type)[]
public "getElementType"(): $Type
public "getArgumentsAndReturnSizes"(): integer
public static "getArgumentsAndReturnSizes"(arg0: string): integer
public static "getObjectType"(arg0: string): $Type
public "getOpcode"(arg0: integer): integer
public static "getArgumentCount"(arg0: string): integer
public "getArgumentCount"(): integer
get "descriptor"(): string
get "returnType"(): $Type
get "size"(): integer
get "className"(): string
get "internalName"(): string
get "sort"(): integer
get "dimensions"(): integer
get "argumentTypes"(): ($Type)[]
get "elementType"(): $Type
get "argumentsAndReturnSizes"(): integer
get "argumentCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$Type = ($Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type_ = $Type$Type;
}}
