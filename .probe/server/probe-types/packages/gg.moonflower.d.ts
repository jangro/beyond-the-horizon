declare module "packages/gg/moonflower/etched/common/item/$PortalRadioItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortalRadioItem extends $BlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "getDescriptionId"(): string
public "registerBlocks"(map: $Map$Type<($Block$Type), ($Item$Type)>, item: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalRadioItem$Type = ($PortalRadioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalRadioItem_ = $PortalRadioItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$MinecartJukeboxItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinecartJukeboxItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "useOn"(useOnContext: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartJukeboxItem$Type = ($MinecartJukeboxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartJukeboxItem_ = $MinecartJukeboxItem$Type;
}}
declare module "packages/gg/moonflower/etched/api/record/$PlayableRecordItem" {
import {$Proxy, $Proxy$Type} from "packages/java/net/$Proxy"
import {$PlayableRecord, $PlayableRecord$Type} from "packages/gg/moonflower/etched/api/record/$PlayableRecord"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AlbumCover, $AlbumCover$Type} from "packages/gg/moonflower/etched/api/record/$AlbumCover"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$TrackData, $TrackData$Type} from "packages/gg/moonflower/etched/api/record/$TrackData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayableRecordItem extends $Item implements $PlayableRecord {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getAlbumCover"(stack: $ItemStack$Type, proxy: $Proxy$Type, resourceManager: $ResourceManager$Type): $CompletableFuture<($AlbumCover)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getMusic"(arg0: $ItemStack$Type): $Optional<(($TrackData)[])>
public "canPlay"(stack: $ItemStack$Type): boolean
public "getTrackCount"(arg0: $ItemStack$Type): integer
public "getAlbum"(arg0: $ItemStack$Type): $Optional<($TrackData)>
public "createEntitySound"(stack: $ItemStack$Type, entity: $Entity$Type, track: integer, attenuationDistance: integer): $Optional<(any)>
public "createEntitySound"(stack: $ItemStack$Type, entity: $Entity$Type, track: integer): $Optional<(any)>
public static "canShowMessage"(x: double, y: double, z: double): boolean
public static "getStackMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public static "isPlayableRecord"(stack: $ItemStack$Type): boolean
public static "stopEntityRecord"(entity: $Entity$Type): void
public static "playEntityRecord"(entity: $Entity$Type, record: $ItemStack$Type, restart: boolean): void
public static "getStackTrackCount"(stack: $ItemStack$Type): integer
public static "getStackAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableRecordItem$Type = ($PlayableRecordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableRecordItem_ = $PlayableRecordItem$Type;
}}
declare module "packages/gg/moonflower/etched/api/record/$AlbumCover" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelResourceLocation, $ModelResourceLocation$Type} from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"

export interface $AlbumCover {

}

export namespace $AlbumCover {
const EMPTY: $AlbumCover
function of(image: $NativeImage$Type): $AlbumCover
function of(location: $ResourceLocation$Type): $AlbumCover
function of(location: $ModelResourceLocation$Type): $AlbumCover
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumCover$Type = ($AlbumCover);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumCover_ = $AlbumCover$Type;
}}
declare module "packages/gg/moonflower/etched/core/mixin/client/$LevelRendererAccessor" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LevelRendererAccessor {

