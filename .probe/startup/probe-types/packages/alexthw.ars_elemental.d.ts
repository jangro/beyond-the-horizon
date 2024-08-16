declare module "packages/alexthw/ars_elemental/common/items/$CurioHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SlotReference, $SlotReference$Type} from "packages/com/hollingsworth/arsnouveau/api/item/inv/$SlotReference"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemInventory, $ItemInventory$Type} from "packages/alexthw/ars_elemental/util/$ItemInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioHolder extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "canStore"(arg0: $ItemStack$Type): boolean
public static "getInventory"(arg0: $ItemStack$Type): $ItemInventory
public static "isEquipped"(arg0: $Player$Type): $SlotReference
public "openContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHolder$Type = ($CurioHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioHolder_ = $CurioHolder$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$ArcPrismLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArcPrismLens extends $AbstractPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcPrismLens$Type = ($ArcPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcPrismLens_ = $ArcPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/enchantments/$MirrorShieldEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $MirrorShieldEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMinCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "isTreasureOnly"(): boolean
public "isDiscoverable"(): boolean
public "isTradeable"(): boolean
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "discoverable"(): boolean
get "tradeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorShieldEnchantment$Type = ($MirrorShieldEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorShieldEnchantment_ = $MirrorShieldEnchantment$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$EnthrallEffect" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$LivingChangeTargetEvent, $LivingChangeTargetEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent"

