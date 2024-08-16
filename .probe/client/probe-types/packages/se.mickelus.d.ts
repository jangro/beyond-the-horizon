declare module "packages/se/mickelus/tetra/blocks/holo/$HolosphereBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HolosphereBlock extends $TetraWaterloggedBlock implements $EntityBlock {
static readonly "identifier": string
static "instance": $RegistryObject<($HolosphereBlock)>
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "clientInit"(): void
public static "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "commonInit"(arg0: $PacketHandler$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolosphereBlock$Type = ($HolosphereBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HolosphereBlock_ = $HolosphereBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$TweakData" {
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$ItemProperties, $ItemProperties$Type} from "packages/se/mickelus/tetra/module/data/$ItemProperties"

export class $TweakData {
 "variant": string
 "improvement": string
 "key": string
 "steps": integer

constructor()

public "getToolData"(arg0: integer): $ToolData
public "getProperties"(arg0: integer): $ItemProperties
public "getToolLevel"(arg0: $ToolAction$Type, arg1: integer): integer
public "getAttributeModifiers"(arg0: integer): $Multimap<($Attribute), ($AttributeModifier)>
public "getEffectData"(arg0: integer): $EffectData
public "getEffectLevel"(arg0: $ItemEffect$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TweakData$Type = ($TweakData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TweakData_ = $TweakData$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/scroll/$ScrollItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$InitializableItem, $InitializableItem$Type} from "packages/se/mickelus/tetra/items/$InitializableItem"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScrollItem extends $BlockItem implements $InitializableItem {
static readonly "identifier": string
static "instance": $ScrollItem
static "gemExpertise": $ItemStack
static "metalExpertise": $ItemStack
static "woodExpertise": $ItemStack
static "stoneExpertise": $ItemStack
static "fibreExpertise": $ItemStack
static "skinExpertise": $ItemStack
static "boneExpertise": $ItemStack
static "fabricExpertise": $ItemStack
static "scaleExpertise": $ItemStack
static "hammerEfficiency": $ItemStack
static "axeEfficiency": $ItemStack
static "cutEfficiency": $ItemStack
static "sturdyGuard": $ItemStack
static "throwingKnife": $ItemStack
static "howlingBlade": $ItemStack
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "getCreativeTabItems"(): $Collection<($ItemStack)>
public "clientInit"(): void
public "commonInit"(arg0: $PacketHandler$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "creativeTabItems"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollItem$Type = ($ScrollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollItem_ = $ScrollItem$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$SmallHealthPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SmallHealthPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $SmallHealthPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallHealthPotionEffect$Type = ($SmallHealthPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallHealthPotionEffect_ = $SmallHealthPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$PuncturedPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PuncturedPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $PuncturedPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PuncturedPotionEffect$Type = ($PuncturedPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PuncturedPotionEffect_ = $PuncturedPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/client/particle/$SweepingStrikeParticleType" {
import {$SweepingStrikeParticleOption, $SweepingStrikeParticleOption$Type} from "packages/se/mickelus/tetra/client/particle/$SweepingStrikeParticleOption"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SweepingStrikeParticleType extends $ParticleType<($SweepingStrikeParticleOption)> {
static readonly "identifier": string
static "instance": $ParticleType<($SweepingStrikeParticleOption)>

constructor()

public "codec"(): $Codec<($SweepingStrikeParticleOption)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SweepingStrikeParticleType$Type = ($SweepingStrikeParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SweepingStrikeParticleType_ = $SweepingStrikeParticleType$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/workbench/$BasicWorkbenchBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractWorkbenchBlock, $AbstractWorkbenchBlock$Type} from "packages/se/mickelus/tetra/blocks/workbench/$AbstractWorkbenchBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasicWorkbenchBlock extends $AbstractWorkbenchBlock {
static readonly "identifier": string
static "instance": $AbstractWorkbenchBlock
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

constructor()

public static "upgradeWorkbench"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $InteractionHand$Type, arg4: $Direction$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicWorkbenchBlock$Type = ($BasicWorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicWorkbenchBlock_ = $BasicWorkbenchBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock" {
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IInteractiveBlock {

 "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
}

export namespace $IInteractiveBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInteractiveBlock$Type = ($IInteractiveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInteractiveBlock_ = $IInteractiveBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedVentBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ForgedVentBlock extends $TetraWaterloggedBlock implements $IInteractiveBlock {
static readonly "propRotation": $IntegerProperty
static readonly "propX": $BooleanProperty
static readonly "propBroken": $BooleanProperty
static readonly "identifier": string
static readonly "interactions": ($BlockInteraction)[]
static "instance": $ForgedVentBlock
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedVentBlock$Type = ($ForgedVentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedVentBlock_ = $ForgedVentBlock$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$UnwaveringPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $UnwaveringPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $UnwaveringPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnwaveringPotionEffect$Type = ($UnwaveringPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnwaveringPotionEffect_ = $UnwaveringPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedWallBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"

export class $ForgedWallBlock extends $TetraBlock {
static readonly "identifier": string
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

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedWallBlock$Type = ($ForgedWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedWallBlock_ = $ForgedWallBlock$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/dynamic/$DynamicModularItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemModularHandheld, $ItemModularHandheld$Type} from "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DynamicModularItem extends $ItemModularHandheld {
static readonly "identifier": string
static readonly "typeKey": string
static readonly "nailedTag": $TagKey<($Block)>
static readonly "blockingDurationLimit": integer
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getMajorModuleKeys"(arg0: $ItemStack$Type): (string)[]
public "getMinorModuleKeys"(arg0: $ItemStack$Type): (string)[]
public "getHoneBase"(arg0: $ItemStack$Type): integer
public "getRequiredModules"(arg0: $ItemStack$Type): (string)[]
public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getHoneIntegrityMultiplier"(arg0: $ItemStack$Type): integer
public "canGainHoneProgress"(arg0: $ItemStack$Type): boolean
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicModularItem$Type = ($DynamicModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicModularItem_ = $DynamicModularItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/$InitializableBlock" {
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"

export interface $InitializableBlock {

 "clientInit"(): void
 "commonInit"(arg0: $PacketHandler$Type): void
}

export namespace $InitializableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InitializableBlock$Type = ($InitializableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InitializableBlock_ = $InitializableBlock$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$BeamItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BeamItem extends $TetraItem {
static readonly "identifier": string
static "instance": $BeamItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeamItem$Type = ($BeamItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeamItem_ = $BeamItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionOutcome, $InteractionOutcome$Type} from "packages/se/mickelus/tetra/blocks/salvage/$InteractionOutcome"

export class $BlockInteraction {
 "requiredTool": $ToolAction
 "requiredLevel": integer
 "alwaysReveal": boolean
 "face": $Direction
 "minX": float
 "minY": float
 "maxX": float
 "maxY": float
 "predicate": $Predicate<($BlockState)>
 "outcome": $InteractionOutcome

constructor(arg0: $ToolAction$Type, arg1: integer, arg2: $Direction$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: $Predicate$Type<($BlockState$Type)>, arg8: $InteractionOutcome$Type)
constructor<V extends $Comparable<(V)>>(arg0: $ToolAction$Type, arg1: integer, arg2: $Direction$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: $Property$Type<(V)>, arg8: V, arg9: $InteractionOutcome$Type)
constructor<V extends $Comparable<(V)>>(arg0: $ToolAction$Type, arg1: integer, arg2: $Direction$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: $InteractionOutcome$Type)

public static "getLoot"(arg0: $ResourceLocation$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): $List<($ItemStack)>
public static "getLoot"(arg0: $ResourceLocation$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ServerLevel$Type, arg4: $BlockState$Type): $List<($ItemStack)>
public "isWithinBounds"(arg0: double, arg1: double): boolean
public "applicableForBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "attemptInteraction"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isPotentialInteraction"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Direction$Type, arg5: $Collection$Type<($ToolAction$Type)>): boolean
public "isPotentialInteraction"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): boolean
public static "dropLoot"(arg0: $ResourceLocation$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "dropLoot"(arg0: $ResourceLocation$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ServerLevel$Type, arg4: $BlockState$Type): void
public static "getInteractionAtPoint"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: double, arg5: double, arg6: double): $BlockInteraction
public "applyOutcome"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInteraction$Type = ($BlockInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInteraction_ = $BlockInteraction$Type;
}}
declare module "packages/se/mickelus/mutil/network/$AbstractPacket" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $AbstractPacket {

constructor()

public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public "handle"(arg0: $Player$Type): void
public "fromBytes"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPacket$Type = ($AbstractPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPacket_ = $AbstractPacket$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/container/$ForgedContainerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ForgedContainerBlock extends $TetraWaterloggedBlock implements $IInteractiveBlock, $EntityBlock {
static readonly "identifier": string
static readonly "facingProp": $DirectionProperty
static readonly "flippedProp": $BooleanProperty
static readonly "locked1Prop": $BooleanProperty
static readonly "locked2Prop": $BooleanProperty
static readonly "anyLockedProp": $BooleanProperty
static readonly "openProp": $BooleanProperty
static readonly "interactions": ($BlockInteraction)[]
static "instance": $RegistryObject<($ForgedContainerBlock)>
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "clientInit"(): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "commonInit"(arg0: $PacketHandler$Type): void
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedContainerBlock$Type = ($ForgedContainerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedContainerBlock_ = $ForgedContainerBlock$Type;
}}
declare module "packages/se/mickelus/tetra/effect/$AbilityUseResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbilityUseResult extends $Enum<($AbilityUseResult)> {
static readonly "fail": $AbilityUseResult
static readonly "hit": $AbilityUseResult
static readonly "crit": $AbilityUseResult
static readonly "magicCrit": $AbilityUseResult


public static "values"(): ($AbilityUseResult)[]
public static "valueOf"(arg0: string): $AbilityUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityUseResult$Type = (("fail") | ("hit") | ("magiccrit") | ("crit")) | ($AbilityUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityUseResult_ = $AbilityUseResult$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/toolbelt/suspend/$SuspendPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SuspendPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $SuspendPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspendPotionEffect$Type = ($SuspendPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuspendPotionEffect_ = $SuspendPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$AspectData" {
import {$ItemAspect, $ItemAspect$Type} from "packages/se/mickelus/tetra/aspect/$ItemAspect"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TierData, $TierData$Type} from "packages/se/mickelus/tetra/module/data/$TierData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AspectData extends $TierData<($ItemAspect)> {
 "levelMap": $Map<(T), (float)>
 "efficiencyMap": $Map<(T), (float)>

constructor()

public static "multiply"(arg0: $AspectData$Type, arg1: float, arg2: float): $AspectData
public static "merge"(arg0: $AspectData$Type, arg1: $AspectData$Type): $AspectData
public static "merge"(arg0: $Collection$Type<($AspectData$Type)>): $AspectData
public static "overwrite"(arg0: $AspectData$Type, arg1: $AspectData$Type): $AspectData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectData$Type = ($AspectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectData_ = $AspectData$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$MiningSpeedPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PlayerEvent$BreakSpeed, $PlayerEvent$BreakSpeed$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$BreakSpeed"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MiningSpeedPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $MiningSpeedPotionEffect

constructor()

public static "onBreakSpeed"(arg0: $PlayerEvent$BreakSpeed$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiningSpeedPotionEffect$Type = ($MiningSpeedPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MiningSpeedPotionEffect_ = $MiningSpeedPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$PriedPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PriedPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $PriedPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriedPotionEffect$Type = ($PriedPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PriedPotionEffect_ = $PriedPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$GeodeBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GeodeBlock extends $TetraBlock {
static readonly "identifier": string
static "instance": $GeodeBlock
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

constructor()

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeodeBlock$Type = ($GeodeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeodeBlock_ = $GeodeBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/salvage/$InteractionOutcome" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $InteractionOutcome {

 "apply"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type): boolean
}

export namespace $InteractionOutcome {
const EMPTY: $InteractionOutcome
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionOutcome$Type = ($InteractionOutcome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractionOutcome_ = $InteractionOutcome$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$EarthboundPotionEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EarthboundPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $EarthboundPotionEffect

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthboundPotionEffect$Type = ($EarthboundPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthboundPotionEffect_ = $EarthboundPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/extractor/$CoreExtractorPistonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CoreExtractorPistonBlock extends $TetraWaterloggedBlock implements $EntityBlock {
static readonly "identifier": string
static readonly "hackProp": $BooleanProperty
static readonly "boundingBox": $VoxelShape
static "instance": $RegistryObject<($CoreExtractorPistonBlock)>
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "commonInit"(arg0: $PacketHandler$Type): void
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreExtractorPistonBlock$Type = ($CoreExtractorPistonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreExtractorPistonBlock_ = $CoreExtractorPistonBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$PristineLapisItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PristineLapisItem extends $TetraItem {
static readonly "identifier": string
static "instance": $PristineLapisItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PristineLapisItem$Type = ($PristineLapisItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PristineLapisItem_ = $PristineLapisItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$LubricantDispenserItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LubricantDispenserItem extends $TetraItem {
static readonly "identifier": string
static "instance": $RegistryObject<($LubricantDispenserItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LubricantDispenserItem$Type = ($LubricantDispenserItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LubricantDispenserItem_ = $LubricantDispenserItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/chthonic/$ChthonicExtractorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ChthonicExtractorBlock extends $TetraBlock implements $IInteractiveBlock, $EntityBlock {
static readonly "identifier": string
static readonly "usedIdentifier": string
static readonly "description": string
static readonly "extendedDescription": string
static readonly "maxDamage": integer
static "instance": $ChthonicExtractorBlock
static "item": $Item
static "usedItem": $Item
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public static "registerItems"(arg0: $DeferredRegister$Type<($Item$Type)>): $RegistryObject<($BlockItem)>
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChthonicExtractorBlock$Type = ($ChthonicExtractorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChthonicExtractorBlock_ = $ChthonicExtractorBlock$Type;
}}
declare module "packages/se/mickelus/tetra/effect/$ItemEffect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ItemEffect {
static readonly "hauntedKey": string
static readonly "workable": $ItemEffect
static readonly "unstable": $ItemEffect
static readonly "howling": $ItemEffect
static readonly "bleeding": $ItemEffect
static readonly "backstab": $ItemEffect
static readonly "armorPenetration": $ItemEffect
static readonly "crushing": $ItemEffect
static readonly "skewering": $ItemEffect
static readonly "sweeping": $ItemEffect
static readonly "truesweep": $ItemEffect
static readonly "strikingAxe": $ItemEffect
static readonly "strikingPickaxe": $ItemEffect
static readonly "strikingCut": $ItemEffect
static readonly "strikingShovel": $ItemEffect
static readonly "strikingHoe": $ItemEffect
static readonly "sweepingStrike": $ItemEffect
static readonly "sweepingFocus": $ItemEffect
static readonly "planarSweep": $ItemEffect
static readonly "extraction": $ItemEffect
static readonly "unboundExtraction": $ItemEffect
static readonly "extractionMedialLimit": $ItemEffect
static readonly "extractionLateralLimit": $ItemEffect
static readonly "extractionAxialLimit": $ItemEffect
static readonly "extractionAxialAmplify": $ItemEffect
static readonly "extractionPlanarAmplify": $ItemEffect
static readonly "unbreaking": $ItemEffect
static readonly "blocking": $ItemEffect
static readonly "blockingReflect": $ItemEffect
static readonly "bashing": $ItemEffect
static readonly "ricochet": $ItemEffect
static readonly "piercing": $ItemEffect
static readonly "piercingHarvest": $ItemEffect
static readonly "jab": $ItemEffect
static readonly "counterweight": $ItemEffect
static readonly "quickStrike": $ItemEffect
static readonly "softStrike": $ItemEffect
static readonly "severing": $ItemEffect
static readonly "stun": $ItemEffect
static readonly "abilityDefensive": $ItemEffect
static readonly "abilityOvercharge": $ItemEffect
static readonly "abilityMomentum": $ItemEffect
static readonly "abilityCombo": $ItemEffect
static readonly "abilityRevenge": $ItemEffect
static readonly "abilityOverextend": $ItemEffect
static readonly "abilityExhilaration": $ItemEffect
static readonly "abilitySpeed": $ItemEffect
static readonly "abilityEcho": $ItemEffect
static readonly "execute": $ItemEffect
static readonly "lunge": $ItemEffect
static readonly "slam": $ItemEffect
static readonly "puncture": $ItemEffect
static readonly "pry": $ItemEffect
static readonly "overpower": $ItemEffect
static readonly "reap": $ItemEffect
static readonly "denailing": $ItemEffect
static readonly "fierySelf": $ItemEffect
static readonly "enderReverb": $ItemEffect
static readonly "sculkTaint": $ItemEffect
static readonly "haunted": $ItemEffect
static readonly "stabilizing": $ItemEffect
static readonly "criticalStrike": $ItemEffect
static readonly "intuit": $ItemEffect
static readonly "earthbind": $ItemEffect
static readonly "reaching": $ItemEffect
static readonly "janking": $ItemEffect
static readonly "throwable": $ItemEffect
static readonly "shieldbreaker": $ItemEffect
static readonly "booster": $ItemEffect
static readonly "quickSlot": $ItemEffect
static readonly "storageSlot": $ItemEffect
static readonly "potionSlot": $ItemEffect
static readonly "quiverSlot": $ItemEffect
static readonly "quickAccess": $ItemEffect
static readonly "cellSocket": $ItemEffect
static readonly "suspendSelf": $ItemEffect
static readonly "releaseLatch": $ItemEffect
static readonly "flow": $ItemEffect
static readonly "overbowed": $ItemEffect
static readonly "multishot": $ItemEffect
static readonly "ammoCapacity": $ItemEffect
static readonly "zoom": $ItemEffect
static readonly "spread": $ItemEffect
static readonly "focus": $ItemEffect
static readonly "focusEcho": $ItemEffect
static readonly "velocity": $ItemEffect
static readonly "suspend": $ItemEffect
static readonly "rangeCritical": $ItemEffect
static readonly "sweeperRange": $ItemEffect
static readonly "sweeperHorizontalSpread": $ItemEffect
static readonly "sweeperVerticalSpread": $ItemEffect
static readonly "percussionScanner": $ItemEffect


public static "get"(arg0: string): $ItemEffect
public "getKey"(): string
get "key"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEffect$Type = ($ItemEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEffect_ = $ItemEffect$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$StonecutterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StonecutterItem extends $TetraItem {
static readonly "identifier": string
static "instance": $StonecutterItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterItem$Type = ($StonecutterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterItem_ = $StonecutterItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/crossbow/$ModularCrossbowItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ModularItem, $ModularItem$Type} from "packages/se/mickelus/tetra/items/modular/$ModularItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularCrossbowItem extends $ModularItem {
static readonly "staveKey": string
static readonly "stockKey": string
static readonly "stringKey": string
static readonly "attachmentAKey": string
static readonly "attachmentBKey": string
static readonly "identifier": string
static readonly "velocityFactor": double
static "instance": $ModularCrossbowItem
static "multishotDefaultSpread": double
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Type)

public "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getReloadDuration"(arg0: $ItemStack$Type): integer
public "hasProjectiles"(arg0: $ItemStack$Type, arg1: $Item$Type): boolean
public "isLoaded"(arg0: $ItemStack$Type): boolean
public "clientInit"(): void
public "setLoaded"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getProjectileVelocity"(arg0: double, arg1: float): float
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "useOnRelease"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "updateConfig"(arg0: integer, arg1: integer): void
public "getProgress"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): float
public "commonInit"(arg0: $PacketHandler$Type): void
public "getModels"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $ImmutableList<($ModuleModel)>
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "canBeDepleted"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularCrossbowItem$Type = ($ModularCrossbowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularCrossbowItem_ = $ModularCrossbowItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/$ICraftingEffectProviderBlock" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICraftingEffectProviderBlock {

 "getCraftingEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
 "canUnlockCraftingEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
}

export namespace $ICraftingEffectProviderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingEffectProviderBlock$Type = ($ICraftingEffectProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingEffectProviderBlock_ = $ICraftingEffectProviderBlock$Type;
}}
declare module "packages/se/mickelus/tetra/effect/$ChargedAbilityEffect" {
import {$ChargedAbilityEffect$TargetRequirement, $ChargedAbilityEffect$TargetRequirement$Type} from "packages/se/mickelus/tetra/effect/$ChargedAbilityEffect$TargetRequirement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemModularHandheld, $ItemModularHandheld$Type} from "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ChargedAbilityEffect {

constructor(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: $ItemEffect$Type, arg5: $ChargedAbilityEffect$TargetRequirement$Type, arg6: $UseAnim$Type)
constructor(arg0: integer, arg1: double, arg2: integer, arg3: double, arg4: $ItemEffect$Type, arg5: $ChargedAbilityEffect$TargetRequirement$Type, arg6: $UseAnim$Type, arg7: string)

public "canOvercharge"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type): boolean
public "getOverchargeBonus"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type, arg2: integer): integer
public "isAvailable"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type): boolean
public "perform"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemModularHandheld$Type, arg3: $ItemStack$Type, arg4: $LivingEntity$Type, arg5: $BlockPos$Type, arg6: $Vec3$Type, arg7: integer): void
public "perform"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemModularHandheld$Type, arg3: $ItemStack$Type, arg4: $BlockPos$Type, arg5: $Vec3$Type, arg6: integer): void
public "perform"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemModularHandheld$Type, arg3: $ItemStack$Type, arg4: $LivingEntity$Type, arg5: $Vec3$Type, arg6: integer): void
public "perform"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemModularHandheld$Type, arg3: $ItemStack$Type, arg4: integer): void
public "getChargeTime"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type): integer
public "getChargeTime"(arg0: $Player$Type, arg1: $ItemModularHandheld$Type, arg2: $ItemStack$Type): integer
public "getSpeedBonusMultiplier"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type): float
public "getOverchargeProgress"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type, arg2: integer): double
public static "getOverchargeProgress"(arg0: float): double
public "canPerform"(arg0: $Player$Type, arg1: $ItemModularHandheld$Type, arg2: $ItemStack$Type, arg3: $LivingEntity$Type, arg4: $BlockPos$Type, arg5: integer): boolean
public "getCooldown"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type): integer
public "getPose"(): $UseAnim
public "canCharge"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type): boolean
public "getModelTransform"(): string
public "isDefensive"(arg0: $ItemModularHandheld$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type): boolean
get "pose"(): $UseAnim
get "modelTransform"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedAbilityEffect$Type = ($ChargedAbilityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedAbilityEffect_ = $ChargedAbilityEffect$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$QuickLatchItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuickLatchItem extends $TetraItem {
static readonly "identifier": string
static "instance": $QuickLatchItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickLatchItem$Type = ($QuickLatchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuickLatchItem_ = $QuickLatchItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedPlatformSlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InitializableBlock, $InitializableBlock$Type} from "packages/se/mickelus/tetra/blocks/$InitializableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"

export class $ForgedPlatformSlabBlock extends $SlabBlock implements $InitializableBlock {
static readonly "identifier": string
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
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

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "clientInit"(): void
public "commonInit"(arg0: $PacketHandler$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedPlatformSlabBlock$Type = ($ForgedPlatformSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedPlatformSlabBlock_ = $ForgedPlatformSlabBlock$Type;
}}
declare module "packages/se/mickelus/tetra/properties/$IToolProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IToolProvider {

 "getToolData"(arg0: $ItemStack$Type): $ToolData
 "getTools"(arg0: $ItemStack$Type): $Set<($ToolAction)>
 "getToolLevels"(arg0: $ItemStack$Type): $Map<($ToolAction), (integer)>
 "getToolLevel"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): integer
 "canProvideTools"(arg0: $ItemStack$Type): boolean
 "onCraftConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
 "onActionConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
 "getToolEfficiency"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): float
}

export namespace $IToolProvider {
const logger: $Logger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToolProvider$Type = ($IToolProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToolProvider_ = $IToolProvider$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$ToolData" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$TierData, $TierData$Type} from "packages/se/mickelus/tetra/module/data/$TierData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolData extends $TierData<($ToolAction)> {
 "levelMap": $Map<(T), (float)>
 "efficiencyMap": $Map<(T), (float)>

constructor()

public static "multiply"(arg0: $ToolData$Type, arg1: float, arg2: float): $ToolData
public static "merge"(arg0: $Collection$Type<($ToolData$Type)>): $ToolData
public static "merge"(arg0: $ToolData$Type, arg1: $ToolData$Type): $ToolData
public static "overwrite"(arg0: $ToolData$Type, arg1: $ToolData$Type): $ToolData
public static "offsetLevel"(arg0: $ToolData$Type, arg1: float, arg2: integer): $ToolData
public static "retainMax"(arg0: $Collection$Type<($ToolData$Type)>): $ToolData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolData$Type = ($ToolData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolData_ = $ToolData$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/multischematic/$RuinedMultiblockSchematicItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BaseMultiblockSchematicItem, $BaseMultiblockSchematicItem$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$BaseMultiblockSchematicItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultiblockSchematicBlock, $MultiblockSchematicBlock$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$MultiblockSchematicBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RuinedMultiblockSchematicItem extends $BaseMultiblockSchematicItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $MultiblockSchematicBlock$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinedMultiblockSchematicItem$Type = ($RuinedMultiblockSchematicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinedMultiblockSchematicItem_ = $RuinedMultiblockSchematicItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$PlanarStabilizerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlanarStabilizerItem extends $TetraItem {
static readonly "identifier": string
static "instance": $PlanarStabilizerItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanarStabilizerItem$Type = ($PlanarStabilizerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanarStabilizerItem_ = $PlanarStabilizerItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/chthonic/$FracturedBedrockBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FracturedBedrockBlock extends $TetraBlock implements $EntityBlock {
static readonly "identifier": string
static "instance": $FracturedBedrockBlock
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

constructor()

public static "pierce"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "canPierce"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FracturedBedrockBlock$Type = ($FracturedBedrockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FracturedBedrockBlock_ = $FracturedBedrockBlock$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$MeshItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MeshItem extends $TetraItem {
static readonly "identifier": string
static "instance": $MeshItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshItem$Type = ($MeshItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeshItem_ = $MeshItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChargedAbilityEffect, $ChargedAbilityEffect$Type} from "packages/se/mickelus/tetra/effect/$ChargedAbilityEffect"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ModularItem, $ModularItem$Type} from "packages/se/mickelus/tetra/items/modular/$ModularItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbilityUseResult, $AbilityUseResult$Type} from "packages/se/mickelus/tetra/effect/$AbilityUseResult"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModularHandheld extends $ModularItem {
static readonly "nailedTag": $TagKey<($Block)>
static readonly "blockingDurationLimit": integer
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getCooldownBase"(arg0: $ItemStack$Type): double
public "isBlocking"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "onCraftConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
public "isShield"(arg0: $ItemStack$Type): boolean
public "onActionConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "onShieldDisabled"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getEffectAttributes"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getChargeableAbility"(arg0: $ItemStack$Type): $ChargedAbilityEffect
public "triggerChargedAbility"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "handleChargedAbility"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $LivingEntity$Type, arg3: $BlockPos$Type, arg4: $Vec3$Type, arg5: integer): void
public "getBlockDestroyDamage"(): integer
public static "handleSecondaryAbility"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $LivingEntity$Type): void
public "applyBlockBreakEffects"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): void
public "itemInteractionForEntitySecondary"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): boolean
public static "getEfficiencyEnchantmentBonus"(arg0: integer): double
public "getCounterWeightBonus"(arg0: $ItemStack$Type): double
public static "getCounterWeightBonus"(arg0: integer, arg1: integer): double
public "onPlayerStoppedUsingSecondary"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "getAttackSpeedHarvestModifier"(arg0: double): double
public "getAbilityBaseDamage"(arg0: $ItemStack$Type): double
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "getEntityHitDamage"(): integer
public static "canDenail"(arg0: $BlockState$Type): boolean
public "jabEntity"(arg0: $ItemStack$Type, arg1: integer, arg2: $Player$Type, arg3: $LivingEntity$Type): void
public "bashEntity"(arg0: $ItemStack$Type, arg1: integer, arg2: $Player$Type, arg3: $LivingEntity$Type): void
public "denailBlock"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $InteractionHand$Type, arg4: $Direction$Type): boolean
public "dowseBlock"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): boolean
public "isThrowing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "throwItem"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer, arg3: float): void
public "causeRiptideEffect"(arg0: $Player$Type, arg1: integer): void
public "getBlockProgress"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): float
public "getToolActions"(arg0: $ItemStack$Type): $Set<($ToolAction)>
public "getHarvestTier"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): integer
public "hitEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: double, arg4: float, arg5: float): $AbilityUseResult
public "hitEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: float, arg6: float): $AbilityUseResult
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
get "blockDestroyDamage"(): integer
get "entityHitDamage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModularHandheld$Type = ($ItemModularHandheld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModularHandheld_ = $ItemModularHandheld$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/holo/$ModularHolosphereItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModularItem, $ModularItem$Type} from "packages/se/mickelus/tetra/items/modular/$ModularItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularHolosphereItem extends $ModularItem {
static readonly "coreKey": string
static readonly "frameKey": string
static readonly "scannerKey": string
static readonly "repositoryKey": string
static readonly "identifier": string
static "instance": $ModularHolosphereItem
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getCooldownBase"(arg0: $ItemStack$Type): double
public static "getCreativeItemStack"(): $ItemStack
public "commonInit"(arg0: $PacketHandler$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "showGui"(): void
public static "findHolosphere"(arg0: $Player$Type): $ItemStack
public static "findHolosphere"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $ItemStack
public static "findHolosphere"(arg0: $Level$Type, arg1: $BlockPos$Type): $ItemStack
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
get "creativeItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularHolosphereItem$Type = ($ModularHolosphereItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularHolosphereItem_ = $ModularHolosphereItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedPillarBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InitializableBlock, $InitializableBlock$Type} from "packages/se/mickelus/tetra/blocks/$InitializableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $ForgedPillarBlock extends $RotatedPillarBlock implements $InitializableBlock {
static readonly "identifier": string
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "clientInit"(): void
public "commonInit"(arg0: $PacketHandler$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedPillarBlock$Type = ($ForgedPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedPillarBlock_ = $ForgedPillarBlock$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/toolbelt/$SlotType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SlotType extends $Enum<($SlotType)> {
static readonly "storage": $SlotType
static readonly "quiver": $SlotType
static readonly "potion": $SlotType
static readonly "quick": $SlotType


public static "values"(): ($SlotType)[]
public static "valueOf"(arg0: string): $SlotType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$Type = (("potion") | ("quick") | ("storage") | ("quiver")) | ($SlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotType_ = $SlotType$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/$ModularItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Cache, $Cache$Type} from "packages/com/google/common/cache/$Cache"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IToolProvider, $IToolProvider$Type} from "packages/se/mickelus/tetra/properties/$IToolProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemModuleMajor, $ItemModuleMajor$Type} from "packages/se/mickelus/tetra/module/$ItemModuleMajor"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$ItemProperties, $ItemProperties$Type} from "packages/se/mickelus/tetra/module/data/$ItemProperties"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemModule, $ItemModule$Type} from "packages/se/mickelus/tetra/module/$ItemModule"
import {$RepairDefinition, $RepairDefinition$Type} from "packages/se/mickelus/tetra/module/schematic/$RepairDefinition"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ImprovementData, $ImprovementData$Type} from "packages/se/mickelus/tetra/module/data/$ImprovementData"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IModularItem, $IModularItem$Type} from "packages/se/mickelus/tetra/items/modular/$IModularItem"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$SynergyData, $SynergyData$Type} from "packages/se/mickelus/tetra/module/data/$SynergyData"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularItem extends $TetraItem implements $IModularItem, $IToolProvider {
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getMajorModuleKeys"(arg0: $ItemStack$Type): (string)[]
public "getMinorModuleKeys"(arg0: $ItemStack$Type): (string)[]
public "getToolData"(arg0: $ItemStack$Type): $ToolData
public "getHoneBase"(arg0: $ItemStack$Type): integer
public "getToolDataCache"(): $Cache<(string), ($ToolData)>
public "getPropertyCache"(): $Cache<(string), ($ItemProperties)>
public "getAllSynergyData"(arg0: $ItemStack$Type): ($SynergyData)[]
public "getRequiredModules"(arg0: $ItemStack$Type): (string)[]
public "getEffectDataCache"(): $Cache<(string), ($EffectData)>
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getItem"(): $Item
public "canProvideTools"(arg0: $ItemStack$Type): boolean
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getEnchantmentValue"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "clearCaches"(): void
public "getHoneIntegrityMultiplier"(arg0: $ItemStack$Type): integer
public "getAttributeModifierCache"(): $Cache<(string), ($Multimap<($Attribute), ($AttributeModifier)>)>
public "canGainHoneProgress"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getSynergyData"(arg0: $ItemStack$Type): ($SynergyData)[]
public "getDataCacheKey"(arg0: $ItemStack$Type): string
public "getAllModules"(arg0: $ItemStack$Type): $Collection<($ItemModule)>
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public "acceptsEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type, arg2: boolean): boolean
public "getEnchantability"(arg0: $ItemStack$Type): integer
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public "getDefaultStack"(): $ItemStack
public "getMajorModules"(arg0: $ItemStack$Type): ($ItemModuleMajor)[]
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public "getMinorModules"(arg0: $ItemStack$Type): ($ItemModule)[]
public "getModuleFromSlot"(arg0: $ItemStack$Type, arg1: string): $ItemModule
public "isModuleRequired"(arg0: $ItemStack$Type, arg1: string): boolean
public "hasModule"(arg0: $ItemStack$Type, arg1: $ItemModule$Type): boolean
public "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "getHonedCount"(arg0: $ItemStack$Type): integer
public "getNumMajorModules"(arg0: $ItemStack$Type): integer
public "getNumMinorModules"(arg0: $ItemStack$Type): integer
public "getReducedDamage"(arg0: integer, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): integer
public "getRepairAmount"(arg0: $ItemStack$Type): integer
public "getRepairModule"(arg0: $ItemStack$Type): $Optional<($ItemModule)>
public "getRepairCount"(arg0: $ItemStack$Type): integer
public "getRepairCycle"(arg0: $ItemStack$Type): ($ItemModule)[]
public "fixIdentifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>): $Multimap<($Attribute), ($AttributeModifier)>
public "getImprovements"(arg0: $ItemStack$Type): ($ImprovementData)[]
public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "hasVariantSynergy"(arg0: $SynergyData$Type, arg1: (string)[]): boolean
public "hasModuleSynergy"(arg0: $ItemStack$Type, arg1: $SynergyData$Type, arg2: ($ItemModule$Type)[]): boolean
public "applyUsageEffects"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double): void
public "isBroken"(arg0: integer, arg1: integer): boolean
public "isBroken"(arg0: $ItemStack$Type): boolean
public "getTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $TooltipFlag$Type): $List<($Component)>
public "getProperties"(arg0: $ItemStack$Type): $ItemProperties
public "getAttributeValue"(arg0: $ItemStack$Type, arg1: $Attribute$Type, arg2: double): double
public "getAttributeValue"(arg0: $ItemStack$Type, arg1: $Attribute$Type): double
public "getIdentifier"(arg0: $ItemStack$Type): string
public "getHoningLimit"(arg0: $ItemStack$Type): integer
public "getHoningProgress"(arg0: $ItemStack$Type): integer
public "setHoningProgress"(arg0: $ItemStack$Type, arg1: integer): void
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public "getRepairSlot"(arg0: $ItemStack$Type): string
public "getTags"(arg0: $ItemStack$Type): $Set<($TagKey<($Item)>)>
public "getAttributeModifiers"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getPropertiesCached"(arg0: $ItemStack$Type): $ItemProperties
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public "getRepairRequiredToolLevel"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ToolAction$Type): integer
public "getHoningIntegrityPenalty"(arg0: $ItemStack$Type): integer
public "getImprovementTooltip"(arg0: string, arg1: integer, arg2: boolean): string
public "getMajorModuleNames"(arg0: $ItemStack$Type): (string)[]
public "getRepairDefinitions"(arg0: $ItemStack$Type): $Collection<($RepairDefinition)>
public "getRepairRequiredToolLevels"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $Map<($ToolAction), (integer)>
public "getRepairRequiredExperience"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public "incrementRepairCount"(arg0: $ItemStack$Type): void
public "getStabilityModifier"(arg0: $ItemStack$Type): float
public "applyDestabilizationEffects"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: float): void
public "getMinorModuleNames"(arg0: $ItemStack$Type): (string)[]
public "applyPositiveUsageEffects"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double): void
public "getRepairMaterialCount"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public "getRepairRequiredTools"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $Collection<($ToolAction)>
public static "getImprovementDescription"(arg0: string): string
public "applyNegativeUsageEffects"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double): void
public "getRepairModuleName"(arg0: $ItemStack$Type): string
public "tickHoningProgression"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getEffectEfficiency"(arg0: $ItemStack$Type, arg1: $ItemEffect$Type): float
public "getAttributeModifiersCollapsed"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getModuleAttributes"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getDisplayNamePrefixes"(arg0: $ItemStack$Type): string
public "hasImprovementSynergy"(arg0: $SynergyData$Type, arg1: (string)[]): boolean
public "getTransformVariant"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "getEffectAttributes"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttributeModifiersCached"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEffectDataCached"(arg0: $ItemStack$Type): $EffectData
public "tweak"(arg0: $ItemStack$Type, arg1: string, arg2: $Map$Type<(string), (integer)>): void
public "getEffects"(arg0: $ItemStack$Type): $Collection<($ItemEffect)>
public "getModels"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $ImmutableList<($ModuleModel)>
public "getItemName"(arg0: $ItemStack$Type): string
public "assemble"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: float): void
public "tickProgression"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
public "applyDamage"(arg0: integer, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): void
public "getEffectData"(arg0: $ItemStack$Type): $EffectData
public "getEffectLevel"(arg0: $ItemStack$Type, arg1: $ItemEffect$Type): integer
public "repair"(arg0: $ItemStack$Type): void
public "getTools"(arg0: $ItemStack$Type): $Set<($ToolAction)>
public "getToolLevels"(arg0: $ItemStack$Type): $Map<($ToolAction), (integer)>
public "getToolLevel"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): integer
public "onCraftConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
public "onActionConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
public "getToolEfficiency"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): float
get "toolDataCache"(): $Cache<(string), ($ToolData)>
get "propertyCache"(): $Cache<(string), ($ItemProperties)>
get "effectDataCache"(): $Cache<(string), ($EffectData)>
get "item"(): $Item
get "attributeModifierCache"(): $Cache<(string), ($Multimap<($Attribute), ($AttributeModifier)>)>
get "defaultStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularItem$Type = ($ModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularItem_ = $ModularItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/toolbelt/$ModularToolbeltItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotType, $SlotType$Type} from "packages/se/mickelus/tetra/items/modular/impl/toolbelt/$SlotType"
import {$ModularItem, $ModularItem$Type} from "packages/se/mickelus/tetra/items/modular/$ModularItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularToolbeltItem extends $ModularItem implements $MenuProvider {
static readonly "identifier": string
static readonly "slot1Key": string
static readonly "slot2Key": string
static readonly "slot3Key": string
static readonly "beltKey": string
static readonly "slot1Suffix": string
static readonly "slot2Suffix": string
static readonly "slot3Suffix": string
static "instance": $RegistryObject<($ModularToolbeltItem)>
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public static "getCreativeTabItemStacks"(): $Collection<($ItemStack)>
public "clientInit"(): void
public "getDisplayName"(): $Component
public "commonInit"(arg0: $PacketHandler$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getNumSlots"(arg0: $ItemStack$Type, arg1: $SlotType$Type): integer
public "getSlotEffects"(arg0: $ItemStack$Type, arg1: $SlotType$Type): $List<($Collection<($ItemEffect)>)>
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
get "creativeTabItemStacks"(): $Collection<($ItemStack)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularToolbeltItem$Type = ($ModularToolbeltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularToolbeltItem_ = $ModularToolbeltItem$Type;
}}
declare module "packages/se/mickelus/tetra/aspect/$ItemAspect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ItemAspect {
static readonly "armor": $ItemAspect
static readonly "armorFeet": $ItemAspect
static readonly "armorLegs": $ItemAspect
static readonly "armorChest": $ItemAspect
static readonly "armorHead": $ItemAspect
static readonly "edgedWeapon": $ItemAspect
static readonly "bluntWeapon": $ItemAspect
static readonly "pointyWeapon": $ItemAspect
static readonly "throwable": $ItemAspect
static readonly "blockBreaker": $ItemAspect
static readonly "fishingRod": $ItemAspect
static readonly "breakable": $ItemAspect
static readonly "bow": $ItemAspect
static readonly "wearable": $ItemAspect
static readonly "crossbow": $ItemAspect
static readonly "vanishable": $ItemAspect


public static "get"(arg0: string): $ItemAspect
public "getKey"(): string
get "key"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAspect$Type = ($ItemAspect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAspect_ = $ItemAspect$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$ItemProperties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $ItemProperties {
 "durability": integer
 "durabilityMultiplier": float
 "integrity": integer
 "integrityUsage": integer
 "integrityMultiplier": float
 "tags": $Set<($TagKey<($Item)>)>
 "rarity": $Rarity

constructor()

public "multiply"(arg0: float): $ItemProperties
public static "merge"(arg0: $ItemProperties$Type, arg1: $ItemProperties$Type): $ItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProperties$Type = ($ItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemProperties_ = $ItemProperties$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/$ModularBladedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemModularHandheld, $ItemModularHandheld$Type} from "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularBladedItem extends $ItemModularHandheld {
static readonly "bladeKey": string
static readonly "hiltKey": string
static readonly "guardKey": string
static readonly "pommelKey": string
static readonly "fullerKey": string
static readonly "identifier": string
static "instance": $ModularBladedItem
static readonly "nailedTag": $TagKey<($Block)>
static readonly "blockingDurationLimit": integer
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public static "getCreativeTabItemStacks"(): $Collection<($ItemStack)>
public "updateConfig"(arg0: integer, arg1: integer): void
public "getTransformVariant"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "commonInit"(arg0: $PacketHandler$Type): void
public static "createItemStack"(arg0: string, arg1: string, arg2: string): $ItemStack
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
get "creativeTabItemStacks"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularBladedItem$Type = ($ModularBladedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularBladedItem_ = $ModularBladedItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/$TetraItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$InitializableItem, $InitializableItem$Type} from "packages/se/mickelus/tetra/items/$InitializableItem"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TetraItem extends $Item implements $InitializableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "clientInit"(): void
public "commonInit"(arg0: $PacketHandler$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TetraItem$Type = ($TetraItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TetraItem_ = $TetraItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/rack/$RackBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$IToolProviderBlock, $IToolProviderBlock$Type} from "packages/se/mickelus/tetra/blocks/$IToolProviderBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RackBlock extends $TetraWaterloggedBlock implements $EntityBlock, $IToolProviderBlock {
static readonly "identifier": string
static readonly "facingProp": $DirectionProperty
static "instance": $RackBlock
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "clientInit"(): void
public "getTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Collection<($ToolAction)>
public "getToolLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ToolAction$Type): integer
public "onCraftConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: string, arg5: boolean, arg6: $Player$Type, arg7: $ToolAction$Type, arg8: integer, arg9: boolean): $ItemStack
public "canProvideTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "onActionConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $ToolAction$Type, arg6: integer, arg7: boolean): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getToolLevels"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Map<($ToolAction), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RackBlock$Type = ($RackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RackBlock_ = $RackBlock$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$StunPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $StunPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $StunPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunPotionEffect$Type = ($StunPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunPotionEffect_ = $StunPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/multischematic/$StackedMultiblockSchematicItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BaseMultiblockSchematicItem, $BaseMultiblockSchematicItem$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$BaseMultiblockSchematicItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultiblockSchematicBlock, $MultiblockSchematicBlock$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$MultiblockSchematicBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackedMultiblockSchematicItem extends $BaseMultiblockSchematicItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $MultiblockSchematicBlock$Type, arg1: $Block$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedMultiblockSchematicItem$Type = ($StackedMultiblockSchematicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackedMultiblockSchematicItem_ = $StackedMultiblockSchematicItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/$IModularItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Cache, $Cache$Type} from "packages/com/google/common/cache/$Cache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemModuleMajor, $ItemModuleMajor$Type} from "packages/se/mickelus/tetra/module/$ItemModuleMajor"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$ItemProperties, $ItemProperties$Type} from "packages/se/mickelus/tetra/module/data/$ItemProperties"
import {$ItemModule, $ItemModule$Type} from "packages/se/mickelus/tetra/module/$ItemModule"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$RepairDefinition, $RepairDefinition$Type} from "packages/se/mickelus/tetra/module/schematic/$RepairDefinition"
import {$ImprovementData, $ImprovementData$Type} from "packages/se/mickelus/tetra/module/data/$ImprovementData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SynergyData, $SynergyData$Type} from "packages/se/mickelus/tetra/module/data/$SynergyData"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModularItem {

 "getMajorModuleKeys"(arg0: $ItemStack$Type): (string)[]
 "getMinorModuleKeys"(arg0: $ItemStack$Type): (string)[]
 "getHoneBase"(arg0: $ItemStack$Type): integer
 "getSynergyData"(arg0: $ItemStack$Type): ($SynergyData)[]
 "getDataCacheKey"(arg0: $ItemStack$Type): string
 "getAllModules"(arg0: $ItemStack$Type): $Collection<($ItemModule)>
 "getPropertyCache"(): $Cache<(string), ($ItemProperties)>
 "getAllSynergyData"(arg0: $ItemStack$Type): ($SynergyData)[]
 "acceptsEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type, arg2: boolean): boolean
 "getRequiredModules"(arg0: $ItemStack$Type): (string)[]
 "getEffectDataCache"(): $Cache<(string), ($EffectData)>
 "getEnchantability"(arg0: $ItemStack$Type): integer
 "getDefaultStack"(): $ItemStack
 "getMajorModules"(arg0: $ItemStack$Type): ($ItemModuleMajor)[]
 "getMinorModules"(arg0: $ItemStack$Type): ($ItemModule)[]
 "getModuleFromSlot"(arg0: $ItemStack$Type, arg1: string): $ItemModule
 "isModuleRequired"(arg0: $ItemStack$Type, arg1: string): boolean
 "hasModule"(arg0: $ItemStack$Type, arg1: $ItemModule$Type): boolean
 "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
 "getHonedCount"(arg0: $ItemStack$Type): integer
 "getNumMajorModules"(arg0: $ItemStack$Type): integer
 "getNumMinorModules"(arg0: $ItemStack$Type): integer
 "getReducedDamage"(arg0: integer, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): integer
 "getRepairAmount"(arg0: $ItemStack$Type): integer
 "getRepairModule"(arg0: $ItemStack$Type): $Optional<($ItemModule)>
 "getRepairCount"(arg0: $ItemStack$Type): integer
 "getRepairCycle"(arg0: $ItemStack$Type): ($ItemModule)[]
 "fixIdentifiers"(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>): $Multimap<($Attribute), ($AttributeModifier)>
 "getImprovements"(arg0: $ItemStack$Type): ($ImprovementData)[]
 "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
 "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
 "hasVariantSynergy"(arg0: $SynergyData$Type, arg1: (string)[]): boolean
 "hasModuleSynergy"(arg0: $ItemStack$Type, arg1: $SynergyData$Type, arg2: ($ItemModule$Type)[]): boolean
 "applyUsageEffects"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double): void
 "isBroken"(arg0: integer, arg1: integer): boolean
 "isBroken"(arg0: $ItemStack$Type): boolean
 "getTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $TooltipFlag$Type): $List<($Component)>
 "getProperties"(arg0: $ItemStack$Type): $ItemProperties
 "getItem"(): $Item
 "getAttributeValue"(arg0: $ItemStack$Type, arg1: $Attribute$Type, arg2: double): double
 "getAttributeValue"(arg0: $ItemStack$Type, arg1: $Attribute$Type): double
 "getIdentifier"(arg0: $ItemStack$Type): string
 "getHoningLimit"(arg0: $ItemStack$Type): integer
 "getHoningProgress"(arg0: $ItemStack$Type): integer
 "setHoningProgress"(arg0: $ItemStack$Type, arg1: integer): void
 "getRepairSlot"(arg0: $ItemStack$Type): string
 "getTags"(arg0: $ItemStack$Type): $Set<($TagKey<($Item)>)>
 "getAttributeModifiers"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getPropertiesCached"(arg0: $ItemStack$Type): $ItemProperties
 "clearCaches"(): void
 "getHoneIntegrityMultiplier"(arg0: $ItemStack$Type): integer
 "getAttributeModifierCache"(): $Cache<(string), ($Multimap<($Attribute), ($AttributeModifier)>)>
 "canGainHoneProgress"(arg0: $ItemStack$Type): boolean
 "getRepairRequiredToolLevel"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ToolAction$Type): integer
 "getHoningIntegrityPenalty"(arg0: $ItemStack$Type): integer
 "getImprovementTooltip"(arg0: string, arg1: integer, arg2: boolean): string
 "getMajorModuleNames"(arg0: $ItemStack$Type): (string)[]
 "getRepairDefinitions"(arg0: $ItemStack$Type): $Collection<($RepairDefinition)>
 "getRepairRequiredToolLevels"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $Map<($ToolAction), (integer)>
 "getRepairRequiredExperience"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
 "incrementRepairCount"(arg0: $ItemStack$Type): void
 "getStabilityModifier"(arg0: $ItemStack$Type): float
 "applyDestabilizationEffects"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: float): void
 "getMinorModuleNames"(arg0: $ItemStack$Type): (string)[]
 "applyPositiveUsageEffects"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double): void
 "getRepairMaterialCount"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
 "getRepairRequiredTools"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $Collection<($ToolAction)>
 "applyNegativeUsageEffects"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: double): void
 "getRepairModuleName"(arg0: $ItemStack$Type): string
 "tickHoningProgression"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
 "getEffectEfficiency"(arg0: $ItemStack$Type, arg1: $ItemEffect$Type): float
 "getAttributeModifiersCollapsed"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getModuleAttributes"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getDisplayNamePrefixes"(arg0: $ItemStack$Type): string
 "hasImprovementSynergy"(arg0: $SynergyData$Type, arg1: (string)[]): boolean
 "getTransformVariant"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
 "getEffectAttributes"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getAttributeModifiersCached"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getEffectDataCached"(arg0: $ItemStack$Type): $EffectData
 "tweak"(arg0: $ItemStack$Type, arg1: string, arg2: $Map$Type<(string), (integer)>): void
 "getEffects"(arg0: $ItemStack$Type): $Collection<($ItemEffect)>
 "getModels"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $ImmutableList<($ModuleModel)>
 "getItemName"(arg0: $ItemStack$Type): string
 "assemble"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: float): void
 "tickProgression"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
 "applyDamage"(arg0: integer, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): void
 "getEffectData"(arg0: $ItemStack$Type): $EffectData
 "getEffectLevel"(arg0: $ItemStack$Type, arg1: $ItemEffect$Type): integer
 "repair"(arg0: $ItemStack$Type): void
}

export namespace $IModularItem {
const logger: $Logger
const defaultMajorOffsets: ($GuiModuleOffsets)[]
const defaultMinorOffsets: ($GuiModuleOffsets)[]
const identifierKey: string
const repairCountKey: string
const cooledStrengthKey: string
const honeProgressKey: string
const honeAvailableKey: string
const honeCountKey: string
function updateIdentifier(arg0: $ItemStack$Type): void
function updateIdentifier(arg0: $CompoundTag$Type): void
function getImprovementName(arg0: string, arg1: integer): string
function getIntegrityCost(arg0: $ItemStack$Type): integer
function putModuleInSlot(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
function putModuleInSlot(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
function getHoningSeed(arg0: $ItemStack$Type): integer
function getIntegrityGain(arg0: $ItemStack$Type): integer
function removeHoneable(arg0: $ItemStack$Type): void
function isHoneable(arg0: $ItemStack$Type): boolean
function removeAllEnchantments(arg0: $ItemStack$Type): $ItemStack
function getImprovementDescription(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModularItem$Type = ($IModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModularItem_ = $IModularItem$Type;
}}
declare module "packages/se/mickelus/tetra/module/schematic/$RepairDefinition" {
import {$OutcomeDefinition, $OutcomeDefinition$Type} from "packages/se/mickelus/tetra/module/schematic/$OutcomeDefinition"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$OutcomeMaterial, $OutcomeMaterial$Type} from "packages/se/mickelus/tetra/module/schematic/$OutcomeMaterial"

export class $RepairDefinition {
 "material": $OutcomeMaterial
 "requiredTools": $ToolData
 "moduleKey": string
 "moduleVariant": string
 "experienceCost": integer
 "replace": boolean

constructor(arg0: $OutcomeDefinition$Type)

public static "validateOutcome"(arg0: $OutcomeDefinition$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairDefinition$Type = ($RepairDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairDefinition_ = $RepairDefinition$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/bow/$ModularBowItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ModularItem, $ModularItem$Type} from "packages/se/mickelus/tetra/items/modular/$ModularItem"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularBowItem extends $ModularItem {
static readonly "staveKey": string
static readonly "stringKey": string
static readonly "riserKey": string
static readonly "identifier": string
static readonly "velocityFactor": double
static "instance": $ModularBowItem
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "clientInit"(): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "updateConfig"(arg0: integer, arg1: integer): void
public static "getArrowVelocity"(arg0: integer, arg1: double, arg2: float, arg3: boolean): float
public static "fireProjectile"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $ArrowItem$Type, arg3: $ItemStack$Type, arg4: $ImmutableList$Type<($Function$Type<($AbstractArrow$Type), ($AbstractArrow$Type)>)>, arg5: $Player$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: integer, arg11: double, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: boolean, arg17: boolean): void
public "getDrawDuration"(arg0: $ItemStack$Type): integer
public "getOverbowProgress"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): float
public "getProgress"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): float
public "commonInit"(arg0: $PacketHandler$Type): void
public "getModels"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $ImmutableList<($ModuleModel)>
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "canBeDepleted"(): boolean
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularBowItem$Type = ($ModularBowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularBowItem_ = $ModularBowItem$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$SteeledPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SteeledPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $SteeledPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteeledPotionEffect$Type = ($SteeledPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteeledPotionEffect_ = $SteeledPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TetraWaterloggedBlock extends $TetraBlock implements $SimpleWaterloggedBlock {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TetraWaterloggedBlock$Type = ($TetraWaterloggedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TetraWaterloggedBlock_ = $TetraWaterloggedBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/transfer/$EnumTransferState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumTransferState extends $Enum<($EnumTransferState)> implements $StringRepresentable {
static readonly "sending": $EnumTransferState
static readonly "receiving": $EnumTransferState
static readonly "none": $EnumTransferState


public static "values"(): ($EnumTransferState)[]
public static "valueOf"(arg0: string): $EnumTransferState
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumTransferState$Type = (("receiving") | ("sending") | ("none")) | ($EnumTransferState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumTransferState_ = $EnumTransferState$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/shield/$ModularShieldItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemModularHandheld, $ItemModularHandheld$Type} from "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularShieldItem extends $ItemModularHandheld {
static readonly "plateKey": string
static readonly "gripKey": string
static readonly "bossKey": string
static readonly "identifier": string
static readonly "bannerImprovementKey": string
static "instance": $ModularShieldItem
static readonly "nailedTag": $TagKey<($Block)>
static readonly "blockingDurationLimit": integer
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getCooldownBase"(arg0: $ItemStack$Type): double
public "clientInit"(): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "updateConfig"(arg0: integer, arg1: integer): void
public "getAbilityBaseDamage"(arg0: $ItemStack$Type): double
public "commonInit"(arg0: $PacketHandler$Type): void
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularShieldItem$Type = ($ModularShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularShieldItem_ = $ModularShieldItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/dynamic/$ArchetypeSlotDefinition" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ArchetypeSlotDefinition extends $Record {

constructor(key: string, major: boolean, required: boolean, x: integer, y: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "key"(): string
public "y"(): integer
public "major"(): boolean
public "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchetypeSlotDefinition$Type = ($ArchetypeSlotDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchetypeSlotDefinition_ = $ArchetypeSlotDefinition$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/extractor/$CoreExtractorBaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
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
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CoreExtractorBaseBlock extends $TetraWaterloggedBlock implements $EntityBlock {
static readonly "identifier": string
static readonly "facingProp": $DirectionProperty
static "instance": $RegistryObject<($CoreExtractorBaseBlock)>
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreExtractorBaseBlock$Type = ($CoreExtractorBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreExtractorBaseBlock_ = $CoreExtractorBaseBlock$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/$ModularSingleHeadedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemModularHandheld, $ItemModularHandheld$Type} from "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularSingleHeadedItem extends $ItemModularHandheld {
static readonly "headKey": string
static readonly "handleKey": string
static readonly "bindingKey": string
static readonly "identifier": string
static "instance": $ModularSingleHeadedItem
static readonly "nailedTag": $TagKey<($Block)>
static readonly "blockingDurationLimit": integer
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "updateConfig"(arg0: integer, arg1: integer): void
public "getTransformVariant"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "commonInit"(arg0: $PacketHandler$Type): void
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularSingleHeadedItem$Type = ($ModularSingleHeadedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularSingleHeadedItem_ = $ModularSingleHeadedItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$PristineAmethystItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PristineAmethystItem extends $TetraItem {
static readonly "identifier": string
static "instance": $PristineAmethystItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PristineAmethystItem$Type = ($PristineAmethystItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PristineAmethystItem_ = $PristineAmethystItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/cell/$ThermalCellItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ThermalCellItem extends $TetraItem {
static readonly "maxCharge": integer
static readonly "identifier": string
static "instance": $RegistryObject<($ThermalCellItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "showDurabilityBar"(arg0: $ItemStack$Type): boolean
public "clientInit"(): void
public static "getCharge"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "recharge"(arg0: $ItemStack$Type, arg1: integer): integer
public static "drainCharge"(arg0: $ItemStack$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermalCellItem$Type = ($ThermalCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermalCellItem_ = $ThermalCellItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/scroll/$RolledScrollBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ScrollBlock, $ScrollBlock$Type} from "packages/se/mickelus/tetra/blocks/scroll/$ScrollBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RolledScrollBlock extends $ScrollBlock {
static readonly "identifier": string
static "instance": $ScrollBlock
static readonly "sound": $SoundType
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RolledScrollBlock$Type = ($RolledScrollBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RolledScrollBlock_ = $RolledScrollBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/hammer/$HammerBaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $HammerBaseBlock extends $TetraBlock implements $IInteractiveBlock, $EntityBlock {
static readonly "identifier": string
static readonly "facingProp": $DirectionProperty
static readonly "qualityImprovementKey": string
static readonly "interactions": ($BlockInteraction)[]
static "instance": $HammerBaseBlock
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "clientInit"(): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "isFunctional"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "consumeFuel"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "applyActionEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $ToolAction$Type, arg6: integer, arg7: boolean): $ItemStack
public "applyCraftEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: string, arg5: boolean, arg6: $Player$Type, arg7: $ToolAction$Type, arg8: integer, arg9: boolean): $ItemStack
public "getHammerLevel"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public static "removeModule"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type, arg6: boolean): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerBaseBlock$Type = ($HammerBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HammerBaseBlock_ = $HammerBaseBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedPlatformBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"

export class $ForgedPlatformBlock extends $TetraBlock {
static readonly "identifier": string
static "instance": $ForgedPlatformBlock
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

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedPlatformBlock$Type = ($ForgedPlatformBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedPlatformBlock_ = $ForgedPlatformBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$ModuleModel" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Priority, $Priority$Type} from "packages/se/mickelus/tetra/module/$Priority"

export class $ModuleModel {
 "type": string
 "location": $ResourceLocation
 "renderType": $ResourceLocation
 "transform": $Transformation
 "emission": integer
 "tint": integer
 "overlayTint": integer
 "renderLayer": $Priority
 "invertPerspectives": boolean
 "contexts": ($ItemDisplayContext)[]

constructor(arg0: string, arg1: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type)
constructor()

public "getRenderLayer"(): $Priority
public "copy"(): $ModuleModel
get "renderLayer"(): $Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleModel$Type = ($ModuleModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleModel_ = $ModuleModel$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$CombustionChamberItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CombustionChamberItem extends $TetraItem {
static readonly "identifier": string
static "instance": $RegistryObject<($CombustionChamberItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombustionChamberItem$Type = ($CombustionChamberItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombustionChamberItem_ = $CombustionChamberItem$Type;
}}
declare module "packages/se/mickelus/tetra/effect/$ChargedAbilityEffect$TargetRequirement" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChargedAbilityEffect$TargetRequirement extends $Enum<($ChargedAbilityEffect$TargetRequirement)> {
static readonly "entity": $ChargedAbilityEffect$TargetRequirement
static readonly "block": $ChargedAbilityEffect$TargetRequirement
static readonly "either": $ChargedAbilityEffect$TargetRequirement
static readonly "none": $ChargedAbilityEffect$TargetRequirement


public static "values"(): ($ChargedAbilityEffect$TargetRequirement)[]
public static "valueOf"(arg0: string): $ChargedAbilityEffect$TargetRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedAbilityEffect$TargetRequirement$Type = (("either") | ("block") | ("none") | ("entity")) | ($ChargedAbilityEffect$TargetRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedAbilityEffect$TargetRequirement_ = $ChargedAbilityEffect$TargetRequirement$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/multischematic/$PrimaryMultiblockSchematicBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RuinedMultiblockSchematicBlock, $RuinedMultiblockSchematicBlock$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$RuinedMultiblockSchematicBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$MultiblockSchematicBlock, $MultiblockSchematicBlock$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$MultiblockSchematicBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ISchematicProviderBlock, $ISchematicProviderBlock$Type} from "packages/se/mickelus/tetra/blocks/$ISchematicProviderBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PrimaryMultiblockSchematicBlock extends $MultiblockSchematicBlock implements $ISchematicProviderBlock {
static readonly "complete": $BooleanProperty
static readonly "facingProp": $DirectionProperty
readonly "x": integer
readonly "y": integer
readonly "height": integer
readonly "width": integer
readonly "ruinedRef": $RegistryObject<($RuinedMultiblockSchematicBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string, arg2: $RegistryObject$Type<($RuinedMultiblockSchematicBlock$Type)>, arg3: $ResourceLocation$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer)

public "getSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canUnlockSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
public "updateComplete"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimaryMultiblockSchematicBlock$Type = ($PrimaryMultiblockSchematicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimaryMultiblockSchematicBlock_ = $PrimaryMultiblockSchematicBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$GlyphData" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GlyphData {
 "tint": integer
 "textureX": integer
 "textureY": integer
 "textureLocation": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: string, arg1: integer, arg2: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor()

public "equals"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphData$Type = ($GlyphData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphData_ = $GlyphData$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/$ModularDoubleHeadedItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$GuiModuleOffsets, $GuiModuleOffsets$Type} from "packages/se/mickelus/tetra/gui/$GuiModuleOffsets"
import {$ItemModularHandheld, $ItemModularHandheld$Type} from "packages/se/mickelus/tetra/items/modular/$ItemModularHandheld"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularDoubleHeadedItem extends $ItemModularHandheld {
static readonly "headLeftKey": string
static readonly "headRightKey": string
static readonly "handleKey": string
static readonly "bindingKey": string
static readonly "accessoryKey": string
static readonly "leftSuffix": string
static readonly "rightSuffix": string
static readonly "identifier": string
static "instance": $ModularDoubleHeadedItem
static readonly "nailedTag": $TagKey<($Block)>
static readonly "blockingDurationLimit": integer
static readonly "attackDamageModifier": $UUID
static readonly "attackSpeedModifier": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getToolDataRaw"(arg0: $ItemStack$Type): $ToolData
public "getModelCacheKey"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "getMajorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public "getMinorGuiOffsets"(arg0: $ItemStack$Type): $GuiModuleOffsets
public static "getCreativeTabItemStacks"(): $Collection<($ItemStack)>
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getAttributeModifiers"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "updateConfig"(arg0: integer, arg1: integer): void
public "getDisplayNamePrefixes"(arg0: $ItemStack$Type): string
public "getTransformVariant"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): string
public "commonInit"(arg0: $PacketHandler$Type): void
public static "setupHammerStack"(arg0: string, arg1: string): $ItemStack
public static "updateIdentifier"(arg0: $ItemStack$Type): void
public static "updateIdentifier"(arg0: $CompoundTag$Type): void
public static "getImprovementName"(arg0: string, arg1: integer): string
public static "getIntegrityCost"(arg0: $ItemStack$Type): integer
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string, arg4: string): void
public static "putModuleInSlot"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: string): void
public static "getHoningSeed"(arg0: $ItemStack$Type): integer
public static "getIntegrityGain"(arg0: $ItemStack$Type): integer
public static "removeHoneable"(arg0: $ItemStack$Type): void
public static "isHoneable"(arg0: $ItemStack$Type): boolean
public static "removeAllEnchantments"(arg0: $ItemStack$Type): $ItemStack
public static "getImprovementDescription"(arg0: string): string
get "creativeTabItemStacks"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularDoubleHeadedItem$Type = ($ModularDoubleHeadedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularDoubleHeadedItem_ = $ModularDoubleHeadedItem$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$SmallStrengthPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SmallStrengthPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $SmallStrengthPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallStrengthPotionEffect$Type = ($SmallStrengthPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallStrengthPotionEffect_ = $SmallStrengthPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$SeveredPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SeveredPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $SeveredPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeveredPotionEffect$Type = ($SeveredPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeveredPotionEffect_ = $SeveredPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/gui/$GuiModuleOffsets" {
import {$ArchetypeSlotDefinition, $ArchetypeSlotDefinition$Type} from "packages/se/mickelus/tetra/items/modular/impl/dynamic/$ArchetypeSlotDefinition"

export class $GuiModuleOffsets {

constructor(...arg0: (integer)[])
constructor(arg0: ($ArchetypeSlotDefinition$Type)[])

public "size"(): integer
public "getY"(arg0: integer): integer
public "getAlignment"(arg0: integer): boolean
public "getX"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiModuleOffsets$Type = ($GuiModuleOffsets);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiModuleOffsets_ = $GuiModuleOffsets$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$SynergyData" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GlyphData, $GlyphData$Type} from "packages/se/mickelus/tetra/module/data/$GlyphData"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$VariantData, $VariantData$Type} from "packages/se/mickelus/tetra/module/data/$VariantData"
import {$AspectData, $AspectData$Type} from "packages/se/mickelus/tetra/module/data/$AspectData"
import {$Priority, $Priority$Type} from "packages/se/mickelus/tetra/module/$Priority"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"

export class $SynergyData extends $VariantData {
 "improvements": (string)[]
 "moduleVariants": (string)[]
 "modules": (string)[]
 "sameVariant": boolean
 "matchSuffixed": boolean
 "name": string
 "visibilityKey": string
 "obscured": boolean
 "hidden": boolean
 "replace": boolean
 "key": string
 "category": string
 "attributes": $Multimap<($Attribute), ($AttributeModifier)>
 "tools": $ToolData
 "effects": $EffectData
 "aspects": $AspectData
 "namePriority": $Priority
 "prefixPriority": $Priority
 "glyph": $GlyphData
 "models": ($ModuleModel)[]
 "magicCapacity": integer
 "durability": integer
 "durabilityMultiplier": float
 "integrity": integer
 "integrityUsage": integer
 "integrityMultiplier": float
 "tags": $Set<($TagKey<($Item)>)>
 "rarity": $Rarity

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SynergyData$Type = ($SynergyData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SynergyData_ = $SynergyData$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$InsulatedPlateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InsulatedPlateItem extends $TetraItem {
static readonly "identifier": string
static "instance": $InsulatedPlateItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulatedPlateItem$Type = ($InsulatedPlateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulatedPlateItem_ = $InsulatedPlateItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$EarthpiercerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EarthpiercerItem extends $TetraItem {
static readonly "identifier": string
static "instance": $EarthpiercerItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthpiercerItem$Type = ($EarthpiercerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthpiercerItem_ = $EarthpiercerItem$Type;
}}
declare module "packages/se/mickelus/tetra/effect/howling/$HowlingPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $HowlingPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $HowlingPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HowlingPotionEffect$Type = ($HowlingPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HowlingPotionEffect_ = $HowlingPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$ExhaustedPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PlayerEvent$BreakSpeed, $PlayerEvent$BreakSpeed$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$BreakSpeed"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ExhaustedPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $ExhaustedPotionEffect

constructor()

public static "onBreakSpeed"(arg0: $PlayerEvent$BreakSpeed$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExhaustedPotionEffect$Type = ($ExhaustedPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExhaustedPotionEffect_ = $ExhaustedPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/module/schematic/$OutcomeMaterial" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemPredicate, $ItemPredicate$Type} from "packages/net/minecraft/advancements/critereon/$ItemPredicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OutcomeMaterial {
 "count": integer

constructor()

public "getApplicableItemStacks"(): ($ItemStack)[]
public "getDisplayNames"(): ($Component)[]
public "isValid"(): boolean
public "getPredicate"(): $ItemPredicate
public "isTagged"(): boolean
public "offsetCount"(arg0: float, arg1: integer): $OutcomeMaterial
get "applicableItemStacks"(): ($ItemStack)[]
get "displayNames"(): ($Component)[]
get "valid"(): boolean
get "predicate"(): $ItemPredicate
get "tagged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutcomeMaterial$Type = ($OutcomeMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutcomeMaterial_ = $OutcomeMaterial$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/hammer/$HammerHeadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IToolProviderBlock, $IToolProviderBlock$Type} from "packages/se/mickelus/tetra/blocks/$IToolProviderBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HammerHeadBlock extends $TetraWaterloggedBlock implements $IInteractiveBlock, $IToolProviderBlock, $EntityBlock {
static readonly "identifier": string
static readonly "shape": $VoxelShape
static readonly "jamShape": $VoxelShape
static "instance": $HammerHeadBlock
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Collection<($ToolAction)>
public "getToolLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ToolAction$Type): integer
public "onCraftConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: string, arg5: boolean, arg6: $Player$Type, arg7: $ToolAction$Type, arg8: integer, arg9: boolean): $ItemStack
public "canProvideTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "onActionConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $ToolAction$Type, arg6: integer, arg7: boolean): $ItemStack
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getToolLevels"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Map<($ToolAction), (integer)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerHeadBlock$Type = ($HammerHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HammerHeadBlock_ = $HammerHeadBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$GeodeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GeodeItem extends $TetraItem {
static readonly "identifier": string
static "instance": $GeodeItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeodeItem$Type = ($GeodeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeodeItem_ = $GeodeItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedWorkbenchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$AbstractWorkbenchBlock, $AbstractWorkbenchBlock$Type} from "packages/se/mickelus/tetra/blocks/workbench/$AbstractWorkbenchBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ForgedWorkbenchBlock extends $AbstractWorkbenchBlock implements $SimpleWaterloggedBlock {
static readonly "identifier": string
static readonly "axis": $EnumProperty<($Direction$Axis)>
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedWorkbenchBlock$Type = ($ForgedWorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedWorkbenchBlock_ = $ForgedWorkbenchBlock$Type;
}}
declare module "packages/se/mickelus/mutil/network/$PacketHandler" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractPacket, $AbstractPacket$Type} from "packages/se/mickelus/mutil/network/$AbstractPacket"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PacketHandler {

constructor(arg0: string, arg1: string, arg2: string)

public "sendToAllPlayers"(arg0: $AbstractPacket$Type): void
public "registerPacket"<T extends $AbstractPacket>(arg0: $Class$Type<(T)>, arg1: $Supplier$Type<(T)>): boolean
public "onMessage"(arg0: $AbstractPacket$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "sendTo"(arg0: $AbstractPacket$Type, arg1: $ServerPlayer$Type): void
public "sendToServer"(arg0: $AbstractPacket$Type): void
public "sendToAllPlayersNear"(arg0: $AbstractPacket$Type, arg1: $BlockPos$Type, arg2: double, arg3: $ResourceKey$Type<($Level$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketHandler$Type = ($PacketHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketHandler_ = $PacketHandler$Type;
}}
declare module "packages/se/mickelus/tetra/items/modular/impl/crossbow/$ShootableDummyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$Type} from "packages/net/minecraft/world/item/$ProjectileWeaponItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShootableDummyItem extends $ProjectileWeaponItem {
static readonly "identifier": string
static readonly "ammoPredicate": $Predicate<($ItemStack)>
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getDefaultProjectileRange"(): integer
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "getSupportedHeldProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "supportedHeldProjectiles"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShootableDummyItem$Type = ($ShootableDummyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShootableDummyItem_ = $ShootableDummyItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/$IToolProviderBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IToolProviderBlock {

 "getTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Collection<($ToolAction)>
 "getToolLevels"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Map<($ToolAction), (integer)>
 "getToolLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ToolAction$Type): integer
 "onCraftConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: string, arg5: boolean, arg6: $Player$Type, arg7: $ToolAction$Type, arg8: integer, arg9: boolean): $ItemStack
 "canProvideTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
 "onActionConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $ToolAction$Type, arg6: integer, arg7: boolean): $ItemStack
}

export namespace $IToolProviderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToolProviderBlock$Type = ($IToolProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToolProviderBlock_ = $IToolProviderBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/$ItemModuleMajor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemModule, $ItemModule$Type} from "packages/se/mickelus/tetra/module/$ItemModule"
import {$ImprovementData, $ImprovementData$Type} from "packages/se/mickelus/tetra/module/data/$ImprovementData"
import {$TweakData, $TweakData$Type} from "packages/se/mickelus/tetra/module/data/$TweakData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AspectData, $AspectData$Type} from "packages/se/mickelus/tetra/module/data/$AspectData"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$ItemProperties, $ItemProperties$Type} from "packages/se/mickelus/tetra/module/data/$ItemProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModuleMajor extends $ItemModule {
static readonly "settleImprovement": string
static readonly "arrestedImprovement": string
static readonly "repairLevelFactor": float

constructor(arg0: string, arg1: string)

public "getToolData"(arg0: $ItemStack$Type): $ToolData
public "acceptsEnchantment"(arg0: $ItemStack$Type, arg1: $Enchantment$Type, arg2: boolean): boolean
public "isTweakable"(arg0: $ItemStack$Type): boolean
public "getImprovements"(arg0: $ItemStack$Type): ($ImprovementData)[]
public "getAspects"(arg0: $ItemStack$Type): $AspectData
public "getMagicCapacityGain"(arg0: $ItemStack$Type): integer
public "getMagicCapacityCost"(arg0: $ItemStack$Type): integer
public "getEnchantmentsPrimitive"(arg0: $ItemStack$Type): $Map<(string), (integer)>
public "getApplicableEnchantmentCategories"(arg0: $ItemStack$Type, arg1: boolean): ($EnchantmentCategory)[]
public "getEnchantmentMagicCapacityCost"(arg0: $ItemStack$Type): integer
public "removeCollidingImprovements"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "getImprovementMagicCapacityCost"(arg0: $ItemStack$Type): integer
public "getImprovementMagicCapacityGain"(arg0: $ItemStack$Type): integer
public "getProperties"(arg0: $ItemStack$Type): $ItemProperties
public "removeEnchantments"(arg0: $ItemStack$Type): void
public "getEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
public "getAttributeModifiers"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "acceptsImprovement"(arg0: string): boolean
public "acceptsImprovementLevel"(arg0: string, arg1: integer): boolean
public "getImprovementLevel"(arg0: $ItemStack$Type, arg1: string): integer
public "getModels"(arg0: $ItemStack$Type): ($ModuleModel)[]
public "getEnchantmentKeys"(arg0: $ItemStack$Type): $Set<(string)>
public "getImprovement"(arg0: $ItemStack$Type, arg1: string): $ImprovementData
public "removeImprovement"(arg0: $ItemStack$Type, arg1: string): void
public static "removeImprovement"(arg0: $ItemStack$Type, arg1: string, arg2: string): void
public "getTweaks"(arg0: $ItemStack$Type): ($TweakData)[]
public "getSettleProgress"(arg0: $ItemStack$Type): integer
public "getSettleLimit"(arg0: $ItemStack$Type): integer
public "getSettleMaxCount"(arg0: $ItemStack$Type): integer
public "tickProgression"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getEffectData"(arg0: $ItemStack$Type): $EffectData
public "removeModule"(arg0: $ItemStack$Type, arg1: boolean): ($ItemStack)[]
public static "addImprovement"(arg0: $ItemStack$Type, arg1: string, arg2: string, arg3: integer): void
public "addImprovement"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModuleMajor$Type = ($ItemModuleMajor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModuleMajor_ = $ItemModuleMajor$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$PristineQuartzItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PristineQuartzItem extends $TetraItem {
static readonly "identifier": string
static "instance": $PristineQuartzItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PristineQuartzItem$Type = ($PristineQuartzItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PristineQuartzItem_ = $PristineQuartzItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/$TetraBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InitializableBlock, $InitializableBlock$Type} from "packages/se/mickelus/tetra/blocks/$InitializableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TetraBlock extends $Block implements $InitializableBlock {
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

public static "dropBlockInventory"(arg0: $Block$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "clientInit"(): void
public "commonInit"(arg0: $PacketHandler$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TetraBlock$Type = ($TetraBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TetraBlock_ = $TetraBlock$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$BoltItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BoltItem extends $TetraItem {
static readonly "identifier": string
static "instance": $BoltItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoltItem$Type = ($BoltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoltItem_ = $BoltItem$Type;
}}
declare module "packages/se/mickelus/tetracelium/compat/farmersdelight/$DummyKnifeBladeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DummyKnifeBladeItem extends $Item {
static readonly "identifier": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyKnifeBladeItem$Type = ($DummyKnifeBladeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyKnifeBladeItem_ = $DummyKnifeBladeItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/scroll/$ScrollBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ScrollBlock$Arrangement, $ScrollBlock$Arrangement$Type} from "packages/se/mickelus/tetra/blocks/scroll/$ScrollBlock$Arrangement"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ICraftingEffectProviderBlock, $ICraftingEffectProviderBlock$Type} from "packages/se/mickelus/tetra/blocks/$ICraftingEffectProviderBlock"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$ISchematicProviderBlock, $ISchematicProviderBlock$Type} from "packages/se/mickelus/tetra/blocks/$ISchematicProviderBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScrollBlock extends $TetraBlock implements $EntityBlock, $ISchematicProviderBlock, $ICraftingEffectProviderBlock {
static readonly "sound": $SoundType
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

constructor(arg0: $ScrollBlock$Arrangement$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
public "getCraftingEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canUnlockCraftingEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
public "canUnlockSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
public "dropScrolls"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getArrangement"(): $ScrollBlock$Arrangement
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "arrangement"(): $ScrollBlock$Arrangement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollBlock$Type = ($ScrollBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollBlock_ = $ScrollBlock$Type;
}}
declare module "packages/se/mickelus/tetra/client/particle/$SweepingStrikeParticleOption" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $SweepingStrikeParticleOption extends $Record implements $ParticleOptions {
static readonly "CODEC": $Codec<($SweepingStrikeParticleOption)>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($SweepingStrikeParticleOption)>

constructor(duration: integer, reverse: boolean, pitch: float, yaw: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reverse"(): boolean
public "duration"(): integer
public "yaw"(): float
public "pitch"(): float
public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ParticleType<($SweepingStrikeParticleOption)>
get "type"(): $ParticleType<($SweepingStrikeParticleOption)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SweepingStrikeParticleOption$Type = ($SweepingStrikeParticleOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SweepingStrikeParticleOption_ = $SweepingStrikeParticleOption$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$TierData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TierData<T> {
 "levelMap": $Map<(T), (float)>
 "efficiencyMap": $Map<(T), (float)>

constructor()

public "contains"(arg0: T): boolean
public "getEfficiency"(arg0: T): float
public "getLevelMap"(): $Map<(T), (integer)>
public "getLevel"(arg0: T): integer
public "getValues"(): $Set<(T)>
get "levelMap"(): $Map<(T), (integer)>
get "values"(): $Set<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TierData$Type<T> = ($TierData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TierData_<T> = $TierData$Type<(T)>;
}}
declare module "packages/se/mickelus/tetra/blocks/scroll/$OpenScrollBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ScrollBlock, $ScrollBlock$Type} from "packages/se/mickelus/tetra/blocks/scroll/$ScrollBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $OpenScrollBlock extends $ScrollBlock {
static readonly "identifier": string
static "instance": $ScrollBlock
static readonly "sound": $SoundType
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenScrollBlock$Type = ($OpenScrollBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenScrollBlock_ = $OpenScrollBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/schematic/$OutcomeDefinition" {
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$OutcomeMaterial, $OutcomeMaterial$Type} from "packages/se/mickelus/tetra/module/schematic/$OutcomeMaterial"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OutcomeDefinition {
 "material": $OutcomeMaterial
 "hidden": boolean
 "materialSlot": integer
 "experienceCost": integer
 "requiredTools": $ToolData
 "moduleKey": string
 "moduleVariant": string
 "improvements": $Map<(string), (integer)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutcomeDefinition$Type = ($OutcomeDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutcomeDefinition_ = $OutcomeDefinition$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$PristineDiamondItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PristineDiamondItem extends $TetraItem {
static readonly "identifier": string
static "instance": $PristineDiamondItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PristineDiamondItem$Type = ($PristineDiamondItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PristineDiamondItem_ = $PristineDiamondItem$Type;
}}
declare module "packages/se/mickelus/tetra/items/$InitializableItem" {
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"

export interface $InitializableItem {

 "clientInit"(): void
 "commonInit"(arg0: $PacketHandler$Type): void
}

export namespace $InitializableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InitializableItem$Type = ($InitializableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InitializableItem_ = $InitializableItem$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$SmallAbsorbPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SmallAbsorbPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $SmallAbsorbPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallAbsorbPotionEffect$Type = ($SmallAbsorbPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallAbsorbPotionEffect_ = $SmallAbsorbPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/multischematic/$BaseMultiblockSchematicItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultiblockSchematicBlock, $MultiblockSchematicBlock$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$MultiblockSchematicBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseMultiblockSchematicItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $MultiblockSchematicBlock$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMultiblockSchematicItem$Type = ($BaseMultiblockSchematicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMultiblockSchematicItem_ = $BaseMultiblockSchematicItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/chthonic/$DepletedBedrockBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $DepletedBedrockBlock extends $TetraBlock {
static readonly "identifier": string
static "instance": $DepletedBedrockBlock
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepletedBedrockBlock$Type = ($DepletedBedrockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepletedBedrockBlock_ = $DepletedBedrockBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/scroll/$ScrollBlock$Arrangement" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ScrollBlock$Arrangement extends $Enum<($ScrollBlock$Arrangement)> {
static readonly "wall": $ScrollBlock$Arrangement
static readonly "open": $ScrollBlock$Arrangement
static readonly "rolled": $ScrollBlock$Arrangement


public static "values"(): ($ScrollBlock$Arrangement)[]
public static "valueOf"(arg0: string): $ScrollBlock$Arrangement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollBlock$Arrangement$Type = (("rolled") | ("wall") | ("open")) | ($ScrollBlock$Arrangement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollBlock$Arrangement_ = $ScrollBlock$Arrangement$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/extractor/$CoreExtractorPipeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CoreExtractorPipeBlock extends $TetraBlock {
static readonly "facingProp": $DirectionProperty
static readonly "poweredProp": $BooleanProperty
static readonly "identifier": string
static "instance": $CoreExtractorPipeBlock
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

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public static "isPowered"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreExtractorPipeBlock$Type = ($CoreExtractorPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreExtractorPipeBlock_ = $CoreExtractorPipeBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/$Priority" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Priority extends $Enum<($Priority)> {
static readonly "LOWEST": $Priority
static readonly "LOWER": $Priority
static readonly "LOW": $Priority
static readonly "BASE": $Priority
static readonly "HIGH": $Priority
static readonly "HIGHER": $Priority
static readonly "HIGHEST": $Priority


public static "values"(): ($Priority)[]
public static "valueOf"(arg0: string): $Priority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Priority$Type = (("high") | ("low") | ("highest") | ("lower") | ("lowest") | ("base") | ("higher")) | ($Priority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Priority_ = $Priority$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/$ForgedCrateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InitializableBlock, $InitializableBlock$Type} from "packages/se/mickelus/tetra/blocks/$InitializableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketHandler, $PacketHandler$Type} from "packages/se/mickelus/mutil/network/$PacketHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ForgedCrateBlock extends $FallingBlock implements $InitializableBlock, $IInteractiveBlock, $SimpleWaterloggedBlock {
static readonly "propFacing": $DirectionProperty
static readonly "propStacked": $BooleanProperty
static readonly "propIntegrity": $IntegerProperty
static readonly "interactionLootTable": $ResourceLocation
static readonly "identifier": string
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public "clientInit"(): void
public "commonInit"(arg0: $PacketHandler$Type): void
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgedCrateBlock$Type = ($ForgedCrateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgedCrateBlock_ = $ForgedCrateBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$VariantData" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GlyphData, $GlyphData$Type} from "packages/se/mickelus/tetra/module/data/$GlyphData"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AspectData, $AspectData$Type} from "packages/se/mickelus/tetra/module/data/$AspectData"
import {$Priority, $Priority$Type} from "packages/se/mickelus/tetra/module/$Priority"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$ItemProperties, $ItemProperties$Type} from "packages/se/mickelus/tetra/module/data/$ItemProperties"

export class $VariantData extends $ItemProperties {
 "replace": boolean
 "key": string
 "category": string
 "attributes": $Multimap<($Attribute), ($AttributeModifier)>
 "tools": $ToolData
 "effects": $EffectData
 "aspects": $AspectData
 "namePriority": $Priority
 "prefixPriority": $Priority
 "glyph": $GlyphData
 "models": ($ModuleModel)[]
 "magicCapacity": integer
 "durability": integer
 "durabilityMultiplier": float
 "integrity": integer
 "integrityUsage": integer
 "integrityMultiplier": float
 "tags": $Set<($TagKey<($Item)>)>
 "rarity": $Rarity

constructor()

public static "merge"(arg0: $VariantData$Type, arg1: $VariantData$Type): $VariantData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantData$Type = ($VariantData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantData_ = $VariantData$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/multischematic/$RuinedMultiblockSchematicBlock" {
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RuinedMultiblockSchematicBlock extends $HorizontalDirectionalBlock implements $IInteractiveBlock {
static readonly "facingProp": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $ResourceLocation$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuinedMultiblockSchematicBlock$Type = ($RuinedMultiblockSchematicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuinedMultiblockSchematicBlock_ = $RuinedMultiblockSchematicBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/geode/$PristineEmeraldItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PristineEmeraldItem extends $TetraItem {
static readonly "identifier": string
static "instance": $PristineEmeraldItem
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PristineEmeraldItem$Type = ($PristineEmeraldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PristineEmeraldItem_ = $PristineEmeraldItem$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$ImprovementData" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GlyphData, $GlyphData$Type} from "packages/se/mickelus/tetra/module/data/$GlyphData"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$VariantData, $VariantData$Type} from "packages/se/mickelus/tetra/module/data/$VariantData"
import {$AspectData, $AspectData$Type} from "packages/se/mickelus/tetra/module/data/$AspectData"
import {$Priority, $Priority$Type} from "packages/se/mickelus/tetra/module/$Priority"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"

export class $ImprovementData extends $VariantData {
 "level": integer
 "enchantment": boolean
 "group": string
 "replace": boolean
 "key": string
 "category": string
 "attributes": $Multimap<($Attribute), ($AttributeModifier)>
 "tools": $ToolData
 "effects": $EffectData
 "aspects": $AspectData
 "namePriority": $Priority
 "prefixPriority": $Priority
 "glyph": $GlyphData
 "models": ($ModuleModel)[]
 "magicCapacity": integer
 "durability": integer
 "durabilityMultiplier": float
 "integrity": integer
 "integrityUsage": integer
 "integrityMultiplier": float
 "tags": $Set<($TagKey<($Item)>)>
 "rarity": $Rarity

constructor()

public "getLevel"(): integer
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovementData$Type = ($ImprovementData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImprovementData_ = $ImprovementData$Type;
}}
declare module "packages/se/mickelus/tetra/items/loot/$DragonSinewItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DragonSinewItem extends $TetraItem {
static readonly "identifier": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonSinewItem$Type = ($DragonSinewItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonSinewItem_ = $DragonSinewItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/extractor/$SeepingBedrockBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $SeepingBedrockBlock extends $TetraBlock {
static readonly "activeProp": $IntegerProperty
static readonly "identifier": string
static "instance": $SeepingBedrockBlock
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

constructor()

public static "isActive"(arg0: $BlockState$Type): boolean
public static "isActive"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeepingBedrockBlock$Type = ($SeepingBedrockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeepingBedrockBlock_ = $SeepingBedrockBlock$Type;
}}
declare module "packages/se/mickelus/tetra/effect/potion/$BleedingPotionEffect" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BleedingPotionEffect extends $MobEffect {
static readonly "identifier": string
static "instance": $BleedingPotionEffect

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BleedingPotionEffect$Type = ($BleedingPotionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BleedingPotionEffect_ = $BleedingPotionEffect$Type;
}}
declare module "packages/se/mickelus/tetra/items/forged/$MetalScrapItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TetraItem, $TetraItem$Type} from "packages/se/mickelus/tetra/items/$TetraItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MetalScrapItem extends $TetraItem {
static readonly "identifier": string
static "instance": $RegistryObject<($MetalScrapItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalScrapItem$Type = ($MetalScrapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalScrapItem_ = $MetalScrapItem$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/transfer/$EnumTransferConfig" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumTransferConfig extends $Enum<($EnumTransferConfig)> implements $StringRepresentable {
static readonly "send": $EnumTransferConfig
static readonly "redstone": $EnumTransferConfig
static readonly "receive": $EnumTransferConfig


public static "values"(): ($EnumTransferConfig)[]
public static "valueOf"(arg0: string): $EnumTransferConfig
public "getSerializedName"(): string
public static "getNextConfiguration"(arg0: $EnumTransferConfig$Type): $EnumTransferConfig
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumTransferConfig$Type = (("receive") | ("send") | ("redstone")) | ($EnumTransferConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumTransferConfig_ = $EnumTransferConfig$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/scroll/$WallScrollBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$ScrollBlock, $ScrollBlock$Type} from "packages/se/mickelus/tetra/blocks/scroll/$ScrollBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WallScrollBlock extends $ScrollBlock {
static readonly "identifier": string
static "instance": $ScrollBlock
static readonly "sound": $SoundType
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallScrollBlock$Type = ($WallScrollBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallScrollBlock_ = $WallScrollBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/workbench/$AbstractWorkbenchBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TetraBlock, $TetraBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractWorkbenchBlock extends $TetraBlock implements $IInteractiveBlock, $EntityBlock {
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
public "getTools"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Collection<($ToolAction)>
public "getSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
public "getToolLevels"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Map<($ToolAction), (integer)>
public "getToolLevel"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ToolAction$Type): integer
public "onCraftConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: string, arg5: boolean, arg6: $Player$Type, arg7: $ToolAction$Type, arg8: integer, arg9: boolean): $ItemStack
public "getCraftingEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onActionConsumeTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $ToolAction$Type, arg6: integer, arg7: boolean): $ItemStack
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWorkbenchBlock$Type = ($AbstractWorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWorkbenchBlock_ = $AbstractWorkbenchBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/data/$EffectData" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$TierData, $TierData$Type} from "packages/se/mickelus/tetra/module/data/$TierData"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EffectData extends $TierData<($ItemEffect)> {
 "levelMap": $Map<(T), (float)>
 "efficiencyMap": $Map<(T), (float)>

constructor()

public static "multiply"(arg0: $EffectData$Type, arg1: float, arg2: float): $EffectData
public static "merge"(arg0: $EffectData$Type, arg1: $EffectData$Type): $EffectData
public static "merge"(arg0: $Collection$Type<($EffectData$Type)>): $EffectData
public static "overwrite"(arg0: $EffectData$Type, arg1: $EffectData$Type): $EffectData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectData$Type = ($EffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectData_ = $EffectData$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/forged/transfer/$TransferUnitBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TetraWaterloggedBlock, $TetraWaterloggedBlock$Type} from "packages/se/mickelus/tetra/blocks/$TetraWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumTransferConfig, $EnumTransferConfig$Type} from "packages/se/mickelus/tetra/blocks/forged/transfer/$EnumTransferConfig"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EnumTransferState, $EnumTransferState$Type} from "packages/se/mickelus/tetra/blocks/forged/transfer/$EnumTransferState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TransferUnitBlock extends $TetraWaterloggedBlock implements $IInteractiveBlock, $EntityBlock {
static readonly "identifier": string
static readonly "facingProp": $DirectionProperty
static readonly "plateProp": $BooleanProperty
static readonly "cellProp": $IntegerProperty
static readonly "configProp": $EnumProperty<($EnumTransferConfig)>
static readonly "transferProp": $EnumProperty<($EnumTransferState)>
static readonly "interactions": ($BlockInteraction)[]
static "instance": $TransferUnitBlock
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public static "reconfigure"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type): boolean
public static "getFacing"(arg0: $BlockState$Type): $Direction
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
public static "setReceiving"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public static "hasPlate"(arg0: $BlockState$Type): boolean
public static "removePlate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type): boolean
public static "setSending"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public static "attachPlate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): boolean
public static "isSending"(arg0: $BlockState$Type): boolean
public static "updateCellProp"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: integer): void
public static "isReceiving"(arg0: $BlockState$Type): boolean
public static "getEffectPowered"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $EnumTransferConfig
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferUnitBlock$Type = ($TransferUnitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferUnitBlock_ = $TransferUnitBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/multischematic/$MultiblockSchematicBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IInteractiveBlock, $IInteractiveBlock$Type} from "packages/se/mickelus/tetra/blocks/salvage/$IInteractiveBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockInteraction, $BlockInteraction$Type} from "packages/se/mickelus/tetra/blocks/salvage/$BlockInteraction"
import {$RuinedMultiblockSchematicBlock, $RuinedMultiblockSchematicBlock$Type} from "packages/se/mickelus/tetra/blocks/multischematic/$RuinedMultiblockSchematicBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $MultiblockSchematicBlock extends $HorizontalDirectionalBlock implements $IInteractiveBlock {
static readonly "facingProp": $DirectionProperty
readonly "x": integer
readonly "y": integer
readonly "height": integer
readonly "width": integer
readonly "ruinedRef": $RegistryObject<($RuinedMultiblockSchematicBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: string, arg2: $RegistryObject$Type<($RuinedMultiblockSchematicBlock$Type)>, arg3: $ResourceLocation$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer)

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getPotentialInteractions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Collection$Type<($ToolAction$Type)>): ($BlockInteraction)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockSchematicBlock$Type = ($MultiblockSchematicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockSchematicBlock_ = $MultiblockSchematicBlock$Type;
}}
declare module "packages/se/mickelus/tetra/blocks/$ISchematicProviderBlock" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISchematicProviderBlock {

 "getSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): ($ResourceLocation)[]
 "canUnlockSchematics"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
}

export namespace $ISchematicProviderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchematicProviderBlock$Type = ($ISchematicProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchematicProviderBlock_ = $ISchematicProviderBlock$Type;
}}
declare module "packages/se/mickelus/tetra/module/$ItemModule" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$RepairDefinition, $RepairDefinition$Type} from "packages/se/mickelus/tetra/module/schematic/$RepairDefinition"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemEffect, $ItemEffect$Type} from "packages/se/mickelus/tetra/effect/$ItemEffect"
import {$TweakData, $TweakData$Type} from "packages/se/mickelus/tetra/module/data/$TweakData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IToolProvider, $IToolProvider$Type} from "packages/se/mickelus/tetra/properties/$IToolProvider"
import {$ModuleModel, $ModuleModel$Type} from "packages/se/mickelus/tetra/module/data/$ModuleModel"
import {$ItemAspect, $ItemAspect$Type} from "packages/se/mickelus/tetra/aspect/$ItemAspect"
import {$EffectData, $EffectData$Type} from "packages/se/mickelus/tetra/module/data/$EffectData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$VariantData, $VariantData$Type} from "packages/se/mickelus/tetra/module/data/$VariantData"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AspectData, $AspectData$Type} from "packages/se/mickelus/tetra/module/data/$AspectData"
import {$Priority, $Priority$Type} from "packages/se/mickelus/tetra/module/$Priority"
import {$ToolData, $ToolData$Type} from "packages/se/mickelus/tetra/module/data/$ToolData"
import {$ItemProperties, $ItemProperties$Type} from "packages/se/mickelus/tetra/module/data/$ItemProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModule implements $IToolProvider {
static readonly "repairLevelFactor": float

constructor(arg0: string, arg1: string)

public "getToolData"(arg0: $ItemStack$Type): $ToolData
public "getIntegrityCost"(arg0: $ItemStack$Type): integer
public "getIntegrityGain"(arg0: $ItemStack$Type): integer
public "isTweakable"(arg0: $ItemStack$Type): boolean
public "getVariantData"(arg0: string): $VariantData
public "getVariantData"(): ($VariantData)[]
public "getVariantData"(arg0: $ItemStack$Type): $VariantData
public "getRenderLayer"(): $Priority
public "getMagicCapacity"(arg0: $ItemStack$Type): integer
public "hasTweak"(arg0: $ItemStack$Type, arg1: string): boolean
public "setTweakStep"(arg0: $ItemStack$Type, arg1: string, arg2: integer): void
public "getItemPrefix"(arg0: $ItemStack$Type): string
public "getAspects"(arg0: $ItemStack$Type): $AspectData
public "getMagicCapacityGain"(arg0: $ItemStack$Type): integer
public "getDamageMultiplierModifier"(arg0: $ItemStack$Type): double
public "getSpeedMultiplierModifier"(arg0: $ItemStack$Type): double
public "getMagicCapacityCost"(arg0: $ItemStack$Type): integer
public "getDurabilityMultiplier"(arg0: $ItemStack$Type): float
public "getUnlocalizedName"(): string
public static "getName"(arg0: string, arg1: string): string
public "getName"(arg0: $ItemStack$Type): string
public "getKey"(): string
public "getProperties"(arg0: $ItemStack$Type): $ItemProperties
public "getSlot"(): string
public "getDescription"(arg0: $ItemStack$Type): string
public "getTools"(arg0: $ItemStack$Type): $Set<($ToolAction)>
public "getToolLevels"(arg0: $ItemStack$Type): $Map<($ToolAction), (integer)>
public "getToolLevel"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): integer
public "canProvideTools"(arg0: $ItemStack$Type): boolean
public "addModule"(arg0: $ItemStack$Type, arg1: string, arg2: $Player$Type): void
public "getDamageModifier"(arg0: $ItemStack$Type): double
public "getAttributeModifiers"(arg0: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairRequiredToolLevel"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ToolAction$Type): integer
public "getRepairDefinitions"(arg0: $ItemStack$Type): $Collection<($RepairDefinition)>
public "getRepairRequiredToolLevels"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $Map<($ToolAction), (integer)>
public "getRepairRequiredTools"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $Collection<($ToolAction)>
public "getEffectEfficiency"(arg0: $ItemStack$Type, arg1: $ItemEffect$Type): float
public "getItemPrefixPriority"(arg0: $ItemStack$Type): $Priority
public "getRepairExperienceCost"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public "getItemNamePriority"(arg0: $ItemStack$Type): $Priority
public "getRepairDefinition"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $RepairDefinition
public "getDestabilizationChance"(arg0: integer, arg1: integer, arg2: float): float
public "getDestabilizationChance"(arg0: $ItemStack$Type, arg1: float): float
public "getEffects"(arg0: $ItemStack$Type): $Collection<($ItemEffect)>
public "getModels"(arg0: $ItemStack$Type): ($ModuleModel)[]
public "getItemName"(arg0: $ItemStack$Type): string
public "getDurability"(arg0: $ItemStack$Type): integer
public "hasAspect"(arg0: $ItemStack$Type, arg1: $ItemAspect$Type): boolean
public "postRemove"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "getTweaks"(arg0: $ItemStack$Type): ($TweakData)[]
public "getTweakStep"(arg0: $ItemStack$Type, arg1: $TweakData$Type): integer
public "getSpeedModifier"(arg0: $ItemStack$Type): double
public "getToolEfficiency"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): float
public "getEffectData"(arg0: $ItemStack$Type): $EffectData
public "removeModule"(arg0: $ItemStack$Type, arg1: boolean): ($ItemStack)[]
public "removeModule"(arg0: $ItemStack$Type): ($ItemStack)[]
public "getEffectLevel"(arg0: $ItemStack$Type, arg1: $ItemEffect$Type): integer
public "getDefaultData"(): $VariantData
public "onCraftConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
public "onActionConsume"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $ToolAction$Type, arg4: integer, arg5: boolean): $ItemStack
get "variantData"(): ($VariantData)[]
get "renderLayer"(): $Priority
get "unlocalizedName"(): string
get "key"(): string
get "slot"(): string
get "defaultData"(): $VariantData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModule$Type = ($ItemModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModule_ = $ItemModule$Type;
}}
