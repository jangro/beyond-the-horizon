declare module "packages/dev/kosmx/playerAnim/api/$TransformType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TransformType extends $Enum<($TransformType)> {
static readonly "POSITION": $TransformType
static readonly "ROTATION": $TransformType
static readonly "BEND": $TransformType


public static "values"(): ($TransformType)[]
public static "valueOf"(name: string): $TransformType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformType$Type = (("rotation") | ("bend") | ("position")) | ($TransformType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformType_ = $TransformType$Type;
}}
declare module "packages/dev/kosmx/playerAnim/impl/$IAnimatedPlayer" {
import {$AnimationApplier, $AnimationApplier$Type} from "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier"
import {$IPlayer, $IPlayer$Type} from "packages/dev/kosmx/playerAnim/api/$IPlayer"
import {$IAnimation, $IAnimation$Type} from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AnimationStack, $AnimationStack$Type} from "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack"

export interface $IAnimatedPlayer extends $IPlayer {

/**
 * 
 * @deprecated
 */
 "getAnimation"(): $AnimationApplier
 "playerAnimator_setAnimation"(arg0: $ResourceLocation$Type, arg1: $IAnimation$Type): $IAnimation
 "playerAnimator_getAnimation"(): $AnimationApplier
 "playerAnimator_getAnimation"(arg0: $ResourceLocation$Type): $IAnimation
 "getAnimationStack"(): $AnimationStack
}

export namespace $IAnimatedPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimatedPlayer$Type = ($IAnimatedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimatedPlayer_ = $IAnimatedPlayer$Type;
}}
declare module "packages/dev/kosmx/playerAnim/core/util/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<L, R> {

constructor(left: L, right: R)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRight"(): R
public "getLeft"(): L
get "right"(): R
get "left"(): L
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<L, R> = $Pair$Type<(L), (R)>;
}}
declare module "packages/dev/kosmx/playerAnim/api/layered/$IAnimation" {
import {$TransformType, $TransformType$Type} from "packages/dev/kosmx/playerAnim/api/$TransformType"
import {$FirstPersonMode, $FirstPersonMode$Type} from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode"
import {$FirstPersonConfiguration, $FirstPersonConfiguration$Type} from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration"
import {$Vec3f, $Vec3f$Type} from "packages/dev/kosmx/playerAnim/core/util/$Vec3f"

export interface $IAnimation {

 "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
 "isActive"(): boolean
 "tick"(): void
 "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
 "get3DTransform"(arg0: string, arg1: $TransformType$Type, arg2: float, arg3: $Vec3f$Type): $Vec3f
 "setupAnim"(arg0: float): void
}

export namespace $IAnimation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimation$Type = ($IAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimation_ = $IAnimation$Type;
}}
declare module "packages/dev/kosmx/playerAnim/impl/$IMutableModel" {
import {$AnimationProcessor, $AnimationProcessor$Type} from "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor"
import {$SetableSupplier, $SetableSupplier$Type} from "packages/dev/kosmx/playerAnim/core/util/$SetableSupplier"

export interface $IMutableModel {

