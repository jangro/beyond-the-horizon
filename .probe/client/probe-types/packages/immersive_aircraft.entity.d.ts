declare module "packages/immersive_aircraft/entity/inventory/$VehicleInventoryDescription" {
import {$SlotDescription$SlotDescriptionFactory, $SlotDescription$SlotDescriptionFactory$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Rect2iCommon, $Rect2iCommon$Type} from "packages/immersive_aircraft/util/$Rect2iCommon"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlotDescription$SlotDescriptionDecoder, $SlotDescription$SlotDescriptionDecoder$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionDecoder"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$SlotDescription, $SlotDescription$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleInventoryDescription {
static readonly "SLOT_TYPES": $Map<(string), ($SlotDescription$SlotDescriptionFactory)>
static readonly "SLOT_DECODER": $Map<(string), ($SlotDescription$SlotDescriptionDecoder)>
static readonly "INVENTORY": string
static readonly "BOILER": string
static readonly "WEAPON": string
static readonly "UPGRADE": string
static readonly "BOOSTER": string
static readonly "BANNER": string
static readonly "DYE": string
static readonly "INGREDIENT": string

constructor()
constructor(inventorySlots: $JsonArray$Type)
constructor(buffer: $FriendlyByteBuf$Type)

public "addSlots"(type: string, x: integer, y: integer, cols: integer, rows: integer, boxed: boolean, json: $JsonObject$Type): $VehicleInventoryDescription
public "addSlot"(slotDescription: $SlotDescription$Type): $VehicleInventoryDescription
public "build"(): $VehicleInventoryDescription
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "getHeight"(): integer
public "getSlots"(type: string): $List<($SlotDescription)>
public "getSlots"(): $List<($SlotDescription)>
public static "registerSlotType"(name: string, slotFactory: $SlotDescription$SlotDescriptionFactory$Type, slotDecoder: $SlotDescription$SlotDescriptionDecoder$Type): string
public "getRectangles"(): $List<($Rect2iCommon)>
public "getInventorySize"(): integer
public "addRectangle"(x: integer, y: integer, w: integer, h: integer): $VehicleInventoryDescription
public "getLastSyncIndex"(): integer
get "height"(): integer
get "slots"(): $List<($SlotDescription)>
get "rectangles"(): $List<($Rect2iCommon)>
get "inventorySize"(): integer
get "lastSyncIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleInventoryDescription$Type = ($VehicleInventoryDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleInventoryDescription_ = $VehicleInventoryDescription$Type;
}}
declare module "packages/immersive_aircraft/entity/weapons/$Weapon" {
import {$WeaponMount, $WeaponMount$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VehicleEntity, $VehicleEntity$Type} from "packages/immersive_aircraft/entity/$VehicleEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Weapon {

constructor(entity: $VehicleEntity$Type, stack: $ItemStack$Type, mount: $WeaponMount$Type, slot: integer)

public "getSlot"(): integer
public "getStack"(): $ItemStack
public "getEntity"(): $VehicleEntity
public "tick"(): void
public "setGunnerOffset"(gunnerOffset: integer): void
public "clientFire"(arg0: integer): void
public "getGunnerOffset"(): integer
public "getMount"(): $WeaponMount
public "fire"(arg0: $Vector3f$Type): void
public "setAnimationVariables"<T extends $VehicleEntity>(entity: T, time: float): void
get "slot"(): integer
get "stack"(): $ItemStack
get "entity"(): $VehicleEntity
set "gunnerOffset"(value: integer)
get "gunnerOffset"(): integer
get "mount"(): $WeaponMount
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weapon$Type = ($Weapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Weapon_ = $Weapon$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$WeaponMount" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $WeaponMount extends $Record {
static readonly "EMPTY": $WeaponMount

constructor(transform: $Matrix4f$Type, blocking: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buffer: $FriendlyByteBuf$Type): $WeaponMount
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "transform"(): $Matrix4f
public "blocking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$Type = ($WeaponMount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponMount_ = $WeaponMount$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$Trail" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"

export class $Trail {
readonly "buffer": (float)[]
readonly "size": integer
readonly "gray": float
 "lastIndex": integer
 "entries": integer
 "nullEntries": integer

constructor(length: integer)
constructor(length: integer, gray: float)

public "add"(first: $Vector4f$Type, second: $Vector4f$Type, alpha: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trail$Type = ($Trail);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trail_ = $Trail$Type;
}}
declare module "packages/immersive_aircraft/entity/$VehicleEntity" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity$MoveFunction, $Entity$MoveFunction$Type} from "packages/net/minecraft/world/entity/$Entity$MoveFunction"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MoverType, $MoverType$Type} from "packages/net/minecraft/world/entity/$MoverType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $VehicleEntity extends $Entity {
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "BAGU_ANIMATION_CONTROLLER": $BaguAnimationController<(any)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "getRoll"(): float
public "getRoll"(tickDelta: float): float
public "setDamageWobbleTicks"(wobbleTicks: integer): void
public "getControllingPassenger"(): $LivingEntity
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, interpolationSteps: integer, interpolate: boolean): void
public "getBoundingBoxForCulling"(): $AABB
public "getPickResult"(): $ItemStack
public "attack"(source: $DamageSource$Type, amount: float): boolean
public "interact"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "skipAttackInteraction"(attacker: $Entity$Type): boolean
public "animateHurt"(yaw: float): void
public "move"(movementType: $MoverType$Type, movement: $Vec3$Type): void
public "shouldRenderAtSqrDistance"(distance: double): boolean
public "canBeCollidedWith"(): boolean
public "canCollideWith"(other: $Entity$Type): boolean
public "m_19956_"(passenger: $Entity$Type, positionUpdater: $Entity$MoveFunction$Type): void
public "onAboveBubbleCol"(drag: boolean): void
public "tick"(): void
public "isPickable"(): boolean
public "getDismountLocationForPassenger"(passenger: $LivingEntity$Type): $Vec3
public "isNoGravity"(): boolean
public "onPassengerTurned"(passenger: $Entity$Type): void
public "getZoom"(): double
public "fromItemStack"(stack: $ItemStack$Type): void
public "boost"(): void
public "boost"(ticks: integer): void
public "canBoost"(): boolean
public static "canCollide"(entity: $Entity$Type, other: $Entity$Type): boolean
public "getDurability"(): float
public "getHealth"(): float
public "setHealth"(damage: float): void
public "asItem"(): $Item
public "setZRot"(rot: float): void
public "getBoost"(): integer
public "getSpeedVector"(): $Vec3
public "setInputs"(x: float, y: float, z: float): void
public "copyEntityData"(entity: $Entity$Type): void
public "getShapes"(): $List<($AABB)>
public "getTopDirection"(): $Vector3f
public "chill"(): void
public "getGunner"(offset: integer): $Entity
public "isValidDimension"(): boolean
public "toVec3d"(v: $Vector3f$Type): $Vec3
public "isPilotCreative"(): boolean
public "setPitch"(pitch: float): void
public "getRightDirection"(): $Vector3f
public "getDamageWobbleStrength"(): float
public "setDamageWobbleSide"(side: integer): void
public "getDamageWobbleSide"(): integer
public "getAdditionalShapes"(): $List<($AABB)>
public "getDamageWobbleTicks"(): integer
public "setAnimationVariables"(tickDelta: float): void
public "getVehicleNormalTransform"(): $Matrix3f
public "isWithinParticleRange"(): boolean
public "getVehicleTransform"(): $Matrix4f
public "getVehicleNormalTransformQuantized"(): $Matrix3f
public "getForwardDirection"(): $Vector3f
public "setDamageWobbleStrength"(wobbleStrength: float): void
get "roll"(): float
set "damageWobbleTicks"(value: integer)
get "controllingPassenger"(): $LivingEntity
get "boundingBoxForCulling"(): $AABB
get "pickResult"(): $ItemStack
get "pickable"(): boolean
get "noGravity"(): boolean
get "zoom"(): double
get "durability"(): float
get "health"(): float
set "health"(value: float)
set "zRot"(value: float)
get "speedVector"(): $Vec3
get "shapes"(): $List<($AABB)>
get "topDirection"(): $Vector3f
get "validDimension"(): boolean
get "pilotCreative"(): boolean
set "pitch"(value: float)
get "rightDirection"(): $Vector3f
get "damageWobbleStrength"(): float
set "damageWobbleSide"(value: integer)
get "damageWobbleSide"(): integer
get "additionalShapes"(): $List<($AABB)>
get "damageWobbleTicks"(): integer
set "animationVariables"(value: float)
get "vehicleNormalTransform"(): $Matrix3f
get "withinParticleRange"(): boolean
get "vehicleTransform"(): $Matrix4f
get "vehicleNormalTransformQuantized"(): $Matrix3f
get "forwardDirection"(): $Vector3f
set "damageWobbleStrength"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleEntity$Type = ($VehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleEntity_ = $VehicleEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $SlotDescription {

constructor(type: string, index: integer, x: integer, y: integer, json: $JsonObject$Type)
constructor(type: string, buffer: $FriendlyByteBuf$Type)

public "index"(): integer
public "type"(): string
public "encode"(buffer: $FriendlyByteBuf$Type): void
public "x"(): integer
public "getSlot"(vehicle: $InventoryVehicleEntity$Type, inventory: $Container$Type): $Slot
public "y"(): integer
public "getToolTip"(): $Optional<($List<($Component)>)>
get "toolTip"(): $Optional<($List<($Component)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$Type = ($SlotDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription_ = $SlotDescription$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$WeaponMount$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WeaponMount$Type extends $Enum<($WeaponMount$Type)> {
static readonly "ROTATING": $WeaponMount$Type
static readonly "FRONT": $WeaponMount$Type
static readonly "DROP": $WeaponMount$Type


public static "values"(): ($WeaponMount$Type)[]
public static "valueOf"(name: string): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$Type$Type = (("drop") | ("rotating") | ("front")) | ($WeaponMount$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponMount$Type_ = $WeaponMount$Type$Type;
}}
declare module "packages/immersive_aircraft/entity/misc/$VehicleProperties" {
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$VehicleStat, $VehicleStat$Type} from "packages/immersive_aircraft/item/upgrade/$VehicleStat"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleProperties {

constructor(baseValues: $Map$Type<($VehicleStat$Type), (float)>, vehicle: $InventoryVehicleEntity$Type)

public "get"(stat: $VehicleStat$Type): float
public "getAdditive"(stat: $VehicleStat$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleProperties$Type = ($VehicleProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleProperties_ = $VehicleProperties$Type;
}}
declare module "packages/immersive_aircraft/entity/$EngineVehicle" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$EngineVehicle$GUI_STYLE, $EngineVehicle$GUI_STYLE$Type} from "packages/immersive_aircraft/entity/$EngineVehicle$GUI_STYLE"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EngineVehicle extends $InventoryVehicleEntity {
readonly "engineRotation": $InterpolatedFloat
readonly "enginePower": $InterpolatedFloat
 "engineSpinUpStrength": float
 "engineSound": float
static readonly "TARGET_FUEL": integer
static readonly "LOW_FUEL": integer
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "BAGU_ANIMATION_CONTROLLER": $BaguAnimationController<(any)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "tick"(): void
public "setEngineTarget"(engineTarget: float): void
public "getEngineTarget"(): float
public "getGuiStyle"(): $EngineVehicle$GUI_STYLE
public "getFuelUtilization"(): float
public "getEnginePower"(): float
public "setAnimationVariables"(tickDelta: float): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "self"(): $Container
public static "tryClear"(arg0: any): void
set "engineTarget"(value: float)
get "engineTarget"(): float
get "guiStyle"(): $EngineVehicle$GUI_STYLE
get "fuelUtilization"(): float
get "enginePower"(): float
set "animationVariables"(value: float)
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$Type = ($EngineVehicle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle_ = $EngineVehicle$Type;
}}
declare module "packages/immersive_aircraft/entity/$EngineVehicle$GUI_STYLE" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EngineVehicle$GUI_STYLE extends $Enum<($EngineVehicle$GUI_STYLE)> {
static readonly "NONE": $EngineVehicle$GUI_STYLE
static readonly "ENGINE": $EngineVehicle$GUI_STYLE


public static "values"(): ($EngineVehicle$GUI_STYLE)[]
public static "valueOf"(name: string): $EngineVehicle$GUI_STYLE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$GUI_STYLE$Type = (("engine") | ("none")) | ($EngineVehicle$GUI_STYLE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle$GUI_STYLE_ = $EngineVehicle$GUI_STYLE$Type;
}}
declare module "packages/immersive_aircraft/entity/$InventoryVehicleEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Weapon, $Weapon$Type} from "packages/immersive_aircraft/entity/weapons/$Weapon"
import {$VehicleProperties, $VehicleProperties$Type} from "packages/immersive_aircraft/entity/misc/$VehicleProperties"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VehicleEntity, $VehicleEntity$Type} from "packages/immersive_aircraft/entity/$VehicleEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SparseSimpleInventory, $SparseSimpleInventory$Type} from "packages/immersive_aircraft/entity/inventory/$SparseSimpleInventory"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$VehicleStat, $VehicleStat$Type} from "packages/immersive_aircraft/item/upgrade/$VehicleStat"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$VehicleInventoryDescription, $VehicleInventoryDescription$Type} from "packages/immersive_aircraft/entity/inventory/$VehicleInventoryDescription"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$WeaponMount, $WeaponMount$Type} from "packages/immersive_aircraft/entity/misc/$WeaponMount"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InventoryVehicleEntity extends $VehicleEntity implements $ContainerListener, $MenuProvider, $Container {
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "BAGU_ANIMATION_CONTROLLER": $BaguAnimationController<(any)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "getInventoryDescription"(): $VehicleInventoryDescription
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "getProperties"(): $VehicleProperties
public "interact"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "getSlot"(slot: integer): $SlotAccess
public "isScoping"(): boolean
public "setChanged"(): void
public "getSlots"(slotType: string): $List<($ItemStack)>
public "stillValid"(player: $Player$Type): boolean
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "canTakeItem"(target: $Container$Type, index: integer, stack: $ItemStack$Type): boolean
public "getContainerSize"(): integer
public "getItem"(slot: integer): $ItemStack
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "tick"(): void
public "containerChanged"(sender: $Container$Type): void
public "getInventory"(): $SparseSimpleInventory
public "boost"(): void
public "getWeaponMounts"(slot: integer): $List<($WeaponMount)>
public "canBoost"(): boolean
public "getDurability"(): float
public "getTotalUpgrade"(stat: $VehicleStat$Type): float
public "getWeapons"(): $Map<(integer), ($List<($Weapon)>)>
public "openInventory"(player: $ServerPlayer$Type): void
public "clientFireWeapons"(entity: $Entity$Type): void
public "fireWeapon"(slot: integer, index: integer, direction: $Vector3f$Type): void
public "createMenu"(i: integer, playerInventory: $Inventory$Type, playerEntity: $Player$Type): $AbstractContainerMenu
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "clearContent"(): void
public "isEmpty"(): boolean
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "getMaxStackSize"(): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "countItem"(arg0: $Item$Type): integer
public "stopOpen"(arg0: $Player$Type): void
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "startOpen"(arg0: $Player$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "clear"(): void
public "getSlots"(): integer
public "setChanged"(): void
public "getHeight"(): integer
public "getSlotLimit"(slot: integer): integer
public "isMutable"(): boolean
public "asContainer"(): $Container
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "self"(): $Container
public static "tryClear"(arg0: any): void
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
get "inventoryDescription"(): $VehicleInventoryDescription
get "properties"(): $VehicleProperties
get "scoping"(): boolean
get "containerSize"(): integer
get "inventory"(): $SparseSimpleInventory
get "durability"(): float
get "weapons"(): $Map<(integer), ($List<($Weapon)>)>
get "empty"(): boolean
get "displayName"(): $Component
get "maxStackSize"(): integer
get "width"(): integer
get "slots"(): integer
get "height"(): integer
get "mutable"(): boolean
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryVehicleEntity$Type = ($InventoryVehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryVehicleEntity_ = $InventoryVehicleEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/$AircraftEntity" {
import {$EngineVehicle, $EngineVehicle$Type} from "packages/immersive_aircraft/entity/$EngineVehicle"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Trail, $Trail$Type} from "packages/immersive_aircraft/entity/misc/$Trail"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InterpolatedFloat, $InterpolatedFloat$Type} from "packages/immersive_aircraft/util/$InterpolatedFloat"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AircraftEntity extends $EngineVehicle {
readonly "engineRotation": $InterpolatedFloat
readonly "enginePower": $InterpolatedFloat
 "engineSpinUpStrength": float
 "engineSound": float
static readonly "TARGET_FUEL": integer
static readonly "LOW_FUEL": integer
readonly "identifier": $ResourceLocation
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "roll": float
 "prevRoll": float
 "lastX": double
 "lastY": double
 "lastZ": double
 "secondLastX": double
 "secondLastY": double
 "secondLastZ": double
 "adaptPlayerRotation": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "position": $Vec3
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "stepHeight": float
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalEntrancePos": $BlockPos
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "BAGU_ANIMATION_CONTROLLER": $BaguAnimationController<(any)>
 "ars_Nouveau$motions": $Stack<(any)>
 "an_isRewinding": boolean

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type, canExplodeOnCrash: boolean)

public "tick"(): void
public "chill"(): void
public "getTrails"(): $List<($Trail)>
public "getWindStrength"(): float
public "getWindEffect"(): $Vector3f
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "self"(): $Container
public static "tryClear"(arg0: any): void
get "trails"(): $List<($Trail)>
get "windStrength"(): float
get "windEffect"(): $Vector3f
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftEntity$Type = ($AircraftEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftEntity_ = $AircraftEntity$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionDecoder" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SlotDescription, $SlotDescription$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription"

export interface $SlotDescription$SlotDescriptionDecoder {

 "decode"(arg0: string, arg1: $FriendlyByteBuf$Type): $SlotDescription

(arg0: string, arg1: $FriendlyByteBuf$Type): $SlotDescription
}

export namespace $SlotDescription$SlotDescriptionDecoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$SlotDescriptionDecoder$Type = ($SlotDescription$SlotDescriptionDecoder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription$SlotDescriptionDecoder_ = $SlotDescription$SlotDescriptionDecoder$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription$SlotDescriptionFactory" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SlotDescription, $SlotDescription$Type} from "packages/immersive_aircraft/entity/inventory/slots/$SlotDescription"

export interface $SlotDescription$SlotDescriptionFactory {

 "construct"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject$Type): $SlotDescription

(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject$Type): $SlotDescription
}

export namespace $SlotDescription$SlotDescriptionFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$SlotDescriptionFactory$Type = ($SlotDescription$SlotDescriptionFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription$SlotDescriptionFactory_ = $SlotDescription$SlotDescriptionFactory$Type;
}}
declare module "packages/immersive_aircraft/entity/inventory/$SparseSimpleInventory" {
import {$InventoryVehicleEntity, $InventoryVehicleEntity$Type} from "packages/immersive_aircraft/entity/$InventoryVehicleEntity"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export class $SparseSimpleInventory extends $SimpleContainer {

constructor(size: integer)

public "tick"(entity: $InventoryVehicleEntity$Type): void
public "writeNbt"(nbtList: $ListTag$Type): $ListTag
public "readNbt"(nbtList: $ListTag$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparseSimpleInventory$Type = ($SparseSimpleInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SparseSimpleInventory_ = $SparseSimpleInventory$Type;
}}
