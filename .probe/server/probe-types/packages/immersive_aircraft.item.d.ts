declare module "packages/immersive_aircraft/item/$VehicleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VehicleItem$VehicleConstructor, $VehicleItem$VehicleConstructor$Type} from "packages/immersive_aircraft/item/$VehicleItem$VehicleConstructor"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DescriptionItem, $DescriptionItem$Type} from "packages/immersive_aircraft/item/$DescriptionItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleItem extends $DescriptionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(settings: $Item$Properties$Type, arg1: $VehicleItem$VehicleConstructor$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$Type = ($VehicleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleItem_ = $VehicleItem$Type;
}}
declare module "packages/immersive_aircraft/item/$DescriptionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DescriptionItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptionItem$Type = ($DescriptionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptionItem_ = $DescriptionItem$Type;
}}
declare module "packages/immersive_aircraft/item/upgrade/$VehicleStat" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleStat extends $Record {
static readonly "STATS": $Map<(string), ($VehicleStat)>
static readonly "ENGINE_SPEED": $VehicleStat
static readonly "VERTICAL_SPEED": $VehicleStat
static readonly "YAW_SPEED": $VehicleStat
static readonly "PITCH_SPEED": $VehicleStat
static readonly "PUSH_SPEED": $VehicleStat
static readonly "ACCELERATION": $VehicleStat
static readonly "DURABILITY": $VehicleStat
static readonly "FUEL": $VehicleStat
static readonly "FRICTION": $VehicleStat
static readonly "GLIDE_FACTOR": $VehicleStat
static readonly "LIFT": $VehicleStat
static readonly "ROLL_FACTOR": $VehicleStat
static readonly "GROUND_PITCH": $VehicleStat
static readonly "STABILIZER": $VehicleStat
static readonly "WIND": $VehicleStat
static readonly "MASS": $VehicleStat
static readonly "GROUND_FRICTION": $VehicleStat
static readonly "ROTATION_DECAY": $VehicleStat
static readonly "HORIZONTAL_DECAY": $VehicleStat
static readonly "VERTICAL_DECAY": $VehicleStat

constructor(name: string, positive: boolean, defaultValue: float)

public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "register"(name: string, positive: boolean, defaultValue: float): $VehicleStat
public static "register"(name: string, positive: boolean): $VehicleStat
public "defaultValue"(): float
public "positive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleStat$Type = ($VehicleStat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleStat_ = $VehicleStat$Type;
}}
declare module "packages/immersive_aircraft/item/$VehicleItem$VehicleConstructor" {
import {$VehicleEntity, $VehicleEntity$Type} from "packages/immersive_aircraft/entity/$VehicleEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $VehicleItem$VehicleConstructor {

 "create"(arg0: $Level$Type): $VehicleEntity

(arg0: $Level$Type): $VehicleEntity
}

export namespace $VehicleItem$VehicleConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$VehicleConstructor$Type = ($VehicleItem$VehicleConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleItem$VehicleConstructor_ = $VehicleItem$VehicleConstructor$Type;
}}
declare module "packages/immersive_aircraft/item/$WeaponItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WeaponMount$Type, $WeaponMount$Type$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount$Type"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DescriptionItem, $DescriptionItem$Type} from "packages/immersive_aircraft/item/$DescriptionItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WeaponItem extends $DescriptionItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(settings: $Item$Properties$Type, mountType: $WeaponMount$Type$Type)

public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "getMountType"(): $WeaponMount$Type
get "mountType"(): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponItem$Type = ($WeaponItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponItem_ = $WeaponItem$Type;
}}
declare module "packages/immersive_aircraft/item/$AircraftItem$AircraftConstructor" {
import {$VehicleItem$VehicleConstructor, $VehicleItem$VehicleConstructor$Type} from "packages/immersive_aircraft/item/$VehicleItem$VehicleConstructor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AircraftEntity, $AircraftEntity$Type} from "packages/immersive_aircraft/entity/$AircraftEntity"

export interface $AircraftItem$AircraftConstructor extends $VehicleItem$VehicleConstructor {

 "create"(arg0: $Level$Type): $AircraftEntity

(arg0: $Level$Type): $AircraftEntity
}

export namespace $AircraftItem$AircraftConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftItem$AircraftConstructor$Type = ($AircraftItem$AircraftConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftItem$AircraftConstructor_ = $AircraftItem$AircraftConstructor$Type;
}}
declare module "packages/immersive_aircraft/item/$AircraftItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AircraftItem$AircraftConstructor, $AircraftItem$AircraftConstructor$Type} from "packages/immersive_aircraft/item/$AircraftItem$AircraftConstructor"
import {$VehicleItem, $VehicleItem$Type} from "packages/immersive_aircraft/item/$VehicleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AircraftItem extends $VehicleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(settings: $Item$Properties$Type, arg1: $AircraftItem$AircraftConstructor$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftItem$Type = ($AircraftItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftItem_ = $AircraftItem$Type;
}}