 "getEmoteSupplier"(): $SetableSupplier<($AnimationProcessor)>
 "setEmoteSupplier"(arg0: $SetableSupplier$Type<($AnimationProcessor$Type)>): void
}

export namespace $IMutableModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMutableModel$Type = ($IMutableModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMutableModel_ = $IMutableModel$Type;
}}
declare module "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor" {
import {$TransformType, $TransformType$Type} from "packages/dev/kosmx/playerAnim/api/$TransformType"
import {$IAnimation, $IAnimation$Type} from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import {$Pair, $Pair$Type} from "packages/dev/kosmx/playerAnim/core/util/$Pair"
import {$FirstPersonMode, $FirstPersonMode$Type} from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode"
import {$FirstPersonConfiguration, $FirstPersonConfiguration$Type} from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration"
import {$Vec3f, $Vec3f$Type} from "packages/dev/kosmx/playerAnim/core/util/$Vec3f"

export class $AnimationProcessor {

constructor(animation: $IAnimation$Type)

public "getFirstPersonMode"(): $FirstPersonMode
public "setTickDelta"(tickDelta: float): void
public "isFirstPersonAnimationDisabled"(): boolean
public "isActive"(): boolean
public "tick"(): void
public "getFirstPersonConfiguration"(): $FirstPersonConfiguration
public "getBend"(modelName: string): $Pair<(float), (float)>
public "get3DTransform"(modelName: string, type: $TransformType$Type, value0: $Vec3f$Type): $Vec3f
get "firstPersonMode"(): $FirstPersonMode
set "tickDelta"(value: float)
get "firstPersonAnimationDisabled"(): boolean
get "active"(): boolean
get "firstPersonConfiguration"(): $FirstPersonConfiguration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$Type = ($AnimationProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor_ = $AnimationProcessor$Type;
}}
declare module "packages/dev/kosmx/playerAnim/api/$IPlayer" {
import {$AnimationStack, $AnimationStack$Type} from "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack"

export interface $IPlayer {

 "getAnimationStack"(): $AnimationStack

(): $AnimationStack
}

export namespace $IPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayer$Type = ($IPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayer_ = $IPlayer$Type;
}}
declare module "packages/dev/kosmx/playerAnim/core/util/$SetableSupplier" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SetableSupplier<T> implements $Supplier<(T)> {

constructor()

public "get"(): T
public "set"(object: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetableSupplier$Type<T> = ($SetableSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetableSupplier_<T> = $SetableSupplier$Type<(T)>;
}}
declare module "packages/dev/kosmx/playerAnim/core/util/$Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vector3<N extends number> {

constructor(x: N, y: N, z: N)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getY"(): N
public "getZ"(): N
public "getX"(): N
get "y"(): N
get "z"(): N
get "x"(): N
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$Type<N> = ($Vector3<(N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector3_<N> = $Vector3$Type<(N)>;
}}
declare module "packages/dev/kosmx/playerAnim/mixin/firstPerson/$CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessor {

 "setDetached"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $CameraAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessor$Type = ($CameraAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraAccessor_ = $CameraAccessor$Type;
}}
declare module "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack" {
import {$TransformType, $TransformType$Type} from "packages/dev/kosmx/playerAnim/api/$TransformType"
import {$IAnimation, $IAnimation$Type} from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import {$FirstPersonMode, $FirstPersonMode$Type} from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode"
import {$FirstPersonConfiguration, $FirstPersonConfiguration$Type} from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration"
import {$Vec3f, $Vec3f$Type} from "packages/dev/kosmx/playerAnim/core/util/$Vec3f"

export class $AnimationStack implements $IAnimation {

constructor()

public "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
public "isActive"(): boolean
public "tick"(): void
public "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
public "removeLayer"(layer: $IAnimation$Type): boolean
public "removeLayer"(layerLevel: integer): boolean
public "get3DTransform"(modelName: string, type: $TransformType$Type, tickDelta: float, value0: $Vec3f$Type): $Vec3f
public "setupAnim"(tickDelta: float): void
public "addAnimLayer"(priority: integer, layer: $IAnimation$Type): void
get "active"(): boolean
set "upAnim"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStack$Type = ($AnimationStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationStack_ = $AnimationStack$Type;
}}
declare module "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FirstPersonMode extends $Enum<($FirstPersonMode)> {
static readonly "NONE": $FirstPersonMode
static readonly "VANILLA": $FirstPersonMode
static readonly "THIRD_PERSON_MODEL": $FirstPersonMode
static readonly "DISABLED": $FirstPersonMode


public static "setFirstPersonPass"(newValue: boolean): void
public static "values"(): ($FirstPersonMode)[]
public static "valueOf"(name: string): $FirstPersonMode
public "isEnabled"(): boolean
public static "isFirstPersonPass"(): boolean
set "firstPersonPass"(value: boolean)
get "enabled"(): boolean
get "firstPersonPass"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonMode$Type = (("third_person_model") | ("disabled") | ("none") | ("vanilla")) | ($FirstPersonMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPersonMode_ = $FirstPersonMode$Type;
}}
declare module "packages/dev/kosmx/playerAnim/impl/$IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpperPartHelper {

