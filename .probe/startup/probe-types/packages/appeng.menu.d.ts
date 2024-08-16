declare module "packages/appeng/menu/$ISubMenu" {
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$ISubMenuHost, $ISubMenuHost$Type} from "packages/appeng/api/storage/$ISubMenuHost"

export interface $ISubMenu {

 "getHost"(): $ISubMenuHost
 "getLocator"(): $MenuLocator
}

export namespace $ISubMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenu$Type = ($ISubMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubMenu_ = $ISubMenu$Type;
}}
declare module "packages/appeng/menu/locator/$MenuLocator" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $MenuLocator {

 "locate"<T>(arg0: $Player$Type, arg1: $Class$Type<(T)>): T

(arg0: $Player$Type, arg1: $Class$Type<(T)>): T
}

export namespace $MenuLocator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuLocator$Type = ($MenuLocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuLocator_ = $MenuLocator$Type;
}}
