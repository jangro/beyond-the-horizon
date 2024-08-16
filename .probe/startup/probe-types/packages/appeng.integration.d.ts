declare module "packages/appeng/integration/abstraction/$IAEFacade" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IAEFacade {

 "getFacadeState"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $BlockState

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $BlockState
}

export namespace $IAEFacade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEFacade$Type = ($IAEFacade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEFacade_ = $IAEFacade$Type;
}}
