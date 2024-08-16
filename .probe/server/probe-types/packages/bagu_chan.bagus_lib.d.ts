declare module "packages/bagu_chan/bagus_lib/api/$IBaguAnimate" {
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"

export interface $IBaguAnimate {

 "getBaguController"(): $BaguAnimationController<(any)>

(): $BaguAnimationController<(any)>
}

export namespace $IBaguAnimate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaguAnimate$Type = ($IBaguAnimate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBaguAnimate_ = $IBaguAnimate$Type;
}}
declare module "packages/bagu_chan/bagus_lib/api/client/$IRootModel" {
import {$AnimationState, $AnimationState$Type} from "packages/net/minecraft/world/entity/$AnimationState"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AnimationDefinition, $AnimationDefinition$Type} from "packages/net/minecraft/client/animation/$AnimationDefinition"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $IRootModel {

 "animateBagu"(arg0: $AnimationState$Type, arg1: $AnimationDefinition$Type, arg2: float): void
 "animateBagu"(arg0: $AnimationState$Type, arg1: $AnimationDefinition$Type, arg2: float, arg3: float): void
 "getBagusRoot"(): $ModelPart
 "getBetterAnyDescendantWithName"(arg0: string): $Optional<($ModelPart)>
 "getCacheVec"(): $Vector3f
 "animateWalkBagu"(arg0: $AnimationDefinition$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
 "applyStaticBagu"(arg0: $AnimationDefinition$Type): void
}

export namespace $IRootModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRootModel$Type = ($IRootModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRootModel_ = $IRootModel$Type;
}}
declare module "packages/bagu_chan/bagus_lib/api/$IBaguData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IBaguData {

 "getData"(): $CompoundTag
 "setData"(arg0: $CompoundTag$Type): void
}

export namespace $IBaguData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaguData$Type = ($IBaguData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBaguData_ = $IBaguData$Type;
}}
declare module "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController" {
import {$AnimationState, $AnimationState$Type} from "packages/net/minecraft/world/entity/$AnimationState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BaguAnimationController<T extends $Entity> {

constructor(arg0: T)

public "stopAllAnimation"(): void
/**
 * 
 * @deprecated
 */
public "addAnimation"(arg0: $ResourceLocation$Type): void
public "startAnimation"(arg0: $ResourceLocation$Type): void
public "stopAnimation"(arg0: $ResourceLocation$Type): void
public "getAnimationState"(arg0: $ResourceLocation$Type): $AnimationState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaguAnimationController$Type<T> = ($BaguAnimationController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaguAnimationController_<T> = $BaguAnimationController$Type<(T)>;
}}
