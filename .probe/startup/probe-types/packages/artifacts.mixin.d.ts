declare module "packages/artifacts/mixin/gamerule/$BooleanValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanValueInvoker {

}

export namespace $BooleanValueInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanValueInvoker$Type = ($BooleanValueInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanValueInvoker_ = $BooleanValueInvoker$Type;
}}
declare module "packages/artifacts/mixin/gamerule/$IntegerValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntegerValueInvoker {

}

export namespace $IntegerValueInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerValueInvoker$Type = ($IntegerValueInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerValueInvoker_ = $IntegerValueInvoker$Type;
}}
declare module "packages/artifacts/mixin/accessors/$LivingEntityAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $LivingEntityAccessor {

 "getLastHurtByPlayer"(): $Player
 "getLastHurtByPlayerTime"(): integer
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/artifacts/mixin/accessors/$MobAccessor" {
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"

export interface $MobAccessor {

 "getGoalSelector"(): $GoalSelector

(): $GoalSelector
}

export namespace $MobAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$Type = ($MobAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccessor_ = $MobAccessor$Type;
}}