export class $EnthrallEffect extends $MobEffect {

constructor()

public static "isEnthralledBy"(arg0: $LivingEntity$Type, arg1: $Player$Type): boolean
public "onTarget"(arg0: $LivingChangeTargetEvent$Type): void
public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnthrallEffect$Type = ($EnthrallEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnthrallEffect_ = $EnthrallEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/mixin/$ZombieInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombieInvoker {

 "callStartUnderWaterConversion"(arg0: integer): void

(arg0: integer): void
}

export namespace $ZombieInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombieInvoker$Type = ($ZombieInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombieInvoker_ = $ZombieInvoker$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$AdvancedPrismTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorPos, $ColorPos$Type} from "packages/com/hollingsworth/arsnouveau/client/particle/$ColorPos"
import {$ModdedTile, $ModdedTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$ModdedTile"
import {$IWandable, $IWandable$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$IWandable"

export class $AdvancedPrismTile extends $ModdedTile implements $IWandable, $GeoBlockEntity {
 "rotationX": float
 "rotationY": float
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "setRotY"(arg0: float): void
public "aim"(arg0: $BlockPos$Type, arg1: $Player$Type): void
public "setRotX"(arg0: float): void
public "getShootAngle"(): $Vec3
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "onWanded"(arg0: $Player$Type): void
public "getLens"(): $ItemStack
public "getRotationY"(): float
public "getRotationX"(): float
public static "angleBetween"(arg0: $Vec3$Type, arg1: $Vec3$Type): double
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "getWandHighlight"(arg0: $List$Type<($ColorPos$Type)>): $List<($ColorPos)>
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "onFinishedConnectionLast"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type, arg2: $Player$Type): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $LivingEntity$Type, arg3: $Player$Type): void
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: string, arg1: string): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
set "rotY"(value: float)
set "rotX"(value: float)
get "shootAngle"(): $Vec3
get "lens"(): $ItemStack
get "rotationY"(): float
get "rotationX"(): float
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedPrismTile$Type = ($AdvancedPrismTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedPrismTile_ = $AdvancedPrismTile$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$PiercingPrismLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PiercingPrismLens extends $AbstractPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiercingPrismLens$Type = ($PiercingPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiercingPrismLens_ = $PiercingPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$AdvancedPrism" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SpellPrismBlock, $SpellPrismBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SpellPrismBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockSource, $BlockSource$Type} from "packages/net/minecraft/core/$BlockSource"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$AdvancedPrismTile, $AdvancedPrismTile$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AdvancedPrismTile"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AdvancedPrism extends $SpellPrismBlock implements $EntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public static "getDispensePosition"(arg0: $BlockSource$Type, arg1: $AdvancedPrismTile$Type): $Position
public "onHit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedPrism$Type = ($AdvancedPrism);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedPrism_ = $AdvancedPrism$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SpellPrismLens, $SpellPrismLens$Type} from "packages/alexthw/ars_elemental/api/item/$SpellPrismLens"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractPrismLens extends $Item implements $SpellPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: string)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPrismLens$Type = ($AbstractPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPrismLens_ = $AbstractPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/$NecroEssence" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NecroEssence extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NecroEssence$Type = ($NecroEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NecroEssence_ = $NecroEssence$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$LightningLureEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $LightningLureEffect extends $MobEffect {

constructor()

public static "fallLightning"(arg0: $LivingEntity$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningLureEffect$Type = ($LightningLureEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightningLureEffect_ = $LightningLureEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/recipe/$HeadCutRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$HeadCutRecipe, $HeadCutRecipe$Type} from "packages/alexthw/ars_elemental/recipe/$HeadCutRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $HeadCutRecipe$Serializer implements $RecipeSerializer<($HeadCutRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $HeadCutRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $HeadCutRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $HeadCutRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $HeadCutRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadCutRecipe$Serializer$Type = ($HeadCutRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadCutRecipe$Serializer_ = $HeadCutRecipe$Serializer$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/bangles/$FireBangles" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ISchoolBangle, $ISchoolBangle$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolBangle"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FireBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$Type, arg1: $Entity$Type): $SpellSchool
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBangles$Type = ($FireBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBangles_ = $FireBangles$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$OrderEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpellCastEvent, $SpellCastEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$SpellCastEvent"
import {$MaxManaCalcEvent, $MaxManaCalcEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$MaxManaCalcEvent"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $OrderEffect extends $MobEffect {

constructor()

public "block"(arg0: $SpellCastEvent$Type): void
public "punish"(arg0: $MaxManaCalcEvent$Type): void
public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderEffect$Type = ($OrderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderEffect_ = $OrderEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/armor/$ElementalArmor" {
import {$AnimatedMagicArmor, $AnimatedMagicArmor$Type} from "packages/com/hollingsworth/arsnouveau/common/armor/$AnimatedMagicArmor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ArmorSet, $ArmorSet$Type} from "packages/alexthw/ars_elemental/common/items/armor/$ArmorSet"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$IElementalArmor, $IElementalArmor$Type} from "packages/alexthw/ars_elemental/api/item/$IElementalArmor"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElementalArmor extends $AnimatedMagicArmor implements $IElementalArmor {
 "model": $GeoModel<($AnimatedMagicArmor)>
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $SpellSchool$Type, arg2: $Item$Properties$Type)

public "getSchool"(): $SpellSchool
public "getManaDiscount"(arg0: $ItemStack$Type, arg1: $Spell$Type): integer
public "getTier"(): string
public "getMinTier"(): integer
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "addInformationAfterShift"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "addArmorSetDescription"(arg0: $ArmorSet$Type, arg1: $List$Type<($Component$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "doAbsorb"(arg0: $DamageSource$Type): boolean
public static "schoolToMaterial"(arg0: $SpellSchool$Type): $ArmorMaterial
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "getDiscount"(arg0: $List$Type<($AbstractSpellPart$Type)>): double
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
public static "get"(arg0: $ItemStack$Type): $Equipable
get "school"(): $SpellSchool
get "tier"(): string
get "minTier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalArmor$Type = ($ElementalArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalArmor_ = $ElementalArmor$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$BubbleShieldEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BubbleShieldEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleShieldEffect$Type = ($BubbleShieldEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleShieldEffect_ = $BubbleShieldEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/api/item/$ISchoolFocus" {
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISchoolProvider, $ISchoolProvider$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolProvider"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISchoolFocus extends $ISpellModifierItem, $ISchoolProvider {

 "getDiscount"(): double
 "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}

export namespace $ISchoolFocus {
function airCheck(arg0: $SpellResolver$Type): boolean
function fireCheck(arg0: $SpellResolver$Type): boolean
function waterCheck(arg0: $SpellResolver$Type): boolean
function getFocus(arg0: $Player$Type): $ISchoolFocus
function hasFocus(arg0: $Entity$Type): $SpellSchool
function earthCheck(arg0: $SpellResolver$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchoolFocus$Type = ($ISchoolFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchoolFocus_ = $ISchoolFocus$Type;
}}
declare module "packages/alexthw/ars_elemental/recipe/$NetheriteUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NetheriteUpgradeRecipe, $NetheriteUpgradeRecipe$Type} from "packages/alexthw/ars_elemental/recipe/$NetheriteUpgradeRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $NetheriteUpgradeRecipe$Serializer implements $RecipeSerializer<($NetheriteUpgradeRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $NetheriteUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $NetheriteUpgradeRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $NetheriteUpgradeRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $NetheriteUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteUpgradeRecipe$Serializer$Type = ($NetheriteUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteUpgradeRecipe$Serializer_ = $NetheriteUpgradeRecipe$Serializer$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/upstream/$UpstreamBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UpstreamBlock extends $TickableModBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpstreamBlock$Type = ($UpstreamBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpstreamBlock_ = $UpstreamBlock$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$WaterGraveEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WaterGraveEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterGraveEffect$Type = ($WaterGraveEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterGraveEffect_ = $WaterGraveEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/foci/$GreaterElementalFocus" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ElementalFocus, $ElementalFocus$Type} from "packages/alexthw/ars_elemental/common/items/foci/$ElementalFocus"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISchoolFocus, $ISchoolFocus$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolFocus"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GreaterElementalFocus extends $ElementalFocus {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $SpellSchool$Type)

public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "getDiscount"(): double
public static "airCheck"(arg0: $SpellResolver$Type): boolean
public static "fireCheck"(arg0: $SpellResolver$Type): boolean
public static "waterCheck"(arg0: $SpellResolver$Type): boolean
public static "getFocus"(arg0: $Player$Type): $ISchoolFocus
public static "hasFocus"(arg0: $Entity$Type): $SpellSchool
public static "earthCheck"(arg0: $SpellResolver$Type): boolean
get "discount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreaterElementalFocus$Type = ($GreaterElementalFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GreaterElementalFocus_ = $GreaterElementalFocus$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/$SirenCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SirenCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SirenCharm$Type = ($SirenCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SirenCharm_ = $SirenCharm$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/$SporeBlossomGround" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SporeBlossomGround extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeBlossomGround$Type = ($SporeBlossomGround);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporeBlossomGround_ = $SporeBlossomGround$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/foci/$NecroticFocus" {
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISchoolFocus, $ISchoolFocus$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolFocus"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpellCastEvent, $SpellCastEvent$Type} from "packages/com/hollingsworth/arsnouveau/api/event/$SpellCastEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $NecroticFocus extends $ElementalCurio implements $ISchoolFocus {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getSchool"(): $SpellSchool
public static "castSpell"(arg0: $SpellCastEvent$Type): void
public static "lifeSteal"(arg0: $LivingDeathEvent$Type): void
public static "spawnDeathPoof"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public static "hasFocus"(arg0: $Level$Type, arg1: $Entity$Type): boolean
public "getDiscount"(): double
public static "airCheck"(arg0: $SpellResolver$Type): boolean
public static "fireCheck"(arg0: $SpellResolver$Type): boolean
public static "waterCheck"(arg0: $SpellResolver$Type): boolean
public static "getFocus"(arg0: $Player$Type): $ISchoolFocus
public static "hasFocus"(arg0: $Entity$Type): $SpellSchool
public static "earthCheck"(arg0: $SpellResolver$Type): boolean
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
get "discount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NecroticFocus$Type = ($NecroticFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NecroticFocus_ = $NecroticFocus$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/caster_tools/$ElementalCasterTome" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISchoolFocus, $ISchoolFocus$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolFocus"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CasterTome, $CasterTome$Type} from "packages/com/hollingsworth/arsnouveau/common/items/$CasterTome"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElementalCasterTome extends $CasterTome implements $ISchoolFocus {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $SpellSchool$Type)

public "getSchool"(): $SpellSchool
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDiscount"(): double
public static "airCheck"(arg0: $SpellResolver$Type): boolean
public static "fireCheck"(arg0: $SpellResolver$Type): boolean
public static "waterCheck"(arg0: $SpellResolver$Type): boolean
public static "getFocus"(arg0: $Player$Type): $ISchoolFocus
public static "hasFocus"(arg0: $Entity$Type): $SpellSchool
public static "earthCheck"(arg0: $SpellResolver$Type): boolean
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
get "discount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalCasterTome$Type = ($ElementalCasterTome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalCasterTome_ = $ElementalCasterTome$Type;
}}
declare module "packages/alexthw/ars_elemental/api/item/$IElementalArmor" {
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IElementalArmor extends $ISpellModifierItem {

 "getSchool"(): $SpellSchool
 "getTier"(): string
 "doAbsorb"(arg0: $DamageSource$Type): boolean
 "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
 "getDiscount"(arg0: $List$Type<($AbstractSpellPart$Type)>): double
 "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}

export namespace $IElementalArmor {
const damageResistances: $Map<($SpellSchool), ($TagKey<($DamageType)>)>
function schoolToMaterial(arg0: $SpellSchool$Type): $ArmorMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElementalArmor$Type = ($IElementalArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElementalArmor_ = $IElementalArmor$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/bangles/$EarthBangles" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ISchoolBangle, $ISchoolBangle$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolBangle"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EarthBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$Type, arg1: $Entity$Type): $SpellSchool
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthBangles$Type = ($EarthBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthBangles_ = $EarthBangles$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/$FirenandoCharm" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$SummoningTile, $SummoningTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$SummoningTile"
import {$AbstractSummonCharm, $AbstractSummonCharm$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$AbstractSummonCharm"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FirenandoCharm extends $AbstractSummonCharm {
 "tooltip": $List<($Component)>
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOnSummonTile"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $SummoningTile$Type, arg3: $BlockPos$Type): $InteractionResult
public "useOnBlock"(arg0: $UseOnContext$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirenandoCharm$Type = ($FirenandoCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirenandoCharm_ = $FirenandoCharm$Type;
}}
declare module "packages/alexthw/ars_elemental/mixin/$FoxInvoker" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $FoxInvoker {

 "callAddTrustedUUID"(arg0: $UUID$Type): void
 "callTrusts"(arg0: $UUID$Type): boolean
}

export namespace $FoxInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoxInvoker$Type = ($FoxInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoxInvoker_ = $FoxInvoker$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/armor/$ArmorSet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export class $ArmorSet {

constructor(arg0: string, arg1: $SpellSchool$Type)

public "getName"(): string
public "getLegs"(): $Item
public "getBoots"(): $Item
public "getArmorFromSlot"(arg0: $EquipmentSlot$Type): $Item
public "getChest"(): $Item
public "getHat"(): $Item
public "getTranslationKey"(): string
get "name"(): string
get "legs"(): $Item
get "boots"(): $Item
get "chest"(): $Item
get "hat"(): $Item
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorSet$Type = ($ArmorSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorSet_ = $ArmorSet$Type;
}}
declare module "packages/alexthw/ars_elemental/api/item/$ISchoolProvider" {
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"

export interface $ISchoolProvider {

 "getSchool"(): $SpellSchool

(): $SpellSchool
}

export namespace $ISchoolProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchoolProvider$Type = ($ISchoolProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchoolProvider_ = $ISchoolProvider$Type;
}}
declare module "packages/alexthw/ars_elemental/api/item/$SpellPrismLens" {
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $SpellPrismLens {

 "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void

(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}

export namespace $SpellPrismLens {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPrismLens$Type = ($SpellPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPrismLens_ = $SpellPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$DecelerationPrismLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DecelerationPrismLens extends $AbstractPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecelerationPrismLens$Type = ($DecelerationPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecelerationPrismLens_ = $DecelerationPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/bangles/$AirBangles" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ISchoolBangle, $ISchoolBangle$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolBangle"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AirBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$Type, arg1: $Entity$Type): $SpellSchool
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirBangles$Type = ($AirBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirBangles_ = $AirBangles$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/$ElementalTurret" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BasicSpellTurret, $BasicSpellTurret$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$BasicSpellTurret"
import {$AbstractCastMethod, $AbstractCastMethod$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractCastMethod"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$ITurretBehavior, $ITurretBehavior$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ITurretBehavior"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ElementalTurret extends $BasicSpellTurret {
readonly "school": $SpellSchool
static readonly "TRIGGERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $SpellSchool$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "shootSpell"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalTurret$Type = ($ElementalTurret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalTurret_ = $ElementalTurret$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/caster_tools/$SpellHorn" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$ICasterTool, $ICasterTool$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ICasterTool"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Spell, $Spell$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$Spell"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ISpellCaster, $ISpellCaster$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$ISpellCaster"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellHorn extends $Item implements $GeoItem, $ISpellModifierItem, $ICasterTool {
 "factory": $AnimatableInstanceCache
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "setSpell"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "sendInvalidMessage"(arg0: $Player$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getMaxUseDuration"(): integer
public "getMinUseDuration"(): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "isScribedSpellValid"(arg0: $ISpellCaster$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Spell$Type): boolean
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "getTick"(arg0: any): double
public "isPerspectiveAware"(): boolean
public "onScribe"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type): boolean
public "shouldDisplay"(arg0: $ItemStack$Type): boolean
public "getInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "sendSetMessage"(arg0: $Player$Type): void
public "getSpellCaster"(arg0: $CompoundTag$Type): $ISpellCaster
public "getSpellCaster"(): $ISpellCaster
public "getSpellCaster"(arg0: $ItemStack$Type): $ISpellCaster
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "onQuickCast"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type, arg2: $InteractionHand$Type, arg3: integer): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "maxUseDuration"(): integer
get "minUseDuration"(): integer
get "perspectiveAware"(): boolean
get "spellCaster"(): $ISpellCaster
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellHorn$Type = ($SpellHorn);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellHorn_ = $SpellHorn$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/$ElementalCurio" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElementalCurio extends $Item implements $ICurioItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalCurio$Type = ($ElementalCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalCurio_ = $ElementalCurio$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$MagicFireEffect" {
import {$IForgeMobEffect, $IForgeMobEffect$Type} from "packages/net/minecraftforge/common/extensions/$IForgeMobEffect"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MagicFireEffect extends $MobEffect implements $IForgeMobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicFireEffect$Type = ($MagicFireEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicFireEffect_ = $MagicFireEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/$Debugger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ElementalFocus, $ElementalFocus$Type} from "packages/alexthw/ars_elemental/common/items/foci/$ElementalFocus"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISchoolFocus, $ISchoolFocus$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolFocus"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Debugger extends $ElementalFocus {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "airCheck"(arg0: $SpellResolver$Type): boolean
public static "fireCheck"(arg0: $SpellResolver$Type): boolean
public static "waterCheck"(arg0: $SpellResolver$Type): boolean
public static "getFocus"(arg0: $Player$Type): $ISchoolFocus
public static "hasFocus"(arg0: $Entity$Type): $SpellSchool
public static "earthCheck"(arg0: $SpellResolver$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Debugger$Type = ($Debugger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Debugger_ = $Debugger$Type;
}}
declare module "packages/alexthw/ars_elemental/recipe/$ElementalArmorRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ElementalArmorRecipe, $ElementalArmorRecipe$Type} from "packages/alexthw/ars_elemental/recipe/$ElementalArmorRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ElementalArmorRecipe$Serializer implements $RecipeSerializer<($ElementalArmorRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ElementalArmorRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ElementalArmorRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ElementalArmorRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ElementalArmorRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalArmorRecipe$Serializer$Type = ($ElementalArmorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalArmorRecipe$Serializer_ = $ElementalArmorRecipe$Serializer$Type;
}}
declare module "packages/alexthw/ars_elemental/recipe/$ElementalArmorRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ITextOutput, $ITextOutput$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$ITextOutput"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe"

export class $ElementalArmorRecipe extends $EnchantingApparatusRecipe implements $ITextOutput {
 "tier": integer
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: $Ingredient$Type, arg3: $ItemStack$Type, arg4: integer, arg5: integer)
constructor(arg0: $EnchantingApparatusRecipe$Type)

public "excludeJei"(): boolean
public "asRecipe"(): $JsonElement
public "getOutputComponent"(): $Component
public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "isMatch"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type, arg3: $Player$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "outputComponent"(): $Component
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalArmorRecipe$Type = ($ElementalArmorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalArmorRecipe_ = $ElementalArmorRecipe$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$LifeLinkEffect" {
import {$LivingHealEvent, $LivingHealEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHealEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $LifeLinkEffect extends $MobEffect {

constructor()

public "healForHeal"(arg0: $LivingHealEvent$Type): void
public "hurtForHurt"(arg0: $LivingHurtEvent$Type): void
public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LifeLinkEffect$Type = ($LifeLinkEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LifeLinkEffect_ = $LifeLinkEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/bangles/$WaterBangles" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ISchoolBangle, $ISchoolBangle$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolBangle"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WaterBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$Type, arg1: $Entity$Type): $SpellSchool
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterBangles$Type = ($WaterBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBangles_ = $WaterBangles$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/$EverfullUrnBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TickableModBlock, $TickableModBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$TickableModBlock"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $EverfullUrnBlock extends $TickableModBlock implements $BucketPickup {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverfullUrnBlock$Type = ($EverfullUrnBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverfullUrnBlock_ = $EverfullUrnBlock$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$AccelerationPrismLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AccelerationPrismLens extends $AbstractPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccelerationPrismLens$Type = ($AccelerationPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccelerationPrismLens_ = $AccelerationPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/api/item/$ISchoolBangle" {
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISchoolProvider, $ISchoolProvider$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolProvider"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISchoolBangle extends $ISpellModifierItem, $ISchoolProvider {

 "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder

(arg0: $Level$Type, arg1: $Entity$Type): $SpellSchool
}

export namespace $ISchoolBangle {
function hasBangle(arg0: $Level$Type, arg1: $Entity$Type): $SpellSchool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchoolBangle$Type = ($ISchoolBangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchoolBangle_ = $ISchoolBangle$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/mermaid_block/$MermaidRock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$SummonBlock, $SummonBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SummonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $MermaidRock extends $SummonBlock implements $SimpleWaterloggedBlock {
static "shape": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MermaidRock$Type = ($MermaidRock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MermaidRock_ = $MermaidRock$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/$CasterHolder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CurioHolder, $CurioHolder$Type} from "packages/alexthw/ars_elemental/common/items/$CurioHolder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CasterHolder extends $CurioHolder {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "canStore"(arg0: $ItemStack$Type): boolean
public "openContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterHolder$Type = ($CasterHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasterHolder_ = $CasterHolder$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$VenomEffect" {
import {$ParticleMobEffect, $ParticleMobEffect$Type} from "packages/com/hollingsworth/arsnouveau/common/potions/$ParticleMobEffect"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $VenomEffect extends $ParticleMobEffect {
readonly "curativeItems": $List<($ItemStack)>

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "getParticle"(): $ParticleOptions
get "particle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VenomEffect$Type = ($VenomEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VenomEffect_ = $VenomEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$RepelEffect" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $RepelEffect extends $MobEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepelEffect$Type = ($RepelEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepelEffect_ = $RepelEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/common/enchantments/$SoulboundEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $SoulboundEnchantment extends $Enchantment {
static readonly "SOULBOUND_CAT": $EnchantmentCategory
static readonly "TAG_SOULBOUND_DROP_COUNT": string
static readonly "TAG_SOULBOUND_PREFIX": string
static readonly "TAG_SOULBOUND": string
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getMaxCost"(arg0: integer): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public "isDiscoverable"(): boolean
public "isTradeable"(): boolean
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "discoverable"(): boolean
get "tradeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulboundEnchantment$Type = ($SoulboundEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulboundEnchantment_ = $SoulboundEnchantment$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$RainbowPrismLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RainbowPrismLens extends $AbstractPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RainbowPrismLens$Type = ($RainbowPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RainbowPrismLens_ = $RainbowPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$SpellMirror" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SpellPrismBlock, $SpellPrismBlock$Type} from "packages/com/hollingsworth/arsnouveau/common/block/$SpellPrismBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpellMirror extends $SpellPrismBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onHit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellMirror$Type = ($SpellMirror);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellMirror_ = $SpellMirror$Type;
}}
declare module "packages/alexthw/ars_elemental/util/$ItemInventory" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemInventory extends $SimpleContainer {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "setChanged"(): void
public "stillValid"(arg0: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInventory$Type = ($ItemInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInventory_ = $ItemInventory$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/bangles/$BaseBangle" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISpellModifierItem, $ISpellModifierItem$Type} from "packages/com/hollingsworth/arsnouveau/api/item/$ISpellModifierItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBangle extends $ElementalCurio implements $ISpellModifierItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBangle$Type = ($BaseBangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBangle_ = $BaseBangle$Type;
}}
declare module "packages/alexthw/ars_elemental/common/blocks/prism/$HomingPrismLens" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EntityProjectileSpell, $EntityProjectileSpell$Type} from "packages/com/hollingsworth/arsnouveau/common/entity/$EntityProjectileSpell"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$Type} from "packages/alexthw/ars_elemental/common/blocks/prism/$AbstractPrismLens"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HomingPrismLens extends $AbstractPrismLens {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "canConvert"(arg0: $EntityProjectileSpell$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "shoot"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $EntityProjectileSpell$Type, arg3: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HomingPrismLens$Type = ($HomingPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HomingPrismLens_ = $HomingPrismLens$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$EnderferenceEffect" {
import {$EntityTeleportEvent, $EntityTeleportEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityTeleportEvent"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EnderferenceEffect extends $MobEffect {

constructor()

public static "enderference"(arg0: $EntityTeleportEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderferenceEffect$Type = ($EnderferenceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderferenceEffect_ = $EnderferenceEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/recipe/$HeadCutRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HeadCutRecipe extends $CustomRecipe {
 "mob": $ResourceLocation
 "result": $ItemStack
 "chance": integer

constructor(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: $ResourceLocation$Type)

public "asRecipe"(): $JsonElement
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadCutRecipe$Type = ($HeadCutRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadCutRecipe_ = $HeadCutRecipe$Type;
}}
declare module "packages/alexthw/ars_elemental/common/mob_effects/$FrozenEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FrozenEffect extends $MobEffect {

constructor()

public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrozenEffect$Type = ($FrozenEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrozenEffect_ = $FrozenEffect$Type;
}}
declare module "packages/alexthw/ars_elemental/recipe/$NetheriteUpgradeRecipe" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantingApparatusTile, $EnchantingApparatusTile$Type} from "packages/com/hollingsworth/arsnouveau/common/block/tile/$EnchantingApparatusTile"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$Type} from "packages/com/hollingsworth/arsnouveau/api/enchanting_apparatus/$EnchantingApparatusRecipe"

export class $NetheriteUpgradeRecipe extends $EnchantingApparatusRecipe {
 "reagent": $Ingredient
 "result": $ItemStack
 "pedestalItems": $List<($Ingredient)>
 "id": $ResourceLocation
 "sourceCost": integer
 "keepNbtOfReagent": boolean

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $List$Type<($Ingredient$Type)>, arg3: integer)

public "excludeJei"(): boolean
public "asRecipe"(): $JsonElement
public "doesReagentMatch"(arg0: $ItemStack$Type): boolean
public "getResult"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $EnchantingApparatusTile$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteUpgradeRecipe$Type = ($NetheriteUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteUpgradeRecipe_ = $NetheriteUpgradeRecipe$Type;
}}
declare module "packages/alexthw/ars_elemental/common/items/foci/$ElementalFocus" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractSpellPart, $AbstractSpellPart$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$AbstractSpellPart"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellStats$Builder, $SpellStats$Builder$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellStats$Builder"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISchoolFocus, $ISchoolFocus$Type} from "packages/alexthw/ars_elemental/api/item/$ISchoolFocus"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellContext, $SpellContext$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellContext"
import {$ElementalCurio, $ElementalCurio$Type} from "packages/alexthw/ars_elemental/common/items/$ElementalCurio"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SpellResolver, $SpellResolver$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellResolver"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SpellSchool, $SpellSchool$Type} from "packages/com/hollingsworth/arsnouveau/api/spell/$SpellSchool"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElementalFocus extends $ElementalCurio implements $ISchoolFocus {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $SpellSchool$Type)

public "getSchool"(): $SpellSchool
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "applyItemModifiers"(arg0: $ItemStack$Type, arg1: $SpellStats$Builder$Type, arg2: $AbstractSpellPart$Type, arg3: $HitResult$Type, arg4: $Level$Type, arg5: $LivingEntity$Type, arg6: $SpellContext$Type): $SpellStats$Builder
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDiscount"(): double
public static "airCheck"(arg0: $SpellResolver$Type): boolean
public static "fireCheck"(arg0: $SpellResolver$Type): boolean
public static "waterCheck"(arg0: $SpellResolver$Type): boolean
public static "getFocus"(arg0: $Player$Type): $ISchoolFocus
public static "hasFocus"(arg0: $Entity$Type): $SpellSchool
public static "earthCheck"(arg0: $SpellResolver$Type): boolean
public "applyModifiers"(arg0: $SpellStats$Builder$Type, arg1: $AbstractSpellPart$Type, arg2: $HitResult$Type, arg3: $Level$Type, arg4: $LivingEntity$Type, arg5: $SpellContext$Type): $SpellStats$Builder
get "school"(): $SpellSchool
get "discount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalFocus$Type = ($ElementalFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalFocus_ = $ElementalFocus$Type;
}}
