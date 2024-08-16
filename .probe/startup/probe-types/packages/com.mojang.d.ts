declare module "packages/com/mojang/blaze3d/platform/$DisplayData" {
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"

export class $DisplayData {
readonly "width": integer
readonly "height": integer
readonly "fullscreenWidth": $OptionalInt
readonly "fullscreenHeight": $OptionalInt
readonly "isFullscreen": boolean

constructor(arg0: integer, arg1: integer, arg2: $OptionalInt$Type, arg3: $OptionalInt$Type, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayData$Type = ($DisplayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayData_ = $DisplayData$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServer$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RealmsServer$State extends $Enum<($RealmsServer$State)> {
static readonly "CLOSED": $RealmsServer$State
static readonly "OPEN": $RealmsServer$State
static readonly "UNINITIALIZED": $RealmsServer$State


public static "values"(): ($RealmsServer$State)[]
public static "valueOf"(arg0: string): $RealmsServer$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$State$Type = (("closed") | ("open") | ("uninitialized")) | ($RealmsServer$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer$State_ = $RealmsServer$State$Type;
}}
declare module "packages/com/mojang/text2speech/$Narrator" {
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"

export interface $Narrator {

 "clear"(): void
 "destroy"(): void
 "say"(arg0: string, arg1: boolean): void
 "active"(): boolean
}

export namespace $Narrator {
const LOGGER: $Logger
const EMPTY: $Narrator
function getNarrator(): $Narrator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Narrator$Type = ($Narrator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Narrator_ = $Narrator$Type;
}}
declare module "packages/com/mojang/brigadier/context/$SuggestionContext" {
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"

export class $SuggestionContext<S> {
readonly "parent": $CommandNode<(S)>
readonly "startPos": integer

constructor(arg0: $CommandNode$Type<(S)>, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionContext$Type<S> = ($SuggestionContext<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuggestionContext_<S> = $SuggestionContext$Type<(S)>;
}}
declare module "packages/com/mojang/authlib/$GameProfile" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PropertyMap, $PropertyMap$Type} from "packages/com/mojang/authlib/properties/$PropertyMap"

export class $GameProfile {

constructor(arg0: $UUID$Type, arg1: string)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getProperties"(): $PropertyMap
public "getId"(): $UUID
public "isComplete"(): boolean
public "isLegacy"(): boolean
get "name"(): string
get "properties"(): $PropertyMap
get "id"(): $UUID
get "complete"(): boolean
get "legacy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfile$Type = ($GameProfile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameProfile_ = $GameProfile$Type;
}}
declare module "packages/com/mojang/authlib/minecraft/report/$ReportEvidence" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReportChatMessage, $ReportChatMessage$Type} from "packages/com/mojang/authlib/minecraft/report/$ReportChatMessage"

export class $ReportEvidence {
 "messages": $List<($ReportChatMessage)>

constructor(arg0: $List$Type<($ReportChatMessage$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportEvidence$Type = ($ReportEvidence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReportEvidence_ = $ReportEvidence$Type;
}}
declare module "packages/com/mojang/blaze3d/font/$GlyphProvider" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$IntSet, $IntSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import {$GlyphInfo, $GlyphInfo$Type} from "packages/com/mojang/blaze3d/font/$GlyphInfo"

export interface $GlyphProvider extends $AutoCloseable {

 "close"(): void
 "getSupportedGlyphs"(): $IntSet
 "getGlyph"(arg0: integer): $GlyphInfo

(): void
}

export namespace $GlyphProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$Type = ($GlyphProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphProvider_ = $GlyphProvider$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$Applicative" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P10, $Products$P10$Type} from "packages/com/mojang/datafixers/$Products$P10"
import {$Products$P11, $Products$P11$Type} from "packages/com/mojang/datafixers/$Products$P11"
import {$Products$P14, $Products$P14$Type} from "packages/com/mojang/datafixers/$Products$P14"
import {$Products$P15, $Products$P15$Type} from "packages/com/mojang/datafixers/$Products$P15"
import {$Products$P12, $Products$P12$Type} from "packages/com/mojang/datafixers/$Products$P12"
import {$Products$P13, $Products$P13$Type} from "packages/com/mojang/datafixers/$Products$P13"
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Products$P16, $Products$P16$Type} from "packages/com/mojang/datafixers/$Products$P16"
import {$Products$P1, $Products$P1$Type} from "packages/com/mojang/datafixers/$Products$P1"
import {$Functor, $Functor$Type} from "packages/com/mojang/datafixers/kinds/$Functor"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Products$P9, $Products$P9$Type} from "packages/com/mojang/datafixers/$Products$P9"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export interface $Applicative<F extends $K1, Mu extends $Applicative$Mu> extends $Functor<(F), (Mu)> {

 "ap"<A, R>(arg0: $Function$Type<(A), (R)>, arg1: $App$Type<(F), (A)>): $App<(F), (R)>
 "ap"<A, R>(arg0: $App$Type<(F), ($Function$Type<(A), (R)>)>, arg1: $App$Type<(F), (A)>): $App<(F), (R)>
 "point"<A>(arg0: A): $App<(F), (A)>
 "ap2"<A, B, R>(arg0: $App$Type<(F), ($BiFunction$Type<(A), (B), (R)>)>, arg1: $App$Type<(F), (A)>, arg2: $App$Type<(F), (B)>): $App<(F), (R)>
 "apply3"<T1, T2, T3, R>(arg0: $Function3$Type<(T1), (T2), (T3), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>): $App<(F), (R)>
 "apply2"<A, B, R>(arg0: $BiFunction$Type<(A), (B), (R)>, arg1: $App$Type<(F), (A)>, arg2: $App$Type<(F), (B)>): $App<(F), (R)>
 "lift4"<T1, T2, T3, T4, R>(arg0: $App$Type<(F), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (R)>)>
 "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<(F), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>): $App<(F), (R)>
 "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<(F), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (R)>)>
 "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<(F), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (R)>)>
 "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<(F), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>): $App<(F), (R)>
 "lift2"<A, B, R>(arg0: $App$Type<(F), ($BiFunction$Type<(A), (B), (R)>)>): $BiFunction<($App<(F), (A)>), ($App<(F), (B)>), ($App<(F), (R)>)>
 "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<(F), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (R)>)>
 "ap3"<T1, T2, T3, R>(arg0: $App$Type<(F), ($Function3$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>): $App<(F), (R)>
 "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<(F), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>): $App<(F), (R)>
 "lift1"<A, R>(arg0: $App$Type<(F), ($Function$Type<(A), (R)>)>): $Function<($App<(F), (A)>), ($App<(F), (R)>)>
 "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<(F), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>): $App<(F), (R)>
 "lift3"<T1, T2, T3, R>(arg0: $App$Type<(F), ($Function3$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (R)>)>
 "ap4"<T1, T2, T3, T4, R>(arg0: $App$Type<(F), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>): $App<(F), (R)>
 "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<(F), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>): $App<(F), (R)>
 "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$Type<(F), ($Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>): $App<(F), (R)>
 "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$Type<(F), ($Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>, arg11: $App$Type<(F), (T11)>, arg12: $App$Type<(F), (T12)>): $App<(F), (R)>
 "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$Type<(F), ($Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>, arg11: $App$Type<(F), (T11)>): $App<(F), (R)>
 "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<(F), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (T9)>), ($App<(F), (R)>)>
 "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<(F), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<(F), (T1)>), ($App<(F), (T2)>), ($App<(F), (T3)>), ($App<(F), (T4)>), ($App<(F), (T5)>), ($App<(F), (T6)>), ($App<(F), (T7)>), ($App<(F), (T8)>), ($App<(F), (R)>)>
 "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$Type<(F), ($Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>, arg11: $App$Type<(F), (T11)>, arg12: $App$Type<(F), (T12)>, arg13: $App$Type<(F), (T13)>, arg14: $App$Type<(F), (T14)>, arg15: $App$Type<(F), (T15)>, arg16: $App$Type<(F), (T16)>): $App<(F), (R)>
 "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>): $App<(F), (R)>
 "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$Type<(F), ($Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>, arg11: $App$Type<(F), (T11)>, arg12: $App$Type<(F), (T12)>, arg13: $App$Type<(F), (T13)>): $App<(F), (R)>
 "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>): $App<(F), (R)>
 "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$Type<(F), ($Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>, arg11: $App$Type<(F), (T11)>, arg12: $App$Type<(F), (T12)>, arg13: $App$Type<(F), (T13)>, arg14: $App$Type<(F), (T14)>, arg15: $App$Type<(F), (T15)>): $App<(F), (R)>
 "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$Type<(F), ($Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>, arg10: $App$Type<(F), (T10)>, arg11: $App$Type<(F), (T11)>, arg12: $App$Type<(F), (T12)>, arg13: $App$Type<(F), (T13)>, arg14: $App$Type<(F), (T14)>): $App<(F), (R)>
 "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>): $App<(F), (R)>
 "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>): $App<(F), (R)>
 "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>): $App<(F), (R)>
 "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$Type<(F), (T1)>, arg2: $App$Type<(F), (T2)>, arg3: $App$Type<(F), (T3)>, arg4: $App$Type<(F), (T4)>, arg5: $App$Type<(F), (T5)>, arg6: $App$Type<(F), (T6)>, arg7: $App$Type<(F), (T7)>, arg8: $App$Type<(F), (T8)>, arg9: $App$Type<(F), (T9)>): $App<(F), (R)>
 "map"<T, R>(arg0: $Function$Type<(any), (any)>, arg1: $App$Type<(F), (T)>): $App<(F), (R)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>, arg15: $App$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}

export namespace $Applicative {
function unbox<F, Mu>(arg0: $App$Type<(Mu), (F)>): $Applicative<(F), (Mu)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Applicative$Type<F, Mu> = ($Applicative<(F), (Mu)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Applicative_<F, Mu> = $Applicative$Type<(F), (Mu)>;
}}
declare module "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$RealmInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbuseReportRequest$RealmInfo {
 "realmId": string
 "slotId": integer

constructor(arg0: string, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$RealmInfo$Type = ($AbuseReportRequest$RealmInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest$RealmInfo_ = $AbuseReportRequest$RealmInfo$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServerList" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$RealmsServer, $RealmsServer$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerList extends $ValueObject {
 "servers": $List<($RealmsServer)>

constructor()

public static "parse"(arg0: string): $RealmsServerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerList$Type = ($RealmsServerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerList_ = $RealmsServerList$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$AbstractUniform" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $AbstractUniform {

constructor()

public "set"(arg0: integer, arg1: integer): void
public "set"(arg0: float): void
public "set"(arg0: integer): void
public "set"(arg0: float, arg1: float): void
public "set"(arg0: $Matrix3f$Type): void
public "setSafe"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: (float)[]): void
public "setSafe"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "set"(arg0: $Matrix4f$Type): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: $Vector4f$Type): void
public "setMat2x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "setMat2x2"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setMat3x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): void
public "setMat3x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat3x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat4x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat4x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat4x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float): void
public "set"(arg0: $Vector3f$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractUniform$Type = ($AbstractUniform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractUniform_ = $AbstractUniform$Type;
}}
declare module "packages/com/mojang/datafixers/$DataFixer" {
import {$DSL$TypeReference, $DSL$TypeReference$Type} from "packages/com/mojang/datafixers/$DSL$TypeReference"
import {$Schema, $Schema$Type} from "packages/com/mojang/datafixers/schemas/$Schema"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"

export interface $DataFixer {

 "update"<T>(arg0: $DSL$TypeReference$Type, arg1: $Dynamic$Type<(T)>, arg2: integer, arg3: integer): $Dynamic<(T)>
 "getSchema"(arg0: integer): $Schema
}

export namespace $DataFixer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFixer$Type = ($DataFixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFixer_ = $DataFixer$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/$ServicesKeyType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ServicesKeyType extends $Enum<($ServicesKeyType)> {
static readonly "PROFILE_PROPERTY": $ServicesKeyType
static readonly "PROFILE_KEY": $ServicesKeyType


public static "values"(): ($ServicesKeyType)[]
public static "valueOf"(arg0: string): $ServicesKeyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeyType$Type = (("profile_property") | ("profile_key")) | ($ServicesKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServicesKeyType_ = $ServicesKeyType$Type;
}}
declare module "packages/com/mojang/serialization/$OptionalDynamic" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$DynamicLike, $DynamicLike$Type} from "packages/com/mojang/serialization/$DynamicLike"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $OptionalDynamic<T> extends $DynamicLike<(T)> {

constructor(arg0: $DynamicOps$Type<(T)>, arg1: $DataResult$Type<($Dynamic$Type<(T)>)>)

public "get"(arg0: string): $OptionalDynamic<(T)>
public "get"(): $DataResult<($Dynamic<(T)>)>
public "decode"<A>(arg0: $Decoder$Type<(any)>): $DataResult<($Pair<(A), (T)>)>
public "map"<U>(arg0: $Function$Type<(any), (U)>): $DataResult<(U)>
public "result"(): $Optional<($Dynamic<(T)>)>
public "flatMap"<U>(arg0: $Function$Type<(any), (any)>): $DataResult<(U)>
public "getGeneric"(arg0: T): $DataResult<(T)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "asNumber"(): $DataResult<(number)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "asString"(): $DataResult<(string)>
public "orElseEmptyList"(): $Dynamic<(T)>
public "into"<V>(arg0: $Function$Type<(any), (any)>): $DataResult<(V)>
public "getElement"(arg0: string): $DataResult<(T)>
public "orElseEmptyMap"(): $Dynamic<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalDynamic$Type<T> = ($OptionalDynamic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalDynamic_<T> = $OptionalDynamic$Type<(T)>;
}}
declare module "packages/com/mojang/brigadier/exceptions/$DynamicCommandExceptionType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$CommandSyntaxException, $CommandSyntaxException$Type} from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import {$CommandExceptionType, $CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$CommandExceptionType"
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"

export class $DynamicCommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Function$Type<(any), ($Message$Type)>)

public "create"(arg0: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$Type, arg1: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicCommandExceptionType$Type = ($DynamicCommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicCommandExceptionType_ = $DynamicCommandExceptionType$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsWorldOptions" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsWorldOptions extends $ValueObject {
readonly "pvp": boolean
readonly "spawnAnimals": boolean
readonly "spawnMonsters": boolean
readonly "spawnNPCs": boolean
readonly "spawnProtection": integer
readonly "commandBlocks": boolean
readonly "forceGameMode": boolean
readonly "difficulty": integer
readonly "gameMode": integer
 "templateId": long
 "templateImage": string
 "empty": boolean

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: boolean, arg6: integer, arg7: integer, arg8: boolean, arg9: string)

public "toJson"(): string
public "clone"(): $RealmsWorldOptions
public "getSlotName"(arg0: integer): string
public static "createEmptyDefaults"(): $RealmsWorldOptions
public static "parse"(arg0: $JsonObject$Type): $RealmsWorldOptions
public static "createDefaults"(): $RealmsWorldOptions
public "getDefaultSlotName"(arg0: integer): string
public "setEmpty"(arg0: boolean): void
set "empty"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsWorldOptions$Type = ($RealmsWorldOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsWorldOptions_ = $RealmsWorldOptions$Type;
}}
declare module "packages/com/mojang/brigadier/$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Message {

 "getString"(): string

(): string
}

export namespace $Message {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException" {
import {$Type$TypeError, $Type$TypeError$Type} from "packages/com/mojang/datafixers/types/$Type$TypeError"

export class $Type$FieldNotFoundException extends $Type$TypeError {

constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$FieldNotFoundException$Type = ($Type$FieldNotFoundException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$FieldNotFoundException_ = $Type$FieldNotFoundException$Type;
}}
declare module "packages/com/mojang/brigadier/suggestion/$Suggestion" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$StringRange, $StringRange$Type} from "packages/com/mojang/brigadier/context/$StringRange"

export class $Suggestion implements $Comparable<($Suggestion)> {

constructor(arg0: $StringRange$Type, arg1: string)
constructor(arg0: $StringRange$Type, arg1: string, arg2: $Message$Type)

public "getTooltip"(): $Message
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Suggestion$Type): integer
public "apply"(arg0: string): string
public "compareToIgnoreCase"(arg0: $Suggestion$Type): integer
public "expand"(arg0: string, arg1: $StringRange$Type): $Suggestion
public "getRange"(): $StringRange
public "getText"(): string
get "tooltip"(): $Message
get "range"(): $StringRange
get "text"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Suggestion$Type = ($Suggestion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Suggestion_ = $Suggestion$Type;
}}
declare module "packages/com/mojang/realmsclient/util/$RealmsPersistence$RealmsPersistenceData" {
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$Type} from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
 "newsLink": string
 "hasUnreadNews": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsPersistence$RealmsPersistenceData$Type = ($RealmsPersistence$RealmsPersistenceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsPersistence$RealmsPersistenceData_ = $RealmsPersistence$RealmsPersistenceData$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecordCodecBuilder$Instance$Mu, $RecordCodecBuilder$Instance$Mu$Type} from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance$Mu"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$Type} from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu"
import {$Products$P10, $Products$P10$Type} from "packages/com/mojang/datafixers/$Products$P10"
import {$Products$P11, $Products$P11$Type} from "packages/com/mojang/datafixers/$Products$P11"
import {$Products$P14, $Products$P14$Type} from "packages/com/mojang/datafixers/$Products$P14"
import {$Products$P15, $Products$P15$Type} from "packages/com/mojang/datafixers/$Products$P15"
import {$Products$P12, $Products$P12$Type} from "packages/com/mojang/datafixers/$Products$P12"
import {$Products$P13, $Products$P13$Type} from "packages/com/mojang/datafixers/$Products$P13"
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Products$P16, $Products$P16$Type} from "packages/com/mojang/datafixers/$Products$P16"
import {$Products$P1, $Products$P1$Type} from "packages/com/mojang/datafixers/$Products$P1"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Products$P9, $Products$P9$Type} from "packages/com/mojang/datafixers/$Products$P9"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $RecordCodecBuilder$Instance<O> implements $Applicative<($RecordCodecBuilder$Mu<(O)>), ($RecordCodecBuilder$Instance$Mu<(O)>)> {

constructor()

public "map"<T, R>(arg0: $Function$Type<(any), (any)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "point"<A>(arg0: A, arg1: $Lifecycle$Type): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "point"<A>(arg0: A): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "deprecated"<A>(arg0: A, arg1: integer): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public "ap2"<A, B, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($BiFunction$Type<(A), (B), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (A)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (B)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap3"<T1, T2, T3, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function3$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift1"<A, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function$Type<(A), (R)>)>): $Function<($App<($RecordCodecBuilder$Mu<(O)>), (A)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap4"<T1, T2, T3, T4, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "stable"<A>(arg0: A): $App<($RecordCodecBuilder$Mu<(O)>), (A)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$Type<($RecordCodecBuilder$Instance$Mu$Type<(O)>), ($RecordCodecBuilder$Mu$Type<(O)>)>): $Applicative<($RecordCodecBuilder$Mu<(O)>), ($RecordCodecBuilder$Instance$Mu<(O)>)>
public "ap"<A, R>(arg0: $Function$Type<(A), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (A)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap"<A, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function$Type<(A), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (A)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$Type<(T1), (T2), (T3), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply2"<A, B, R>(arg0: $BiFunction$Type<(A), (B), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (A)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (B)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift2"<A, B, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($BiFunction$Type<(A), (B), (R)>)>): $BiFunction<($App<($RecordCodecBuilder$Mu<(O)>), (A)>), ($App<($RecordCodecBuilder$Mu<(O)>), (B)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift3"<T1, T2, T3, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function3$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T8)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T9)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($RecordCodecBuilder$Mu<(O)>), (T1)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T2)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T3)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T4)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T5)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T6)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T7)>), ($App<($RecordCodecBuilder$Mu<(O)>), (T8)>), ($App<($RecordCodecBuilder$Mu<(O)>), (R)>)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>, arg14: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T14)>, arg15: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T15)>, arg16: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T16)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>, arg14: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T14)>, arg15: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T15)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), ($Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>, arg14: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T14)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>): $App<($RecordCodecBuilder$Mu<(O)>), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>): $Products$P11<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>): $Products$P10<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>): $Products$P9<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T14)>, arg14: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T15)>, arg15: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T16)>): $Products$P16<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T14)>, arg14: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T15)>): $Products$P15<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>, arg13: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T14)>): $Products$P14<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>, arg12: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T13)>): $Products$P13<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>, arg8: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T9)>, arg9: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T10)>, arg10: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T11)>, arg11: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T12)>): $Products$P12<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>): $Products$P3<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>): $Products$P2<($RecordCodecBuilder$Mu<(O)>), (T1), (T2)>
public "group"<T1>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>): $Products$P1<($RecordCodecBuilder$Mu<(O)>), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>, arg7: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T8)>): $Products$P8<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>, arg6: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T7)>): $Products$P7<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>, arg5: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T6)>): $Products$P6<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>, arg4: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T5)>): $Products$P5<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T1)>, arg1: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T2)>, arg2: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T3)>, arg3: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (T4)>): $Products$P4<($RecordCodecBuilder$Mu<(O)>), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Instance$Type<O> = ($RecordCodecBuilder$Instance<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder$Instance_<O> = $RecordCodecBuilder$Instance$Type<(O)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$BanDetails" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"

export class $BanDetails extends $Record {
static readonly "MULTIPLAYER_SCOPE": string

constructor(id: $UUID$Type, expires: $Instant$Type, reason: string, reasonMessage: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $UUID
public "reason"(): string
public "expires"(): $Instant
public "reasonMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BanDetails$Type = ($BanDetails);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BanDetails_ = $BanDetails$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/$YggdrasilAuthenticationService" {
import {$Proxy, $Proxy$Type} from "packages/java/net/$Proxy"
import {$Agent, $Agent$Type} from "packages/com/mojang/authlib/$Agent"
import {$UserAuthentication, $UserAuthentication$Type} from "packages/com/mojang/authlib/$UserAuthentication"
import {$UserApiService, $UserApiService$Type} from "packages/com/mojang/authlib/minecraft/$UserApiService"
import {$ServicesKeySet, $ServicesKeySet$Type} from "packages/com/mojang/authlib/yggdrasil/$ServicesKeySet"
import {$GameProfileRepository, $GameProfileRepository$Type} from "packages/com/mojang/authlib/$GameProfileRepository"
import {$MinecraftSessionService, $MinecraftSessionService$Type} from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"
import {$HttpAuthenticationService, $HttpAuthenticationService$Type} from "packages/com/mojang/authlib/$HttpAuthenticationService"
import {$Environment, $Environment$Type} from "packages/com/mojang/authlib/$Environment"

export class $YggdrasilAuthenticationService extends $HttpAuthenticationService {

constructor(arg0: $Proxy$Type, arg1: string, arg2: $Environment$Type)
constructor(arg0: $Proxy$Type, arg1: string)
constructor(arg0: $Proxy$Type, arg1: $Environment$Type)
constructor(arg0: $Proxy$Type)

public "createUserApiService"(arg0: string): $UserApiService
public "createProfileRepository"(): $GameProfileRepository
public "createUserAuthentication"(arg0: $Agent$Type): $UserAuthentication
public "createMinecraftSessionService"(): $MinecraftSessionService
public "getServicesKeySet"(): $ServicesKeySet
get "servicesKeySet"(): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YggdrasilAuthenticationService$Type = ($YggdrasilAuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YggdrasilAuthenticationService_ = $YggdrasilAuthenticationService$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$Program" {
import {$GlslPreprocessor, $GlslPreprocessor$Type} from "packages/com/mojang/blaze3d/preprocessor/$GlslPreprocessor"
import {$Shader, $Shader$Type} from "packages/com/mojang/blaze3d/shaders/$Shader"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Program$Type, $Program$Type$Type} from "packages/com/mojang/blaze3d/shaders/$Program$Type"

export class $Program {

constructor(arg0: $Program$Type$Type, arg1: integer, arg2: string)

public "close"(): void
public static "compileShader"(arg0: $Program$Type$Type, arg1: string, arg2: $InputStream$Type, arg3: string, arg4: $GlslPreprocessor$Type): $Program
public "attachToShader"(arg0: $Shader$Type): void
public "getId"(): integer
public "getName"(): string
get "id"(): integer
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$Type = ($Program);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Program_ = $Program$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexFormatElement" {
import {$VertexFormatElement$Type, $VertexFormatElement$Type$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Type"
import {$VertexFormatElement$Usage, $VertexFormatElement$Usage$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Usage"

export class $VertexFormatElement {

constructor(arg0: integer, arg1: $VertexFormatElement$Type$Type, arg2: $VertexFormatElement$Usage$Type, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getElementCount"(): integer
public "setupBufferState"(arg0: integer, arg1: long, arg2: integer): void
public "clearBufferState"(arg0: integer): void
public "getByteSize"(): integer
public "isPosition"(): boolean
public "getCount"(): integer
public "getUsage"(): $VertexFormatElement$Usage
public "getType"(): $VertexFormatElement$Type
public "getIndex"(): integer
get "elementCount"(): integer
get "byteSize"(): integer
get "position"(): boolean
get "count"(): integer
get "usage"(): $VertexFormatElement$Usage
get "type"(): $VertexFormatElement$Type
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Type = ($VertexFormatElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatElement_ = $VertexFormatElement$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexBuffer$Usage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VertexBuffer$Usage extends $Enum<($VertexBuffer$Usage)> {
static readonly "STATIC": $VertexBuffer$Usage
static readonly "DYNAMIC": $VertexBuffer$Usage


public static "values"(): ($VertexBuffer$Usage)[]
public static "valueOf"(arg0: string): $VertexBuffer$Usage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuffer$Usage$Type = (("static") | ("dynamic")) | ($VertexBuffer$Usage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBuffer$Usage_ = $VertexBuffer$Usage$Type;
}}
declare module "packages/com/mojang/realmsclient/gui/$RealmsNewsManager" {
import {$RealmsNews, $RealmsNews$Type} from "packages/com/mojang/realmsclient/dto/$RealmsNews"
import {$RealmsPersistence, $RealmsPersistence$Type} from "packages/com/mojang/realmsclient/util/$RealmsPersistence"

export class $RealmsNewsManager {

constructor(arg0: $RealmsPersistence$Type)

public "updateUnreadNews"(arg0: $RealmsNews$Type): void
public "newsLink"(): string
public "hasUnreadNews"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNewsManager$Type = ($RealmsNewsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsNewsManager_ = $RealmsNewsManager$Type;
}}
declare module "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException" {
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"
import {$CommandExceptionType, $CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$CommandExceptionType"
import {$BuiltInExceptionProvider, $BuiltInExceptionProvider$Type} from "packages/com/mojang/brigadier/exceptions/$BuiltInExceptionProvider"

export class $CommandSyntaxException extends $Exception {
static readonly "CONTEXT_AMOUNT": integer
static "ENABLE_COMMAND_STACK_TRACES": boolean
static "BUILT_IN_EXCEPTIONS": $BuiltInExceptionProvider

constructor(arg0: $CommandExceptionType$Type, arg1: $Message$Type)
constructor(arg0: $CommandExceptionType$Type, arg1: $Message$Type, arg2: string, arg3: integer)

public "getMessage"(): string
public "getContext"(): string
public "getType"(): $CommandExceptionType
public "getInput"(): string
public "getRawMessage"(): $Message
public "getCursor"(): integer
get "message"(): string
get "context"(): string
get "type"(): $CommandExceptionType
get "input"(): string
get "rawMessage"(): $Message
get "cursor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandSyntaxException$Type = ($CommandSyntaxException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandSyntaxException_ = $CommandSyntaxException$Type;
}}
declare module "packages/com/mojang/serialization/$Codec$ResultFunction" {
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export interface $Codec$ResultFunction<A> {

 "apply"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T, arg2: $DataResult$Type<($Pair$Type<(A), (T)>)>): $DataResult<($Pair<(A), (T)>)>
 "coApply"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A, arg2: $DataResult$Type<(T)>): $DataResult<(T)>
}

export namespace $Codec$ResultFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Codec$ResultFunction$Type<A> = ($Codec$ResultFunction<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Codec$ResultFunction_<A> = $Codec$ResultFunction$Type<(A)>;
}}
declare module "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType" {
import {$Dynamic2CommandExceptionType$Function, $Dynamic2CommandExceptionType$Function$Type} from "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType$Function"
import {$CommandSyntaxException, $CommandSyntaxException$Type} from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import {$CommandExceptionType, $CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$CommandExceptionType"
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"

export class $Dynamic2CommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Dynamic2CommandExceptionType$Function$Type)

public "create"(arg0: any, arg1: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$Type, arg1: any, arg2: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic2CommandExceptionType$Type = ($Dynamic2CommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic2CommandExceptionType_ = $Dynamic2CommandExceptionType$Type;
}}
declare module "packages/com/mojang/brigadier/arguments/$LongArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $LongArgumentType implements $ArgumentType<(long)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getLong"(arg0: $CommandContext$Type<(any)>, arg1: string): long
public "getMinimum"(): long
public "getMaximum"(): long
public "getExamples"(): $Collection<(string)>
public static "longArg"(arg0: long): $LongArgumentType
public static "longArg"(arg0: long, arg1: long): $LongArgumentType
public static "longArg"(): $LongArgumentType
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "minimum"(): long
get "maximum"(): long
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArgumentType$Type = ($LongArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongArgumentType_ = $LongArgumentType$Type;
}}
declare module "packages/com/mojang/authlib/properties/$PropertyMap" {
import {$ForwardingMultimap, $ForwardingMultimap$Type} from "packages/com/google/common/collect/$ForwardingMultimap"
import {$Property, $Property$Type} from "packages/com/mojang/authlib/properties/$Property"

export class $PropertyMap extends $ForwardingMultimap<(string), ($Property)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyMap$Type = ($PropertyMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyMap_ = $PropertyMap$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$Shader" {
import {$Program, $Program$Type} from "packages/com/mojang/blaze3d/shaders/$Program"

export interface $Shader {

 "markDirty"(): void
 "getVertexProgram"(): $Program
 "getFragmentProgram"(): $Program
 "getId"(): integer
 "attachToProgram"(): void
}

export namespace $Shader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shader$Type = ($Shader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shader_ = $Shader$Type;
}}
declare module "packages/com/mojang/brigadier/$StringReader" {
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"

export class $StringReader implements $ImmutableStringReader {

constructor(arg0: $StringReader$Type)
constructor(arg0: string)

public "setCursor"(arg0: integer): void
public "getRemainingLength"(): integer
public "getTotalLength"(): integer
public "getRead"(): string
public "read"(): character
public "readInt"(): integer
public "canRead"(arg0: integer): boolean
public "canRead"(): boolean
public "skip"(): void
public "peek"(): character
public "peek"(arg0: integer): character
public "readFloat"(): float
public "getString"(): string
public "expect"(arg0: character): void
public "readString"(): string
public "readLong"(): long
public "readBoolean"(): boolean
public "readDouble"(): double
public "getRemaining"(): string
public static "isAllowedInUnquotedString"(arg0: character): boolean
public "skipWhitespace"(): void
public static "isQuotedStringStart"(arg0: character): boolean
public "readUnquotedString"(): string
public "getCursor"(): integer
public "readQuotedString"(): string
public static "isAllowedNumber"(arg0: character): boolean
public "readStringUntil"(arg0: character): string
set "cursor"(value: integer)
get "remainingLength"(): integer
get "totalLength"(): integer
get "string"(): string
get "remaining"(): string
get "cursor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringReader$Type = ($StringReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringReader_ = $StringReader$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$FogShape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FogShape extends $Enum<($FogShape)> {
static readonly "SPHERE": $FogShape
static readonly "CYLINDER": $FogShape


public static "values"(): ($FogShape)[]
public static "valueOf"(arg0: string): $FogShape
public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogShape$Type = (("sphere") | ("cylinder")) | ($FogShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FogShape_ = $FogShape$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServer" {
import {$RealmsWorldOptions, $RealmsWorldOptions$Type} from "packages/com/mojang/realmsclient/dto/$RealmsWorldOptions"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RealmsServer$WorldType, $RealmsServer$WorldType$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer$WorldType"
import {$RealmsServerPlayerList, $RealmsServerPlayerList$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerList"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$ServerData, $ServerData$Type} from "packages/net/minecraft/client/multiplayer/$ServerData"
import {$RealmsServer$State, $RealmsServer$State$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer$State"
import {$PlayerInfo, $PlayerInfo$Type} from "packages/com/mojang/realmsclient/dto/$PlayerInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$RealmsServerPing, $RealmsServerPing$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerPing"

export class $RealmsServer extends $ValueObject {
 "id": long
 "remoteSubscriptionId": string
 "name": string
 "motd": string
 "state": $RealmsServer$State
 "owner": string
 "ownerUUID": string
 "players": $List<($PlayerInfo)>
 "slots": $Map<(integer), ($RealmsWorldOptions)>
 "expired": boolean
 "expiredTrial": boolean
 "daysLeft": integer
 "worldType": $RealmsServer$WorldType
 "activeSlot": integer
 "minigameName": string
 "minigameId": integer
 "minigameImage": string
 "serverPing": $RealmsServerPing

constructor()

public "getMinigameName"(): string
public "getName"(): string
public "getDescription"(): string
public "setName"(arg0: string): void
public "setDescription"(arg0: string): void
public "updateServerPing"(arg0: $RealmsServerPlayerList$Type): void
public static "parse"(arg0: string): $RealmsServer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): $RealmsServer
public static "parse"(arg0: $JsonObject$Type): $RealmsServer
public "cloneSlots"(arg0: $Map$Type<(integer), ($RealmsWorldOptions$Type)>): $Map<(integer), ($RealmsWorldOptions)>
public "toServerData"(arg0: string): $ServerData
public "getWorldName"(arg0: integer): string
get "minigameName"(): string
get "name"(): string
get "description"(): string
set "name"(value: string)
set "description"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$Type = ($RealmsServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer_ = $RealmsServer$Type;
}}
declare module "packages/com/mojang/datafixers/$Products$P10" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P10<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P10$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = ($Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P10_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = $Products$P10$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P11" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P11<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P11$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = ($Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P11_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = $Products$P11$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P14" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P14<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P14$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = ($Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P14_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = $Products$P14$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P15" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P15<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P15$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = ($Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P15_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = $Products$P15$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P12" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"

export class $Products$P12<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P12$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = ($Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P12_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = $Products$P12$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P13" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"

export class $Products$P13<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P13$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = ($Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P13_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = $Products$P13$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P16" {
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P16<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>, arg15: $App$Type<(F), (T16)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P16$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = ($Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P16_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = $Products$P16$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>;
}}
declare module "packages/com/mojang/brigadier/$ParseResults" {
import {$CommandContextBuilder, $CommandContextBuilder$Type} from "packages/com/mojang/brigadier/context/$CommandContextBuilder"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$CommandSyntaxException, $CommandSyntaxException$Type} from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ParseResults<S> {

constructor(arg0: $CommandContextBuilder$Type<(S)>, arg1: $ImmutableStringReader$Type, arg2: $Map$Type<($CommandNode$Type<(S)>), ($CommandSyntaxException$Type)>)
constructor(arg0: $CommandContextBuilder$Type<(S)>)

public "getContext"(): $CommandContextBuilder<(S)>
public "getReader"(): $ImmutableStringReader
public "getExceptions"(): $Map<($CommandNode<(S)>), ($CommandSyntaxException)>
get "context"(): $CommandContextBuilder<(S)>
get "reader"(): $ImmutableStringReader
get "exceptions"(): $Map<($CommandNode<(S)>), ($CommandSyntaxException)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParseResults$Type<S> = ($ParseResults<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParseResults_<S> = $ParseResults$Type<(S)>;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VertexFormat$IndexType extends $Enum<($VertexFormat$IndexType)> {
static readonly "SHORT": $VertexFormat$IndexType
static readonly "INT": $VertexFormat$IndexType
readonly "asGLType": integer
readonly "bytes": integer


public static "values"(): ($VertexFormat$IndexType)[]
public static "valueOf"(arg0: string): $VertexFormat$IndexType
public static "least"(arg0: integer): $VertexFormat$IndexType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$IndexType$Type = (("short") | ("int")) | ($VertexFormat$IndexType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat$IndexType_ = $VertexFormat$IndexType$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$DefaultedVertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $DefaultedVertexConsumer implements $VertexConsumer {
 "defaultColorSet": boolean

constructor()

public "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "unsetDefaultColor"(): void
public "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
public "endVertex"(): void
public "uv"(arg0: float, arg1: float): $VertexConsumer
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "uv2"(arg0: integer, arg1: integer): $VertexConsumer
public "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "uv2"(arg0: integer): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "color"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultedVertexConsumer$Type = ($DefaultedVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultedVertexConsumer_ = $DefaultedVertexConsumer$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/$ServicesKeySet" {
import {$ServicesKeyType, $ServicesKeyType$Type} from "packages/com/mojang/authlib/yggdrasil/$ServicesKeyType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ServicesKeyInfo, $ServicesKeyInfo$Type} from "packages/com/mojang/authlib/yggdrasil/$ServicesKeyInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $ServicesKeySet {

 "keys"(arg0: $ServicesKeyType$Type): $Collection<($ServicesKeyInfo)>

(arg0: $ServicesKeyType$Type): $Collection<($ServicesKeyInfo)>
}

export namespace $ServicesKeySet {
const EMPTY: $ServicesKeySet
function lazy(arg0: $Supplier$Type<($ServicesKeySet$Type)>): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeySet$Type = ($ServicesKeySet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServicesKeySet_ = $ServicesKeySet$Type;
}}
declare module "packages/com/mojang/datafixers/$Typed" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$OpticFinder, $OpticFinder$Type} from "packages/com/mojang/datafixers/$OpticFinder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"

export class $Typed<A> {

constructor(arg0: $Type$Type<(A)>, arg1: $DynamicOps$Type<(any)>, arg2: A)

public "getTyped"<FT>(arg0: $OpticFinder$Type<(FT)>): $Typed<(FT)>
public "get"<FT>(arg0: $OpticFinder$Type<(FT)>): FT
public "toString"(): string
public "update"<FT>(arg0: $OpticFinder$Type<(FT)>, arg1: $Function$Type<(FT), (FT)>): $Typed<(any)>
public "update"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Function$Type<(FT), (FR)>): $Typed<(any)>
public "getValue"(): A
public "out"(): $Typed<(A)>
public "set"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Typed$Type<(FR)>): $Typed<(any)>
public "set"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: FR): $Typed<(any)>
public "set"<FT>(arg0: $OpticFinder$Type<(FT)>, arg1: FT): $Typed<(any)>
public "write"(): $DataResult<(any)>
public "getOrDefault"<FT>(arg0: $OpticFinder$Type<(FT)>, arg1: FT): FT
public "getType"(): $Type<(A)>
public static "pair"<A, B>(arg0: $Typed$Type<(A)>, arg1: $Typed$Type<(B)>): $Typed<($Pair<(A), (B)>)>
public "getAll"<FT>(arg0: $TypedOptic$Type<(A), (any), (FT), (any)>): $List<(FT)>
public "getOrCreate"<FT>(arg0: $OpticFinder$Type<(FT)>): FT
public "getOps"(): $DynamicOps<(any)>
public "getAllTyped"<FT>(arg0: $OpticFinder$Type<(FT)>): $List<($Typed<(FT)>)>
public "inj2"<B>(arg0: $Type$Type<(B)>): $Typed<($Either<(B), (A)>)>
public "inj1"<B>(arg0: $Type$Type<(B)>): $Typed<($Either<(A), (B)>)>
public "getOptional"<FT>(arg0: $OpticFinder$Type<(FT)>): $Optional<(FT)>
public "updateRecursive"<FT>(arg0: $OpticFinder$Type<(FT)>, arg1: $Function$Type<(FT), (FT)>): $Typed<(any)>
public "updateRecursive"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Function$Type<(FT), (FR)>): $Typed<(any)>
public "updateTyped"<FT>(arg0: $OpticFinder$Type<(FT)>, arg1: $Function$Type<($Typed$Type<(any)>), ($Typed$Type<(any)>)>): $Typed<(any)>
public "updateTyped"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Function$Type<($Typed$Type<(any)>), ($Typed$Type<(any)>)>): $Typed<(any)>
public "getOptionalTyped"<FT>(arg0: $OpticFinder$Type<(FT)>): $Optional<($Typed<(FT)>)>
public "getOrCreateTyped"<FT>(arg0: $OpticFinder$Type<(FT)>): $Typed<(FT)>
public "updateRecursiveTyped"<FT>(arg0: $OpticFinder$Type<(FT)>, arg1: $Function$Type<($Typed$Type<(any)>), ($Typed$Type<(any)>)>): $Typed<(any)>
public "updateRecursiveTyped"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Function$Type<($Typed$Type<(any)>), ($Typed$Type<(any)>)>): $Typed<(any)>
get "value"(): A
get "type"(): $Type<(A)>
get "ops"(): $DynamicOps<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Typed$Type<A> = ($Typed<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Typed_<A> = $Typed$Type<(A)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$RegionPingResult" {
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$Type} from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $RegionPingResult extends $ValueObject implements $ReflectionBasedSerialization {

constructor(arg0: string, arg1: integer)

public "toString"(): string
public "ping"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionPingResult$Type = ($RegionPingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionPingResult_ = $RegionPingResult$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder$DrawState" {
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$VertexFormat$IndexType, $VertexFormat$IndexType$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType"

export class $BufferBuilder$DrawState extends $Record {

constructor(format: $VertexFormat$Type, vertexCount: integer, indexCount: integer, mode: $VertexFormat$Mode$Type, indexType: $VertexFormat$IndexType$Type, indexOnly: boolean, sequentialIndex: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "sequentialIndex"(): boolean
public "indexOnly"(): boolean
public "mode"(): $VertexFormat$Mode
public "indexCount"(): integer
public "indexType"(): $VertexFormat$IndexType
public "indexBufferEnd"(): integer
public "vertexBufferSize"(): integer
public "vertexBufferEnd"(): integer
public "indexBufferStart"(): integer
public "bufferSize"(): integer
public "vertexBufferStart"(): integer
public "format"(): $VertexFormat
public "vertexCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilder$DrawState$Type = ($BufferBuilder$DrawState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilder$DrawState_ = $BufferBuilder$DrawState$Type;
}}
declare module "packages/com/mojang/datafixers/types/$Type$TypeMatcher" {
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"

export interface $Type$TypeMatcher<FT, FR> {

 "match"<S>(arg0: $Type$Type<(S)>): $Either<($TypedOptic<(S), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>

(arg0: $Type$Type<(S)>): $Either<($TypedOptic<(S), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
}

export namespace $Type$TypeMatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$TypeMatcher$Type<FT, FR> = ($Type$TypeMatcher<(FT), (FR)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$TypeMatcher_<FT, FR> = $Type$TypeMatcher$Type<(FT), (FR)>;
}}
declare module "packages/com/mojang/serialization/$RecordBuilder" {
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"

export interface $RecordBuilder<T> {

 "build"(arg0: $DataResult$Type<(T)>): $DataResult<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "add"(arg0: string, arg1: $DataResult$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: string, arg1: T): $RecordBuilder<(T)>
 "add"<E>(arg0: string, arg1: E, arg2: $Encoder$Type<(E)>): $RecordBuilder<(T)>
 "add"(arg0: $DataResult$Type<(T)>, arg1: $DataResult$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: $DataResult$Type<(T)>): $RecordBuilder<(T)>
 "add"(arg0: T, arg1: T): $RecordBuilder<(T)>
 "ops"(): $DynamicOps<(T)>
 "setLifecycle"(arg0: $Lifecycle$Type): $RecordBuilder<(T)>
 "withErrorsFrom"(arg0: $DataResult$Type<(any)>): $RecordBuilder<(T)>
 "mapError"(arg0: $UnaryOperator$Type<(string)>): $RecordBuilder<(T)>
}

export namespace $RecordBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordBuilder$Type<T> = ($RecordBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordBuilder_<T> = $RecordBuilder$Type<(T)>;
}}
declare module "packages/com/mojang/blaze3d/preprocessor/$GlslPreprocessor" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $GlslPreprocessor {

constructor()

public "applyImport"(arg0: boolean, arg1: string): string
public "process"(arg0: string): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlslPreprocessor$Type = ($GlslPreprocessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlslPreprocessor_ = $GlslPreprocessor$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance$Mu" {
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"

export class $RecordCodecBuilder$Instance$Mu<O> implements $Applicative$Mu {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Instance$Mu$Type<O> = ($RecordCodecBuilder$Instance$Mu<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder$Instance$Mu_<O> = $RecordCodecBuilder$Instance$Mu$Type<(O)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$TelemetryEvent" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TelemetryPropertyContainer, $TelemetryPropertyContainer$Type} from "packages/com/mojang/authlib/minecraft/$TelemetryPropertyContainer"

export interface $TelemetryEvent extends $TelemetryPropertyContainer {

 "send"(): void
 "addNullProperty"(arg0: string): void
 "addProperty"(arg0: string, arg1: string): void
 "addProperty"(arg0: string, arg1: boolean): void
 "addProperty"(arg0: string, arg1: long): void
 "addProperty"(arg0: string, arg1: integer): void
}

export namespace $TelemetryEvent {
const EMPTY: $TelemetryEvent
function forJsonObject(arg0: $JsonObject$Type): $TelemetryPropertyContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryEvent$Type = ($TelemetryEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TelemetryEvent_ = $TelemetryEvent$Type;
}}
declare module "packages/com/mojang/authlib/minecraft/report/$AbuseReportLimits" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $AbuseReportLimits extends $Record {
static readonly "DEFAULTS": $AbuseReportLimits

constructor(maxOpinionCommentsLength: integer, maxReportedMessageCount: integer, maxEvidenceMessageCount: integer, leadingContextMessageCount: integer, trailingContextMessageCount: integer)

public "maxReportedMessageCount"(): integer
public "leadingContextMessageCount"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "maxOpinionCommentsLength"(): integer
public "maxEvidenceMessageCount"(): integer
public "trailingContextMessageCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportLimits$Type = ($AbuseReportLimits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportLimits_ = $AbuseReportLimits$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder" {
import {$BlockSensitiveBufferBuilder, $BlockSensitiveBufferBuilder$Type} from "packages/net/irisshaders/iris/vertices/$BlockSensitiveBufferBuilder"
import {$MemoryTrackingBuffer, $MemoryTrackingBuffer$Type} from "packages/net/irisshaders/batchedentityrendering/impl/$MemoryTrackingBuffer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$BufferBuilder$SortState, $BufferBuilder$SortState$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState"
import {$SodiumBufferBuilder, $SodiumBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder"
import {$ETFTexture, $ETFTexture$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$VertexFormat$Mode, $VertexFormat$Mode$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import {$BufferBuilderExtension, $BufferBuilderExtension$Type} from "packages/com/jozufozu/flywheel/backend/model/$BufferBuilderExtension"
import {$ExtendingBufferBuilder, $ExtendingBufferBuilder$Type} from "packages/net/irisshaders/iris/vertices/$ExtendingBufferBuilder"
import {$StateManager$IResettable, $StateManager$IResettable$Type} from "packages/fudge/notenoughcrashes/$StateManager$IResettable"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$IntConsumer, $IntConsumer$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntConsumer"
import {$ExtendedBufferBuilder, $ExtendedBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$DefaultedVertexConsumer, $DefaultedVertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$DefaultedVertexConsumer"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import {$ETFVertexConsumer, $ETFVertexConsumer$Type} from "packages/traben/entity_texture_features/utils/$ETFVertexConsumer"
import {$BufferVertexConsumer, $BufferVertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$BufferVertexConsumer"
import {$BufferBuilder$RenderedBuffer, $BufferBuilder$RenderedBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer"
import {$BufferBuilderExt, $BufferBuilderExt$Type} from "packages/net/irisshaders/batchedentityrendering/impl/$BufferBuilderExt"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$IrisExtendedBufferBuilder, $IrisExtendedBufferBuilder$Type} from "packages/net/irisshaders/iris/vertices/$IrisExtendedBufferBuilder"
import {$VertexSorting, $VertexSorting$Type} from "packages/com/mojang/blaze3d/vertex/$VertexSorting"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"
import {$VertexFormat$IndexType, $VertexFormat$IndexType$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType"

export class $BufferBuilder extends $DefaultedVertexConsumer implements $BufferVertexConsumer, $BlockSensitiveBufferBuilder, $ExtendingBufferBuilder, $IrisExtendedBufferBuilder, $MemoryTrackingBuffer, $BufferBuilderExtension, $StateManager$IResettable, $ETFVertexConsumer, $ExtendedBufferBuilder, $VertexBufferWriter, $BufferBuilderExt {
 "nextElementByte": integer
 "format": $VertexFormat
 "mode": $VertexFormat$Mode
 "sortingPoints": ($Vector3f)[]
 "sorting": $VertexSorting
 "defaultColorSet": boolean

constructor(arg0: integer)

public "resetState"(): void
public "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
public "end"(): $BufferBuilder$RenderedBuffer
public "begin"(arg0: $VertexFormat$Mode$Type, arg1: $VertexFormat$Type): void
public "endVertex"(): void
public "building"(): boolean
public "setQuadSorting"(arg0: $VertexSorting$Type): void
public "iris$isTerrain"(): boolean
public "restoreSortState"(arg0: $BufferBuilder$SortState$Type): void
public "getSortState"(): $BufferBuilder$SortState
public "putSortedQuadIndices"(arg0: $VertexFormat$IndexType$Type): void
public "isCurrentBatchEmpty"(): boolean
public "endOrDiscardIfEmpty"(): $BufferBuilder$RenderedBuffer
public "intConsumer"(arg0: integer, arg1: $VertexFormat$IndexType$Type): $IntConsumer
public "discard"(): void
public "iris$mode"(): $VertexFormat$Mode
public "endBlock"(): void
public "iris$currentBlock"(): short
public "iris$vertexCount"(): integer
public "iris$extending"(): boolean
public "etf$getProvider"(): $MultiBufferSource
public "getUsedSize"(): integer
public "etf$getETFTexture"(): $ETFTexture
public "etf$getRenderLayer"(): $RenderType
public "beginBlock"(block: short, renderType: short, localPosX: integer, localPosY: integer, localPosZ: integer): void
public "iris$format"(): $VertexFormat
public "getAllocatedSize"(): integer
public "canUseIntrinsics"(): boolean
public "sodium$getDelegate"(): $SodiumBufferBuilder
public "splitStrip"(): void
public "sodium$getBuffer"(): $ByteBuffer
public "currentElement"(): $VertexFormatElement
public "nextElement"(): void
public "putByte"(arg0: integer, arg1: byte): void
public "putShort"(arg0: integer, arg1: short): void
public "uv2"(pBufferVertexConsumer0: integer, pInt1: integer): $VertexConsumer
public "putFloat"(arg0: integer, arg1: float): void
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "putBulkData"(arg0: $ByteBuffer$Type): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "sodium$moveToNextVertex"(): void
public "sodium$getFormatDescription"(): $VertexFormatDescription
public "iris$currentLocalPosZ"(): integer
public "iris$currentRenderType"(): short
public "etf$initETFVertexConsumer"(provider: $MultiBufferSource$Type, renderLayer: $RenderType$Type): void
public "iris$beginWithoutExtending"(drawMode: $VertexFormat$Mode$Type, vertexFormat: $VertexFormat$Type): void
public "handler$cdd000$onInit"(bufferSizeIn: integer, ci: $CallbackInfo$Type): void
public "freeAndDeleteBuffer"(): void
public "flywheel$getVertices"(): integer
public "iris$incrementVertexCount"(): void
public "localvar$bfh000$vertex"(alpha: float): float
public "flywheel$freeBuffer"(): void
public "iris$resetVertexCount"(): void
public "flywheel$injectForRender"(arg0: $ByteBuffer$Type, arg1: $VertexFormat$Type, arg2: integer): void
public "iris$currentLocalPosY"(): integer
public "iris$currentLocalPosX"(): integer
public "flywheel$appendBufferUnsafe"(arg0: $ByteBuffer$Type): void
public "sodium$usingFixedColor"(): boolean
public "sodium$getElementOffset"(): integer
public "iris$injectNormalAndUV1"(): boolean
public "clear"(): void
public "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
public "uv"(arg0: float, arg1: float): $VertexConsumer
public "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "uvShort"(arg0: short, arg1: short, arg2: integer): $VertexConsumer
public "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
public static "normalIntValue"(arg0: float): byte
public "register"(): void
public static "of"(arg0: $VertexConsumer$Type): $VertexBufferWriter
public static "copyInto"(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
/**
 * 
 * @deprecated
 */
public "isFullWriter"(): boolean
public static "tryOf"(arg0: $VertexConsumer$Type): $VertexBufferWriter
set "quadSorting"(value: $VertexSorting$Type)
get "sortState"(): $BufferBuilder$SortState
get "currentBatchEmpty"(): boolean
get "usedSize"(): integer
get "allocatedSize"(): integer
get "fullWriter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilder$Type = ($BufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilder_ = $BufferBuilder$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$WorldDownload" {
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $WorldDownload extends $ValueObject {
 "downloadLink": string
 "resourcePackUrl": string
 "resourcePackHash": string

constructor()

public static "parse"(arg0: string): $WorldDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDownload$Type = ($WorldDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDownload_ = $WorldDownload$Type;
}}
declare module "packages/com/mojang/brigadier/tree/$RootCommandNode" {
import {$CommandContextBuilder, $CommandContextBuilder$Type} from "packages/com/mojang/brigadier/context/$CommandContextBuilder"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentBuilder, $ArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$ArgumentBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $RootCommandNode<S> extends $CommandNode<(S)> {

constructor()

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "parse"(arg0: $StringReader$Type, arg1: $CommandContextBuilder$Type<(S)>): void
public "getUsageText"(): string
public "isValidInput"(arg0: string): boolean
public "listSuggestions"(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "createBuilder"(): $ArgumentBuilder<(S), (any)>
get "name"(): string
get "usageText"(): string
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootCommandNode$Type<S> = ($RootCommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootCommandNode_<S> = $RootCommandNode$Type<(S)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$TelemetrySession" {
import {$TelemetryEvent, $TelemetryEvent$Type} from "packages/com/mojang/authlib/minecraft/$TelemetryEvent"

export interface $TelemetrySession {

 "isEnabled"(): boolean
 "createNewEvent"(arg0: string): $TelemetryEvent
}

export namespace $TelemetrySession {
const DISABLED: $TelemetrySession
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetrySession$Type = ($TelemetrySession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TelemetrySession_ = $TelemetrySession$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexFormat" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$ExtendedVertexFormat, $ExtendedVertexFormat$Type} from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$VertexBuffer, $VertexBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"
import {$VertexFormatAccessor, $VertexFormatAccessor$Type} from "packages/me/jellysquid/mods/sodium/mixin/core/render/$VertexFormatAccessor"
import {$ExtendedVertexFormat$Element, $ExtendedVertexFormat$Element$Type} from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element"

export class $VertexFormat implements $ExtendedVertexFormat, $VertexFormatAccessor {
readonly "offsets": $IntList

constructor(arg0: $ImmutableMap$Type<(string), ($VertexFormatElement$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getOffset"(arg0: integer): integer
public "getElementAttributeNames"(): $ImmutableList<(string)>
public "getIntegerSize"(): integer
public "hasUV"(arg0: integer): boolean
public "hasNormal"(): boolean
public "hasPosition"(): boolean
public "getImmediateDrawVertexBuffer"(): $VertexBuffer
public "setupBufferState"(): void
public "getElements"(): $ImmutableList<($VertexFormatElement)>
public "clearBufferState"(): void
public "getElementMapping"(): $ImmutableMap<(string), ($VertexFormatElement)>
public "hasColor"(): boolean
public "getVertexSize"(): integer
public "embeddium$getExtendedElements"(): ($ExtendedVertexFormat$Element)[]
get "elementAttributeNames"(): $ImmutableList<(string)>
get "integerSize"(): integer
get "immediateDrawVertexBuffer"(): $VertexBuffer
get "elements"(): $ImmutableList<($VertexFormatElement)>
get "elementMapping"(): $ImmutableMap<(string), ($VertexFormatElement)>
get "vertexSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$Type = ($VertexFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat_ = $VertexFormat$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$UnboundedMapCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$BaseMapCodec, $BaseMapCodec$Type} from "packages/com/mojang/serialization/codecs/$BaseMapCodec"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnboundedMapCodec<K, V> implements $BaseMapCodec<(K), (V)>, $Codec<($Map<(K), (V)>)> {

constructor(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "encode"<T>(arg0: $Map$Type<(K), (V)>, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
public "elementCodec"(): $Codec<(V)>
public "keyCodec"(): $Codec<(K)>
public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "encode"<T>(arg0: $Map$Type<(K), (V)>, arg1: $DynamicOps$Type<(T)>, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
public static "unit"<A>(arg0: $Supplier$Type<($Map$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "unit"<A>(arg0: $Map$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$Type<($Map$Type<(K), (V)>)>, arg1: $MapDecoder$Type<($Map$Type<(K), (V)>)>, arg2: $Supplier$Type<(string)>): $MapCodec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $Encoder$Type<($Map$Type<(K), (V)>)>, arg1: $Decoder$Type<($Map$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $MapEncoder$Type<($Map$Type<(K), (V)>)>, arg1: $MapDecoder$Type<($Map$Type<(K), (V)>)>): $MapCodec<($Map<(K), (V)>)>
public static "of"<A>(arg0: $Encoder$Type<($Map$Type<(K), (V)>)>, arg1: $Decoder$Type<($Map$Type<(K), (V)>)>, arg2: string): $Codec<($Map<(K), (V)>)>
public static "list"<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
public "orElse"(arg0: $Map$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: $Map$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public "orElse"(arg0: $Consumer$Type<(string)>, arg1: $Map$Type<(K), (V)>): $Codec<($Map<(K), (V)>)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<($Map<(K), (V)>)>
public "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<($Map<(K), (V)>)>
public "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<($Map<(K), (V)>)>
public static "pair"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "optionalFieldOf"(arg0: string, arg1: $Map$Type<(K), (V)>, arg2: $Lifecycle$Type): $MapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: string, arg1: $Map$Type<(K), (V)>): $MapCodec<($Map<(K), (V)>)>
public "optionalFieldOf"(arg0: string): $MapCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: $Map$Type<(K), (V)>, arg3: $Lifecycle$Type): $MapCodec<($Map<(K), (V)>)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
public "deprecated"(arg0: integer): $Codec<($Map<(K), (V)>)>
public "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "mapResult"(arg0: $Codec$ResultFunction$Type<($Map$Type<(K), (V)>)>): $Codec<($Map<(K), (V)>)>
public "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "promotePartial"(arg0: $Consumer$Type<(string)>): $Codec<($Map<(K), (V)>)>
public "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public static "mapPair"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "simpleMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
public static "mapEither"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "compoundList"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "either"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "unboundedMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "listOf"(): $Codec<($List<($Map<(K), (V)>)>)>
public "stable"(): $Codec<($Map<(K), (V)>)>
public static "empty"<A>(): $MapEncoder<($Map<(K), (V)>)>
public static "error"<A>(arg0: string): $Encoder<($Map<(K), (V)>)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $Map$Type<(K), (V)>): $DataResult<(T)>
public "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<($Map<(K), (V)>), (T)>)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Map<(K), (V)>)>
public "boxed"(): $Decoder$Boxed<($Map<(K), (V)>)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<($Map<(K), (V)>)>
public "simple"(): $Decoder$Simple<($Map<(K), (V)>)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<($Map<(K), (V)>)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<($Map<(K), (V)>)>
public "terminal"(): $Decoder$Terminal<($Map<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundedMapCodec$Type<K, V> = ($UnboundedMapCodec<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboundedMapCodec_<K, V> = $UnboundedMapCodec$Type<(K), (V)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$PendingInvite" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $PendingInvite extends $ValueObject {
 "invitationId": string
 "worldName": string
 "worldOwnerName": string
 "worldOwnerUuid": string
 "date": $Date

constructor()

public static "parse"(arg0: $JsonObject$Type): $PendingInvite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingInvite$Type = ($PendingInvite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PendingInvite_ = $PendingInvite$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Function16" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"

export interface $Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
 "curry"(): $Function<(T1), ($Function15<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function14<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function12<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function8<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function9<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function11<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function10<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function13<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function4<(T13), (T14), (T15), (T16), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function6<(T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function3<(T14), (T15), (T16), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function5<(T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($BiFunction<(T15), (T16), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function7<(T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>
 "curry15"(): $Function15<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), ($Function<(T16), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R
}

export namespace $Function16 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function16$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = ($Function16<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = $Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function11" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
 "curry"(): $Function<(T1), ($Function10<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function9<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function7<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function3<(T9), (T10), (T11), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function4<(T8), (T9), (T10), (T11), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function6<(T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function5<(T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function8<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function<(T11), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($BiFunction<(T10), (T11), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R
}

export namespace $Function11 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function11$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = ($Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = $Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function10" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
 "curry"(): $Function<(T1), ($Function9<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function8<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function6<(T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($BiFunction<(T9), (T10), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function3<(T8), (T9), (T10), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function5<(T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function4<(T7), (T8), (T9), (T10), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function7<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function<(T10), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R
}

export namespace $Function10 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function10$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = ($Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = $Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function15" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"

export interface $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
 "curry"(): $Function<(T1), ($Function14<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function13<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function11<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function7<(T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function8<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function10<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function9<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function12<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function3<(T13), (T14), (T15), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function5<(T11), (T12), (T13), (T14), (T15), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($BiFunction<(T14), (T15), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function4<(T12), (T13), (T14), (T15), (R)>)>
 "curry14"(): $Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), ($Function<(T15), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function6<(T10), (T11), (T12), (T13), (T14), (T15), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R
}

export namespace $Function15 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function15$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = ($Function15<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = $Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function14" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"

export interface $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
 "curry"(): $Function<(T1), ($Function13<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function12<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function10<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function6<(T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function7<(T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function9<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function8<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function11<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($BiFunction<(T13), (T14), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function4<(T11), (T12), (T13), (T14), (R)>)>
 "curry13"(): $Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), ($Function<(T14), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function3<(T12), (T13), (T14), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function5<(T10), (T11), (T12), (T13), (T14), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R
}

export namespace $Function14 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function14$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = ($Function14<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = $Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function13" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"

export interface $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
 "curry"(): $Function<(T1), ($Function12<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function11<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function9<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function5<(T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function6<(T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function8<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function7<(T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function10<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>
 "curry12"(): $Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), ($Function<(T13), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($Function3<(T11), (T12), (T13), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($BiFunction<(T12), (T13), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function4<(T10), (T11), (T12), (T13), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R
}

export namespace $Function13 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function13$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = ($Function13<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = $Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function12" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
 "curry"(): $Function<(T1), ($Function11<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function10<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function8<(T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function4<(T9), (T10), (T11), (T12), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function5<(T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function7<(T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function6<(T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function9<(T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>
 "curry10"(): $Function10<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), ($BiFunction<(T11), (T12), (R)>)>
 "curry11"(): $Function11<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), ($Function<(T12), (R)>)>
 "curry9"(): $Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), ($Function3<(T10), (T11), (T12), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R
}

export namespace $Function12 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function12$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = ($Function12<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = $Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>;
}}
declare module "packages/com/mojang/datafixers/types/families/$RecursiveTypeFamily" {
import {$FamilyOptic, $FamilyOptic$Type} from "packages/com/mojang/datafixers/$FamilyOptic"
import {$TypeFamily, $TypeFamily$Type} from "packages/com/mojang/datafixers/types/families/$TypeFamily"
import {$TypeRewriteRule, $TypeRewriteRule$Type} from "packages/com/mojang/datafixers/$TypeRewriteRule"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$PointFreeRule, $PointFreeRule$Type} from "packages/com/mojang/datafixers/functions/$PointFreeRule"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Type$TypeMatcher, $Type$TypeMatcher$Type} from "packages/com/mojang/datafixers/types/$Type$TypeMatcher"
import {$Algebra, $Algebra$Type} from "packages/com/mojang/datafixers/types/families/$Algebra"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$RecursivePoint$RecursivePointType, $RecursivePoint$RecursivePointType$Type} from "packages/com/mojang/datafixers/types/templates/$RecursivePoint$RecursivePointType"
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"
import {$TypeTemplate, $TypeTemplate$Type} from "packages/com/mojang/datafixers/types/templates/$TypeTemplate"

export class $RecursiveTypeFamily implements $TypeFamily {

constructor(arg0: string, arg1: $TypeTemplate$Type)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): integer
public "fold"(arg0: $Algebra$Type, arg1: $RecursiveTypeFamily$Type): $IntFunction<($RewriteResult<(any), (any)>)>
public "template"(): $TypeTemplate
public "buildMuType"<A>(arg0: $Type$Type<(A)>, arg1: $RecursiveTypeFamily$Type): $RecursivePoint$RecursivePointType<(A)>
public "everywhere"(arg0: integer, arg1: $TypeRewriteRule$Type, arg2: $PointFreeRule$Type): $Optional<($RewriteResult<(any), (any)>)>
public "findType"<A, B>(arg0: integer, arg1: $Type$Type<(A)>, arg2: $Type$Type<(B)>, arg3: $Type$TypeMatcher$Type<(A), (B)>, arg4: boolean): $Either<($TypedOptic<(any), (any), (A), (B)>), ($Type$FieldNotFoundException)>
public static "familyOptic"<A, B>(arg0: $IntFunction$Type<($TypedOptic$Type<(any), (any), (A), (B)>)>): $FamilyOptic<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecursiveTypeFamily$Type = ($RecursiveTypeFamily);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecursiveTypeFamily_ = $RecursiveTypeFamily$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Pair$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Pair$Mu<S> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Mu$Type<S> = ($Pair$Mu<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair$Mu_<S> = $Pair$Mu$Type<(S)>;
}}
declare module "packages/com/mojang/blaze3d/platform/$WindowEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowEventHandler {

 "resizeDisplay"(): void
 "cursorEntered"(): void
 "setWindowActive"(arg0: boolean): void
}

export namespace $WindowEventHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowEventHandler$Type = ($WindowEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowEventHandler_ = $WindowEventHandler$Type;
}}
declare module "packages/com/mojang/math/$Axis" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export interface $Axis {

 "rotationDegrees"(arg0: float): $Quaternionf
 "rotation"(arg0: float): $Quaternionf

(arg0: $Vector3f$Type): $Axis
}

export namespace $Axis {
const XN: $Axis
const XP: $Axis
const YN: $Axis
const YP: $Axis
const ZN: $Axis
const ZP: $Axis
function of(arg0: $Vector3f$Type): $Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Axis$Type = ($Axis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Axis_ = $Axis$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$WorldTemplatePaginatedList" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$WorldTemplate, $WorldTemplate$Type} from "packages/com/mojang/realmsclient/dto/$WorldTemplate"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $WorldTemplatePaginatedList extends $ValueObject {
 "templates": $List<($WorldTemplate)>
 "page": integer
 "size": integer
 "total": integer

constructor()
constructor(arg0: integer)

public static "parse"(arg0: string): $WorldTemplatePaginatedList
public "isLastPage"(): boolean
get "lastPage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplatePaginatedList$Type = ($WorldTemplatePaginatedList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTemplatePaginatedList_ = $WorldTemplatePaginatedList$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose" {
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $PoseStack$Pose {

constructor(arg0: $Matrix4f$Type, arg1: $Matrix3f$Type)

public "normal"(): $Matrix3f
public "pose"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStack$Pose$Type = ($PoseStack$Pose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStack$Pose_ = $PoseStack$Pose$Type;
}}
declare module "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MinecraftProfileTexture$Type extends $Enum<($MinecraftProfileTexture$Type)> {
static readonly "SKIN": $MinecraftProfileTexture$Type
static readonly "CAPE": $MinecraftProfileTexture$Type
static readonly "ELYTRA": $MinecraftProfileTexture$Type


public static "values"(): ($MinecraftProfileTexture$Type)[]
public static "valueOf"(arg0: string): $MinecraftProfileTexture$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTexture$Type$Type = (("elytra") | ("skin") | ("cape")) | ($MinecraftProfileTexture$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftProfileTexture$Type_ = $MinecraftProfileTexture$Type$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$ClientInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbuseReportRequest$ClientInfo {
 "clientVersion": string
 "locale": string

constructor(arg0: string, arg1: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$ClientInfo$Type = ($AbuseReportRequest$ClientInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest$ClientInfo_ = $AbuseReportRequest$ClientInfo$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$Backup" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Backup extends $ValueObject {
 "backupId": string
 "lastModifiedDate": $Date
 "size": long
 "metadata": $Map<(string), (string)>
 "changeList": $Map<(string), (string)>

constructor()

public static "parse"(arg0: $JsonElement$Type): $Backup
public "isUploadedVersion"(): boolean
public "setUploadedVersion"(arg0: boolean): void
get "uploadedVersion"(): boolean
set "uploadedVersion"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Backup$Type = ($Backup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Backup_ = $Backup$Type;
}}
declare module "packages/com/mojang/brigadier/context/$ParsedCommandNode" {
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$StringRange, $StringRange$Type} from "packages/com/mojang/brigadier/context/$StringRange"

export class $ParsedCommandNode<S> {

constructor(arg0: $CommandNode$Type<(S)>, arg1: $StringRange$Type)

public "getNode"(): $CommandNode<(S)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRange"(): $StringRange
get "node"(): $CommandNode<(S)>
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedCommandNode$Type<S> = ($ParsedCommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsedCommandNode_<S> = $ParsedCommandNode$Type<(S)>;
}}
declare module "packages/com/mojang/serialization/$DynamicOps" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ListBuilder, $ListBuilder$Type} from "packages/com/mojang/serialization/$ListBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $DynamicOps<T> {

 "remove"(arg0: T, arg1: string): T
 "get"(arg0: T, arg1: string): $DataResult<(T)>
 "update"(arg0: T, arg1: string, arg2: $Function$Type<(T), (T)>): T
 "empty"(): T
 "set"(arg0: T, arg1: string, arg2: T): T
 "emptyList"(): T
 "getByteBuffer"(arg0: T): $DataResult<($ByteBuffer)>
 "getMap"(arg0: T): $DataResult<($MapLike<(T)>)>
 "createMap"(arg0: $Stream$Type<($Pair$Type<(T), (T)>)>): T
 "createMap"(arg0: $Map$Type<(T), (T)>): T
 "emptyMap"(): T
 "createLong"(arg0: long): T
 "createString"(arg0: string): T
 "getGeneric"(arg0: T, arg1: T): $DataResult<(T)>
 "compressMaps"(): boolean
 "mapBuilder"(): $RecordBuilder<(T)>
 "mergeToPrimitive"(arg0: T, arg1: T): $DataResult<(T)>
 "createBoolean"(arg0: boolean): T
 "createByte"(arg0: byte): T
 "createInt"(arg0: integer): T
 "getIntStream"(arg0: T): $DataResult<($IntStream)>
 "createIntList"(arg0: $IntStream$Type): T
 "createByteList"(arg0: $ByteBuffer$Type): T
 "createShort"(arg0: short): T
 "mergeToMap"(arg0: T, arg1: $MapLike$Type<(T)>): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: T, arg2: T): $DataResult<(T)>
 "mergeToMap"(arg0: T, arg1: $Map$Type<(T), (T)>): $DataResult<(T)>
 "getLongStream"(arg0: T): $DataResult<($LongStream)>
 "mergeToList"(arg0: T, arg1: T): $DataResult<(T)>
 "mergeToList"(arg0: T, arg1: $List$Type<(T)>): $DataResult<(T)>
 "createLongList"(arg0: $LongStream$Type): T
 "getMapValues"(arg0: T): $DataResult<($Stream<($Pair<(T), (T)>)>)>
 "convertTo"<U>(arg0: $DynamicOps$Type<(U)>, arg1: T): U
 "createNumeric"(arg0: number): T
 "getMapEntries"(arg0: T): $DataResult<($Consumer<($BiConsumer<(T), (T)>)>)>
 "withEncoder"<E>(arg0: $Encoder$Type<(E)>): $Function<(E), ($DataResult<(T)>)>
 "listBuilder"(): $ListBuilder<(T)>
 "withDecoder"<E>(arg0: $Decoder$Type<(E)>): $Function<(T), ($DataResult<($Pair<(E), (T)>)>)>
 "withParser"<E>(arg0: $Decoder$Type<(E)>): $Function<(T), ($DataResult<(E)>)>
 "convertList"<U>(arg0: $DynamicOps$Type<(U)>, arg1: T): U
 "updateGeneric"(arg0: T, arg1: T, arg2: $Function$Type<(T), (T)>): T
 "convertMap"<U>(arg0: $DynamicOps$Type<(U)>, arg1: T): U
 "createList"(arg0: $Stream$Type<(T)>): T
 "getStream"(arg0: T): $DataResult<($Stream<(T)>)>
 "getNumberValue"(arg0: T): $DataResult<(number)>
 "getNumberValue"(arg0: T, arg1: number): number
 "getBooleanValue"(arg0: T): $DataResult<(boolean)>
 "getStringValue"(arg0: T): $DataResult<(string)>
 "getList"(arg0: T): $DataResult<($Consumer<($Consumer<(T)>)>)>
 "createFloat"(arg0: float): T
 "createDouble"(arg0: double): T
}

export namespace $DynamicOps {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicOps$Type<T> = ($DynamicOps<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicOps_<T> = $DynamicOps$Type<(T)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$UserApiService$UserFlag" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UserApiService$UserFlag extends $Enum<($UserApiService$UserFlag)> {
static readonly "SERVERS_ALLOWED": $UserApiService$UserFlag
static readonly "REALMS_ALLOWED": $UserApiService$UserFlag
static readonly "CHAT_ALLOWED": $UserApiService$UserFlag
static readonly "TELEMETRY_ENABLED": $UserApiService$UserFlag
static readonly "PROFANITY_FILTER_ENABLED": $UserApiService$UserFlag
static readonly "OPTIONAL_TELEMETRY_AVAILABLE": $UserApiService$UserFlag


public static "values"(): ($UserApiService$UserFlag)[]
public static "valueOf"(arg0: string): $UserApiService$UserFlag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$UserFlag$Type = (("telemetry_enabled") | ("optional_telemetry_available") | ("profanity_filter_enabled") | ("realms_allowed") | ("chat_allowed") | ("servers_allowed")) | ($UserApiService$UserFlag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserApiService$UserFlag_ = $UserApiService$UserFlag$Type;
}}
declare module "packages/com/mojang/datafixers/$RewriteResult" {
import {$View, $View$Type} from "packages/com/mojang/datafixers/$View"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"

export class $RewriteResult<A, B> extends $Record {

constructor(view: $View$Type<(A), (B)>, recData: $BitSet$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<A, B>(arg0: $View$Type<(A), (B)>, arg1: $BitSet$Type): $RewriteResult<(A), (B)>
public "compose"<C>(arg0: $RewriteResult$Type<(C), (A)>): $RewriteResult<(C), (B)>
public "view"(): $View<(A), (B)>
public static "nop"<A>(arg0: $Type$Type<(A)>): $RewriteResult<(A), (A)>
public "recData"(): $BitSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewriteResult$Type<A, B> = ($RewriteResult<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewriteResult_<A, B> = $RewriteResult$Type<(A), (B)>;
}}
declare module "packages/com/mojang/serialization/$DataResult$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $DataResult$Mu implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Mu$Type = ($DataResult$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Mu_ = $DataResult$Mu$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$Kind1" {
import {$Kind1$Mu, $Kind1$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Kind1$Mu"
import {$Products$P10, $Products$P10$Type} from "packages/com/mojang/datafixers/$Products$P10"
import {$Products$P11, $Products$P11$Type} from "packages/com/mojang/datafixers/$Products$P11"
import {$Products$P14, $Products$P14$Type} from "packages/com/mojang/datafixers/$Products$P14"
import {$Products$P15, $Products$P15$Type} from "packages/com/mojang/datafixers/$Products$P15"
import {$Products$P12, $Products$P12$Type} from "packages/com/mojang/datafixers/$Products$P12"
import {$Products$P13, $Products$P13$Type} from "packages/com/mojang/datafixers/$Products$P13"
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Products$P16, $Products$P16$Type} from "packages/com/mojang/datafixers/$Products$P16"
import {$Products$P1, $Products$P1$Type} from "packages/com/mojang/datafixers/$Products$P1"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Products$P9, $Products$P9$Type} from "packages/com/mojang/datafixers/$Products$P9"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export interface $Kind1<F extends $K1, Mu extends $Kind1$Mu> extends $App<(Mu), (F)> {

 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>, arg15: $App$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}

export namespace $Kind1 {
function unbox<F, Proof>(arg0: $App$Type<(Proof), (F)>): $Kind1<(F), (Proof)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Kind1$Type<F, Mu> = ($Kind1<(F), (Mu)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Kind1_<F, Mu> = $Kind1$Type<(F), (Mu)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerList" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerPlayerList extends $ValueObject {
 "serverId": long
 "players": $List<(string)>

constructor()

public static "parse"(arg0: $JsonObject$Type): $RealmsServerPlayerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerPlayerList$Type = ($RealmsServerPlayerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerPlayerList_ = $RealmsServerPlayerList$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$EffectProgram" {
import {$Program, $Program$Type} from "packages/com/mojang/blaze3d/shaders/$Program"
import {$Effect, $Effect$Type} from "packages/com/mojang/blaze3d/shaders/$Effect"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Program$Type, $Program$Type$Type} from "packages/com/mojang/blaze3d/shaders/$Program$Type"

export class $EffectProgram extends $Program {


public "close"(): void
public "attachToEffect"(arg0: $Effect$Type): void
public static "compileShader"(arg0: $Program$Type$Type, arg1: string, arg2: $InputStream$Type, arg3: string): $EffectProgram
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectProgram$Type = ($EffectProgram);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectProgram_ = $EffectProgram$Type;
}}
declare module "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder" {
import {$LiteralCommandNode, $LiteralCommandNode$Type} from "packages/com/mojang/brigadier/tree/$LiteralCommandNode"
import {$ArgumentBuilder, $ArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$ArgumentBuilder"

export class $LiteralArgumentBuilder<S> extends $ArgumentBuilder<(S), ($LiteralArgumentBuilder<(S)>)> {


public "build"(): $LiteralCommandNode<(S)>
public static "literal"<S>(arg0: string): $LiteralArgumentBuilder<(S)>
public "getLiteral"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralArgumentBuilder$Type<S> = ($LiteralArgumentBuilder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiteralArgumentBuilder_<S> = $LiteralArgumentBuilder$Type<(S)>;
}}
declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BufferBuilder$SortState {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilder$SortState$Type = ($BufferBuilder$SortState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilder$SortState_ = $BufferBuilder$SortState$Type;
}}
declare module "packages/com/mojang/brigadier/arguments/$IntegerArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $IntegerArgumentType implements $ArgumentType<(integer)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getInteger"(arg0: $CommandContext$Type<(any)>, arg1: string): integer
public "getMinimum"(): integer
public "getMaximum"(): integer
public "getExamples"(): $Collection<(string)>
public static "integer"(arg0: integer): $IntegerArgumentType
public static "integer"(arg0: integer, arg1: integer): $IntegerArgumentType
public static "integer"(): $IntegerArgumentType
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "minimum"(): integer
get "maximum"(): integer
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerArgumentType$Type = ($IntegerArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerArgumentType_ = $IntegerArgumentType$Type;
}}
declare module "packages/com/mojang/authlib/$UserAuthentication" {
import {$UserType, $UserType$Type} from "packages/com/mojang/authlib/$UserType"
import {$PropertyMap, $PropertyMap$Type} from "packages/com/mojang/authlib/properties/$PropertyMap"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $UserAuthentication {

 "setPassword"(arg0: string): void
 "getAvailableProfiles"(): ($GameProfile)[]
 "getAuthenticatedToken"(): string
 "getSelectedProfile"(): $GameProfile
 "canPlayOnline"(): boolean
 "getUserProperties"(): $PropertyMap
 "getUserType"(): $UserType
 "logOut"(): void
 "saveForStorage"(): $Map<(string), (any)>
 "setUsername"(arg0: string): void
 "loadFromStorage"(arg0: $Map$Type<(string), (any)>): void
 "isLoggedIn"(): boolean
 "selectGameProfile"(arg0: $GameProfile$Type): void
 "logIn"(): void
 "getUserID"(): string
 "canLogIn"(): boolean
}

export namespace $UserAuthentication {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserAuthentication$Type = ($UserAuthentication);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserAuthentication_ = $UserAuthentication$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$BlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlendMode {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "stringToBlendFactor"(arg0: string): integer
public static "stringToBlendFunc"(arg0: string): integer
public "apply"(): void
public "isOpaque"(): boolean
get "opaque"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$Type = ($BlendMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendMode_ = $BlendMode$Type;
}}
declare module "packages/com/mojang/brigadier/arguments/$DoubleArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $DoubleArgumentType implements $ArgumentType<(double)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getDouble"(arg0: $CommandContext$Type<(any)>, arg1: string): double
public "getMinimum"(): double
public "getMaximum"(): double
public "getExamples"(): $Collection<(string)>
public static "doubleArg"(arg0: double): $DoubleArgumentType
public static "doubleArg"(arg0: double, arg1: double): $DoubleArgumentType
public static "doubleArg"(): $DoubleArgumentType
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "minimum"(): double
get "maximum"(): double
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleArgumentType$Type = ($DoubleArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleArgumentType_ = $DoubleArgumentType$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Either$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Either$Mu<R> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$Mu$Type<R> = ($Either$Mu<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Either$Mu_<R> = $Either$Mu$Type<(R)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$UserApiService$UserProperties" {
import {$BanDetails, $BanDetails$Type} from "packages/com/mojang/authlib/minecraft/$BanDetails"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$UserApiService$UserFlag, $UserApiService$UserFlag$Type} from "packages/com/mojang/authlib/minecraft/$UserApiService$UserFlag"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UserApiService$UserProperties extends $Record {

constructor(flags: $Set$Type<($UserApiService$UserFlag$Type)>, bannedScopes: $Map$Type<(string), ($BanDetails$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "flags"(): $Set<($UserApiService$UserFlag)>
public "hashCode"(): integer
public "flag"(arg0: $UserApiService$UserFlag$Type): boolean
public "bannedScopes"(): $Map<(string), ($BanDetails)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$UserProperties$Type = ($UserApiService$UserProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserApiService$UserProperties_ = $UserApiService$UserProperties$Type;
}}
declare module "packages/com/mojang/authlib/minecraft/report/$AbuseReport" {
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$ReportedEntity, $ReportedEntity$Type} from "packages/com/mojang/authlib/minecraft/report/$ReportedEntity"
import {$ReportEvidence, $ReportEvidence$Type} from "packages/com/mojang/authlib/minecraft/report/$ReportEvidence"

export class $AbuseReport {
 "opinionComments": string
 "reason": string
 "evidence": $ReportEvidence
 "reportedEntity": $ReportedEntity
 "createdTime": $Instant

constructor(arg0: string, arg1: string, arg2: $ReportEvidence$Type, arg3: $ReportedEntity$Type, arg4: $Instant$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReport$Type = ($AbuseReport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReport_ = $AbuseReport$Type;
}}
declare module "packages/com/mojang/authlib/properties/$Property" {
import {$PublicKey, $PublicKey$Type} from "packages/java/security/$PublicKey"

export class $Property {

constructor(arg0: string, arg1: string)
constructor(arg0: string, arg1: string, arg2: string)

public "getName"(): string
public "getValue"(): string
public "getSignature"(): string
/**
 * 
 * @deprecated
 */
public "isSignatureValid"(arg0: $PublicKey$Type): boolean
public "hasSignature"(): boolean
get "name"(): string
get "value"(): string
get "signature"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type = ($Property);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property_ = $Property$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$BaseMapCodec" {
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BaseMapCodec<K, V> {

 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>): $DataResult<($Map<(K), (V)>)>
 "encode"<T>(arg0: $Map$Type<(K), (V)>, arg1: $DynamicOps$Type<(T)>, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
 "elementCodec"(): $Codec<(V)>
 "keyCodec"(): $Codec<(K)>
}

export namespace $BaseMapCodec {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMapCodec$Type<K, V> = ($BaseMapCodec<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMapCodec_<K, V> = $BaseMapCodec$Type<(K), (V)>;
}}
declare module "packages/com/mojang/datafixers/types/$Type$TypeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Type$TypeError {

constructor(arg0: string)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$TypeError$Type = ($Type$TypeError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$TypeError_ = $Type$TypeError$Type;
}}
declare module "packages/com/mojang/brigadier/exceptions/$BuiltInExceptionProvider" {
import {$Dynamic2CommandExceptionType, $Dynamic2CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$DynamicCommandExceptionType"

export interface $BuiltInExceptionProvider {

 "dispatcherExpectedArgumentSeparator"(): $SimpleCommandExceptionType
 "integerTooHigh"(): $Dynamic2CommandExceptionType
 "longTooLow"(): $Dynamic2CommandExceptionType
 "literalIncorrect"(): $DynamicCommandExceptionType
 "readerExpectedInt"(): $SimpleCommandExceptionType
 "doubleTooHigh"(): $Dynamic2CommandExceptionType
 "readerInvalidLong"(): $DynamicCommandExceptionType
 "longTooHigh"(): $Dynamic2CommandExceptionType
 "readerExpectedLong"(): $SimpleCommandExceptionType
 "readerInvalidInt"(): $DynamicCommandExceptionType
 "doubleTooLow"(): $Dynamic2CommandExceptionType
 "readerInvalidBool"(): $DynamicCommandExceptionType
 "floatTooLow"(): $Dynamic2CommandExceptionType
 "floatTooHigh"(): $Dynamic2CommandExceptionType
 "integerTooLow"(): $Dynamic2CommandExceptionType
 "readerInvalidFloat"(): $DynamicCommandExceptionType
 "readerExpectedBool"(): $SimpleCommandExceptionType
 "readerInvalidEscape"(): $DynamicCommandExceptionType
 "readerExpectedDouble"(): $SimpleCommandExceptionType
 "readerExpectedFloat"(): $SimpleCommandExceptionType
 "readerExpectedSymbol"(): $DynamicCommandExceptionType
 "dispatcherUnknownCommand"(): $SimpleCommandExceptionType
 "readerExpectedStartOfQuote"(): $SimpleCommandExceptionType
 "readerInvalidDouble"(): $DynamicCommandExceptionType
 "readerExpectedEndOfQuote"(): $SimpleCommandExceptionType
 "dispatcherUnknownArgument"(): $SimpleCommandExceptionType
 "dispatcherParseException"(): $DynamicCommandExceptionType
}

export namespace $BuiltInExceptionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltInExceptionProvider$Type = ($BuiltInExceptionProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltInExceptionProvider_ = $BuiltInExceptionProvider$Type;
}}
declare module "packages/com/mojang/datafixers/types/templates/$RecursivePoint$RecursivePointType" {
import {$View, $View$Type} from "packages/com/mojang/datafixers/$View"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$Type} from "packages/com/mojang/datafixers/types/families/$RecursiveTypeFamily"
import {$TypeRewriteRule, $TypeRewriteRule$Type} from "packages/com/mojang/datafixers/$TypeRewriteRule"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$PointFreeRule, $PointFreeRule$Type} from "packages/com/mojang/datafixers/functions/$PointFreeRule"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Type$TypeMatcher, $Type$TypeMatcher$Type} from "packages/com/mojang/datafixers/types/$Type$TypeMatcher"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$Type} from "packages/com/mojang/datafixers/types/templates/$TaggedChoice$TaggedChoiceType"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"
import {$TypeTemplate, $TypeTemplate$Type} from "packages/com/mojang/datafixers/types/templates/$TypeTemplate"

export class $RecursivePoint$RecursivePointType<A> extends $Type<(A)> {

constructor(arg0: $RecursiveTypeFamily$Type, arg1: integer, arg2: $Supplier$Type<($Type$Type<(A)>)>)

public "index"(): integer
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "toString"(): string
public "hashCode"(): integer
public "out"(): $View<(A), (A)>
public "in"(): $View<(A), (A)>
public "all"(arg0: $TypeRewriteRule$Type, arg1: boolean, arg2: boolean): $RewriteResult<(A), (any)>
public "family"(): $RecursiveTypeFamily
public "point"(arg0: $DynamicOps$Type<(any)>): $Optional<(A)>
public "one"(arg0: $TypeRewriteRule$Type): $Optional<($RewriteResult<(A), (any)>)>
public "findCheckedType"(arg0: integer): $Optional<($Type<(any)>)>
public "everywhere"(arg0: $TypeRewriteRule$Type, arg1: $PointFreeRule$Type, arg2: boolean, arg3: boolean): $Optional<($RewriteResult<(A), (any)>)>
public "findChoiceType"(arg0: string, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(any)>)>
public "unfold"(): $Type<(A)>
public "buildTemplate"(): $TypeTemplate
public "findTypeInChildren"<FT, FR>(arg0: $Type$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Type$TypeMatcher$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findFieldTypeOpt"(arg0: string): $Optional<($Type<(any)>)>
public "updateMu"(arg0: $RecursiveTypeFamily$Type): $Type<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecursivePoint$RecursivePointType$Type<A> = ($RecursivePoint$RecursivePointType<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecursivePoint$RecursivePointType_<A> = $RecursivePoint$RecursivePointType$Type<(A)>;
}}
declare module "packages/com/mojang/brigadier/suggestion/$Suggestions" {
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StringRange, $StringRange$Type} from "packages/com/mojang/brigadier/context/$StringRange"
import {$Suggestion, $Suggestion$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestion"

export class $Suggestions {

constructor(arg0: $StringRange$Type, arg1: $List$Type<($Suggestion$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "merge"(arg0: string, arg1: $Collection$Type<($Suggestions$Type)>): $Suggestions
public static "empty"(): $CompletableFuture<($Suggestions)>
public static "create"(arg0: string, arg1: $Collection$Type<($Suggestion$Type)>): $Suggestions
public "getRange"(): $StringRange
public "getList"(): $List<($Suggestion)>
get "range"(): $StringRange
get "list"(): $List<($Suggestion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Suggestions$Type = ($Suggestions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Suggestions_ = $Suggestions$Type;
}}
declare module "packages/com/mojang/brigadier/tree/$CommandNode" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AmbiguityConsumer, $AmbiguityConsumer$Type} from "packages/com/mojang/brigadier/$AmbiguityConsumer"
import {$RedirectModifier, $RedirectModifier$Type} from "packages/com/mojang/brigadier/$RedirectModifier"
import {$CommandContextBuilder, $CommandContextBuilder$Type} from "packages/com/mojang/brigadier/context/$CommandContextBuilder"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$Command, $Command$Type} from "packages/com/mojang/brigadier/$Command"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentBuilder, $ArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$ArgumentBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $CommandNode<S> implements $Comparable<($CommandNode<(S)>)> {


public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommandNode$Type<(S)>): integer
public "canUse"(arg0: S): boolean
public "parse"(arg0: $StringReader$Type, arg1: $CommandContextBuilder$Type<(S)>): void
public "getChildren"(): $Collection<($CommandNode<(S)>)>
public "getChild"(arg0: string): $CommandNode<(S)>
public "getRequirement"(): $Predicate<(S)>
public "getRedirect"(): $CommandNode<(S)>
public "isFork"(): boolean
public "addChild"(arg0: $CommandNode$Type<(S)>): void
public "findAmbiguities"(arg0: $AmbiguityConsumer$Type<(S)>): void
public "getUsageText"(): string
public "getRelevantNodes"(arg0: $StringReader$Type): $Collection<(any)>
public "getCommand"(): $Command<(S)>
public "listSuggestions"(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "createBuilder"(): $ArgumentBuilder<(S), (any)>
get "name"(): string
get "children"(): $Collection<($CommandNode<(S)>)>
get "requirement"(): $Predicate<(S)>
get "redirect"(): $CommandNode<(S)>
get "fork"(): boolean
get "usageText"(): string
get "command"(): $Command<(S)>
get "examples"(): $Collection<(string)>
get "redirectModifier"(): $RedirectModifier<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandNode$Type<S> = ($CommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandNode_<S> = $CommandNode$Type<(S)>;
}}
declare module "packages/com/mojang/blaze3d/audio/$SoundBuffer" {
import {$AudioFormat, $AudioFormat$Type} from "packages/javax/sound/sampled/$AudioFormat"
import {$SoundBufferAccessor, $SoundBufferAccessor$Type} from "packages/com/yungnickyoung/minecraft/ribbits/mixin/mixins/client/accessor/$SoundBufferAccessor"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"

export class $SoundBuffer implements $SoundBufferAccessor {

constructor(arg0: $ByteBuffer$Type, arg1: $AudioFormat$Type)

public "discardAlBuffer"(): void
public "releaseAlBuffer"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBuffer$Type = ($SoundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundBuffer_ = $SoundBuffer$Type;
}}
declare module "packages/com/mojang/blaze3d/platform/$VideoMode" {
import {$GLFWVidMode, $GLFWVidMode$Type} from "packages/org/lwjgl/glfw/$GLFWVidMode"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$GLFWVidMode$Buffer, $GLFWVidMode$Buffer$Type} from "packages/org/lwjgl/glfw/$GLFWVidMode$Buffer"

export class $VideoMode {

constructor(arg0: $GLFWVidMode$Type)
constructor(arg0: $GLFWVidMode$Buffer$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "read"(arg0: string): $Optional<($VideoMode)>
public "getHeight"(): integer
public "getWidth"(): integer
public "getRefreshRate"(): integer
public "getBlueBits"(): integer
public "getRedBits"(): integer
public "getGreenBits"(): integer
public "write"(): string
get "height"(): integer
get "width"(): integer
get "refreshRate"(): integer
get "blueBits"(): integer
get "redBits"(): integer
get "greenBits"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VideoMode$Type = ($VideoMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VideoMode_ = $VideoMode$Type;
}}
declare module "packages/com/mojang/serialization/$MapCodec" {
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$RecordCodecBuilder, $RecordCodecBuilder$Type} from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$MapCodec$ResultFunction, $MapCodec$ResultFunction$Type} from "packages/com/mojang/serialization/$MapCodec$ResultFunction"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$CompressorHolder, $CompressorHolder$Type} from "packages/com/mojang/serialization/$CompressorHolder"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $MapCodec<A> extends $CompressorHolder implements $MapDecoder<(A)>, $MapEncoder<(A)> {

constructor()

public static "unit"<A>(arg0: A): $MapCodec<(A)>
public static "unit"<A>(arg0: $Supplier$Type<(A)>): $MapCodec<(A)>
public static "of"<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>, arg2: $Supplier$Type<(string)>): $MapCodec<(A)>
public static "of"<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>): $MapCodec<(A)>
public "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
public "orElse"(arg0: A): $MapCodec<(A)>
public "orElse"(arg0: $Consumer$Type<(string)>, arg1: A): $MapCodec<(A)>
public "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: A): $MapCodec<(A)>
public "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $MapCodec<(A)>
public "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $MapCodec<(A)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): $MapCodec<(A)>
public "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(S)>
public "fieldOf"(arg0: string): $MapCodec<(A)>
public "deprecated"(arg0: integer): $MapCodec<(A)>
public "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(S)>
public "codec"(): $Codec<(A)>
public "mapResult"(arg0: $MapCodec$ResultFunction$Type<(A)>): $MapCodec<(A)>
public "forGetter"<O>(arg0: $Function$Type<(O), (A)>): $RecordCodecBuilder<(O), (A)>
public "setPartial"(arg0: $Supplier$Type<(A)>): $MapCodec<(A)>
public "dependent"<E>(arg0: $MapCodec$Type<(E)>, arg1: $Function$Type<(A), ($Pair$Type<(E), ($MapCodec$Type<(E)>)>)>, arg2: $BiFunction$Type<(A), (E), (A)>): $MapCodec<(A)>
public "stable"(): $MapCodec<(A)>
public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>): $DataResult<(A)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $MapDecoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $MapDecoder<(B)>
public "decoder"(): $Decoder<(A)>
public "ap"<E>(arg0: $MapDecoder$Type<($Function$Type<(any), (any)>)>): $MapDecoder<(E)>
public "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
public "compressedDecode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
public "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
public "encoder"(): $Encoder<(A)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $MapEncoder<(B)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $MapEncoder<(B)>
public "compressedBuilder"<T>(arg0: $DynamicOps$Type<(T)>): $RecordBuilder<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $KeyCompressor$Type<(T)>): $RecordBuilder<(T)>
public static "forStrings"(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
set "partial"(value: $Supplier$Type<(A)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$Type<A> = ($MapCodec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCodec_<A> = $MapCodec$Type<(A)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$UserApiService" {
import {$UserApiService$UserProperties, $UserApiService$UserProperties$Type} from "packages/com/mojang/authlib/minecraft/$UserApiService$UserProperties"
import {$AbuseReportRequest, $AbuseReportRequest$Type} from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest"
import {$KeyPairResponse, $KeyPairResponse$Type} from "packages/com/mojang/authlib/yggdrasil/response/$KeyPairResponse"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TelemetrySession, $TelemetrySession$Type} from "packages/com/mojang/authlib/minecraft/$TelemetrySession"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$AbuseReportLimits, $AbuseReportLimits$Type} from "packages/com/mojang/authlib/minecraft/report/$AbuseReportLimits"

export interface $UserApiService {

 "properties"(): $UserApiService$UserProperties
 "getAbuseReportLimits"(): $AbuseReportLimits
 "newTelemetrySession"(arg0: $Executor$Type): $TelemetrySession
 "isBlockedPlayer"(arg0: $UUID$Type): boolean
 "reportAbuse"(arg0: $AbuseReportRequest$Type): void
 "refreshBlockList"(): void
 "getKeyPair"(): $KeyPairResponse
 "canSendReports"(): boolean
}

export namespace $UserApiService {
const OFFLINE_PROPERTIES: $UserApiService$UserProperties
const OFFLINE: $UserApiService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserApiService$Type = ($UserApiService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserApiService_ = $UserApiService$Type;
}}
declare module "packages/com/mojang/brigadier/$Command" {
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $Command<S> {

 "run"(arg0: $CommandContext$Type<(S)>): integer

(arg0: $CommandContext$Type<(S)>): integer
}

export namespace $Command {
const SINGLE_SUCCESS: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Command$Type<S> = ($Command<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Command_<S> = $Command$Type<(S)>;
}}
declare module "packages/com/mojang/authlib/$GameProfileRepository" {
import {$Agent, $Agent$Type} from "packages/com/mojang/authlib/$Agent"
import {$ProfileLookupCallback, $ProfileLookupCallback$Type} from "packages/com/mojang/authlib/$ProfileLookupCallback"

export interface $GameProfileRepository {

 "findProfilesByNames"(arg0: (string)[], arg1: $Agent$Type, arg2: $ProfileLookupCallback$Type): void

(arg0: (string)[], arg1: $Agent$Type, arg2: $ProfileLookupCallback$Type): void
}

export namespace $GameProfileRepository {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameProfileRepository$Type = ($GameProfileRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameProfileRepository_ = $GameProfileRepository$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$Tesselator" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $Tesselator {

constructor()
constructor(arg0: integer)

public static "getInstance"(): $Tesselator
public "getBuilder"(): $BufferBuilder
public "end"(): void
get "instance"(): $Tesselator
get "builder"(): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tesselator$Type = ($Tesselator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tesselator_ = $Tesselator$Type;
}}
declare module "packages/com/mojang/brigadier/context/$CommandContextBuilder" {
import {$SuggestionContext, $SuggestionContext$Type} from "packages/com/mojang/brigadier/context/$SuggestionContext"
import {$Command, $Command$Type} from "packages/com/mojang/brigadier/$Command"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParsedArgument, $ParsedArgument$Type} from "packages/com/mojang/brigadier/context/$ParsedArgument"
import {$StringRange, $StringRange$Type} from "packages/com/mojang/brigadier/context/$StringRange"
import {$CommandDispatcher, $CommandDispatcher$Type} from "packages/com/mojang/brigadier/$CommandDispatcher"
import {$ParsedCommandNode, $ParsedCommandNode$Type} from "packages/com/mojang/brigadier/context/$ParsedCommandNode"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommandContextBuilder<S> {

constructor(arg0: $CommandDispatcher$Type<(S)>, arg1: S, arg2: $CommandNode$Type<(S)>, arg3: integer)

public "withSource"(arg0: S): $CommandContextBuilder<(S)>
public "withArgument"(arg0: string, arg1: $ParsedArgument$Type<(S), (any)>): $CommandContextBuilder<(S)>
public "build"(arg0: string): $CommandContext<(S)>
public "copy"(): $CommandContextBuilder<(S)>
public "getSource"(): S
public "getChild"(): $CommandContextBuilder<(S)>
public "getRange"(): $StringRange
public "withChild"(arg0: $CommandContextBuilder$Type<(S)>): $CommandContextBuilder<(S)>
public "withCommand"(arg0: $Command$Type<(S)>): $CommandContextBuilder<(S)>
public "getCommand"(): $Command<(S)>
public "getRootNode"(): $CommandNode<(S)>
public "withNode"(arg0: $CommandNode$Type<(S)>, arg1: $StringRange$Type): $CommandContextBuilder<(S)>
public "findSuggestionContext"(arg0: integer): $SuggestionContext<(S)>
public "getArguments"(): $Map<(string), ($ParsedArgument<(S), (any)>)>
public "getLastChild"(): $CommandContextBuilder<(S)>
public "getDispatcher"(): $CommandDispatcher<(S)>
public "getNodes"(): $List<($ParsedCommandNode<(S)>)>
get "source"(): S
get "child"(): $CommandContextBuilder<(S)>
get "range"(): $StringRange
get "command"(): $Command<(S)>
get "rootNode"(): $CommandNode<(S)>
get "arguments"(): $Map<(string), ($ParsedArgument<(S), (any)>)>
get "lastChild"(): $CommandContextBuilder<(S)>
get "dispatcher"(): $CommandDispatcher<(S)>
get "nodes"(): $List<($ParsedCommandNode<(S)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandContextBuilder$Type<S> = ($CommandContextBuilder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandContextBuilder_<S> = $CommandContextBuilder$Type<(S)>;
}}
declare module "packages/com/mojang/serialization/$Decoder" {
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export interface $Decoder<A> {

 "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "fieldOf"(arg0: string): $MapDecoder<(A)>
 "withLifecycle"(arg0: $Lifecycle$Type): $Decoder<(A)>
 "promotePartial"(arg0: $Consumer$Type<(string)>): $Decoder<(A)>
 "simple"(): $Decoder$Simple<(A)>
 "terminal"(): $Decoder$Terminal<(A)>

(arg0: A): $MapDecoder<(A)>
}

export namespace $Decoder {
function unit<A>(arg0: A): $MapDecoder<(A)>
function unit<A>(arg0: $Supplier$Type<(A)>): $MapDecoder<(A)>
function error<A>(arg0: string): $Decoder<(A)>
function ofTerminal<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(A)>
function ofBoxed<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(A)>
function ofSimple<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Type<A> = ($Decoder<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder_<A> = $Decoder$Type<(A)>;
}}
declare module "packages/com/mojang/datafixers/kinds/$App2" {
import {$K2, $K2$Type} from "packages/com/mojang/datafixers/kinds/$K2"

export interface $App2<F extends $K2, A, B> {

}

export namespace $App2 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $App2$Type<F, A, B> = ($App2<(F), (A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $App2_<F, A, B> = $App2$Type<(F), (A), (B)>;
}}
declare module "packages/com/mojang/datafixers/$View" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PointFreeRule, $PointFreeRule$Type} from "packages/com/mojang/datafixers/functions/$PointFreeRule"
import {$View$Mu, $View$Mu$Type} from "packages/com/mojang/datafixers/$View$Mu"
import {$App2, $App2$Type} from "packages/com/mojang/datafixers/kinds/$App2"
import {$PointFree, $PointFree$Type} from "packages/com/mojang/datafixers/functions/$PointFree"

export class $View<A, B> extends $Record implements $App2<($View$Mu), (A), (B)> {

constructor(arg0: $PointFree$Type<($Function$Type<(A), (B)>)>)

public "type"(): $Type<(A)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "newType"(): $Type<(B)>
public "flatMap"<C>(arg0: $Function$Type<($Type$Type<(B)>), ($View$Type<(B), (C)>)>): $View<(A), (C)>
public "function"(): $PointFree<($Function<(A), (B)>)>
public static "create"<A, B>(arg0: $PointFree$Type<($Function$Type<(A), (B)>)>): $View<(A), (B)>
public static "create"<A, B>(arg0: string, arg1: $Type$Type<(A)>, arg2: $Type$Type<(B)>, arg3: $Function$Type<($DynamicOps$Type<(any)>), ($Function$Type<(A), (B)>)>): $View<(A), (B)>
public "compose"<C>(arg0: $View$Type<(C), (A)>): $View<(C), (B)>
public "rewrite"(arg0: $PointFreeRule$Type): $Optional<(any)>
public static "nopView"<A>(arg0: $Type$Type<(A)>): $View<(A), (A)>
public "funcType"(): $Type<($Function<(A), (B)>)>
public "isNop"(): boolean
public "rewriteOrNop"(arg0: $PointFreeRule$Type): $View<(A), (B)>
get "nop"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$Type<A, B> = ($View<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View_<A, B> = $View$Type<(A), (B)>;
}}
declare module "packages/com/mojang/datafixers/$TypedOptic" {
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optic, $Optic$Type} from "packages/com/mojang/datafixers/optics/$Optic"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$App2, $App2$Type} from "packages/com/mojang/datafixers/kinds/$App2"
import {$K2, $K2$Type} from "packages/com/mojang/datafixers/kinds/$K2"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$Type} from "packages/com/mojang/datafixers/types/templates/$TaggedChoice$TaggedChoiceType"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export class $TypedOptic<S, T, A, B> extends $Record {

constructor(arg0: $TypeToken$Type<(any)>, arg1: $Type$Type<(S)>, arg2: $Type$Type<(T)>, arg3: $Type$Type<(A)>, arg4: $Type$Type<(B)>, arg5: $Optic$Type<(any), (S), (T), (A), (B)>)
constructor(bounds: $Set$Type<($TypeToken$Type<(any)>)>, elements: $List$Type<(any)>)
constructor(arg0: $Set$Type<($TypeToken$Type<(any)>)>, arg1: $Type$Type<(S)>, arg2: $Type$Type<(T)>, arg3: $Type$Type<(A)>, arg4: $Type$Type<(B)>, arg5: $Optic$Type<(any), (S), (T), (A), (B)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"<P extends $K2, Proof2 extends $K1>(arg0: $TypeToken$Type<(Proof2)>, arg1: $App$Type<(Proof2), (P)>, arg2: $App2$Type<(P), (A), (B)>): $App2<(P), (S), (T)>
public static "list"<A, B>(arg0: $Type$Type<(A)>, arg1: $Type$Type<(B)>): $TypedOptic<($List<(A)>), ($List<(B)>), (A), (B)>
public "elements"(): $List<(any)>
public "bounds"(): $Set<($TypeToken<(any)>)>
public static "adapter"<S, T>(arg0: $Type$Type<(S)>, arg1: $Type$Type<(T)>): $TypedOptic<(S), (T), (S), (T)>
public "compose"<A1, B1>(arg0: $TypedOptic$Type<(A), (B), (A1), (B1)>): $TypedOptic<(S), (T), (A1), (B1)>
public static "tagged"<K, A, B>(arg0: $TaggedChoice$TaggedChoiceType$Type<(K)>, arg1: K, arg2: $Type$Type<(A)>, arg3: $Type$Type<(B)>): $TypedOptic<($Pair<(K), (any)>), ($Pair<(K), (any)>), (A), (B)>
public "upCast"<Proof2 extends $K1>(arg0: $TypeToken$Type<(Proof2)>): $Optional<($Optic<(any), (S), (T), (A), (B)>)>
public static "inj2"<F, G, G2>(arg0: $Type$Type<(F)>, arg1: $Type$Type<(G)>, arg2: $Type$Type<(G2)>): $TypedOptic<($Either<(F), (G)>), ($Either<(F), (G2)>), (G), (G2)>
public "castOuter"(arg0: $Type$Type<(S)>, arg1: $Type$Type<(T)>): $TypedOptic<(S), (T), (A), (B)>
public static "inj1"<F, G, F2>(arg0: $Type$Type<(F)>, arg1: $Type$Type<(G)>, arg2: $Type$Type<(F2)>): $TypedOptic<($Either<(F), (G)>), ($Either<(F2), (G)>), (F), (F2)>
public static "proj2"<F, G, G2>(arg0: $Type$Type<(F)>, arg1: $Type$Type<(G)>, arg2: $Type$Type<(G2)>): $TypedOptic<($Pair<(F), (G)>), ($Pair<(F), (G2)>), (G), (G2)>
public static "proj1"<F, G, F2>(arg0: $Type$Type<(F)>, arg1: $Type$Type<(G)>, arg2: $Type$Type<(F2)>): $TypedOptic<($Pair<(F), (G)>), ($Pair<(F2), (G)>), (F), (F2)>
public "outermost"(): $Optic<(any), (S), (T), (any), (any)>
public "sType"(): $Type<(S)>
public "aType"(): $Type<(A)>
public "castOuterUnchecked"<S2, T2>(arg0: $Type$Type<(S2)>, arg1: $Type$Type<(T2)>): $TypedOptic<(S2), (T2), (A), (B)>
public static "compoundListKeys"<K, V, K2>(arg0: $Type$Type<(K)>, arg1: $Type$Type<(K2)>, arg2: $Type$Type<(V)>): $TypedOptic<($List<($Pair<(K), (V)>)>), ($List<($Pair<(K2), (V)>)>), (K), (K2)>
public static "compoundListElements"<K, V, V2>(arg0: $Type$Type<(K)>, arg1: $Type$Type<(V)>, arg2: $Type$Type<(V2)>): $TypedOptic<($List<($Pair<(K), (V)>)>), ($List<($Pair<(K), (V2)>)>), (V), (V2)>
public static "instanceOf"<Proof2 extends $K1>(arg0: $Collection$Type<($TypeToken$Type<(any)>)>, arg1: $TypeToken$Type<(Proof2)>): boolean
public "bType"(): $Type<(B)>
public "tType"(): $Type<(T)>
public "innermost"(): $Optic<(any), (any), (any), (A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedOptic$Type<S, T, A, B> = ($TypedOptic<(S), (T), (A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedOptic_<S, T, A, B> = $TypedOptic$Type<(S), (T), (A), (B)>;
}}
declare module "packages/com/mojang/serialization/$MapDecoder" {
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $MapDecoder<A> extends $Keyable {

 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>): $DataResult<(A)>
 "map"<B>(arg0: $Function$Type<(any), (any)>): $MapDecoder<(B)>
 "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $MapDecoder<(B)>
 "decoder"(): $Decoder<(A)>
 "ap"<E>(arg0: $MapDecoder$Type<($Function$Type<(any), (any)>)>): $MapDecoder<(E)>
 "withLifecycle"(arg0: $Lifecycle$Type): $MapDecoder<(A)>
 "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
 "compressedDecode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
 "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
}

export namespace $MapDecoder {
function forStrings(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecoder$Type<A> = ($MapDecoder<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDecoder_<A> = $MapDecoder$Type<(A)>;
}}
declare module "packages/com/mojang/serialization/$KeyCompressor" {
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $KeyCompressor<T> {

constructor(arg0: $DynamicOps$Type<(T)>, arg1: $Stream$Type<(T)>)

public "compress"(arg0: T): integer
public "compress"(arg0: string): integer
public "size"(): integer
public "decompress"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyCompressor$Type<T> = ($KeyCompressor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyCompressor_<T> = $KeyCompressor$Type<(T)>;
}}
declare module "packages/com/mojang/math/$Transformation" {
import {$IForgeTransformation, $IForgeTransformation$Type} from "packages/net/minecraftforge/common/extensions/$IForgeTransformation"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Transformation implements $IForgeTransformation {
static readonly "CODEC": $Codec<($Transformation)>
static readonly "EXTENDED_CODEC": $Codec<($Transformation)>

constructor(arg0: $Matrix4f$Type)
constructor(arg0: $Vector3f$Type, arg1: $Quaternionf$Type, arg2: $Vector3f$Type, arg3: $Quaternionf$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compose"(arg0: $Transformation$Type): $Transformation
public "getLeftRotation"(): $Quaternionf
public "getScale"(): $Vector3f
public "getTranslation"(): $Vector3f
public "getRightRotation"(): $Quaternionf
public static "identity"(): $Transformation
public "getMatrix"(): $Matrix4f
public "getNormalMatrix"(): $Matrix3f
public "inverse"(): $Transformation
public "slerp"(arg0: $Transformation$Type, arg1: float): $Transformation
public "blockCenterToCorner"(): $Transformation
public "blockCornerToCenter"(): $Transformation
public "rotateTransform"(arg0: $Direction$Type): $Direction
public "isIdentity"(): boolean
public "transformPosition"(arg0: $Vector4f$Type): void
public "transformNormal"(arg0: $Vector3f$Type): void
public "applyOrigin"(arg0: $Vector3f$Type): $Transformation
get "leftRotation"(): $Quaternionf
get "scale"(): $Vector3f
get "translation"(): $Vector3f
get "rightRotation"(): $Quaternionf
get "matrix"(): $Matrix4f
get "normalMatrix"(): $Matrix3f
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
declare module "packages/com/mojang/brigadier/arguments/$StringArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$StringArgumentType$StringType, $StringArgumentType$StringType$Type} from "packages/com/mojang/brigadier/arguments/$StringArgumentType$StringType"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $StringArgumentType implements $ArgumentType<(string)> {


public "toString"(): string
public "getType"(): $StringArgumentType$StringType
public "parse"(arg0: $StringReader$Type): string
public static "string"(): $StringArgumentType
public static "getString"(arg0: $CommandContext$Type<(any)>, arg1: string): string
public "getExamples"(): $Collection<(string)>
public static "greedyString"(): $StringArgumentType
public static "escapeIfRequired"(arg0: string): string
public static "word"(): $StringArgumentType
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "type"(): $StringArgumentType$StringType
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentType$Type = ($StringArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringArgumentType_ = $StringArgumentType$Type;
}}
declare module "packages/com/mojang/brigadier/$CommandDispatcher" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResultConsumer, $ResultConsumer$Type} from "packages/com/mojang/brigadier/$ResultConsumer"
import {$ParseResults, $ParseResults$Type} from "packages/com/mojang/brigadier/$ParseResults"
import {$AmbiguityConsumer, $AmbiguityConsumer$Type} from "packages/com/mojang/brigadier/$AmbiguityConsumer"
import {$RootCommandNode, $RootCommandNode$Type} from "packages/com/mojang/brigadier/tree/$RootCommandNode"
import {$LiteralCommandNode, $LiteralCommandNode$Type} from "packages/com/mojang/brigadier/tree/$LiteralCommandNode"
import {$LiteralArgumentBuilder, $LiteralArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommandDispatcher<S> {
static readonly "ARGUMENT_SEPARATOR": string
static readonly "ARGUMENT_SEPARATOR_CHAR": character

constructor(arg0: $RootCommandNode$Type<(S)>)
constructor()

public "register"(arg0: $LiteralArgumentBuilder$Type<(S)>): $LiteralCommandNode<(S)>
public "execute"(arg0: $ParseResults$Type<(S)>): integer
public "execute"(arg0: $StringReader$Type, arg1: S): integer
public "execute"(arg0: string, arg1: S): integer
public "getRoot"(): $RootCommandNode<(S)>
public "getPath"(arg0: $CommandNode$Type<(S)>): $Collection<(string)>
public "parse"(arg0: $StringReader$Type, arg1: S): $ParseResults<(S)>
public "parse"(arg0: string, arg1: S): $ParseResults<(S)>
public "findNode"(arg0: $Collection$Type<(string)>): $CommandNode<(S)>
public "getSmartUsage"(arg0: $CommandNode$Type<(S)>, arg1: S): $Map<($CommandNode<(S)>), (string)>
public "getAllUsage"(arg0: $CommandNode$Type<(S)>, arg1: S, arg2: boolean): (string)[]
public "findAmbiguities"(arg0: $AmbiguityConsumer$Type<(S)>): void
public "getCompletionSuggestions"(arg0: $ParseResults$Type<(S)>): $CompletableFuture<($Suggestions)>
public "getCompletionSuggestions"(arg0: $ParseResults$Type<(S)>, arg1: integer): $CompletableFuture<($Suggestions)>
public "setConsumer"(arg0: $ResultConsumer$Type<(S)>): void
get "root"(): $RootCommandNode<(S)>
set "consumer"(value: $ResultConsumer$Type<(S)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandDispatcher$Type<S> = ($CommandDispatcher<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandDispatcher_<S> = $CommandDispatcher$Type<(S)>;
}}
declare module "packages/com/mojang/authlib/minecraft/$MinecraftSessionService" {
import {$MinecraftProfileTexture$Type, $MinecraftProfileTexture$Type$Type} from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture$Type"
import {$Property, $Property$Type} from "packages/com/mojang/authlib/properties/$Property"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MinecraftProfileTexture, $MinecraftProfileTexture$Type} from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture"

export interface $MinecraftSessionService {

 "fillProfileProperties"(arg0: $GameProfile$Type, arg1: boolean): $GameProfile
 "getSecurePropertyValue"(arg0: $Property$Type): string
 "joinServer"(arg0: $GameProfile$Type, arg1: string, arg2: string): void
 "getTextures"(arg0: $GameProfile$Type, arg1: boolean): $Map<($MinecraftProfileTexture$Type), ($MinecraftProfileTexture)>
 "hasJoinedServer"(arg0: $GameProfile$Type, arg1: string, arg2: $InetAddress$Type): $GameProfile
}

export namespace $MinecraftSessionService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftSessionService$Type = ($MinecraftSessionService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftSessionService_ = $MinecraftSessionService$Type;
}}
declare module "packages/com/mojang/serialization/$MapCodec$MapCodecCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $MapCodec$MapCodecCodec<A> implements $Codec<(A)> {

constructor(arg0: $MapCodec$Type<(A)>)

public "toString"(): string
public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
public "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
public "codec"(): $MapCodec<(A)>
public static "unit"<A>(arg0: $Supplier$Type<(A)>): $Codec<(A)>
public static "unit"<A>(arg0: A): $Codec<(A)>
public "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>, arg2: $Supplier$Type<(string)>): $MapCodec<(A)>
public static "of"<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>): $Codec<(A)>
public static "of"<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>): $MapCodec<(A)>
public static "of"<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>, arg2: string): $Codec<(A)>
public static "list"<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
public "orElse"(arg0: A): $Codec<(A)>
public "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: A): $Codec<(A)>
public "orElse"(arg0: $Consumer$Type<(string)>, arg1: A): $Codec<(A)>
public static "checkRange"<N extends (number) & ($Comparable<(N)>)>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<(A)>
public "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(A)>
public "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(A)>
public static "pair"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$Type): $MapCodec<(A)>
public "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
public "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
public "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: A, arg3: $Lifecycle$Type): $MapCodec<(A)>
public static "optionalField"<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
public "deprecated"(arg0: integer): $Codec<(A)>
public "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "mapResult"(arg0: $Codec$ResultFunction$Type<(A)>): $Codec<(A)>
public "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
public "promotePartial"(arg0: $Consumer$Type<(string)>): $Codec<(A)>
public "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
public static "mapPair"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "simpleMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
public static "mapEither"<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "compoundList"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public static "either"<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
public static "unboundedMap"<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public "listOf"(): $Codec<($List<(A)>)>
public "stable"(): $Codec<(A)>
public static "empty"<A>(): $MapEncoder<(A)>
public static "error"<A>(arg0: string): $Encoder<(A)>
public "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
public "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): $DataResult<(T)>
public "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
public "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
public "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(A)>
public "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
public "boxed"(): $Decoder$Boxed<(A)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(A)>
public "simple"(): $Decoder$Simple<(A)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(A)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(A)>
public "terminal"(): $Decoder$Terminal<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$MapCodecCodec$Type<A> = ($MapCodec$MapCodecCodec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCodec$MapCodecCodec_<A> = $MapCodec$MapCodecCodec$Type<(A)>;
}}
declare module "packages/com/mojang/serialization/$Decoder$Simple" {
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"

export interface $Decoder$Simple<A> {

 "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>

(arg0: $Dynamic$Type<(T)>): $DataResult<(A)>
}

export namespace $Decoder$Simple {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Simple$Type<A> = ($Decoder$Simple<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder$Simple_<A> = $Decoder$Simple$Type<(A)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$WorldTemplate" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$WorldTemplate$WorldTemplateType, $WorldTemplate$WorldTemplateType$Type} from "packages/com/mojang/realmsclient/dto/$WorldTemplate$WorldTemplateType"

export class $WorldTemplate extends $ValueObject {
 "id": string
 "name": string
 "version": string
 "author": string
 "link": string
 "image": string
 "trailer": string
 "recommendedPlayers": string
 "type": $WorldTemplate$WorldTemplateType

constructor()

public static "parse"(arg0: $JsonObject$Type): $WorldTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplate$Type = ($WorldTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTemplate_ = $WorldTemplate$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$K2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K2 {

}

export namespace $K2 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $K2$Type = ($K2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $K2_ = $K2$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$K1" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $K1 {

}

export namespace $K1 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $K1$Type = ($K1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $K1_ = $K1$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$Effect" {
import {$Program, $Program$Type} from "packages/com/mojang/blaze3d/shaders/$Program"
import {$Shader, $Shader$Type} from "packages/com/mojang/blaze3d/shaders/$Shader"

export interface $Effect extends $Shader {

 "markDirty"(): void
 "getVertexProgram"(): $Program
 "getFragmentProgram"(): $Program
 "getId"(): integer
 "attachToProgram"(): void
}

export namespace $Effect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Effect$Type = ($Effect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Effect_ = $Effect$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$ThirdPartyServerInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbuseReportRequest$ThirdPartyServerInfo {
 "address": string

constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$ThirdPartyServerInfo$Type = ($AbuseReportRequest$ThirdPartyServerInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest$ThirdPartyServerInfo_ = $AbuseReportRequest$ThirdPartyServerInfo$Type;
}}
declare module "packages/com/mojang/blaze3d/platform/$InputConstants$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $InputConstants$Type extends $Enum<($InputConstants$Type)> {
static readonly "KEYSYM": $InputConstants$Type
static readonly "SCANCODE": $InputConstants$Type
static readonly "MOUSE": $InputConstants$Type


public static "values"(): ($InputConstants$Type)[]
public static "valueOf"(arg0: string): $InputConstants$Type
public "getOrCreate"(arg0: integer): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Type$Type = (("mouse") | ("keysym") | ("scancode")) | ($InputConstants$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputConstants$Type_ = $InputConstants$Type$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IForgeVertexConsumer, $IForgeVertexConsumer$Type} from "packages/net/minecraftforge/client/extensions/$IForgeVertexConsumer"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $VertexConsumer extends $IForgeVertexConsumer {

 "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
 "endVertex"(): void
 "uv"(arg0: float, arg1: float): $VertexConsumer
 "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "uv2"(arg0: integer, arg1: integer): $VertexConsumer
 "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
 "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
 "overlayCoords"(arg0: integer): $VertexConsumer
 "uv2"(arg0: integer): $VertexConsumer
 "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
 "unsetDefaultColor"(): void
 "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
 "color"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
 "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
 "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
}

export namespace $VertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexConsumer$Type = ($VertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexConsumer_ = $VertexConsumer$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$WorldTemplate$WorldTemplateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WorldTemplate$WorldTemplateType extends $Enum<($WorldTemplate$WorldTemplateType)> {
static readonly "WORLD_TEMPLATE": $WorldTemplate$WorldTemplateType
static readonly "MINIGAME": $WorldTemplate$WorldTemplateType
static readonly "ADVENTUREMAP": $WorldTemplate$WorldTemplateType
static readonly "EXPERIENCE": $WorldTemplate$WorldTemplateType
static readonly "INSPIRATION": $WorldTemplate$WorldTemplateType


public static "values"(): ($WorldTemplate$WorldTemplateType)[]
public static "valueOf"(arg0: string): $WorldTemplate$WorldTemplateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTemplate$WorldTemplateType$Type = (("minigame") | ("world_template") | ("inspiration") | ("adventuremap") | ("experience")) | ($WorldTemplate$WorldTemplateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTemplate$WorldTemplateType_ = $WorldTemplate$WorldTemplateType$Type;
}}
declare module "packages/com/mojang/authlib/$UserType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UserType extends $Enum<($UserType)> {
static readonly "LEGACY": $UserType
static readonly "MOJANG": $UserType


public "getName"(): string
public static "values"(): ($UserType)[]
public static "valueOf"(arg0: string): $UserType
public static "byName"(arg0: string): $UserType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UserType$Type = (("legacy") | ("mojang")) | ($UserType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UserType_ = $UserType$Type;
}}
declare module "packages/com/mojang/serialization/$CompressorHolder" {
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Compressable, $Compressable$Type} from "packages/com/mojang/serialization/$Compressable"

export class $CompressorHolder implements $Compressable {

constructor()

public "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
public "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
public static "forStrings"(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorHolder$Type = ($CompressorHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorHolder_ = $CompressorHolder$Type;
}}
declare module "packages/com/mojang/realmsclient/gui/task/$RepeatedDelayStrategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RepeatedDelayStrategy {

 "delayCyclesAfterSuccess"(): long
 "delayCyclesAfterFailure"(): long
}

export namespace $RepeatedDelayStrategy {
const CONSTANT: $RepeatedDelayStrategy
function exponentialBackoff(arg0: integer): $RepeatedDelayStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatedDelayStrategy$Type = ($RepeatedDelayStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatedDelayStrategy_ = $RepeatedDelayStrategy$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexBuffer" {
import {$VertexBuffer$Usage, $VertexBuffer$Usage$Type} from "packages/com/mojang/blaze3d/vertex/$VertexBuffer$Usage"
import {$BufferBuilder$RenderedBuffer, $BufferBuilder$RenderedBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer"
import {$VertexBufferHelper, $VertexBufferHelper$Type} from "packages/net/irisshaders/iris/helpers/$VertexBufferHelper"
import {$ShaderInstance, $ShaderInstance$Type} from "packages/net/minecraft/client/renderer/$ShaderInstance"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$VertexFormat, $VertexFormat$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $VertexBuffer implements $AutoCloseable, $VertexBufferHelper {

constructor(arg0: $VertexBuffer$Usage$Type)

public "drawWithShader"(arg0: $Matrix4f$Type, arg1: $Matrix4f$Type, arg2: $ShaderInstance$Type): void
public "close"(): void
public "isInvalid"(): boolean
public "draw"(): void
public "restoreBinding"(): void
public "getFormat"(): $VertexFormat
public "saveBinding"(): void
public "upload"(arg0: $BufferBuilder$RenderedBuffer$Type): void
public "bind"(): void
public static "unbind"(): void
get "invalid"(): boolean
get "format"(): $VertexFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBuffer$Type = ($VertexBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBuffer_ = $VertexBuffer$Type;
}}
declare module "packages/com/mojang/brigadier/$AmbiguityConsumer" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"

export interface $AmbiguityConsumer<S> {

 "ambiguous"(arg0: $CommandNode$Type<(S)>, arg1: $CommandNode$Type<(S)>, arg2: $CommandNode$Type<(S)>, arg3: $Collection$Type<(string)>): void

(arg0: $CommandNode$Type<(S)>, arg1: $CommandNode$Type<(S)>, arg2: $CommandNode$Type<(S)>, arg3: $Collection$Type<(string)>): void
}

export namespace $AmbiguityConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbiguityConsumer$Type<S> = ($AmbiguityConsumer<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmbiguityConsumer_<S> = $AmbiguityConsumer$Type<(S)>;
}}
declare module "packages/com/mojang/brigadier/builder/$RequiredArgumentBuilder" {
import {$ArgumentCommandNode, $ArgumentCommandNode$Type} from "packages/com/mojang/brigadier/tree/$ArgumentCommandNode"
import {$SuggestionProvider, $SuggestionProvider$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ArgumentBuilder, $ArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$ArgumentBuilder"

export class $RequiredArgumentBuilder<S, T> extends $ArgumentBuilder<(S), ($RequiredArgumentBuilder<(S), (T)>)> {


public "build"(): $ArgumentCommandNode<(S), (T)>
public "getName"(): string
public "getType"(): $ArgumentType<(T)>
public static "argument"<S, T>(arg0: string, arg1: $ArgumentType$Type<(T)>): $RequiredArgumentBuilder<(S), (T)>
public "suggests"(arg0: $SuggestionProvider$Type<(S)>): $RequiredArgumentBuilder<(S), (T)>
public "getSuggestionsProvider"(): $SuggestionProvider<(S)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
get "suggestionsProvider"(): $SuggestionProvider<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequiredArgumentBuilder$Type<S, T> = ($RequiredArgumentBuilder<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequiredArgumentBuilder_<S, T> = $RequiredArgumentBuilder$Type<(S), (T)>;
}}
declare module "packages/com/mojang/blaze3d/font/$SheetGlyphInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheetGlyphInfo {

 "isColored"(): boolean
 "getPixelHeight"(): integer
 "upload"(arg0: integer, arg1: integer): void
 "getRight"(): float
 "getLeft"(): float
 "getUp"(): float
 "getPixelWidth"(): integer
 "getDown"(): float
 "getBearingX"(): float
 "getBearingY"(): float
 "getOversample"(): float
}

export namespace $SheetGlyphInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SheetGlyphInfo$Type = ($SheetGlyphInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SheetGlyphInfo_ = $SheetGlyphInfo$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/response/$Response" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Response {

constructor()

public "getCause"(): string
public "getErrorMessage"(): string
public "getError"(): string
get "cause"(): string
get "errorMessage"(): string
get "error"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Response$Type = ($Response);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Response_ = $Response$Type;
}}
declare module "packages/com/mojang/brigadier/$RedirectModifier" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $RedirectModifier<S> {

 "apply"(arg0: $CommandContext$Type<(S)>): $Collection<(S)>

(arg0: $CommandContext$Type<(S)>): $Collection<(S)>
}

export namespace $RedirectModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedirectModifier$Type<S> = ($RedirectModifier<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedirectModifier_<S> = $RedirectModifier$Type<(S)>;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VertexFormat$Mode extends $Enum<($VertexFormat$Mode)> {
static readonly "LINES": $VertexFormat$Mode
static readonly "LINE_STRIP": $VertexFormat$Mode
static readonly "DEBUG_LINES": $VertexFormat$Mode
static readonly "DEBUG_LINE_STRIP": $VertexFormat$Mode
static readonly "TRIANGLES": $VertexFormat$Mode
static readonly "TRIANGLE_STRIP": $VertexFormat$Mode
static readonly "TRIANGLE_FAN": $VertexFormat$Mode
static readonly "QUADS": $VertexFormat$Mode
readonly "asGLMode": integer
readonly "primitiveLength": integer
readonly "primitiveStride": integer
readonly "connectedPrimitives": boolean


public static "values"(): ($VertexFormat$Mode)[]
public static "valueOf"(arg0: string): $VertexFormat$Mode
public "indexCount"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormat$Mode$Type = (("triangles") | ("triangle_fan") | ("quads") | ("line_strip") | ("lines") | ("debug_line_strip") | ("triangle_strip") | ("debug_lines")) | ($VertexFormat$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormat$Mode_ = $VertexFormat$Mode$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$ServerActivityList" {
import {$ServerActivity, $ServerActivity$Type} from "packages/com/mojang/realmsclient/dto/$ServerActivity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $ServerActivityList extends $ValueObject {
 "periodInMillis": long
 "serverActivities": $List<($ServerActivity)>

constructor()

public static "parse"(arg0: string): $ServerActivityList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerActivityList$Type = ($ServerActivityList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerActivityList_ = $ServerActivityList$Type;
}}
declare module "packages/com/mojang/serialization/$DataResult" {
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$DataResult$Mu, $DataResult$Mu$Type} from "packages/com/mojang/serialization/$DataResult$Mu"
import {$DataResult$Instance, $DataResult$Instance$Type} from "packages/com/mojang/serialization/$DataResult$Instance"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$DataResult$PartialResult, $DataResult$PartialResult$Type} from "packages/com/mojang/serialization/$DataResult$PartialResult"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export class $DataResult<R> implements $App<($DataResult$Mu), (R)> {


public static "instance"(): $DataResult$Instance
public "get"(): $Either<(R), ($DataResult$PartialResult<(R)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "map"<T>(arg0: $Function$Type<(any), (any)>): $DataResult<(T)>
public "result"(): $Optional<(R)>
public "flatMap"<R2>(arg0: $Function$Type<(any), (any)>): $DataResult<(R2)>
public static "error"<R>(arg0: $Supplier$Type<(string)>): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$Type<(string)>, arg1: R): $DataResult<(R)>
public "error"(): $Optional<($DataResult$PartialResult<(R)>)>
public static "error"<R>(arg0: $Supplier$Type<(string)>, arg1: R, arg2: $Lifecycle$Type): $DataResult<(R)>
public static "error"<R>(arg0: $Supplier$Type<(string)>, arg1: $Lifecycle$Type): $DataResult<(R)>
public static "unbox"<R>(arg0: $App$Type<($DataResult$Mu$Type), (R)>): $DataResult<(R)>
public "ap"<R2>(arg0: $DataResult$Type<($Function$Type<(R), (R2)>)>): $DataResult<(R2)>
public static "success"<R>(arg0: R, arg1: $Lifecycle$Type): $DataResult<(R)>
public static "success"<R>(arg0: R): $DataResult<(R)>
public "promotePartial"(arg0: $Consumer$Type<(string)>): $DataResult<(R)>
public "lifecycle"(): $Lifecycle
public "setLifecycle"(arg0: $Lifecycle$Type): $DataResult<(R)>
public "setPartial"(arg0: R): $DataResult<(R)>
public "setPartial"(arg0: $Supplier$Type<(R)>): $DataResult<(R)>
public "mapError"(arg0: $UnaryOperator$Type<(string)>): $DataResult<(R)>
public "apply3"<R2, R3, S>(arg0: $Function3$Type<(R), (R2), (R3), (S)>, arg1: $DataResult$Type<(R2)>, arg2: $DataResult$Type<(R3)>): $DataResult<(S)>
public "apply2"<R2, S>(arg0: $BiFunction$Type<(R), (R2), (S)>, arg1: $DataResult$Type<(R2)>): $DataResult<(S)>
public "getOrThrow"(arg0: boolean, arg1: $Consumer$Type<(string)>): R
public static "partialGet"<K, V>(arg0: $Function$Type<(K), (V)>, arg1: $Supplier$Type<(string)>): $Function<(K), ($DataResult<(V)>)>
public "resultOrPartial"(arg0: $Consumer$Type<(string)>): $Optional<(R)>
public "apply2stable"<R2, S>(arg0: $BiFunction$Type<(R), (R2), (S)>, arg1: $DataResult$Type<(R2)>): $DataResult<(S)>
public "addLifecycle"(arg0: $Lifecycle$Type): $DataResult<(R)>
set "partial"(value: R)
set "partial"(value: $Supplier$Type<(R)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Type<R> = ($DataResult<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult_<R> = $DataResult$Type<(R)>;
}}
declare module "packages/com/mojang/blaze3d/platform/$NativeImage" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$NativeImageAccessor, $NativeImageAccessor$Type} from "packages/me/jellysquid/mods/sodium/mixin/features/textures/$NativeImageAccessor"
import {$File, $File$Type} from "packages/java/io/$File"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$STBTTFontinfo, $STBTTFontinfo$Type} from "packages/org/lwjgl/stb/$STBTTFontinfo"
import {$NativeImage$Format, $NativeImage$Format$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage$Format"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$IntUnaryOperator, $IntUnaryOperator$Type} from "packages/java/util/function/$IntUnaryOperator"

export class $NativeImage implements $AutoCloseable, $NativeImageAccessor {
 "pixels": long

constructor(arg0: $NativeImage$Format$Type, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "toString"(): string
public "close"(): void
public "getPixelsRGBA"(): (integer)[]
public "getHeight"(): integer
public "getWidth"(): integer
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void
public static "read"(arg0: $InputStream$Type): $NativeImage
public "resizeSubRectTo"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $NativeImage$Type): void
public static "read"(arg0: (byte)[]): $NativeImage
public static "read"(arg0: $NativeImage$Format$Type, arg1: $InputStream$Type): $NativeImage
public "format"(): $NativeImage$Format
public static "read"(arg0: $NativeImage$Format$Type, arg1: $ByteBuffer$Type): $NativeImage
public static "read"(arg0: $ByteBuffer$Type): $NativeImage
public "getRedOrLuminance"(arg0: integer, arg1: integer): byte
public "setPixelLuminance"(arg0: integer, arg1: integer, arg2: byte): void
public "getGreenOrLuminance"(arg0: integer, arg1: integer): byte
public "mappedCopy"(arg0: $IntUnaryOperator$Type): $NativeImage
public "applyToAllPixels"(arg0: $IntUnaryOperator$Type): void
public "getBlueOrLuminance"(arg0: integer, arg1: integer): byte
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "getLuminanceOrAlpha"(arg0: integer, arg1: integer): byte
/**
 * 
 * @deprecated
 */
public "makePixelArray"(): (integer)[]
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "blendPixel"(arg0: integer, arg1: integer, arg2: integer): void
public "writeToFile"(arg0: $File$Type): void
public "downloadTexture"(arg0: integer, arg1: boolean): void
public "downloadDepthBuffer"(arg0: float): void
public "drawPixels"(): void
public "copyFromFont"(arg0: $STBTTFontinfo$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer): void
public "asByteArray"(): (byte)[]
public "flipY"(): void
public "copyRect"(arg0: $NativeImage$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "copyRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): void
public "untrack"(): void
public "copyFrom"(arg0: $NativeImage$Type): void
public "getPixelRGBA"(arg0: integer, arg1: integer): integer
public "setPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): void
public "writeToFile"(arg0: $Path$Type): void
get "pixelsRGBA"(): (integer)[]
get "height"(): integer
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$Type = ($NativeImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImage_ = $NativeImage$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$Subscription" {
import {$Subscription$SubscriptionType, $Subscription$SubscriptionType$Type} from "packages/com/mojang/realmsclient/dto/$Subscription$SubscriptionType"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $Subscription extends $ValueObject {
 "startDate": long
 "daysLeft": integer
 "type": $Subscription$SubscriptionType

constructor()

public static "parse"(arg0: string): $Subscription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subscription$Type = ($Subscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Subscription_ = $Subscription$Type;
}}
declare module "packages/com/mojang/blaze3d/platform/$Window" {
import {$ScreenManager, $ScreenManager$Type} from "packages/com/mojang/blaze3d/platform/$ScreenManager"
import {$VideoMode, $VideoMode$Type} from "packages/com/mojang/blaze3d/platform/$VideoMode"
import {$Monitor, $Monitor$Type} from "packages/com/mojang/blaze3d/platform/$Monitor"
import {$WindowEventHandler, $WindowEventHandler$Type} from "packages/com/mojang/blaze3d/platform/$WindowEventHandler"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$WindowKJS, $WindowKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$WindowKJS"
import {$DisplayData, $DisplayData$Type} from "packages/com/mojang/blaze3d/platform/$DisplayData"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$IconSet, $IconSet$Type} from "packages/com/mojang/blaze3d/platform/$IconSet"
import {$PackResources, $PackResources$Type} from "packages/net/minecraft/server/packs/$PackResources"
import {$IoSupplier, $IoSupplier$Type} from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export class $Window implements $AutoCloseable, $WindowKJS {
readonly "window": long

constructor(arg0: $WindowEventHandler$Type, arg1: $ScreenManager$Type, arg2: $DisplayData$Type, arg3: string, arg4: string)

public "toggleFullScreen"(): void
public "close"(): void
public "defaultErrorCallback"(arg0: integer, arg1: long): void
public "getRefreshRate"(): integer
public "setPreferredFullscreenVideoMode"(arg0: $Optional$Type<($VideoMode$Type)>): void
public "getX"(): integer
public "getY"(): integer
public "findBestMonitor"(): $Monitor
public "changeFullscreenVideoMode"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getGuiScaledHeight"(): integer
public "getGuiScaledWidth"(): integer
public "updateRawMouseInput"(arg0: boolean): void
public "setWindowed"(arg0: integer, arg1: integer): void
public "updateVsync"(arg0: boolean): void
public "setDefaultErrorCallback"(): void
public "setTitle"(arg0: string): void
public "shouldClose"(): boolean
public "updateDisplay"(): void
public "setGuiScale"(arg0: double): void
public "getFramerateLimit"(): integer
public "calculateScale"(arg0: integer, arg1: boolean): integer
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "isFullscreen"(): boolean
public "getWindow"(): long
public "setIcon"(arg0: $PackResources$Type, arg1: $IconSet$Type): void
public "setFramerateLimit"(arg0: integer): void
public "setErrorSection"(arg0: string): void
public "getGuiScale"(): double
public "setHeight"(arg0: integer): void
public "setWidth"(arg0: integer): void
public static "checkGlfwError"(arg0: $BiConsumer$Type<(integer), (string)>): void
public "getPreferredFullscreenVideoMode"(): $Optional<($VideoMode)>
public "kjs$loadIcons"(original: $List$Type<($IoSupplier$Type<($InputStream$Type)>)>): $List<($IoSupplier<($InputStream)>)>
get "refreshRate"(): integer
set "preferredFullscreenVideoMode"(value: $Optional$Type<($VideoMode$Type)>)
get "x"(): integer
get "y"(): integer
get "width"(): integer
get "height"(): integer
get "guiScaledHeight"(): integer
get "guiScaledWidth"(): integer
set "title"(value: string)
set "guiScale"(value: double)
get "framerateLimit"(): integer
get "screenWidth"(): integer
get "screenHeight"(): integer
get "fullscreen"(): boolean
get "window"(): long
set "framerateLimit"(value: integer)
set "errorSection"(value: string)
get "guiScale"(): double
set "height"(value: integer)
set "width"(value: integer)
get "preferredFullscreenVideoMode"(): $Optional<($VideoMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Window$Type = ($Window);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Window_ = $Window$Type;
}}
declare module "packages/com/mojang/datafixers/types/families/$TypeFamily" {
import {$FamilyOptic, $FamilyOptic$Type} from "packages/com/mojang/datafixers/$FamilyOptic"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"

export interface $TypeFamily {

 "apply"(arg0: integer): $Type<(any)>

(arg0: integer): $Type<(any)>
}

export namespace $TypeFamily {
function familyOptic<A, B>(arg0: $IntFunction$Type<($TypedOptic$Type<(any), (any), (A), (B)>)>): $FamilyOptic<(A), (B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFamily$Type = ($TypeFamily);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFamily_ = $TypeFamily$Type;
}}
declare module "packages/com/mojang/serialization/$MapCodec$ResultFunction" {
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"

export interface $MapCodec$ResultFunction<A> {

 "apply"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>, arg2: $DataResult$Type<(A)>): $DataResult<(A)>
 "coApply"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
}

export namespace $MapCodec$ResultFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$ResultFunction$Type<A> = ($MapCodec$ResultFunction<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCodec$ResultFunction_<A> = $MapCodec$ResultFunction$Type<(A)>;
}}
declare module "packages/com/mojang/blaze3d/vertex/$PoseStack" {
import {$PoseStackAccessor, $PoseStackAccessor$Type} from "packages/org/embeddedt/modernfix/forge/mixin/bugfix/entity_pose_stack/$PoseStackAccessor"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$TransformStack, $TransformStack$Type} from "packages/com/jozufozu/flywheel/util/transform/$TransformStack"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"
import {$CachingPoseStack, $CachingPoseStack$Type} from "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack"
import {$IForgePoseStack, $IForgePoseStack$Type} from "packages/net/minecraftforge/client/extensions/$IForgePoseStack"

export class $PoseStack implements $IForgePoseStack, $CachingPoseStack, $PoseStackAccessor, $TransformStack {
readonly "poseStack": $Deque<($PoseStack$Pose)>

constructor()

public "mulPoseMatrix"(arg0: $Matrix4f$Type): void
public "pushPose"(): void
public "translate"(arg0: float, arg1: float, arg2: float): void
public "scale"(arg0: float, arg1: float, arg2: float): void
public "popPose"(): void
public "multiply"(arg0: $Quaternionf$Type): $TransformStack
public "scale"(arg0: float, arg1: float, arg2: float): $TransformStack
public "setIdentity"(): void
public "last"(): $PoseStack$Pose
public "mulPose"(arg0: $Quaternionf$Type): void
public "translate"(arg0: double, arg1: double, arg2: double): void
public "clear"(): boolean
public "rotateAround"(arg0: $Quaternionf$Type, arg1: float, arg2: float, arg3: float): void
public "popPose"(): $TransformStack
public "embeddium$setCachingEnabled"(arg0: boolean): void
public "translate"(arg0: double, arg1: double, arg2: double): $TransformStack
public "pushTransformation"(arg0: $Transformation$Type): void
public static "cast"(arg0: $PoseStack$Type): $TransformStack
public "transform"(arg0: $Matrix4f$Type, arg1: $Matrix3f$Type): $TransformStack
public "transform"(arg0: $PoseStack$Type): $TransformStack
public "mulNormal"(arg0: $Matrix3f$Type): $TransformStack
public "mulPose"(arg0: $Matrix4f$Type): $TransformStack
public "rotateCentered"(arg0: $Direction$Type, arg1: float): $TransformStack
public "rotateCentered"(arg0: $Quaternionf$Type): $TransformStack
public "translateAll"(arg0: double): $TransformStack
public "translateX"(arg0: double): $TransformStack
public "translateBack"(arg0: $Vec3$Type): $TransformStack
public "translateBack"(arg0: $Vec3i$Type): $TransformStack
public "translateBack"(arg0: double, arg1: double, arg2: double): $TransformStack
public "nudge"(arg0: integer): $TransformStack
public "translateY"(arg0: double): $TransformStack
public "translateZ"(arg0: double): $TransformStack
public "unCentre"(): $TransformStack
public "centre"(): $TransformStack
public "translate"(arg0: $Vector3f$Type): $TransformStack
public "translate"(arg0: $Vec3$Type): $TransformStack
public "translate"(arg0: $Vec3i$Type): $TransformStack
public "multiply"(arg0: $Vector3f$Type, arg1: double): $TransformStack
public "multiply"(arg0: $Axis$Type, arg1: double): $TransformStack
public "rotate"(arg0: double, arg1: $Direction$Axis$Type): $TransformStack
public "rotate"(arg0: $Direction$Type, arg1: float): $TransformStack
public "rotateX"(arg0: double): $TransformStack
public "rotateY"(arg0: double): $TransformStack
public "rotateZ"(arg0: double): $TransformStack
public "rotateToFace"(arg0: $Direction$Type): $TransformStack
public "rotateXRadians"(arg0: double): $TransformStack
public "multiplyRadians"(arg0: $Vector3f$Type, arg1: double): $TransformStack
public "multiplyRadians"(arg0: $Axis$Type, arg1: double): $TransformStack
public "rotateYRadians"(arg0: double): $TransformStack
public "rotateZRadians"(arg0: double): $TransformStack
public "scale"(arg0: float): $TransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStack$Type = ($PoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStack_ = $PoseStack$Type;
}}
declare module "packages/com/mojang/brigadier/context/$StringRange" {
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"

export class $StringRange {

constructor(arg0: integer, arg1: integer)

public "get"(arg0: string): string
public "get"(arg0: $ImmutableStringReader$Type): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLength"(): integer
public "isEmpty"(): boolean
public static "at"(arg0: integer): $StringRange
public static "between"(arg0: integer, arg1: integer): $StringRange
public "getStart"(): integer
public static "encompassing"(arg0: $StringRange$Type, arg1: $StringRange$Type): $StringRange
public "getEnd"(): integer
get "length"(): integer
get "empty"(): boolean
get "start"(): integer
get "end"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringRange$Type = ($StringRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringRange_ = $StringRange$Type;
}}
declare module "packages/com/mojang/blaze3d/audio/$Library" {
import {$Channel, $Channel$Type} from "packages/com/mojang/blaze3d/audio/$Channel"
import {$Listener, $Listener$Type} from "packages/com/mojang/blaze3d/audio/$Listener"
import {$Library$Pool, $Library$Pool$Type} from "packages/com/mojang/blaze3d/audio/$Library$Pool"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Library {

constructor()

public "getListener"(): $Listener
public "init"(arg0: string, arg1: boolean): void
public "cleanup"(): void
public "isCurrentDeviceDisconnected"(): boolean
public "getDebugString"(): string
public "getAvailableSoundDevices"(): $List<(string)>
public "hasDefaultDeviceChanged"(): boolean
public "getCurrentDeviceName"(): string
public static "getDefaultDeviceName"(): string
public "acquireChannel"(arg0: $Library$Pool$Type): $Channel
public "releaseChannel"(arg0: $Channel$Type): void
get "listener"(): $Listener
get "currentDeviceDisconnected"(): boolean
get "debugString"(): string
get "availableSoundDevices"(): $List<(string)>
get "currentDeviceName"(): string
get "defaultDeviceName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Library$Type = ($Library);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Library_ = $Library$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder" {
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$Type} from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu"
import {$RecordCodecBuilder$Instance, $RecordCodecBuilder$Instance$Type} from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RecordCodecBuilder<O, F> implements $App<($RecordCodecBuilder$Mu<(O)>), (F)> {


public static "instance"<O>(): $RecordCodecBuilder$Instance<(O)>
public static "build"<O>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (O)>): $MapCodec<(O)>
public static "of"<O, F>(arg0: $Function$Type<(O), (F)>, arg1: $MapCodec$Type<(F)>): $RecordCodecBuilder<(O), (F)>
public static "of"<O, F>(arg0: $Function$Type<(O), (F)>, arg1: string, arg2: $Codec$Type<(F)>): $RecordCodecBuilder<(O), (F)>
public static "create"<O>(arg0: $Function$Type<($RecordCodecBuilder$Instance$Type<(O)>), (any)>): $Codec<(O)>
public static "unbox"<O, F>(arg0: $App$Type<($RecordCodecBuilder$Mu$Type<(O)>), (F)>): $RecordCodecBuilder<(O), (F)>
public static "point"<O, F>(arg0: F): $RecordCodecBuilder<(O), (F)>
public static "point"<O, F>(arg0: F, arg1: $Lifecycle$Type): $RecordCodecBuilder<(O), (F)>
public static "deprecated"<O, F>(arg0: F, arg1: integer): $RecordCodecBuilder<(O), (F)>
public static "mapCodec"<O>(arg0: $Function$Type<($RecordCodecBuilder$Instance$Type<(O)>), (any)>): $MapCodec<(O)>
public "dependent"<E>(arg0: $Function$Type<(O), (E)>, arg1: $MapEncoder$Type<(E)>, arg2: $Function$Type<(any), (any)>): $RecordCodecBuilder<(O), (E)>
public static "stable"<O, F>(arg0: F): $RecordCodecBuilder<(O), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Type<O, F> = ($RecordCodecBuilder<(O), (F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder_<O, F> = $RecordCodecBuilder$Type<(O), (F)>;
}}
declare module "packages/com/mojang/brigadier/builder/$ArgumentBuilder" {
import {$Command, $Command$Type} from "packages/com/mojang/brigadier/$Command"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$SingleRedirectModifier, $SingleRedirectModifier$Type} from "packages/com/mojang/brigadier/$SingleRedirectModifier"
import {$RedirectModifier, $RedirectModifier$Type} from "packages/com/mojang/brigadier/$RedirectModifier"

export class $ArgumentBuilder<S, T extends $ArgumentBuilder<(S), (T)>> {

constructor()

public "forward"(arg0: $CommandNode$Type<(S)>, arg1: $RedirectModifier$Type<(S)>, arg2: boolean): T
public "build"(): $CommandNode<(S)>
public "fork"(arg0: $CommandNode$Type<(S)>, arg1: $RedirectModifier$Type<(S)>): T
public "requires"(arg0: $Predicate$Type<(S)>): T
public "redirect"(arg0: $CommandNode$Type<(S)>, arg1: $SingleRedirectModifier$Type<(S)>): T
public "redirect"(arg0: $CommandNode$Type<(S)>): T
public "executes"(arg0: $Command$Type<(S)>): T
public "getRequirement"(): $Predicate<(S)>
public "getRedirect"(): $CommandNode<(S)>
public "isFork"(): boolean
public "getCommand"(): $Command<(S)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "getArguments"(): $Collection<($CommandNode<(S)>)>
public "then"(arg0: $CommandNode$Type<(S)>): T
public "then"(arg0: $ArgumentBuilder$Type<(S), (any)>): T
get "requirement"(): $Predicate<(S)>
get "command"(): $Command<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
get "arguments"(): $Collection<($CommandNode<(S)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentBuilder$Type<S, T> = ($ArgumentBuilder<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentBuilder_<S, T> = $ArgumentBuilder$Type<(S), (T)>;
}}
declare module "packages/com/mojang/blaze3d/font/$GlyphInfo" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SheetGlyphInfo, $SheetGlyphInfo$Type} from "packages/com/mojang/blaze3d/font/$SheetGlyphInfo"
import {$BakedGlyph, $BakedGlyph$Type} from "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph"

export interface $GlyphInfo {

 "getShadowOffset"(): float
 "getAdvance"(arg0: boolean): float
 "bake"(arg0: $Function$Type<($SheetGlyphInfo$Type), ($BakedGlyph$Type)>): $BakedGlyph
 "getBoldOffset"(): float
 "getAdvance"(): float
}

export namespace $GlyphInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphInfo$Type = ($GlyphInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphInfo_ = $GlyphInfo$Type;
}}
declare module "packages/com/mojang/datafixers/$OpticFinder" {
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"

export interface $OpticFinder<FT> {

 "type"(): $Type<(FT)>
 "inField"<GT>(arg0: string, arg1: $Type$Type<(GT)>): $OpticFinder<(FT)>
 "findType"<A, FR>(arg0: $Type$Type<(A)>, arg1: $Type$Type<(FR)>, arg2: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
 "findType"<A>(arg0: $Type$Type<(A)>, arg1: boolean): $Either<($TypedOptic<(A), (any), (FT), (FT)>), ($Type$FieldNotFoundException)>
}

export namespace $OpticFinder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpticFinder$Type<FT> = ($OpticFinder<(FT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpticFinder_<FT> = $OpticFinder$Type<(FT)>;
}}
declare module "packages/com/mojang/realmsclient/client/$RealmsClient$Environment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $RealmsClient$Environment extends $Enum<($RealmsClient$Environment)> {
static readonly "PRODUCTION": $RealmsClient$Environment
static readonly "STAGE": $RealmsClient$Environment
static readonly "LOCAL": $RealmsClient$Environment
 "baseUrl": string
 "protocol": string


public static "byName"(arg0: string): $Optional<($RealmsClient$Environment)>
public static "values"(): ($RealmsClient$Environment)[]
public static "valueOf"(arg0: string): $RealmsClient$Environment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$Environment$Type = (("stage") | ("production") | ("local")) | ($RealmsClient$Environment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsClient$Environment_ = $RealmsClient$Environment$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Function8" {
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
 "curry"(): $Function<(T1), ($Function7<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function6<(T3), (T4), (T5), (T6), (T7), (T8), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function4<(T5), (T6), (T7), (T8), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($Function<(T8), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function3<(T6), (T7), (T8), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($BiFunction<(T7), (T8), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function5<(T4), (T5), (T6), (T7), (T8), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R
}

export namespace $Function8 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function8$Type<T1, T2, T3, T4, T5, T6, T7, T8, R> = ($Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R> = $Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function7" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function7<T1, T2, T3, T4, T5, T6, T7, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
 "curry"(): $Function<(T1), ($Function6<(T2), (T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function5<(T3), (T4), (T5), (T6), (T7), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function3<(T5), (T6), (T7), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($BiFunction<(T6), (T7), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function<(T7), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function4<(T4), (T5), (T6), (T7), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R
}

export namespace $Function7 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function7$Type<T1, T2, T3, T4, T5, T6, T7, R> = ($Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function7_<T1, T2, T3, T4, T5, T6, T7, R> = $Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function6" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function6<T1, T2, T3, T4, T5, T6, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
 "curry"(): $Function<(T1), ($Function5<(T2), (T3), (T4), (T5), (T6), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function4<(T3), (T4), (T5), (T6), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($BiFunction<(T5), (T6), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function<(T6), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function3<(T4), (T5), (T6), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R
}

export namespace $Function6 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function6$Type<T1, T2, T3, T4, T5, T6, R> = ($Function6<(T1), (T2), (T3), (T4), (T5), (T6), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function6_<T1, T2, T3, T4, T5, T6, R> = $Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function5" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function5<T1, T2, T3, T4, T5, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
 "curry"(): $Function<(T1), ($Function4<(T2), (T3), (T4), (T5), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function3<(T3), (T4), (T5), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function<(T5), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($BiFunction<(T4), (T5), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R
}

export namespace $Function5 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function5$Type<T1, T2, T3, T4, T5, R> = ($Function5<(T1), (T2), (T3), (T4), (T5), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function5_<T1, T2, T3, T4, T5, R> = $Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function9" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"

export interface $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
 "curry"(): $Function<(T1), ($Function8<(T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function7<(T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry4"(): $Function4<(T1), (T2), (T3), (T4), ($Function5<(T5), (T6), (T7), (T8), (T9), (R)>)>
 "curry8"(): $Function8<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), ($Function<(T9), (R)>)>
 "curry7"(): $Function7<(T1), (T2), (T3), (T4), (T5), (T6), (T7), ($BiFunction<(T8), (T9), (R)>)>
 "curry5"(): $Function5<(T1), (T2), (T3), (T4), (T5), ($Function4<(T6), (T7), (T8), (T9), (R)>)>
 "curry6"(): $Function6<(T1), (T2), (T3), (T4), (T5), (T6), ($Function3<(T7), (T8), (T9), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function6<(T4), (T5), (T6), (T7), (T8), (T9), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R
}

export namespace $Function9 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function9$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = ($Function9<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = $Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>;
}}
declare module "packages/com/mojang/authlib/$BaseAuthenticationService" {
import {$Agent, $Agent$Type} from "packages/com/mojang/authlib/$Agent"
import {$UserAuthentication, $UserAuthentication$Type} from "packages/com/mojang/authlib/$UserAuthentication"
import {$GameProfileRepository, $GameProfileRepository$Type} from "packages/com/mojang/authlib/$GameProfileRepository"
import {$MinecraftSessionService, $MinecraftSessionService$Type} from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"
import {$AuthenticationService, $AuthenticationService$Type} from "packages/com/mojang/authlib/$AuthenticationService"

export class $BaseAuthenticationService implements $AuthenticationService {

constructor()

public "createProfileRepository"(): $GameProfileRepository
public "createUserAuthentication"(arg0: $Agent$Type): $UserAuthentication
public "createMinecraftSessionService"(): $MinecraftSessionService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseAuthenticationService$Type = ($BaseAuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseAuthenticationService_ = $BaseAuthenticationService$Type;
}}
declare module "packages/com/mojang/realmsclient/util/$LevelType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LevelType extends $Enum<($LevelType)> {
static readonly "DEFAULT": $LevelType
static readonly "FLAT": $LevelType
static readonly "LARGE_BIOMES": $LevelType
static readonly "AMPLIFIED": $LevelType


public "getDtoIndex"(): integer
public "getName"(): $Component
public static "values"(): ($LevelType)[]
public static "valueOf"(arg0: string): $LevelType
get "dtoIndex"(): integer
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelType$Type = (("default") | ("large_biomes") | ("flat") | ("amplified")) | ($LevelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelType_ = $LevelType$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$App" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export interface $App<F extends $K1, A> {

}

export namespace $App {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $App$Type<F, A> = ($App<(F), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $App_<F, A> = $App$Type<(F), (A)>;
}}
declare module "packages/com/mojang/realmsclient/util/$RealmsPersistence" {
import {$RealmsPersistence$RealmsPersistenceData, $RealmsPersistence$RealmsPersistenceData$Type} from "packages/com/mojang/realmsclient/util/$RealmsPersistence$RealmsPersistenceData"

export class $RealmsPersistence {

constructor()

public "save"(arg0: $RealmsPersistence$RealmsPersistenceData$Type): void
public static "writeFile"(arg0: $RealmsPersistence$RealmsPersistenceData$Type): void
public "read"(): $RealmsPersistence$RealmsPersistenceData
public static "readFile"(): $RealmsPersistence$RealmsPersistenceData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsPersistence$Type = ($RealmsPersistence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsPersistence_ = $RealmsPersistence$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Function4" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Function4<T1, T2, T3, T4, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
 "curry"(): $Function<(T1), ($Function3<(T2), (T3), (T4), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($BiFunction<(T3), (T4), (R)>)>
 "curry3"(): $Function3<(T1), (T2), (T3), ($Function<(T4), (R)>)>

(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R
}

export namespace $Function4 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function4$Type<T1, T2, T3, T4, R> = ($Function4<(T1), (T2), (T3), (T4), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function4_<T1, T2, T3, T4, R> = $Function4$Type<(T1), (T2), (T3), (T4), (R)>;
}}
declare module "packages/com/mojang/datafixers/util/$Function3" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Function3<T1, T2, T3, R> {

 "apply"(arg0: T1, arg1: T2, arg2: T3): R
 "curry"(): $Function<(T1), ($BiFunction<(T2), (T3), (R)>)>
 "curry2"(): $BiFunction<(T1), (T2), ($Function<(T3), (R)>)>

(arg0: T1, arg1: T2, arg2: T3): R
}

export namespace $Function3 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function3$Type<T1, T2, T3, R> = ($Function3<(T1), (T2), (T3), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function3_<T1, T2, T3, R> = $Function3$Type<(T1), (T2), (T3), (R)>;
}}
declare module "packages/com/mojang/datafixers/kinds/$Functor$Mu" {
import {$Kind1$Mu, $Kind1$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Kind1$Mu"

export interface $Functor$Mu extends $Kind1$Mu {

}

export namespace $Functor$Mu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Functor$Mu$Type = ($Functor$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Functor$Mu_ = $Functor$Mu$Type;
}}
declare module "packages/com/mojang/serialization/$MapEncoder" {
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $MapEncoder<A> extends $Keyable {

 "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
 "encoder"(): $Encoder<(A)>
 "comap"<B>(arg0: $Function$Type<(any), (any)>): $MapEncoder<(B)>
 "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $MapEncoder<(B)>
 "withLifecycle"(arg0: $Lifecycle$Type): $MapEncoder<(A)>
 "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
 "compressedBuilder"<T>(arg0: $DynamicOps$Type<(T)>): $RecordBuilder<(T)>
 "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
}

export namespace $MapEncoder {
function makeCompressedBuilder<T>(arg0: $DynamicOps$Type<(T)>, arg1: $KeyCompressor$Type<(T)>): $RecordBuilder<(T)>
function forStrings(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapEncoder$Type<A> = ($MapEncoder<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapEncoder_<A> = $MapEncoder$Type<(A)>;
}}
declare module "packages/com/mojang/realmsclient/gui/task/$DataFetcher" {
import {$DataFetcher$Task, $DataFetcher$Task$Type} from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$RepeatedDelayStrategy, $RepeatedDelayStrategy$Type} from "packages/com/mojang/realmsclient/gui/task/$RepeatedDelayStrategy"
import {$TimeSource, $TimeSource$Type} from "packages/net/minecraft/util/$TimeSource"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"
import {$DataFetcher$Subscription, $DataFetcher$Subscription$Type} from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Subscription"

export class $DataFetcher {

constructor(arg0: $Executor$Type, arg1: $TimeUnit$Type, arg2: $TimeSource$Type)

public "createTask"<T>(arg0: string, arg1: $Callable$Type<(T)>, arg2: $Duration$Type, arg3: $RepeatedDelayStrategy$Type): $DataFetcher$Task<(T)>
public "createSubscription"(): $DataFetcher$Subscription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Type = ($DataFetcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFetcher_ = $DataFetcher$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $RecordCodecBuilder$Mu<O> implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordCodecBuilder$Mu$Type<O> = ($RecordCodecBuilder$Mu<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordCodecBuilder$Mu_<O> = $RecordCodecBuilder$Mu$Type<(O)>;
}}
declare module "packages/com/mojang/blaze3d/platform/$IconSet" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$IoSupplier, $IoSupplier$Type} from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import {$PackResources, $PackResources$Type} from "packages/net/minecraft/server/packs/$PackResources"

export class $IconSet extends $Enum<($IconSet)> {
static readonly "RELEASE": $IconSet
static readonly "SNAPSHOT": $IconSet


public static "values"(): ($IconSet)[]
public static "valueOf"(arg0: string): $IconSet
public "getStandardIcons"(arg0: $PackResources$Type): $List<($IoSupplier<($InputStream)>)>
public "getMacIcon"(arg0: $PackResources$Type): $IoSupplier<($InputStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconSet$Type = (("release") | ("snapshot")) | ($IconSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconSet_ = $IconSet$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$BufferVertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $BufferVertexConsumer extends $VertexConsumer {

 "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
 "uv"(arg0: float, arg1: float): $VertexConsumer
 "currentElement"(): $VertexFormatElement
 "nextElement"(): void
 "putByte"(arg0: integer, arg1: byte): void
 "putShort"(arg0: integer, arg1: short): void
 "uv2"(arg0: integer, arg1: integer): $VertexConsumer
 "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
 "putFloat"(arg0: integer, arg1: float): void
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
 "uvShort"(arg0: short, arg1: short, arg2: integer): $VertexConsumer
 "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
 "endVertex"(): void
 "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "overlayCoords"(arg0: integer): $VertexConsumer
 "uv2"(arg0: integer): $VertexConsumer
 "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
 "unsetDefaultColor"(): void
 "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
 "color"(arg0: integer): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
 "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
 "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
}

export namespace $BufferVertexConsumer {
function normalIntValue(arg0: float): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferVertexConsumer$Type = ($BufferVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferVertexConsumer_ = $BufferVertexConsumer$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/response/$KeyPairResponse" {
import {$Response, $Response$Type} from "packages/com/mojang/authlib/yggdrasil/response/$Response"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $KeyPairResponse extends $Response {

constructor()

public "getPublicKey"(): string
public "getPublicKeySignature"(): $ByteBuffer
public "getExpiresAt"(): string
public "getRefreshedAfter"(): string
public "getPrivateKey"(): string
get "publicKey"(): string
get "publicKeySignature"(): $ByteBuffer
get "expiresAt"(): string
get "refreshedAfter"(): string
get "privateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPairResponse$Type = ($KeyPairResponse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPairResponse_ = $KeyPairResponse$Type;
}}
declare module "packages/com/mojang/realmsclient/client/$RealmsClient$CompatibleVersionResponse" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RealmsClient$CompatibleVersionResponse extends $Enum<($RealmsClient$CompatibleVersionResponse)> {
static readonly "COMPATIBLE": $RealmsClient$CompatibleVersionResponse
static readonly "OUTDATED": $RealmsClient$CompatibleVersionResponse
static readonly "OTHER": $RealmsClient$CompatibleVersionResponse


public static "values"(): ($RealmsClient$CompatibleVersionResponse)[]
public static "valueOf"(arg0: string): $RealmsClient$CompatibleVersionResponse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$CompatibleVersionResponse$Type = (("compatible") | ("other") | ("outdated")) | ($RealmsClient$CompatibleVersionResponse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsClient$CompatibleVersionResponse_ = $RealmsClient$CompatibleVersionResponse$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$Subscription$SubscriptionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Subscription$SubscriptionType extends $Enum<($Subscription$SubscriptionType)> {
static readonly "NORMAL": $Subscription$SubscriptionType
static readonly "RECURRING": $Subscription$SubscriptionType


public static "values"(): ($Subscription$SubscriptionType)[]
public static "valueOf"(arg0: string): $Subscription$SubscriptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Subscription$SubscriptionType$Type = (("normal") | ("recurring")) | ($Subscription$SubscriptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Subscription$SubscriptionType_ = $Subscription$SubscriptionType$Type;
}}
declare module "packages/com/mojang/serialization/$Decoder$Boxed" {
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"

export interface $Decoder$Boxed<A> {

 "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "decoder"(): $Decoder<(A)>

(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
}

export namespace $Decoder$Boxed {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Boxed$Type<A> = ($Decoder$Boxed<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder$Boxed_<A> = $Decoder$Boxed$Type<(A)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$UploadInfo" {
import {$URI, $URI$Type} from "packages/java/net/$URI"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $UploadInfo extends $ValueObject {


public static "parse"(arg0: string): $UploadInfo
public static "createRequest"(arg0: string): string
public static "assembleUri"(arg0: string, arg1: integer): $URI
public "getToken"(): string
public "getUploadEndpoint"(): $URI
public "isWorldClosed"(): boolean
get "token"(): string
get "uploadEndpoint"(): $URI
get "worldClosed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UploadInfo$Type = ($UploadInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UploadInfo_ = $UploadInfo$Type;
}}
declare module "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Subscription" {
import {$DataFetcher$Task, $DataFetcher$Task$Type} from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DataFetcher, $DataFetcher$Type} from "packages/com/mojang/realmsclient/gui/task/$DataFetcher"

export class $DataFetcher$Subscription {

constructor(arg0: $DataFetcher$Type)

public "reset"(): void
public "tick"(): void
public "subscribe"<T>(arg0: $DataFetcher$Task$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "forceUpdate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Subscription$Type = ($DataFetcher$Subscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFetcher$Subscription_ = $DataFetcher$Subscription$Type;
}}
declare module "packages/com/mojang/authlib/$Environment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Environment {

 "getName"(): string
 "asString"(): string
 "getServicesHost"(): string
 "getAuthHost"(): string
 "getAccountsHost"(): string
 "getSessionHost"(): string
}

export namespace $Environment {
function create(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): $Environment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Environment$Type = ($Environment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Environment_ = $Environment$Type;
}}
declare module "packages/com/mojang/blaze3d/audio/$Library$Pool" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Library$Pool extends $Enum<($Library$Pool)> {
static readonly "STATIC": $Library$Pool
static readonly "STREAMING": $Library$Pool


public static "values"(): ($Library$Pool)[]
public static "valueOf"(arg0: string): $Library$Pool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Library$Pool$Type = (("streaming") | ("static")) | ($Library$Pool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Library$Pool_ = $Library$Pool$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Either" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Either$Mu, $Either$Mu$Type} from "packages/com/mojang/datafixers/util/$Either$Mu"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"

export class $Either<L, R> implements $App<($Either$Mu<(R)>), (L)> {


public "left"(): $Optional<(L)>
public static "left"<L, R>(arg0: L): $Either<(L), (R)>
public "right"(): $Optional<(R)>
public static "right"<L, R>(arg0: R): $Either<(L), (R)>
public "map"<T>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): T
public "flatMap"<L2>(arg0: $Function$Type<(L), ($Either$Type<(L2), (R)>)>): $Either<(L2), (R)>
public "swap"(): $Either<(R), (L)>
public static "unbox"<L, R>(arg0: $App$Type<($Either$Mu$Type<(R)>), (L)>): $Either<(L), (R)>
public "mapRight"<T>(arg0: $Function$Type<(any), (any)>): $Either<(L), (T)>
public "mapBoth"<C, D>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Either<(C), (D)>
public "mapLeft"<T>(arg0: $Function$Type<(any), (any)>): $Either<(T), (R)>
public "orThrow"(): L
public "ifLeft"(arg0: $Consumer$Type<(any)>): $Either<(L), (R)>
public "ifRight"(arg0: $Consumer$Type<(any)>): $Either<(L), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$Type<L, R> = ($Either<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Either_<L, R> = $Either$Type<(L), (R)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServer$WorldType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RealmsServer$WorldType extends $Enum<($RealmsServer$WorldType)> {
static readonly "NORMAL": $RealmsServer$WorldType
static readonly "MINIGAME": $RealmsServer$WorldType
static readonly "ADVENTUREMAP": $RealmsServer$WorldType
static readonly "EXPERIENCE": $RealmsServer$WorldType
static readonly "INSPIRATION": $RealmsServer$WorldType


public static "values"(): ($RealmsServer$WorldType)[]
public static "valueOf"(arg0: string): $RealmsServer$WorldType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServer$WorldType$Type = (("normal") | ("minigame") | ("inspiration") | ("adventuremap") | ("experience")) | ($RealmsServer$WorldType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServer$WorldType_ = $RealmsServer$WorldType$Type;
}}
declare module "packages/com/mojang/datafixers/$DSL$TypeReference" {
import {$Schema, $Schema$Type} from "packages/com/mojang/datafixers/schemas/$Schema"
import {$TypeTemplate, $TypeTemplate$Type} from "packages/com/mojang/datafixers/types/templates/$TypeTemplate"

export interface $DSL$TypeReference {

 "in"(arg0: $Schema$Type): $TypeTemplate
 "typeName"(): string

(arg0: $Schema$Type): $TypeTemplate
}

export namespace $DSL$TypeReference {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DSL$TypeReference$Type = ($DSL$TypeReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DSL$TypeReference_ = $DSL$TypeReference$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReflectionBasedSerialization {

}

export namespace $ReflectionBasedSerialization {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionBasedSerialization$Type = ($ReflectionBasedSerialization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionBasedSerialization_ = $ReflectionBasedSerialization$Type;
}}
declare module "packages/com/mojang/serialization/$DataResult$Instance$Mu" {
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"

export class $DataResult$Instance$Mu implements $Applicative$Mu {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Instance$Mu$Type = ($DataResult$Instance$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Instance$Mu_ = $DataResult$Instance$Mu$Type;
}}
declare module "packages/com/mojang/serialization/$Codec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$PrimitiveCodec, $PrimitiveCodec$Type} from "packages/com/mojang/serialization/codecs/$PrimitiveCodec"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$Unit, $Unit$Type} from "packages/com/mojang/datafixers/util/$Unit"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export interface $Codec<A> extends $Encoder<(A)>, $Decoder<(A)> {

 "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
 "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$Type<(string)>, arg1: A): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<(A)>
 "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(A)>
 "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(A)>
 "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: A, arg3: $Lifecycle$Type): $MapCodec<(A)>
 "deprecated"(arg0: integer): $Codec<(A)>
 "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "mapResult"(arg0: $Codec$ResultFunction$Type<(A)>): $Codec<(A)>
 "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
 "promotePartial"(arg0: $Consumer$Type<(string)>): $Codec<(A)>
 "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
 "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
 "listOf"(): $Codec<($List<(A)>)>
 "stable"(): $Codec<(A)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
 "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
 "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): $DataResult<(T)>
 "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "simple"(): $Decoder$Simple<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
}

export namespace $Codec {
const BOOL: $PrimitiveCodec<(boolean)>
const BYTE: $PrimitiveCodec<(byte)>
const SHORT: $PrimitiveCodec<(short)>
const INT: $PrimitiveCodec<(integer)>
const LONG: $PrimitiveCodec<(long)>
const FLOAT: $PrimitiveCodec<(float)>
const DOUBLE: $PrimitiveCodec<(double)>
const STRING: $PrimitiveCodec<(string)>
const BYTE_BUFFER: $PrimitiveCodec<($ByteBuffer)>
const INT_STREAM: $PrimitiveCodec<($IntStream)>
const LONG_STREAM: $PrimitiveCodec<($LongStream)>
const PASSTHROUGH: $Codec<($Dynamic<(any)>)>
const EMPTY: $MapCodec<($Unit)>
const probejsInternal$$Literal: Special.WorldgenBiomeSource
const probejsInternal$$Tag: Special.WorldgenBiomeSourceTag
const probejsInternal$$Literal: Special.WorldgenChunkGenerator
const probejsInternal$$Tag: Special.WorldgenChunkGeneratorTag
const probejsInternal$$Literal: Special.WorldgenMaterialCondition
const probejsInternal$$Tag: Special.WorldgenMaterialConditionTag
const probejsInternal$$Literal: Special.WorldgenMaterialRule
const probejsInternal$$Tag: Special.WorldgenMaterialRuleTag
const probejsInternal$$Literal: Special.WorldgenDensityFunctionType
const probejsInternal$$Tag: Special.WorldgenDensityFunctionTypeTag
function unit<A>(arg0: $Supplier$Type<(A)>): $Codec<(A)>
function unit<A>(arg0: A): $Codec<(A)>
function of<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>, arg2: $Supplier$Type<(string)>): $MapCodec<(A)>
function of<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>): $Codec<(A)>
function of<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>): $MapCodec<(A)>
function of<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>, arg2: string): $Codec<(A)>
function list<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
function checkRange<N>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
function pair<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
function optionalField<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
function mapPair<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
function simpleMap<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
function mapEither<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
function compoundList<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
function either<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
function unboundedMap<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
function doubleRange(arg0: double, arg1: double): $Codec<(double)>
function floatRange(arg0: float, arg1: float): $Codec<(float)>
function intRange(arg0: integer, arg1: integer): $Codec<(integer)>
function empty<A>(): $MapEncoder<(A)>
function error<A>(arg0: string): $Encoder<(A)>
function ofTerminal<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(A)>
function ofBoxed<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(A)>
function ofSimple<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Codec$Type<A> = (Special.WorldgenBiomeSource) | (Special.WorldgenChunkGenerator) | (Special.WorldgenMaterialCondition) | (Special.WorldgenMaterialRule) | (Special.WorldgenDensityFunctionType) | ($Codec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Codec_<A> = $Codec$Type<(A)>;
}}
declare module "packages/com/mojang/brigadier/context/$CommandContext" {
import {$Command, $Command$Type} from "packages/com/mojang/brigadier/$Command"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ParsedArgument, $ParsedArgument$Type} from "packages/com/mojang/brigadier/context/$ParsedArgument"
import {$StringRange, $StringRange$Type} from "packages/com/mojang/brigadier/context/$StringRange"
import {$RedirectModifier, $RedirectModifier$Type} from "packages/com/mojang/brigadier/$RedirectModifier"
import {$ParsedCommandNode, $ParsedCommandNode$Type} from "packages/com/mojang/brigadier/context/$ParsedCommandNode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommandContext<S> {

constructor(arg0: S, arg1: string, arg2: $Map$Type<(string), ($ParsedArgument$Type<(S), (any)>)>, arg3: $Command$Type<(S)>, arg4: $CommandNode$Type<(S)>, arg5: $List$Type<($ParsedCommandNode$Type<(S)>)>, arg6: $StringRange$Type, arg7: $CommandContext$Type<(S)>, arg8: $RedirectModifier$Type<(S)>, arg9: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getSource"(): S
public "getInput"(): string
public "getChild"(): $CommandContext<(S)>
public "getRange"(): $StringRange
public "hasNodes"(): boolean
public "isForked"(): boolean
public "getCommand"(): $Command<(S)>
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "getRootNode"(): $CommandNode<(S)>
public "copyFor"(arg0: S): $CommandContext<(S)>
public "getLastChild"(): $CommandContext<(S)>
public "getArgument"<V>(arg0: string, arg1: $Class$Type<(V)>): V
public "getNodes"(): $List<($ParsedCommandNode<(S)>)>
get "source"(): S
get "input"(): string
get "child"(): $CommandContext<(S)>
get "range"(): $StringRange
get "forked"(): boolean
get "command"(): $Command<(S)>
get "redirectModifier"(): $RedirectModifier<(S)>
get "rootNode"(): $CommandNode<(S)>
get "lastChild"(): $CommandContext<(S)>
get "nodes"(): $List<($ParsedCommandNode<(S)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandContext$Type<S> = ($CommandContext<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandContext_<S> = $CommandContext$Type<(S)>;
}}
declare module "packages/com/mojang/datafixers/kinds/$Kind1$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export interface $Kind1$Mu extends $K1 {

}

export namespace $Kind1$Mu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Kind1$Mu$Type = ($Kind1$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Kind1$Mu_ = $Kind1$Mu$Type;
}}
declare module "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinecraftProfileTexture {
static readonly "PROFILE_TEXTURE_COUNT": integer

constructor(arg0: string, arg1: $Map$Type<(string), (string)>)

public "toString"(): string
public "getMetadata"(arg0: string): string
public "getHash"(): string
public "getUrl"(): string
get "hash"(): string
get "url"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftProfileTexture$Type = ($MinecraftProfileTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftProfileTexture_ = $MinecraftProfileTexture$Type;
}}
declare module "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType" {
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$CommandSyntaxException, $CommandSyntaxException$Type} from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import {$CommandExceptionType, $CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$CommandExceptionType"
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"

export class $SimpleCommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Message$Type)

public "toString"(): string
public "create"(): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$Type): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCommandExceptionType$Type = ($SimpleCommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCommandExceptionType_ = $SimpleCommandExceptionType$Type;
}}
declare module "packages/com/mojang/serialization/$Decoder$Terminal" {
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"

export interface $Decoder$Terminal<A> {

 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
 "decoder"(): $Decoder<(A)>

(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
}

export namespace $Decoder$Terminal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Decoder$Terminal$Type<A> = ($Decoder$Terminal<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Decoder$Terminal_<A> = $Decoder$Terminal$Type<(A)>;
}}
declare module "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataFetcher$Task<T> {


public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFetcher$Task$Type<T> = ($DataFetcher$Task<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFetcher$Task_<T> = $DataFetcher$Task$Type<(T)>;
}}
declare module "packages/com/mojang/math/$OctahedralGroup" {
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $OctahedralGroup extends $Enum<($OctahedralGroup)> implements $StringRepresentable {
static readonly "IDENTITY": $OctahedralGroup
static readonly "ROT_180_FACE_XY": $OctahedralGroup
static readonly "ROT_180_FACE_XZ": $OctahedralGroup
static readonly "ROT_180_FACE_YZ": $OctahedralGroup
static readonly "ROT_120_NNN": $OctahedralGroup
static readonly "ROT_120_NNP": $OctahedralGroup
static readonly "ROT_120_NPN": $OctahedralGroup
static readonly "ROT_120_NPP": $OctahedralGroup
static readonly "ROT_120_PNN": $OctahedralGroup
static readonly "ROT_120_PNP": $OctahedralGroup
static readonly "ROT_120_PPN": $OctahedralGroup
static readonly "ROT_120_PPP": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XY_POS": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_XZ_POS": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_NEG": $OctahedralGroup
static readonly "ROT_180_EDGE_YZ_POS": $OctahedralGroup
static readonly "ROT_90_X_NEG": $OctahedralGroup
static readonly "ROT_90_X_POS": $OctahedralGroup
static readonly "ROT_90_Y_NEG": $OctahedralGroup
static readonly "ROT_90_Y_POS": $OctahedralGroup
static readonly "ROT_90_Z_NEG": $OctahedralGroup
static readonly "ROT_90_Z_POS": $OctahedralGroup
static readonly "INVERSION": $OctahedralGroup
static readonly "INVERT_X": $OctahedralGroup
static readonly "INVERT_Y": $OctahedralGroup
static readonly "INVERT_Z": $OctahedralGroup
static readonly "ROT_60_REF_NNN": $OctahedralGroup
static readonly "ROT_60_REF_NNP": $OctahedralGroup
static readonly "ROT_60_REF_NPN": $OctahedralGroup
static readonly "ROT_60_REF_NPP": $OctahedralGroup
static readonly "ROT_60_REF_PNN": $OctahedralGroup
static readonly "ROT_60_REF_PNP": $OctahedralGroup
static readonly "ROT_60_REF_PPN": $OctahedralGroup
static readonly "ROT_60_REF_PPP": $OctahedralGroup
static readonly "SWAP_XY": $OctahedralGroup
static readonly "SWAP_YZ": $OctahedralGroup
static readonly "SWAP_XZ": $OctahedralGroup
static readonly "SWAP_NEG_XY": $OctahedralGroup
static readonly "SWAP_NEG_YZ": $OctahedralGroup
static readonly "SWAP_NEG_XZ": $OctahedralGroup
static readonly "ROT_90_REF_X_NEG": $OctahedralGroup
static readonly "ROT_90_REF_X_POS": $OctahedralGroup
static readonly "ROT_90_REF_Y_NEG": $OctahedralGroup
static readonly "ROT_90_REF_Y_POS": $OctahedralGroup
static readonly "ROT_90_REF_Z_NEG": $OctahedralGroup
static readonly "ROT_90_REF_Z_POS": $OctahedralGroup


public "toString"(): string
public static "values"(): ($OctahedralGroup)[]
public static "valueOf"(arg0: string): $OctahedralGroup
public "getSerializedName"(): string
public "rotate"(arg0: $FrontAndTop$Type): $FrontAndTop
public "rotate"(arg0: $Direction$Type): $Direction
public "transformation"(): $Matrix3f
public "inverts"(arg0: $Direction$Axis$Type): boolean
public "inverse"(): $OctahedralGroup
public "compose"(arg0: $OctahedralGroup$Type): $OctahedralGroup
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OctahedralGroup$Type = (("rot_120_nnn") | ("rot_120_npp") | ("rot_120_ppn") | ("rot_120_npn") | ("rot_180_edge_xz_pos") | ("swap_yz") | ("rot_180_edge_xy_neg") | ("rot_90_ref_y_pos") | ("rot_180_edge_xz_neg") | ("swap_neg_xy") | ("rot_180_edge_xy_pos") | ("rot_90_z_neg") | ("swap_neg_xz") | ("rot_90_ref_x_neg") | ("rot_120_pnp") | ("rot_120_nnp") | ("rot_120_pnn") | ("rot_120_ppp") | ("rot_180_face_yz") | ("rot_90_z_pos") | ("rot_90_ref_z_pos") | ("inversion") | ("rot_60_ref_pnp") | ("identity") | ("rot_60_ref_nnn") | ("rot_60_ref_npp") | ("rot_60_ref_ppn") | ("rot_60_ref_nnp") | ("rot_60_ref_pnn") | ("rot_60_ref_ppp") | ("rot_60_ref_npn") | ("rot_180_edge_yz_neg") | ("swap_xy") | ("invert_x") | ("swap_xz") | ("rot_90_x_neg") | ("swap_neg_yz") | ("rot_180_face_xz") | ("rot_90_ref_z_neg") | ("rot_180_edge_yz_pos") | ("rot_90_x_pos") | ("rot_180_face_xy") | ("rot_90_ref_x_pos") | ("rot_90_y_neg") | ("invert_z") | ("invert_y") | ("rot_90_ref_y_neg") | ("rot_90_y_pos")) | ($OctahedralGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OctahedralGroup_ = $OctahedralGroup$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServerPing" {
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerPing extends $ValueObject {
 "nrOfPlayers": string
 "playerList": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerPing$Type = ($RealmsServerPing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerPing_ = $RealmsServerPing$Type;
}}
declare module "packages/com/mojang/serialization/$MapLike" {
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MapLike<T> {

 "get"(arg0: T): T
 "get"(arg0: string): T
 "entries"(): $Stream<($Pair<(T), (T)>)>
}

export namespace $MapLike {
function forMap<T>(arg0: $Map$Type<(T), (T)>, arg1: $DynamicOps$Type<(T)>): $MapLike<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLike$Type<T> = ($MapLike<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLike_<T> = $MapLike$Type<(T)>;
}}
declare module "packages/com/mojang/brigadier/arguments/$ArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $ArgumentType<T> {

 "parse"(arg0: $StringReader$Type): T
 "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
 "getExamples"(): $Collection<(string)>

(arg0: $StringReader$Type): T
}

export namespace $ArgumentType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentType$Type<T> = ($ArgumentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentType_<T> = $ArgumentType$Type<(T)>;
}}
declare module "packages/com/mojang/blaze3d/audio/$Listener" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Listener {

constructor()

public "reset"(): void
public "setGain"(arg0: float): void
public "getGain"(): float
public "getListenerPosition"(): $Vec3
public "setListenerOrientation"(arg0: $Vector3f$Type, arg1: $Vector3f$Type): void
public "setListenerPosition"(arg0: $Vec3$Type): void
set "gain"(value: float)
get "gain"(): float
get "listenerPosition"(): $Vec3
set "listenerPosition"(value: $Vec3$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Listener$Type = ($Listener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Listener_ = $Listener$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$BackupList" {
import {$Backup, $Backup$Type} from "packages/com/mojang/realmsclient/dto/$Backup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $BackupList extends $ValueObject {
 "backups": $List<($Backup)>

constructor()

public static "parse"(arg0: string): $BackupList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackupList$Type = ($BackupList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackupList_ = $BackupList$Type;
}}
declare module "packages/com/mojang/brigadier/$SingleRedirectModifier" {
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $SingleRedirectModifier<S> {

 "apply"(arg0: $CommandContext$Type<(S)>): S

(arg0: $CommandContext$Type<(S)>): S
}

export namespace $SingleRedirectModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleRedirectModifier$Type<S> = ($SingleRedirectModifier<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleRedirectModifier_<S> = $SingleRedirectModifier$Type<(S)>;
}}
declare module "packages/com/mojang/brigadier/exceptions/$Dynamic3CommandExceptionType" {
import {$CommandSyntaxException, $CommandSyntaxException$Type} from "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException"
import {$Dynamic3CommandExceptionType$Function, $Dynamic3CommandExceptionType$Function$Type} from "packages/com/mojang/brigadier/exceptions/$Dynamic3CommandExceptionType$Function"
import {$CommandExceptionType, $CommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$CommandExceptionType"
import {$ImmutableStringReader, $ImmutableStringReader$Type} from "packages/com/mojang/brigadier/$ImmutableStringReader"

export class $Dynamic3CommandExceptionType implements $CommandExceptionType {

constructor(arg0: $Dynamic3CommandExceptionType$Function$Type)

public "create"(arg0: any, arg1: any, arg2: any): $CommandSyntaxException
public "createWithContext"(arg0: $ImmutableStringReader$Type, arg1: any, arg2: any, arg3: any): $CommandSyntaxException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic3CommandExceptionType$Type = ($Dynamic3CommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic3CommandExceptionType_ = $Dynamic3CommandExceptionType$Type;
}}
declare module "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType$Function" {
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"

export interface $Dynamic2CommandExceptionType$Function {

 "apply"(arg0: any, arg1: any): $Message

(arg0: any, arg1: any): $Message
}

export namespace $Dynamic2CommandExceptionType$Function {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic2CommandExceptionType$Function$Type = ($Dynamic2CommandExceptionType$Function);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic2CommandExceptionType$Function_ = $Dynamic2CommandExceptionType$Function$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsNotification" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"

export class $RealmsNotification {


public "uuid"(): $UUID
public "seen"(): boolean
public "dismissable"(): boolean
public static "parseList"(arg0: string): $List<($RealmsNotification)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNotification$Type = ($RealmsNotification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsNotification_ = $RealmsNotification$Type;
}}
declare module "packages/com/mojang/datafixers/$Products$P3" {
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $Products$P3<F extends $K1, T1, T2, T3> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function3$Type<(T1), (T2), (T3), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function3$Type<(T1), (T2), (T3), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "and"<T4, T5>(arg0: $Products$P2$Type<(F), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T4, T5, T6, T7, T8>(arg0: $Products$P5$Type<(F), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T4, T5, T6, T7>(arg0: $Products$P4$Type<(F), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T4, T5, T6>(arg0: $Products$P3$Type<(F), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "and"<T4>(arg0: $App$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P3$Type<F, T1, T2, T3> = ($Products$P3<(F), (T1), (T2), (T3)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P3_<F, T1, T2, T3> = $Products$P3$Type<(F), (T1), (T2), (T3)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P4" {
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $Products$P4<F extends $K1, T1, T2, T3, T4> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function4$Type<(T1), (T2), (T3), (T4), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "and"<T5>(arg0: $App$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T5, T6, T7, T8>(arg0: $Products$P4$Type<(F), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T5, T6, T7>(arg0: $Products$P3$Type<(F), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T5, T6>(arg0: $Products$P2$Type<(F), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P4$Type<F, T1, T2, T3, T4> = ($Products$P4<(F), (T1), (T2), (T3), (T4)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P4_<F, T1, T2, T3, T4> = $Products$P4$Type<(F), (T1), (T2), (T3), (T4)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P1" {
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $Products$P1<F extends $K1, T1> {

constructor(arg0: $App$Type<(F), (T1)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function$Type<(T1), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function$Type<(T1), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "and"<T2, T3, T4, T5, T6, T7>(arg0: $Products$P6$Type<(F), (T2), (T3), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T2, T3, T4, T5, T6, T7, T8>(arg0: $Products$P7$Type<(F), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T2, T3, T4, T5>(arg0: $Products$P4$Type<(F), (T2), (T3), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T2, T3>(arg0: $Products$P2$Type<(F), (T2), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
public "and"<T2, T3, T4>(arg0: $Products$P3$Type<(F), (T2), (T3), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T2>(arg0: $App$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
public "and"<T2, T3, T4, T5, T6>(arg0: $Products$P5$Type<(F), (T2), (T3), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P1$Type<F, T1> = ($Products$P1<(F), (T1)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P1_<F, T1> = $Products$P1$Type<(F), (T1)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P2" {
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $Products$P2<F extends $K1, T1, T2> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $BiFunction$Type<(T1), (T2), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($BiFunction$Type<(T1), (T2), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "and"<T3, T4, T5, T6, T7, T8>(arg0: $Products$P6$Type<(F), (T3), (T4), (T5), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T3, T4, T5, T6, T7>(arg0: $Products$P5$Type<(F), (T3), (T4), (T5), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T3, T4, T5>(arg0: $Products$P3$Type<(F), (T3), (T4), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
public "and"<T3, T4, T5, T6>(arg0: $Products$P4$Type<(F), (T3), (T4), (T5), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "and"<T3, T4>(arg0: $Products$P2$Type<(F), (T3), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>
public "and"<T3>(arg0: $App$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P2$Type<F, T1, T2> = ($Products$P2<(F), (T1), (T2)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P2_<F, T1, T2> = $Products$P2$Type<(F), (T1), (T2)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P9" {
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P9<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $App<(F), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P9$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9> = ($Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P9_<F, T1, T2, T3, T4, T5, T6, T7, T8, T9> = $Products$P9$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P7" {
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P7<F extends $K1, T1, T2, T3, T4, T5, T6, T7> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "and"<T8>(arg0: $App$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "t6"(): $App<(F), (T6)>
public "t7"(): $App<(F), (T7)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P7$Type<F, T1, T2, T3, T4, T5, T6, T7> = ($Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P7_<F, T1, T2, T3, T4, T5, T6, T7> = $Products$P7$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P8" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P8<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "t8"(): $App<(F), (T8)>
public "t6"(): $App<(F), (T6)>
public "t7"(): $App<(F), (T7)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P8$Type<F, T1, T2, T3, T4, T5, T6, T7, T8> = ($Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P8_<F, T1, T2, T3, T4, T5, T6, T7, T8> = $Products$P8$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P5" {
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $Products$P5<F extends $K1, T1, T2, T3, T4, T5> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "and"<T6, T7, T8>(arg0: $Products$P3$Type<(F), (T6), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T6, T7>(arg0: $Products$P2$Type<(F), (T6), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "and"<T6>(arg0: $App$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P5$Type<F, T1, T2, T3, T4, T5> = ($Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P5_<F, T1, T2, T3, T4, T5> = $Products$P5$Type<(F), (T1), (T2), (T3), (T4), (T5)>;
}}
declare module "packages/com/mojang/datafixers/$Products$P6" {
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Products$P6<F extends $K1, T1, T2, T3, T4, T5, T6> {

constructor(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>)

public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>): $App<(F), (R)>
public "apply"<R>(arg0: $Applicative$Type<(F), (any)>, arg1: $App$Type<(F), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $App<(F), (R)>
public "t1"(): $App<(F), (T1)>
public "t2"(): $App<(F), (T2)>
public "t3"(): $App<(F), (T3)>
public "and"<T7, T8>(arg0: $Products$P2$Type<(F), (T7), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "and"<T7>(arg0: $App$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "t6"(): $App<(F), (T6)>
public "t5"(): $App<(F), (T5)>
public "t4"(): $App<(F), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Products$P6$Type<F, T1, T2, T3, T4, T5, T6> = ($Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Products$P6_<F, T1, T2, T3, T4, T5, T6> = $Products$P6$Type<(F), (T1), (T2), (T3), (T4), (T5), (T6)>;
}}
declare module "packages/com/mojang/datafixers/types/$Type" {
import {$TypeRewriteRule, $TypeRewriteRule$Type} from "packages/com/mojang/datafixers/$TypeRewriteRule"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$Type} from "packages/com/mojang/datafixers/types/families/$RecursiveTypeFamily"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$OpticFinder, $OpticFinder$Type} from "packages/com/mojang/datafixers/$OpticFinder"
import {$PointFreeRule, $PointFreeRule$Type} from "packages/com/mojang/datafixers/functions/$PointFreeRule"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Type$Mu, $Type$Mu$Type} from "packages/com/mojang/datafixers/types/$Type$Mu"
import {$Type$TypeMatcher, $Type$TypeMatcher$Type} from "packages/com/mojang/datafixers/types/$Type$TypeMatcher"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$Type} from "packages/com/mojang/datafixers/types/templates/$TaggedChoice$TaggedChoiceType"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$TypeTemplate, $TypeTemplate$Type} from "packages/com/mojang/datafixers/types/templates/$TypeTemplate"
import {$Typed, $Typed$Type} from "packages/com/mojang/datafixers/$Typed"

export class $Type<A> implements $App<($Type$Mu), (A)> {

constructor()

public "pointTyped"(arg0: $DynamicOps$Type<(any)>): $Optional<($Typed<(A)>)>
public "findFieldType"(arg0: string): $Type<(any)>
public "equals"(arg0: any): boolean
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "write"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): $DataResult<(T)>
public "read"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), ($Dynamic<(T)>)>)>
public "read"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $TypeRewriteRule$Type, arg2: $PointFreeRule$Type, arg3: T): $DataResult<($Pair<($Optional<(any)>), (T)>)>
public "finder"(): $OpticFinder<(A)>
public static "unbox"<A>(arg0: $App$Type<($Type$Mu$Type), (A)>): $Type<(A)>
public "all"(arg0: $TypeRewriteRule$Type, arg1: boolean, arg2: boolean): $RewriteResult<(A), (any)>
public "point"(arg0: $DynamicOps$Type<(any)>): $Optional<(A)>
public "one"(arg0: $TypeRewriteRule$Type): $Optional<($RewriteResult<(A), (any)>)>
public "codec"(): $Codec<(A)>
public "template"(): $TypeTemplate
public "findCheckedType"(arg0: integer): $Optional<($Type<(any)>)>
public "rewrite"(arg0: $TypeRewriteRule$Type, arg1: $PointFreeRule$Type): $Optional<($RewriteResult<(A), (any)>)>
public "readTyped"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<($Typed<(A)>), (T)>)>
public "readTyped"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<($Typed<(A)>), (T)>)>
public "writeDynamic"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): $DataResult<($Dynamic<(T)>)>
public "ifSame"<B>(arg0: $Type$Type<(B)>, arg1: B): $Optional<(A)>
public "ifSame"<B>(arg0: $Type$Type<(B)>, arg1: $RewriteResult$Type<(B), (any)>): $Optional<($RewriteResult<(A), (any)>)>
public "ifSame"<B>(arg0: $Typed$Type<(B)>): $Optional<(A)>
public "everywhere"(arg0: $TypeRewriteRule$Type, arg1: $PointFreeRule$Type, arg2: boolean, arg3: boolean): $Optional<($RewriteResult<(A), (any)>)>
public "findChoiceType"(arg0: string, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(any)>)>
public "findField"(arg0: string): $OpticFinder<(any)>
public "buildTemplate"(): $TypeTemplate
public static "opticView"<S, T, A, B>(arg0: $Type$Type<(S)>, arg1: $RewriteResult$Type<(A), (B)>, arg2: $TypedOptic$Type<(S), (T), (A), (B)>): $RewriteResult<(S), (T)>
public "findType"<FT, FR>(arg0: $Type$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Type$TypeMatcher$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findTypeInChildren"<FT, FR>(arg0: $Type$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Type$TypeMatcher$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findFieldTypeOpt"(arg0: string): $Optional<($Type<(any)>)>
public "rewriteOrNop"(arg0: $TypeRewriteRule$Type): $RewriteResult<(A), (any)>
public "updateMu"(arg0: $RecursiveTypeFamily$Type): $Type<(any)>
public "readAndWrite"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $Type$Type<(any)>, arg2: $TypeRewriteRule$Type, arg3: $PointFreeRule$Type, arg4: T): $DataResult<(T)>
public "findTypeCached"<FT, FR>(arg0: $Type$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Type$TypeMatcher$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<(A), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "getSetType"<FT, FR>(arg0: $OpticFinder$Type<(FT)>, arg1: $Type$Type<(FR)>): $Type<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$Type<A> = ($Type<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type_<A> = $Type$Type<(A)>;
}}
declare module "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest" {
import {$AbuseReportRequest$ClientInfo, $AbuseReportRequest$ClientInfo$Type} from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$ClientInfo"
import {$AbuseReport, $AbuseReport$Type} from "packages/com/mojang/authlib/minecraft/report/$AbuseReport"
import {$AbuseReportRequest$RealmInfo, $AbuseReportRequest$RealmInfo$Type} from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$RealmInfo"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$ThirdPartyServerInfo$Type} from "packages/com/mojang/authlib/yggdrasil/request/$AbuseReportRequest$ThirdPartyServerInfo"

export class $AbuseReportRequest {
 "version": integer
 "id": $UUID
 "report": $AbuseReport
 "clientInfo": $AbuseReportRequest$ClientInfo
 "thirdPartyServerInfo": $AbuseReportRequest$ThirdPartyServerInfo
 "realmInfo": $AbuseReportRequest$RealmInfo

constructor(arg0: integer, arg1: $UUID$Type, arg2: $AbuseReport$Type, arg3: $AbuseReportRequest$ClientInfo$Type, arg4: $AbuseReportRequest$ThirdPartyServerInfo$Type, arg5: $AbuseReportRequest$RealmInfo$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbuseReportRequest$Type = ($AbuseReportRequest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbuseReportRequest_ = $AbuseReportRequest$Type;
}}
declare module "packages/com/mojang/datafixers/$View$Mu" {
import {$K2, $K2$Type} from "packages/com/mojang/datafixers/kinds/$K2"

export class $View$Mu implements $K2 {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$Mu$Type = ($View$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View$Mu_ = $View$Mu$Type;
}}
declare module "packages/com/mojang/serialization/$ListBuilder" {
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $ListBuilder<T> {

 "build"(arg0: $DataResult$Type<(T)>): $DataResult<(T)>
 "build"(arg0: T): $DataResult<(T)>
 "add"(arg0: $DataResult$Type<(T)>): $ListBuilder<(T)>
 "add"(arg0: T): $ListBuilder<(T)>
 "add"<E>(arg0: E, arg1: $Encoder$Type<(E)>): $ListBuilder<(T)>
 "addAll"<E>(arg0: $Iterable$Type<(E)>, arg1: $Encoder$Type<(E)>): $ListBuilder<(T)>
 "ops"(): $DynamicOps<(T)>
 "withErrorsFrom"(arg0: $DataResult$Type<(any)>): $ListBuilder<(T)>
 "mapError"(arg0: $UnaryOperator$Type<(string)>): $ListBuilder<(T)>
}

export namespace $ListBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListBuilder$Type<T> = ($ListBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListBuilder_<T> = $ListBuilder$Type<(T)>;
}}
declare module "packages/com/mojang/serialization/$Encoder" {
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"

export interface $Encoder<A> {

 "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
 "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
 "fieldOf"(arg0: string): $MapEncoder<(A)>
 "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
 "withLifecycle"(arg0: $Lifecycle$Type): $Encoder<(A)>
 "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): $DataResult<(T)>

(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
}

export namespace $Encoder {
function empty<A>(): $MapEncoder<(A)>
function error<A>(arg0: string): $Encoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Encoder$Type<A> = ($Encoder<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Encoder_<A> = $Encoder$Type<(A)>;
}}
declare module "packages/com/mojang/realmsclient/gui/$RealmsDataFetcher" {
import {$DataFetcher$Task, $DataFetcher$Task$Type} from "packages/com/mojang/realmsclient/gui/task/$DataFetcher$Task"
import {$RealmsNews, $RealmsNews$Type} from "packages/com/mojang/realmsclient/dto/$RealmsNews"
import {$RealmsServerPlayerLists, $RealmsServerPlayerLists$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerLists"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RealmsNewsManager, $RealmsNewsManager$Type} from "packages/com/mojang/realmsclient/gui/$RealmsNewsManager"
import {$RealmsServer, $RealmsServer$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import {$RealmsNotification, $RealmsNotification$Type} from "packages/com/mojang/realmsclient/dto/$RealmsNotification"
import {$DataFetcher, $DataFetcher$Type} from "packages/com/mojang/realmsclient/gui/task/$DataFetcher"
import {$RealmsClient, $RealmsClient$Type} from "packages/com/mojang/realmsclient/client/$RealmsClient"

export class $RealmsDataFetcher {
readonly "dataFetcher": $DataFetcher
readonly "notificationsTask": $DataFetcher$Task<($List<($RealmsNotification)>)>
readonly "serverListUpdateTask": $DataFetcher$Task<($List<($RealmsServer)>)>
readonly "liveStatsTask": $DataFetcher$Task<($RealmsServerPlayerLists)>
readonly "pendingInvitesTask": $DataFetcher$Task<(integer)>
readonly "trialAvailabilityTask": $DataFetcher$Task<(boolean)>
readonly "newsTask": $DataFetcher$Task<($RealmsNews)>
readonly "newsManager": $RealmsNewsManager

constructor(arg0: $RealmsClient$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsDataFetcher$Type = ($RealmsDataFetcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsDataFetcher_ = $RealmsDataFetcher$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$ServerActivity" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $ServerActivity extends $ValueObject {
 "profileUuid": string
 "joinTime": long
 "leaveTime": long

constructor()

public static "parse"(arg0: $JsonObject$Type): $ServerActivity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerActivity$Type = ($ServerActivity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerActivity_ = $ServerActivity$Type;
}}
declare module "packages/com/mojang/serialization/$DataResult$Instance" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Applicative, $Applicative$Type} from "packages/com/mojang/datafixers/kinds/$Applicative"
import {$DataResult$Instance$Mu, $DataResult$Instance$Mu$Type} from "packages/com/mojang/serialization/$DataResult$Instance$Mu"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$DataResult$Mu, $DataResult$Mu$Type} from "packages/com/mojang/serialization/$DataResult$Mu"
import {$Products$P10, $Products$P10$Type} from "packages/com/mojang/datafixers/$Products$P10"
import {$Products$P11, $Products$P11$Type} from "packages/com/mojang/datafixers/$Products$P11"
import {$Products$P14, $Products$P14$Type} from "packages/com/mojang/datafixers/$Products$P14"
import {$Products$P15, $Products$P15$Type} from "packages/com/mojang/datafixers/$Products$P15"
import {$Products$P12, $Products$P12$Type} from "packages/com/mojang/datafixers/$Products$P12"
import {$Products$P13, $Products$P13$Type} from "packages/com/mojang/datafixers/$Products$P13"
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Products$P16, $Products$P16$Type} from "packages/com/mojang/datafixers/$Products$P16"
import {$Products$P1, $Products$P1$Type} from "packages/com/mojang/datafixers/$Products$P1"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Applicative$Mu, $Applicative$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Products$P9, $Products$P9$Type} from "packages/com/mojang/datafixers/$Products$P9"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export class $DataResult$Instance extends $Enum<($DataResult$Instance)> implements $Applicative<($DataResult$Mu), ($DataResult$Instance$Mu)> {
static readonly "INSTANCE": $DataResult$Instance


public static "values"(): ($DataResult$Instance)[]
public static "valueOf"(arg0: string): $DataResult$Instance
public "map"<T, R>(arg0: $Function$Type<(any), (any)>, arg1: $App$Type<($DataResult$Mu$Type), (T)>): $App<($DataResult$Mu), (R)>
public "ap"<A, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function$Type<(A), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (A)>): $App<($DataResult$Mu), (R)>
public "point"<A>(arg0: A): $App<($DataResult$Mu), (A)>
public "ap2"<A, B, R>(arg0: $App$Type<($DataResult$Mu$Type), ($BiFunction$Type<(A), (B), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (A)>, arg2: $App$Type<($DataResult$Mu$Type), (B)>): $App<($DataResult$Mu), (R)>
public "ap3"<T1, T2, T3, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function3$Type<(T1), (T2), (T3), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>): $App<($DataResult$Mu), (R)>
public "lift1"<A, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function$Type<(A), (R)>)>): $Function<($App<($DataResult$Mu), (A)>), ($App<($DataResult$Mu), (R)>)>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App$Type<($DataResult$Instance$Mu$Type), ($DataResult$Mu$Type)>): $Applicative<($DataResult$Mu), ($DataResult$Instance$Mu)>
public "ap"<A, R>(arg0: $Function$Type<(A), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (A)>): $App<($DataResult$Mu), (R)>
public "apply3"<T1, T2, T3, R>(arg0: $Function3$Type<(T1), (T2), (T3), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>): $App<($DataResult$Mu), (R)>
public "apply2"<A, B, R>(arg0: $BiFunction$Type<(A), (B), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (A)>, arg2: $App$Type<($DataResult$Mu$Type), (B)>): $App<($DataResult$Mu), (R)>
public "lift4"<T1, T2, T3, T4, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>): $Function4<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (R)>)>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>): $App<($DataResult$Mu), (R)>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>)>): $Function6<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (R)>)>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>): $Function7<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (R)>)>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>): $App<($DataResult$Mu), (R)>
public "lift2"<A, B, R>(arg0: $App$Type<($DataResult$Mu$Type), ($BiFunction$Type<(A), (B), (R)>)>): $BiFunction<($App<($DataResult$Mu), (A)>), ($App<($DataResult$Mu), (B)>), ($App<($DataResult$Mu), (R)>)>
public "lift5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>): $Function5<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (R)>)>
public "ap5"<T1, T2, T3, T4, T5, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>): $App<($DataResult$Mu), (R)>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>): $App<($DataResult$Mu), (R)>
public "lift3"<T1, T2, T3, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function3$Type<(T1), (T2), (T3), (R)>)>): $Function3<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (R)>)>
public "ap4"<T1, T2, T3, T4, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function4$Type<(T1), (T2), (T3), (T4), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>): $App<($DataResult$Mu), (R)>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>): $App<($DataResult$Mu), (R)>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function10$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>): $App<($DataResult$Mu), (R)>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function12$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>, arg11: $App$Type<($DataResult$Mu$Type), (T11)>, arg12: $App$Type<($DataResult$Mu$Type), (T12)>): $App<($DataResult$Mu), (R)>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function11$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>, arg11: $App$Type<($DataResult$Mu$Type), (T11)>): $App<($DataResult$Mu), (R)>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>)>): $Function9<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (T8)>), ($App<($DataResult$Mu), (T9)>), ($App<($DataResult$Mu), (R)>)>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>)>): $Function8<($App<($DataResult$Mu), (T1)>), ($App<($DataResult$Mu), (T2)>), ($App<($DataResult$Mu), (T3)>), ($App<($DataResult$Mu), (T4)>), ($App<($DataResult$Mu), (T5)>), ($App<($DataResult$Mu), (T6)>), ($App<($DataResult$Mu), (T7)>), ($App<($DataResult$Mu), (T8)>), ($App<($DataResult$Mu), (R)>)>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function16$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>, arg11: $App$Type<($DataResult$Mu$Type), (T11)>, arg12: $App$Type<($DataResult$Mu$Type), (T12)>, arg13: $App$Type<($DataResult$Mu$Type), (T13)>, arg14: $App$Type<($DataResult$Mu$Type), (T14)>, arg15: $App$Type<($DataResult$Mu$Type), (T15)>, arg16: $App$Type<($DataResult$Mu$Type), (T16)>): $App<($DataResult$Mu), (R)>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6$Type<(T1), (T2), (T3), (T4), (T5), (T6), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>): $App<($DataResult$Mu), (R)>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function13$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>, arg11: $App$Type<($DataResult$Mu$Type), (T11)>, arg12: $App$Type<($DataResult$Mu$Type), (T12)>, arg13: $App$Type<($DataResult$Mu$Type), (T13)>): $App<($DataResult$Mu), (R)>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>): $App<($DataResult$Mu), (R)>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function15$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>, arg11: $App$Type<($DataResult$Mu$Type), (T11)>, arg12: $App$Type<($DataResult$Mu$Type), (T12)>, arg13: $App$Type<($DataResult$Mu$Type), (T13)>, arg14: $App$Type<($DataResult$Mu$Type), (T14)>, arg15: $App$Type<($DataResult$Mu$Type), (T15)>): $App<($DataResult$Mu), (R)>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App$Type<($DataResult$Mu$Type), ($Function14$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (R)>)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>, arg10: $App$Type<($DataResult$Mu$Type), (T10)>, arg11: $App$Type<($DataResult$Mu$Type), (T11)>, arg12: $App$Type<($DataResult$Mu$Type), (T12)>, arg13: $App$Type<($DataResult$Mu$Type), (T13)>, arg14: $App$Type<($DataResult$Mu$Type), (T14)>): $App<($DataResult$Mu), (R)>
public "apply5"<T1, T2, T3, T4, T5, R>(arg0: $Function5$Type<(T1), (T2), (T3), (T4), (T5), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>): $App<($DataResult$Mu), (R)>
public "apply4"<T1, T2, T3, T4, R>(arg0: $Function4$Type<(T1), (T2), (T3), (T4), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>): $App<($DataResult$Mu), (R)>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>): $App<($DataResult$Mu), (R)>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9$Type<(T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (R)>, arg1: $App$Type<($DataResult$Mu$Type), (T1)>, arg2: $App$Type<($DataResult$Mu$Type), (T2)>, arg3: $App$Type<($DataResult$Mu$Type), (T3)>, arg4: $App$Type<($DataResult$Mu$Type), (T4)>, arg5: $App$Type<($DataResult$Mu$Type), (T5)>, arg6: $App$Type<($DataResult$Mu$Type), (T6)>, arg7: $App$Type<($DataResult$Mu$Type), (T7)>, arg8: $App$Type<($DataResult$Mu$Type), (T8)>, arg9: $App$Type<($DataResult$Mu$Type), (T9)>): $App<($DataResult$Mu), (R)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>, arg10: $App$Type<($DataResult$Mu$Type), (T11)>): $Products$P11<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>): $Products$P10<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>): $Products$P9<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>, arg10: $App$Type<($DataResult$Mu$Type), (T11)>, arg11: $App$Type<($DataResult$Mu$Type), (T12)>, arg12: $App$Type<($DataResult$Mu$Type), (T13)>, arg13: $App$Type<($DataResult$Mu$Type), (T14)>, arg14: $App$Type<($DataResult$Mu$Type), (T15)>, arg15: $App$Type<($DataResult$Mu$Type), (T16)>): $Products$P16<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>, arg10: $App$Type<($DataResult$Mu$Type), (T11)>, arg11: $App$Type<($DataResult$Mu$Type), (T12)>, arg12: $App$Type<($DataResult$Mu$Type), (T13)>, arg13: $App$Type<($DataResult$Mu$Type), (T14)>, arg14: $App$Type<($DataResult$Mu$Type), (T15)>): $Products$P15<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>, arg10: $App$Type<($DataResult$Mu$Type), (T11)>, arg11: $App$Type<($DataResult$Mu$Type), (T12)>, arg12: $App$Type<($DataResult$Mu$Type), (T13)>, arg13: $App$Type<($DataResult$Mu$Type), (T14)>): $Products$P14<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>, arg10: $App$Type<($DataResult$Mu$Type), (T11)>, arg11: $App$Type<($DataResult$Mu$Type), (T12)>, arg12: $App$Type<($DataResult$Mu$Type), (T13)>): $Products$P13<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>, arg8: $App$Type<($DataResult$Mu$Type), (T9)>, arg9: $App$Type<($DataResult$Mu$Type), (T10)>, arg10: $App$Type<($DataResult$Mu$Type), (T11)>, arg11: $App$Type<($DataResult$Mu$Type), (T12)>): $Products$P12<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
public "group"<T1, T2, T3>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>): $Products$P3<($DataResult$Mu), (T1), (T2), (T3)>
public "group"<T1, T2>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>): $Products$P2<($DataResult$Mu), (T1), (T2)>
public "group"<T1>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>): $Products$P1<($DataResult$Mu), (T1)>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>, arg7: $App$Type<($DataResult$Mu$Type), (T8)>): $Products$P8<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
public "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>, arg6: $App$Type<($DataResult$Mu$Type), (T7)>): $Products$P7<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
public "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>, arg5: $App$Type<($DataResult$Mu$Type), (T6)>): $Products$P6<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5), (T6)>
public "group"<T1, T2, T3, T4, T5>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>, arg4: $App$Type<($DataResult$Mu$Type), (T5)>): $Products$P5<($DataResult$Mu), (T1), (T2), (T3), (T4), (T5)>
public "group"<T1, T2, T3, T4>(arg0: $App$Type<($DataResult$Mu$Type), (T1)>, arg1: $App$Type<($DataResult$Mu$Type), (T2)>, arg2: $App$Type<($DataResult$Mu$Type), (T3)>, arg3: $App$Type<($DataResult$Mu$Type), (T4)>): $Products$P4<($DataResult$Mu), (T1), (T2), (T3), (T4)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$Instance$Type = (("instance")) | ($DataResult$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$Instance_ = $DataResult$Instance$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServerAddress" {
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerAddress extends $ValueObject {
 "address": string
 "resourcePackUrl": string
 "resourcePackHash": string

constructor()

public static "parse"(arg0: string): $RealmsServerAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerAddress$Type = ($RealmsServerAddress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerAddress_ = $RealmsServerAddress$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$Program$Type" {
import {$Program, $Program$Type} from "packages/com/mojang/blaze3d/shaders/$Program"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ProgramTypeAccessor, $ProgramTypeAccessor$Type} from "packages/net/irisshaders/iris/mixin/$ProgramTypeAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Program$Type extends $Enum<($Program$Type)> implements $ProgramTypeAccessor {
static readonly "VERTEX": $Program$Type
static readonly "FRAGMENT": $Program$Type


public static "values"(): ($Program$Type)[]
public static "valueOf"(arg0: string): $Program$Type
public "getPrograms"(): $Map<(string), ($Program)>
public "getExtension"(): string
public "getName"(): string
public "getGlType"(): integer
get "programs"(): $Map<(string), ($Program)>
get "extension"(): string
get "name"(): string
get "glType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Program$Type$Type = (("fragment") | ("tess_control") | ("vertex") | ("tess_eval") | ("geometry")) | ($Program$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Program$Type_ = $Program$Type$Type;
}}
declare module "packages/com/mojang/brigadier/$ResultConsumer" {
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $ResultConsumer<S> {

 "onCommandComplete"(arg0: $CommandContext$Type<(S)>, arg1: boolean, arg2: integer): void

(arg0: $CommandContext$Type<(S)>, arg1: boolean, arg2: integer): void
}

export namespace $ResultConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultConsumer$Type<S> = ($ResultConsumer<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResultConsumer_<S> = $ResultConsumer$Type<(S)>;
}}
declare module "packages/com/mojang/authlib/minecraft/report/$ReportChatMessage" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Instant, $Instant$Type} from "packages/java/time/$Instant"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $ReportChatMessage {
 "index": integer
 "profileId": $UUID
 "sessionId": $UUID
 "timestamp": $Instant
 "salt": long
 "lastSeen": $List<($ByteBuffer)>
 "message": string
 "signature": $ByteBuffer
 "messageReported": boolean

constructor(arg0: integer, arg1: $UUID$Type, arg2: $UUID$Type, arg3: $Instant$Type, arg4: long, arg5: $List$Type<($ByteBuffer$Type)>, arg6: string, arg7: $ByteBuffer$Type, arg8: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportChatMessage$Type = ($ReportChatMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReportChatMessage_ = $ReportChatMessage$Type;
}}
declare module "packages/com/mojang/serialization/$Keyable" {
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Keyable {

 "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>

(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
}

export namespace $Keyable {
function forStrings(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyable$Type = ($Keyable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyable_ = $Keyable$Type;
}}
declare module "packages/com/mojang/datafixers/types/templates/$TypeTemplate" {
import {$FamilyOptic, $FamilyOptic$Type} from "packages/com/mojang/datafixers/$FamilyOptic"
import {$TypeFamily, $TypeFamily$Type} from "packages/com/mojang/datafixers/types/families/$TypeFamily"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"

export interface $TypeTemplate {

 "size"(): integer
 "apply"(arg0: $TypeFamily$Type): $TypeFamily
 "hmap"(arg0: $TypeFamily$Type, arg1: $IntFunction$Type<($RewriteResult$Type<(any), (any)>)>): $IntFunction<($RewriteResult<(any), (any)>)>
 "applyO"<A, B>(arg0: $FamilyOptic$Type<(A), (B)>, arg1: $Type$Type<(A)>, arg2: $Type$Type<(B)>): $FamilyOptic<(A), (B)>
 "toSimpleType"(): $Type<(any)>
 "findFieldOrType"<A, B>(arg0: integer, arg1: string, arg2: $Type$Type<(A)>, arg3: $Type$Type<(B)>): $Either<($TypeTemplate), ($Type$FieldNotFoundException)>
}

export namespace $TypeTemplate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeTemplate$Type = ($TypeTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeTemplate_ = $TypeTemplate$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$Applicative$Mu" {
import {$Functor$Mu, $Functor$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Functor$Mu"

export interface $Applicative$Mu extends $Functor$Mu {

}

export namespace $Applicative$Mu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Applicative$Mu$Type = ($Applicative$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Applicative$Mu_ = $Applicative$Mu$Type;
}}
declare module "packages/com/mojang/brigadier/exceptions/$Dynamic3CommandExceptionType$Function" {
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"

export interface $Dynamic3CommandExceptionType$Function {

 "apply"(arg0: any, arg1: any, arg2: any): $Message

(arg0: any, arg1: any, arg2: any): $Message
}

export namespace $Dynamic3CommandExceptionType$Function {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic3CommandExceptionType$Function$Type = ($Dynamic3CommandExceptionType$Function);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic3CommandExceptionType$Function_ = $Dynamic3CommandExceptionType$Function$Type;
}}
declare module "packages/com/mojang/serialization/$Dynamic" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$DynamicLike, $DynamicLike$Type} from "packages/com/mojang/serialization/$DynamicLike"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$OptionalDynamic, $OptionalDynamic$Type} from "packages/com/mojang/serialization/$OptionalDynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Dynamic<T> extends $DynamicLike<(T)> {

constructor(arg0: $DynamicOps$Type<(T)>)
constructor(arg0: $DynamicOps$Type<(T)>, arg1: T)

public "remove"(arg0: string): $Dynamic<(T)>
public "get"(arg0: string): $OptionalDynamic<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "cast"<U>(arg0: $DynamicOps$Type<(U)>): U
public "update"(arg0: string, arg1: $Function$Type<($Dynamic$Type<(any)>), ($Dynamic$Type<(any)>)>): $Dynamic<(T)>
public "convert"<R>(arg0: $DynamicOps$Type<(R)>): $Dynamic<(R)>
public static "convert"<S, T>(arg0: $DynamicOps$Type<(S)>, arg1: $DynamicOps$Type<(T)>, arg2: S): T
public "decode"<A>(arg0: $Decoder$Type<(any)>): $DataResult<($Pair<(A), (T)>)>
public "getValue"(): T
public "map"(arg0: $Function$Type<(any), (any)>): $Dynamic<(T)>
public "merge"(arg0: $Dynamic$Type<(any)>, arg1: $Dynamic$Type<(any)>): $OptionalDynamic<(T)>
public "merge"(arg0: $Dynamic$Type<(any)>): $OptionalDynamic<(T)>
public "set"(arg0: string, arg1: $Dynamic$Type<(any)>): $Dynamic<(T)>
public "getGeneric"(arg0: T): $DataResult<(T)>
public "getMapValues"(): $DataResult<($Map<($Dynamic<(T)>), ($Dynamic<(T)>)>)>
public "updateGeneric"(arg0: T, arg1: $Function$Type<(T), (T)>): $Dynamic<(T)>
public "castTyped"<U>(arg0: $DynamicOps$Type<(U)>): $Dynamic<(U)>
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "asNumber"(): $DataResult<(number)>
public "updateMapValues"(arg0: $Function$Type<($Pair$Type<($Dynamic$Type<(any)>), ($Dynamic$Type<(any)>)>), ($Pair$Type<($Dynamic$Type<(any)>), ($Dynamic$Type<(any)>)>)>): $Dynamic<(T)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "asString"(): $DataResult<(string)>
public "into"<V>(arg0: $Function$Type<(any), (any)>): V
public "getElement"(arg0: string): $DataResult<(T)>
get "value"(): T
get "mapValues"(): $DataResult<($Map<($Dynamic<(T)>), ($Dynamic<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dynamic$Type<T> = ($Dynamic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dynamic_<T> = $Dynamic$Type<(T)>;
}}
declare module "packages/com/mojang/authlib/minecraft/report/$ReportedEntity" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export class $ReportedEntity {
 "profileId": $UUID

constructor(arg0: $UUID$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReportedEntity$Type = ($ReportedEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReportedEntity_ = $ReportedEntity$Type;
}}
declare module "packages/com/mojang/datafixers/kinds/$Functor" {
import {$Products$P10, $Products$P10$Type} from "packages/com/mojang/datafixers/$Products$P10"
import {$Products$P11, $Products$P11$Type} from "packages/com/mojang/datafixers/$Products$P11"
import {$Kind1, $Kind1$Type} from "packages/com/mojang/datafixers/kinds/$Kind1"
import {$Products$P14, $Products$P14$Type} from "packages/com/mojang/datafixers/$Products$P14"
import {$Products$P15, $Products$P15$Type} from "packages/com/mojang/datafixers/$Products$P15"
import {$Products$P12, $Products$P12$Type} from "packages/com/mojang/datafixers/$Products$P12"
import {$Products$P13, $Products$P13$Type} from "packages/com/mojang/datafixers/$Products$P13"
import {$Products$P3, $Products$P3$Type} from "packages/com/mojang/datafixers/$Products$P3"
import {$Products$P4, $Products$P4$Type} from "packages/com/mojang/datafixers/$Products$P4"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Products$P16, $Products$P16$Type} from "packages/com/mojang/datafixers/$Products$P16"
import {$Products$P1, $Products$P1$Type} from "packages/com/mojang/datafixers/$Products$P1"
import {$Products$P2, $Products$P2$Type} from "packages/com/mojang/datafixers/$Products$P2"
import {$Products$P9, $Products$P9$Type} from "packages/com/mojang/datafixers/$Products$P9"
import {$Products$P7, $Products$P7$Type} from "packages/com/mojang/datafixers/$Products$P7"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$Functor$Mu, $Functor$Mu$Type} from "packages/com/mojang/datafixers/kinds/$Functor$Mu"
import {$Products$P8, $Products$P8$Type} from "packages/com/mojang/datafixers/$Products$P8"
import {$Products$P5, $Products$P5$Type} from "packages/com/mojang/datafixers/$Products$P5"
import {$Products$P6, $Products$P6$Type} from "packages/com/mojang/datafixers/$Products$P6"

export interface $Functor<F extends $K1, Mu extends $Functor$Mu> extends $Kind1<(F), (Mu)> {

 "map"<T, R>(arg0: $Function$Type<(any), (any)>, arg1: $App$Type<(F), (T)>): $App<(F), (R)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>): $Products$P11<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>): $Products$P10<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>): $Products$P9<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>, arg15: $App$Type<(F), (T16)>): $Products$P16<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15), (T16)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>, arg14: $App$Type<(F), (T15)>): $Products$P15<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14), (T15)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>, arg13: $App$Type<(F), (T14)>): $Products$P14<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13), (T14)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>, arg12: $App$Type<(F), (T13)>): $Products$P13<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12), (T13)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>, arg8: $App$Type<(F), (T9)>, arg9: $App$Type<(F), (T10)>, arg10: $App$Type<(F), (T11)>, arg11: $App$Type<(F), (T12)>): $Products$P12<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8), (T9), (T10), (T11), (T12)>
 "group"<T1, T2, T3>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>): $Products$P3<(F), (T1), (T2), (T3)>
 "group"<T1, T2>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>): $Products$P2<(F), (T1), (T2)>
 "group"<T1>(arg0: $App$Type<(F), (T1)>): $Products$P1<(F), (T1)>
 "group"<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>, arg7: $App$Type<(F), (T8)>): $Products$P8<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7), (T8)>
 "group"<T1, T2, T3, T4, T5, T6, T7>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>, arg6: $App$Type<(F), (T7)>): $Products$P7<(F), (T1), (T2), (T3), (T4), (T5), (T6), (T7)>
 "group"<T1, T2, T3, T4, T5, T6>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>, arg5: $App$Type<(F), (T6)>): $Products$P6<(F), (T1), (T2), (T3), (T4), (T5), (T6)>
 "group"<T1, T2, T3, T4, T5>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>, arg4: $App$Type<(F), (T5)>): $Products$P5<(F), (T1), (T2), (T3), (T4), (T5)>
 "group"<T1, T2, T3, T4>(arg0: $App$Type<(F), (T1)>, arg1: $App$Type<(F), (T2)>, arg2: $App$Type<(F), (T3)>, arg3: $App$Type<(F), (T4)>): $Products$P4<(F), (T1), (T2), (T3), (T4)>

(arg0: $Function$Type<(any), (any)>, arg1: $App$Type<(F), (T)>): $App<(F), (R)>
}

export namespace $Functor {
function unbox<F, Mu>(arg0: $App$Type<(Mu), (F)>): $Functor<(F), (Mu)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Functor$Type<F, Mu> = ($Functor<(F), (Mu)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Functor_<F, Mu> = $Functor$Type<(F), (Mu)>;
}}
declare module "packages/com/mojang/brigadier/suggestion/$SuggestionProvider" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export interface $SuggestionProvider<S> {

 "getSuggestions"(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>

(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
}

export namespace $SuggestionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionProvider$Type<S> = ($SuggestionProvider<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuggestionProvider_<S> = $SuggestionProvider$Type<(S)>;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexSorting" {
import {$VertexSorting$DistanceFunction, $VertexSorting$DistanceFunction$Type} from "packages/com/mojang/blaze3d/vertex/$VertexSorting$DistanceFunction"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export interface $VertexSorting {

 "sort"(arg0: ($Vector3f$Type)[]): (integer)[]

(arg0: float, arg1: float, arg2: float): $VertexSorting
}

export namespace $VertexSorting {
const DISTANCE_TO_ORIGIN: $VertexSorting
const ORTHOGRAPHIC_Z: $VertexSorting
function byDistance(arg0: float, arg1: float, arg2: float): $VertexSorting
function byDistance(arg0: $Vector3f$Type): $VertexSorting
function byDistance(arg0: $VertexSorting$DistanceFunction$Type): $VertexSorting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexSorting$Type = ($VertexSorting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexSorting_ = $VertexSorting$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VertexFormatElement$Type extends $Enum<($VertexFormatElement$Type)> {
static readonly "FLOAT": $VertexFormatElement$Type
static readonly "UBYTE": $VertexFormatElement$Type
static readonly "BYTE": $VertexFormatElement$Type
static readonly "USHORT": $VertexFormatElement$Type
static readonly "SHORT": $VertexFormatElement$Type
static readonly "UINT": $VertexFormatElement$Type
static readonly "INT": $VertexFormatElement$Type


public static "values"(): ($VertexFormatElement$Type)[]
public static "valueOf"(arg0: string): $VertexFormatElement$Type
public "getSize"(): integer
public "getName"(): string
public "getGlType"(): integer
get "size"(): integer
get "name"(): string
get "glType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Type$Type = (("ubyte") | ("byte") | ("short") | ("ushort") | ("float") | ("uint") | ("int")) | ($VertexFormatElement$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatElement$Type_ = $VertexFormatElement$Type$Type;
}}
declare module "packages/com/mojang/datafixers/schemas/$Schema" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$DSL$TypeReference, $DSL$TypeReference$Type} from "packages/com/mojang/datafixers/$DSL$TypeReference"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TaggedChoice$TaggedChoiceType, $TaggedChoice$TaggedChoiceType$Type} from "packages/com/mojang/datafixers/types/templates/$TaggedChoice$TaggedChoiceType"
import {$TypeTemplate, $TypeTemplate$Type} from "packages/com/mojang/datafixers/types/templates/$TypeTemplate"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Schema {

constructor(arg0: integer, arg1: $Schema$Type)

public "register"(arg0: $Map$Type<(string), ($Supplier$Type<($TypeTemplate$Type)>)>, arg1: string, arg2: $Supplier$Type<($TypeTemplate$Type)>): void
public "register"(arg0: $Map$Type<(string), ($Supplier$Type<($TypeTemplate$Type)>)>, arg1: string, arg2: $Function$Type<(string), ($TypeTemplate$Type)>): void
public "id"(arg0: string): $TypeTemplate
public "getParent"(): $Schema
public "getType"(arg0: $DSL$TypeReference$Type): $Type<(any)>
public "types"(): $Set<(string)>
public "registerEntities"(arg0: $Schema$Type): $Map<(string), ($Supplier<($TypeTemplate)>)>
public "registerTypes"(arg0: $Schema$Type, arg1: $Map$Type<(string), ($Supplier$Type<($TypeTemplate$Type)>)>, arg2: $Map$Type<(string), ($Supplier$Type<($TypeTemplate$Type)>)>): void
public "registerType"(arg0: boolean, arg1: $DSL$TypeReference$Type, arg2: $Supplier$Type<($TypeTemplate$Type)>): void
public "registerSimple"(arg0: $Map$Type<(string), ($Supplier$Type<($TypeTemplate$Type)>)>, arg1: string): void
public "resolveTemplate"(arg0: string): $TypeTemplate
public "getChoiceType"(arg0: $DSL$TypeReference$Type, arg1: string): $Type<(any)>
public "registerBlockEntities"(arg0: $Schema$Type): $Map<(string), ($Supplier<($TypeTemplate)>)>
public "getVersionKey"(): integer
public "getTypeRaw"(arg0: $DSL$TypeReference$Type): $Type<(any)>
public "findChoiceType"(arg0: $DSL$TypeReference$Type): $TaggedChoice$TaggedChoiceType<(any)>
get "parent"(): $Schema
get "versionKey"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Schema$Type = ($Schema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Schema_ = $Schema$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$ValueObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ValueObject {

constructor()

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueObject$Type = ($ValueObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueObject_ = $ValueObject$Type;
}}
declare module "packages/com/mojang/authlib/minecraft/$TelemetryPropertyContainer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $TelemetryPropertyContainer {

 "addNullProperty"(arg0: string): void
 "addProperty"(arg0: string, arg1: string): void
 "addProperty"(arg0: string, arg1: boolean): void
 "addProperty"(arg0: string, arg1: long): void
 "addProperty"(arg0: string, arg1: integer): void
}

export namespace $TelemetryPropertyContainer {
function forJsonObject(arg0: $JsonObject$Type): $TelemetryPropertyContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelemetryPropertyContainer$Type = ($TelemetryPropertyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TelemetryPropertyContainer_ = $TelemetryPropertyContainer$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexSorting$DistanceFunction" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"

export interface $VertexSorting$DistanceFunction {

 "apply"(arg0: $Vector3f$Type): float

(arg0: $Vector3f$Type): float
}

export namespace $VertexSorting$DistanceFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexSorting$DistanceFunction$Type = ($VertexSorting$DistanceFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexSorting$DistanceFunction_ = $VertexSorting$DistanceFunction$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$PingResult" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$RegionPingResult, $RegionPingResult$Type} from "packages/com/mojang/realmsclient/dto/$RegionPingResult"
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$Type} from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $PingResult extends $ValueObject implements $ReflectionBasedSerialization {
 "pingResults": $List<($RegionPingResult)>
 "worldIds": $List<(long)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingResult$Type = ($PingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingResult_ = $PingResult$Type;
}}
declare module "packages/com/mojang/brigadier/arguments/$StringArgumentType$StringType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $StringArgumentType$StringType extends $Enum<($StringArgumentType$StringType)> {
static readonly "SINGLE_WORD": $StringArgumentType$StringType
static readonly "QUOTABLE_PHRASE": $StringArgumentType$StringType
static readonly "GREEDY_PHRASE": $StringArgumentType$StringType


public static "values"(): ($StringArgumentType$StringType)[]
public static "valueOf"(arg0: string): $StringArgumentType$StringType
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentType$StringType$Type = (("greedy_phrase") | ("single_word") | ("quotable_phrase")) | ($StringArgumentType$StringType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringArgumentType$StringType_ = $StringArgumentType$StringType$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$SimpleMapCodec" {
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$BaseMapCodec, $BaseMapCodec$Type} from "packages/com/mojang/serialization/codecs/$BaseMapCodec"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RecordBuilder, $RecordBuilder$Type} from "packages/com/mojang/serialization/$RecordBuilder"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$MapLike, $MapLike$Type} from "packages/com/mojang/serialization/$MapLike"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleMapCodec<K, V> extends $MapCodec<($Map<(K), (V)>)> implements $BaseMapCodec<(K), (V)> {

constructor(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $MapLike$Type<(T)>): $DataResult<($Map<(K), (V)>)>
public "encode"<T>(arg0: $Map$Type<(K), (V)>, arg1: $DynamicOps$Type<(T)>, arg2: $RecordBuilder$Type<(T)>): $RecordBuilder<(T)>
public "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
public "elementCodec"(): $Codec<(V)>
public "keyCodec"(): $Codec<(K)>
public "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$Type<(T)>, arg1: $KeyCompressor$Type<(T)>): $RecordBuilder<(T)>
public static "forStrings"(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapCodec$Type<K, V> = ($SimpleMapCodec<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMapCodec_<K, V> = $SimpleMapCodec$Type<(K), (V)>;
}}
declare module "packages/com/mojang/brigadier/arguments/$FloatArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $FloatArgumentType implements $ArgumentType<(float)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getFloat"(arg0: $CommandContext$Type<(any)>, arg1: string): float
public "getMinimum"(): float
public "getMaximum"(): float
public "getExamples"(): $Collection<(string)>
public static "floatArg"(arg0: float): $FloatArgumentType
public static "floatArg"(arg0: float, arg1: float): $FloatArgumentType
public static "floatArg"(): $FloatArgumentType
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "minimum"(): float
get "maximum"(): float
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatArgumentType$Type = ($FloatArgumentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatArgumentType_ = $FloatArgumentType$Type;
}}
declare module "packages/com/mojang/authlib/yggdrasil/$ServicesKeyInfo" {
import {$Signature, $Signature$Type} from "packages/java/security/$Signature"
import {$Property, $Property$Type} from "packages/com/mojang/authlib/properties/$Property"

export interface $ServicesKeyInfo {

 "signature"(): $Signature
 "validateProperty"(arg0: $Property$Type): boolean
 "signatureBitCount"(): integer
 "keyBitCount"(): integer
}

export namespace $ServicesKeyInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServicesKeyInfo$Type = ($ServicesKeyInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServicesKeyInfo_ = $ServicesKeyInfo$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$Ops" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $Ops extends $ValueObject {
 "ops": $Set<(string)>

constructor()

public static "parse"(arg0: string): $Ops
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ops$Type = ($Ops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ops_ = $Ops$Type;
}}
declare module "packages/com/mojang/authlib/$AuthenticationService" {
import {$Agent, $Agent$Type} from "packages/com/mojang/authlib/$Agent"
import {$UserAuthentication, $UserAuthentication$Type} from "packages/com/mojang/authlib/$UserAuthentication"
import {$GameProfileRepository, $GameProfileRepository$Type} from "packages/com/mojang/authlib/$GameProfileRepository"
import {$MinecraftSessionService, $MinecraftSessionService$Type} from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"

export interface $AuthenticationService {

 "createProfileRepository"(): $GameProfileRepository
 "createUserAuthentication"(arg0: $Agent$Type): $UserAuthentication
 "createMinecraftSessionService"(): $MinecraftSessionService
}

export namespace $AuthenticationService {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuthenticationService$Type = ($AuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuthenticationService_ = $AuthenticationService$Type;
}}
declare module "packages/com/mojang/authlib/$HttpAuthenticationService" {
import {$Proxy, $Proxy$Type} from "packages/java/net/$Proxy"
import {$BaseAuthenticationService, $BaseAuthenticationService$Type} from "packages/com/mojang/authlib/$BaseAuthenticationService"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HttpAuthenticationService extends $BaseAuthenticationService {


public "getProxy"(): $Proxy
public "performGetRequest"(arg0: $URL$Type, arg1: string): string
public "performGetRequest"(arg0: $URL$Type): string
public static "constantURL"(arg0: string): $URL
public "performPostRequest"(arg0: $URL$Type, arg1: string, arg2: string): string
public static "concatenateURL"(arg0: $URL$Type, arg1: string): $URL
public static "buildQuery"(arg0: $Map$Type<(string), (any)>): string
get "proxy"(): $Proxy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HttpAuthenticationService$Type = ($HttpAuthenticationService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HttpAuthenticationService_ = $HttpAuthenticationService$Type;
}}
declare module "packages/com/mojang/serialization/$DynamicLike" {
import {$LongStream, $LongStream$Type} from "packages/java/util/stream/$LongStream"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$OptionalDynamic, $OptionalDynamic$Type} from "packages/com/mojang/serialization/$OptionalDynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DynamicLike<T> {

constructor(arg0: $DynamicOps$Type<(T)>)

public "get"(arg0: string): $OptionalDynamic<(T)>
public "decode"<A>(arg0: $Decoder$Type<(any)>): $DataResult<($Pair<(A), (T)>)>
public "emptyList"(): $Dynamic<(T)>
public "read"<A>(arg0: $Decoder$Type<(any)>): $DataResult<(A)>
public "asList"<U>(arg0: $Function$Type<($Dynamic$Type<(T)>), (U)>): $List<(U)>
public "createMap"(arg0: $Map$Type<(any), (any)>): $Dynamic<(T)>
public "emptyMap"(): $Dynamic<(T)>
public "createLong"(arg0: long): $Dynamic<(T)>
public "createString"(arg0: string): $Dynamic<(T)>
public "asLongStream"(): $LongStream
public "getGeneric"(arg0: T): $DataResult<(T)>
public "getOps"(): $DynamicOps<(T)>
public "createBoolean"(arg0: boolean): $Dynamic<(T)>
public "createByte"(arg0: byte): $Dynamic<(T)>
public "createInt"(arg0: integer): $Dynamic<(T)>
public "createIntList"(arg0: $IntStream$Type): $Dynamic<(any)>
public "createByteList"(arg0: $ByteBuffer$Type): $Dynamic<(any)>
public "createShort"(arg0: short): $Dynamic<(T)>
public "createLongList"(arg0: $LongStream$Type): $Dynamic<(any)>
public "asIntStream"(): $IntStream
public "asByteBuffer"(): $ByteBuffer
public "asStream"(): $Stream<($Dynamic<(T)>)>
public "createNumeric"(arg0: number): $Dynamic<(T)>
public "getElementGeneric"(arg0: T, arg1: T): T
public "getElementGeneric"(arg0: T): $DataResult<(T)>
public "asByteBufferOpt"(): $DataResult<($ByteBuffer)>
public "asIntStreamOpt"(): $DataResult<($IntStream)>
public "asMapOpt"(): $DataResult<($Stream<($Pair<($Dynamic<(T)>), ($Dynamic<(T)>)>)>)>
public "asMapOpt"<K, V>(arg0: $Function$Type<($Dynamic$Type<(T)>), (K)>, arg1: $Function$Type<($Dynamic$Type<(T)>), (V)>): $DataResult<($Map<(K), (V)>)>
public "asStreamOpt"(): $DataResult<($Stream<($Dynamic<(T)>)>)>
public "asNumber"(arg0: number): number
public "asNumber"(): $DataResult<(number)>
public "asLongStreamOpt"(): $DataResult<($LongStream)>
public "readMap"<K, V>(arg0: $Decoder$Type<(K)>, arg1: $Decoder$Type<(V)>): $DataResult<($List<($Pair<(K), (V)>)>)>
public "readMap"<R>(arg0: $DataResult$Type<(R)>, arg1: $Function3$Type<(R), ($Dynamic$Type<(T)>), ($Dynamic$Type<(T)>), ($DataResult$Type<(R)>)>): $DataResult<(R)>
public "readMap"<K, V>(arg0: $Decoder$Type<(K)>, arg1: $Function$Type<(K), ($Decoder$Type<(V)>)>): $DataResult<($List<($Pair<(K), (V)>)>)>
public "asListOpt"<U>(arg0: $Function$Type<($Dynamic$Type<(T)>), (U)>): $DataResult<($List<(U)>)>
public "readList"<E>(arg0: $Function$Type<(any), (any)>): $DataResult<($List<(E)>)>
public "readList"<E>(arg0: $Decoder$Type<(E)>): $DataResult<($List<(E)>)>
public "asByte"(arg0: byte): byte
public "asShort"(arg0: short): short
public "asBoolean"(arg0: boolean): boolean
public "asFloat"(arg0: float): float
public "asLong"(arg0: long): long
public "asInt"(arg0: integer): integer
public "createList"(arg0: $Stream$Type<(any)>): $Dynamic<(T)>
public "asDouble"(arg0: double): double
public "asString"(): $DataResult<(string)>
public "asString"(arg0: string): string
public "getElement"(arg0: string, arg1: T): T
public "getElement"(arg0: string): $DataResult<(T)>
public "asMap"<K, V>(arg0: $Function$Type<($Dynamic$Type<(T)>), (K)>, arg1: $Function$Type<($Dynamic$Type<(T)>), (V)>): $Map<(K), (V)>
public "createFloat"(arg0: float): $Dynamic<(T)>
public "createDouble"(arg0: double): $Dynamic<(T)>
get "ops"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLike$Type<T> = ($DynamicLike<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLike_<T> = $DynamicLike$Type<(T)>;
}}
declare module "packages/com/mojang/blaze3d/platform/$MonitorCreator" {
import {$Monitor, $Monitor$Type} from "packages/com/mojang/blaze3d/platform/$Monitor"

export interface $MonitorCreator {

 "createMonitor"(arg0: long): $Monitor

(arg0: long): $Monitor
}

export namespace $MonitorCreator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorCreator$Type = ($MonitorCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorCreator_ = $MonitorCreator$Type;
}}
declare module "packages/com/mojang/serialization/codecs/$PrimitiveCodec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$UnboundedMapCodec, $UnboundedMapCodec$Type} from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import {$MapEncoder, $MapEncoder$Type} from "packages/com/mojang/serialization/$MapEncoder"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Encoder, $Encoder$Type} from "packages/com/mojang/serialization/$Encoder"
import {$Codec$ResultFunction, $Codec$ResultFunction$Type} from "packages/com/mojang/serialization/$Codec$ResultFunction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Decoder, $Decoder$Type} from "packages/com/mojang/serialization/$Decoder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Lifecycle, $Lifecycle$Type} from "packages/com/mojang/serialization/$Lifecycle"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Decoder$Boxed, $Decoder$Boxed$Type} from "packages/com/mojang/serialization/$Decoder$Boxed"
import {$MapDecoder, $MapDecoder$Type} from "packages/com/mojang/serialization/$MapDecoder"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Decoder$Simple, $Decoder$Simple$Type} from "packages/com/mojang/serialization/$Decoder$Simple"
import {$SimpleMapCodec, $SimpleMapCodec$Type} from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import {$Decoder$Terminal, $Decoder$Terminal$Type} from "packages/com/mojang/serialization/$Decoder$Terminal"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export interface $PrimitiveCodec<A> extends $Codec<(A)> {

 "decode"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<($Pair<(A), (T)>)>
 "encode"<T>(arg0: A, arg1: $DynamicOps$Type<(T)>, arg2: T): $DataResult<(T)>
 "write"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): T
 "read"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
 "dispatch"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
 "dispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
 "orElse"(arg0: A): $Codec<(A)>
 "orElse"(arg0: $UnaryOperator$Type<(string)>, arg1: A): $Codec<(A)>
 "orElse"(arg0: $Consumer$Type<(string)>, arg1: A): $Codec<(A)>
 "orElseGet"(arg0: $Supplier$Type<(any)>): $Codec<(A)>
 "orElseGet"(arg0: $Consumer$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(A)>
 "orElseGet"(arg0: $UnaryOperator$Type<(string)>, arg1: $Supplier$Type<(any)>): $Codec<(A)>
 "xmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "optionalFieldOf"(arg0: string, arg1: A, arg2: $Lifecycle$Type): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string, arg1: A): $MapCodec<(A)>
 "optionalFieldOf"(arg0: string): $MapCodec<($Optional<(A)>)>
 "optionalFieldOf"(arg0: string, arg1: $Lifecycle$Type, arg2: A, arg3: $Lifecycle$Type): $MapCodec<(A)>
 "deprecated"(arg0: integer): $Codec<(A)>
 "flatXmap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "mapResult"(arg0: $Codec$ResultFunction$Type<(A)>): $Codec<(A)>
 "dispatchMap"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $MapCodec<(E)>
 "dispatchMap"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $MapCodec<(E)>
 "promotePartial"(arg0: $Consumer$Type<(string)>): $Codec<(A)>
 "partialDispatch"<E>(arg0: string, arg1: $Function$Type<(any), (any)>, arg2: $Function$Type<(any), (any)>): $Codec<(E)>
 "flatComapMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "comapFlatMap"<S>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(S)>
 "dispatchStable"<E>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
 "listOf"(): $Codec<($List<(A)>)>
 "stable"(): $Codec<(A)>
 "comap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
 "flatComap"<B>(arg0: $Function$Type<(any), (any)>): $Encoder<(B)>
 "encodeStart"<T>(arg0: $DynamicOps$Type<(T)>, arg1: A): $DataResult<(T)>
 "decode"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<($Pair<(A), (T)>)>
 "map"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
 "flatMap"<B>(arg0: $Function$Type<(any), (any)>): $Decoder<(B)>
 "parse"<T>(arg0: $Dynamic$Type<(T)>): $DataResult<(A)>
 "parse"<T>(arg0: $DynamicOps$Type<(T)>, arg1: T): $DataResult<(A)>
 "boxed"(): $Decoder$Boxed<(A)>
 "simple"(): $Decoder$Simple<(A)>
 "terminal"(): $Decoder$Terminal<(A)>
}

export namespace $PrimitiveCodec {
function unit<A>(arg0: $Supplier$Type<(A)>): $Codec<(A)>
function unit<A>(arg0: A): $Codec<(A)>
function of<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>, arg2: $Supplier$Type<(string)>): $MapCodec<(A)>
function of<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>): $Codec<(A)>
function of<A>(arg0: $MapEncoder$Type<(A)>, arg1: $MapDecoder$Type<(A)>): $MapCodec<(A)>
function of<A>(arg0: $Encoder$Type<(A)>, arg1: $Decoder$Type<(A)>, arg2: string): $Codec<(A)>
function list<E>(arg0: $Codec$Type<(E)>): $Codec<($List<(E)>)>
function checkRange<N>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
function pair<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Pair<(F), (S)>)>
function optionalField<F>(arg0: string, arg1: $Codec$Type<(F)>): $MapCodec<($Optional<(F)>)>
function mapPair<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
function simpleMap<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>, arg2: $Keyable$Type): $SimpleMapCodec<(K), (V)>
function mapEither<F, S>(arg0: $MapCodec$Type<(F)>, arg1: $MapCodec$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
function compoundList<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
function either<F, S>(arg0: $Codec$Type<(F)>, arg1: $Codec$Type<(S)>): $Codec<($Either<(F), (S)>)>
function unboundedMap<K, V>(arg0: $Codec$Type<(K)>, arg1: $Codec$Type<(V)>): $UnboundedMapCodec<(K), (V)>
function doubleRange(arg0: double, arg1: double): $Codec<(double)>
function floatRange(arg0: float, arg1: float): $Codec<(float)>
function intRange(arg0: integer, arg1: integer): $Codec<(integer)>
function empty<A>(): $MapEncoder<(A)>
function error<A>(arg0: string): $Encoder<(A)>
function ofTerminal<A>(arg0: $Decoder$Terminal$Type<(any)>): $Decoder<(A)>
function ofBoxed<A>(arg0: $Decoder$Boxed$Type<(any)>): $Decoder<(A)>
function ofSimple<A>(arg0: $Decoder$Simple$Type<(any)>): $Decoder<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveCodec$Type<A> = ($PrimitiveCodec<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveCodec_<A> = $PrimitiveCodec$Type<(A)>;
}}
declare module "packages/com/mojang/datafixers/$TypeRewriteRule" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$PointFreeRule, $PointFreeRule$Type} from "packages/com/mojang/datafixers/functions/$PointFreeRule"
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"

export interface $TypeRewriteRule {

 "rewrite"<A>(arg0: $Type$Type<(A)>): $Optional<($RewriteResult<(A), (any)>)>

(arg0: $TypeRewriteRule$Type, arg1: $TypeRewriteRule$Type): $TypeRewriteRule
}

export namespace $TypeRewriteRule {
function orElse(arg0: $TypeRewriteRule$Type, arg1: $TypeRewriteRule$Type): $TypeRewriteRule
function orElse(arg0: $TypeRewriteRule$Type, arg1: $Supplier$Type<($TypeRewriteRule$Type)>): $TypeRewriteRule
function seq(arg0: $TypeRewriteRule$Type, arg1: $TypeRewriteRule$Type): $TypeRewriteRule
function seq(arg0: $TypeRewriteRule$Type, ...arg1: ($TypeRewriteRule$Type)[]): $TypeRewriteRule
function seq(arg0: $List$Type<($TypeRewriteRule$Type)>): $TypeRewriteRule
function all(arg0: $TypeRewriteRule$Type, arg1: boolean, arg2: boolean): $TypeRewriteRule
function one(arg0: $TypeRewriteRule$Type): $TypeRewriteRule
function nop(): $TypeRewriteRule
function once(arg0: $TypeRewriteRule$Type): $TypeRewriteRule
function checkOnce(arg0: $TypeRewriteRule$Type, arg1: $Consumer$Type<($Type$Type<(any)>)>): $TypeRewriteRule
function ifSame<B>(arg0: $Type$Type<(B)>, arg1: $RewriteResult$Type<(B), (any)>): $TypeRewriteRule
function everywhere(arg0: $TypeRewriteRule$Type, arg1: $PointFreeRule$Type, arg2: boolean, arg3: boolean): $TypeRewriteRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeRewriteRule$Type = ($TypeRewriteRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeRewriteRule_ = $TypeRewriteRule$Type;
}}
declare module "packages/com/mojang/blaze3d/platform/$ScreenManager" {
import {$MonitorCreator, $MonitorCreator$Type} from "packages/com/mojang/blaze3d/platform/$MonitorCreator"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$Monitor, $Monitor$Type} from "packages/com/mojang/blaze3d/platform/$Monitor"

export class $ScreenManager {

constructor(arg0: $MonitorCreator$Type)

public "getMonitor"(arg0: long): $Monitor
public "findBestMonitor"(arg0: $Window$Type): $Monitor
public "shutdown"(): void
public static "clamp"(arg0: integer, arg1: integer, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenManager$Type = ($ScreenManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenManager_ = $ScreenManager$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsNews" {
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsNews extends $ValueObject {
 "newsLink": string

constructor()

public static "parse"(arg0: string): $RealmsNews
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsNews$Type = ($RealmsNews);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsNews_ = $RealmsNews$Type;
}}
declare module "packages/com/mojang/serialization/$DataResult$PartialResult" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DataResult$PartialResult<R> {

constructor(arg0: $Supplier$Type<(string)>, arg1: $Optional$Type<(R)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "map"<R2>(arg0: $Function$Type<(any), (any)>): $DataResult$PartialResult<(R2)>
public "message"(): string
public "flatMap"<R2>(arg0: $Function$Type<(R), ($DataResult$PartialResult$Type<(R2)>)>): $DataResult$PartialResult<(R2)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataResult$PartialResult$Type<R> = ($DataResult$PartialResult<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataResult$PartialResult_<R> = $DataResult$PartialResult$Type<(R)>;
}}
declare module "packages/com/mojang/blaze3d/platform/$NativeImage$Format" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $NativeImage$Format extends $Enum<($NativeImage$Format)> {
static readonly "RGBA": $NativeImage$Format
static readonly "RGB": $NativeImage$Format
static readonly "LUMINANCE_ALPHA": $NativeImage$Format
static readonly "LUMINANCE": $NativeImage$Format


public static "values"(): ($NativeImage$Format)[]
public static "valueOf"(arg0: string): $NativeImage$Format
public "components"(): integer
public "supportedByStb"(): boolean
public "hasLuminanceOrBlue"(): boolean
public "luminanceOffset"(): integer
public "hasLuminanceOrGreen"(): boolean
public "luminanceOrRedOffset"(): integer
public "luminanceOrGreenOffset"(): integer
public "hasLuminanceOrRed"(): boolean
public "hasLuminance"(): boolean
public "luminanceOrBlueOffset"(): integer
public "luminanceOrAlphaOffset"(): integer
public "hasLuminanceOrAlpha"(): boolean
public "setUnpackPixelStoreState"(): void
public "glFormat"(): integer
public "hasAlpha"(): boolean
public "alphaOffset"(): integer
public "setPackPixelStoreState"(): void
public "hasBlue"(): boolean
public "hasRed"(): boolean
public "redOffset"(): integer
public "blueOffset"(): integer
public "hasGreen"(): boolean
public "greenOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$Format$Type = (("luminance") | ("rgba") | ("luminance_alpha") | ("rgb")) | ($NativeImage$Format);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImage$Format_ = $NativeImage$Format$Type;
}}
declare module "packages/com/mojang/realmsclient/util/$WorldGenerationInfo" {
import {$LevelType, $LevelType$Type} from "packages/com/mojang/realmsclient/util/$LevelType"

export class $WorldGenerationInfo {

constructor(arg0: string, arg1: $LevelType$Type, arg2: boolean)

public "getLevelType"(): $LevelType
public "shouldGenerateStructures"(): boolean
public "getSeed"(): string
get "levelType"(): $LevelType
get "seed"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenerationInfo$Type = ($WorldGenerationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldGenerationInfo_ = $WorldGenerationInfo$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Usage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VertexFormatElement$Usage extends $Enum<($VertexFormatElement$Usage)> {
static readonly "POSITION": $VertexFormatElement$Usage
static readonly "NORMAL": $VertexFormatElement$Usage
static readonly "COLOR": $VertexFormatElement$Usage
static readonly "UV": $VertexFormatElement$Usage
static readonly "PADDING": $VertexFormatElement$Usage
static readonly "GENERIC": $VertexFormatElement$Usage


public static "values"(): ($VertexFormatElement$Usage)[]
public static "valueOf"(arg0: string): $VertexFormatElement$Usage
public "getName"(): string
public "clearBufferState"(arg0: integer, arg1: integer): void
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatElement$Usage$Type = (("normal") | ("uv") | ("padding") | ("color") | ("position") | ("generic")) | ($VertexFormatElement$Usage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatElement$Usage_ = $VertexFormatElement$Usage$Type;
}}
declare module "packages/com/mojang/datafixers/functions/$PointFreeRule" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PointFree, $PointFree$Type} from "packages/com/mojang/datafixers/functions/$PointFree"

export interface $PointFreeRule {

 "rewrite"<A>(arg0: $PointFree$Type<(A)>): $Optional<(any)>
 "rewriteOrNop"<A>(arg0: $PointFree$Type<(A)>): $PointFree<(A)>

(...arg0: ($PointFreeRule$Type)[]): $PointFreeRule
}

export namespace $PointFreeRule {
function seq(...arg0: ($PointFreeRule$Type)[]): $PointFreeRule
function all(arg0: $PointFreeRule$Type): $PointFreeRule
function one(arg0: $PointFreeRule$Type): $PointFreeRule
function nop(): $PointFreeRule
function many(arg0: $PointFreeRule$Type): $PointFreeRule
function once(arg0: $PointFreeRule$Type): $PointFreeRule
function everywhere(arg0: $PointFreeRule$Type, arg1: $PointFreeRule$Type): $PointFreeRule
function choice(...arg0: ($PointFreeRule$Type)[]): $PointFreeRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointFreeRule$Type = ($PointFreeRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointFreeRule_ = $PointFreeRule$Type;
}}
declare module "packages/com/mojang/authlib/$Agent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Agent {
static readonly "MINECRAFT": $Agent
static readonly "SCROLLS": $Agent

constructor(arg0: string, arg1: integer)

public "getName"(): string
public "toString"(): string
public "getVersion"(): integer
get "name"(): string
get "version"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Agent$Type = ($Agent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Agent_ = $Agent$Type;
}}
declare module "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"

export class $SuggestionsBuilder {

constructor(arg0: string, arg1: string, arg2: integer)
constructor(arg0: string, arg1: integer)

public "restart"(): $SuggestionsBuilder
public "build"(): $Suggestions
public "add"(arg0: $SuggestionsBuilder$Type): $SuggestionsBuilder
public "getRemaining"(): string
public "getInput"(): string
public "getRemainingLowerCase"(): string
public "createOffset"(arg0: integer): $SuggestionsBuilder
public "suggest"(arg0: integer, arg1: $Message$Type): $SuggestionsBuilder
public "suggest"(arg0: string, arg1: $Message$Type): $SuggestionsBuilder
public "suggest"(arg0: integer): $SuggestionsBuilder
public "suggest"(arg0: string): $SuggestionsBuilder
public "buildFuture"(): $CompletableFuture<($Suggestions)>
public "getStart"(): integer
get "remaining"(): string
get "input"(): string
get "remainingLowerCase"(): string
get "start"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionsBuilder$Type = ($SuggestionsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuggestionsBuilder_ = $SuggestionsBuilder$Type;
}}
declare module "packages/com/mojang/brigadier/exceptions/$CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommandExceptionType {

}

export namespace $CommandExceptionType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandExceptionType$Type = ($CommandExceptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandExceptionType_ = $CommandExceptionType$Type;
}}
declare module "packages/com/mojang/datafixers/optics/$Optic" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$App2, $App2$Type} from "packages/com/mojang/datafixers/kinds/$App2"
import {$K2, $K2$Type} from "packages/com/mojang/datafixers/kinds/$K2"
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $Optic<Proof extends $K1, S, T, A, B> {

 "upCast"<Proof2 extends $K1>(arg0: $Set$Type<($TypeToken$Type<(any)>)>, arg1: $TypeToken$Type<(Proof2)>): $Optional<($Optic<(any), (S), (T), (A), (B)>)>
 "eval"<P extends $K2>(arg0: $App$Type<(any), (P)>): $Function<($App2<(P), (A), (B)>), ($App2<(P), (S), (T)>)>

(arg0: $Set$Type<($TypeToken$Type<(any)>)>, arg1: $TypeToken$Type<(Proof2)>): $Optional<($Optic<(any), (S), (T), (A), (B)>)>
}

export namespace $Optic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optic$Type<Proof, S, T, A, B> = ($Optic<(Proof), (S), (T), (A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Optic_<Proof, S, T, A, B> = $Optic$Type<(Proof), (S), (T), (A), (B)>;
}}
declare module "packages/com/mojang/datafixers/util/$Unit" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Unit extends $Enum<($Unit)> {
static readonly "INSTANCE": $Unit


public "toString"(): string
public static "values"(): ($Unit)[]
public static "valueOf"(arg0: string): $Unit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unit$Type = (("instance")) | ($Unit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Unit_ = $Unit$Type;
}}
declare module "packages/com/mojang/brigadier/$ImmutableStringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ImmutableStringReader {

 "getRemainingLength"(): integer
 "getTotalLength"(): integer
 "getRead"(): string
 "canRead"(): boolean
 "canRead"(arg0: integer): boolean
 "peek"(arg0: integer): character
 "peek"(): character
 "getString"(): string
 "getRemaining"(): string
 "getCursor"(): integer
}

export namespace $ImmutableStringReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableStringReader$Type = ($ImmutableStringReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableStringReader_ = $ImmutableStringReader$Type;
}}
declare module "packages/com/mojang/brigadier/tree/$ArgumentCommandNode" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionProvider, $SuggestionProvider$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$RedirectModifier, $RedirectModifier$Type} from "packages/com/mojang/brigadier/$RedirectModifier"
import {$CommandContextBuilder, $CommandContextBuilder$Type} from "packages/com/mojang/brigadier/context/$CommandContextBuilder"
import {$Command, $Command$Type} from "packages/com/mojang/brigadier/$Command"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ArgumentCommandNode<S, T> extends $CommandNode<(S)> {

constructor(arg0: string, arg1: $ArgumentType$Type<(T)>, arg2: $Command$Type<(S)>, arg3: $Predicate$Type<(S)>, arg4: $CommandNode$Type<(S)>, arg5: $RedirectModifier$Type<(S)>, arg6: boolean, arg7: $SuggestionProvider$Type<(S)>)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $ArgumentType<(T)>
public "parse"(arg0: $StringReader$Type, arg1: $CommandContextBuilder$Type<(S)>): void
public "getUsageText"(): string
public "isValidInput"(arg0: string): boolean
public "listSuggestions"(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "getCustomSuggestions"(): $SuggestionProvider<(S)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
get "usageText"(): string
get "examples"(): $Collection<(string)>
get "customSuggestions"(): $SuggestionProvider<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentCommandNode$Type<S, T> = ($ArgumentCommandNode<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentCommandNode_<S, T> = $ArgumentCommandNode$Type<(S), (T)>;
}}
declare module "packages/com/mojang/datafixers/types/$Type$Mu" {
import {$K1, $K1$Type} from "packages/com/mojang/datafixers/kinds/$K1"

export class $Type$Mu implements $K1 {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Type$Mu$Type = ($Type$Mu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Type$Mu_ = $Type$Mu$Type;
}}
declare module "packages/com/mojang/blaze3d/shaders/$Uniform" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Shader, $Shader$Type} from "packages/com/mojang/blaze3d/shaders/$Shader"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$AbstractUniform, $AbstractUniform$Type} from "packages/com/mojang/blaze3d/shaders/$AbstractUniform"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $Uniform extends $AbstractUniform implements $AutoCloseable {
static readonly "UT_INT1": integer
static readonly "UT_INT2": integer
static readonly "UT_INT3": integer
static readonly "UT_INT4": integer
static readonly "UT_FLOAT1": integer
static readonly "UT_FLOAT2": integer
static readonly "UT_FLOAT3": integer
static readonly "UT_FLOAT4": integer
static readonly "UT_MAT2": integer
static readonly "UT_MAT3": integer
static readonly "UT_MAT4": integer

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $Shader$Type)

public "set"(arg0: integer, arg1: integer): void
public "close"(): void
public "set"(arg0: float): void
public "set"(arg0: integer): void
public "set"(arg0: float, arg1: float): void
public "set"(arg0: $Matrix3f$Type): void
public static "glGetUniformLocation"(arg0: integer, arg1: charseq): integer
public "upload"(): void
public "setSafe"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: (float)[]): void
public "setSafe"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public static "getTypeFromString"(arg0: string): integer
public "getName"(): string
public "setLocation"(arg0: integer): void
public static "uploadInteger"(arg0: integer, arg1: integer): void
public static "glBindAttribLocation"(arg0: integer, arg1: integer, arg2: charseq): void
public "set"(arg0: $Matrix4f$Type): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "set"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: $Vector4f$Type): void
public "setMat2x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "setMat2x2"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "set"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setMat3x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float): void
public "setMat3x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat2x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat3x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "setMat4x2"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public "setMat4x3"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "setMat4x4"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float, arg15: float): void
public static "glGetAttribLocation"(arg0: integer, arg1: charseq): integer
public "set"(arg0: integer, arg1: float): void
public "getCount"(): integer
public "getLocation"(): integer
public "getType"(): integer
public "getFloatBuffer"(): $FloatBuffer
public "getIntBuffer"(): $IntBuffer
public "set"(arg0: $Vector3f$Type): void
get "name"(): string
set "location"(value: integer)
get "count"(): integer
get "location"(): integer
get "type"(): integer
get "floatBuffer"(): $FloatBuffer
get "intBuffer"(): $IntBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Uniform$Type = ($Uniform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Uniform_ = $Uniform$Type;
}}
declare module "packages/com/mojang/authlib/$ProfileLookupCallback" {
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"

export interface $ProfileLookupCallback {

 "onProfileLookupFailed"(arg0: $GameProfile$Type, arg1: $Exception$Type): void
 "onProfileLookupSucceeded"(arg0: $GameProfile$Type): void
}

export namespace $ProfileLookupCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProfileLookupCallback$Type = ($ProfileLookupCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProfileLookupCallback_ = $ProfileLookupCallback$Type;
}}
declare module "packages/com/mojang/serialization/$Compressable" {
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$KeyCompressor, $KeyCompressor$Type} from "packages/com/mojang/serialization/$KeyCompressor"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Compressable extends $Keyable {

 "compressor"<T>(arg0: $DynamicOps$Type<(T)>): $KeyCompressor<(T)>
 "keys"<T>(arg0: $DynamicOps$Type<(T)>): $Stream<(T)>
}

export namespace $Compressable {
function forStrings(arg0: $Supplier$Type<($Stream$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Compressable$Type = ($Compressable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Compressable_ = $Compressable$Type;
}}
declare module "packages/com/mojang/brigadier/context/$ParsedArgument" {
import {$StringRange, $StringRange$Type} from "packages/com/mojang/brigadier/context/$StringRange"

export class $ParsedArgument<S, T> {

constructor(arg0: integer, arg1: integer, arg2: T)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getResult"(): T
public "getRange"(): $StringRange
get "result"(): T
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedArgument$Type<S, T> = ($ParsedArgument<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsedArgument_<S, T> = $ParsedArgument$Type<(S), (T)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerLists" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$RealmsServerPlayerList, $RealmsServerPlayerList$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerList"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"

export class $RealmsServerPlayerLists extends $ValueObject {
 "servers": $List<($RealmsServerPlayerList)>

constructor()

public static "parse"(arg0: string): $RealmsServerPlayerLists
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsServerPlayerLists$Type = ($RealmsServerPlayerLists);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsServerPlayerLists_ = $RealmsServerPlayerLists$Type;
}}
declare module "packages/com/mojang/brigadier/tree/$LiteralCommandNode" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RedirectModifier, $RedirectModifier$Type} from "packages/com/mojang/brigadier/$RedirectModifier"
import {$CommandContextBuilder, $CommandContextBuilder$Type} from "packages/com/mojang/brigadier/context/$CommandContextBuilder"
import {$Command, $Command$Type} from "packages/com/mojang/brigadier/$Command"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$LiteralArgumentBuilder, $LiteralArgumentBuilder$Type} from "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder"
import {$CommandNode, $CommandNode$Type} from "packages/com/mojang/brigadier/tree/$CommandNode"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $LiteralCommandNode<S> extends $CommandNode<(S)> {

constructor(arg0: string, arg1: $Command$Type<(S)>, arg2: $Predicate$Type<(S)>, arg3: $CommandNode$Type<(S)>, arg4: $RedirectModifier$Type<(S)>, arg5: boolean)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "parse"(arg0: $StringReader$Type, arg1: $CommandContextBuilder$Type<(S)>): void
public "getUsageText"(): string
public "isValidInput"(arg0: string): boolean
public "listSuggestions"(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "getLiteral"(): string
public "createBuilder"(): $LiteralArgumentBuilder<(S)>
get "name"(): string
get "usageText"(): string
get "examples"(): $Collection<(string)>
get "literal"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiteralCommandNode$Type<S> = ($LiteralCommandNode<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiteralCommandNode_<S> = $LiteralCommandNode$Type<(S)>;
}}
declare module "packages/com/mojang/datafixers/$FamilyOptic" {
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"

export interface $FamilyOptic<A, B> {

 "apply"(arg0: integer): $TypedOptic<(any), (any), (A), (B)>

(arg0: integer): $TypedOptic<(any), (any), (A), (B)>
}

export namespace $FamilyOptic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamilyOptic$Type<A, B> = ($FamilyOptic<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamilyOptic_<A, B> = $FamilyOptic$Type<(A), (B)>;
}}
declare module "packages/com/mojang/realmsclient/client/$RealmsClient" {
import {$RealmsNews, $RealmsNews$Type} from "packages/com/mojang/realmsclient/dto/$RealmsNews"
import {$Ops, $Ops$Type} from "packages/com/mojang/realmsclient/dto/$Ops"
import {$ServerActivityList, $ServerActivityList$Type} from "packages/com/mojang/realmsclient/dto/$ServerActivityList"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UploadInfo, $UploadInfo$Type} from "packages/com/mojang/realmsclient/dto/$UploadInfo"
import {$BackupList, $BackupList$Type} from "packages/com/mojang/realmsclient/dto/$BackupList"
import {$RealmsNotification, $RealmsNotification$Type} from "packages/com/mojang/realmsclient/dto/$RealmsNotification"
import {$RealmsServerAddress, $RealmsServerAddress$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerAddress"
import {$WorldDownload, $WorldDownload$Type} from "packages/com/mojang/realmsclient/dto/$WorldDownload"
import {$RealmsClient$CompatibleVersionResponse, $RealmsClient$CompatibleVersionResponse$Type} from "packages/com/mojang/realmsclient/client/$RealmsClient$CompatibleVersionResponse"
import {$PendingInvitesList, $PendingInvitesList$Type} from "packages/com/mojang/realmsclient/dto/$PendingInvitesList"
import {$RealmsWorldOptions, $RealmsWorldOptions$Type} from "packages/com/mojang/realmsclient/dto/$RealmsWorldOptions"
import {$PingResult, $PingResult$Type} from "packages/com/mojang/realmsclient/dto/$PingResult"
import {$RealmsServerPlayerLists, $RealmsServerPlayerLists$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerPlayerLists"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$WorldGenerationInfo, $WorldGenerationInfo$Type} from "packages/com/mojang/realmsclient/util/$WorldGenerationInfo"
import {$Subscription, $Subscription$Type} from "packages/com/mojang/realmsclient/dto/$Subscription"
import {$RealmsServerList, $RealmsServerList$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServerList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RealmsServer, $RealmsServer$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import {$RealmsServer$WorldType, $RealmsServer$WorldType$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer$WorldType"
import {$RealmsClient$Environment, $RealmsClient$Environment$Type} from "packages/com/mojang/realmsclient/client/$RealmsClient$Environment"
import {$WorldTemplatePaginatedList, $WorldTemplatePaginatedList$Type} from "packages/com/mojang/realmsclient/dto/$WorldTemplatePaginatedList"

export class $RealmsClient {
static "currentEnvironment": $RealmsClient$Environment

constructor(arg0: string, arg1: string, arg2: $Minecraft$Type)

public "listWorlds"(): $RealmsServerList
public "getNotifications"(): $List<($RealmsNotification)>
public static "create"(): $RealmsClient
public static "switchToProd"(): void
public static "switchToLocal"(): void
public "notificationsSeen"(arg0: $List$Type<($UUID$Type)>): void
public static "switchToStage"(): void
public "join"(arg0: long): $RealmsServerAddress
public "notificationsDismiss"(arg0: $List$Type<($UUID$Type)>): void
public "getLiveStats"(): $RealmsServerPlayerLists
public "initializeWorld"(arg0: long, arg1: string, arg2: string): void
public "mcoEnabled"(): boolean
public "getOwnWorld"(arg0: long): $RealmsServer
public "getActivity"(arg0: long): $ServerActivityList
public "uninvite"(arg0: long, arg1: string): void
public "uninviteMyselfFrom"(arg0: long): void
public "stageAvailable"(): boolean
public "invite"(arg0: long, arg1: string): $RealmsServer
public "update"(arg0: long, arg1: string, arg2: string): void
public "updateSlot"(arg0: long, arg1: integer, arg2: $RealmsWorldOptions$Type): void
public "switchSlot"(arg0: long, arg1: integer): boolean
public "backupsFor"(arg0: long): $BackupList
public "clientCompatible"(): $RealmsClient$CompatibleVersionResponse
public "resetWorldWithSeed"(arg0: long, arg1: $WorldGenerationInfo$Type): boolean
public "open"(arg0: long): boolean
public "close"(arg0: long): boolean
public "putIntoMinigameMode"(arg0: long, arg1: string): boolean
public "fetchWorldTemplates"(arg0: integer, arg1: integer, arg2: $RealmsServer$WorldType$Type): $WorldTemplatePaginatedList
public "restoreWorld"(arg0: long, arg1: string): void
public "op"(arg0: long, arg1: string): $Ops
public "deop"(arg0: long, arg1: string): $Ops
public "resetWorldWithTemplate"(arg0: long, arg1: string): boolean
public "acceptInvitation"(arg0: string): void
public "requestDownloadInfo"(arg0: long, arg1: integer): $WorldDownload
public "subscriptionFor"(arg0: long): $Subscription
public "pendingInvites"(): $PendingInvitesList
public "pendingInvitesCount"(): integer
public "getNews"(): $RealmsNews
public "agreeToTos"(): void
public "deleteWorld"(arg0: long): void
public "requestUploadInfo"(arg0: long, arg1: string): $UploadInfo
public "trialAvailable"(): boolean
public "sendPingResults"(arg0: $PingResult$Type): void
public "rejectInvitation"(arg0: string): void
public static "create"(arg0: $Minecraft$Type): $RealmsClient
get "notifications"(): $List<($RealmsNotification)>
get "liveStats"(): $RealmsServerPlayerLists
get "news"(): $RealmsNews
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RealmsClient$Type = ($RealmsClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RealmsClient_ = $RealmsClient$Type;
}}
declare module "packages/com/mojang/datafixers/types/families/$Algebra" {
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"

export interface $Algebra {

 "toString"(arg0: integer): string
 "apply"(arg0: integer): $RewriteResult<(any), (any)>
}

export namespace $Algebra {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Algebra$Type = ($Algebra);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Algebra_ = $Algebra$Type;
}}
declare module "packages/com/mojang/serialization/$Lifecycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Lifecycle {


public "add"(arg0: $Lifecycle$Type): $Lifecycle
public static "deprecated"(arg0: integer): $Lifecycle
public static "experimental"(): $Lifecycle
public static "stable"(): $Lifecycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lifecycle$Type = ($Lifecycle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lifecycle_ = $Lifecycle$Type;
}}
declare module "packages/com/mojang/blaze3d/pipeline/$RenderTarget" {
import {$Blaze3dRenderTargetExt, $Blaze3dRenderTargetExt$Type} from "packages/net/irisshaders/iris/targets/$Blaze3dRenderTargetExt"

export class $RenderTarget implements $Blaze3dRenderTargetExt {
 "width": integer
 "height": integer
 "viewWidth": integer
 "viewHeight": integer
readonly "useDepth": boolean
 "frameBufferId": integer
 "filterMode": integer

constructor(arg0: boolean)

public "unbindWrite"(): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "bindWrite"(arg0: boolean): void
public "resize"(arg0: integer, arg1: integer, arg2: boolean): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "clear"(arg0: boolean): void
public "copyDepthFrom"(arg0: $RenderTarget$Type): void
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "setFilterMode"(arg0: integer): void
public "checkStatus"(): void
public "unbindRead"(): void
public "bindRead"(): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
public "isStencilEnabled"(): boolean
public "enableStencil"(): void
public "getDepthTextureId"(): integer
public "getColorTextureId"(): integer
public "iris$getColorBufferVersion"(): integer
public "iris$getDepthBufferVersion"(): integer
public "destroyBuffers"(): void
set "filterMode"(value: integer)
get "stencilEnabled"(): boolean
get "depthTextureId"(): integer
get "colorTextureId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTarget$Type = ($RenderTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTarget_ = $RenderTarget$Type;
}}
declare module "packages/com/mojang/realmsclient/dto/$PlayerInfo" {
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$ReflectionBasedSerialization, $ReflectionBasedSerialization$Type} from "packages/com/mojang/realmsclient/dto/$ReflectionBasedSerialization"

export class $PlayerInfo extends $ValueObject implements $ReflectionBasedSerialization {

constructor()

public "setOperator"(arg0: boolean): void
public "getName"(): string
public "getUuid"(): string
public "isOperator"(): boolean
public "setName"(arg0: string): void
public "setAccepted"(arg0: boolean): void
public "getAccepted"(): boolean
public "setUuid"(arg0: string): void
public "setOnline"(arg0: boolean): void
public "getOnline"(): boolean
set "operator"(value: boolean)
get "name"(): string
get "uuid"(): string
get "operator"(): boolean
set "name"(value: string)
set "accepted"(value: boolean)
get "accepted"(): boolean
set "uuid"(value: string)
set "online"(value: boolean)
get "online"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInfo$Type = ($PlayerInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInfo_ = $PlayerInfo$Type;
}}
declare module "packages/com/mojang/blaze3d/platform/$Monitor" {
import {$VideoMode, $VideoMode$Type} from "packages/com/mojang/blaze3d/platform/$VideoMode"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $Monitor {

constructor(arg0: long)

public "toString"(): string
public "getPreferredVidMode"(arg0: $Optional$Type<($VideoMode$Type)>): $VideoMode
public "getX"(): integer
public "getY"(): integer
public "getMonitor"(): long
public "getVideoModeIndex"(arg0: $VideoMode$Type): integer
public "getModeCount"(): integer
public "getMode"(arg0: integer): $VideoMode
public "refreshVideoModes"(): void
public "getCurrentMode"(): $VideoMode
get "x"(): integer
get "y"(): integer
get "monitor"(): long
get "modeCount"(): integer
get "currentMode"(): $VideoMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Monitor$Type = ($Monitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Monitor_ = $Monitor$Type;
}}
declare module "packages/com/mojang/datafixers/util/$Pair" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$Pair$Mu, $Pair$Mu$Type} from "packages/com/mojang/datafixers/util/$Pair$Mu"
import {$App, $App$Type} from "packages/com/mojang/datafixers/kinds/$App"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Pair<F, S> implements $App<($Pair$Mu<(S)>), (F)> {

constructor(arg0: F, arg1: S)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public static "toMap"<F, S>(): $Collector<($Pair<(F), (S)>), (any), ($Map<(F), (S)>)>
public "swap"(): $Pair<(S), (F)>
public static "unbox"<F, S>(arg0: $App$Type<($Pair$Mu$Type<(S)>), (F)>): $Pair<(F), (S)>
public "getFirst"(): F
public "getSecond"(): S
public "mapFirst"<F2>(arg0: $Function$Type<(any), (any)>): $Pair<(F2), (S)>
public "mapSecond"<S2>(arg0: $Function$Type<(any), (any)>): $Pair<(F), (S2)>
get "first"(): F
get "second"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$Type<(F), (S)>;
}}
declare module "packages/com/mojang/blaze3d/audio/$Channel" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$SoundBuffer, $SoundBuffer$Type} from "packages/com/mojang/blaze3d/audio/$SoundBuffer"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AudioStream, $AudioStream$Type} from "packages/net/minecraft/client/sounds/$AudioStream"
import {$IChannelDuck, $IChannelDuck$Type} from "packages/com/yungnickyoung/minecraft/ribbits/mixin/interfaces/client/$IChannelDuck"
import {$ChannelAccessor, $ChannelAccessor$Type} from "packages/com/sonicether/soundphysics/mixin/$ChannelAccessor"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $Channel implements $IChannelDuck, $ChannelAccessor {
static readonly "BUFFER_DURATION_SECONDS": integer


public "stop"(): void
public "setLooping"(arg0: boolean): void
public "setSelfPosition"(arg0: $Vec3$Type): void
public "attachBufferStream"(arg0: $AudioStream$Type): void
public "setRelative"(arg0: boolean): void
public "disableAttenuation"(): void
public "linearAttenuation"(arg0: float): void
public "play"(): void
public "unpause"(): void
public "setVolume"(arg0: float): void
public "setPitch"(arg0: float): void
public "attachStaticBuffer"(arg0: $SoundBuffer$Type): void
public "pause"(): void
public "handler$cml000$play"(ci: $CallbackInfo$Type): void
public "handler$cml000$attachBufferStream"(audioStream: $AudioStream$Type, ci: $CallbackInfo$Type): void
public "handler$cml000$attachStaticBuffer"(soundBuffer: $SoundBuffer$Type, ci: $CallbackInfo$Type): void
public "handler$cml000$stopped"(cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$cml000$stop"(ci: $CallbackInfo$Type): void
public "playing"(): boolean
public "stopped"(): boolean
public "destroy"(): void
public "pumpBuffers"(arg0: integer): void
public "updateStream"(): void
public "ribbits$attachStaticBufferWithByteOffset"(arg0: $SoundInstance$Type, arg1: $SoundBuffer$Type, arg2: integer): void
public "ribbits$attachStaticBufferWithTickOffset"(arg0: $SoundInstance$Type, arg1: $SoundBuffer$Type, arg2: integer): void
set "looping"(value: boolean)
set "selfPosition"(value: $Vec3$Type)
set "relative"(value: boolean)
set "volume"(value: float)
set "pitch"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Type = ($Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel_ = $Channel$Type;
}}
declare module "packages/com/mojang/datafixers/functions/$PointFree" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"

export class $PointFree<T> {

constructor()

public "type"(): $Type<(T)>
public "toString"(): string
public "toString"(arg0: integer): string
public static "indent"(arg0: integer): string
public "eval"(): $Function<($DynamicOps<(any)>), (T)>
public "evalCached"(): $Function<($DynamicOps<(any)>), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointFree$Type<T> = ($PointFree<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointFree_<T> = $PointFree$Type<(T)>;
}}
declare module "packages/com/mojang/realmsclient/dto/$PendingInvitesList" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ValueObject, $ValueObject$Type} from "packages/com/mojang/realmsclient/dto/$ValueObject"
import {$PendingInvite, $PendingInvite$Type} from "packages/com/mojang/realmsclient/dto/$PendingInvite"

export class $PendingInvitesList extends $ValueObject {
 "pendingInvites": $List<($PendingInvite)>

constructor()

public static "parse"(arg0: string): $PendingInvitesList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendingInvitesList$Type = ($PendingInvitesList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PendingInvitesList_ = $PendingInvitesList$Type;
}}
declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer" {
import {$BufferBuilder$DrawState, $BufferBuilder$DrawState$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$DrawState"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $BufferBuilder$RenderedBuffer {


public "release"(): void
public "vertexBuffer"(): $ByteBuffer
public "drawState"(): $BufferBuilder$DrawState
public "indexBuffer"(): $ByteBuffer
public "isEmpty"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilder$RenderedBuffer$Type = ($BufferBuilder$RenderedBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilder$RenderedBuffer_ = $BufferBuilder$RenderedBuffer$Type;
}}
declare module "packages/com/mojang/blaze3d/platform/$InputConstants$Key" {
import {$LazyLoadedValue, $LazyLoadedValue$Type} from "packages/net/minecraft/util/$LazyLoadedValue"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputConstants$Type, $InputConstants$Type$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Type"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$AccessInputConstantsKey, $AccessInputConstantsKey$Type} from "packages/com/blamejared/controlling/mixin/$AccessInputConstantsKey"

export class $InputConstants$Key implements $AccessInputConstantsKey {
 "displayName": $LazyLoadedValue<($Component)>


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): integer
public "getType"(): $InputConstants$Type
public "getDisplayName"(): $Component
public "getName"(): string
public "getNumericKeyValue"(): $OptionalInt
get "value"(): integer
get "type"(): $InputConstants$Type
get "displayName"(): $Component
get "name"(): string
get "numericKeyValue"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Key$Type = ($InputConstants$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputConstants$Key_ = $InputConstants$Key$Type;
}}
declare module "packages/com/mojang/datafixers/types/templates/$TaggedChoice$TaggedChoiceType" {
import {$TypeRewriteRule, $TypeRewriteRule$Type} from "packages/com/mojang/datafixers/$TypeRewriteRule"
import {$RecursiveTypeFamily, $RecursiveTypeFamily$Type} from "packages/com/mojang/datafixers/types/families/$RecursiveTypeFamily"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$DynamicOps, $DynamicOps$Type} from "packages/com/mojang/serialization/$DynamicOps"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Type$TypeMatcher, $Type$TypeMatcher$Type} from "packages/com/mojang/datafixers/types/$Type$TypeMatcher"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Type$FieldNotFoundException, $Type$FieldNotFoundException$Type} from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import {$Object2ObjectMap, $Object2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$RewriteResult, $RewriteResult$Type} from "packages/com/mojang/datafixers/$RewriteResult"
import {$TypedOptic, $TypedOptic$Type} from "packages/com/mojang/datafixers/$TypedOptic"
import {$TypeTemplate, $TypeTemplate$Type} from "packages/com/mojang/datafixers/types/templates/$TypeTemplate"
import {$Typed, $Typed$Type} from "packages/com/mojang/datafixers/$Typed"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TaggedChoice$TaggedChoiceType<K> extends $Type<($Pair<(K), (any)>)> {

constructor(arg0: string, arg1: $Type$Type<(K)>, arg2: $Object2ObjectMap$Type<(K), ($Type$Type<(any)>)>)

public "hasType"(arg0: K): boolean
public "getKeyType"(): $Type<(K)>
public "getName"(): string
public "equals"(arg0: any, arg1: boolean, arg2: boolean): boolean
public "toString"(): string
public "hashCode"(): integer
public "types"(): $Map<(K), ($Type<(any)>)>
public "all"(arg0: $TypeRewriteRule$Type, arg1: boolean, arg2: boolean): $RewriteResult<($Pair<(K), (any)>), (any)>
public "point"(arg0: $DynamicOps$Type<(any)>, arg1: K, arg2: any): $Optional<($Typed<($Pair<(K), (any)>)>)>
public "point"(arg0: $DynamicOps$Type<(any)>): $Optional<($Pair<(K), (any)>)>
public "one"(arg0: $TypeRewriteRule$Type): $Optional<($RewriteResult<($Pair<(K), (any)>), (any)>)>
public static "elementResult"<K, FT, FR>(arg0: K, arg1: $TaggedChoice$TaggedChoiceType$Type<(K)>, arg2: $RewriteResult$Type<(FT), (FR)>): $RewriteResult<($Pair<(K), (any)>), ($Pair<(K), (any)>)>
public "findCheckedType"(arg0: integer): $Optional<($Type<(any)>)>
public "findChoiceType"(arg0: string, arg1: integer): $Optional<($TaggedChoice$TaggedChoiceType<(any)>)>
public "buildTemplate"(): $TypeTemplate
public "findTypeInChildren"<FT, FR>(arg0: $Type$Type<(FT)>, arg1: $Type$Type<(FR)>, arg2: $Type$TypeMatcher$Type<(FT), (FR)>, arg3: boolean): $Either<($TypedOptic<($Pair<(K), (any)>), (any), (FT), (FR)>), ($Type$FieldNotFoundException)>
public "findFieldTypeOpt"(arg0: string): $Optional<($Type<(any)>)>
public "updateMu"(arg0: $RecursiveTypeFamily$Type): $Type<(any)>
get "keyType"(): $Type<(K)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaggedChoice$TaggedChoiceType$Type<K> = ($TaggedChoice$TaggedChoiceType<(K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaggedChoice$TaggedChoiceType_<K> = $TaggedChoice$TaggedChoiceType$Type<(K)>;
}}
