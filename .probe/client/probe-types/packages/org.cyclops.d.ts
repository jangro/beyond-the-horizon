declare module "packages/org/cyclops/integrateddynamics/core/block/$BlockMechanicalMachine" {
import {$CyclopsBlockEntity, $CyclopsBlockEntity$Type} from "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled"

export class $BlockMechanicalMachine extends $BlockWithEntityGuiCabled {
static readonly "NBT_ENERGY": string
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), ($CyclopsBlockEntity$Type)>)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMechanicalMachine$Type = ($BlockMechanicalMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMechanicalMachine_ = $BlockMechanicalMachine$Type;
}}
declare module "packages/org/cyclops/cyclopscore/init/$ModBase$EnumReferenceKey" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ModBase$EnumReferenceKey<T> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getKey"(): string
public "getType"(): $Class<(T)>
public static "create"<T>(arg0: string, arg1: $Class$Type<(T)>): $ModBase$EnumReferenceKey<(T)>
get "key"(): string
get "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBase$EnumReferenceKey$Type<T> = ($ModBase$EnumReferenceKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBase$EnumReferenceKey_<T> = $ModBase$EnumReferenceKey$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEventBus" {
import {$INetworkEvent, $INetworkEvent$Type} from "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEvent"
import {$ICancelableNetworkEvent, $ICancelableNetworkEvent$Type} from "packages/org/cyclops/integrateddynamics/api/network/event/$ICancelableNetworkEvent"
import {$IEventListenableNetworkElement, $IEventListenableNetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IEventListenableNetworkElement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $INetworkEventBus {

 "register"(arg0: $IEventListenableNetworkElement$Type<(any)>, arg1: $Class$Type<(any)>): void
 "post"(arg0: $INetworkEvent$Type): void
 "unregister"(arg0: $IEventListenableNetworkElement$Type<(any)>): void
 "unregister"(arg0: $IEventListenableNetworkElement$Type<(any)>, arg1: $Class$Type<(any)>): void
 "postCancelable"(arg0: $ICancelableNetworkEvent$Type): boolean
}

export namespace $INetworkEventBus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkEventBus$Type = ($INetworkEventBus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkEventBus_ = $INetworkEventBus$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockFluidLiquidChorus" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockFluidLiquidChorus extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluidLiquidChorus$Type = ($BlockFluidLiquidChorus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluidLiquidChorus_ = $BlockFluidLiquidChorus$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemBlockCable" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemBlockCable$IUseAction, $ItemBlockCable$IUseAction$Type} from "packages/org/cyclops/integrateddynamics/item/$ItemBlockCable$IUseAction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockCable extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "playBreakSound"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public static "addUseAction"(arg0: $ItemBlockCable$IUseAction$Type): void
public static "playPlaceSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockCable$Type = ($ItemBlockCable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockCable_ = $ItemBlockCable$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelProvider" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IVariableModelProvider$BakedModelProvider, $IVariableModelProvider$BakedModelProvider$Type} from "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelProvider$BakedModelProvider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IVariableModelProvider<B extends $IVariableModelProvider$BakedModelProvider> {

 "loadModels"(arg0: $List$Type<($ResourceLocation$Type)>): void
 "bakeOverlayModels"(arg0: $ModelBaker$Type, arg1: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg2: $ModelState$Type, arg3: $ResourceLocation$Type): B
 "getDependencies"(): $Collection<($ResourceLocation)>
}

export namespace $IVariableModelProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableModelProvider$Type<B> = ($IVariableModelProvider<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableModelProvider_<B> = $IVariableModelProvider$Type<(B)>;
}}
declare module "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$INBTProvider, $INBTProvider$Type} from "packages/org/cyclops/cyclopscore/persist/nbt/$INBTProvider"
import {$IBlockEntityDelayedTickable, $IBlockEntityDelayedTickable$Type} from "packages/org/cyclops/cyclopscore/blockentity/$IBlockEntityDelayedTickable"
import {$IDirtyMarkListener, $IDirtyMarkListener$Type} from "packages/org/cyclops/cyclopscore/persist/$IDirtyMarkListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CyclopsBlockEntity extends $BlockEntity implements $INBTProvider, $IDirtyMarkListener, $IBlockEntityDelayedTickable {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addCapabilityInternal"<T>(arg0: $Capability$Type<(T)>, arg1: $LazyOptional$Type<(T)>): void
public "getUpdateBackoffTicks"(): integer
public "read"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getRotation"(): $Direction
public "invalidateCaps"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "shouldSendUpdate"(): boolean
public "unsetSendUpdate"(): void
public "setUpdateBackoff"(arg0: integer): void
public "getUpdateBackoff"(): integer
public "addCapabilitySided"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type, arg2: $LazyOptional$Type<(T)>): void
public "onUpdateReceived"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "canInteractWith"(arg0: $Player$Type): boolean
public "onLoad"(): void
public "writeGeneratedFieldsToNBT"(arg0: $CompoundTag$Type): void
public "readGeneratedFieldsFromNBT"(arg0: $CompoundTag$Type): void
public "onDirty"(): void
public "sendUpdate"(): void
public "writeToItemStack"(arg0: $CompoundTag$Type): $CompoundTag
public "sendImmediateUpdate"(): void
public "reduceUpdateBackoff"(): void
get "updateBackoffTicks"(): integer
get "rotation"(): $Direction
get "updateTag"(): $CompoundTag
set "updateBackoff"(value: integer)
get "updateBackoff"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CyclopsBlockEntity$Type = ($CyclopsBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CyclopsBlockEntity_ = $CyclopsBlockEntity$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGui" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TextureManager, $TextureManager$Type} from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export interface $ISubGui {

 "charTyped"(arg0: character, arg1: integer): boolean
 "init"(arg0: integer, arg1: integer): void
 "renderBg"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $TextureManager$Type, arg4: $Font$Type, arg5: float, arg6: integer, arg7: integer): void
 "tick"(): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "drawGuiContainerForegroundLayer"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $TextureManager$Type, arg4: $Font$Type, arg5: integer, arg6: integer): void
}

export namespace $ISubGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubGui$Type = ($ISubGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubGui_ = $ISubGui$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$IIdentifiableNetworkElement" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IIdentifiableNetworkElement {

 "getId"(): integer
 "getGroup"(): $ResourceLocation
}