 "setUpperPart"(arg0: boolean): void
 "isUpperPart"(): boolean
}

export namespace $IUpperPartHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpperPartHelper$Type = ($IUpperPartHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpperPartHelper_ = $IUpperPartHelper$Type;
}}
declare module "packages/dev/kosmx/playerAnim/core/util/$Vec3f" {
import {$Vector3, $Vector3$Type} from "packages/dev/kosmx/playerAnim/core/util/$Vector3"
import {$Vec3d, $Vec3d$Type} from "packages/dev/kosmx/playerAnim/core/util/$Vec3d"

export class $Vec3f extends $Vector3<(float)> {
static readonly "ZERO": $Vec3f

constructor(x: float, y: float, z: float)

public "squaredDistanceTo"(vec3d: $Vec3d$Type): double
public "add"(other: $Vec3f$Type): $Vec3f
public "scale"(scalar: float): $Vec3f
public "subtract"(rhs: $Vec3f$Type): $Vec3f
public "distanceTo"(vec3d: $Vec3d$Type): double
public "dotProduct"(other: $Vec3f$Type): float
public "crossProduct"(other: $Vec3f$Type): $Vec3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3f$Type = ($Vec3f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3f_ = $Vec3f$Type;
}}
declare module "packages/dev/kosmx/playerAnim/core/util/$Vec3d" {
import {$Vector3, $Vector3$Type} from "packages/dev/kosmx/playerAnim/core/util/$Vector3"

export class $Vec3d extends $Vector3<(double)> {

constructor(x: double, y: double, z: double)

public "squaredDistanceTo"(vec3d: $Vec3d$Type): double
public "add"(other: $Vec3d$Type): $Vec3d
public "scale"(scalar: double): $Vec3d
public "subtract"(rhs: $Vec3d$Type): $Vec3d
public "distanceTo"(vec3d: $Vec3d$Type): double
public "dotProduct"(other: $Vec3d$Type): double
public "crossProduct"(other: $Vec3d$Type): $Vec3d
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3d$Type = ($Vec3d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3d_ = $Vec3d$Type;
}}
declare module "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FirstPersonConfiguration {

constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean)
constructor()

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setShowLeftItem"(showLeftItem: boolean): $FirstPersonConfiguration
public "setShowRightItem"(showRightItem: boolean): $FirstPersonConfiguration
public "isShowLeftItem"(): boolean
public "setShowRightArm"(showRightArm: boolean): $FirstPersonConfiguration
public "setShowLeftArm"(showLeftArm: boolean): $FirstPersonConfiguration
public "isShowRightItem"(): boolean
public "isShowRightArm"(): boolean
public "isShowLeftArm"(): boolean
set "showLeftItem"(value: boolean)
set "showRightItem"(value: boolean)
get "showLeftItem"(): boolean
set "showRightArm"(value: boolean)
set "showLeftArm"(value: boolean)
get "showRightItem"(): boolean
get "showRightArm"(): boolean
get "showLeftArm"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonConfiguration$Type = ($FirstPersonConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPersonConfiguration_ = $FirstPersonConfiguration$Type;
}}
declare module "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier" {
import {$AnimationProcessor, $AnimationProcessor$Type} from "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor"
import {$IAnimation, $IAnimation$Type} from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $AnimationApplier extends $AnimationProcessor {

constructor(animation: $IAnimation$Type)

public "updatePart"(partName: string, part: $ModelPart$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationApplier$Type = ($AnimationApplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationApplier_ = $AnimationApplier$Type;
}}
