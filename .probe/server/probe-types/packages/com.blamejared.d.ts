declare module "packages/com/blamejared/clumps/helper/$IClumpedOrb" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IClumpedOrb {

 "clumps$resolve"(): boolean
 "clumps$setClumpedMap"(arg0: $Map$Type<(integer), (integer)>): void
 "clumps$getClumpedMap"(): $Map<(integer), (integer)>
}

export namespace $IClumpedOrb {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClumpedOrb$Type = ($IClumpedOrb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClumpedOrb_ = $IClumpedOrb$Type;
}}
declare module "packages/com/blamejared/searchables/mixin/$AccessEditBox" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export interface $AccessEditBox {

 "searchables$getResponder"(): $Consumer<(string)>
 "searchables$getFilter"(): $Predicate<(string)>
}

export namespace $AccessEditBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessEditBox$Type = ($AccessEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessEditBox_ = $AccessEditBox$Type;
}}
declare module "packages/com/blamejared/controlling/mixin/$AccessKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $AccessKeyMapping {

 "controlling$getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $AccessKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessKeyMapping$Type = ($AccessKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessKeyMapping_ = $AccessKeyMapping$Type;
}}
declare module "packages/com/blamejared/controlling/mixin/$AccessScreen" {
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $AccessScreen {

 "controlling$getRenderables"(): $List<($Renderable)>

(): $List<($Renderable)>
}

export namespace $AccessScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessScreen$Type = ($AccessScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessScreen_ = $AccessScreen$Type;
}}
declare module "packages/com/blamejared/clumps/mixin/$ExperienceOrbAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccess {

 "clumps$getAge"(): integer
 "clumps$setCount"(arg0: integer): void
 "clumps$setAge"(arg0: integer): void
}

export namespace $ExperienceOrbAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceOrbAccess$Type = ($ExperienceOrbAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceOrbAccess_ = $ExperienceOrbAccess$Type;
}}
declare module "packages/com/blamejared/controlling/mixin/$AccessInputConstantsKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessInputConstantsKey {

}

export namespace $AccessInputConstantsKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessInputConstantsKey$Type = ($AccessInputConstantsKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessInputConstantsKey_ = $AccessInputConstantsKey$Type;
}}
