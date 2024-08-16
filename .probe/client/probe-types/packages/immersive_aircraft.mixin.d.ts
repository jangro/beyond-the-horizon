declare module "packages/immersive_aircraft/mixin/$ServerPlayerEntityMixin" {
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"

export interface $ServerPlayerEntityMixin {

 "getContainerSynchronizer"(): $ContainerSynchronizer

(): $ContainerSynchronizer
}

export namespace $ServerPlayerEntityMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerEntityMixin$Type = ($ServerPlayerEntityMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerEntityMixin_ = $ServerPlayerEntityMixin$Type;
}}
declare module "packages/immersive_aircraft/mixin/client/$KeyMappingAccessorMixin" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyMappingAccessorMixin {

 "getKey"(): $InputConstants$Key
 "setClickCount"(arg0: integer): void
 "getClickCount"(): integer
}

export namespace $KeyMappingAccessorMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessorMixin$Type = ($KeyMappingAccessorMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessorMixin_ = $KeyMappingAccessorMixin$Type;
}}