 "getPlayingRecords"(): $Map<($BlockPos), ($SoundInstance)>

(): $Map<($BlockPos), ($SoundInstance)>
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/gg/moonflower/etched/core/mixin/client/$GuiAccessor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $GuiAccessor {

 "getOverlayMessageString"(): $Component
 "setOverlayMessageTime"(arg0: integer): void
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiAccessor$Type = ($GuiAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiAccessor_ = $GuiAccessor$Type;
}}
declare module "packages/gg/moonflower/etched/core/mixin/$StructureTemplatePoolAccessor" {
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructureTemplatePoolAccessor {

 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>

(): $ObjectArrayList<($StructurePoolElement)>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$Type = ($StructureTemplatePoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplatePoolAccessor_ = $StructureTemplatePoolAccessor$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$BoomboxItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ContainerItem, $ContainerItem$Type} from "packages/gg/moonflower/etched/common/item/$ContainerItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BoomboxItem extends $Item implements $ContainerItem {
static readonly "PAUSED": $Component
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "constructMenu"(containerId: integer, inventory: $Inventory$Type, player: $Player$Type, index: integer): $AbstractContainerMenu
public static "getPlayingHand"(entity: $LivingEntity$Type): $InteractionHand
public "onEntityItemUpdate"(stack: $ItemStack$Type, entity: $ItemEntity$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(boombox: $ItemStack$Type, clickItem: $ItemStack$Type, slot: $Slot$Type, clickAction: $ClickAction$Type, player: $Player$Type, slotAccess: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(boombox: $ItemStack$Type, slot: $Slot$Type, clickAction: $ClickAction$Type, player: $Player$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public static "isPaused"(stack: $ItemStack$Type): boolean
public static "onLivingEntityUpdateClient"(entity: $LivingEntity$Type): void
public static "setRecord"(stack: $ItemStack$Type, record: $ItemStack$Type): void
public static "getRecord"(stack: $ItemStack$Type): $ItemStack
public static "hasRecord"(stack: $ItemStack$Type): boolean
public static "setPaused"(stack: $ItemStack$Type, paused: boolean): void
public "use"(item: $Item$Type, level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "findSlotMatchingItem"(inventory: $Inventory$Type, stack: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoomboxItem$Type = ($BoomboxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoomboxItem_ = $BoomboxItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$EtchedMusicDiscItem$LabelPattern" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EtchedMusicDiscItem$LabelPattern extends $Enum<($EtchedMusicDiscItem$LabelPattern)> {
static readonly "FLAT": $EtchedMusicDiscItem$LabelPattern
static readonly "CROSS": $EtchedMusicDiscItem$LabelPattern
static readonly "EYE": $EtchedMusicDiscItem$LabelPattern
static readonly "PARALLEL": $EtchedMusicDiscItem$LabelPattern
static readonly "STAR": $EtchedMusicDiscItem$LabelPattern
static readonly "GOLD": $EtchedMusicDiscItem$LabelPattern


public static "values"(): ($EtchedMusicDiscItem$LabelPattern)[]
public static "valueOf"(name: string): $EtchedMusicDiscItem$LabelPattern
public "isSimple"(): boolean
public "getTextures"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public "isColorable"(): boolean
get "simple"(): boolean
get "textures"(): $Pair<($ResourceLocation), ($ResourceLocation)>
get "colorable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtchedMusicDiscItem$LabelPattern$Type = (("eye") | ("gold") | ("star") | ("parallel") | ("flat") | ("cross")) | ($EtchedMusicDiscItem$LabelPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtchedMusicDiscItem$LabelPattern_ = $EtchedMusicDiscItem$LabelPattern$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$ContainerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $ContainerItem {

 "constructMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type, arg3: integer): $AbstractContainerMenu
 "use"(item: $Item$Type, level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>

(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type, arg3: integer): $AbstractContainerMenu
}

export namespace $ContainerItem {
function findSlotMatchingItem(inventory: $Inventory$Type, stack: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerItem$Type = ($ContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerItem_ = $ContainerItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/block/$AlbumJukeboxBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AlbumJukeboxBlock extends $BaseEntityBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "HAS_RECORD": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, blockPos2: $BlockPos$Type, bl: boolean): void
public "use"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, moving: boolean): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumJukeboxBlock$Type = ($AlbumJukeboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumJukeboxBlock_ = $AlbumJukeboxBlock$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$ComplexMusicLabelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SimpleMusicLabelItem, $SimpleMusicLabelItem$Type} from "packages/gg/moonflower/etched/common/item/$SimpleMusicLabelItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ComplexMusicLabelItem extends $SimpleMusicLabelItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "getPrimaryColor"(stack: $ItemStack$Type): integer
public static "setColor"(stack: $ItemStack$Type, primary: integer, secondary: integer): void
public static "getSecondaryColor"(itemStack: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComplexMusicLabelItem$Type = ($ComplexMusicLabelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComplexMusicLabelItem_ = $ComplexMusicLabelItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$SimpleMusicLabelItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SimpleMusicLabelItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public static "getAuthor"(stack: $ItemStack$Type): string
public static "setAuthor"(stack: $ItemStack$Type, author: string): void
public static "setTitle"(stack: $ItemStack$Type, title: string): void
public static "getTitle"(stack: $ItemStack$Type): string
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(itemStack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, i: integer, bl: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMusicLabelItem$Type = ($SimpleMusicLabelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMusicLabelItem_ = $SimpleMusicLabelItem$Type;
}}
declare module "packages/gg/moonflower/etched/api/record/$PlayableRecord" {
import {$Proxy, $Proxy$Type} from "packages/java/net/$Proxy"
import {$TrackData, $TrackData$Type} from "packages/gg/moonflower/etched/api/record/$TrackData"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AlbumCover, $AlbumCover$Type} from "packages/gg/moonflower/etched/api/record/$AlbumCover"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $PlayableRecord {

 "getMusic"(arg0: $ItemStack$Type): $Optional<(($TrackData)[])>
 "canPlay"(stack: $ItemStack$Type): boolean
 "getAlbumCover"(arg0: $ItemStack$Type, arg1: $Proxy$Type, arg2: $ResourceManager$Type): $CompletableFuture<($AlbumCover)>
 "getTrackCount"(arg0: $ItemStack$Type): integer
 "getAlbum"(arg0: $ItemStack$Type): $Optional<($TrackData)>
 "createEntitySound"(stack: $ItemStack$Type, entity: $Entity$Type, track: integer, attenuationDistance: integer): $Optional<(any)>
 "createEntitySound"(stack: $ItemStack$Type, entity: $Entity$Type, track: integer): $Optional<(any)>
}

export namespace $PlayableRecord {
function canShowMessage(x: double, y: double, z: double): boolean
function getStackMusic(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
function isPlayableRecord(stack: $ItemStack$Type): boolean
function stopEntityRecord(entity: $Entity$Type): void
function playEntityRecord(entity: $Entity$Type, record: $ItemStack$Type, restart: boolean): void
function getStackTrackCount(stack: $ItemStack$Type): integer
function getStackAlbum(stack: $ItemStack$Type): $Optional<($TrackData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableRecord$Type = ($PlayableRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableRecord_ = $PlayableRecord$Type;
}}
declare module "packages/gg/moonflower/etched/common/block/$RadioBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
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
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $RadioBlock extends $BaseEntityBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "PORTAL": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getMenuProvider"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type): $MenuProvider
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "neighborChanged"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, blockPos2: $BlockPos$Type, bl: boolean): void
public "isPathfindable"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, pathComputationType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, moving: boolean): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "useShapeForLightOcclusion"(blockState: $BlockState$Type): boolean
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadioBlock$Type = ($RadioBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadioBlock_ = $RadioBlock$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$EtchedMusicDiscItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TrackData, $TrackData$Type} from "packages/gg/moonflower/etched/api/record/$TrackData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PlayableRecordItem, $PlayableRecordItem$Type} from "packages/gg/moonflower/etched/api/record/$PlayableRecordItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EtchedMusicDiscItem$LabelPattern, $EtchedMusicDiscItem$LabelPattern$Type} from "packages/gg/moonflower/etched/common/item/$EtchedMusicDiscItem$LabelPattern"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EtchedMusicDiscItem extends $PlayableRecordItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public "getTrackCount"(stack: $ItemStack$Type): integer
public "getAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
public static "getDiscColor"(stack: $ItemStack$Type): integer
public static "setMusic"(stack: $ItemStack$Type, ...tracks: ($TrackData$Type)[]): void
public static "getPattern"(stack: $ItemStack$Type): $EtchedMusicDiscItem$LabelPattern
public static "setColor"(stack: $ItemStack$Type, discColor: integer, primaryColor: integer, secondaryColor: integer): void
public static "getLabelPrimaryColor"(stack: $ItemStack$Type): integer
public static "getLabelSecondaryColor"(stack: $ItemStack$Type): integer
public static "setPattern"(stack: $ItemStack$Type, pattern: $EtchedMusicDiscItem$LabelPattern$Type): void
public static "canShowMessage"(x: double, y: double, z: double): boolean
public static "getStackMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public static "isPlayableRecord"(stack: $ItemStack$Type): boolean
public static "stopEntityRecord"(entity: $Entity$Type): void
public static "playEntityRecord"(entity: $Entity$Type, record: $ItemStack$Type, restart: boolean): void
public static "getStackTrackCount"(stack: $ItemStack$Type): integer
public static "getStackAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtchedMusicDiscItem$Type = ($EtchedMusicDiscItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtchedMusicDiscItem_ = $EtchedMusicDiscItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$BlankMusicDiscItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlankMusicDiscItem extends $Item implements $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getColor"(itemStack: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankMusicDiscItem$Type = ($BlankMusicDiscItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankMusicDiscItem_ = $BlankMusicDiscItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/block/$EtchingTableBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $EtchingTableBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getMenuProvider"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type): $MenuProvider
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, pathComputationType: $PathComputationType$Type): boolean
public "use"(blockState: $BlockState$Type, level: $Level$Type, blockPos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "rotate"(blockState: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(blockState: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "useShapeForLightOcclusion"(blockState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtchingTableBlock$Type = ($EtchingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtchingTableBlock_ = $EtchingTableBlock$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$MusicLabelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$SimpleMusicLabelItem, $SimpleMusicLabelItem$Type} from "packages/gg/moonflower/etched/common/item/$SimpleMusicLabelItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MusicLabelItem extends $SimpleMusicLabelItem implements $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getColor"(itemStack: $ItemStack$Type): integer
public static "getLabelColor"(stack: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MusicLabelItem$Type = ($MusicLabelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MusicLabelItem_ = $MusicLabelItem$Type;
}}
declare module "packages/gg/moonflower/etched/common/item/$AlbumCoverItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PlayableRecordItem, $PlayableRecordItem$Type} from "packages/gg/moonflower/etched/api/record/$PlayableRecordItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TrackData, $TrackData$Type} from "packages/gg/moonflower/etched/api/record/$TrackData"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ContainerItem, $ContainerItem$Type} from "packages/gg/moonflower/etched/common/item/$ContainerItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlbumCoverItem extends $PlayableRecordItem implements $ContainerItem {
static readonly "MAX_RECORDS": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public "getTrackCount"(stack: $ItemStack$Type): integer
public "getAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
public "constructMenu"(containerId: integer, inventory: $Inventory$Type, player: $Player$Type, index: integer): $AbstractContainerMenu
public static "setRecords"(stack: $ItemStack$Type, records: $Collection$Type<($ItemStack$Type)>): void
public static "getRecords"(stack: $ItemStack$Type): $List<($ItemStack)>
public "canGrindstoneRepair"(stack: $ItemStack$Type): boolean
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getCoverStack"(stack: $ItemStack$Type): $Optional<($ItemStack)>
public static "setCover"(stack: $ItemStack$Type, record: $ItemStack$Type): void
public "onDestroyed"(itemEntity: $ItemEntity$Type): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(albumCover: $ItemStack$Type, clickItem: $ItemStack$Type, slot: $Slot$Type, clickAction: $ClickAction$Type, player: $Player$Type, slotAccess: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(albumCover: $ItemStack$Type, slot: $Slot$Type, clickAction: $ClickAction$Type, player: $Player$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, list: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "use"(item: $Item$Type, level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "findSlotMatchingItem"(inventory: $Inventory$Type, stack: $ItemStack$Type): integer
public static "canShowMessage"(x: double, y: double, z: double): boolean
public static "getStackMusic"(stack: $ItemStack$Type): $Optional<(($TrackData)[])>
public static "isPlayableRecord"(stack: $ItemStack$Type): boolean
public static "stopEntityRecord"(entity: $Entity$Type): void
public static "playEntityRecord"(entity: $Entity$Type, record: $ItemStack$Type, restart: boolean): void
public static "getStackTrackCount"(stack: $ItemStack$Type): integer
public static "getStackAlbum"(stack: $ItemStack$Type): $Optional<($TrackData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumCoverItem$Type = ($AlbumCoverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumCoverItem_ = $AlbumCoverItem$Type;
}}
declare module "packages/gg/moonflower/etched/api/record/$TrackData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $TrackData extends $Record {
static readonly "EMPTY": $TrackData
static readonly "CODEC": $Codec<($TrackData)>

constructor(url: string, artist: string, title: $Component$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "url"(): string
public "save"(nbt: $CompoundTag$Type): $CompoundTag
public "getDisplayName"(): $Component
public static "isValid"(nbt: $CompoundTag$Type): boolean
public "artist"(): string
public static "isValidURL"(url: string): boolean
public "withTitle"(title: $Component$Type): $TrackData
public "withTitle"(title: string): $TrackData
public "withUrl"(url: string): $TrackData
public static "isLocalSound"(url: string): boolean
public "withArtist"(artist: string): $TrackData
public "title"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackData$Type = ($TrackData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackData_ = $TrackData$Type;
}}