export namespace $IIdentifiableNetworkElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIdentifiableNetworkElement$Type = ($IIdentifiableNetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIdentifiableNetworkElement_ = $IIdentifiableNetworkElement$Type;
}}
declare module "packages/org/cyclops/cyclopscore/datastructure/$EnumFacingMap" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $EnumFacingMap<V> extends $EnumMap<($Direction), (V)> {

constructor(arg0: $Map$Type<($Direction$Type), (any)>)
constructor(arg0: $EnumMap$Type<($Direction$Type), (any)>)
constructor()

public static "newMap"<V>(arg0: $Map$Type<($Direction$Type), (any)>): $EnumFacingMap<(V)>
public static "newMap"<V>(arg0: $EnumMap$Type<($Direction$Type), (any)>): $EnumFacingMap<(V)>
public static "newMap"<V>(): $EnumFacingMap<(V)>
public static "forAllValues"<V>(arg0: V, arg1: V, arg2: V, arg3: V, arg4: V, arg5: V): $EnumFacingMap<(V)>
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFacingMap$Type<V> = ($EnumFacingMap<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumFacingMap_<V> = $EnumFacingMap$Type<(V)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectProperties" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectPropertyTypeInstance"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"

export interface $IAspectProperties {

 "clone"(): $IAspectProperties
 "getValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$Type<(T), (V)>): V
 "setValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$Type<(T), (V)>, arg1: V): void
/**
 * 
 * @deprecated
 */
 "getTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "fromNBT"(arg0: $ValueDeseralizationContext$Type, arg1: $CompoundTag$Type): void
 "removeValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$Type<(T), (V)>): void
 "toNBT"(): $CompoundTag
}

export namespace $IAspectProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectProperties$Type = ($IAspectProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectProperties_ = $IAspectProperties$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeMechanicalDryingBasin" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeDryingBasin, $RecipeDryingBasin$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeDryingBasin"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemStackFromIngredient, $ItemStackFromIngredient$Type} from "packages/org/cyclops/cyclopscore/recipe/$ItemStackFromIngredient"

export class $RecipeMechanicalDryingBasin extends $RecipeDryingBasin {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $FluidStack$Type, arg3: $Either$Type<($ItemStack$Type), ($ItemStackFromIngredient$Type)>, arg4: $FluidStack$Type, arg5: integer)

public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMechanicalDryingBasin$Type = ($RecipeMechanicalDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMechanicalDryingBasin_ = $RecipeMechanicalDryingBasin$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$ILogicProgrammerElement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IVariableFacade, $IVariableFacade$Type} from "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade"
import {$ILogicProgrammerElementType, $ILogicProgrammerElementType$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$ILogicProgrammerElementType"
import {$IConfigRenderPattern, $IConfigRenderPattern$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IConfigRenderPattern"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"
import {$ISubGuiBox, $ISubGuiBox$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGuiBox"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IGuiInputElement, $IGuiInputElement$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$IGuiInputElement"

export interface $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<(S), (G), (C)> {

 "getType"(): $ILogicProgrammerElementType<(any)>
 "getItemStackSizeLimit"(): integer
 "canCurrentlyReadFromOtherItem"(): boolean
 "setFocused"(arg0: S, arg1: boolean): void
 "getMatchString"(): string
 "createSlot"(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer): $Slot
 "isFor"(arg0: $IVariableFacade$Type): boolean
 "onInputSlotUpdated"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): void
 "canWriteElementPre"(): boolean
 "slotClick"(arg0: integer, arg1: $Slot$Type, arg2: integer, arg3: $ClickType$Type, arg4: $Player$Type): boolean
 "writeElement"(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack
 "isItemValidForSlot"(arg0: integer, arg1: $ItemStack$Type): boolean
 "isFocused"(arg0: S): boolean
 "matchesOutput"(arg0: $IValueType$Type<(any)>): boolean
 "matchesInput"(arg0: $IValueType$Type<(any)>): boolean
 "getName"(): $Component
 "validate"(): $Component
 "loadTooltip"(arg0: $List$Type<($Component$Type)>): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "getSymbol"(): string
 "getRenderPattern"(): $IConfigRenderPattern
}

export namespace $ILogicProgrammerElement {
function createSlotDefault(arg0: $ILogicProgrammerElement$Type<(any), (any), (any)>, arg1: $Container$Type, arg2: integer, arg3: integer, arg4: integer): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILogicProgrammerElement$Type<S, G, C> = ($ILogicProgrammerElement<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILogicProgrammerElement_<S, G, C> = $ILogicProgrammerElement$Type<(S), (G), (C)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSerializerNbtClear" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeNbtClear, $RecipeNbtClear$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeNbtClear"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerNbtClear implements $RecipeSerializer<($RecipeNbtClear)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeNbtClear
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeNbtClear$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeNbtClear
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeNbtClear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerNbtClear$Type = ($RecipeSerializerNbtClear);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerNbtClear_ = $RecipeSerializerNbtClear$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockDryingBasin" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockWithEntityGui, $BlockWithEntityGui$Type} from "packages/org/cyclops/cyclopscore/block/$BlockWithEntityGui"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockDryingBasin extends $BlockWithEntityGui {
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
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDryingBasin$Type = ($BlockDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDryingBasin_ = $BlockDryingBasin$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/$IModCompat" {
import {$ICompatInitializer, $ICompatInitializer$Type} from "packages/org/cyclops/cyclopscore/modcompat/$ICompatInitializer"
import {$IExternalCompat, $IExternalCompat$Type} from "packages/org/cyclops/cyclopscore/modcompat/$IExternalCompat"

export interface $IModCompat extends $IExternalCompat {

 "getModId"(): string
 "getId"(): string
 "getComment"(): string
 "isEnabledDefault"(): boolean
 "createInitializer"(): $ICompatInitializer
}

export namespace $IModCompat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModCompat$Type = ($IModCompat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModCompat_ = $IModCompat$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/item/$ItemPart$IUseAction" {
import {$ItemPart, $ItemPart$Type} from "packages/org/cyclops/integrateddynamics/core/item/$ItemPart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ItemPart$IUseAction {

 "attempItemUseTarget"(arg0: $ItemPart$Type<(any), (any)>, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Direction$Type): boolean

(arg0: $ItemPart$Type<(any), (any)>, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Direction$Type): boolean
}

export namespace $ItemPart$IUseAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPart$IUseAction$Type = ($ItemPart$IUseAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPart$IUseAction_ = $ItemPart$IUseAction$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSqueezer" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeSqueezer$IngredientChance, $RecipeSqueezer$IngredientChance$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSqueezer$IngredientChance"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RecipeSqueezer implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $NonNullList$Type<($RecipeSqueezer$IngredientChance$Type)>, arg3: $FluidStack$Type)

public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutputFluid"(): $FluidStack
public "getOutputItems"(): $NonNullList<($RecipeSqueezer$IngredientChance)>
public "getInputIngredient"(): $Ingredient
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getType"(): $ResourceLocation
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getMod"(): string
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "outputFluid"(): $FluidStack
get "outputItems"(): $NonNullList<($RecipeSqueezer$IngredientChance)>
get "inputIngredient"(): $Ingredient
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "schema"(): $RecipeSchema
set "group"(value: string)
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSqueezer$Type = ($RecipeSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSqueezer_ = $RecipeSqueezer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/helper/$LoggerHelper" {
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$Level, $Level$Type} from "packages/org/apache/logging/log4j/$Level"

export class $LoggerHelper {

constructor(arg0: string)

public "log"(arg0: $Level$Type, arg1: string): void
public "getLogger"(): $Logger
get "logger"(): $Logger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggerHelper$Type = ($LoggerHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoggerHelper_ = $LoggerHelper$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/$ConfigurableType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ConfigurableTypeAction, $ConfigurableTypeAction$Type} from "packages/org/cyclops/cyclopscore/config/configurabletypeaction/$ConfigurableTypeAction"

export class $ConfigurableType {
static readonly "ITEM": $ConfigurableType
static readonly "BLOCK": $ConfigurableType
static readonly "ENTITY": $ConfigurableType
static readonly "FLUID": $ConfigurableType
static readonly "ENCHANTMENT": $ConfigurableType
static readonly "VILLAGER": $ConfigurableType
static readonly "BIOME": $ConfigurableType
static readonly "EFFECT": $ConfigurableType
static readonly "CAPABILITY": $ConfigurableType
static readonly "GUI": $ConfigurableType
static readonly "RECIPE": $ConfigurableType
static readonly "RECIPE_TYPE": $ConfigurableType
static readonly "RECIPE_CONDITION": $ConfigurableType
static readonly "PARTICLE": $ConfigurableType
static readonly "BLOCK_ENTITY": $ConfigurableType
static readonly "WORLD_FEATURE": $ConfigurableType
static readonly "WORLD_STRUCTURE": $ConfigurableType
static readonly "FOLIAGE_PLACER": $ConfigurableType
static readonly "TRUNK_PLACER": $ConfigurableType
static readonly "ARGUMENT_TYPE": $ConfigurableType
static readonly "BIOME_MODIFIER": $ConfigurableType
static readonly "CREATIVE_MODE_TAB": $ConfigurableType
static readonly "LOOT_MODIFIER": $ConfigurableType
static readonly "DUMMY": $ConfigurableType

constructor(arg0: boolean, arg1: $Class$Type<(any)>, arg2: $ConfigurableTypeAction$Type<(any), (any)>, arg3: string)

public "getConfigClass"(): $Class<(any)>
public "getConfigurableTypeAction"(): $ConfigurableTypeAction<(any), (any)>
public "getCategory"(): string
public "hasUniqueInstance"(): boolean
get "configClass"(): $Class<(any)>
get "configurableTypeAction"(): $ConfigurableTypeAction<(any), (any)>
get "category"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableType$Type = ($ConfigurableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableType_ = $ConfigurableType$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/item/$ItemPart" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemPart$IUseAction, $ItemPart$IUseAction$Type} from "packages/org/cyclops/integrateddynamics/core/item/$ItemPart$IUseAction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPart<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $IPartType$Type<(P), (S)>)

public "getPart"(): $IPartType<(P), (S)>
public "getName"(arg0: $ItemStack$Type): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getDescriptionId"(): string
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "addUseAction"(arg0: $ItemPart$IUseAction$Type): void
get "part"(): $IPartType<(P), (S)>
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPart$Type<P, S> = ($ItemPart<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPart_<P, S> = $ItemPart$Type<(P), (S)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade$IValidator" {
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IVariableFacade$IValidator {

 "addError"(arg0: $MutableComponent$Type): void

(arg0: $MutableComponent$Type): void
}

export namespace $IVariableFacade$IValidator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableFacade$IValidator$Type = ($IVariableFacade$IValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableFacade$IValidator_ = $IVariableFacade$IValidator$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlockStatus$Status" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $IgnoredBlockStatus$Status extends $Enum<($IgnoredBlockStatus$Status)> implements $StringRepresentable {
static readonly "ACTIVE": $IgnoredBlockStatus$Status
static readonly "INACTIVE": $IgnoredBlockStatus$Status
static readonly "ERROR": $IgnoredBlockStatus$Status


public static "values"(): ($IgnoredBlockStatus$Status)[]
public static "valueOf"(arg0: string): $IgnoredBlockStatus$Status
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
export type $IgnoredBlockStatus$Status$Type = (("inactive") | ("active") | ("error")) | ($IgnoredBlockStatus$Status);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlockStatus$Status_ = $IgnoredBlockStatus$Status$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/$IConfigInitializer" {
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ModConfig$Type, $ModConfig$Type$Type} from "packages/net/minecraftforge/fml/config/$ModConfig$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IConfigInitializer {

 "initializeConfig"(arg0: $Map$Type<($ModConfig$Type$Type), ($ForgeConfigSpec$Builder$Type)>): void

(arg0: $Map$Type<($ModConfig$Type$Type), ($ForgeConfigSpec$Builder$Type)>): void
}

export namespace $IConfigInitializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigInitializer$Type = ($IConfigInitializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigInitializer_ = $IConfigInitializer$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/$PartTarget" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$PartPos, $PartPos$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartPos"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PartTarget {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $PartPos$Type, arg1: $PartPos$Type): $PartTarget
public "getTarget"(): $PartPos
public static "fromCenter"(arg0: $DimPos$Type, arg1: $Direction$Type): $PartTarget
public static "fromCenter"(arg0: $PartPos$Type): $PartTarget
public static "fromCenter"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $PartTarget
public "forOffset"(arg0: $Vec3i$Type): $PartTarget
public "forTargetSide"(arg0: $Direction$Type): $PartTarget
public "getCenter"(): $PartPos
public "isDefaultTarget"(): boolean
get "target"(): $PartPos
get "center"(): $PartPos
get "defaultTarget"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartTarget$Type = ($PartTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartTarget_ = $PartTarget$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/path/$IPathElement" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ISidedPathElement, $ISidedPathElement$Type} from "packages/org/cyclops/integrateddynamics/api/path/$ISidedPathElement"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"

export interface $IPathElement extends $Comparable<($IPathElement)> {

 "getReachableElements"(): $Set<($ISidedPathElement)>
 "getPosition"(): $DimPos
 "compareTo"(arg0: $IPathElement$Type): integer
}

export namespace $IPathElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathElement$Type = ($IPathElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPathElement_ = $IPathElement$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/event/$ICancelableNetworkEvent" {
import {$INetworkEvent, $INetworkEvent$Type} from "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEvent"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"

export interface $ICancelableNetworkEvent extends $INetworkEvent {

 "cancel"(): void
 "isCanceled"(): boolean
 "getNetwork"(): $INetwork
}

export namespace $ICancelableNetworkEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICancelableNetworkEvent$Type = ($ICancelableNetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICancelableNetworkEvent_ = $ICancelableNetworkEvent$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/capability/energystorage/$IEnergyStorageCapacity" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"

export interface $IEnergyStorageCapacity extends $IEnergyStorage {

 "setCapacity"(arg0: integer): void
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "getEnergyStored"(): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "getMaxEnergyStored"(): integer
 "canReceive"(): boolean
 "canExtract"(): boolean
}

export namespace $IEnergyStorageCapacity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageCapacity$Type = ($IEnergyStorageCapacity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorageCapacity_ = $IEnergyStorageCapacity$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEvent" {
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"

export interface $INetworkEvent {

 "getNetwork"(): $INetwork

(): $INetwork
}

export namespace $INetworkEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkEvent$Type = ($INetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkEvent_ = $INetworkEvent$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockEnergyBattery" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$TextureStitchEvent$Post, $TextureStitchEvent$Post$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEnergyBatteryBase, $BlockEnergyBatteryBase$Type} from "packages/org/cyclops/integrateddynamics/block/$BlockEnergyBatteryBase"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BlockEnergyBattery extends $BlockEnergyBatteryBase {
 "iconOverlay": $TextureAtlasSprite
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

public "isCreative"(): boolean
public "postTextureStitch"(arg0: $TextureStitchEvent$Post$Type): void
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEnergyBattery$Type = ($BlockEnergyBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEnergyBattery_ = $BlockEnergyBattery$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/capabilities/$CapabilityConstructorRegistry" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICapabilityConstructor, $ICapabilityConstructor$Type} from "packages/org/cyclops/cyclopscore/modcompat/capabilities/$ICapabilityConstructor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CapabilityConstructorRegistry {

constructor(arg0: $ModBase$Type<(any)>)

public "registerItem"<T extends $Item>(arg0: $Supplier$Type<(T)>, arg1: $ICapabilityConstructor$Type<(any), (T), ($ItemStack$Type)>): void
public "registerItem"<T extends $Item>(arg0: $Class$Type<(T)>, arg1: $ICapabilityConstructor$Type<(any), (T), ($ItemStack$Type)>): void
public "registerInheritableItem"<T>(arg0: $Class$Type<(T)>, arg1: $ICapabilityConstructor$Type<(any), (any), (any)>): void
public "registerInheritableTile"<K, V>(arg0: $Class$Type<(K)>, arg1: $ICapabilityConstructor$Type<(any), (V), (V)>): void
public "registerInheritableEntity"<K, V>(arg0: $Class$Type<(K)>, arg1: $ICapabilityConstructor$Type<(any), (V), (V)>): void
public "registerEntity"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $ICapabilityConstructor$Type<(any), (T), (T)>): void
public "registerTile"<T extends $BlockEntity>(arg0: $Class$Type<(T)>, arg1: $ICapabilityConstructor$Type<(any), (T), (T)>): void
public "bake"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityConstructorRegistry$Type = ($CapabilityConstructorRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityConstructorRegistry_ = $CapabilityConstructorRegistry$Type;
}}
declare module "packages/org/cyclops/cyclopscore/network/$PacketHandler" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PacketBase, $PacketBase$Type} from "packages/org/cyclops/cyclopscore/network/$PacketBase"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$TargetPoint, $PacketDistributor$TargetPoint$Type} from "packages/net/minecraftforge/network/$PacketDistributor$TargetPoint"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PacketHandler {

constructor(arg0: $ModBase$Type<(any)>)

public "register"<P extends $PacketBase>(arg0: $Class$Type<(P)>): void
public "init"(): void
public "sendToPlayer"(arg0: $PacketBase$Type, arg1: $ServerPlayer$Type): void
public "sendToAllAround"(arg0: $PacketBase$Type, arg1: $PacketDistributor$TargetPoint$Type): void
public "sendToServer"(arg0: $PacketBase$Type): void
public "handlePacketServer"(arg0: $NetworkEvent$Context$Type, arg1: $PacketBase$Type): void
public "sendToDimension"(arg0: $PacketBase$Type, arg1: $ResourceKey$Type<($Level$Type)>): void
public "handlePacketClient"(arg0: $NetworkEvent$Context$Type, arg1: $PacketBase$Type): void
public "sendToAll"(arg0: $PacketBase$Type): void
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
declare module "packages/org/cyclops/integrateddynamics/block/$BlockProxy" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockProxy extends $BlockWithEntityGuiCabled {
static readonly "NBT_ID": string
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProxy$Type = ($BlockProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockProxy_ = $BlockProxy$Type;
}}
declare module "packages/org/cyclops/cyclopscore/persist/nbt/$INBTProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $INBTProvider {

 "writeGeneratedFieldsToNBT"(arg0: $CompoundTag$Type): void
 "readGeneratedFieldsFromNBT"(arg0: $CompoundTag$Type): void
}

export namespace $INBTProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTProvider$Type = ($INBTProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTProvider_ = $INBTProvider$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/evaluate/expression/$ILazyExpressionValueCache" {
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"

export interface $ILazyExpressionValueCache {

 "getValue"(arg0: integer): $IValue
 "setValue"(arg0: integer, arg1: $IValue$Type): void
 "hasValue"(arg0: integer): boolean
 "removeValue"(arg0: integer): void
}

export namespace $ILazyExpressionValueCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILazyExpressionValueCache$Type = ($ILazyExpressionValueCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILazyExpressionValueCache_ = $ILazyExpressionValueCache$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockMechanicalDryingBasin" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockMechanicalMachine, $BlockMechanicalMachine$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockMechanicalMachine"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockMechanicalDryingBasin extends $BlockMechanicalMachine {
static readonly "NBT_TANK_IN": string
static readonly "NBT_TANK_OUT": string
static readonly "LIT": $BooleanProperty
static readonly "NBT_ENERGY": string
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMechanicalDryingBasin$Type = ($BlockMechanicalDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMechanicalDryingBasin_ = $BlockMechanicalDryingBasin$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/advancement/criterion/$ValuePredicate" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"

export class $ValuePredicate<V extends $IValue> {
static readonly "ANY": $ValuePredicate<(any)>

constructor(arg0: $IValueType$Type<(any)>, arg1: $IValue$Type)

public "test"(arg0: $IValue$Type): boolean
public static "deserialize"(arg0: $ValueDeseralizationContext$Type, arg1: $JsonObject$Type, arg2: $IValueType$Type<(any)>): $ValuePredicate<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValuePredicate$Type<V> = ($ValuePredicate<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValuePredicate_<V> = $ValuePredicate$Type<(V)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockWithEntityGui, $BlockWithEntityGui$Type} from "packages/org/cyclops/cyclopscore/block/$BlockWithEntityGui"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$Type} from "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"

export class $BlockWithEntityGuiCabled extends $BlockWithEntityGui {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), ($CyclopsBlockEntity$Type)>)

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntityGuiCabled$Type = ($BlockWithEntityGuiCabled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntityGuiCabled_ = $BlockWithEntityGuiCabled$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapedCustomOutput" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeCraftingShapedCustomOutput, $RecipeCraftingShapedCustomOutput$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$RecipeCraftingShapedCustomOutput"
import {$RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer, $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerCraftingShapedCustomOutput implements $RecipeSerializer<($RecipeCraftingShapedCustomOutput)> {

constructor(arg0: $Supplier$Type<($ItemStack$Type)>, arg1: $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer$Type)
constructor(arg0: $Supplier$Type<($ItemStack$Type)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeCraftingShapedCustomOutput
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeCraftingShapedCustomOutput$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeCraftingShapedCustomOutput
public "getOutputTransformer"(): $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeCraftingShapedCustomOutput
get "outputTransformer"(): $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerCraftingShapedCustomOutput$Type = ($RecipeSerializerCraftingShapedCustomOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerCraftingShapedCustomOutput_ = $RecipeSerializerCraftingShapedCustomOutput$Type;
}}
declare module "packages/org/cyclops/integratedterminals/item/$ItemTerminalStoragePortable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemLocation, $ItemLocation$Type} from "packages/org/cyclops/cyclopscore/inventory/$ItemLocation"
import {$ITerminalStorageTabCommon$IVariableInventory, $ITerminalStorageTabCommon$IVariableInventory$Type} from "packages/org/cyclops/integratedterminals/api/terminalstorage/$ITerminalStorageTabCommon$IVariableInventory"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TerminalStorageState, $TerminalStorageState$Type} from "packages/org/cyclops/integratedterminals/inventory/container/$TerminalStorageState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemGui, $ItemGui$Type} from "packages/org/cyclops/cyclopscore/item/$ItemGui"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTerminalStoragePortable extends $ItemGui {
static "NBT_KEY_GROUP": string
static "NBT_KEY_NAMED_INVENTORIES": string
static "NBT_KEY_STATES": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "openGuiForItemIndex"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemLocation$Type): void
public static "getVariableInventory"(arg0: $ItemStack$Type): $ITerminalStorageTabCommon$IVariableInventory
public static "getTerminalStorageState"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $ItemLocation$Type): $TerminalStorageState
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemLocation$Type): $MenuProvider
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$Type, arg1: $Level$Type, arg2: $ServerPlayer$Type, arg3: $ItemLocation$Type): void
public "getContainerClass"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Class<(any)>
public static "setGroupId"(arg0: $ItemStack$Type, arg1: integer): void
public static "getGroupId"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTerminalStoragePortable$Type = ($ItemTerminalStoragePortable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTerminalStoragePortable_ = $ItemTerminalStoragePortable$Type;
}}
declare module "packages/org/cyclops/cyclopscore/item/$ItemBlockNBT" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockNBT extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockNBT$Type = ($ItemBlockNBT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockNBT_ = $ItemBlockNBT$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$VoxelShapeComponents$IComponent" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockRayTraceResultComponent, $BlockRayTraceResultComponent$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockRayTraceResultComponent"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $VoxelShapeComponents$IComponent {

 "getBreakingBaseModel"(arg0: $Level$Type, arg1: $BlockPos$Type): $BakedModel
 "isRaytraceLastForFace"(): boolean
 "getRaytraceDirection"(): $Direction
 "destroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: boolean): boolean
 "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
 "getCloneItemStack"(arg0: $Level$Type, arg1: $BlockPos$Type): $ItemStack
 "onBlockActivated"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockRayTraceResultComponent$Type): $InteractionResult
 "getStateId"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): string
}

export namespace $VoxelShapeComponents$IComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeComponents$IComponent$Type = ($VoxelShapeComponents$IComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeComponents$IComponent_ = $VoxelShapeComponents$IComponent$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockVariablestore" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockVariablestore extends $BlockWithEntityGuiCabled {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockVariablestore$Type = ($BlockVariablestore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockVariablestore_ = $BlockVariablestore$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockMechanicalSqueezer" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockMechanicalMachine, $BlockMechanicalMachine$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockMechanicalMachine"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockMechanicalSqueezer extends $BlockMechanicalMachine {
static readonly "NBT_TANK": string
static readonly "LIT": $BooleanProperty
static readonly "NBT_ENERGY": string
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMechanicalSqueezer$Type = ($BlockMechanicalSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMechanicalSqueezer_ = $BlockMechanicalSqueezer$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/$IPartContainer" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IPartContainer extends $ICapabilitySerializable<($CompoundTag)> {

 "getPart"(arg0: $Direction$Type): $IPartType<(any), (any)>
 "update"(): void
 "getPosition"(): $DimPos
 "getParts"(): $Map<($Direction), ($IPartType<(any), (any)>)>
 "canAddPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$Type, arg1: $IPartType$Type<(P), (S)>): boolean
 "removePart"(arg0: $Direction$Type, arg1: $Player$Type, arg2: boolean, arg3: boolean): $IPartType<(any), (any)>
 "hasPart"(arg0: $Direction$Type): boolean
 "getPartState"(arg0: $Direction$Type): $IPartState<(any)>
 "hasParts"(): boolean
 "setPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$Type, arg1: $IPartType$Type<(P), (S)>, arg2: $IPartState$Type<(P)>): void
 "setPartState"(arg0: $Direction$Type, arg1: $IPartState$Type<(any)>): void
 "getWatchingSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $Direction
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IPartContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartContainer$Type = ($IPartContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartContainer_ = $IPartContainer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/init/$ModBase" {
import {$ICommonProxy, $ICommonProxy$Type} from "packages/org/cyclops/cyclopscore/proxy/$ICommonProxy"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility"
import {$CapabilityConstructorRegistry, $CapabilityConstructorRegistry$Type} from "packages/org/cyclops/cyclopscore/modcompat/capabilities/$CapabilityConstructorRegistry"
import {$IKeyRegistry, $IKeyRegistry$Type} from "packages/org/cyclops/cyclopscore/client/key/$IKeyRegistry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WorldStorage, $WorldStorage$Type} from "packages/org/cyclops/cyclopscore/persist/world/$WorldStorage"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMCHandler, $IMCHandler$Type} from "packages/org/cyclops/cyclopscore/modcompat/$IMCHandler"
import {$Level, $Level$Type} from "packages/org/apache/logging/log4j/$Level"
import {$ModCompatLoader, $ModCompatLoader$Type} from "packages/org/cyclops/cyclopscore/modcompat/$ModCompatLoader"
import {$ServerStartingEvent, $ServerStartingEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStartingEvent"
import {$PacketHandler, $PacketHandler$Type} from "packages/org/cyclops/cyclopscore/network/$PacketHandler"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$LoggerHelper, $LoggerHelper$Type} from "packages/org/cyclops/cyclopscore/helper/$LoggerHelper"
import {$ServerStoppingEvent, $ServerStoppingEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStoppingEvent"
import {$ModBase$EnumReferenceKey, $ModBase$EnumReferenceKey$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase$EnumReferenceKey"
import {$ConfigHandler, $ConfigHandler$Type} from "packages/org/cyclops/cyclopscore/config/$ConfigHandler"
import {$RegistryManager, $RegistryManager$Type} from "packages/org/cyclops/cyclopscore/init/$RegistryManager"
import {$ServerAboutToStartEvent, $ServerAboutToStartEvent$Type} from "packages/net/minecraftforge/event/server/$ServerAboutToStartEvent"
import {$ServerStartedEvent, $ServerStartedEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStartedEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModBase<T extends $ModBase<(any)>> {
static readonly "REFKEY_TEXTURE_PATH_GUI": $ModBase$EnumReferenceKey<(string)>
static readonly "REFKEY_TEXTURE_PATH_MODELS": $ModBase$EnumReferenceKey<(string)>
static readonly "REFKEY_TEXTURE_PATH_SKINS": $ModBase$EnumReferenceKey<(string)>
static readonly "REFKEY_RETROGEN": $ModBase$EnumReferenceKey<(boolean)>
static readonly "REFKEY_CRASH_ON_INVALID_RECIPE": $ModBase$EnumReferenceKey<(boolean)>
static readonly "REFKEY_CRASH_ON_MODCOMPAT_CRASH": $ModBase$EnumReferenceKey<(boolean)>
static readonly "REFKEY_INFOBOOK_REWARDS": $ModBase$EnumReferenceKey<(boolean)>

constructor(arg0: string, arg1: $Consumer$Type<(T)>)

public static "get"(arg0: string): $ModBase<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "log"(arg0: string): void
public "log"(arg0: $Level$Type, arg1: string): void
public "getModName"(): string
public "getContainer"(): $ModContainer
public "onServerAboutToStart"(arg0: $ServerAboutToStartEvent$Type): void
public "registerWorldStorage"(arg0: $WorldStorage$Type): void
public "putGenericReference"<T>(arg0: $ModBase$EnumReferenceKey$Type<(T)>, arg1: T): void
public "registerDefaultCreativeTabEntry"(arg0: $ItemStack$Type, arg1: $CreativeModeTab$TabVisibility$Type): void
public "getGenericReference"(): $Map<($ModBase$EnumReferenceKey<(any)>), (any)>
public "getCapabilityConstructorRegistry"(): $CapabilityConstructorRegistry
public "getDefaultCreativeTab"(): $CreativeModeTab
public "getDefaultCreativeTabEntries"(): $List<($Pair<($ItemStack), ($CreativeModeTab$TabVisibility)>)>
public "setDefaultCreativeTab"(arg0: $CreativeModeTab$Type): void
public "getProxy"(): $ICommonProxy
public "setContainer"(arg0: $ModContainer$Type): void
public "onServerStopping"(arg0: $ServerStoppingEvent$Type): void
public "getModId"(): string
public "getModCompatLoader"(): $ModCompatLoader
public "getConfigHandler"(): $ConfigHandler
public "getReferenceValue"<T>(arg0: $ModBase$EnumReferenceKey$Type<(T)>): T
public "onServerStarting"(arg0: $ServerStartingEvent$Type): void
public "getPacketHandler"(): $PacketHandler
public "getKeyRegistry"(): $IKeyRegistry
public "getWorldStorages"(): $List<($WorldStorage)>
public "getLoggerHelper"(): $LoggerHelper
public "getRegistryManager"(): $RegistryManager
public "setProxy"(arg0: $ICommonProxy$Type): void
public "getImcHandler"(): $IMCHandler
public "onServerStarted"(arg0: $ServerStartedEvent$Type): void
get "modName"(): string
get "container"(): $ModContainer
get "genericReference"(): $Map<($ModBase$EnumReferenceKey<(any)>), (any)>
get "capabilityConstructorRegistry"(): $CapabilityConstructorRegistry
get "defaultCreativeTab"(): $CreativeModeTab
get "defaultCreativeTabEntries"(): $List<($Pair<($ItemStack), ($CreativeModeTab$TabVisibility)>)>
set "defaultCreativeTab"(value: $CreativeModeTab$Type)
get "proxy"(): $ICommonProxy
set "container"(value: $ModContainer$Type)
get "modId"(): string
get "modCompatLoader"(): $ModCompatLoader
get "configHandler"(): $ConfigHandler
get "packetHandler"(): $PacketHandler
get "keyRegistry"(): $IKeyRegistry
get "worldStorages"(): $List<($WorldStorage)>
get "loggerHelper"(): $LoggerHelper
get "registryManager"(): $RegistryManager
set "proxy"(value: $ICommonProxy$Type)
get "imcHandler"(): $IMCHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBase$Type<T> = ($ModBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBase_<T> = $ModBase$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockFluidMenrilResin" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"

export class $BlockFluidMenrilResin extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluidMenrilResin$Type = ($BlockFluidMenrilResin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluidMenrilResin_ = $BlockFluidMenrilResin$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockEnergyBatteryBase" {
import {$BlockContainerCabled, $BlockContainerCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockContainerCabled"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityEnergyBattery, $BlockEntityEnergyBattery$Type} from "packages/org/cyclops/integrateddynamics/blockentity/$BlockEntityEnergyBattery"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IEnergyContainerBlock, $IEnergyContainerBlock$Type} from "packages/org/cyclops/integrateddynamics/block/$IEnergyContainerBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockEnergyBatteryBase extends $BlockContainerCabled implements $IEnergyContainerBlock {
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

public static "fill"(arg0: $IEnergyStorage$Type): void
public "isCreative"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getEneryContainerCapacityNBTName"(): string
public "getEneryContainerNBTName"(): string
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "itemStackToTile"(arg0: $ItemStack$Type, arg1: $BlockEntityEnergyBattery$Type): void
get "creative"(): boolean
get "eneryContainerCapacityNBTName"(): string
get "eneryContainerNBTName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEnergyBatteryBase$Type = ($BlockEnergyBatteryBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEnergyBatteryBase_ = $BlockEnergyBatteryBase$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/$IPartState" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IAspectProperties, $IAspectProperties$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectProperties"
import {$PartTarget, $PartTarget$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartTarget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IPartNetwork, $IPartNetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPartNetwork"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IAspect, $IAspect$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IPartState<P extends $IPartType<(any), (any)>> {

 "saveInventoryNamed"(arg0: string, arg1: $Container$Type): void
 "loadInventoryNamed"(arg0: string, arg1: $Container$Type): void
 "isUpdateAndReset"(): boolean
 "isDirtyAndReset"(): boolean
 "setInventoryNamed"(arg0: string, arg1: $NonNullList$Type<($ItemStack$Type)>): void
 "setTargetOffset"(arg0: $Vec3i$Type): void
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $INetwork$Type, arg2: $IPartNetwork$Type, arg3: $PartTarget$Type): $LazyOptional<(T)>
 "isEnabled"(): boolean
 "gatherCapabilities"(arg0: P): void
 "getTargetSideOverride"(): $Direction
 "getInventoriesNamed"(): $Map<(string), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "markOffsetVariablesChanged"(): void
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$Type, arg2: $IPartNetwork$Type, arg3: $PartTarget$Type): void
 "getUpdateInterval"(): integer
 "initializeOffsets"(arg0: $PartTarget$Type): void
 "getInventoryNamed"(arg0: string): $NonNullList<($ItemStack)>
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "setMaxOffset"(arg0: integer): void
 "getMaxOffset"(): integer
 "setUpdateInterval"(arg0: integer): void
 "setTargetSideOverride"(arg0: $Direction$Type): void
 "generateId"(): void
 "markDirty"(): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "getAspectProperties"(arg0: $IAspect$Type<(any), (any)>): $IAspectProperties
 "removeVolatileCapability"(arg0: $Capability$Type<(any)>): void
 "forceBlockRenderUpdate"(): void
 "addVolatileCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $LazyOptional$Type<(T)>): void
 "setAspectProperties"(arg0: $IAspect$Type<(any), (any)>, arg1: $IAspectProperties$Type): void
 "setEnabled"(arg0: boolean): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$Type, arg1: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IPartState {
const GLOBALCOUNTER_KEY: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartState$Type<P> = ($IPartState<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartState_<P> = $IPartState$Type<(P)>;
}}
declare module "packages/org/cyclops/cyclopscore/client/key/$IKeyHandler" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"

export interface $IKeyHandler {

 "onKeyPressed"(arg0: $KeyMapping$Type): void

(arg0: $KeyMapping$Type): void
}

export namespace $IKeyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyHandler$Type = ($IKeyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyHandler_ = $IKeyHandler$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/$IMCHandler$IIMCAction" {
import {$InterModComms$IMCMessage, $InterModComms$IMCMessage$Type} from "packages/net/minecraftforge/fml/$InterModComms$IMCMessage"

export interface $IMCHandler$IIMCAction {

 "handle"(arg0: $InterModComms$IMCMessage$Type): boolean

(arg0: $InterModComms$IMCMessage$Type): boolean
}

export namespace $IMCHandler$IIMCAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMCHandler$IIMCAction$Type = ($IMCHandler$IIMCAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMCHandler$IIMCAction_ = $IMCHandler$IIMCAction$Type;
}}
declare module "packages/org/cyclops/cyclopscore/inventory/container/$ContainerTypeData" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"

export class $ContainerTypeData<T extends $AbstractContainerMenu> extends $MenuType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>

constructor(arg0: $IContainerFactory$Type<(T)>, arg1: $FeatureFlagSet$Type)

public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTypeData$Type<T> = ($ContainerTypeData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTypeData_<T> = $ContainerTypeData$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$IFullNetworkListener" {
import {$IPathElement, $IPathElement$Type} from "packages/org/cyclops/integrateddynamics/api/path/$IPathElement"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IFullNetworkListener {

 "update"(): void
 "canUpdate"(arg0: $INetworkElement$Type): boolean
 "postUpdate"(arg0: $INetworkElement$Type): void
 "beforeServerStop"(): void
 "afterServerLoad"(): void
 "removeNetworkElementPost"(arg0: $INetworkElement$Type): void
 "removeNetworkElementPre"(arg0: $INetworkElement$Type): boolean
 "kill"(): void
 "invalidateElement"(arg0: $INetworkElement$Type): void
 "revalidateElement"(arg0: $INetworkElement$Type): void
 "addNetworkElement"(arg0: $INetworkElement$Type, arg1: boolean): boolean
 "removePathElement"(arg0: $IPathElement$Type, arg1: $Direction$Type): boolean
 "updateGuaranteed"(): void
 "onSkipUpdate"(arg0: $INetworkElement$Type): void
}

export namespace $IFullNetworkListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFullNetworkListener$Type = ($IFullNetworkListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFullNetworkListener_ = $IFullNetworkListener$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export interface $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer {

 "transform"(arg0: $CraftingContainer$Type, arg1: $ItemStack$Type): $ItemStack

(arg0: $CraftingContainer$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer$Type = ($RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer_ = $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/$ModCompatLoader" {
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$IModCompat, $IModCompat$Type} from "packages/org/cyclops/cyclopscore/modcompat/$IModCompat"
import {$IExternalCompat, $IExternalCompat$Type} from "packages/org/cyclops/cyclopscore/modcompat/$IExternalCompat"

export class $ModCompatLoader {

constructor(arg0: $ModBase$Type<(any)>)

public "addModCompat"(arg0: $IModCompat$Type): void
public "shouldLoadExternalCompat"(arg0: $IExternalCompat$Type): boolean
public "shouldLoadModCompat"(arg0: $IModCompat$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCompatLoader$Type = ($ModCompatLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCompatLoader_ = $ModCompatLoader$Type;
}}
declare module "packages/org/cyclops/cyclopscore/command/argument/$ArgumentInfoMod" {
import {$ArgumentInfoMod$Template, $ArgumentInfoMod$Template$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentInfoMod$Template"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeConfigProperty, $ArgumentTypeConfigProperty$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeConfigProperty"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"

export class $ArgumentInfoMod<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo<($ArgumentTypeConfigProperty), ($ArgumentInfoMod$Template<>)> {

constructor()

public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $ArgumentInfoMod$Template
public "unpack"(arg0: $ArgumentTypeConfigProperty$Type): $ArgumentInfoMod$Template<>
public "serializeToNetwork"(arg0: $ArgumentInfoMod$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "serializeToJson"(arg0: $ArgumentInfoMod$Template$Type, arg1: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentInfoMod$Type<T> = ($ArgumentInfoMod<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentInfoMod_<T> = $ArgumentInfoMod$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemEnhancement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEnhancement$Type, $ItemEnhancement$Type$Type} from "packages/org/cyclops/integrateddynamics/item/$ItemEnhancement$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEnhancement extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ItemEnhancement$Type$Type, arg1: $Item$Properties$Type)

public "setEnhancementValue"(arg0: $ItemStack$Type, arg1: integer): void
public "getEnhancementValue"(arg0: $ItemStack$Type): integer
public "applyEnhancement"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $IPartType$Type<(P), (S)>, arg1: $IPartState$Type<(P)>, arg2: $ItemStack$Type, arg3: $Player$Type, arg4: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnhancement$Type = ($ItemEnhancement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnhancement_ = $ItemEnhancement$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/client/model/$IRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRenderState {

}

export namespace $IRenderState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderState$Type = ($IRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderState_ = $IRenderState$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemEnhancement$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemEnhancement$Type extends $Enum<($ItemEnhancement$Type)> {
static readonly "OFFSET": $ItemEnhancement$Type


public static "values"(): ($ItemEnhancement$Type)[]
public static "valueOf"(arg0: string): $ItemEnhancement$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnhancement$Type$Type = (("offset")) | ($ItemEnhancement$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnhancement$Type_ = $ItemEnhancement$Type$Type;
}}
declare module "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider" {
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockGui$IBlockContainerProvider {

 "get"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
}

export namespace $IBlockGui$IBlockContainerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockGui$IBlockContainerProvider$Type = ($IBlockGui$IBlockContainerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockGui$IBlockContainerProvider_ = $IBlockGui$IBlockContainerProvider$Type;
}}
declare module "packages/org/cyclops/cyclopscore/network/$PacketBase" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $PacketBase {

constructor()

public "decode"(arg0: $FriendlyByteBuf$Type): void
public "encode"(arg0: $FriendlyByteBuf$Type): void
public "actionServer"(arg0: $Level$Type, arg1: $ServerPlayer$Type): void
public "isAsync"(): boolean
public "actionClient"(arg0: $Level$Type, arg1: $Player$Type): void
get "async"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketBase$Type = ($PacketBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketBase_ = $PacketBase$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/$PartPos" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"

export class $PartPos implements $Comparable<($PartPos)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $PartPos$Type): integer
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $PartPos
public static "of"(arg0: $DimPos$Type, arg1: $Direction$Type): $PartPos
public "getPos"(): $DimPos
public "getSide"(): $Direction
public static "getPartData"(arg0: $PartPos$Type): $Pair<($IPartType), ($IPartState)>
get "pos"(): $DimPos
get "side"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartPos$Type = ($PartPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartPos_ = $PartPos$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$RecipeCraftingShapedCustomOutput" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializerCraftingShapedCustomOutput, $RecipeSerializerCraftingShapedCustomOutput$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapedCustomOutput"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $RecipeCraftingShapedCustomOutput extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $RecipeSerializerCraftingShapedCustomOutput$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: $CraftingBookCategory$Type, arg4: integer, arg5: integer, arg6: $NonNullList$Type<($Ingredient$Type)>, arg7: $ItemStack$Type)

public "getResultItem"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapedCustomOutput$Type = ($RecipeCraftingShapedCustomOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapedCustomOutput_ = $RecipeCraftingShapedCustomOutput$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/$ConfigurablePropertyData" {
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ModConfig$Type, $ModConfig$Type$Type} from "packages/net/minecraftforge/fml/config/$ModConfig$Type"

export class $ConfigurablePropertyData<T> {

constructor(arg0: $ModBase$Type<(any)>, arg1: string, arg2: string, arg3: T, arg4: string, arg5: boolean, arg6: $ModConfig$Type$Type, arg7: $Field$Type, arg8: boolean, arg9: boolean, arg10: boolean, arg11: integer, arg12: integer)

public "getName"(): string
public "getConfigLocation"(): $ModConfig$Type
public "getCategory"(): string
public "getConfigProperty"(): $ForgeConfigSpec$ConfigValue<(T)>
public "getLanguageKey"(): string
public "isCommandable"(): boolean
public "saveToField"(): void
public "onConfigInit"(arg0: $ForgeConfigSpec$Builder$Type): void
get "name"(): string
get "configLocation"(): $ModConfig$Type
get "category"(): string
get "configProperty"(): $ForgeConfigSpec$ConfigValue<(T)>
get "languageKey"(): string
get "commandable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurablePropertyData$Type<T> = ($ConfigurablePropertyData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurablePropertyData_<T> = $ConfigurablePropertyData$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockInvisibleLight" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockInvisibleLight extends $Block {
static readonly "LIGHT": $IntegerProperty
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInvisibleLight$Type = ($BlockInvisibleLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInvisibleLight_ = $BlockInvisibleLight$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSerializerMechanicalSqueezer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeMechanicalSqueezer, $RecipeMechanicalSqueezer$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeMechanicalSqueezer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerMechanicalSqueezer implements $RecipeSerializer<($RecipeMechanicalSqueezer)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeMechanicalSqueezer
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeMechanicalSqueezer$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeMechanicalSqueezer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeMechanicalSqueezer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerMechanicalSqueezer$Type = ($RecipeSerializerMechanicalSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerMechanicalSqueezer_ = $RecipeSerializerMechanicalSqueezer$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockMaterializer" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMaterializer extends $BlockWithEntityGuiCabled {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMaterializer$Type = ($BlockMaterializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMaterializer_ = $BlockMaterializer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/blockentity/$IBlockEntityDelayedTickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockEntityDelayedTickable {

 "sendImmediateUpdate"(): void
 "reduceUpdateBackoff"(): void
 "getUpdateBackoffTicks"(): integer
 "shouldSendUpdate"(): boolean
 "unsetSendUpdate"(): void
 "setUpdateBackoff"(arg0: integer): void
 "getUpdateBackoff"(): integer
 "sendUpdate"(): void
}

export namespace $IBlockEntityDelayedTickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityDelayedTickable$Type = ($IBlockEntityDelayedTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityDelayedTickable_ = $IBlockEntityDelayedTickable$Type;
}}
declare module "packages/org/cyclops/cyclopscore/persist/$IDirtyMarkListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDirtyMarkListener {

 "onDirty"(): void

(): void
}

export namespace $IDirtyMarkListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirtyMarkListener$Type = ($IDirtyMarkListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirtyMarkListener_ = $IDirtyMarkListener$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfigForge" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$ExtendedConfig, $ExtendedConfig$Type} from "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfig"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$Type} from "packages/org/cyclops/cyclopscore/config/$ConfigurablePropertyData"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedConfigForge<C extends $ExtendedConfig<(C), (I)>, I> extends $ExtendedConfig<(C), (I)> {
 "configProperties": $Map<(string), ($ConfigurablePropertyData<(any)>)>

constructor(arg0: $ModBase$Type<(any)>, arg1: string, arg2: $Function$Type<(C), (any)>)

public "getRegistry"(): $IForgeRegistry<(any)>
public "getResourceKey"(): $ResourceKey<(I)>
get "registry"(): $IForgeRegistry<(any)>
get "resourceKey"(): $ResourceKey<(I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedConfigForge$Type<C, I> = ($ExtendedConfigForge<(C), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedConfigForge_<C, I> = $ExtendedConfigForge$Type<(C), (I)>;
}}
declare module "packages/org/cyclops/cyclopscore/persist/world/$WorldStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerAboutToStartEvent, $ServerAboutToStartEvent$Type} from "packages/net/minecraftforge/event/server/$ServerAboutToStartEvent"
import {$ServerStartedEvent, $ServerStartedEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStartedEvent"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$ServerStoppingEvent, $ServerStoppingEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStoppingEvent"
import {$INBTProvider, $INBTProvider$Type} from "packages/org/cyclops/cyclopscore/persist/nbt/$INBTProvider"

export class $WorldStorage implements $INBTProvider {

constructor(arg0: $ModBase$Type<(any)>)

public "reset"(): void
public "beforeSave"(): void
public "afterLoad"(): void
public "onAboutToStartEvent"(arg0: $ServerAboutToStartEvent$Type): void
public "writeGeneratedFieldsToNBT"(arg0: $CompoundTag$Type): void
public "readGeneratedFieldsFromNBT"(arg0: $CompoundTag$Type): void
public "onStoppingEvent"(arg0: $ServerStoppingEvent$Type): void
public "onStartedEvent"(arg0: $ServerStartedEvent$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStorage$Type = ($WorldStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldStorage_ = $WorldStorage$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSerializerDryingBasin" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeDryingBasin, $RecipeDryingBasin$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeDryingBasin"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerDryingBasin implements $RecipeSerializer<($RecipeDryingBasin)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeDryingBasin
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeDryingBasin$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeDryingBasin
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeDryingBasin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerDryingBasin$Type = ($RecipeSerializerDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerDryingBasin_ = $RecipeSerializerDryingBasin$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$INetwork" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPathElement, $IPathElement$Type} from "packages/org/cyclops/integrateddynamics/api/path/$IPathElement"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/org/cyclops/cyclopscore/persist/nbt/$INBTSerializable"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ISidedPathElement, $ISidedPathElement$Type} from "packages/org/cyclops/integrateddynamics/api/path/$ISidedPathElement"
import {$IFullNetworkListener, $IFullNetworkListener$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IFullNetworkListener"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$INetworkEventBus, $INetworkEventBus$Type} from "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEventBus"

export interface $INetwork extends $IFullNetworkListener, $INBTSerializable {

 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "getElements"(): $Set<($INetworkElement)>
 "setPriorityAndChannel"(arg0: $INetworkElement$Type, arg1: integer, arg2: integer): void
 "isInitialized"(): boolean
 "getFullNetworkListeners"(): ($IFullNetworkListener)[]
 "containsSidedPathElement"(arg0: $ISidedPathElement$Type): boolean
 "removeNetworkElementUpdateable"(arg0: $INetworkElement$Type): void
 "resetLastSecondDurations"(): void
 "addNetworkElementUpdateable"(arg0: $INetworkElement$Type): void
 "getLastSecondDuration"(arg0: $INetworkElement$Type): long
 "getEventBus"(): $INetworkEventBus
 "hasChanged"(): boolean
 "isKilled"(): boolean
 "invalidateElement"(arg0: $INetworkElement$Type): void
 "isCrashed"(): boolean
 "revalidateElement"(arg0: $INetworkElement$Type): void
 "getCablesCount"(): integer
 "setCrashed"(arg0: boolean): void
 "killIfEmpty"(): boolean
 "update"(): void
 "canUpdate"(arg0: $INetworkElement$Type): boolean
 "postUpdate"(arg0: $INetworkElement$Type): void
 "beforeServerStop"(): void
 "afterServerLoad"(): void
 "removeNetworkElementPost"(arg0: $INetworkElement$Type): void
 "removeNetworkElementPre"(arg0: $INetworkElement$Type): boolean
 "kill"(): void
 "addNetworkElement"(arg0: $INetworkElement$Type, arg1: boolean): boolean
 "removePathElement"(arg0: $IPathElement$Type, arg1: $Direction$Type): boolean
 "updateGuaranteed"(): void
 "onSkipUpdate"(arg0: $INetworkElement$Type): void
 "fromNBT"(arg0: $CompoundTag$Type): void
 "toNBT"(): $CompoundTag
}

export namespace $INetwork {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetwork$Type = ($INetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetwork_ = $INetwork$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/$PartRenderPosition" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $PartRenderPosition {
static readonly "NONE": $PartRenderPosition

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)

public "toString"(): string
public "getHeightFactor"(): float
public "getWidthFactorSide"(): float
public "getDepthFactor"(): float
public "getWidthFactor"(): float
public "getBoundingBox"(arg0: $Direction$Type): $VoxelShape
public "getHeightFactorSide"(): float
public "getSidedCableBoundingBox"(arg0: $Direction$Type): $VoxelShape
public "toCompactString"(): string
get "heightFactor"(): float
get "widthFactorSide"(): float
get "depthFactor"(): float
get "widthFactor"(): float
get "heightFactorSide"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartRenderPosition$Type = ($PartRenderPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartRenderPosition_ = $PartRenderPosition$Type;
}}
declare module "packages/org/cyclops/integratedterminals/api/terminalstorage/$ITerminalStorageTabCommon$IVariableInventory" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ITerminalStorageTabCommon$IVariableInventory {

 "getNamedInventory"(arg0: string): $NonNullList<($ItemStack)>
 "loadNamedInventory"(arg0: string, arg1: $Container$Type): void
 "setNamedInventory"(arg0: string, arg1: $NonNullList$Type<($ItemStack$Type)>): void
 "saveNamedInventory"(arg0: string, arg1: $Container$Type): void
}

export namespace $ITerminalStorageTabCommon$IVariableInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabCommon$IVariableInventory$Type = ($ITerminalStorageTabCommon$IVariableInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabCommon$IVariableInventory_ = $ITerminalStorageTabCommon$IVariableInventory$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/configurabletypeaction/$ConfigurableTypeAction" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ExtendedConfigForge, $ExtendedConfigForge$Type} from "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfigForge"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$ExtendedConfig, $ExtendedConfig$Type} from "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfig"

export class $ConfigurableTypeAction<C extends $ExtendedConfig<(C), (I)>, I> {

constructor()

public static "register"<C extends $ExtendedConfigForge<(C), (I)>, I>(arg0: C): void
public static "register"<C extends $ExtendedConfigForge<(C), (I)>, I>(arg0: C, arg1: $Callable$Type<(any)>): void
public static "register"<C extends $ExtendedConfigForge<(C), (I)>, I>(arg0: $IForgeRegistry$Type<(any)>, arg1: C): void
public static "register"<C extends $ExtendedConfigForge<(C), (I)>, I>(arg0: $IForgeRegistry$Type<(any)>, arg1: C, arg2: $Callable$Type<(any)>): void
public "onRegisterForgeFilled"(arg0: C): void
public "onRegisterModInit"(arg0: C): void
public "onRegisterSetup"(arg0: C): void
public "onRegisterForge"(arg0: C): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableTypeAction$Type<C, I> = ($ConfigurableTypeAction<(C), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableTypeAction_<C, I> = $ConfigurableTypeAction$Type<(C), (I)>;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockDelay" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockDelay extends $BlockWithEntityGuiCabled {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDelay$Type = ($BlockDelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDelay_ = $BlockDelay$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapelessCustomOutput" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer, $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeCraftingShapelessCustomOutput, $RecipeCraftingShapelessCustomOutput$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$RecipeCraftingShapelessCustomOutput"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerCraftingShapelessCustomOutput implements $RecipeSerializer<($RecipeCraftingShapelessCustomOutput)> {

constructor(arg0: $Supplier$Type<($ItemStack$Type)>, arg1: $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer$Type)
constructor(arg0: $Supplier$Type<($ItemStack$Type)>)

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeCraftingShapelessCustomOutput
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeCraftingShapelessCustomOutput$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeCraftingShapelessCustomOutput
public "getOutputTransformer"(): $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeCraftingShapelessCustomOutput
get "outputTransformer"(): $RecipeSerializerCraftingShapelessCustomOutput$IOutputTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerCraftingShapelessCustomOutput$Type = ($RecipeSerializerCraftingShapelessCustomOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerCraftingShapelessCustomOutput_ = $RecipeSerializerCraftingShapelessCustomOutput$Type;
}}
declare module "packages/org/cyclops/cyclopscore/init/$IRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRegistry {

}

export namespace $IRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegistry$Type = ($IRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegistry_ = $IRegistry$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemPortableLogicProgrammer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemLocation, $ItemLocation$Type} from "packages/org/cyclops/cyclopscore/inventory/$ItemLocation"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemGui, $ItemGui$Type} from "packages/org/cyclops/cyclopscore/item/$ItemGui"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPortableLogicProgrammer extends $ItemGui {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemLocation$Type): $MenuProvider
public "getContainerClass"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPortableLogicProgrammer$Type = ($ItemPortableLogicProgrammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPortableLogicProgrammer_ = $ItemPortableLogicProgrammer$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$ValuePredicate, $ValuePredicate$Type} from "packages/org/cyclops/integrateddynamics/api/advancement/criterion/$ValuePredicate"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IValueTypeLogicProgrammerElement, $IValueTypeLogicProgrammerElement$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IValueTypeLogicProgrammerElement"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export interface $IValueType<V extends $IValue> {

 "getUniqueName"(): $ResourceLocation
 "deserializeValuePredicate"(arg0: $JsonObject$Type, arg1: $IValue$Type): $ValuePredicate<(V)>
 "getDisplayColorFormat"(): $ChatFormatting
 "createLogicProgrammerElement"(): $IValueTypeLogicProgrammerElement<(any), (any), (any)>
 "toString"(arg0: V): string
 "cast"(arg0: $IValue$Type): V
 "getDefault"(): V
 "getTypeName"(): string
 "materialize"(arg0: V): V
 "parseString"(arg0: string): V
 "isCategory"(): boolean
 "loadTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean, arg2: V): void
 "isObject"(): boolean
 "correspondsTo"(arg0: $IValueType$Type<(any)>): boolean
 "getVariableItemOverrideModel"(arg0: V, arg1: $BakedModel$Type, arg2: $ItemStack$Type, arg3: $ClientLevel$Type, arg4: $LivingEntity$Type): $BakedModel
 "deserialize"(arg0: $ValueDeseralizationContext$Type, arg1: $Tag$Type): V
 "canDeserialize"(arg0: $ValueDeseralizationContext$Type, arg1: $Tag$Type): $Component
 "serialize"(arg0: V): $Tag
 "renderISTER"(arg0: V, arg1: $ItemStack$Type, arg2: $ItemDisplayContext$Type, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer, arg6: integer): void
 "getTranslationKey"(): string
 "getDisplayColor"(): integer
 "toCompactString"(arg0: V): $MutableComponent
}

export namespace $IValueType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueType$Type<V> = ($IValueType<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueType_<V> = $IValueType$Type<(V)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelBaked" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IVariableModelProvider, $IVariableModelProvider$Type} from "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelProvider"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$IVariableModelProvider$BakedModelProvider, $IVariableModelProvider$BakedModelProvider$Type} from "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelProvider$BakedModelProvider"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$Type} from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IVariableModelBaked extends $BakedModel {

 "setSubModels"<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider$Type<(B)>, arg1: B): void
 "getSubModels"<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider$Type<(B)>): B
 "isGui3d"(): boolean
 "usesBlockLight"(): boolean
/**
 * 
 * @deprecated
 */
 "getParticleIcon"(): $TextureAtlasSprite
/**
 * 
 * @deprecated
 */
 "getTransforms"(): $ItemTransforms
 "useAmbientOcclusion"(): boolean
 "isCustomRenderer"(): boolean
/**
 * 
 * @deprecated
 */
 "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type): $List<($BakedQuad)>
 "getOverrides"(): $ItemOverrides
 "getModelData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ModelData$Type): $ModelData
 "applyTransform"(arg0: $ItemDisplayContext$Type, arg1: $PoseStack$Type, arg2: boolean): $BakedModel
 "useAmbientOcclusion"(arg0: $BlockState$Type): boolean
 "useAmbientOcclusion"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
 "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type, arg3: $ModelData$Type, arg4: $RenderType$Type): $List<($BakedQuad)>
 "getParticleIcon"(arg0: $ModelData$Type): $TextureAtlasSprite
 "getRenderPasses"(arg0: $ItemStack$Type, arg1: boolean): $List<($BakedModel)>
 "getRenderTypes"(arg0: $ItemStack$Type, arg1: boolean): $List<($RenderType)>
 "getRenderTypes"(arg0: $BlockState$Type, arg1: $RandomSource$Type, arg2: $ModelData$Type): $ChunkRenderTypeSet
 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $IVariableModelBaked {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableModelBaked$Type = ($IVariableModelBaked);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableModelBaked_ = $IVariableModelBaked$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$VoxelShapeComponents" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$AxisCycle, $AxisCycle$Type} from "packages/net/minecraft/core/$AxisCycle"
import {$DoubleList, $DoubleList$Type} from "packages/it/unimi/dsi/fastutil/doubles/$DoubleList"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockRayTraceResultComponent, $BlockRayTraceResultComponent$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockRayTraceResultComponent"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$VoxelShapeComponents$IComponent, $VoxelShapeComponents$IComponent$Type} from "packages/org/cyclops/integrateddynamics/core/block/$VoxelShapeComponents$IComponent"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Shapes$DoubleLineConsumer, $Shapes$DoubleLineConsumer$Type} from "packages/net/minecraft/world/phys/shapes/$Shapes$DoubleLineConsumer"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VoxelShapeComponents extends $VoxelShape implements $Iterable<($VoxelShape)> {
 "shape": $DiscreteVoxelShape


public "iterator"(): $Iterator<($VoxelShape)>
public static "create"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type, arg4: $List$Type<($VoxelShapeComponents$IComponent$Type)>): $VoxelShapeComponents
public "forAllBoxes"(arg0: $Shapes$DoubleLineConsumer$Type): void
public "forAllEdges"(arg0: $Shapes$DoubleLineConsumer$Type): void
public "max"(arg0: $Direction$Axis$Type, arg1: double, arg2: double): double
public "collideX"(arg0: $AxisCycle$Type, arg1: $AABB$Type, arg2: double): double
public "move"(arg0: double, arg1: double, arg2: double): $VoxelShape
public "max"(arg0: $Direction$Axis$Type): double
public "isEmpty"(): boolean
public "getCoords"(arg0: $Direction$Axis$Type): $DoubleList
public "rayTrace"(arg0: $BlockPos$Type, arg1: $Entity$Type): $BlockRayTraceResultComponent
public "clip"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type): $BlockRayTraceResultComponent
public "min"(arg0: $Direction$Axis$Type): double
public "getStateId"(): string
public "spliterator"(): $Spliterator<($VoxelShape)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$VoxelShape>;
get "empty"(): boolean
get "stateId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeComponents$Type = ($VoxelShapeComponents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeComponents_ = $VoxelShapeComponents$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGuiBox" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$ISubGui, $ISubGui$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGui"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TextureManager, $TextureManager$Type} from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export interface $ISubGuiBox extends $ISubGui {

 "getY"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "getX"(): integer
 "charTyped"(arg0: character, arg1: integer): boolean
 "init"(arg0: integer, arg1: integer): void
 "renderBg"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $TextureManager$Type, arg4: $Font$Type, arg5: float, arg6: integer, arg7: integer): void
 "tick"(): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "drawGuiContainerForegroundLayer"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $TextureManager$Type, arg4: $Font$Type, arg5: integer, arg6: integer): void
}

export namespace $ISubGuiBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubGuiBox$Type = ($ISubGuiBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubGuiBox_ = $ISubGuiBox$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/blockentity/$BlockEntityCableConnectable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$Type} from "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity"
import {$ICable, $ICable$Type} from "packages/org/cyclops/integrateddynamics/api/block/cable/$ICable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumFacingMap, $EnumFacingMap$Type} from "packages/org/cyclops/cyclopscore/datastructure/$EnumFacingMap"

export class $BlockEntityCableConnectable extends $CyclopsBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "read"(arg0: $CompoundTag$Type): void
public "onChunkUnloaded"(): void
public "getConnected"(): $EnumFacingMap<(boolean)>
public "getCable"(): $ICable
get "connected"(): $EnumFacingMap<(boolean)>
get "cable"(): $ICable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityCableConnectable$Type = ($BlockEntityCableConnectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityCableConnectable_ = $BlockEntityCableConnectable$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $IgnoredBlock extends $Block {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredBlock$Type = ($IgnoredBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlock_ = $IgnoredBlock$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$IEventListenableNetworkElement" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$INetworkEventListener, $INetworkEventListener$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkEventListener"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IEventListenableNetworkElement<D extends $INetworkEventListener<(any)>> extends $INetworkElement {

 "getNetworkEventListener"(): $Optional<(D)>
 "update"(arg0: $INetwork$Type): void
 "getPriority"(): integer
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$Type): void
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$Type, arg1: integer, arg2: integer): void
 "revalidate"(arg0: $INetwork$Type): void
 "getUpdateInterval"(): integer
 "beforeNetworkKill"(arg0: $INetwork$Type): void
 "onPostRemoved"(arg0: $INetwork$Type): void
 "onNetworkAddition"(arg0: $INetwork$Type): boolean
 "afterNetworkAlive"(arg0: $INetwork$Type): void
 "onPreRemoved"(arg0: $INetwork$Type): void
 "onNetworkRemoval"(arg0: $INetwork$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$Type, arg1: $BlockGetter$Type, arg2: $Block$Type, arg3: $BlockPos$Type): void
 "canRevalidate"(arg0: $INetwork$Type): boolean
 "isUpdate"(): boolean
 "addDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean, arg2: boolean): void
 "compareTo"(arg0: $INetworkElement$Type): integer
}

export namespace $IEventListenableNetworkElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventListenableNetworkElement$Type<D> = ($IEventListenableNetworkElement<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventListenableNetworkElement_<D> = $IEventListenableNetworkElement$Type<(D)>;
}}
declare module "packages/org/cyclops/cyclopscore/persist/nbt/$INBTSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $INBTSerializable {

 "fromNBT"(arg0: $CompoundTag$Type): void
 "toNBT"(): $CompoundTag
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type = ($INBTSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_ = $INBTSerializable$Type;
}}
declare module "packages/org/cyclops/cyclopscore/block/$IBlockGui" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IBlockGui {

 "writeExtraGuiData"(arg0: $FriendlyByteBuf$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $BlockPos$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): void
 "getOpenStat"(): $Stat<($ResourceLocation)>
}

export namespace $IBlockGui {
function onBlockActivatedHook(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockGui$Type = ($IBlockGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockGui_ = $IBlockGui$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockMenrilLogFilled" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockMenrilLogFilled extends $RotatedPillarBlock {
static readonly "SIDE": $EnumProperty<($Direction)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMenrilLogFilled$Type = ($BlockMenrilLogFilled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMenrilLogFilled_ = $BlockMenrilLogFilled$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockSqueezer" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockWithEntity, $BlockWithEntity$Type} from "packages/org/cyclops/cyclopscore/block/$BlockWithEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockSqueezer extends $BlockWithEntity {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "HEIGHT": $IntegerProperty
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
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "updateEntityAfterFallOn"(arg0: $BlockGetter$Type, arg1: $Entity$Type): void
public "getRelativeTopPositionTop"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSqueezer$Type = ($BlockSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSqueezer_ = $BlockSqueezer$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockCable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPartContainer, $IPartContainer$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartContainer"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShapeComponents, $VoxelShapeComponents$Type} from "packages/org/cyclops/integrateddynamics/core/block/$VoxelShapeComponents"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ModelEvent$ModifyBakingResult, $ModelEvent$ModifyBakingResult$Type} from "packages/net/minecraftforge/client/event/$ModelEvent$ModifyBakingResult"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$PartRenderPosition, $PartRenderPosition$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartRenderPosition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockWithEntity, $BlockWithEntity$Type} from "packages/org/cyclops/cyclopscore/block/$BlockWithEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IRenderState, $IRenderState$Type} from "packages/org/cyclops/integrateddynamics/client/model/$IRenderState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TextureStitchEvent$Post, $TextureStitchEvent$Post$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$IDynamicModelElement, $IDynamicModelElement$Type} from "packages/org/cyclops/cyclopscore/client/model/$IDynamicModelElement"

export class $BlockCable extends $BlockWithEntity implements $IDynamicModelElement, $SimpleWaterloggedBlock {
static readonly "BLOCK_HARDNESS": float
static readonly "WATERLOGGED": $BooleanProperty
static readonly "REALCABLE": $ModelProperty<(boolean)>
static readonly "CONNECTED": ($ModelProperty<(boolean)>)[]
static readonly "PART_RENDERPOSITIONS": ($ModelProperty<($PartRenderPosition)>)[]
static readonly "FACADE": $ModelProperty<($Optional<($BlockState)>)>
static readonly "PARTCONTAINER": $ModelProperty<($IPartContainer)>
static readonly "RENDERSTATE": $ModelProperty<($IRenderState)>
static readonly "CABLE_CENTER_BOUNDINGBOX": $AABB
 "texture": $TextureAtlasSprite
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
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "hasDynamicShape"(): boolean
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "createDynamicModel"(arg0: $ModelEvent$ModifyBakingResult$Type): $BakedModel
public "getSelectedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShapeComponents
public "setDisableCollisionBox"(arg0: boolean): void
public "getCableBoundingBox"(arg0: $Direction$Type): $AABB
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "hasDynamicModel"(): boolean
public "postTextureStitch"(arg0: $TextureStitchEvent$Post$Type): void
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
set "disableCollisionBox"(value: boolean)
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCable$Type = ($BlockCable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCable_ = $BlockCable$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlockStatus" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IgnoredBlock, $IgnoredBlock$Type} from "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IgnoredBlockStatus$PropertyStatus, $IgnoredBlockStatus$PropertyStatus$Type} from "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlockStatus$PropertyStatus"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $IgnoredBlockStatus extends $IgnoredBlock {
static readonly "STATUS": $IgnoredBlockStatus$PropertyStatus
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredBlockStatus$Type = ($IgnoredBlockStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlockStatus_ = $IgnoredBlockStatus$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemFacade" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ModelEvent$ModifyBakingResult, $ModelEvent$ModifyBakingResult$Type} from "packages/net/minecraftforge/client/event/$ModelEvent$ModifyBakingResult"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IDynamicModelElement, $IDynamicModelElement$Type} from "packages/org/cyclops/cyclopscore/client/model/$IDynamicModelElement"

export class $ItemFacade extends $Item implements $IDynamicModelElement {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "writeFacadeBlock"(arg0: $ItemStack$Type, arg1: $BlockState$Type): void
public "getFacadeBlock"(arg0: $ItemStack$Type): $BlockState
public "getFacadeBlockItem"(arg0: $ItemStack$Type): $ItemStack
public "getName"(arg0: $ItemStack$Type): $Component
public "createDynamicModel"(arg0: $ModelEvent$ModifyBakingResult$Type): $BakedModel
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "hasDynamicModel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFacade$Type = ($ItemFacade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFacade_ = $ItemFacade$Type;
}}
declare module "packages/org/cyclops/cyclopscore/init/$RegistryManager" {
import {$IRegistry, $IRegistry$Type} from "packages/org/cyclops/cyclopscore/init/$IRegistry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $RegistryManager {

constructor()

public "addRegistry"<R extends $IRegistry>(arg0: $Class$Type<(R)>, arg1: R): void
public "getRegistry"<T extends $IRegistry>(arg0: $Class$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryManager$Type = ($RegistryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryManager_ = $RegistryManager$Type;
}}
declare module "packages/org/cyclops/cyclopscore/proxy/$ICommonProxy" {
import {$PacketHandler, $PacketHandler$Type} from "packages/org/cyclops/cyclopscore/network/$PacketHandler"
import {$IKeyRegistry, $IKeyRegistry$Type} from "packages/org/cyclops/cyclopscore/client/key/$IKeyRegistry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$BlockEntityRendererProvider, $BlockEntityRendererProvider$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$RegisterKeyMappingsEvent, $RegisterKeyMappingsEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent"

export interface $ICommonProxy {

 "registerTickHandlers"(): void
 "registerPacketHandlers"(arg0: $PacketHandler$Type): void
 "registerKeyBindings"(arg0: $IKeyRegistry$Type, arg1: $RegisterKeyMappingsEvent$Type): void
 "getMod"(): $ModBase<(any)>
 "registerRenderer"<T extends $BlockEntity>(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockEntityRendererProvider$Type<(T)>): void
 "registerEventHooks"(): void
 "registerRenderers"(): void
}

export namespace $ICommonProxy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonProxy$Type = ($ICommonProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommonProxy_ = $ICommonProxy$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$IPartNetworkElement" {
import {$IPartContainer, $IPartContainer$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartContainer"
import {$IIdentifiableNetworkElement, $IIdentifiableNetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IIdentifiableNetworkElement"
import {$IPositionedNetworkElement, $IPositionedNetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPositionedNetworkElement"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$IEventListenableNetworkElement, $IEventListenableNetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IEventListenableNetworkElement"
import {$PartTarget, $PartTarget$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartTarget"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ISidedNetworkElement, $ISidedNetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$ISidedNetworkElement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPartNetworkElement<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $IEventListenableNetworkElement<(P)>, $IPositionedNetworkElement, $ISidedNetworkElement, $IIdentifiableNetworkElement {

 "getPart"(): P
 "getTarget"(): $PartTarget
 "isLoaded"(): boolean
 "getPartState"(): S
 "getPartContainer"(): $IPartContainer
 "getNetworkEventListener"(): $Optional<(P)>
 "getPosition"(): $DimPos
 "getSide"(): $Direction
 "getId"(): integer
 "getGroup"(): $ResourceLocation
 "update"(arg0: $INetwork$Type): void
 "getPriority"(): integer
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$Type): void
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$Type, arg1: integer, arg2: integer): void
 "revalidate"(arg0: $INetwork$Type): void
 "getUpdateInterval"(): integer
 "beforeNetworkKill"(arg0: $INetwork$Type): void
 "onPostRemoved"(arg0: $INetwork$Type): void
 "onNetworkAddition"(arg0: $INetwork$Type): boolean
 "afterNetworkAlive"(arg0: $INetwork$Type): void
 "onPreRemoved"(arg0: $INetwork$Type): void
 "onNetworkRemoval"(arg0: $INetwork$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$Type, arg1: $BlockGetter$Type, arg2: $Block$Type, arg3: $BlockPos$Type): void
 "canRevalidate"(arg0: $INetwork$Type): boolean
 "isUpdate"(): boolean
 "addDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean, arg2: boolean): void
 "compareTo"(arg0: $INetworkElement$Type): integer
}

export namespace $IPartNetworkElement {
const GROUP: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartNetworkElement$Type<P, S> = ($IPartNetworkElement<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartNetworkElement_<P, S> = $IPartNetworkElement$Type<(P), (S)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$IGuiInputElement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISubGuiBox, $ISubGuiBox$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGuiBox"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConfigRenderPattern, $IConfigRenderPattern$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IConfigRenderPattern"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $IGuiInputElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {

 "getName"(): $Component
 "validate"(): $Component
 "loadTooltip"(arg0: $List$Type<($Component$Type)>): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "getSymbol"(): string
 "getRenderPattern"(): $IConfigRenderPattern
}

export namespace $IGuiInputElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiInputElement$Type<S, G, C> = ($IGuiInputElement<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiInputElement_<S, G, C> = $IGuiInputElement$Type<(S), (G), (C)>;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/$ICompatInitializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICompatInitializer {

 "initialize"(): void

(): void
}

export namespace $ICompatInitializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompatInitializer$Type = ($ICompatInitializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICompatInitializer_ = $ICompatInitializer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$RecipeCraftingShapelessCustomOutput" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$RecipeSerializerCraftingShapelessCustomOutput, $RecipeSerializerCraftingShapelessCustomOutput$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapelessCustomOutput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $RecipeCraftingShapelessCustomOutput extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $RecipeSerializerCraftingShapelessCustomOutput$Type, arg1: $ResourceLocation$Type, arg2: string, arg3: $CraftingBookCategory$Type, arg4: $ItemStack$Type, arg5: $NonNullList$Type<($Ingredient$Type)>)

public "getResultItem"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapelessCustomOutput$Type = ($RecipeCraftingShapelessCustomOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapelessCustomOutput_ = $RecipeCraftingShapelessCustomOutput$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeNbtClear" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $RecipeNbtClear extends $CustomRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $CraftingBookCategory$Type, arg2: $Ingredient$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getResultItem"(): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getInputIngredient"(): $Ingredient
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "special"(): boolean
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "inputIngredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeNbtClear$Type = ($RecipeNbtClear);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeNbtClear_ = $RecipeNbtClear$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/capabilities/$ICapabilityTypeGetter" {
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityTypeGetter<C> {

 "getCapability"(): $Capability<(C)>

(): $Capability<(C)>
}

export namespace $ICapabilityTypeGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityTypeGetter$Type<C> = ($ICapabilityTypeGetter<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityTypeGetter_<C> = $ICapabilityTypeGetter$Type<(C)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspectVariable" {
import {$IAspectRead, $IAspectRead$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspectRead"
import {$IVariableInvalidateListener, $IVariableInvalidateListener$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariableInvalidateListener"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IVariable, $IVariable$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariable"
import {$PartTarget, $PartTarget$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartTarget"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"

export interface $IAspectVariable<V extends $IValue> extends $IVariable<(V)> {

 "getAspect"(): $IAspectRead<(V), (any)>
 "getTarget"(): $PartTarget
 "getValue"(): V
 "getType"(): $IValueType<(V)>
 "addInvalidationListener"(arg0: $IVariableInvalidateListener$Type): void
 "invalidate"(): void
}

export namespace $IAspectVariable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectVariable$Type<V> = ($IAspectVariable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectVariable_<V> = $IAspectVariable$Type<(V)>;
}}
declare module "packages/org/cyclops/cyclopscore/command/argument/$ArgumentInfoMod$Template" {
import {$ArgumentTypeConfigProperty, $ArgumentTypeConfigProperty$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeConfigProperty"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"
import {$ArgumentInfoMod, $ArgumentInfoMod$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentInfoMod"

export class $ArgumentInfoMod$Template implements $ArgumentTypeInfo$Template<($ArgumentTypeConfigProperty)> {


public "type"(): $ArgumentInfoMod<(any)>
public "instantiate"(arg0: $CommandBuildContext$Type): $ArgumentTypeConfigProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentInfoMod$Template$Type = ($ArgumentInfoMod$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentInfoMod$Template_ = $ArgumentInfoMod$Template$Type;
}}
declare module "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeConfigProperty" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$Type} from "packages/org/cyclops/cyclopscore/config/$ConfigurablePropertyData"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ArgumentTypeConfigProperty implements $ArgumentType<($ConfigurablePropertyData)> {

constructor(arg0: $ModBase$Type<(any)>)

public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "getMod"(): $ModBase<(any)>
get "examples"(): $Collection<(string)>
get "mod"(): $ModBase<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeConfigProperty$Type = ($ArgumentTypeConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeConfigProperty_ = $ArgumentTypeConfigProperty$Type;
}}
declare module "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeEnum" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ArgumentTypeEnum<T extends $Enum<(T)>> implements $ArgumentType<(T)> {

constructor(arg0: $Class$Type<(T)>)

public static "getValue"<T extends $Enum<(T)>>(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string, arg2: $Class$Type<(T)>): T
public "parse"(arg0: $StringReader$Type): T
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeEnum$Type<T> = ($ArgumentTypeEnum<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeEnum_<T> = $ArgumentTypeEnum$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IValueTypeLogicProgrammerElement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IVariableFacade, $IVariableFacade$Type} from "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade"
import {$ILogicProgrammerElement, $ILogicProgrammerElement$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$ILogicProgrammerElement"
import {$ILogicProgrammerElementType, $ILogicProgrammerElementType$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$ILogicProgrammerElementType"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IConfigRenderPattern, $IConfigRenderPattern$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IConfigRenderPattern"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"
import {$ISubGuiBox, $ISubGuiBox$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGuiBox"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IGuiInputElementValueType, $IGuiInputElementValueType$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$IGuiInputElementValueType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $ILogicProgrammerElement<(S), (G), (C)> {

 "getValue"(): $IValue
 "createInnerGuiElement"<G2 extends $Screen, C2 extends $AbstractContainerMenu>(): $IGuiInputElementValueType<(any), (G2), (C2)>
 "getValueType"(): $IValueType<(any)>
 "setValueInGui"(arg0: S): void
 "getType"(): $ILogicProgrammerElementType<(any)>
 "getItemStackSizeLimit"(): integer
 "canCurrentlyReadFromOtherItem"(): boolean
 "setFocused"(arg0: S, arg1: boolean): void
 "getMatchString"(): string
 "createSlot"(arg0: $Container$Type, arg1: integer, arg2: integer, arg3: integer): $Slot
 "isFor"(arg0: $IVariableFacade$Type): boolean
 "onInputSlotUpdated"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): void
 "canWriteElementPre"(): boolean
 "slotClick"(arg0: integer, arg1: $Slot$Type, arg2: integer, arg3: $ClickType$Type, arg4: $Player$Type): boolean
 "writeElement"(arg0: $Player$Type, arg1: $ItemStack$Type): $ItemStack
 "isItemValidForSlot"(arg0: integer, arg1: $ItemStack$Type): boolean
 "isFocused"(arg0: S): boolean
 "matchesOutput"(arg0: $IValueType$Type<(any)>): boolean
 "matchesInput"(arg0: $IValueType$Type<(any)>): boolean
 "getName"(): $Component
 "validate"(): $Component
 "loadTooltip"(arg0: $List$Type<($Component$Type)>): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "getSymbol"(): string
 "getRenderPattern"(): $IConfigRenderPattern
}

export namespace $IValueTypeLogicProgrammerElement {
function createSlotDefault(arg0: $ILogicProgrammerElement$Type<(any), (any), (any)>, arg1: $Container$Type, arg2: integer, arg3: integer, arg4: integer): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueTypeLogicProgrammerElement$Type<S, G, C> = ($IValueTypeLogicProgrammerElement<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueTypeLogicProgrammerElement_<S, G, C> = $IValueTypeLogicProgrammerElement$Type<(S), (G), (C)>;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockCreativeEnergyBattery" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEnergyBatteryBase, $BlockEnergyBatteryBase$Type} from "packages/org/cyclops/integrateddynamics/block/$BlockEnergyBatteryBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockCreativeEnergyBattery extends $BlockEnergyBatteryBase {
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

public "isCreative"(): boolean
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCreativeEnergyBattery$Type = ($BlockCreativeEnergyBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCreativeEnergyBattery_ = $BlockCreativeEnergyBattery$Type;
}}
declare module "packages/org/cyclops/cyclopscore/client/key/$IKeyRegistry" {
import {$InputEvent$Key, $InputEvent$Key$Type} from "packages/net/minecraftforge/client/event/$InputEvent$Key"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IKeyHandler, $IKeyHandler$Type} from "packages/org/cyclops/cyclopscore/client/key/$IKeyHandler"
import {$IRegistry, $IRegistry$Type} from "packages/org/cyclops/cyclopscore/init/$IRegistry"

export interface $IKeyRegistry extends $IRegistry {

 "onPlayerKeyInput"(arg0: $InputEvent$Key$Type): void
 "addKeyHandler"(arg0: $KeyMapping$Type, arg1: $IKeyHandler$Type): void
}

export namespace $IKeyRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyRegistry$Type = ($IKeyRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyRegistry_ = $IKeyRegistry$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue" {
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"

export interface $IValue {

 "cast"<V extends $IValue>(arg0: $IValueType$Type<(V)>): V
 "getType"(): $IValueType<(any)>
 "canCast"<V extends $IValue>(arg0: $IValueType$Type<(V)>): boolean
}

export namespace $IValue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValue$Type = ($IValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValue_ = $IValue$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/blockentity/$BlockEntityEnergyBattery" {
import {$IEnergyStorageCapacity, $IEnergyStorageCapacity$Type} from "packages/org/cyclops/integrateddynamics/capability/energystorage/$IEnergyStorageCapacity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityCableConnectable, $BlockEntityCableConnectable$Type} from "packages/org/cyclops/integrateddynamics/core/blockentity/$BlockEntityCableConnectable"

export class $BlockEntityEnergyBattery extends $BlockEntityCableConnectable implements $IEnergyStorageCapacity {
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getUpdateBackoffTicks"(): integer
public "setCapacity"(arg0: integer): void
public "isCreative"(): boolean
public "onUpdateReceived"(): void
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "getEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "getMaxEnergyStored"(): integer
public "canReceive"(): boolean
public "canExtract"(): boolean
public static "getEnergyPerTick"(arg0: integer): integer
public "setEnergyStored"(arg0: integer): void
get "updateBackoffTicks"(): integer
set "capacity"(value: integer)
get "creative"(): boolean
get "energyStored"(): integer
get "maxEnergyStored"(): integer
set "energyStored"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityEnergyBattery$Type = ($BlockEntityEnergyBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityEnergyBattery_ = $BlockEntityEnergyBattery$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfig" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$ConfigurableType, $ConfigurableType$Type} from "packages/org/cyclops/cyclopscore/config/$ConfigurableType"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$Type} from "packages/org/cyclops/cyclopscore/config/$ConfigurablePropertyData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedConfig<C extends $ExtendedConfig<(C), (I)>, I> implements $Comparable<($ExtendedConfig<(C), (I)>)> {
 "configProperties": $Map<(string), ($ConfigurablePropertyData<(any)>)>

constructor(arg0: $ModBase$Type<(any)>, arg1: string, arg2: $Function$Type<(C), (any)>)

public "compareTo"(arg0: $ExtendedConfig$Type<(C), (I)>): integer
public "getInstance"(): I
public "onConfigPropertyReload"(arg0: $ConfigurablePropertyData$Type<(any)>, arg1: boolean): void
public "getConfigurableType"(): $ConfigurableType
public "getFullTranslationKey"(): string
public "getMod"(): $ModBase<(any)>
public "getElementConstructor"(): $Function<(C), (any)>
public "showDoubleInitError"(): void
public "getNamedId"(): string
public "getSubUniqueName"(): string
/**
 * 
 * @deprecated
 */
public "downCast"(): C
public "onRegistered"(): void
public "onForgeRegistered"(): void
public "getTranslationKey"(): string
get "instance"(): I
get "configurableType"(): $ConfigurableType
get "fullTranslationKey"(): string
get "mod"(): $ModBase<(any)>
get "elementConstructor"(): $Function<(C), (any)>
get "namedId"(): string
get "subUniqueName"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedConfig$Type<C, I> = ($ExtendedConfig<(C), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedConfig_<C, I> = $ExtendedConfig$Type<(C), (I)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $INetworkElement extends $Comparable<($INetworkElement)> {

 "update"(arg0: $INetwork$Type): void
 "getPriority"(): integer
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$Type): void
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$Type, arg1: integer, arg2: integer): void
 "revalidate"(arg0: $INetwork$Type): void
 "getUpdateInterval"(): integer
 "beforeNetworkKill"(arg0: $INetwork$Type): void
 "onPostRemoved"(arg0: $INetwork$Type): void
 "onNetworkAddition"(arg0: $INetwork$Type): boolean
 "afterNetworkAlive"(arg0: $INetwork$Type): void
 "onPreRemoved"(arg0: $INetwork$Type): void
 "onNetworkRemoval"(arg0: $INetwork$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$Type, arg1: $BlockGetter$Type, arg2: $Block$Type, arg3: $BlockPos$Type): void
 "canRevalidate"(arg0: $INetwork$Type): boolean
 "isUpdate"(): boolean
 "addDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean, arg2: boolean): void
 "compareTo"(arg0: $INetworkElement$Type): integer
}

export namespace $INetworkElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkElement$Type = ($INetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkElement_ = $INetworkElement$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemBlockCable$IUseAction" {
import {$BlockCable, $BlockCable$Type} from "packages/org/cyclops/integrateddynamics/block/$BlockCable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ItemBlockCable$IUseAction {

 "attempItemUseTarget"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockCable$Type): boolean
 "canPlaceAt"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $ItemBlockCable$IUseAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockCable$IUseAction$Type = ($ItemBlockCable$IUseAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockCable$IUseAction_ = $ItemBlockCable$IUseAction$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$ISidedNetworkElement" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $ISidedNetworkElement extends $INetworkElement {

 "getSide"(): $Direction
 "update"(arg0: $INetwork$Type): void
 "getPriority"(): integer
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$Type): void
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$Type, arg1: integer, arg2: integer): void
 "revalidate"(arg0: $INetwork$Type): void
 "getUpdateInterval"(): integer
 "beforeNetworkKill"(arg0: $INetwork$Type): void
 "onPostRemoved"(arg0: $INetwork$Type): void
 "onNetworkAddition"(arg0: $INetwork$Type): boolean
 "afterNetworkAlive"(arg0: $INetwork$Type): void
 "onPreRemoved"(arg0: $INetwork$Type): void
 "onNetworkRemoval"(arg0: $INetwork$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$Type, arg1: $BlockGetter$Type, arg2: $Block$Type, arg3: $BlockPos$Type): void
 "canRevalidate"(arg0: $INetwork$Type): boolean
 "isUpdate"(): boolean
 "addDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean, arg2: boolean): void
 "compareTo"(arg0: $INetworkElement$Type): integer
}

export namespace $ISidedNetworkElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedNetworkElement$Type = ($ISidedNetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedNetworkElement_ = $ISidedNetworkElement$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeMechanicalSqueezer" {
import {$RecipeSqueezer, $RecipeSqueezer$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSqueezer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeSqueezer$IngredientChance, $RecipeSqueezer$IngredientChance$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSqueezer$IngredientChance"

export class $RecipeMechanicalSqueezer extends $RecipeSqueezer {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $NonNullList$Type<($RecipeSqueezer$IngredientChance$Type)>, arg3: $FluidStack$Type, arg4: integer)

public "getDuration"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
get "duration"(): integer
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMechanicalSqueezer$Type = ($RecipeMechanicalSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMechanicalSqueezer_ = $RecipeMechanicalSqueezer$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspectRead" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IAspectProperties, $IAspectProperties$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectProperties"
import {$PartPos, $PartPos$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartPos"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectPropertyTypeInstance"
import {$PartTarget, $PartTarget$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartTarget"
import {$AspectUpdateType, $AspectUpdateType$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/$AspectUpdateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"
import {$IAspectVariable, $IAspectVariable$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspectVariable"
import {$IPartNetwork, $IPartNetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPartNetwork"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IAspect, $IAspect$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspect"

export interface $IAspectRead<V extends $IValue, T extends $IValueType<(V)>> extends $IAspect<(V), (T)> {

 "createNewVariable"(arg0: $PartTarget$Type): $IAspectVariable<(V)>
 "getUpdateType"(): $AspectUpdateType
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getUniqueName"(): $ResourceLocation
 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: P, arg3: $PartTarget$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$Type, arg2: S, arg3: $IAspectProperties$Type): void
 "loadTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): void
 "getValueType"(): T
 "getDefaultProperties"(): $IAspectProperties
 "getPropertiesContainerProvider"(arg0: $PartPos$Type): $MenuProvider
 "getTranslationKey"(): string
}

export namespace $IAspectRead {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectRead$Type<V, T> = ($IAspectRead<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectRead_<V, T> = $IAspectRead$Type<(V), (T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariableInvalidateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IVariableInvalidateListener {

 "invalidate"(): void

(): void
}

export namespace $IVariableInvalidateListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableInvalidateListener$Type = ($IVariableInvalidateListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableInvalidateListener_ = $IVariableInvalidateListener$Type;
}}
declare module "packages/org/cyclops/cyclopscore/client/model/$IDynamicModelElement" {
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ModelEvent$ModifyBakingResult, $ModelEvent$ModifyBakingResult$Type} from "packages/net/minecraftforge/client/event/$ModelEvent$ModifyBakingResult"

export interface $IDynamicModelElement {

 "createDynamicModel"(arg0: $ModelEvent$ModifyBakingResult$Type): $BakedModel
 "hasDynamicModel"(): boolean
}

export namespace $IDynamicModelElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicModelElement$Type = ($IDynamicModelElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicModelElement_ = $IDynamicModelElement$Type;
}}
declare module "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeEnum$Info" {
import {$ArgumentTypeEnum, $ArgumentTypeEnum$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeEnum"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$ArgumentTypeEnum$Info$Template, $ArgumentTypeEnum$Info$Template$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeEnum$Info$Template"

export class $ArgumentTypeEnum$Info implements $ArgumentTypeInfo<($ArgumentTypeEnum<(any)>), ($ArgumentTypeEnum$Info$Template<(any)>)> {

constructor()

public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $ArgumentTypeEnum$Info$Template<(any)>
public "unpack"(arg0: $ArgumentTypeEnum$Type<(any)>): $ArgumentTypeEnum$Info$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeEnum$Info$Template$Type<(any)>, arg1: $FriendlyByteBuf$Type): void
public "serializeToJson"(arg0: $ArgumentTypeEnum$Info$Template$Type<(any)>, arg1: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeEnum$Info$Type = ($ArgumentTypeEnum$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeEnum$Info_ = $ArgumentTypeEnum$Info$Type;
}}
declare module "packages/org/cyclops/integratedtunnels/item/$ItemDummyPickAxe" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDummyPickAxe extends $DiggerItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "getItemStack"(arg0: boolean, arg1: integer): $ItemStack
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDummyPickAxe$Type = ($ItemDummyPickAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDummyPickAxe_ = $ItemDummyPickAxe$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$BlockRayTraceResultComponent" {
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$VoxelShapeComponents$IComponent, $VoxelShapeComponents$IComponent$Type} from "packages/org/cyclops/integrateddynamics/core/block/$VoxelShapeComponents$IComponent"

export class $BlockRayTraceResultComponent extends $BlockHitResult {
readonly "location": $Vec3

constructor(arg0: $BlockHitResult$Type, arg1: $VoxelShapeComponents$IComponent$Type)

public "getComponent"(): $VoxelShapeComponents$IComponent
get "component"(): $VoxelShapeComponents$IComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRayTraceResultComponent$Type = ($BlockRayTraceResultComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRayTraceResultComponent_ = $BlockRayTraceResultComponent$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemVariable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IVariableFacade, $IVariableFacade$Type} from "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemVariable extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getVariableFacade"(arg0: $ValueDeseralizationContext$Type, arg1: $ItemStack$Type): $IVariableFacade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariable$Type = ($ItemVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVariable_ = $ItemVariable$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$IEnergyContainerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyContainerBlock {

 "getEneryContainerCapacityNBTName"(): string
 "getEneryContainerNBTName"(): string
}

export namespace $IEnergyContainerBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainerBlock$Type = ($IEnergyContainerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyContainerBlock_ = $IEnergyContainerBlock$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockLogicProgrammer" {
import {$BlockGui, $BlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$BlockGui"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLogicProgrammer extends $BlockGui {
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

public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLogicProgrammer$Type = ($BlockLogicProgrammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLogicProgrammer_ = $BlockLogicProgrammer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/config/$ConfigHandler" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$ExtendedConfig, $ExtendedConfig$Type} from "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfig"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$Type} from "packages/org/cyclops/cyclopscore/config/$ConfigurablePropertyData"
import {$RegisterEvent, $RegisterEvent$Type} from "packages/net/minecraftforge/registries/$RegisterEvent"
import {$ModConfigEvent$Loading, $ModConfigEvent$Loading$Type} from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Loading"
import {$ModConfigEvent$Reloading, $ModConfigEvent$Reloading$Type} from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Reloading"
import {$IConfigInitializer, $IConfigInitializer$Type} from "packages/org/cyclops/cyclopscore/config/$IConfigInitializer"
import {$LinkedHashSet, $LinkedHashSet$Type} from "packages/java/util/$LinkedHashSet"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ExtendedConfigForge, $ExtendedConfigForge$Type} from "packages/org/cyclops/cyclopscore/config/extendedconfig/$ExtendedConfigForge"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigHandler {

constructor(arg0: $ModBase$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "initialize"(arg0: $Collection$Type<($IConfigInitializer$Type)>): void
public "syncProcessedConfigs"(arg0: $ModConfig$Type, arg1: boolean): void
public "addToConfigDictionary"(arg0: $ExtendedConfig$Type<(any), (any)>): void
public "getConfigDictionary"(): $Map<(string), ($ExtendedConfig<(any), (any)>)>
public "getRegistryEntriesHolder"(): $Multimap<(string), ($Pair<($ExtendedConfigForge<(any), (any)>), ($Callable<(any)>)>)>
public "setRegistryEventPassed"(arg0: $Set$Type<(string)>): void
public "getCommandableProperties"(): $Map<(string), ($ConfigurablePropertyData)>
public "getRegistryEventPassed"(): $Set<(string)>
public "loadForgeRegistriesFilled"(): void
public "loadForgeRegistries"(): void
public "getMod"(): $ModBase<(any)>
public "onRegistryEvent"(arg0: $RegisterEvent$Type): void
public "onLoad"(arg0: $ModConfigEvent$Loading$Type): void
public "getCategories"(): $Set<(string)>
public "onReload"(arg0: $ModConfigEvent$Reloading$Type): void
public "registerToRegistry"<V>(arg0: $IForgeRegistry$Type<(any)>, arg1: $ExtendedConfigForge$Type<(any), (V)>, arg2: $Callable$Type<(any)>): void
public "getDictionary"(): $Map<(string), ($ExtendedConfig<(any), (any)>)>
public "getConfigurables"(): $LinkedHashSet<($ExtendedConfig<(any), (any)>)>
public "addConfigurable"(arg0: $ExtendedConfig$Type<(any), (any)>): boolean
public "loadModInit"(): void
public "loadSetup"(): void
public "addCategory"(arg0: string): void
get "configDictionary"(): $Map<(string), ($ExtendedConfig<(any), (any)>)>
get "registryEntriesHolder"(): $Multimap<(string), ($Pair<($ExtendedConfigForge<(any), (any)>), ($Callable<(any)>)>)>
set "registryEventPassed"(value: $Set$Type<(string)>)
get "commandableProperties"(): $Map<(string), ($ConfigurablePropertyData)>
get "registryEventPassed"(): $Set<(string)>
get "mod"(): $ModBase<(any)>
get "categories"(): $Set<(string)>
get "dictionary"(): $Map<(string), ($ExtendedConfig<(any), (any)>)>
get "configurables"(): $LinkedHashSet<($ExtendedConfig<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigHandler$Type = ($ConfigHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigHandler_ = $ConfigHandler$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/$IPartType" {
import {$IPartContainer, $IPartContainer$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$INetworkEvent, $INetworkEvent$Type} from "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEvent"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$PartPos, $PartPos$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartPos"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PartRenderPosition, $PartRenderPosition$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartRenderPosition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$INetworkEventListener, $INetworkEventListener$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkEventListener"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$PartTarget, $PartTarget$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartTarget"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IPartNetwork, $IPartNetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPartNetwork"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IPartNetworkElement, $IPartNetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPartNetworkElement"

export interface $IPartType<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $INetworkEventListener<($IPartNetworkElement<(P), (S)>)> {

 "getContainerProvider"(arg0: $PartPos$Type): $Optional<($MenuProvider)>
 "getUniqueName"(): $ResourceLocation
 "setTargetOffset"(arg0: S, arg1: $PartPos$Type, arg2: $Vec3i$Type): boolean
 "update"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$Type, arg1: $ItemStack$Type): S
 "getTarget"(arg0: $PartPos$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isEnabled"(arg0: S): boolean
 "loadTooltip"(arg0: S, arg1: $List$Type<($Component$Type)>): void
 "loadTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
 "writeExtraGuiDataOffsets"(arg0: $FriendlyByteBuf$Type, arg1: $PartPos$Type, arg2: $ServerPlayer$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "forceLightTransparency"(arg0: S): boolean
 "getMinimumUpdateInterval"(arg0: S): integer
 "getContainerProviderOffsets"(arg0: $PartPos$Type): $Optional<($MenuProvider)>
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S, arg4: integer, arg5: integer): void
 "getPartRenderPosition"(): $PartRenderPosition
 "getTargetSideOverride"(arg0: S): $Direction
 "createNetworkElement"(arg0: $IPartContainer$Type, arg1: $DimPos$Type, arg2: $Direction$Type): $INetworkElement
 "onBlockNeighborChange"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S, arg4: $BlockGetter$Type, arg5: $Block$Type, arg6: $BlockPos$Type): void
 "getContainerProviderSettings"(arg0: $PartPos$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $FriendlyByteBuf$Type, arg1: $PartPos$Type, arg2: $ServerPlayer$Type): void
 "onOffsetVariablesChanged"(arg0: $PartTarget$Type, arg1: S): void
 "getBlockModelPath"(): $ResourceLocation
 "getUpdateInterval"(arg0: S): integer
 "beforeNetworkKill"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "getBaseBlockState"(): $BlockState
 "onNetworkAddition"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "onPartActivated"(arg0: S, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockHitResult$Type): $InteractionResult
 "postUpdate"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $PartTarget$Type, arg3: S): void
 "getItemStack"(arg0: S, arg1: boolean): $ItemStack
 "supportsOffsets"(): boolean
 "isSolid"(arg0: S): boolean
 "getCloneItemStack"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: S): $ItemStack
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "setTargetSideOverride"(arg0: S, arg1: $Direction$Type): void
 "fromNBT"(arg0: $ValueDeseralizationContext$Type, arg1: $CompoundTag$Type): S
 "writeExtraGuiData"(arg0: $FriendlyByteBuf$Type, arg1: $PartPos$Type, arg2: $ServerPlayer$Type): void
 "isUpdate"(arg0: S): boolean
 "addDrops"(arg0: $PartTarget$Type, arg1: S, arg2: $List$Type<($ItemStack$Type)>, arg3: boolean, arg4: boolean): void
 "getTranslationKey"(): string
 "getConsumptionRate"(arg0: S): integer
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$Type, arg1: $Direction$Type): $BlockState
 "toNBT"(arg0: $CompoundTag$Type, arg1: S): void
 "defaultBlockState"(): S
 "updateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: S, arg3: $RandomSource$Type): void
 "getSubscribedEvents"(): $Set<($Class<(any)>)>
 "hasEventSubscriptions"(): boolean
 "onEvent"(arg0: $INetworkEvent$Type, arg1: $IPartNetworkElement$Type<(P), (S)>): void
}

export namespace $IPartType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartType$Type<P, S> = ($IPartType<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartType_<P, S> = $IPartType$Type<(P), (S)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectPropertyTypeInstance" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"

export interface $IAspectPropertyTypeInstance<T extends $IValueType<(V)>, V extends $IValue> {

 "getType"(): T
 "getValidator"(): $Predicate<(V)>
 "getTranslationKey"(): string
}

export namespace $IAspectPropertyTypeInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectPropertyTypeInstance$Type<T, V> = ($IAspectPropertyTypeInstance<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectPropertyTypeInstance_<T, V> = $IAspectPropertyTypeInstance$Type<(T), (V)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlockStatus$PropertyStatus" {
import {$Predicate, $Predicate$Type} from "packages/com/google/common/base/$Predicate"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IgnoredBlockStatus$Status, $IgnoredBlockStatus$Status$Type} from "packages/org/cyclops/integrateddynamics/core/block/$IgnoredBlockStatus$Status"

export class $IgnoredBlockStatus$PropertyStatus extends $EnumProperty<($IgnoredBlockStatus$Status)> {


public static "create"(arg0: string, arg1: $Collection$Type<($IgnoredBlockStatus$Status$Type)>): $IgnoredBlockStatus$PropertyStatus
public static "create"(arg0: string, arg1: $Predicate$Type<($IgnoredBlockStatus$Status$Type)>): $IgnoredBlockStatus$PropertyStatus
public static "create"(arg0: string): $IgnoredBlockStatus$PropertyStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredBlockStatus$PropertyStatus$Type = ($IgnoredBlockStatus$PropertyStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlockStatus$PropertyStatus_ = $IgnoredBlockStatus$PropertyStatus$Type;
}}
declare module "packages/org/cyclops/cyclopscore/inventory/$IInventoryLocation" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IInventoryLocation {

 "getUniqueName"(): $ResourceLocation
 "getInventory"(arg0: $Player$Type): $IItemHandlerModifiable
 "setItemInSlot"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): void
 "getItemInSlot"(arg0: $Player$Type, arg1: integer): $ItemStack
}

export namespace $IInventoryLocation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryLocation$Type = ($IInventoryLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryLocation_ = $IInventoryLocation$Type;
}}
declare module "packages/org/cyclops/cyclopscore/block/$BlockWithEntityGui" {
import {$CyclopsBlockEntity, $CyclopsBlockEntity$Type} from "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockWithEntity, $BlockWithEntity$Type} from "packages/org/cyclops/cyclopscore/block/$BlockWithEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockWithEntityGui extends $BlockWithEntity implements $IBlockGui {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), ($CyclopsBlockEntity$Type)>)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $BlockPos$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): void
public "getOpenStat"(): $Stat<($ResourceLocation)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
get "openStat"(): $Stat<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntityGui$Type = ($BlockWithEntityGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntityGui_ = $BlockWithEntityGui$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSqueezer$IngredientChance" {
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackFromIngredient, $ItemStackFromIngredient$Type} from "packages/org/cyclops/cyclopscore/recipe/$ItemStackFromIngredient"

export class $RecipeSqueezer$IngredientChance {

constructor(arg0: $Either$Type<($ItemStack$Type), ($ItemStackFromIngredient$Type)>, arg1: float)

public "getChance"(): float
public "getIngredient"(): $Either<($ItemStack), ($ItemStackFromIngredient)>
public "getIngredientFirst"(): $ItemStack
get "chance"(): float
get "ingredient"(): $Either<($ItemStack), ($ItemStackFromIngredient)>
get "ingredientFirst"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSqueezer$IngredientChance$Type = ($RecipeSqueezer$IngredientChance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSqueezer$IngredientChance_ = $RecipeSqueezer$IngredientChance$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemWrench" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PartPos, $PartPos$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemWrench$Mode, $ItemWrench$Mode$Type} from "packages/org/cyclops/integrateddynamics/item/$ItemWrench$Mode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWrench extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "incrementMode"(arg0: $ItemStack$Type): void
public "performPartAction"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $BlockHitResult$Type, arg1: $IPartType$Type<(P), (S)>, arg2: $IPartState$Type<(P)>, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $InteractionHand$Type, arg6: $PartPos$Type): $InteractionResult
public "setMode"(arg0: $ItemStack$Type, arg1: $ItemWrench$Mode$Type): void
public "getMode"(arg0: $ItemStack$Type): $ItemWrench$Mode
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWrench$Type = ($ItemWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWrench_ = $ItemWrench$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemLabeller" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemLocation, $ItemLocation$Type} from "packages/org/cyclops/cyclopscore/inventory/$ItemLocation"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemGui, $ItemGui$Type} from "packages/org/cyclops/cyclopscore/item/$ItemGui"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLabeller extends $ItemGui {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemLocation$Type): $MenuProvider
public "getContainerClass"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLabeller$Type = ($ItemLabeller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLabeller_ = $ItemLabeller$Type;
}}
declare module "packages/org/cyclops/cyclopscore/block/$BlockWithEntity" {
import {$CyclopsBlockEntity, $CyclopsBlockEntity$Type} from "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockWithEntity extends $BaseEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), ($CyclopsBlockEntity$Type)>)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "isPersistNbt"(): boolean
get "persistNbt"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntity$Type = ($BlockWithEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntity_ = $BlockWithEntity$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/aspect/$AspectUpdateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AspectUpdateType extends $Enum<($AspectUpdateType)> {
static readonly "NETWORK_TICK": $AspectUpdateType
static readonly "BLOCK_UPDATE": $AspectUpdateType
static readonly "NEVER": $AspectUpdateType


public static "values"(): ($AspectUpdateType)[]
public static "valueOf"(arg0: string): $AspectUpdateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectUpdateType$Type = (("never") | ("block_update") | ("network_tick")) | ($AspectUpdateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectUpdateType_ = $AspectUpdateType$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSerializerEnergyContainerCombination" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeEnergyContainerCombination, $RecipeEnergyContainerCombination$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeEnergyContainerCombination"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerEnergyContainerCombination implements $RecipeSerializer<($RecipeEnergyContainerCombination)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeEnergyContainerCombination
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeEnergyContainerCombination$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeEnergyContainerCombination
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeEnergyContainerCombination
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerEnergyContainerCombination$Type = ($RecipeSerializerEnergyContainerCombination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerEnergyContainerCombination_ = $RecipeSerializerEnergyContainerCombination$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$IPositionedNetworkElement" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INetworkElement, $INetworkElement$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetworkElement"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IPositionedNetworkElement extends $INetworkElement {

 "getPosition"(): $DimPos
 "update"(arg0: $INetwork$Type): void
 "getPriority"(): integer
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$Type): void
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$Type, arg1: integer, arg2: integer): void
 "revalidate"(arg0: $INetwork$Type): void
 "getUpdateInterval"(): integer
 "beforeNetworkKill"(arg0: $INetwork$Type): void
 "onPostRemoved"(arg0: $INetwork$Type): void
 "onNetworkAddition"(arg0: $INetwork$Type): boolean
 "afterNetworkAlive"(arg0: $INetwork$Type): void
 "onPreRemoved"(arg0: $INetwork$Type): void
 "onNetworkRemoval"(arg0: $INetwork$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$Type, arg1: $BlockGetter$Type, arg2: $Block$Type, arg3: $BlockPos$Type): void
 "canRevalidate"(arg0: $INetwork$Type): boolean
 "isUpdate"(): boolean
 "addDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean, arg2: boolean): void
 "compareTo"(arg0: $INetworkElement$Type): integer
}

export namespace $IPositionedNetworkElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPositionedNetworkElement$Type = ($IPositionedNetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPositionedNetworkElement_ = $IPositionedNetworkElement$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelProvider$BakedModelProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IVariableModelProvider$BakedModelProvider {

}

export namespace $IVariableModelProvider$BakedModelProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableModelProvider$BakedModelProvider$Type = ($IVariableModelProvider$BakedModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableModelProvider$BakedModelProvider_ = $IVariableModelProvider$BakedModelProvider$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IVariableModelBaked, $IVariableModelBaked$Type} from "packages/org/cyclops/integrateddynamics/api/client/model/$IVariableModelBaked"
import {$IVariable, $IVariable$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariable"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IVariableFacade$IValidator, $IVariableFacade$IValidator$Type} from "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade$IValidator"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$IPartNetwork, $IPartNetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPartNetwork"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IVariableFacade {

 "appendHoverText"(arg0: $List$Type<($Component$Type)>, arg1: $Level$Type): void
/**
 * 
 * @deprecated
 */
 "validate"(arg0: $IPartNetwork$Type, arg1: $IVariableFacade$IValidator$Type, arg2: $IValueType$Type<(any)>): void
 "validate"(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: $IVariableFacade$IValidator$Type, arg3: $IValueType$Type<(any)>): void
 "getId"(): integer
 "isValid"(): boolean
 "getVariableItemOverrideModel"(arg0: $BakedModel$Type, arg1: $ItemStack$Type, arg2: $ClientLevel$Type, arg3: $LivingEntity$Type): $BakedModel
 "getLabel"(): string
 "addModelOverlay"(arg0: $IVariableModelBaked$Type, arg1: $List$Type<($BakedQuad$Type)>, arg2: $RandomSource$Type, arg3: $ModelData$Type): void
 "renderISTER"(arg0: $ItemStack$Type, arg1: $ItemDisplayContext$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: integer): void
 "getOutputType"(): $IValueType<(any)>
 "getVariable"<V extends $IValue>(arg0: $INetwork$Type, arg1: $IPartNetwork$Type): $IVariable<(V)>
/**
 * 
 * @deprecated
 */
 "getVariable"<V extends $IValue>(arg0: $IPartNetwork$Type): $IVariable<(V)>
}

export namespace $IVariableFacade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableFacade$Type = ($IVariableFacade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableFacade_ = $IVariableFacade$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$INetworkEventListener" {
import {$INetworkEvent, $INetworkEvent$Type} from "packages/org/cyclops/integrateddynamics/api/network/event/$INetworkEvent"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $INetworkEventListener<E> {

 "getSubscribedEvents"(): $Set<($Class<(any)>)>
 "hasEventSubscriptions"(): boolean
 "onEvent"(arg0: $INetworkEvent$Type, arg1: E): void
}

export namespace $INetworkEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkEventListener$Type<E> = ($INetworkEventListener<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkEventListener_<E> = $INetworkEventListener$Type<(E)>;
}}
declare module "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$ILogicProgrammerElementType" {
import {$ILogicProgrammerElement, $ILogicProgrammerElement$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$ILogicProgrammerElement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILogicProgrammerElementType<E extends $ILogicProgrammerElement<(any), (any), (any)>> {

 "getUniqueName"(): $ResourceLocation
 "getName"(arg0: E): $ResourceLocation
 "getByName"(arg0: $ResourceLocation$Type): E
 "createElements"(): $List<(E)>
}

export namespace $ILogicProgrammerElementType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILogicProgrammerElementType$Type<E> = ($ILogicProgrammerElementType<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILogicProgrammerElementType_<E> = $ILogicProgrammerElementType$Type<(E)>;
}}
declare module "packages/org/cyclops/cyclopscore/item/$ItemGui" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemLocation, $ItemLocation$Type} from "packages/org/cyclops/cyclopscore/inventory/$ItemLocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGui extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any


public "openGuiForItemIndex"(arg0: $Level$Type, arg1: $ServerPlayer$Type, arg2: $ItemLocation$Type): void
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "getContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemLocation$Type): $MenuProvider
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$Type, arg1: $Level$Type, arg2: $ServerPlayer$Type, arg3: $ItemLocation$Type): void
public "getContainerClass"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Class<(any)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGui$Type = ($ItemGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGui_ = $ItemGui$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IAspectProperties, $IAspectProperties$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectProperties"
import {$PartPos, $PartPos$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartPos"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/property/$IAspectPropertyTypeInstance"
import {$PartTarget, $PartTarget$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartTarget"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"
import {$IPartNetwork, $IPartNetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$IPartNetwork"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$INetwork, $INetwork$Type} from "packages/org/cyclops/integrateddynamics/api/network/$INetwork"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"

export interface $IAspect<V extends $IValue, T extends $IValueType<(V)>> {

 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getUniqueName"(): $ResourceLocation
 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$Type, arg1: $IPartNetwork$Type, arg2: P, arg3: $PartTarget$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$Type, arg2: S, arg3: $IAspectProperties$Type): void
 "loadTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): void
 "getValueType"(): T
 "getDefaultProperties"(): $IAspectProperties
 "getPropertiesContainerProvider"(arg0: $PartPos$Type): $MenuProvider
 "getTranslationKey"(): string
}

export namespace $IAspect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspect$Type<V, T> = ($IAspect<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspect_<V, T> = $IAspect$Type<(V), (T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeDryingBasin" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$IInventoryFluid, $IInventoryFluid$Type} from "packages/org/cyclops/cyclopscore/recipe/type/$IInventoryFluid"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$ItemStackFromIngredient, $ItemStackFromIngredient$Type} from "packages/org/cyclops/cyclopscore/recipe/$ItemStackFromIngredient"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RecipeDryingBasin implements $Recipe<($IInventoryFluid)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $FluidStack$Type, arg3: $Either$Type<($ItemStack$Type), ($ItemStackFromIngredient$Type)>, arg4: $FluidStack$Type, arg5: integer)

public "getOutputItem"(): $Either<($ItemStack), ($ItemStackFromIngredient)>
public "matches"(arg0: $IInventoryFluid$Type, arg1: $Level$Type): boolean
public "getDuration"(): integer
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutputFluid"(): $FluidStack
public "getInputFluid"(): $FluidStack
public "getInputIngredient"(): $Ingredient
public "getOutputItemFirst"(): $ItemStack
public "assemble"(arg0: $IInventoryFluid$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $IInventoryFluid$Type): $NonNullList<($ItemStack)>
public "getType"(): $ResourceLocation
public "getOrCreateId"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getGroup"(): string
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "getMod"(): string
get "outputItem"(): $Either<($ItemStack), ($ItemStackFromIngredient)>
get "duration"(): integer
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "outputFluid"(): $FluidStack
get "inputFluid"(): $FluidStack
get "inputIngredient"(): $Ingredient
get "outputItemFirst"(): $ItemStack
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "schema"(): $RecipeSchema
set "group"(value: string)
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeDryingBasin$Type = ($RecipeDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeDryingBasin_ = $RecipeDryingBasin$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$IGuiInputElementValueType" {
import {$ISubGuiBox, $ISubGuiBox$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$ISubGuiBox"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConfigRenderPattern, $IConfigRenderPattern$Type} from "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IConfigRenderPattern"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IGuiInputElement, $IGuiInputElement$Type} from "packages/org/cyclops/integrateddynamics/api/client/gui/subgui/$IGuiInputElement"

export interface $IGuiInputElementValueType<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<(S), (G), (C)> {

 "setValidator"(arg0: $Predicate$Type<($IValue$Type)>): void
 "getValue"(): $IValue
 "setValue"(arg0: $IValue$Type, arg1: S): void
 "getName"(): $Component
 "validate"(): $Component
 "loadTooltip"(arg0: $List$Type<($Component$Type)>): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "getSymbol"(): string
 "getRenderPattern"(): $IConfigRenderPattern
}

export namespace $IGuiInputElementValueType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiInputElementValueType$Type<S, G, C> = ($IGuiInputElementValueType<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiInputElementValueType_<S, G, C> = $IGuiInputElementValueType$Type<(S), (G), (C)>;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemWrench$Mode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemWrench$Mode extends $Enum<($ItemWrench$Mode)> {
static readonly "DEFAULT": $ItemWrench$Mode
static readonly "OFFSET": $ItemWrench$Mode
static readonly "OFFSET_SIDE": $ItemWrench$Mode


public "getName"(): string
public static "values"(): ($ItemWrench$Mode)[]
public static "valueOf"(arg0: string): $ItemWrench$Mode
public "getLabel"(): string
get "name"(): string
get "label"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWrench$Mode$Type = (("default") | ("offset_side") | ("offset")) | ($ItemWrench$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWrench$Mode_ = $ItemWrench$Mode$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/network/$IPartNetwork" {
import {$IAspectRead, $IAspectRead$Type} from "packages/org/cyclops/integrateddynamics/api/part/aspect/$IAspectRead"
import {$IVariableFacade, $IVariableFacade$Type} from "packages/org/cyclops/integrateddynamics/api/item/$IVariableFacade"
import {$IPartState, $IPartState$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartState"
import {$PartPos, $PartPos$Type} from "packages/org/cyclops/integrateddynamics/api/part/$PartPos"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IVariable, $IVariable$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariable"
import {$ILazyExpressionValueCache, $ILazyExpressionValueCache$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/expression/$ILazyExpressionValueCache"
import {$DimPos, $DimPos$Type} from "packages/org/cyclops/cyclopscore/datastructure/$DimPos"
import {$IPartType, $IPartType$Type} from "packages/org/cyclops/integrateddynamics/api/part/$IPartType"

export interface $IPartNetwork extends $ILazyExpressionValueCache {

 "getProxy"(arg0: integer): $DimPos
 "addPart"(arg0: integer, arg1: $PartPos$Type): boolean
 "removePart"(arg0: integer): void
 "addProxy"(arg0: integer, arg1: $DimPos$Type): boolean
 "addVariableContainer"(arg0: $DimPos$Type): boolean
 "removeVariableContainer"(arg0: $DimPos$Type): void
 "getVariableFacade"(arg0: integer): $IVariableFacade
 "hasPart"(arg0: integer): boolean
 "getPartState"(arg0: integer): $IPartState<(any)>
 "notifyPartsChanged"(): void
 "removeProxy"(arg0: integer): void
 "hasVariableFacade"(arg0: integer): boolean
 "hasPartVariable"<V extends $IValue>(arg0: integer, arg1: $IAspectRead$Type<(V), (any)>): boolean
 "getPartType"(arg0: integer): $IPartType<(any), (any)>
 "getPartVariable"<V extends $IValue>(arg0: integer, arg1: $IAspectRead$Type<(V), (any)>): $IVariable<(V)>
 "getValue"(arg0: integer): $IValue
 "setValue"(arg0: integer, arg1: $IValue$Type): void
 "hasValue"(arg0: integer): boolean
 "removeValue"(arg0: integer): void
}

export namespace $IPartNetwork {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartNetwork$Type = ($IPartNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartNetwork_ = $IPartNetwork$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemBlockProxy" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBlockNBT, $ItemBlockNBT$Type} from "packages/org/cyclops/cyclopscore/item/$ItemBlockNBT"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockProxy extends $ItemBlockNBT {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

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
export type $ItemBlockProxy$Type = ($ItemBlockProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockProxy_ = $ItemBlockProxy$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariable" {
import {$IVariableInvalidateListener, $IVariableInvalidateListener$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IVariableInvalidateListener"
import {$IValue, $IValue$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValue"
import {$IValueType, $IValueType$Type} from "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$IValueType"

export interface $IVariable<V extends $IValue> extends $IVariableInvalidateListener {

 "getValue"(): V
 "getType"(): $IValueType<(V)>
 "addInvalidationListener"(arg0: $IVariableInvalidateListener$Type): void
 "invalidate"(): void
}

export namespace $IVariable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariable$Type<V> = ($IVariable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariable_<V> = $IVariable$Type<(V)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeEnergyContainerCombination" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $RecipeEnergyContainerCombination extends $CustomRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $CraftingBookCategory$Type, arg2: $Ingredient$Type, arg3: integer)

public "getMaxCapacity"(): integer
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getBatteryItem"(): $Ingredient
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "maxCapacity"(): integer
get "batteryItem"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeEnergyContainerCombination$Type = ($RecipeEnergyContainerCombination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeEnergyContainerCombination_ = $RecipeEnergyContainerCombination$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/logicprogrammer/$IConfigRenderPattern" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"

export interface $IConfigRenderPattern {

 "getWidth"(): integer
 "getHeight"(): integer
 "getSlotPositions"(): ($Pair<(integer), (integer)>)[]
 "getSymbolPosition"(): $Pair<(integer), (integer)>
}

export namespace $IConfigRenderPattern {
const NONE: $IConfigRenderPattern
const NONE_CANVAS_WIDE: $IConfigRenderPattern
const NONE_CANVAS: $IConfigRenderPattern
const SINGLE_SLOT: $IConfigRenderPattern
const RECIPE: $IConfigRenderPattern
const INFIX: $IConfigRenderPattern
const INFIX_LONG: $IConfigRenderPattern
const INFIX_VERYLONG: $IConfigRenderPattern
const PREFIX_1: $IConfigRenderPattern
const PREFIX_1_LONG: $IConfigRenderPattern
const INFIX_2: $IConfigRenderPattern
const INFIX_2_LONG: $IConfigRenderPattern
const INFIX_2_VERYLONG: $IConfigRenderPattern
const INFIX_2_LATE: $IConfigRenderPattern
const PREFIX_2: $IConfigRenderPattern
const PREFIX_2_LONG: $IConfigRenderPattern
const INFIX_3: $IConfigRenderPattern
const PREFIX_3: $IConfigRenderPattern
const PREFIX_3_LONG: $IConfigRenderPattern
const SUFFIX_1: $IConfigRenderPattern
const SUFFIX_1_LONG: $IConfigRenderPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigRenderPattern$Type = ($IConfigRenderPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigRenderPattern_ = $IConfigRenderPattern$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export interface $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer {

 "transform"(arg0: $CraftingContainer$Type, arg1: $ItemStack$Type): $ItemStack

(arg0: $CraftingContainer$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer$Type = ($RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer_ = $RecipeSerializerCraftingShapedCustomOutput$IOutputTransformer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/datastructure/$DimPos" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DimPos implements $Comparable<($DimPos)> {


public "getBlockPos"(): $BlockPos
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $DimPos$Type): integer
public static "of"(arg0: $Level$Type, arg1: $BlockPos$Type): $DimPos
public static "of"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BlockPos$Type): $DimPos
public static "of"(arg0: string, arg1: $BlockPos$Type): $DimPos
public "isLoaded"(): boolean
public "getLevelKey"(): $ResourceKey<($Level)>
public "getLevel"(arg0: boolean): $Level
public "getLevel"(): string
public "setWorldReference"(arg0: $WeakReference$Type<($Level$Type)>): void
public "getWorldReference"(): $WeakReference<($Level)>
public "withPosition"(arg0: $BlockPos$Type): $DimPos
get "blockPos"(): $BlockPos
get "loaded"(): boolean
get "levelKey"(): $ResourceKey<($Level)>
get "level"(): string
set "worldReference"(value: $WeakReference$Type<($Level$Type)>)
get "worldReference"(): $WeakReference<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimPos$Type = ($DimPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimPos_ = $DimPos$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/$IExternalCompat" {
import {$ICompatInitializer, $ICompatInitializer$Type} from "packages/org/cyclops/cyclopscore/modcompat/$ICompatInitializer"

export interface $IExternalCompat {

 "getId"(): string
 "getComment"(): string
 "isEnabledDefault"(): boolean
 "createInitializer"(): $ICompatInitializer
}

export namespace $IExternalCompat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExternalCompat$Type = ($IExternalCompat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExternalCompat_ = $IExternalCompat$Type;
}}
declare module "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeEnum$Info$Template" {
import {$ArgumentTypeEnum, $ArgumentTypeEnum$Type} from "packages/org/cyclops/cyclopscore/command/argument/$ArgumentTypeEnum"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ArgumentTypeEnum$Info$Template<T extends $Enum<(T)>> implements $ArgumentTypeInfo$Template<($ArgumentTypeEnum<(any)>)> {


public "type"(): $ArgumentTypeInfo<($ArgumentTypeEnum<(any)>), (any)>
public "instantiate"(arg0: $CommandBuildContext$Type): $ArgumentTypeEnum<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeEnum$Info$Template$Type<T> = ($ArgumentTypeEnum$Info$Template<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeEnum$Info$Template_<T> = $ArgumentTypeEnum$Info$Template$Type<(T)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSerializerMechanicalDryingBasin" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeMechanicalDryingBasin, $RecipeMechanicalDryingBasin$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeMechanicalDryingBasin"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerMechanicalDryingBasin implements $RecipeSerializer<($RecipeMechanicalDryingBasin)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeMechanicalDryingBasin
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeMechanicalDryingBasin$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeMechanicalDryingBasin
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeMechanicalDryingBasin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerMechanicalDryingBasin$Type = ($RecipeSerializerMechanicalDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerMechanicalDryingBasin_ = $RecipeSerializerMechanicalDryingBasin$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/$ItemStackFromIngredient" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackFromIngredient {

constructor(arg0: $List$Type<(string)>, arg1: string, arg2: $Ingredient$Type, arg3: integer)

public "getCount"(): integer
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $ItemStackFromIngredient
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "getFirstItemStack"(): $ItemStack
public "getIngredient"(): $Ingredient
get "count"(): integer
get "firstItemStack"(): $ItemStack
get "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackFromIngredient$Type = ($ItemStackFromIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackFromIngredient_ = $ItemStackFromIngredient$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemBlockDelay" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemBlockNBT, $ItemBlockNBT$Type} from "packages/org/cyclops/cyclopscore/item/$ItemBlockNBT"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockDelay extends $ItemBlockNBT {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

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
export type $ItemBlockDelay$Type = ($ItemBlockDelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockDelay_ = $ItemBlockDelay$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/$IMCHandler" {
import {$InterModComms$IMCMessage, $InterModComms$IMCMessage$Type} from "packages/net/minecraftforge/fml/$InterModComms$IMCMessage"
import {$IMCHandler$IIMCAction, $IMCHandler$IIMCAction$Type} from "packages/org/cyclops/cyclopscore/modcompat/$IMCHandler$IIMCAction"
import {$ModBase, $ModBase$Type} from "packages/org/cyclops/cyclopscore/init/$ModBase"

export class $IMCHandler {

constructor(arg0: $ModBase$Type<(any)>)

public "handle"(arg0: $InterModComms$IMCMessage$Type): void
public "registerAction"(arg0: string, arg1: $IMCHandler$IIMCAction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMCHandler$Type = ($IMCHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMCHandler_ = $IMCHandler$Type;
}}
declare module "packages/org/cyclops/cyclopscore/recipe/type/$IInventoryFluid" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IInventoryFluid extends $Container {

 "getFluidHandler"(): $IFluidHandler
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "setChanged"(): void
 "getMaxStackSize"(): integer
 "stillValid"(arg0: $Player$Type): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "countItem"(arg0: $Item$Type): integer
 "stopOpen"(arg0: $Player$Type): void
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "startOpen"(arg0: $Player$Type): void
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getStackInSlot"(slot: integer): $ItemStack
 "getWidth"(): integer
 "clear"(): void
 "getSlots"(): integer
 "setChanged"(): void
 "getHeight"(): integer
 "getSlotLimit"(slot: integer): integer
 "isMutable"(): boolean
 "asContainer"(): $Container
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getContainerSize"(): integer
 "getItem"(arg0: integer): $ItemStack
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "clearContent"(): void
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "clear"(ingredient: $Ingredient$Type): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
}

export namespace $IInventoryFluid {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryFluid$Type = ($IInventoryFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryFluid_ = $IInventoryFluid$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/block/$BlockCoalGenerator" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$Type} from "packages/org/cyclops/integrateddynamics/core/block/$BlockWithEntityGuiCabled"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockCoalGenerator extends $BlockWithEntityGuiCabled {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
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
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCoalGenerator$Type = ($BlockCoalGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCoalGenerator_ = $BlockCoalGenerator$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/item/$ItemOnTheDynamicsOfIntegration" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemLocation, $ItemLocation$Type} from "packages/org/cyclops/cyclopscore/inventory/$ItemLocation"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PlayerEvent$PlayerLoggedInEvent, $PlayerEvent$PlayerLoggedInEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$PlayerLoggedInEvent"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemGui, $ItemGui$Type} from "packages/org/cyclops/cyclopscore/item/$ItemGui"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemOnTheDynamicsOfIntegration extends $ItemGui {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onPlayerLoggedIn"(arg0: $PlayerEvent$PlayerLoggedInEvent$Type): void
public "getContainer"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemLocation$Type): $MenuProvider
public "getContainerClass"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOnTheDynamicsOfIntegration$Type = ($ItemOnTheDynamicsOfIntegration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemOnTheDynamicsOfIntegration_ = $ItemOnTheDynamicsOfIntegration$Type;
}}
declare module "packages/org/cyclops/cyclopscore/inventory/$ItemLocation" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IInventoryLocation, $IInventoryLocation$Type} from "packages/org/cyclops/cyclopscore/inventory/$IInventoryLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemLocation extends $Record {

constructor(inventoryLocation: $IInventoryLocation$Type, slot: integer)

public static "writeToPacketBuffer"(arg0: $FriendlyByteBuf$Type, arg1: $ItemLocation$Type): void
public "setItemStack"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "slot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItemStack"(arg0: $Player$Type): $ItemStack
public static "readFromPacketBuffer"(arg0: $FriendlyByteBuf$Type): $ItemLocation
public "inventoryLocation"(): $IInventoryLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLocation$Type = ($ItemLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLocation_ = $ItemLocation$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/path/$ISidedPathElement" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IPathElement, $IPathElement$Type} from "packages/org/cyclops/integrateddynamics/api/path/$IPathElement"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $ISidedPathElement extends $Comparable<($ISidedPathElement)> {

 "getPathElement"(): $IPathElement
 "getSide"(): $Direction
 "compareTo"(arg0: $ISidedPathElement$Type): integer
}

export namespace $ISidedPathElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedPathElement$Type = ($ISidedPathElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedPathElement_ = $ISidedPathElement$Type;
}}
declare module "packages/org/cyclops/cyclopscore/block/$BlockGui" {
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlockGui, $IBlockGui$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$Type} from "packages/org/cyclops/cyclopscore/block/$IBlockGui$IBlockContainerProvider"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockGui extends $Block implements $IBlockGui {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $BlockPos$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): void
public "getOpenStat"(): $Stat<($ResourceLocation)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$Type, arg1: $IBlockGui$IBlockContainerProvider$Type, arg2: $BlockState$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $InteractionHand$Type, arg7: $BlockHitResult$Type): $InteractionResult
get "openStat"(): $Stat<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGui$Type = ($BlockGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGui_ = $BlockGui$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/block/cable/$ICable" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICable {

 "destroy"(): void
 "disconnect"(arg0: $Direction$Type): void
 "isConnected"(arg0: $Direction$Type): boolean
 "getItemStack"(): $ItemStack
 "updateConnections"(): void
 "reconnect"(arg0: $Direction$Type): void
 "canConnect"(arg0: $ICable$Type, arg1: $Direction$Type): boolean
}

export namespace $ICable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICable$Type = ($ICable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICable_ = $ICable$Type;
}}
declare module "packages/org/cyclops/integratedterminals/inventory/container/$TerminalStorageState" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDirtyMarkListener, $IDirtyMarkListener$Type} from "packages/org/cyclops/cyclopscore/persist/$IDirtyMarkListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export class $TerminalStorageState {
static readonly "SETTING_TAB": string
static readonly "SETTING_SEARCH": string
static readonly "SETTING_BUTTON": string
static readonly "PLAYER_TAG_DEFAULT_KEY": string

constructor(arg0: $IDirtyMarkListener$Type)
constructor(arg0: $CompoundTag$Type, arg1: $IDirtyMarkListener$Type)

public "hasButton"(arg0: string, arg1: string): boolean
public "writeToPacketBuffer"(arg0: $FriendlyByteBuf$Type): void
public "setSearch"(arg0: string, arg1: integer, arg2: string): void
public "getButton"(arg0: string, arg1: string): $Tag
public "setDirtyMarkListener"(arg0: $IDirtyMarkListener$Type): void
public "hasSearch"(arg0: string, arg1: integer): boolean
public "getTag"(): $CompoundTag
public "getSearch"(arg0: string, arg1: integer): string
public "setButton"(arg0: string, arg1: string, arg2: $Tag$Type): void
public "setTag"(arg0: $CompoundTag$Type): void
public "getTab"(): string
public static "getPlayerDefault"(arg0: $Player$Type, arg1: $IDirtyMarkListener$Type): $TerminalStorageState
public "hasTab"(): boolean
public "setTab"(arg0: string): void
public static "setPlayerDefault"(arg0: $Player$Type, arg1: $TerminalStorageState$Type): void
public static "readFromPacketBuffer"(arg0: $FriendlyByteBuf$Type): $TerminalStorageState
set "dirtyMarkListener"(value: $IDirtyMarkListener$Type)
get "tag"(): $CompoundTag
set "tag"(value: $CompoundTag$Type)
get "tab"(): string
set "tab"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageState$Type = ($TerminalStorageState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageState_ = $TerminalStorageState$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSerializerSqueezer" {
import {$RecipeSqueezer, $RecipeSqueezer$Type} from "packages/org/cyclops/integrateddynamics/core/recipe/type/$RecipeSqueezer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeSerializerSqueezer implements $RecipeSerializer<($RecipeSqueezer)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RecipeSqueezer
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeSqueezer$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RecipeSqueezer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RecipeSqueezer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerSqueezer$Type = ($RecipeSerializerSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerSqueezer_ = $RecipeSerializerSqueezer$Type;
}}
declare module "packages/org/cyclops/cyclopscore/modcompat/capabilities/$ICapabilityConstructor" {
import {$ICapabilityTypeGetter, $ICapabilityTypeGetter$Type} from "packages/org/cyclops/cyclopscore/modcompat/capabilities/$ICapabilityTypeGetter"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityConstructor<C, T, H> extends $ICapabilityTypeGetter<(C)> {

 "createProvider"(arg0: T, arg1: H): $ICapabilityProvider
 "getCapability"(): $Capability<(C)>
}

export namespace $ICapabilityConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityConstructor$Type<C, T, H> = ($ICapabilityConstructor<(C), (T), (H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityConstructor_<C, T, H> = $ICapabilityConstructor$Type<(C), (T), (H)>;
}}
declare module "packages/org/cyclops/integrateddynamics/core/block/$BlockContainerCabled" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$Type} from "packages/org/cyclops/cyclopscore/blockentity/$CyclopsBlockEntity"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockWithEntity, $BlockWithEntity$Type} from "packages/org/cyclops/cyclopscore/block/$BlockWithEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockContainerCabled extends $BlockWithEntity {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), ($CyclopsBlockEntity$Type)>)

public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockContainerCabled$Type = ($BlockContainerCabled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockContainerCabled_ = $BlockContainerCabled$Type;
}}
declare module "packages/org/cyclops/integrateddynamics/api/evaluate/variable/$ValueDeseralizationContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export class $ValueDeseralizationContext extends $Record {

constructor(holderGetter: $HolderGetter$Type<($Block$Type)>)

public static "ofAllEnabled"(): $ValueDeseralizationContext
public static "ofClient"(): $ValueDeseralizationContext
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Level$Type): $ValueDeseralizationContext
public "holderGetter"(): $HolderGetter<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueDeseralizationContext$Type = ($ValueDeseralizationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueDeseralizationContext_ = $ValueDeseralizationContext$Type;
}}
