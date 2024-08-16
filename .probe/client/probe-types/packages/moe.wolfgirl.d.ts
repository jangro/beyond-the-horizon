declare module "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $ClassPathProvider {

 "getClassPaths"(): $Collection<($ClassPath)>

(): $Collection<($ClassPath)>
}

export namespace $ClassPathProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassPathProvider$Type = ($ClassPathProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassPathProvider_ = $ClassPathProvider$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSTypeOfType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSTypeOfType extends $BaseType {
readonly "inner": $BaseType

constructor(inner: $BaseType$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSTypeOfType$Type = ($JSTypeOfType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSTypeOfType_ = $JSTypeOfType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/transpiler/$TypeConverter" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TypeConverter {
static readonly "PROBEJS_PREFIX": string
static readonly "PROBEJS": $DescriptionContext
readonly "predefinedTypes": $Map<($ClassPath), ($BaseType)>
readonly "scriptManager": $ScriptManager

constructor(manager: $ScriptManager$Type)

public "addType"(clazz: $Class$Type<(any)>, type: $BaseType$Type): void
public "convertType"(typeDesc: $TypeDescJS$Type): $BaseType
public "convertType"(baseType: $BaseType$Type): $BaseType
public "convertType"(descriptor: $TypeDescriptor$Type): $BaseType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeConverter$Type = ($TypeConverter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeConverter_ = $TypeConverter$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ClassPath extends $Record {

constructor(clazz: $Class$Type<(any)>)
constructor(parts: $List$Type<(string)>)
constructor(className: string)

public "getTypeScriptPath"(): string
public "getDirPath"(base: $Path$Type): $Path
public "getGenerics"(): $List<(string)>
public "getConcatenated"(sep: string): string
public "makePath"(base: $Path$Type): $Path
public "getConcatenatedPackage"(sep: string): string
public "getName"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getPackage"(): $List<(string)>
public "parts"(): $List<(string)>
public "getClassPath"(): string
public "getClassPathJava"(): string
get "typeScriptPath"(): string
get "generics"(): $List<(string)>
get "name"(): string
get "package"(): $List<(string)>
get "classPath"(): string
get "classPathJava"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassPath$Type = ($ClassPath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassPath_ = $ClassPath$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/$SnippetDump" {
import {$Snippet, $Snippet$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/$Snippet"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export class $SnippetDump {
 "snippets": $List<($Snippet)>

constructor()

public "fromDocs"(): void
public "writeTo"(path: $Path$Type): void
public "snippet"(name: string): $Snippet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetDump$Type = ($SnippetDump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetDump_ = $SnippetDump$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$Types" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TSClassType, $TSClassType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSClassType"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$JSObjectType$Builder, $JSObjectType$Builder$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType$Builder"
import {$JSJoinedType$Intersection, $JSJoinedType$Intersection$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType$Intersection"
import {$JSArrayType, $JSArrayType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSArrayType"
import {$TSParamType, $TSParamType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSParamType"
import {$JSPrimitiveType, $JSPrimitiveType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSPrimitiveType"
import {$TSVariableType, $TSVariableType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSVariableType"
import {$JSTypeOfType, $JSTypeOfType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSTypeOfType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$JSLambdaType$Builder, $JSLambdaType$Builder$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType$Builder"

export interface $Types {

}

export namespace $Types {
const ANY: $JSPrimitiveType
const BOOLEAN: $JSPrimitiveType
const NUMBER: $JSPrimitiveType
const STRING: $JSPrimitiveType
const NEVER: $JSPrimitiveType
const UNKNOWN: $JSPrimitiveType
const VOID: $JSPrimitiveType
const THIS: $JSPrimitiveType
const OBJECT: $JSPrimitiveType
const NULL: $JSPrimitiveType
function typeMaybeGeneric(clazz: $Class$Type<(any)>): $BaseType
function ignoreContext(type: $BaseType$Type, formatType: $BaseType$FormatType$Type): $BaseType
function object(): $JSObjectType$Builder
function type(clazz: $Class$Type<(any)>): $TSClassType
function type(classPath: $ClassPath$Type): $TSClassType
function generic(symbol: string): $TSVariableType
function generic(symbol: string, extendOn: $BaseType$Type): $TSVariableType
function lambda(): $JSLambdaType$Builder
function or(...types: ($BaseType$Type)[]): $BaseType
function literal(content: any): $JSPrimitiveType
function and(...types: ($BaseType$Type)[]): $JSJoinedType$Intersection
function arrayOf(...types: ($BaseType$Type)[]): $JSArrayType
function parameterized(base: $BaseType$Type, ...params: ($BaseType$Type)[]): $TSParamType
function custom(formatter: $BiFunction$Type<($Declaration$Type), ($BaseType$FormatType$Type), (string)>, ...imports: ($ClassPath$Type)[]): $BaseType
function primitive(type: string): $JSPrimitiveType
function typeOf(classType: $BaseType$Type): $JSTypeOfType
function typeOf(clazz: $Class$Type<(any)>): $JSTypeOfType
function typeOf(classPath: $ClassPath$Type): $JSTypeOfType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Types$Type = ($Types);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Types_ = $Types$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $ParamDecl {
 "name": string
 "type": $BaseType
 "varArg": boolean
 "optional": boolean

constructor(name: string, type: $BaseType$Type, varArg: boolean, optional: boolean)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "format"(index: integer, declaration: $Declaration$Type): string
public static "formatParams"(params: $List$Type<($ParamDecl$Type)>, declaration: $Declaration$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamDecl$Type = ($ParamDecl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParamDecl_ = $ParamDecl$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$CommentableCode, $CommentableCode$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$CommentableCode"

export class $Wrapped extends $CommentableCode {
readonly "codes": $List<($Code)>
readonly "comments": $List<(string)>

constructor()

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
public "isEmpty"(): boolean
public "merge"(other: $Wrapped$Type): void
public "addCode"(inner: $Code$Type): void
get "usedClassPaths"(): $Collection<($ClassPath)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$Type = ($Wrapped);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapped_ = $Wrapped$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSArrayType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSArrayType extends $BaseType {
readonly "components": $List<($BaseType)>

constructor(components: $List$Type<($BaseType$Type)>)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSArrayType$Type = ($JSArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSArrayType_ = $JSArrayType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ConstructorInfo" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$ParamInfo, $ParamInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ParamInfo"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"
import {$TypeVariableHolder, $TypeVariableHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder"

export class $ConstructorInfo extends $TypeVariableHolder implements $ClassPathProvider {
readonly "params": $List<($ParamInfo)>
readonly "variableTypes": $List<($VariableType)>

constructor(arg0: $Constructor$Type<(any)>)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorInfo$Type = ($ConstructorInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstructorInfo_ = $ConstructorInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$CommentableCode" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"

export class $CommentableCode extends $Code {
readonly "comments": $List<(string)>

constructor()

public "linebreak"(): void
public "formatComments"(): $List<(string)>
public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
public "addCommentAtStart"(...comments: (string)[]): void
public "format"(declaration: $Declaration$Type): $List<(string)>
public "newline"(...comments: (string)[]): void
public "addComment"(...comments: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentableCode$Type = ($CommentableCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentableCode_ = $CommentableCode$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$ClassProvider, $ClassProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassProvider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"

export class $TypeDescriptor extends $AnnotationHolder implements $ClassPathProvider, $ClassProvider {

constructor(annotations: ($Annotation$Type)[])

public "getClassPaths"(): $Collection<($ClassPath)>
public "stream"(): $Stream<($TypeDescriptor)>
public "getClasses"(): $Collection<($Class<(any)>)>
get "classPaths"(): $Collection<($ClassPath)>
get "classes"(): $Collection<($Class<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$Type = ($TypeDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescriptor_ = $TypeDescriptor$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$ParamInfo, $ParamInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ParamInfo"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JavaMembers$MethodInfo, $JavaMembers$MethodInfo$Type} from "packages/dev/latvian/mods/rhino/$JavaMembers$MethodInfo"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$MethodInfo$MethodAttributes, $MethodInfo$MethodAttributes$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo$MethodAttributes"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TypeVariableHolder, $TypeVariableHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder"

export class $MethodInfo extends $TypeVariableHolder implements $ClassPathProvider {
readonly "name": string
readonly "params": $List<($ParamInfo)>
 "returnType": $TypeDescriptor
readonly "attributes": $MethodInfo$MethodAttributes
readonly "variableTypes": $List<($VariableType)>

constructor(methodInfo: $JavaMembers$MethodInfo$Type, remapper: $Map$Type<($TypeVariable$Type<(any)>), ($Type$Type)>)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$Type = ($MethodInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodInfo_ = $MethodInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSPrimitiveType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSPrimitiveType extends $BaseType {
readonly "content": string

constructor(content: string)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "equals"(o: any): boolean
public "hashCode"(): integer
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSPrimitiveType$Type = ($JSPrimitiveType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSPrimitiveType_ = $JSPrimitiveType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSArrayType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSArrayType extends $BaseType {
 "component": $BaseType

constructor(component: $BaseType$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSArrayType$Type = ($TSArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSArrayType_ = $TSArrayType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $AnnotationHolder {

constructor(annotations: ($Annotation$Type)[])

public "getAnnotation"<T extends $Annotation>(type: $Class$Type<(T)>): T
public "getAnnotations"<T extends $Annotation>(type: $Class$Type<(T)>): $List<(T)>
public "getAnnotations"(): ($Annotation)[]
public "hasAnnotation"(annotation: $Class$Type<(any)>): boolean
get "annotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationHolder$Type = ($AnnotationHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationHolder_ = $AnnotationHolder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParamDecl, $ParamDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$MethodDecl, $MethodDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$MethodDecl"

export class $JSLambdaType extends $BaseType {
readonly "params": $List<($ParamDecl)>
readonly "returnType": $BaseType

constructor(params: $List$Type<($ParamDecl$Type)>, returnType: $BaseType$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "formatWithName"(name: string, declaration: $Declaration$Type, input: $BaseType$FormatType$Type): string
public "asMethod"(methodName: string): $MethodDecl
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$Type = ($JSLambdaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSLambdaType_ = $JSLambdaType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType$Builder" {
import {$JSLambdaType, $JSLambdaType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParamDecl, $ParamDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSLambdaType$Builder {
readonly "params": $List<($ParamDecl)>
 "returnType": $BaseType
 "arrowFunction": boolean

constructor()

public "build"(): $JSLambdaType
public "returnType"(type: $BaseType$Type): $JSLambdaType$Builder
public "method"(): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$Type, isOptional: boolean): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$Type): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$Type, isOptional: boolean, isVarArg: boolean): $JSLambdaType$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$Builder$Type = ($JSLambdaType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSLambdaType$Builder_ = $JSLambdaType$Builder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$Wrapped$Global, $Wrapped$Global$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped$Global"
import {$Transpiler, $Transpiler$Type} from "packages/moe/wolfgirl/probejs/lang/transpiler/$Transpiler"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Clazz, $Clazz$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScriptDump {
static readonly "SERVER_DUMP": $Supplier<($ScriptDump)>
static readonly "CLIENT_DUMP": $Supplier<($ScriptDump)>
static readonly "STARTUP_DUMP": $Supplier<($ScriptDump)>
readonly "scriptType": $ScriptType
readonly "manager": $ScriptManager
readonly "basePath": $Path
readonly "scriptPath": $Path
readonly "globals": $Map<(string), ($Pair<($Collection<(string)>), ($Wrapped$Global)>)>
readonly "transpiler": $Transpiler
readonly "recordedClasses": $Set<($Clazz)>
 "dumped": integer
 "total": integer

constructor(manager: $ScriptManager$Type, basePath: $Path$Type, scriptPath: $Path$Type, scriptPredicate: $Predicate$Type<($Clazz$Type)>)

public "addGlobal"(identifier: string, ...content: ($Code$Type)[]): void
public "addGlobal"(identifier: string, excludedNames: $Collection$Type<(string)>, ...content: ($Code$Type)[]): void
public "ensurePath"(path: string): $Path
public "ensurePath"(path: string, script: boolean): $Path
public "getGlobalFolder"(): $Path
public "getTypeFolder"(): $Path
public "getPackageFolder"(): $Path
public "dumpGlobal"(): void
public "dumpClasses"(): void
public "dumpJSConfig"(): void
public "retrieveClasses"(): $Set<($Class<(any)>)>
public "removeClasses"(): void
public "acceptClasses"(classes: $Collection$Type<($Clazz$Type)>): void
public "getSource"(): $Path
public "dump"(): void
public "assignType"(classPath: $Class$Type<(any)>, type: $BaseType$Type): void
public "assignType"(classPath: $ClassPath$Type, type: $BaseType$Type): void
get "globalFolder"(): $Path
get "typeFolder"(): $Path
get "packageFolder"(): $Path
get "source"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptDump$Type = ($ScriptDump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptDump_ = $ScriptDump$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$SnippetGenerationEventJS" {
import {$Snippet, $Snippet$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/$Snippet"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SnippetDump, $SnippetDump$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/$SnippetDump"

export class $SnippetGenerationEventJS extends $EventJS {

constructor(dump: $SnippetDump$Type)

public "create"(name: string, handler: $Consumer$Type<($Snippet$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetGenerationEventJS$Type = ($SnippetGenerationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetGenerationEventJS_ = $SnippetGenerationEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"

export class $TypeVariableHolder extends $AnnotationHolder {
readonly "variableTypes": $List<($VariableType)>

constructor(variables: ($TypeVariable$Type<(any)>)[], annotations: ($Annotation$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeVariableHolder$Type = ($TypeVariableHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeVariableHolder_ = $TypeVariableHolder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/$Snippet" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Variable, $Variable$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/parts/$Variable"

export class $Snippet {
readonly "name": string

constructor(name: string)

public "compile"(): $JsonObject
public "prefix"(prefix: string): $Snippet
public "literal"(content: string): $Snippet
public "newline"(): $Snippet
public "description"(description: string): $Snippet
public "registry"<T>(registry: $ResourceKey$Type<($Registry$Type<(T)>)>): $Snippet
public "choices"(choices: $Collection$Type<(string)>): $Snippet
public "choices"(enumeration: integer, choices: $Collection$Type<(string)>): $Snippet
public "variable"(variable: $Variable$Type): $Snippet
public "getPrefixes"(): $List<(string)>
public "tabStop"(): $Snippet
public "tabStop"(enumeration: integer, defaultValue: string): $Snippet
public "tabStop"(enumeration: integer): $Snippet
get "prefixes"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Snippet$Type = ($Snippet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Snippet_ = $Snippet$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo$MethodAttributes" {
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export class $MethodInfo$MethodAttributes {
readonly "isStatic": boolean
readonly "isDefault": boolean
readonly "isAbstract": boolean

constructor(method: $Method$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$MethodAttributes$Type = ($MethodInfo$MethodAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodInfo$MethodAttributes_ = $MethodInfo$MethodAttributes$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/transpiler/$Transpiler" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TypeConverter, $TypeConverter$Type} from "packages/moe/wolfgirl/probejs/lang/transpiler/$TypeConverter"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$Clazz, $Clazz$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TypeScriptFile, $TypeScriptFile$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$TypeScriptFile"

export class $Transpiler {
readonly "typeConverter": $TypeConverter
readonly "rejectedClasses": $Set<($ClassPath)>

constructor(manager: $ScriptManager$Type)

public "dump"(clazzes: $Collection$Type<($Clazz$Type)>): $Map<($ClassPath), ($TypeScriptFile)>
public "reject"(clazz: $Class$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transpiler$Type = ($Transpiler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transpiler_ = $Transpiler$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSJoinedType extends $BaseType {
readonly "delimiter": string
readonly "types": $List<($BaseType)>


public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$Type = ($JSJoinedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSJoinedType_ = $JSJoinedType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Reference, $Reference$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Reference"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Declaration {
static readonly "INPUT_TEMPLATE": string
readonly "references": $Map<($ClassPath), ($Reference)>

constructor()

public "addClass"(path: $ClassPath$Type): void
public "exclude"(name: string): void
public "getSymbol"(path: $ClassPath$Type, input: boolean): string
public "getSymbol"(path: $ClassPath$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Declaration$Type = ($Declaration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Declaration_ = $Declaration$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ParamInfo" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Parameter, $Parameter$Type} from "packages/java/lang/reflect/$Parameter"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"

export class $ParamInfo extends $AnnotationHolder implements $ClassPathProvider {
 "name": string
 "type": $TypeDescriptor
readonly "varArgs": boolean

constructor(parameter: $Parameter$Type)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamInfo$Type = ($ParamInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParamInfo_ = $ParamInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$Reference" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Reference extends $Record {

constructor(classPath: $ClassPath$Type, original: string, input: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "original"(): string
public "classPath"(): $ClassPath
public "input"(): string
public "getImport"(): string
get "import"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$Type = ($Reference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reference_ = $Reference$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSClassType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSClassType extends $BaseType {
 "classPath": $ClassPath

constructor(classPath: $ClassPath$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSClassType$Type = ($TSClassType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSClassType_ = $TSClassType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Clazz$ClassAttribute, $Clazz$ClassAttribute$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassAttribute"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FieldInfo, $FieldInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$ConstructorInfo, $ConstructorInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ConstructorInfo"
import {$MethodInfo, $MethodInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TypeVariableHolder, $TypeVariableHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder"

export class $Clazz extends $TypeVariableHolder implements $ClassPathProvider {
readonly "classPath": $ClassPath
readonly "constructors": $List<($ConstructorInfo)>
readonly "fields": $List<($FieldInfo)>
readonly "methods": $List<($MethodInfo)>
readonly "superClass": $TypeDescriptor
readonly "interfaces": $List<($TypeDescriptor)>
readonly "attribute": $Clazz$ClassAttribute
readonly "variableTypes": $List<($VariableType)>

constructor(clazz: $Class$Type<(any)>)

public "getUsedClasses"(): $Set<($ClassPath)>
public "getClassPaths"(): $Collection<($ClassPath)>
public "equals"(o: any): boolean
public "hashCode"(): integer
get "usedClasses"(): $Set<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$Type = ($Clazz);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz_ = $Clazz$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BaseType$FormatType extends $Enum<($BaseType$FormatType)> {
static readonly "INPUT": $BaseType$FormatType
static readonly "RETURN": $BaseType$FormatType
static readonly "VARIABLE": $BaseType$FormatType


public static "values"(): ($BaseType$FormatType)[]
public static "valueOf"(name: string): $BaseType$FormatType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$FormatType$Type = (("input") | ("variable") | ("return")) | ($BaseType$FormatType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseType$FormatType_ = $BaseType$FormatType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"

export class $Code {

constructor()

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type): $List<(string)>
public "line"(declaration: $Declaration$Type): string
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Code$Type = ($Code);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Code_ = $Code$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$ScriptEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$TypeConverter, $TypeConverter$Type} from "packages/moe/wolfgirl/probejs/lang/transpiler/$TypeConverter"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$ScriptDump, $ScriptDump$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump"

export class $ScriptEventJS extends $EventJS {

constructor(dump: $ScriptDump$Type)

public "getScriptType"(): $ScriptType
public "getTypeConverter"(): $TypeConverter
get "scriptType"(): $ScriptType
get "typeConverter"(): $TypeConverter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptEventJS$Type = ($ScriptEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptEventJS_ = $ScriptEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Clazz$ClassType extends $Enum<($Clazz$ClassType)> {
static readonly "INTERFACE": $Clazz$ClassType
static readonly "ENUM": $Clazz$ClassType
static readonly "RECORD": $Clazz$ClassType
static readonly "CLASS": $Clazz$ClassType


public static "values"(): ($Clazz$ClassType)[]
public static "valueOf"(name: string): $Clazz$ClassType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassType$Type = (("record") | ("interface") | ("class") | ("enum")) | ($Clazz$ClassType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz$ClassType_ = $Clazz$ClassType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType" {
import {$TSArrayType, $TSArrayType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSArrayType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"

export class $BaseType extends $Code {

constructor()

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "format"(declaration: $Declaration$Type): $List<(string)>
public "line"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): string
public "asArray"(): $TSArrayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$Type = ($BaseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseType_ = $BaseType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType$Intersection" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$JSJoinedType, $JSJoinedType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSJoinedType$Intersection extends $JSJoinedType {
readonly "delimiter": string
readonly "types": $List<($BaseType)>

constructor(types: $List$Type<($BaseType$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$Intersection$Type = ($JSJoinedType$Intersection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSJoinedType$Intersection_ = $JSJoinedType$Intersection$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$TypeAssignmentEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptDump, $ScriptDump$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TypeAssignmentEventJS extends $EventJS {

constructor(scriptDump: $ScriptDump$Type)

public "assignType"(clazz: $Class$Type<(any)>, baseType: $BaseType$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAssignmentEventJS$Type = ($TypeAssignmentEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAssignmentEventJS_ = $TypeAssignmentEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$ClassProvider" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $ClassProvider {

 "getClasses"(): $Collection<($Class<(any)>)>

(): $Collection<($Class<(any)>)>
}

export namespace $ClassProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassProvider$Type = ($ClassProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassProvider_ = $ClassProvider$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FieldInfo$FieldAttributes, $FieldInfo$FieldAttributes$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo$FieldAttributes"
import {$JavaMembers$FieldInfo, $JavaMembers$FieldInfo$Type} from "packages/dev/latvian/mods/rhino/$JavaMembers$FieldInfo"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"

export class $FieldInfo extends $AnnotationHolder implements $ClassPathProvider {
readonly "name": string
readonly "type": $TypeDescriptor
readonly "attributes": $FieldInfo$FieldAttributes

constructor(field: $JavaMembers$FieldInfo$Type)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$Type = ($FieldInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldInfo_ = $FieldInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType$Builder" {
import {$JSObjectType, $JSObjectType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JSObjectType$Builder {
readonly "members": $Map<(string), ($BaseType)>

constructor()

public "build"(): $JSObjectType
public "member"(name: string, type: $BaseType$Type): $JSObjectType$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$Builder$Type = ($JSObjectType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSObjectType$Builder_ = $JSObjectType$Builder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/parts/$SnippetPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SnippetPart {

 "format"(): string

(): string
}

export namespace $SnippetPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetPart$Type = ($SnippetPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetPart_ = $SnippetPart$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$MethodDecl" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TSVariableType, $TSVariableType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSVariableType"
import {$ParamDecl, $ParamDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$CommentableCode, $CommentableCode$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$CommentableCode"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $MethodDecl extends $CommentableCode {
 "name": string
 "isAbstract": boolean
 "isStatic": boolean
 "isInterface": boolean
 "variableTypes": $List<($TSVariableType)>
 "params": $List<($ParamDecl)>
 "returnType": $BaseType
 "content": string
readonly "comments": $List<(string)>

constructor(name: string, variableTypes: $List$Type<($TSVariableType$Type)>, params: $List$Type<($ParamDecl$Type)>, returnType: $BaseType$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodDecl$Type = ($MethodDecl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodDecl_ = $MethodDecl$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$TypingModificationEventJS" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptEventJS, $ScriptEventJS$Type} from "packages/moe/wolfgirl/probejs/events/$ScriptEventJS"
import {$ScriptDump, $ScriptDump$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TypeScriptFile, $TypeScriptFile$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$TypeScriptFile"

export class $TypingModificationEventJS extends $ScriptEventJS {

constructor(dump: $ScriptDump$Type, files: $Map$Type<($ClassPath$Type), ($TypeScriptFile$Type)>)

public "modify"(clazz: $Class$Type<(any)>, file: $Consumer$Type<($TypeScriptFile$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypingModificationEventJS$Type = ($TypingModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypingModificationEventJS_ = $TypingModificationEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSParamType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSParamType extends $BaseType {
 "baseType": $BaseType
readonly "params": $List<($BaseType)>

constructor(baseType: $BaseType$Type, params: $List$Type<($BaseType$Type)>)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSParamType$Type = ($TSParamType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSParamType_ = $TSParamType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo$FieldAttributes" {
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export class $FieldInfo$FieldAttributes {
readonly "isFinal": boolean
readonly "isStatic": boolean

constructor(field: $Field$Type)

public "getStaticValue"(): any
get "staticValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$FieldAttributes$Type = ($FieldInfo$FieldAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldInfo$FieldAttributes_ = $FieldInfo$FieldAttributes$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/parts/$Variable" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SnippetPart, $SnippetPart$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/parts/$SnippetPart"

export class $Variable extends $Enum<($Variable)> implements $SnippetPart {
static readonly "LINE_COMMENT": $Variable
static readonly "BLOCK_COMMENT_END": $Variable
static readonly "BLOCK_COMMENT_START": $Variable
static readonly "UUID": $Variable
static readonly "RANDOM_HEX": $Variable
static readonly "RANDOM": $Variable
static readonly "CURRENT_TIMEZONE_OFFSET": $Variable
static readonly "CURRENT_SECONDS_UNIX": $Variable
static readonly "CURRENT_SECOND": $Variable
static readonly "CURRENT_MINUTE": $Variable
static readonly "CURRENT_HOUR": $Variable
static readonly "CURRENT_DAY_NAME_SHORT": $Variable
static readonly "CURRENT_DAY_NAME": $Variable
static readonly "CURRENT_DATE": $Variable
static readonly "CURRENT_MONTH_NAME_SHORT": $Variable
static readonly "CURRENT_MONTH_NAME": $Variable
static readonly "CURRENT_MONTH": $Variable
static readonly "CURRENT_YEAR_SHORT": $Variable
static readonly "CURRENT_YEAR": $Variable
static readonly "CURSOR_NUMBER": $Variable
static readonly "CURSOR_INDEX": $Variable
static readonly "WORKSPACE_FOLDER": $Variable
static readonly "WORKSPACE_NAME": $Variable
static readonly "CLIPBOARD": $Variable
static readonly "RELATIVE_FILEPATH": $Variable
static readonly "TM_FILEPATH": $Variable
static readonly "TM_DIRECTORY": $Variable
static readonly "TM_FILENAME_BASE": $Variable
static readonly "TM_FILENAME": $Variable
static readonly "TM_LINE_NUMBER": $Variable
static readonly "TM_LINE_INDEX": $Variable
static readonly "TM_CURRENT_WORD": $Variable
static readonly "TM_CURRENT_LINE": $Variable
static readonly "TM_SELECTED_TEXT": $Variable


public static "values"(): ($Variable)[]
public static "valueOf"(name: string): $Variable
public "format"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variable$Type = (("cursor_index") | ("current_day_name_short") | ("tm_current_line") | ("block_comment_end") | ("current_month_name_short") | ("uuid") | ("clipboard") | ("random") | ("tm_line_index") | ("current_year_short") | ("current_year") | ("current_second") | ("line_comment") | ("workspace_folder") | ("workspace_name") | ("tm_filename_base") | ("tm_current_word") | ("current_hour") | ("tm_filepath") | ("tm_directory") | ("current_timezone_offset") | ("tm_selected_text") | ("relative_filepath") | ("current_date") | ("tm_filename") | ("current_seconds_unix") | ("current_minute") | ("random_hex") | ("current_month") | ("tm_line_number") | ("block_comment_start") | ("current_day_name") | ("current_month_name") | ("cursor_number")) | ($Variable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Variable_ = $Variable$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$AnnotatedTypeVariable, $AnnotatedTypeVariable$Type} from "packages/java/lang/reflect/$AnnotatedTypeVariable"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"

export class $VariableType extends $TypeDescriptor {
 "symbol": string
 "descriptors": $List<($TypeDescriptor)>

constructor(typeVariable: $TypeVariable$Type<(any)>, checkBounds: boolean)
constructor(typeVariable: $AnnotatedTypeVariable$Type, checkBounds: boolean)
constructor(typeVariable: $TypeVariable$Type<(any)>)
constructor(typeVariable: $AnnotatedTypeVariable$Type)

public "stream"(): $Stream<($TypeDescriptor)>
public "getSymbol"(): string
public "getDescriptors"(): $List<($TypeDescriptor)>
get "symbol"(): string
get "descriptors"(): $List<($TypeDescriptor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableType$Type = ($VariableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableType_ = $VariableType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSVariableType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSVariableType extends $BaseType {
readonly "symbol": string
 "extendsType": $BaseType

constructor(symbol: string, extendsType: $BaseType$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSVariableType$Type = ($TSVariableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSVariableType_ = $TSVariableType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped$Global" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$Wrapped, $Wrapped$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped"

export class $Wrapped$Global extends $Wrapped {
readonly "codes": $List<($Code)>
readonly "comments": $List<(string)>

constructor()

public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$Global$Type = ($Wrapped$Global);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapped$Global_ = $Wrapped$Global$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassAttribute" {
import {$Clazz$ClassType, $Clazz$ClassType$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Clazz$ClassAttribute {
readonly "type": $Clazz$ClassType
readonly "isAbstract": boolean
readonly "isInterface": boolean
readonly "raw": $Class<(any)>

constructor(clazz: $Class$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassAttribute$Type = ($Clazz$ClassAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz$ClassAttribute_ = $Clazz$ClassAttribute$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JSObjectType extends $BaseType {
readonly "members": $Map<(string), ($BaseType)>

constructor(members: $Map$Type<(string), ($BaseType$Type)>)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$Type = ($JSObjectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSObjectType_ = $JSObjectType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$TypeScriptFile" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BufferedWriter, $BufferedWriter$Type} from "packages/java/io/$BufferedWriter"

export class $TypeScriptFile {
readonly "declaration": $Declaration
readonly "codeList": $List<($Code)>
readonly "classPath": $ClassPath

constructor(self: $ClassPath$Type)

public "writeAsModule"(writer: $BufferedWriter$Type): void
public "findCode"<T extends $Code>(type: $Class$Type<(T)>): $Optional<(T)>
public "excludeSymbol"(name: string): void
public "format"(): string
public "write"(writeTo: $Path$Type): void
public "write"(writer: $BufferedWriter$Type): void
public "addCode"(code: $Code$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeScriptFile$Type = ($TypeScriptFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeScriptFile_ = $TypeScriptFile$Type;
}}
