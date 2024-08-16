declare module "packages/de/maxhenkel/tradecycling/mixin/$AbstractContainerScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractContainerScreenAccessor {

 "getLeftPos"(): integer
 "getTopPos"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/de/maxhenkel/tradecycling/mixin/$VillagerAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $VillagerAccessor {

 "invokeUpdateSpecialPrices"(arg0: $Player$Type): void

(arg0: $Player$Type): void
}

export namespace $VillagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerAccessor$Type = ($VillagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerAccessor_ = $VillagerAccessor$Type;
}}
declare module "packages/de/maxhenkel/tradecycling/mixin/$MerchantMenuAccessor" {
import {$MerchantContainer, $MerchantContainer$Type} from "packages/net/minecraft/world/inventory/$MerchantContainer"
import {$Merchant, $Merchant$Type} from "packages/net/minecraft/world/item/trading/$Merchant"

export interface $MerchantMenuAccessor {

 "getTradeContainer"(): $MerchantContainer
 "getTrader"(): $Merchant
}

export namespace $MerchantMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantMenuAccessor$Type = ($MerchantMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerchantMenuAccessor_ = $MerchantMenuAccessor$Type;
}}
