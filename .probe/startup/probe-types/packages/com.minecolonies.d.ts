declare module "packages/com/minecolonies/api/colony/interactionhandling/$IChatPriority" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChatPriority {

 "getPriority"(): integer

(): integer
}

export namespace $IChatPriority {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChatPriority$Type = ($IChatPriority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChatPriority_ = $IChatPriority$Type;
}}
declare module "packages/com/minecolonies/api/colony/$IColony" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$IReproductionManager, $IReproductionManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IReproductionManager"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPermissions, $IPermissions$Type} from "packages/com/minecolonies/api/colony/permissions/$IPermissions"
import {$IStatisticsManager, $IStatisticsManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IStatisticsManager"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRaiderManager, $IRaiderManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager"
import {$IQuestManager, $IQuestManager$Type} from "packages/com/minecolonies/api/quests/$IQuestManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IWorkManager, $IWorkManager$Type} from "packages/com/minecolonies/api/colony/workorders/$IWorkManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEventManager, $IEventManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEventManager"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$IEventDescriptionManager, $IEventDescriptionManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEventDescriptionManager"
import {$ICitizenManager, $ICitizenManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$ICitizenManager"
import {$CitizenNameFile, $CitizenNameFile$Type} from "packages/com/minecolonies/api/colony/$CitizenNameFile"
import {$IColonyTagCapability, $IColonyTagCapability$Type} from "packages/com/minecolonies/api/colony/$IColonyTagCapability"
import {$IResearchManager, $IResearchManager$Type} from "packages/com/minecolonies/api/research/$IResearchManager"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ICitizen, $ICitizen$Type} from "packages/com/minecolonies/api/colony/$ICitizen"
import {$IGraveManager, $IGraveManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IGraveManager"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IVisitorManager, $IVisitorManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IVisitorManager"
import {$PlayerTeam, $PlayerTeam$Type} from "packages/net/minecraft/world/scores/$PlayerTeam"
import {$ColonyState, $ColonyState$Type} from "packages/com/minecolonies/api/colony/$ColonyState"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TickEvent$ServerTickEvent, $TickEvent$ServerTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$IColonyPackageManager, $IColonyPackageManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IColonyPackageManager"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IRegisteredStructureManager, $IRegisteredStructureManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IRegisteredStructureManager"
import {$TickEvent$LevelTickEvent, $TickEvent$LevelTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$LevelTickEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IColony {

 "isRemote"(): boolean
 "addVisitingPlayer"(arg0: $Player$Type): void
 "getVisitorManager"(): $IVisitorManager
 "hasBuilding"(arg0: string, arg1: integer, arg2: boolean): boolean
 "getCitizen"(arg0: integer): $ICitizen
 "getTextureStyleId"(): string
 "isCoordInColony"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getGraveManager"(): $IGraveManager
 "getTeamName"(): string
 "getName"(): string
 "write"(arg0: $CompoundTag$Type): $CompoundTag
 "read"(arg0: $CompoundTag$Type): void
 "getPermissions"(): $IPermissions
 "setName"(arg0: string): void
 "getState"(): $ColonyState
 "isActive"(): boolean
 "getID"(): integer
 "getDay"(): integer
 "onWorldTick"(arg0: $TickEvent$LevelTickEvent$Type): void
 "onServerTick"(arg0: $TickEvent$ServerTickEvent$Type): void
 "getDimension"(): $ResourceKey<($Level)>
 "addGuardToAttackers"(arg0: $AbstractEntityCitizen$Type, arg1: $Player$Type): void
 "removeVisitingPlayer"(arg0: $Player$Type): void
 "getEventDescriptionManager"(): $IEventDescriptionManager
 "getStatisticsManager"(): $IStatisticsManager
 "getImportantMessageEntityPlayers"(): $List<($Player)>
 "getLastContactInHours"(): integer
 "getRequesterBuildingForPosition"(arg0: $BlockPos$Type): $IRequester
 "getMercenaryUseTime"(): long
 "getOverallHappiness"(): double
 "isValidAttackingPlayer"(arg0: $Player$Type): boolean
 "isValidAttackingGuard"(arg0: $AbstractEntityCitizen$Type): boolean
 "setCanBeAutoDeleted"(arg0: boolean): void
 "useAdditionalChildTime"(arg0: integer): boolean
 "getReproductionManager"(): $IReproductionManager
 "getMessagePlayerEntities"(): $List<($Player)>
 "isColonyUnderAttack"(): boolean
 "getLoadedChunkCount"(): integer
 "onWorldUnload"(arg0: $Level$Type): void
 "getLoadedChunks"(): $Set<(long)>
 "markDirty"(): void
 "getCenter"(): $BlockPos
 "getEventManager"(): $IEventManager
 "getPackageManager"(): $IColonyPackageManager
 "getRaiderManager"(): $IRaiderManager
 "getWayPoints"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
 "getWayPoints"(): $Map<($BlockPos), ($BlockState)>
 "getCitizenManager"(): $ICitizenManager
 "isDay"(): boolean
 "getDistanceSquared"(arg0: $BlockPos$Type): long
 "getStructurePack"(): string
 "onWorldLoad"(arg0: $Level$Type): void
 "getRequestManager"(): $IRequestManager
 "getColonyFlag"(): $ListTag
 "hasTownHall"(): boolean
 "getWorkManager"(): $IWorkManager
 "canBeAutoDeleted"(): boolean
 "getColonyTag"(): $CompoundTag
 "hasWarehouse"(): boolean
 "usedMercenaries"(): void
 "getTeamColonyColor"(): $ChatFormatting
 "getCitizenNameFile"(): $CitizenNameFile
 "addFreePosition"(arg0: $BlockPos$Type): void
 "addWayPoint"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
 "isManualHiring"(): boolean
 "setTextureStyle"(arg0: string): void
 "addFreeBlock"(arg0: $Block$Type): void
 "getTicketedChunks"(): $Set<(long)>
 "setNameStyle"(arg0: string): void
 "canMoveIn"(): boolean
 "removeFreeBlock"(arg0: $Block$Type): void
 "removeFreePosition"(arg0: $BlockPos$Type): void
 "removeLoadedChunk"(arg0: long): void
 "setColonyColor"(arg0: $ChatFormatting$Type): void
 "getNameStyle"(): string
 "getQuestManager"(): $IQuestManager
 "updateHasChilds"(): void
 "addLoadedChunk"(arg0: long, arg1: $LevelChunk$Type): void
 "isManualHousing"(): boolean
 "setColonyFlag"(arg0: $ListTag$Type): void
 "getTeam"(): $PlayerTeam
 "getResearchManager"(): $IResearchManager
 "getBuildingManager"(): $IRegisteredStructureManager
 "setStructurePack"(arg0: string): void
 "getWorld"(): $Level
}

export namespace $IColony {
const CLOSE_COLONY_CAP: $Capability<($IColonyTagCapability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColony$Type = ($IColony);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColony_ = $IColony$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScepterLumberjack" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlockOverlayItem, $IBlockOverlayItem$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem"
import {$IBlockOverlayItem$OverlayBox, $IBlockOverlayItem$OverlayBox$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem$OverlayBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScepterLumberjack extends $AbstractItemMinecolonies implements $IBlockOverlayItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getOverlayBoxes"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $List<($IBlockOverlayItem$OverlayBox)>
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScepterLumberjack$Type = ($ItemScepterLumberjack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScepterLumberjack_ = $ItemScepterLumberjack$Type;
}}
declare module "packages/com/minecolonies/core/blocks/decorative/$BlockColonyFlagWallBanner" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractColonyFlagBanner, $AbstractColonyFlagBanner$Type} from "packages/com/minecolonies/api/blocks/decorative/$AbstractColonyFlagBanner"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockColonyFlagWallBanner extends $AbstractColonyFlagBanner<($BlockColonyFlagWallBanner)> {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "REGISTRY_NAME": string
static readonly "REGISTRY_NAME_WALL": string
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
public "getDescriptionId"(): string
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
get "descriptionId"(): string
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColonyFlagWallBanner$Type = ($BlockColonyFlagWallBanner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColonyFlagWallBanner_ = $BlockColonyFlagWallBanner$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IState {

}

export namespace $IState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IState$Type = ($IState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IState_ = $IState$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutCowboy" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutCowboy extends $AbstractBlockHut<($BlockHutCowboy)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutCowboy$Type = ($BlockHutCowboy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutCowboy_ = $BlockHutCowboy$Type;
}}
declare module "packages/com/minecolonies/api/research/effects/$IResearchEffectManager" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IResearchEffect, $IResearchEffect$Type} from "packages/com/minecolonies/api/research/effects/$IResearchEffect"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IResearchEffectManager {

 "getEffect"<W extends $IResearchEffect<(any)>>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(W)>): W
 "applyEffect"(arg0: $IResearchEffect$Type<(any)>): void
 "getEffectStrength"(arg0: $ResourceLocation$Type): double
 "removeAllEffects"(): void
}

export namespace $IResearchEffectManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResearchEffectManager$Type = ($IResearchEffectManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResearchEffectManager_ = $IResearchEffectManager$Type;
}}
declare module "packages/com/minecolonies/api/items/$IMinecoloniesFoodItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMinecoloniesFoodItem {

 "getTier"(): integer

(): integer
}

export namespace $IMinecoloniesFoodItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecoloniesFoodItem$Type = ($IMinecoloniesFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecoloniesFoodItem_ = $IMinecoloniesFoodItem$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutSawmill" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutSawmill extends $AbstractBlockHut<($BlockHutSawmill)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutSawmill$Type = ($BlockHutSawmill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutSawmill_ = $BlockHutSawmill$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemPharaoScepter" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BowItem, $BowItem$Type} from "packages/net/minecraft/world/item/$BowItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPharaoScepter extends $BowItem {
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
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

constructor(arg0: $Item$Properties$Type)

public "customArrow"(arg0: $AbstractArrow$Type): $AbstractArrow
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPharaoScepter$Type = ($ItemPharaoScepter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPharaoScepter_ = $ItemPharaoScepter$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IEventManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEventStructureManager, $IEventStructureManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEventStructureManager"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IColonyEvent, $IColonyEvent$Type} from "packages/com/minecolonies/api/colony/colonyEvents/$IColonyEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IEventManager {

 "getEventByID"(arg0: integer): $IColonyEvent
 "addEvent"(arg0: $IColonyEvent$Type): void
 "getAndTakeNextEventID"(): integer
 "getStructureManager"(): $IEventStructureManager
 "registerEntity"(arg0: $Entity$Type, arg1: integer): void
 "onEntityDeath"(arg0: $LivingEntity$Type, arg1: integer): void
 "getEvents"(): $Map<(integer), ($IColonyEvent)>
 "onColonyTick"(arg0: $IColony$Type): void
 "onNightFall"(): void
 "onTileEntityBreak"(arg0: integer, arg1: $BlockEntity$Type): void
 "unregisterEntity"(arg0: $Entity$Type, arg1: integer): void
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IEventManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventManager$Type = ($IEventManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventManager_ = $IEventManager$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScrollColonyTP" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractItemScroll, $AbstractItemScroll$Type} from "packages/com/minecolonies/core/items/$AbstractItemScroll"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollColonyTP extends $AbstractItemScroll {
static readonly "TAG_COLONY_DIM": string
static readonly "TAG_BUILDING_POS": string
static readonly "FAIL_RESPONSES_TOTAL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollColonyTP$Type = ($ItemScrollColonyTP);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollColonyTP_ = $ItemScrollColonyTP$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockMinecoloniesRack" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$RackType, $RackType$Type} from "packages/com/minecolonies/api/blocks/types/$RackType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractBlockMinecoloniesRack, $AbstractBlockMinecoloniesRack$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesRack"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"

export class $BlockMinecoloniesRack extends $AbstractBlockMinecoloniesRack<($BlockMinecoloniesRack)> implements $IMateriallyTexturedBlock {
static readonly "VARIANT": $EnumProperty<($RackType)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlock"(): $Block
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getComponents"(): $Collection<($IMateriallyTexturedBlockComponent)>
public "getRegistryName"(): $ResourceLocation
public "spawnAfterBreak"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: boolean): void
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "usesWorldSpecificTinting"(): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getRandomMaterials"(): $MaterialTextureData
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
get "block"(): $Block
get "components"(): $Collection<($IMateriallyTexturedBlockComponent)>
get "registryName"(): $ResourceLocation
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMinecoloniesRack$Type = ($BlockMinecoloniesRack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMinecoloniesRack_ = $BlockMinecoloniesRack$Type;
}}
declare module "packages/com/minecolonies/api/entity/pathfinding/proxy/$IWalkToProxy" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWalkToProxy {

 "walkToBlock"(arg0: $BlockPos$Type, arg1: integer): boolean
 "walkToBlock"(arg0: $BlockPos$Type, arg1: integer, arg2: boolean): boolean
 "getSpecializedProxy"(arg0: $BlockPos$Type, arg1: double): $BlockPos
 "isLivingAtSiteWithMove"(arg0: $Mob$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): boolean
 "reset"(): void
 "getEntity"(): $Mob
 "getWayPoints"(): $Set<($BlockPos)>
 "careAboutY"(): boolean
 "addToProxyList"(arg0: $BlockPos$Type): void
 "getProxyList"(): $List<($BlockPos)>
 "getCurrentProxy"(): $BlockPos
}

export namespace $IWalkToProxy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWalkToProxy$Type = ($IWalkToProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWalkToProxy_ = $IWalkToProxy$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenColonyHandler" {
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"

export interface $ICitizenColonyHandler {

 "getColonyId"(): integer
 "updateColonyClient"(): void
 "setColonyId"(arg0: integer): void
 "onSyncDataUpdate"(arg0: $EntityDataAccessor$Type<(any)>): void
 "onCitizenRemoved"(): void
 "registerWithColony"(arg0: integer, arg1: integer): void
 "getWorkBuilding"(): $IBuilding
 "getHomeBuilding"(): $IBuilding
 "getPerBuildingFoodCost"(): double
 "getColony"(): $IColony
}

export namespace $ICitizenColonyHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenColonyHandler$Type = ($ICitizenColonyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenColonyHandler_ = $ICitizenColonyHandler$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScanAnalyzer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$Type} from "packages/com/ldtteam/structurize/items/$AbstractItemWithPosSelector"

export class $ItemScanAnalyzer extends $AbstractItemWithPosSelector {
static "TEMP_SCAN": string
static "LAST_TIME": string
static "blueprint": $Blueprint
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)
constructor(arg0: $Item$Properties$Type)

public "onAirRightClick"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $ItemStack$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public static "saveStructure"(arg0: $Level$Type, arg1: $Player$Type, arg2: $AABB$Type): $Blueprint
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScanAnalyzer$Type = ($ItemScanAnalyzer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScanAnalyzer_ = $ItemScanAnalyzer$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemCrop" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$MinecoloniesCropBlock, $MinecoloniesCropBlock$Type} from "packages/com/minecolonies/core/blocks/$MinecoloniesCropBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCrop extends $BlockItem {
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

constructor(arg0: $MinecoloniesCropBlock$Type, arg1: $Item$Properties$Type, arg2: $TagKey$Type<($Biome$Type)>)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canBePlantedIn"(arg0: $Holder$Type<($Biome$Type)>): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCrop$Type = ($ItemCrop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCrop_ = $ItemCrop$Type;
}}
declare module "packages/com/minecolonies/api/colony/$IColonyView" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$IPermissions, $IPermissions$Type} from "packages/com/minecolonies/api/colony/permissions/$IPermissions"
import {$IStatisticsManager, $IStatisticsManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IStatisticsManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IRaiderManager, $IRaiderManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager"
import {$IWorkOrderView, $IWorkOrderView$Type} from "packages/com/minecolonies/api/colony/workorders/$IWorkOrderView"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEventManager, $IEventManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEventManager"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICitizenManager, $ICitizenManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$ICitizenManager"
import {$IResearchManager, $IResearchManager$Type} from "packages/com/minecolonies/api/research/$IResearchManager"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGraveManager, $IGraveManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IGraveManager"
import {$IVisitorManager, $IVisitorManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IVisitorManager"
import {$ColonyState, $ColonyState$Type} from "packages/com/minecolonies/api/colony/$ColonyState"
import {$TickEvent$ServerTickEvent, $TickEvent$ServerTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent"
import {$IColonyPackageManager, $IColonyPackageManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IColonyPackageManager"
import {$IRegisteredStructureManager, $IRegisteredStructureManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IRegisteredStructureManager"
import {$ITownHallView, $ITownHallView$Type} from "packages/com/minecolonies/api/colony/buildings/workerbuildings/$ITownHallView"
import {$IMessage, $IMessage$Type} from "packages/com/minecolonies/api/network/$IMessage"
import {$IReproductionManager, $IReproductionManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IReproductionManager"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$ColonyPlayer, $ColonyPlayer$Type} from "packages/com/minecolonies/api/colony/permissions/$ColonyPlayer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$IQuestManager, $IQuestManager$Type} from "packages/com/minecolonies/api/quests/$IQuestManager"
import {$IWorkManager, $IWorkManager$Type} from "packages/com/minecolonies/api/colony/workorders/$IWorkManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEventDescriptionManager, $IEventDescriptionManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEventDescriptionManager"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CitizenNameFile, $CitizenNameFile$Type} from "packages/com/minecolonies/api/colony/$CitizenNameFile"
import {$PlayerTeam, $PlayerTeam$Type} from "packages/net/minecraft/world/scores/$PlayerTeam"
import {$CompactColonyReference, $CompactColonyReference$Type} from "packages/com/minecolonies/api/colony/$CompactColonyReference"
import {$IField, $IField$Type} from "packages/com/minecolonies/api/colony/fields/$IField"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$TickEvent$LevelTickEvent, $TickEvent$LevelTickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent$LevelTickEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IColonyView extends $IColony {

 "isRemote"(): boolean
 "addVisitingPlayer"(arg0: $Player$Type): void
 "getCitizens"(): $Map<(integer), ($ICitizenDataView)>
 "getCitizen"(arg0: integer): $ICitizenDataView
 "isCoordInColony"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getTownHall"(): $ITownHallView
 "addPlayer"(arg0: string): void
 "removePlayer"(arg0: $UUID$Type): void
 "getName"(): string
 "getFields"(arg0: $Predicate$Type<($IField$Type)>): $List<($IField)>
 "getField"(arg0: $Predicate$Type<($IField$Type)>): $IField
 "getPermissions"(): $IPermissions
 "setName"(arg0: string): void
 "getID"(): integer
 "getDimension"(): $ResourceKey<($Level)>
 "removeVisitingPlayer"(arg0: $Player$Type): void
 "handleColonyViewMessage"(arg0: $FriendlyByteBuf$Type, arg1: $Level$Type, arg2: boolean): $IMessage
 "handleColonyBuildingViewMessage"(arg0: $BlockPos$Type, arg1: $FriendlyByteBuf$Type): $IMessage
 "handleColonyViewCitizensMessage"(arg0: integer, arg1: $FriendlyByteBuf$Type): $IMessage
 "handlePermissionsViewMessage"(arg0: $FriendlyByteBuf$Type): $IMessage
 "handleColonyViewWorkOrderMessage"(arg0: $FriendlyByteBuf$Type): $IMessage
 "getLastContactInHours"(): integer
 "getRequesterBuildingForPosition"(arg0: $BlockPos$Type): $IRequester
 "getOverallHappiness"(): double
 "getCitizenCountLimit"(): integer
 "handleColonyViewVisitorMessage"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "handleColonyFieldViewUpdateMessage"(arg0: $Set$Type<($IField$Type)>): void
 "getPlayers"(): $Map<($UUID), ($ColonyPlayer)>
 "markDirty"(): void
 "getCenter"(): $BlockPos
 "areSpiesEnabled"(): boolean
 "getDistanceSquared"(arg0: $BlockPos$Type): long
 "getStructurePack"(): string
 "handleColonyViewRemoveBuildingMessage"(arg0: $BlockPos$Type): $IMessage
 "handleColonyViewRemoveWorkOrderMessage"(arg0: integer): $IMessage
 "handleColonyViewRemoveCitizenMessage"(arg0: integer): $IMessage
 "handleColonyViewResearchManagerUpdate"(arg0: $CompoundTag$Type): void
 "getRequestManager"(): $IRequestManager
 "getBuildings"(): $List<($IBuildingView)>
 "hasTownHall"(): boolean
 "canBeAutoDeleted"(): boolean
 "hasWarehouse"(): boolean
 "addFreePosition"(arg0: $BlockPos$Type): void
 "isManualHiring"(): boolean
 "addFreeBlock"(arg0: $Block$Type): void
 "canMoveIn"(): boolean
 "removeFreeBlock"(arg0: $Block$Type): void
 "removeFreePosition"(arg0: $BlockPos$Type): void
 "isManualHousing"(): boolean
 "getCitizenCount"(): integer
 "getFreePositions"(): $List<($BlockPos)>
 "getWorkOrder"(arg0: integer): $IWorkOrderView
 "getFreeBlocks"(): $List<($Block)>
 "getWorkOrders"(): $Collection<($IWorkOrderView)>
 "getAllies"(): $List<($CompactColonyReference)>
 "getNameFileIds"(): $List<(string)>
 "getVisitor"(arg0: integer): $ICitizenDataView
 "isRaiding"(): boolean
 "getFeuds"(): $List<($CompactColonyReference)>
 "getLastSpawnPoints"(): $List<($BlockPos)>
 "getTeam"(): $PlayerTeam
 "getBuilding"(arg0: integer, arg1: integer, arg2: integer): $IBuildingView
 "getBuilding"(arg0: $BlockPos$Type): $IBuildingView
 "getWorld"(): $Level
 "getVisitorManager"(): $IVisitorManager
 "hasBuilding"(arg0: string, arg1: integer, arg2: boolean): boolean
 "getTextureStyleId"(): string
 "getGraveManager"(): $IGraveManager
 "getTeamName"(): string
 "write"(arg0: $CompoundTag$Type): $CompoundTag
 "read"(arg0: $CompoundTag$Type): void
 "getState"(): $ColonyState
 "isActive"(): boolean
 "getDay"(): integer
 "onWorldTick"(arg0: $TickEvent$LevelTickEvent$Type): void
 "onServerTick"(arg0: $TickEvent$ServerTickEvent$Type): void
 "addGuardToAttackers"(arg0: $AbstractEntityCitizen$Type, arg1: $Player$Type): void
 "getEventDescriptionManager"(): $IEventDescriptionManager
 "getStatisticsManager"(): $IStatisticsManager
 "getImportantMessageEntityPlayers"(): $List<($Player)>
 "getMercenaryUseTime"(): long
 "isValidAttackingPlayer"(arg0: $Player$Type): boolean
 "isValidAttackingGuard"(arg0: $AbstractEntityCitizen$Type): boolean
 "setCanBeAutoDeleted"(arg0: boolean): void
 "useAdditionalChildTime"(arg0: integer): boolean
 "getReproductionManager"(): $IReproductionManager
 "getMessagePlayerEntities"(): $List<($Player)>
 "isColonyUnderAttack"(): boolean
 "getLoadedChunkCount"(): integer
 "onWorldUnload"(arg0: $Level$Type): void
 "getLoadedChunks"(): $Set<(long)>
 "getEventManager"(): $IEventManager
 "getPackageManager"(): $IColonyPackageManager
 "getRaiderManager"(): $IRaiderManager
 "getWayPoints"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
 "getWayPoints"(): $Map<($BlockPos), ($BlockState)>
 "getCitizenManager"(): $ICitizenManager
 "isDay"(): boolean
 "onWorldLoad"(arg0: $Level$Type): void
 "getColonyFlag"(): $ListTag
 "getWorkManager"(): $IWorkManager
 "getColonyTag"(): $CompoundTag
 "usedMercenaries"(): void
 "getTeamColonyColor"(): $ChatFormatting
 "getCitizenNameFile"(): $CitizenNameFile
 "addWayPoint"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
 "setTextureStyle"(arg0: string): void
 "getTicketedChunks"(): $Set<(long)>
 "setNameStyle"(arg0: string): void
 "removeLoadedChunk"(arg0: long): void
 "setColonyColor"(arg0: $ChatFormatting$Type): void
 "getNameStyle"(): string
 "getQuestManager"(): $IQuestManager
 "updateHasChilds"(): void
 "addLoadedChunk"(arg0: long, arg1: $LevelChunk$Type): void
 "setColonyFlag"(arg0: $ListTag$Type): void
 "getResearchManager"(): $IResearchManager
 "getBuildingManager"(): $IRegisteredStructureManager
 "setStructurePack"(arg0: string): void
}

export namespace $IColonyView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColonyView$Type = ($IColonyView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColonyView_ = $IColonyView$Type;
}}
declare module "packages/com/minecolonies/api/crafting/$CompostRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CompostRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer)

public "getFermentTime"(): integer
public static "individualize"(arg0: $Item$Type, arg1: $CompostRecipe$Type): $CompostRecipe
public "getStrength"(): integer
public "getInput"(): $Ingredient
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
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
get "fermentTime"(): integer
get "strength"(): integer
get "input"(): $Ingredient
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
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
export type $CompostRecipe$Type = ($CompostRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompostRecipe_ = $CompostRecipe$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView" {
import {$IModuleContainerView, $IModuleContainerView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IModuleContainerView"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IBuildingView extends $IRequester, $IModuleContainerView {

 "getOpenRequestsOfBuilding"(): $ImmutableList<($IRequest<(any)>)>
 "getParent"(): $BlockPos
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "getPosition"(): $BlockPos
 "getRotation"(): integer
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "openGui"(arg0: boolean): void
 "getBuildingDisplayName"(): string
 "getOpenRequestsOfType"<R>(arg0: $ICitizenDataView$Type, arg1: $Class$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenDataView$Type, arg1: $Class$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "getContainerList"(): $List<($BlockPos)>
 "setCustomName"(arg0: string): void
 "getStructurePath"(): string
 "getOpenRequests"(arg0: $ICitizenDataView$Type): $ImmutableList<($IRequest<(any)>)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(): integer
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getBuildingType"(): $BuildingEntry
 "isDeconstructed"(): boolean
 "getWindow"(): $BOWindow
 "getOpenRequestsByCitizen"(): $Map<(integer), ($Collection<($IToken<(any)>)>)>
 "getCurrentWorkOrderLevel"(): integer
 "getStructurePack"(): string
 "getCustomName"(): string
 "getColony"(): $IColonyView
 "getBuildingLevel"(): integer
 "getAllAssignedCitizens"(): $Set<(integer)>
 "getBuildingMaxLevel"(): integer
 "isBuildingMaxLevel"(): boolean
 "isRepairing"(): boolean
 "getBuildingDmPrio"(): integer
 "isBuilding"(): boolean
 "isDeconstructing"(): boolean
 "allowsAssignment"(): boolean
 "getResolverIds"(): $ImmutableCollection<($IToken<(any)>)>
 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "registerModule"(arg0: $IBuildingModuleView$Type): void
 "getModuleViewByType"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): T
 "getModuleViewMatching"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>, arg1: $Predicate$Type<(any)>): T
 "getModuleViews"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): $List<(T)>
 "getAllModuleViews"(): $List<($IBuildingModuleView)>
 "hasModuleView"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModuleView"(arg0: integer): $IBuildingModuleView
 "getModuleView"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): V
}

export namespace $IBuildingView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuildingView$Type = ($IBuildingView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuildingView_ = $IBuildingView$Type;
}}
declare module "packages/com/minecolonies/api/colony/interactionhandling/$IInteractionResponseHandler" {
import {$IChatPriority, $IChatPriority$Type} from "packages/com/minecolonies/api/colony/interactionhandling/$IChatPriority"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IInteractionResponseHandler extends $INBTSerializable<($CompoundTag)> {

 "onWindowOpened"(arg0: $BOWindow$Type, arg1: $ICitizenDataView$Type): void
 "removeParent"(arg0: $Component$Type): void
 "getInteractionIcon"(): $ResourceLocation
 "getResponseResult"(arg0: $Component$Type): $Component
 "getInquiry"(): $Component
 "getInquiry"(arg0: $Player$Type): $Component
 "getPriority"(): $IChatPriority
 "getId"(): $Component
 "getType"(): string
 "isValid"(arg0: $ICitizenData$Type): boolean
 "onClosed"(): void
 "onOpened"(arg0: $Player$Type): void
 "onClientResponseTriggered"(arg0: integer, arg1: $Player$Type, arg2: $ICitizenDataView$Type, arg3: $BOWindow$Type): boolean
 "getPossibleResponses"(): $List<($Component)>
 "onServerResponseTriggered"(arg0: integer, arg1: $Player$Type, arg2: $ICitizenData$Type): void
 "genChildInteractions"(): $List<($IInteractionResponseHandler)>
 "isVisible"(arg0: $Level$Type): boolean
 "isPrimary"(): boolean
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IInteractionResponseHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInteractionResponseHandler$Type = ($IInteractionResponseHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInteractionResponseHandler_ = $IInteractionResponseHandler$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutMechanic" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutMechanic extends $AbstractBlockHut<($BlockHutMechanic)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutMechanic$Type = ($BlockHutMechanic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutMechanic_ = $BlockHutMechanic$Type;
}}
declare module "packages/com/minecolonies/core/entity/pathfinding/pathresults/$TreePathResult" {
import {$PathResult, $PathResult$Type} from "packages/com/minecolonies/core/entity/pathfinding/pathresults/$PathResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TreePathResult extends $PathResult<(any)> {
 "treeLocation": $BlockPos
 "costPerDist": double
 "searchedNodes": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreePathResult$Type = ($TreePathResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreePathResult_ = $TreePathResult$Type;
}}
declare module "packages/com/minecolonies/api/colony/fields/$IField" {
import {$IModuleContainer, $IModuleContainer$Type} from "packages/com/minecolonies/api/colony/modules/$IModuleContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFieldModule, $IFieldModule$Type} from "packages/com/minecolonies/api/colony/fields/modules/$IFieldModule"
import {$FieldRegistries$FieldEntry, $FieldRegistries$FieldEntry$Type} from "packages/com/minecolonies/api/colony/fields/registry/$FieldRegistries$FieldEntry"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export interface $IField extends $IModuleContainer<($IFieldModule)> {

 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "getFieldType"(): $FieldRegistries$FieldEntry
 "getPosition"(): $BlockPos
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(arg0: $FriendlyByteBuf$Type): void
 "resetOwningBuilding"(): void
 "setBuilding"(arg0: $BlockPos$Type): void
 "getBuildingId"(): $BlockPos
 "isValidPlacement"(arg0: $IColony$Type): boolean
 "isTaken"(): boolean
 "getSqDistance"(arg0: $IBuildingView$Type): integer
 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: $IFieldModule$Type): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
}

export namespace $IField {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IField$Type = ($IField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IField_ = $IField$Type;
}}
declare module "packages/com/minecolonies/api/blocks/interfaces/$IRSComponentBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRSComponentBlock {

}

export namespace $IRSComponentBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRSComponentBlock$Type = ($IRSComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRSComponentBlock_ = $IRSComponentBlock$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutBeekeeper" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutBeekeeper extends $AbstractBlockHut<($BlockHutBeekeeper)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutBeekeeper$Type = ($BlockHutBeekeeper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutBeekeeper_ = $BlockHutBeekeeper$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutTownHall" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockHutTownHall extends $AbstractBlockHut<($BlockHutTownHall)> {
static "timeout": long
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getValidBreak"(): boolean
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public "getRequirements"(arg0: $ClientLevel$Type, arg1: $BlockPos$Type, arg2: $LocalPlayer$Type): $List<($MutableComponent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "validBreak"(): boolean
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutTownHall$Type = ($BlockHutTownHall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutTownHall_ = $BlockHutTownHall$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutAlchemist" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutAlchemist extends $AbstractBlockHut<($BlockHutAlchemist)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutAlchemist$Type = ($BlockHutAlchemist);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutAlchemist_ = $BlockHutAlchemist$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILocation {

 "getDimension"(): $ResourceKey<($Level)>
 "getInDimensionLocation"(): $BlockPos
 "isReachableFromLocation"(arg0: $ILocation$Type): boolean
}

export namespace $ILocation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocation$Type = ($ILocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILocation_ = $ILocation$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/resolver/retrying/$IRetryingRequestResolver" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$ITickable, $ITickable$Type} from "packages/com/minecolonies/api/tileentities/$ITickable"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IRetryable, $IRetryable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRetryable"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$IQueuedRequestResolver, $IQueuedRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IQueuedRequestResolver"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IRetryingRequestResolver extends $IQueuedRequestResolver<($IRetryable)>, $ITickable {

 "getCurrentReassignmentAttempt"(): integer
 "getCurrentlyBeingReassignedRequest"(): $IToken<(any)>
 "getMaximalDelayBetweenRetriesInTicks"(): integer
 "updateManager"(arg0: $IRequestManager$Type): void
 "isReassigning"(): boolean
 "getMaximalTries"(): integer
 "getAllAssignedRequests"(): $ImmutableList<($IToken<(any)>)>
 "onSystemReset"(): void
 "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
 "tick"(): void
 "onAssignedRequestBeingCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "attemptResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IToken<(any)>)>
 "onAssignedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getSuitabilityMetric"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): integer
 "getFollowupRequestForCompletion"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IRequest<(any)>)>
 "getPriority"(): integer
 "onColonyUpdate"(arg0: $IRequestManager$Type, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): void
 "canResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): boolean
 "onRequestAssigned"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>, arg2: boolean): void
 "resolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequestType"(): $TypeToken<(any)>
 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
}

export namespace $IRetryingRequestResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRetryingRequestResolver$Type = ($IRetryingRequestResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRetryingRequestResolver_ = $IRetryingRequestResolver$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemSpear" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$TridentItem, $TridentItem$Type} from "packages/net/minecraft/world/item/$TridentItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSpear extends $TridentItem {
static readonly "THROW_THRESHOLD_TIME": integer
static readonly "BASE_DAMAGE": float
static readonly "SHOOT_POWER": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSpear$Type = ($ItemSpear);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSpear_ = $ItemSpear$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockStash" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
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
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$IRSComponentBlock, $IRSComponentBlock$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IRSComponentBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockStash extends $AbstractBlockHut<($BlockStash)> implements $IRSComponentBlock {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStash$Type = ($BlockStash);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStash_ = $BlockStash$Type;
}}
declare module "packages/com/minecolonies/api/tileentities/$ITickable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITickable {

 "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
 "tick"(): void
}

export namespace $ITickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickable$Type = ($ITickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickable_ = $ITickable$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/$ITickingStateAI" {
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"

export interface $ITickingStateAI {

 "getState"(): $IState
 "tick"(): void
 "onRemoval"(): void
 "resetAI"(): void
}

export namespace $ITickingStateAI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickingStateAI$Type = ($ITickingStateAI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickingStateAI_ = $ITickingStateAI$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/workerbuildings/$IWareHouse" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IWareHouse extends $IBuilding {

 "hasContainerPosition"(arg0: $BlockPos$Type): boolean
 "canAccessWareHouse"(arg0: $ICitizenData$Type): boolean
 "upgradeContainers"(arg0: $Level$Type): void
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean): integer
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean, arg3: $JobEntry$Type): integer
 "hasCitizenCompletedRequestsToPickup"(arg0: $ICitizenData$Type): boolean
 "upgradeBuildingLevelToSchematicData"(): void
 "overruleNextOpenRequestOfCitizenWithStack"(arg0: $ICitizenData$Type, arg1: $ItemStack$Type): boolean
 "onRestart"(arg0: $ICitizenData$Type): void
 "destroy"(): void
 "canEat"(arg0: $ItemStack$Type): boolean
 "pickUp"(arg0: $Player$Type): void
 "isBuilt"(): boolean
 "getHandlers"(): $List<($IItemHandler)>
 "onPlayerEnterNearby"(arg0: $Player$Type): void
 "canBeBuiltByBuilder"(arg0: integer): boolean
 "resetGuardBuildingNear"(): void
 "getRequiredItemsAndAmount"(): $Map<($Predicate<($ItemStack)>), ($Tuple<(integer), (boolean)>)>
 "hasWorkerOpenRequestsFiltered"(arg0: integer, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): boolean
 "setCustomBuildingName"(arg0: string): void
 "isGuardBuildingNear"(): boolean
 "hasWorkerOpenRequests"(arg0: integer): boolean
 "onPlayerEnterBuilding"(arg0: $Player$Type): void
 "hasWorkerOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): boolean
 "getBuildingDisplayName"(): string
 "getCitizenForRequest"(arg0: $IToken$Type<(any)>): $Optional<($ICitizenData)>
 "getAllAssignedCitizen"(): $Set<($ICitizenData)>
 "getCompletedRequests"(arg0: $ICitizenData$Type): $Collection<($IRequest<(any)>)>
 "isItemStackInRequest"(arg0: $ItemStack$Type): boolean
 "getCompletedRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "cancelAllRequestsOfCitizen"(arg0: $ICitizenData$Type): void
 "getOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsByRequestableType"(): $Map<($TypeToken<(any)>), ($Collection<($IToken<(any)>)>)>
 "getSettingValueOrDefault"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>, arg1: S): S
 "getCompletedRequestsOfType"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "reservedStacksExcluding"(arg0: $IRequest$Type<(any)>): $Map<($ItemStorage), (integer)>
 "markRequestAsAccepted"(arg0: $ICitizenData$Type, arg1: $IToken$Type<(any)>): void
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "hasCitizenCompletedRequests"(arg0: $ICitizenData$Type): boolean
 "overruleNextOpenRequestWithStack"(arg0: $ItemStack$Type): void
 "createPickupRequest"(arg0: integer): boolean
 "onPlacement"(): void
 "getRequester"(): $IRequester
 "onDestroyed"(): void
 "markDirty"(): void
 "getSetting"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>): T
 "requestRepair"(arg0: $BlockPos$Type): void
 "canBeGathered"(): boolean
 "isMatchingBlock"(arg0: $Block$Type): boolean
 "hasOpenSyncRequest"(arg0: $ICitizenData$Type): boolean
 "getOpenRequests"(arg0: integer): $Collection<($IRequest<(any)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "requestUpgrade"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "requestRemoval"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "deconstruct"(): void
 "forceTransferStack"(arg0: $ItemStack$Type, arg1: $Level$Type): $ItemStack
 "removeWorkOrder"(): void
 "createRequest"<R extends $IRequestable>(arg0: R, arg1: boolean): $IToken<(any)>
 "createRequest"<R extends $IRequestable>(arg0: $ICitizenData$Type, arg1: R, arg2: boolean): $IToken<(any)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(arg0: integer): integer
 "calculateCorners"(): void
 "isInBuilding"(arg0: $BlockPos$Type): boolean
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "processOfflineTime"(arg0: long): void
 "createResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "onColonyTick"(arg0: $IColony$Type): void
 "getMaxToolLevel"(): integer
 "canAssignCitizens"(): boolean
 "getBuildingType"(): $BuildingEntry
 "getCustomName"(): string
 "onWakeUp"(): void
 "onCleanUp"(arg0: $ICitizenData$Type): void
 "getColony"(): $IColony
 "onUpgradeComplete"(arg0: integer): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "addContainerPosition"(arg0: $BlockPos$Type): void
 "registerBlockPosition"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "registerBlockPosition"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "removeContainerPosition"(arg0: $BlockPos$Type): void
 "alterPickUpPriority"(arg0: integer): void
 "getPickUpPriority"(): integer
 "setTileEntity"(arg0: $AbstractTileEntityColonyBuilding$Type): void
 "getContainers"(): $List<($BlockPos)>
 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: $IBuildingModule$Type): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
 "getId"(): $IToken<(any)>
 "getLocation"(): $ILocation
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IWareHouse {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWareHouse$Type = ($IWareHouse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWareHouse_ = $IWareHouse$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/manager/$AssigningStrategy" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AssigningStrategy extends $Enum<($AssigningStrategy)> {
static readonly "PRIORITY_BASED": $AssigningStrategy
static readonly "FASTEST_FIRST": $AssigningStrategy


public static "values"(): ($AssigningStrategy)[]
public static "valueOf"(arg0: string): $AssigningStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssigningStrategy$Type = (("fastest_first") | ("priority_based")) | ($AssigningStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssigningStrategy_ = $AssigningStrategy$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesNamedGrave" {
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
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockMinecoloniesNamedGrave<B extends $AbstractBlockMinecoloniesNamedGrave<(B)>> extends $AbstractBlockMinecolonies<(B)> implements $EntityBlock {
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
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesNamedGrave$Type<B> = ($AbstractBlockMinecoloniesNamedGrave<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesNamedGrave_<B> = $AbstractBlockMinecoloniesNamedGrave$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/quests/$IQuestGiver" {
import {$IQuestParticipant, $IQuestParticipant$Type} from "packages/com/minecolonies/api/quests/$IQuestParticipant"
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IQuestGiver extends $IQuestParticipant {

 "assignQuest"(arg0: $IQuestInstance$Type): void
 "getName"(): string
 "addQuestParticipation"(arg0: $IQuestInstance$Type): void
 "isParticipantOfQuest"(arg0: $ResourceLocation$Type): boolean
 "openDialogue"(arg0: $IQuestInstance$Type, arg1: integer): void
 "onQuestDeletion"(arg0: $ResourceLocation$Type): void
}

export namespace $IQuestGiver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuestGiver$Type = ($IQuestGiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuestGiver_ = $IQuestGiver$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemCakeBatter" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCakeBatter extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCakeBatter$Type = ($ItemCakeBatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCakeBatter_ = $ItemCakeBatter$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenJobHandler" {
import {$ITickingStateAI, $ITickingStateAI$Type} from "packages/com/minecolonies/api/entity/ai/$ITickingStateAI"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IJob, $IJob$Type} from "packages/com/minecolonies/api/colony/jobs/$IJob"

export interface $ICitizenJobHandler {

 "getColonyJob"<J extends $IJob<(any)>>(arg0: $Class$Type<(J)>): J
 "getColonyJob"(): $IJob<(any)>
 "shouldRunAvoidance"(): boolean
 "onJobChanged"(arg0: $IJob$Type<(any)>): void
 "setWorkAI"(arg0: $ITickingStateAI$Type): void
 "getWorkAI"(): $ITickingStateAI
 "setModelDependingOnJob"(arg0: $IJob$Type<(any)>): void
}

export namespace $ICitizenJobHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenJobHandler$Type = ($ICitizenJobHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenJobHandler_ = $ICitizenJobHandler$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutBuilder" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutBuilder extends $AbstractBlockHut<($BlockHutBuilder)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutBuilder$Type = ($BlockHutBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutBuilder_ = $BlockHutBuilder$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry" {
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BuildingEntry {


public "getBuildingBlock"(): $AbstractBlockHut<(any)>
public "getModuleProducers"(): $List<($BuildingEntry$ModuleProducer)>
public static "produceViewWithoutBuilding"(arg0: string): $IBuildingModuleView
public static "getALlModuleProducers"(): $Map<(string), ($BuildingEntry$ModuleProducer)>
public "produceBuildingView"(arg0: $BlockPos$Type, arg1: $IColonyView$Type): $IBuildingView
public "getRegistryName"(): $ResourceLocation
public "getTranslationKey"(): string
public static "produceModuleWithoutBuilding"(arg0: string): $IBuildingModule
public "produceBuilding"(arg0: $BlockPos$Type, arg1: $IColony$Type): $IBuilding
public static "getProducer"(arg0: string): $BuildingEntry$ModuleProducer<(any), (any)>
public static "getProducer"(arg0: integer): $BuildingEntry$ModuleProducer<(any), (any)>
get "buildingBlock"(): $AbstractBlockHut<(any)>
get "moduleProducers"(): $List<($BuildingEntry$ModuleProducer)>
get "aLlModuleProducers"(): $Map<(string), ($BuildingEntry$ModuleProducer)>
get "registryName"(): $ResourceLocation
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingEntry$Type = ($BuildingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingEntry_ = $BuildingEntry$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/factory/$ITypeOverrideHandler" {
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $ITypeOverrideHandler<O> {

 "matches"(arg0: $TypeToken$Type<(any)>): boolean
 "getOutputType"(): $TypeToken<(O)>
}

export namespace $ITypeOverrideHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypeOverrideHandler$Type<O> = ($ITypeOverrideHandler<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypeOverrideHandler_<O> = $ITypeOverrideHandler$Type<(O)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemClipboard" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemClipboard extends $AbstractItemMinecolonies {
static readonly "TAG_COLONY": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemClipboard$Type = ($ItemClipboard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemClipboard_ = $ItemClipboard$Type;
}}
declare module "packages/com/minecolonies/api/blocks/decorative/$AbstractBlockGate" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractBlockGate extends $DoorBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "IRON_GATE": string
static readonly "WOODEN_GATE": string
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(arg0: string, arg1: float, arg2: integer, arg3: integer)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "registerBlock"(arg0: $IForgeRegistry$Type<($Block$Type)>): $AbstractBlockGate
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "removeGate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
/**
 * 
 * @deprecated
 */
public "getBlockHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "toggleGate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getMaxWidth"(): integer
public "setOpen"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: boolean): void
public "getMaxHeight"(): integer
get "maxWidth"(): integer
get "maxHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockGate$Type = ($AbstractBlockGate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockGate_ = $AbstractBlockGate$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenExperienceHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICitizenExperienceHandler {

 "gatherXp"(): void
 "dropExperience"(): void
 "addExperience"(arg0: double): void
 "updateLevel"(): void
}

export namespace $ICitizenExperienceHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenExperienceHandler$Type = ($ICitizenExperienceHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenExperienceHandler_ = $ICitizenExperienceHandler$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/statemachine/transitions/$IStateMachineTransition" {
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"

export interface $IStateMachineTransition<S extends $IState> {

 "getState"(): S
 "getNextState"(): S
 "checkCondition"(): boolean
}

export namespace $IStateMachineTransition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateMachineTransition$Type<S> = ($IStateMachineTransition<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateMachineTransition_<S> = $IStateMachineTransition$Type<(S)>;
}}
declare module "packages/com/minecolonies/api/entity/mobs/$RaiderType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RaiderType extends $Enum<($RaiderType)> {
static readonly "AMAZON": $RaiderType
static readonly "BARBARIAN": $RaiderType
static readonly "EGYPTIAN": $RaiderType
static readonly "NORSEMAN": $RaiderType
static readonly "PIRATE": $RaiderType


public static "values"(): ($RaiderType)[]
public static "valueOf"(arg0: string): $RaiderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaiderType$Type = (("amazon") | ("pirate") | ("barbarian") | ("norseman") | ("egyptian")) | ($RaiderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RaiderType_ = $RaiderType$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemCompost" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCompost extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCompost$Type = ($ItemCompost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCompost_ = $ItemCompost$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IStatisticsManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IStatisticsManager {

 "increment"(arg0: string, arg1: integer): void
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "getStatTotal"(arg0: string): integer
 "getStatTypes"(): $Set<(string)>
 "getStatsInPeriod"(arg0: string, arg1: integer, arg2: integer): integer
 "incrementBy"(arg0: string, arg1: integer, arg2: integer): void
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IStatisticsManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStatisticsManager$Type = ($IStatisticsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStatisticsManager_ = $IStatisticsManager$Type;
}}
declare module "packages/com/minecolonies/api/entity/other/$AbstractFastMinecoloniesEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PathfinderMob, $PathfinderMob$Type} from "packages/net/minecraft/world/entity/$PathfinderMob"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$ITeleporter, $ITeleporter$Type} from "packages/net/minecraftforge/common/util/$ITeleporter"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IStuckHandlerEntity, $IStuckHandlerEntity$Type} from "packages/com/minecolonies/api/entity/pathfinding/$IStuckHandlerEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"

export class $AbstractFastMinecoloniesEntity extends $PathfinderMob implements $IStuckHandlerEntity {
readonly "randomVariance": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "moveControl": $MoveControl
 "navigation": $PathNavigation
 "goalSelector": $GoalSelector
 "targetSelector": $GoalSelector
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lastDamageSource": $DamageSource
 "lastDamageStamp": long
 "autoSpinAttackTicks": integer
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


public "canBeStuck"(): boolean
public "setCanBeStuck"(arg0: boolean): void
public "updateSwimAmount"(): void
public "checkBedExists"(): boolean
public "m_6138_"(): void
public "setTicksFrozen"(arg0: integer): void
public "updateFallFlying"(): void
public "updateSwimming"(): void
public "canSpawnSprintParticle"(): boolean
public "updateFluidOnEyes"(): void
public "onInsideBubbleColumn"(arg0: boolean): void
public "changeDimension"(arg0: $ServerLevel$Type, arg1: $ITeleporter$Type): $Entity
public "setSharedFlagOnFire"(arg0: boolean): void
public "canBeLeashed"(arg0: $Player$Type): boolean
public "canSpawnSoulSpeedParticle"(): boolean
public "isInWall"(): boolean
public "isInWaterRainOrBubble"(): boolean
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
set "ticksFrozen"(value: integer)
set "sharedFlagOnFire"(value: boolean)
get "inWall"(): boolean
get "inWaterRainOrBubble"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFastMinecoloniesEntity$Type = ($AbstractFastMinecoloniesEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFastMinecoloniesEntity_ = $AbstractFastMinecoloniesEntity$Type;
}}
declare module "packages/com/minecolonies/api/colony/fields/registry/$FieldRegistries$FieldEntry" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IField, $IField$Type} from "packages/com/minecolonies/api/colony/fields/$IField"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFieldModule, $IFieldModule$Type} from "packages/com/minecolonies/api/colony/fields/modules/$IFieldModule"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FieldRegistries$FieldEntry {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getFieldModuleProducers"(): $List<($Function<($IField), ($IFieldModule)>)>
public "getRegistryName"(): $ResourceLocation
public "produceField"(arg0: $BlockPos$Type): $IField
get "fieldModuleProducers"(): $List<($Function<($IField), ($IFieldModule)>)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldRegistries$FieldEntry$Type = ($FieldRegistries$FieldEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldRegistries$FieldEntry_ = $FieldRegistries$FieldEntry$Type;
}}
declare module "packages/com/minecolonies/api/research/registry/$ResearchRequirementEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IResearchRequirement, $IResearchRequirement$Type} from "packages/com/minecolonies/api/research/$IResearchRequirement"

export class $ResearchRequirementEntry {


public "getRegistryName"(): $ResourceLocation
public "readFromNBT"(arg0: $CompoundTag$Type): $IResearchRequirement
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResearchRequirementEntry$Type = ($ResearchRequirementEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResearchRequirementEntry_ = $ResearchRequirementEntry$Type;
}}
declare module "packages/com/minecolonies/api/items/$IBlockOverlayItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlockOverlayItem$OverlayBox, $IBlockOverlayItem$OverlayBox$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem$OverlayBox"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBlockOverlayItem {

 "getOverlayBoxes"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $List<($IBlockOverlayItem$OverlayBox)>

(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $List<($IBlockOverlayItem$OverlayBox)>
}

export namespace $IBlockOverlayItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockOverlayItem$Type = ($IBlockOverlayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockOverlayItem_ = $IBlockOverlayItem$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutSmeltery" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutSmeltery extends $AbstractBlockHut<($BlockHutSmeltery)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutSmeltery$Type = ($BlockHutSmeltery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutSmeltery_ = $BlockHutSmeltery$Type;
}}
declare module "packages/com/minecolonies/api/research/costs/$IResearchCost" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModResearchCostTypes$ResearchCostType, $ModResearchCostTypes$ResearchCostType$Type} from "packages/com/minecolonies/api/research/$ModResearchCostTypes$ResearchCostType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IResearchCost {

 "getTranslatedName"(): $Component
 "parseFromJson"(arg0: $JsonObject$Type): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "getType"(): $ModResearchCostTypes$ResearchCostType
 "getCount"(): integer
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "getItems"(): $List<($Item)>
 "serialize"(arg0: $FriendlyByteBuf$Type): void
 "hasCorrectJsonFields"(arg0: $JsonObject$Type): boolean
}

export namespace $IResearchCost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResearchCost$Type = ($IResearchCost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResearchCost_ = $IResearchCost$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesRack" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$RackType, $RackType$Type} from "packages/com/minecolonies/api/blocks/types/$RackType"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockMinecoloniesRack<B extends $AbstractBlockMinecoloniesRack<(B)>> extends $AbstractBlockMinecolonies<(B)> implements $EntityBlock {
static readonly "VARIANT": $EnumProperty<($RackType)>
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

public static "shouldBlockBeReplacedWithRack"(arg0: $Block$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesRack$Type<B> = ($AbstractBlockMinecoloniesRack<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesRack_<B> = $AbstractBlockMinecoloniesRack$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutUniversity" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutUniversity extends $AbstractBlockHut<($BlockHutUniversity)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutUniversity$Type = ($BlockHutUniversity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutUniversity_ = $BlockHutUniversity$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/statemachine/tickratestatemachine/$ITickingTransition" {
import {$IStateMachineTransition, $IStateMachineTransition$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/transitions/$IStateMachineTransition"
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"

export interface $ITickingTransition<S extends $IState> extends $IStateMachineTransition<(S)> {

 "getTickRate"(): integer
 "countdownTicksToUpdate"(arg0: integer): integer
 "setTicksToUpdate"(arg0: integer): void
 "setTickRate"(arg0: integer): void
 "getState"(): S
 "getNextState"(): S
 "checkCondition"(): boolean
}

export namespace $ITickingTransition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickingTransition$Type<S> = ($ITickingTransition<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickingTransition_<S> = $ITickingTransition$Type<(S)>;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IRequestResolver<R extends $IRequestable> extends $IRequester {

 "onAssignedRequestBeingCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "attemptResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IToken<(any)>)>
 "onAssignedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getSuitabilityMetric"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): integer
 "getFollowupRequestForCompletion"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IRequest<(any)>)>
 "getPriority"(): integer
 "onColonyUpdate"(arg0: $IRequestManager$Type, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): void
 "canResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): boolean
 "onRequestAssigned"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>, arg2: boolean): void
 "resolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequestType"(): $TypeToken<(any)>
 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
}

export namespace $IRequestResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequestResolver$Type<R> = ($IRequestResolver<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequestResolver_<R> = $IRequestResolver$Type<(R)>;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutPlantation" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutPlantation extends $AbstractBlockHut<($BlockHutPlantation)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutPlantation$Type = ($BlockHutPlantation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutPlantation_ = $BlockHutPlantation$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/combat/threat/$ThreatTable" {
import {$ThreatTableEntry, $ThreatTableEntry$Type} from "packages/com/minecolonies/api/entity/ai/combat/threat/$ThreatTableEntry"
import {$IThreatTableEntity, $IThreatTableEntity$Type} from "packages/com/minecolonies/api/entity/ai/combat/threat/$IThreatTableEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ThreatTable<T extends ($LivingEntity) & ($IThreatTableEntity)> {

constructor(arg0: T)

public "removeCurrentTarget"(): void
public "addThreat"(arg0: $LivingEntity$Type, arg1: integer): void
public "resetCurrentTargetThreat"(): void
public "getThreatFor"(arg0: $LivingEntity$Type): integer
public "markInvalidTarget"(): void
public "resetTable"(): void
public "getTarget"(): $ThreatTableEntry
public "getTargetMob"(): $LivingEntity
get "target"(): $ThreatTableEntry
get "targetMob"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreatTable$Type<T> = ($ThreatTable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreatTable_<T> = $ThreatTable$Type<(T)>;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/$IAssignsJob" {
import {$IAssignsCitizen, $IAssignsCitizen$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IAssignsCitizen"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$HiringMode, $HiringMode$Type} from "packages/com/minecolonies/api/colony/buildings/$HiringMode"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"

export interface $IAssignsJob extends $IAssignsCitizen {

 "hasAssignedCitizen"(): boolean
 "getJobEntry"(): $JobEntry
 "isFull"(): boolean
 "hasAssignedCitizen"(arg0: $ICitizenData$Type): boolean
 "setHiringMode"(arg0: $HiringMode$Type): void
 "assignCitizen"(arg0: $ICitizenData$Type): boolean
 "getModuleMax"(): integer
 "removeCitizen"(arg0: $ICitizenData$Type): boolean
 "getHiringMode"(): $HiringMode
 "getAssignedCitizen"(): $List<($ICitizenData)>
 "getAssignedEntities"(): $List<($Optional<($AbstractEntityCitizen)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "serializeToView"(arg0: $FriendlyByteBuf$Type): void
 "setBuilding"(arg0: $IBuilding$Type): $IBuildingModule
 "getProducer"(): $BuildingEntry$ModuleProducer<(any), (any)>
 "setProducer"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): $IBuildingModule
 "getBuilding"(): $IBuilding
 "checkDirty"(): boolean
 "clearDirty"(): void
 "markDirty"(): void
}

export namespace $IAssignsJob {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssignsJob$Type = ($IAssignsJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssignsJob_ = $IAssignsJob$Type;
}}
declare module "packages/com/minecolonies/api/colony/permissions/$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Action extends $Enum<($Action)> {
static readonly "ACCESS_HUTS": $Action
static readonly "GUARDS_ATTACK": $Action
static readonly "PLACE_HUTS": $Action
static readonly "BREAK_HUTS": $Action
static readonly "EDIT_PERMISSIONS": $Action
static readonly "MANAGE_HUTS": $Action
static readonly "RECEIVE_MESSAGES": $Action
static readonly "USE_SCAN_TOOL": $Action
static readonly "PLACE_BLOCKS": $Action
static readonly "BREAK_BLOCKS": $Action
static readonly "TOSS_ITEM": $Action
static readonly "PICKUP_ITEM": $Action
static readonly "FILL_BUCKET": $Action
static readonly "OPEN_CONTAINER": $Action
static readonly "RIGHTCLICK_BLOCK": $Action
static readonly "RIGHTCLICK_ENTITY": $Action
static readonly "THROW_POTION": $Action
static readonly "SHOOT_ARROW": $Action
static readonly "ATTACK_CITIZEN": $Action
static readonly "ATTACK_ENTITY": $Action
static readonly "ACCESS_FREE_BLOCKS": $Action
static readonly "TELEPORT_TO_COLONY": $Action
static readonly "EXPLODE": $Action
static readonly "RECEIVE_MESSAGES_FAR_AWAY": $Action
static readonly "CAN_KEEP_COLONY_ACTIVE_WHILE_AWAY": $Action
static readonly "RALLY_GUARDS": $Action
static readonly "HURT_CITIZEN": $Action
static readonly "HURT_VISITOR": $Action
static readonly "MAP_BORDER": $Action
static readonly "MAP_DEATHS": $Action
static readonly "ACCESS_TOGGLEABLES": $Action


public static "values"(): ($Action)[]
public static "valueOf"(arg0: string): $Action
public "getFlag"(): long
get "flag"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Action$Type = (("fill_bucket") | ("attack_entity") | ("access_free_blocks") | ("teleport_to_colony") | ("map_deaths") | ("guards_attack") | ("toss_item") | ("rightclick_block") | ("open_container") | ("explode") | ("edit_permissions") | ("place_blocks") | ("attack_citizen") | ("throw_potion") | ("map_border") | ("access_toggleables") | ("break_huts") | ("place_huts") | ("break_blocks") | ("pickup_item") | ("manage_huts") | ("can_keep_colony_active_while_away") | ("shoot_arrow") | ("access_huts") | ("hurt_visitor") | ("receive_messages_far_away") | ("hurt_citizen") | ("use_scan_tool") | ("rally_guards") | ("receive_messages") | ("rightclick_entity")) | ($Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Action_ = $Action$Type;
}}
declare module "packages/com/minecolonies/api/tileentities/$AbstractTileEntityBarrel" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractTileEntityBarrel extends $BlockEntity {
static readonly "MAX_ITEMS": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addItem"(arg0: $ItemStack$Type): boolean
public "isDone"(): boolean
public "getItems"(): integer
public "retrieveCompost"(arg0: double): $ItemStack
public "checkIfWorking"(): boolean
get "done"(): boolean
get "items"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTileEntityBarrel$Type = ($AbstractTileEntityBarrel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTileEntityBarrel_ = $AbstractTileEntityBarrel$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/workerbuildings/$ITownHallView" {
import {$IColonyEventDescription, $IColonyEventDescription$Type} from "packages/com/minecolonies/api/colony/colonyEvents/descriptions/$IColonyEventDescription"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PermissionEvent, $PermissionEvent$Type} from "packages/com/minecolonies/api/colony/permissions/$PermissionEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ITownHallView extends $IBuildingView {

 "canPlayerUseTP"(): boolean
 "getColonyEvents"(): $List<($IColonyEventDescription)>
 "getPermissionEvents"(): $List<($PermissionEvent)>
 "getOpenRequestsOfBuilding"(): $ImmutableList<($IRequest<(any)>)>
 "getParent"(): $BlockPos
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "getPosition"(): $BlockPos
 "getRotation"(): integer
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "openGui"(arg0: boolean): void
 "getBuildingDisplayName"(): string
 "getOpenRequestsOfType"<R>(arg0: $ICitizenDataView$Type, arg1: $Class$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenDataView$Type, arg1: $Class$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "getContainerList"(): $List<($BlockPos)>
 "setCustomName"(arg0: string): void
 "getStructurePath"(): string
 "getOpenRequests"(arg0: $ICitizenDataView$Type): $ImmutableList<($IRequest<(any)>)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(): integer
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getBuildingType"(): $BuildingEntry
 "isDeconstructed"(): boolean
 "getWindow"(): $BOWindow
 "getOpenRequestsByCitizen"(): $Map<(integer), ($Collection<($IToken<(any)>)>)>
 "getCurrentWorkOrderLevel"(): integer
 "getStructurePack"(): string
 "getCustomName"(): string
 "getColony"(): $IColonyView
 "getBuildingLevel"(): integer
 "getAllAssignedCitizens"(): $Set<(integer)>
 "getBuildingMaxLevel"(): integer
 "isBuildingMaxLevel"(): boolean
 "isRepairing"(): boolean
 "getBuildingDmPrio"(): integer
 "isBuilding"(): boolean
 "isDeconstructing"(): boolean
 "allowsAssignment"(): boolean
 "getResolverIds"(): $ImmutableCollection<($IToken<(any)>)>
 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "registerModule"(arg0: $IBuildingModuleView$Type): void
 "getModuleViewByType"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): T
 "getModuleViewMatching"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>, arg1: $Predicate$Type<(any)>): T
 "getModuleViews"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): $List<(T)>
 "getAllModuleViews"(): $List<($IBuildingModuleView)>
 "hasModuleView"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModuleView"(arg0: integer): $IBuildingModuleView
 "getModuleView"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): V
}

export namespace $ITownHallView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITownHallView$Type = ($ITownHallView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITownHallView_ = $ITownHallView$Type;
}}
declare module "packages/com/minecolonies/api/entity/pathfinding/$IStuckHandlerEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStuckHandlerEntity {

 "canBeStuck"(): boolean
}

export namespace $IStuckHandlerEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStuckHandlerEntity$Type = ($IStuckHandlerEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStuckHandlerEntity_ = $IStuckHandlerEntity$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolverProvider" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"

export interface $IRequestResolverProvider {

 "getId"(): $IToken<(any)>
 "getResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
}

export namespace $IRequestResolverProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequestResolverProvider$Type = ($IRequestResolverProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequestResolverProvider_ = $IRequestResolverProvider$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IEventDescriptionManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColonyEventDescription, $IColonyEventDescription$Type} from "packages/com/minecolonies/api/colony/colonyEvents/descriptions/$IColonyEventDescription"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $IEventDescriptionManager extends $INBTSerializable<($CompoundTag)> {

 "getEventDescriptions"(): $List<($IColonyEventDescription)>
 "addEventDescription"(arg0: $IColonyEventDescription$Type): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IEventDescriptionManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventDescriptionManager$Type = ($IEventDescriptionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventDescriptionManager_ = $IEventDescriptionManager$Type;
}}
declare module "packages/com/minecolonies/api/research/effects/$IResearchEffect" {
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResearchEffectEntry, $ResearchEffectEntry$Type} from "packages/com/minecolonies/api/research/effects/registry/$ResearchEffectEntry"

export interface $IResearchEffect<T> {

 "getId"(): $ResourceLocation
 "getDesc"(): $TranslatableContents
 "setEffect"(arg0: T): void
 "overrides"(arg0: $IResearchEffect$Type<(any)>): boolean
 "getSubtitle"(): $TranslatableContents
 "getRegistryEntry"(): $ResearchEffectEntry
 "getEffect"(): T
 "writeToNBT"(): $CompoundTag
}

export namespace $IResearchEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResearchEffect$Type<T> = ($IResearchEffect<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResearchEffect_<T> = $IResearchEffect$Type<(T)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemGoldenBread" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGoldenBread extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGoldenBread$Type = ($ItemGoldenBread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGoldenBread_ = $ItemGoldenBread$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenItemHandler" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICitizenItemHandler {

 "removeHeldItem"(): void
 "pickupItems"(): void
 "updateArmorDamage"(arg0: double): void
 "damageItemInHand"(arg0: $InteractionHand$Type, arg1: integer): void
 "entityDropItem"(arg0: $ItemStack$Type): $ItemEntity
 "hitBlockWithToolInHand"(arg0: $BlockPos$Type, arg1: boolean): void
 "hitBlockWithToolInHand"(arg0: $BlockPos$Type): void
 "tryPickupItemEntity"(arg0: $ItemEntity$Type): void
 "breakBlockWithToolInHand"(arg0: $BlockPos$Type): void
 "applyMending"(arg0: double): double
 "setMainHeldItem"(arg0: integer): void
 "setHeldItem"(arg0: $InteractionHand$Type, arg1: integer): void
}

export namespace $ICitizenItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenItemHandler$Type = ($ICitizenItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenItemHandler_ = $ICitizenItemHandler$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemBannerRallyGuards" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractBuildingGuards$View, $AbstractBuildingGuards$View$Type} from "packages/com/minecolonies/core/colony/buildings/$AbstractBuildingGuards$View"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuardBuilding, $IGuardBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IGuardBuilding"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBannerRallyGuards extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public static "isActive"(arg0: $ItemStack$Type): boolean
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public static "isGuardBuilding"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "getGuardBuilding"(arg0: $Level$Type, arg1: $BlockPos$Type): $IGuardBuilding
public static "checkForCompound"(arg0: $ItemStack$Type): $CompoundTag
public static "toggleBanner"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public static "getGuardTowerViews"(arg0: $ItemStack$Type, arg1: $Level$Type): $List<($Pair<($ILocation), ($AbstractBuildingGuards$View)>)>
public static "broadcastPlayerToRally"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $ILocation$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isActiveForGuardTower"(arg0: $ItemStack$Type, arg1: $IGuardBuilding$Type): boolean
public static "getGuardBuildingView"(arg0: $Level$Type, arg1: $BlockPos$Type): $AbstractBuildingGuards$View
public static "removeGuardTowerAtLocation"(arg0: $ItemStack$Type, arg1: $ILocation$Type): boolean
public static "getGuardTowerLocations"(arg0: $ItemStack$Type): $ImmutableList<($ILocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBannerRallyGuards$Type = ($ItemBannerRallyGuards);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBannerRallyGuards_ = $ItemBannerRallyGuards$Type;
}}
declare module "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$TileEntityRack, $TileEntityRack$Type} from "packages/com/minecolonies/core/tileentities/$TileEntityRack"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StructurePackMeta, $StructurePackMeta$Type} from "packages/com/ldtteam/structurize/storage/$StructurePackMeta"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractTileEntityColonyBuilding extends $TileEntityRack implements $IBlueprintDataProviderBE {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setPositionedTags"(arg0: $Map$Type<($BlockPos$Type), ($List$Type<(string)>)>): void
public "getTilePos"(): $BlockPos
public "getBlueprintPath"(): string
public "setBlueprintPath"(arg0: string): void
public "setSchematicName"(arg0: string): void
public "getColonyId"(): integer
public "hasAccessPermission"(arg0: $Player$Type): boolean
public "getPositionOfChestWithItemStack"(arg0: $Predicate$Type<($ItemStack$Type)>): $BlockPos
public "isMirrored"(): boolean
public "getPosition"(): $BlockPos
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "isOutdated"(): boolean
public static "isInTileEntity"(arg0: $ICapabilityProvider$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
public "readSchematicDataFromNBT"(arg0: $CompoundTag$Type): void
public "getSchematicCorners"(): $Tuple<($BlockPos), ($BlockPos)>
public "setSchematicCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
public "setBuilding"(arg0: $IBuilding$Type): void
public "getSchematicName"(): string
public "getStructurePack"(): $StructurePackMeta
public "getPositionedTags"(): $Map<($BlockPos), ($List<(string)>)>
public "getBuilding"(): $IBuilding
public "getColony"(): $IColony
public "getBuildingView"(): $IBuildingView
public "getBuildingName"(): $ResourceLocation
public "setMirror"(arg0: boolean): void
public "setColony"(arg0: $IColony$Type): void
public "setStructurePack"(arg0: $StructurePackMeta$Type): void
public "setPackName"(arg0: string): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getPackName"(): string
public "addTag"(arg0: $BlockPos$Type, arg1: string): void
public "removeTag"(arg0: $BlockPos$Type, arg1: string): void
public "writeSchematicDataToNBT"(arg0: $CompoundTag$Type): void
public "getWorldTagNamePosMap"(): $Map<(string), ($Set<($BlockPos)>)>
public "getInWorldCorners"(): $Tuple<($BlockPos), ($BlockPos)>
public static "readTagPosMapFrom"(arg0: $CompoundTag$Type): $Map<($BlockPos), ($List<(string)>)>
public "getWorldTagPosMap"(): $Map<($BlockPos), ($List<(string)>)>
public "getRealWorldPos"(arg0: $BlockPos$Type): $BlockPos
public static "writeMapToCompound"(arg0: $CompoundTag$Type, arg1: $Map$Type<($BlockPos$Type), ($List$Type<(string)>)>): void
set "positionedTags"(value: $Map$Type<($BlockPos$Type), ($List$Type<(string)>)>)
get "tilePos"(): $BlockPos
get "blueprintPath"(): string
set "blueprintPath"(value: string)
set "schematicName"(value: string)
get "colonyId"(): integer
get "mirrored"(): boolean
get "position"(): $BlockPos
get "outdated"(): boolean
get "schematicCorners"(): $Tuple<($BlockPos), ($BlockPos)>
set "building"(value: $IBuilding$Type)
get "schematicName"(): string
get "structurePack"(): $StructurePackMeta
get "positionedTags"(): $Map<($BlockPos), ($List<(string)>)>
get "building"(): $IBuilding
get "colony"(): $IColony
get "buildingView"(): $IBuildingView
get "buildingName"(): $ResourceLocation
set "mirror"(value: boolean)
set "colony"(value: $IColony$Type)
set "structurePack"(value: $StructurePackMeta$Type)
set "packName"(value: string)
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "packName"(): string
get "worldTagNamePosMap"(): $Map<(string), ($Set<($BlockPos)>)>
get "inWorldCorners"(): $Tuple<($BlockPos), ($BlockPos)>
get "worldTagPosMap"(): $Map<($BlockPos), ($List<(string)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTileEntityColonyBuilding$Type = ($AbstractTileEntityColonyBuilding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTileEntityColonyBuilding_ = $AbstractTileEntityColonyBuilding$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesHorizontal" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockMinecolonies, $IBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockMinecoloniesHorizontal<B extends $AbstractBlockMinecoloniesHorizontal<(B)>> extends $HorizontalDirectionalBlock implements $IBlockMinecolonies<(B)> {
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

public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesHorizontal$Type<B> = ($AbstractBlockMinecoloniesHorizontal<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesHorizontal_<B> = $AbstractBlockMinecoloniesHorizontal$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/entity/ai/combat/threat/$IThreatTableEntity" {
import {$ThreatTable, $ThreatTable$Type} from "packages/com/minecolonies/api/entity/ai/combat/threat/$ThreatTable"

export interface $IThreatTableEntity {

 "getThreatTable"(): $ThreatTable<(any)>

(): $ThreatTable<(any)>
}

export namespace $IThreatTableEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThreatTableEntity$Type = ($IThreatTableEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThreatTableEntity_ = $IThreatTableEntity$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/resolver/$IQueuedRequestResolver" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IQueuedRequestResolver<R extends $IRequestable> extends $IRequestResolver<(R)> {

 "getAllAssignedRequests"(): $ImmutableList<($IToken<(any)>)>
 "onSystemReset"(): void
 "onAssignedRequestBeingCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "attemptResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IToken<(any)>)>
 "onAssignedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getSuitabilityMetric"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): integer
 "getFollowupRequestForCompletion"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IRequest<(any)>)>
 "getPriority"(): integer
 "onColonyUpdate"(arg0: $IRequestManager$Type, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): void
 "canResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): boolean
 "onRequestAssigned"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>, arg2: boolean): void
 "resolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequestType"(): $TypeToken<(any)>
 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
}

export namespace $IQueuedRequestResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQueuedRequestResolver$Type<R> = ($IQueuedRequestResolver<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQueuedRequestResolver_<R> = $IQueuedRequestResolver$Type<(R)>;
}}
declare module "packages/com/minecolonies/api/colony/$CompactColonyReference" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CompactColonyReference {
readonly "name": string
readonly "center": $BlockPos
readonly "id": integer
readonly "hasTownHall": boolean
readonly "dimension": $ResourceKey<($Level)>

constructor(arg0: string, arg1: $BlockPos$Type, arg2: integer, arg3: boolean, arg4: $ResourceKey$Type<($Level$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactColonyReference$Type = ($CompactColonyReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactColonyReference_ = $CompactColonyReference$Type;
}}
declare module "packages/com/minecolonies/api/blocks/decorative/$AbstractBlockMinecoloniesConstructionTape" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
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
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractBlockMinecoloniesFalling, $AbstractBlockMinecoloniesFalling$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesFalling"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockMinecoloniesConstructionTape<B extends $AbstractBlockMinecoloniesConstructionTape<(B)>> extends $AbstractBlockMinecoloniesFalling<(B)> implements $SimpleWaterloggedBlock {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "CORNER": $BooleanProperty
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
export type $AbstractBlockMinecoloniesConstructionTape$Type<B> = ($AbstractBlockMinecoloniesConstructionTape<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesConstructionTape_<B> = $AbstractBlockMinecoloniesConstructionTape$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenSkillHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$Skill, $Skill$Type} from "packages/com/minecolonies/api/entity/citizen/$Skill"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICitizenSkillHandler {

 "addXpToSkill"(arg0: $Skill$Type, arg1: double, arg2: $ICitizenData$Type): void
 "removeXpFromSkill"(arg0: $Skill$Type, arg1: double, arg2: $ICitizenData$Type): void
 "getTotalXP"(): double
 "levelUp"(arg0: $ICitizenData$Type): void
 "getSkills"(): $Map<($Skill), ($Tuple<(integer), (double)>)>
 "init"(arg0: integer): void
 "init"(arg0: $IColony$Type, arg1: $ICitizenData$Type, arg2: $ICitizenData$Type, arg3: $Random$Type): void
 "write"(): $CompoundTag
 "read"(arg0: $CompoundTag$Type): void
 "incrementLevel"(arg0: $Skill$Type, arg1: integer): void
 "tryLevelUpIntelligence"(arg0: $Random$Type, arg1: double, arg2: $ICitizenData$Type): boolean
 "getLevel"(arg0: $Skill$Type): integer
}

export namespace $ICitizenSkillHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenSkillHandler$Type = ($ICitizenSkillHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenSkillHandler_ = $ICitizenSkillHandler$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockHut" {
import {$IAnchorBlock, $IAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$IAnchorBlock"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"
import {$IBuilderUndestroyable, $IBuilderUndestroyable$Type} from "packages/com/minecolonies/api/entity/ai/workers/util/$IBuilderUndestroyable"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$INamedBlueprintAnchorBlock, $INamedBlueprintAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$INamedBlueprintAnchorBlock"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractStructureHandler, $AbstractStructureHandler$Type} from "packages/com/ldtteam/structurize/placement/structure/$AbstractStructureHandler"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ILeveledBlueprintAnchorBlock, $ILeveledBlueprintAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$ILeveledBlueprintAnchorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IInvisibleBlueprintAnchorBlock, $IInvisibleBlueprintAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$IInvisibleBlueprintAnchorBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IRequirementsBlueprintAnchorBlock, $IRequirementsBlueprintAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$IRequirementsBlueprintAnchorBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ITickableBlockMinecolonies, $ITickableBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$ITickableBlockMinecolonies"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$IBuildingBrowsableBlock, $IBuildingBrowsableBlock$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBuildingBrowsableBlock"
import {$ISpecialCreativeHandlerAnchorBlock, $ISpecialCreativeHandlerAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$ISpecialCreativeHandlerAnchorBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$PlacementSettings, $PlacementSettings$Type} from "packages/com/ldtteam/structurize/util/$PlacementSettings"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $AbstractBlockHut<B extends $AbstractBlockHut<(B)>> extends $AbstractBlockMinecolonies<(B)> implements $IBuilderUndestroyable, $IAnchorBlock, $ITickableBlockMinecolonies, $INamedBlueprintAnchorBlock, $ILeveledBlueprintAnchorBlock, $IRequirementsBlueprintAnchorBlock, $IInvisibleBlueprintAnchorBlock, $ISpecialCreativeHandlerAnchorBlock, $IBuildingBrowsableBlock {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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
constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setup"(arg0: $ServerPlayer$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Blueprint$Type, arg4: $PlacementSettings$Type, arg5: boolean, arg6: string, arg7: string): boolean
public "getDesc"(): $List<($MutableComponent)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getBlueprintDisplayName"(): $Component
public "getStructureHandler"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Blueprint$Type, arg3: $PlacementSettings$Type, arg4: boolean): $AbstractStructureHandler
public "onBlockPlacedByBuildTool"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type, arg5: boolean, arg6: string, arg7: string): void
public "isVisible"(arg0: $CompoundTag$Type): boolean
public "getLevel"(arg0: $CompoundTag$Type): integer
public "getRegistryName"(): $ResourceLocation
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public "getRequirements"(arg0: $ClientLevel$Type, arg1: $BlockPos$Type, arg2: $LocalPlayer$Type): $List<($MutableComponent)>
public "areRequirementsMet"(arg0: $ClientLevel$Type, arg1: $BlockPos$Type, arg2: $LocalPlayer$Type): boolean
public "getBlueprintName"(): string
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "shouldBrowseBuildings"(arg0: $PlayerInteractEvent$RightClickItem$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "desc"(): $List<($MutableComponent)>
get "blueprintDisplayName"(): $Component
get "registryName"(): $ResourceLocation
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
get "blueprintName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockHut$Type<B> = ($AbstractBlockHut<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockHut_<B> = $AbstractBlockHut$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/blocks/decorative/$BlockConstructionTape" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractBlockMinecoloniesConstructionTape, $AbstractBlockMinecoloniesConstructionTape$Type} from "packages/com/minecolonies/api/blocks/decorative/$AbstractBlockMinecoloniesConstructionTape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockConstructionTape extends $AbstractBlockMinecoloniesConstructionTape<($BlockConstructionTape)> {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "CORNER": $BooleanProperty
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

public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getPlacementState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
public static "getConnections"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: boolean): $List<($Direction)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockConstructionTape$Type = ($BlockConstructionTape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockConstructionTape_ = $BlockConstructionTape$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IEventStructureManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IEventStructureManager {

 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "loadBackupForEvent"(arg0: integer): void
 "spawnTemporaryStructure"(arg0: $Blueprint$Type, arg1: $BlockPos$Type, arg2: integer): boolean
}

export namespace $IEventStructureManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventStructureManager$Type = ($IEventStructureManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventStructureManager_ = $IEventStructureManager$Type;
}}
declare module "packages/com/minecolonies/api/blocks/types/$RackType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RackType extends $Enum<($RackType)> implements $StringRepresentable {
static readonly "DEFAULT": $RackType
static readonly "FULL": $RackType
static readonly "DEFAULTDOUBLE": $RackType
static readonly "FULLDOUBLE": $RackType
static readonly "EMPTYAIR": $RackType


public "getName"(): string
public "toString"(): string
public static "values"(): ($RackType)[]
public static "valueOf"(arg0: string): $RackType
public "getSerializedName"(): string
public "isDoubleVariant"(): boolean
public "getInvBasedVariant"(arg0: boolean): $RackType
public "getTranslationKey"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
get "doubleVariant"(): boolean
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RackType$Type = (("fulldouble") | ("default") | ("defaultdouble") | ("emptyair") | ("full")) | ($RackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RackType_ = $RackType$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenSleepHandler" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICitizenSleepHandler {

 "isAsleep"(): boolean
 "getBedLocation"(): $BlockPos
 "shouldGoSleep"(): boolean
 "findHomePos"(): $BlockPos
 "trySleep"(arg0: $BlockPos$Type): boolean
 "onWakeUp"(): void
}

export namespace $ICitizenSleepHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenSleepHandler$Type = ($ICitizenSleepHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenSleepHandler_ = $ICitizenSleepHandler$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IEntityManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ICivilianData, $ICivilianData$Type} from "packages/com/minecolonies/api/colony/$ICivilianData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"

export interface $IEntityManager {

 "getCivilianDataMap"(): $Map<(integer), ($ICivilianData)>
 "removeCivilian"(arg0: $ICivilianData$Type): void
 "sendPackets"(arg0: $Set$Type<($ServerPlayer$Type)>, arg1: $Set$Type<($ServerPlayer$Type)>): void
 "unregisterCivilian"(arg0: $AbstractCivilianEntity$Type): void
 "registerCivilian"(arg0: $AbstractCivilianEntity$Type): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "createAndRegisterCivilianData"(): $ICivilianData
 "spawnOrCreateCivilian"<T extends $ICivilianData>(arg0: T, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): T
 "clearDirty"(): void
 "markDirty"(): void
 "onColonyTick"(arg0: $IColony$Type): void
 "getCivilian"<T extends $ICivilianData>(arg0: integer): T
}

export namespace $IEntityManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityManager$Type = ($IEntityManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityManager_ = $IEntityManager$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemResourceScroll" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
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
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemResourceScroll extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemResourceScroll$Type = ($ItemResourceScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemResourceScroll_ = $ItemResourceScroll$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemSupplyChestDeployer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ISupplyItem, $ISupplyItem$Type} from "packages/com/minecolonies/api/items/$ISupplyItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlacementError, $PlacementError$Type} from "packages/com/ldtteam/structurize/placement/handlers/placement/$PlacementError"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSupplyChestDeployer extends $AbstractItemMinecolonies implements $ISupplyItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "canShipBePlaced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Blueprint$Type, arg3: $List$Type<($PlacementError$Type)>, arg4: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSupplyChestDeployer$Type = ($ItemSupplyChestDeployer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSupplyChestDeployer_ = $ItemSupplyChestDeployer$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemMilkyBread" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMilkyBread extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMilkyBread$Type = ($ItemMilkyBread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMilkyBread_ = $ItemMilkyBread$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AssigningStrategy, $AssigningStrategy$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$AssigningStrategy"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$RequestState, $RequestState$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$RequestState"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IRequest<R extends $IRequestable> {

 "removeChildren"<T extends $IToken<(any)>>(...arg0: (T)[]): void
 "removeChildren"<T extends $IToken<(any)>>(arg0: $Collection$Type<(T)>): void
 "getLongDisplayString"(): $Component
 "getShortDisplayString"(): $Component
 "childStateUpdated"(arg0: $IRequestManager$Type, arg1: $IToken$Type<(any)>): void
 "getDisplayIcon"(): $ResourceLocation
 "getRequestOfType"<T>(arg0: $Class$Type<(T)>): $Optional<(T)>
 "addDelivery"(arg0: $ItemStack$Type): void
 "addDelivery"(arg0: $List$Type<($ItemStack$Type)>): void
 "resetDeliveries"(): void
 "getResolverToolTip"(arg0: $IColonyView$Type): $List<($MutableComponent)>
 "getParent"<T extends $IToken<(any)>>(): T
 "getId"<T extends $IToken<(any)>>(): T
 "getState"(): $RequestState
 "getType"(): $TypeToken<(any)>
 "setParent"<T extends $IToken<(any)>>(arg0: T): void
 "getResult"(): R
 "setState"(arg0: $IRequestManager$Type, arg1: $RequestState$Type): void
 "setResult"(arg0: R): void
 "getChildren"(): $ImmutableCollection<($IToken<(any)>)>
 "addChild"<T extends $IToken<(any)>>(arg0: T): void
 "hasChildren"(): boolean
 "getRequest"(): R
 "hasResult"(): boolean
 "getStrategy"(): $AssigningStrategy
 "getRequester"(): $IRequester
 "removeChild"<T extends $IToken<(any)>>(arg0: T): void
 "canBeDelivered"(): boolean
 "getDeliveries"(): $ImmutableList<($ItemStack)>
 "getSuperClasses"(): $Set<($TypeToken<(any)>)>
 "hasParent"(): boolean
 "overrideCurrentDeliveries"(arg0: $ImmutableList$Type<($ItemStack$Type)>): void
 "getDisplayStacks"(): $List<($ItemStack)>
 "addChildren"<T extends $IToken<(any)>>(arg0: $Collection$Type<(T)>): void
 "addChildren"<T extends $IToken<(any)>>(...arg0: (T)[]): void
}

export namespace $IRequest {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequest$Type<R> = ($IRequest<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequest_<R> = $IRequest$Type<(R)>;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesContainer" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $AbstractBlockMinecoloniesContainer<B extends $AbstractBlockMinecoloniesContainer<(B)>> extends $AbstractBlockMinecolonies<(B)> {
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
export type $AbstractBlockMinecoloniesContainer$Type<B> = ($AbstractBlockMinecoloniesContainer<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesContainer_<B> = $AbstractBlockMinecoloniesContainer$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry" {
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$IJobView, $IJobView$Type} from "packages/com/minecolonies/api/colony/jobs/$IJobView"
import {$IJob, $IJob$Type} from "packages/com/minecolonies/api/colony/jobs/$IJob"

export class $JobEntry {


public "getJobViewProducer"(): $Supplier<($BiFunction<($IColonyView), ($ICitizenDataView), ($IJobView)>)>
public "produceJob"(arg0: $ICitizenData$Type): $IJob<(any)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getKey"(): $ResourceLocation
public "getTranslationKey"(): string
get "jobViewProducer"(): $Supplier<($BiFunction<($IColonyView), ($ICitizenDataView), ($IJobView)>)>
get "key"(): $ResourceLocation
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JobEntry$Type = ($JobEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JobEntry_ = $JobEntry$Type;
}}
declare module "packages/com/minecolonies/api/research/$ILocalResearch" {
import {$IResearchEffectManager, $IResearchEffectManager$Type} from "packages/com/minecolonies/api/research/effects/$IResearchEffectManager"
import {$ResearchState, $ResearchState$Type} from "packages/com/minecolonies/api/research/util/$ResearchState"
import {$ILocalResearchTree, $ILocalResearchTree$Type} from "packages/com/minecolonies/api/research/$ILocalResearchTree"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILocalResearch {

 "research"(arg0: $IResearchEffectManager$Type, arg1: $ILocalResearchTree$Type): boolean
 "getId"(): $ResourceLocation
 "getState"(): $ResearchState
 "setState"(arg0: $ResearchState$Type): void
 "getDepth"(): integer
 "setProgress"(arg0: integer): void
 "getProgress"(): integer
 "getBranch"(): $ResourceLocation
}

export namespace $ILocalResearch {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocalResearch$Type = ($ILocalResearch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILocalResearch_ = $ILocalResearch$Type;
}}
declare module "packages/com/minecolonies/api/blocks/types/$GraveType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GraveType extends $Enum<($GraveType)> implements $StringRepresentable {
static readonly "DEFAULT": $GraveType
static readonly "DECAYED": $GraveType


public "getName"(): string
public "toString"(): string
public static "values"(): ($GraveType)[]
public static "valueOf"(arg0: string): $GraveType
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getTranslationKey"(): string
public static "byMetadata"(arg0: integer): $GraveType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
get "metadata"(): integer
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraveType$Type = (("decayed") | ("default")) | ($GraveType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraveType_ = $GraveType$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/$IMysticalSite" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMysticalSite extends $IBuilding {

 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean): integer
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean, arg3: $JobEntry$Type): integer
 "hasCitizenCompletedRequestsToPickup"(arg0: $ICitizenData$Type): boolean
 "upgradeBuildingLevelToSchematicData"(): void
 "overruleNextOpenRequestOfCitizenWithStack"(arg0: $ICitizenData$Type, arg1: $ItemStack$Type): boolean
 "onRestart"(arg0: $ICitizenData$Type): void
 "destroy"(): void
 "canEat"(arg0: $ItemStack$Type): boolean
 "pickUp"(arg0: $Player$Type): void
 "isBuilt"(): boolean
 "getHandlers"(): $List<($IItemHandler)>
 "onPlayerEnterNearby"(arg0: $Player$Type): void
 "canBeBuiltByBuilder"(arg0: integer): boolean
 "resetGuardBuildingNear"(): void
 "getRequiredItemsAndAmount"(): $Map<($Predicate<($ItemStack)>), ($Tuple<(integer), (boolean)>)>
 "hasWorkerOpenRequestsFiltered"(arg0: integer, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): boolean
 "setCustomBuildingName"(arg0: string): void
 "isGuardBuildingNear"(): boolean
 "hasWorkerOpenRequests"(arg0: integer): boolean
 "onPlayerEnterBuilding"(arg0: $Player$Type): void
 "hasWorkerOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): boolean
 "getBuildingDisplayName"(): string
 "getCitizenForRequest"(arg0: $IToken$Type<(any)>): $Optional<($ICitizenData)>
 "getAllAssignedCitizen"(): $Set<($ICitizenData)>
 "getCompletedRequests"(arg0: $ICitizenData$Type): $Collection<($IRequest<(any)>)>
 "isItemStackInRequest"(arg0: $ItemStack$Type): boolean
 "getCompletedRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "cancelAllRequestsOfCitizen"(arg0: $ICitizenData$Type): void
 "getOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsByRequestableType"(): $Map<($TypeToken<(any)>), ($Collection<($IToken<(any)>)>)>
 "getSettingValueOrDefault"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>, arg1: S): S
 "getCompletedRequestsOfType"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "reservedStacksExcluding"(arg0: $IRequest$Type<(any)>): $Map<($ItemStorage), (integer)>
 "markRequestAsAccepted"(arg0: $ICitizenData$Type, arg1: $IToken$Type<(any)>): void
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "hasCitizenCompletedRequests"(arg0: $ICitizenData$Type): boolean
 "overruleNextOpenRequestWithStack"(arg0: $ItemStack$Type): void
 "createPickupRequest"(arg0: integer): boolean
 "onPlacement"(): void
 "getRequester"(): $IRequester
 "onDestroyed"(): void
 "markDirty"(): void
 "getSetting"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>): T
 "requestRepair"(arg0: $BlockPos$Type): void
 "canBeGathered"(): boolean
 "isMatchingBlock"(arg0: $Block$Type): boolean
 "hasOpenSyncRequest"(arg0: $ICitizenData$Type): boolean
 "getOpenRequests"(arg0: integer): $Collection<($IRequest<(any)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "requestUpgrade"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "requestRemoval"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "deconstruct"(): void
 "forceTransferStack"(arg0: $ItemStack$Type, arg1: $Level$Type): $ItemStack
 "removeWorkOrder"(): void
 "createRequest"<R extends $IRequestable>(arg0: R, arg1: boolean): $IToken<(any)>
 "createRequest"<R extends $IRequestable>(arg0: $ICitizenData$Type, arg1: R, arg2: boolean): $IToken<(any)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(arg0: integer): integer
 "calculateCorners"(): void
 "isInBuilding"(arg0: $BlockPos$Type): boolean
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "processOfflineTime"(arg0: long): void
 "createResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "onColonyTick"(arg0: $IColony$Type): void
 "getMaxToolLevel"(): integer
 "canAssignCitizens"(): boolean
 "getBuildingType"(): $BuildingEntry
 "getCustomName"(): string
 "onWakeUp"(): void
 "onCleanUp"(arg0: $ICitizenData$Type): void
 "getColony"(): $IColony
 "onUpgradeComplete"(arg0: integer): void
 "getTileEntity"(): $AbstractTileEntityColonyBuilding
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "addContainerPosition"(arg0: $BlockPos$Type): void
 "registerBlockPosition"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "registerBlockPosition"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "removeContainerPosition"(arg0: $BlockPos$Type): void
 "alterPickUpPriority"(arg0: integer): void
 "getPickUpPriority"(): integer
 "setTileEntity"(arg0: $AbstractTileEntityColonyBuilding$Type): void
 "getContainers"(): $List<($BlockPos)>
 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: $IBuildingModule$Type): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
 "getId"(): $IToken<(any)>
 "getLocation"(): $ILocation
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IMysticalSite {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMysticalSite$Type = ($IMysticalSite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMysticalSite_ = $IMysticalSite$Type;
}}
declare module "packages/com/minecolonies/api/tileentities/$AbstractTileEntityRack" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $AbstractTileEntityRack extends $BlockEntity implements $MenuProvider {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "updateWarehouseIfAvailable"(arg0: $ItemStack$Type): void
public "isEmpty"(): boolean
public "getCount"(arg0: $ItemStorage$Type): integer
public "getCount"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): integer
public "getItemCount"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "updateItemStorage"(): void
public "getFreeSlots"(): integer
public "getOtherChest"(): $AbstractTileEntityRack
public "getUpgradeSize"(): integer
public "setBuildingPos"(arg0: $BlockPos$Type): void
public "setInWarehouse"(arg0: boolean): void
public "upgradeRackSize"(): void
public "hasItemStack"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): boolean
public "hasItemStack"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "hasSimilarStack"(arg0: $ItemStack$Type): boolean
public "createInventory"(arg0: integer): $ItemStackHandler
public "getInventory"(): $IItemHandlerModifiable
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
get "empty"(): boolean
get "freeSlots"(): integer
get "otherChest"(): $AbstractTileEntityRack
get "upgradeSize"(): integer
set "buildingPos"(value: $BlockPos$Type)
set "inWarehouse"(value: boolean)
get "inventory"(): $IItemHandlerModifiable
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTileEntityRack$Type = ($AbstractTileEntityRack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTileEntityRack_ = $AbstractTileEntityRack$Type;
}}
declare module "packages/com/minecolonies/api/colony/modules/$IModuleContainer" {
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export interface $IModuleContainer<T> {

 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: T): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
}

export namespace $IModuleContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleContainer$Type<T> = ($IModuleContainer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleContainer_<T> = $IModuleContainer$Type<(T)>;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingsModuleView" {
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export interface $ISettingsModuleView extends $IBuildingModuleView {

 "trigger"(arg0: $ISettingKey$Type<(any)>): void
 "getSetting"<T extends $ISetting<(any)>>(arg0: $ISettingKey$Type<(T)>): T
 "getIcon"(): string
 "getDesc"(): string
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "setBuildingView"(arg0: $IBuildingView$Type): $IBuildingModuleView
 "isPageVisible"(): boolean
 "getProducer"<M extends $IBuildingModule, V extends $IBuildingModuleView>(): $BuildingEntry$ModuleProducer<(M), (V)>
 "setProducer"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): $IBuildingModuleView
 "getWindow"(): $BOWindow
 "getColony"(): $IColonyView
 "getBuildingView"(): $IBuildingView
}

export namespace $ISettingsModuleView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsModuleView$Type = ($ISettingsModuleView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingsModuleView_ = $ISettingsModuleView$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemChorusBread" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemChorusBread extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemChorusBread$Type = ($ItemChorusBread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemChorusBread_ = $ItemChorusBread$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$MinecoloniesFarmland" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MinecoloniesFarmland extends $AbstractBlockMinecolonies<($MinecoloniesFarmland)> implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FARMLAND": string
static readonly "FLOODED_FARMLAND": string
static readonly "MOISTURE": $IntegerProperty
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

constructor(arg0: string, arg1: boolean, arg2: double)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "getRegistryName"(): $ResourceLocation
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "turnToDirt"(arg0: $Entity$Type, arg1: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type): void
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "registryName"(): $ResourceLocation
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecoloniesFarmland$Type = ($MinecoloniesFarmland);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecoloniesFarmland_ = $MinecoloniesFarmland$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutRabbitHutch" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutRabbitHutch extends $AbstractBlockHut<($BlockHutRabbitHutch)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutRabbitHutch$Type = ($BlockHutRabbitHutch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutRabbitHutch_ = $BlockHutRabbitHutch$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockBarrel" {
import {$BarrelType, $BarrelType$Type} from "packages/com/minecolonies/api/blocks/types/$BarrelType"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractBlockBarrel, $AbstractBlockBarrel$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockBarrel"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
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
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockBarrel extends $AbstractBlockBarrel<($BlockBarrel)> implements $EntityBlock {
static readonly "VARIANT": $EnumProperty<($BarrelType)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBarrel$Type = ($BlockBarrel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBarrel_ = $BlockBarrel$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemMistletoe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMistletoe extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMistletoe$Type = ($ItemMistletoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMistletoe_ = $ItemMistletoe$Type;
}}
declare module "packages/com/minecolonies/core/enchants/$RaiderDamageEnchant" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $RaiderDamageEnchant extends $Enchantment {
 "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, arg1: ($EquipmentSlot$Type)[])

public "getMinLevel"(): integer
public "getMaxCost"(arg0: integer): integer
public "getMinCost"(arg0: integer): integer
public "getMaxLevel"(): integer
get "minLevel"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaiderDamageEnchant$Type = ($RaiderDamageEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RaiderDamageEnchant_ = $RaiderDamageEnchant$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenHappinessHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$IHappinessModifier, $IHappinessModifier$Type} from "packages/com/minecolonies/api/entity/citizen/happiness/$IHappinessModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"

export interface $ICitizenHappinessHandler {

 "getModifier"(arg0: string): $IHappinessModifier
 "resetModifier"(arg0: string): void
 "getModifiers"(): $List<(string)>
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "processDailyHappiness"(arg0: $ICitizenData$Type): void
 "getHappiness"(arg0: $IColony$Type, arg1: $ICitizenData$Type): double
 "addModifier"(arg0: $IHappinessModifier$Type): void
}

export namespace $ICitizenHappinessHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenHappinessHandler$Type = ($ICitizenHappinessHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenHappinessHandler_ = $ICitizenHappinessHandler$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockCompostedDirt" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ITickableBlockMinecolonies, $ITickableBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$ITickableBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockCompostedDirt extends $AbstractBlockMinecolonies<($BlockCompostedDirt)> implements $ITickableBlockMinecolonies {
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
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "getRegistryName"(): $ResourceLocation
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCompostedDirt$Type = ($BlockCompostedDirt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCompostedDirt_ = $BlockCompostedDirt$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockPostBox" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IRSComponentBlock, $IRSComponentBlock$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IRSComponentBlock"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPostBox extends $AbstractBlockHut<($BlockPostBox)> implements $IRSComponentBlock {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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
/**
 * 
 * @deprecated
 */
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPostBox$Type = ($BlockPostBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPostBox_ = $BlockPostBox$Type;
}}
declare module "packages/com/minecolonies/core/blocks/schematic/$BlockWaypoint" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $BlockWaypoint extends $AbstractBlockMinecolonies<($BlockWaypoint)> {
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

public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWaypoint$Type = ($BlockWaypoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWaypoint_ = $BlockWaypoint$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScepterPermission" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
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
import {$IBlockOverlayItem, $IBlockOverlayItem$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem"
import {$IBlockOverlayItem$OverlayBox, $IBlockOverlayItem$OverlayBox$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem$OverlayBox"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScepterPermission extends $AbstractItemMinecolonies implements $IBlockOverlayItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getOverlayBoxes"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $List<($IBlockOverlayItem$OverlayBox)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScepterPermission$Type = ($ItemScepterPermission);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScepterPermission_ = $ItemScepterPermission$Type;
}}
declare module "packages/com/minecolonies/api/quests/$FinishedQuest" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IQuestTemplate, $IQuestTemplate$Type} from "packages/com/minecolonies/api/quests/$IQuestTemplate"

export class $FinishedQuest extends $Record {

constructor(template: $IQuestTemplate$Type, finishedCount: integer)

public "finishedCount"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "template"(): $IQuestTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FinishedQuest$Type = ($FinishedQuest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FinishedQuest_ = $FinishedQuest$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesDirectional" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockMinecolonies, $IBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $AbstractBlockMinecoloniesDirectional<B extends $AbstractBlockMinecoloniesDirectional<(B)>> extends $DirectionalBlock implements $IBlockMinecolonies<(B)> {
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

public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesDirectional$Type<B> = ($AbstractBlockMinecoloniesDirectional<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesDirectional_<B> = $AbstractBlockMinecoloniesDirectional$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/colony/workorders/$WorkOrderType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WorkOrderType extends $Enum<($WorkOrderType)> {
static readonly "BUILD": $WorkOrderType
static readonly "UPGRADE": $WorkOrderType
static readonly "REPAIR": $WorkOrderType
static readonly "REMOVE": $WorkOrderType


public static "values"(): ($WorkOrderType)[]
public static "valueOf"(arg0: string): $WorkOrderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkOrderType$Type = (("repair") | ("upgrade") | ("build") | ("remove")) | ($WorkOrderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkOrderType_ = $WorkOrderType$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemIronScimitar" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemIronScimitar extends $SwordItem {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIronScimitar$Type = ($ItemIronScimitar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIronScimitar_ = $ItemIronScimitar$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutBarracks" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutBarracks extends $AbstractBlockHut<($BlockHutBarracks)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutBarracks$Type = ($BlockHutBarracks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutBarracks_ = $BlockHutBarracks$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemMagicPotion" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMagicPotion extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMagicPotion$Type = ($ItemMagicPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMagicPotion_ = $ItemMagicPotion$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$SimpleQuarry" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SimpleQuarry extends $AbstractBlockHut<($SimpleQuarry)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleQuarry$Type = ($SimpleQuarry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleQuarry_ = $SimpleQuarry$Type;
}}
declare module "packages/com/minecolonies/api/crafting/$ItemStorage" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ImmutableItemStorage, $ImmutableItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ImmutableItemStorage"

export class $ItemStorage {

constructor(arg0: $JsonObject$Type)
constructor(arg0: $Item$Type)
constructor(arg0: $ItemStack$Type, arg1: integer, arg2: boolean)
constructor(arg0: $ItemStack$Type, arg1: integer, arg2: boolean, arg3: boolean)
constructor(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean)
constructor(arg0: $ItemStack$Type)
constructor(arg0: $ItemStack$Type, arg1: boolean)

public "matchDefinitionEquals"(arg0: $ItemStorage$Type): boolean
public "getRemainingDurablityValue"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "copy"(): $ItemStorage
public "getItem"(): $Item
public "getAmount"(): integer
public "getItemStack"(): $ItemStack
public "ignoreDamageValue"(): boolean
public "toImmutable"(): $ImmutableItemStorage
public "setAmount"(arg0: integer): void
public static "getItemStackOfListMatchingPredicate"(arg0: $List$Type<($ItemStorage$Type)>, arg1: $Predicate$Type<($ItemStack$Type)>): $ItemStorage
public "ignoreNBT"(): boolean
public "getDamageValue"(): integer
get "remainingDurablityValue"(): integer
get "empty"(): boolean
get "item"(): $Item
get "amount"(): integer
get "itemStack"(): $ItemStack
set "amount"(value: integer)
get "damageValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStorage$Type = ($ItemStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStorage_ = $ItemStorage$Type;
}}
declare module "packages/com/minecolonies/api/colony/workorders/$IWorkOrder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WorkOrderType, $WorkOrderType$Type} from "packages/com/minecolonies/api/colony/workorders/$WorkOrderType"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$IWorkManager, $IWorkManager$Type} from "packages/com/minecolonies/api/colony/workorders/$IWorkManager"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IJob, $IJob$Type} from "packages/com/minecolonies/api/colony/jobs/$IJob"

export interface $IWorkOrder {

 "isClaimed"(): boolean
 "getLocation"(): $BlockPos
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type, arg1: $IWorkManager$Type): void
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getFileName"(): string
 "isMirrored"(): boolean
 "isCleared"(): boolean
 "getID"(): integer
 "getDisplayName"(): $Component
 "setID"(arg0: integer): void
 "isDirty"(): boolean
 "isValid"(arg0: $IColony$Type): boolean
 "getRotation"(): integer
 "onRemoved"(arg0: $IColony$Type): void
 "getClaimedBy"(): $BlockPos
 "serializeViewNetworkData"(arg0: $FriendlyByteBuf$Type): void
 "canBeResolved"(arg0: $IColony$Type, arg1: integer): boolean
 "getTargetLevel"(): integer
 "setClaimedBy"(arg0: $BlockPos$Type): void
 "setClaimedBy"(arg0: $ICitizenData$Type): void
 "setIteratorType"(arg0: string): void
 "setRequested"(arg0: boolean): void
 "isRequested"(): boolean
 "isClaimedBy"(arg0: $ICitizenData$Type): boolean
 "onCompleted"(arg0: $IColony$Type, arg1: $ICitizenData$Type): void
 "resetChange"(): void
 "canBeMadeBy"(arg0: $IJob$Type<(any)>): boolean
 "setCleared"(arg0: boolean): void
 "getIteratorType"(): string
 "canBuild"(arg0: $ICitizenData$Type): boolean
 "getStructurePath"(): string
 "getWorkOrderType"(): $WorkOrderType
 "getCurrentLevel"(): integer
 "clearClaimedBy"(): void
 "onAdded"(arg0: $IColony$Type, arg1: boolean): void
 "getTranslationKey"(): string
 "tooFarFromAnyBuilder"(arg0: $IColony$Type, arg1: integer): boolean
 "getAmountOfResources"(): integer
 "setAmountOfResources"(arg0: integer): void
 "getStructurePack"(): string
 "getBlueprintFuture"(): $Future<($Blueprint)>
}

export namespace $IWorkOrder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorkOrder$Type = ($IWorkOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorkOrder_ = $IWorkOrder$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IRequestable {

 "getSuperClasses"(): $Set<($TypeToken<(any)>)>

(): $Set<($TypeToken<(any)>)>
}

export namespace $IRequestable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequestable$Type = ($IRequestable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequestable_ = $IRequestable$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutWareHouse" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutWareHouse extends $AbstractBlockHut<($BlockHutWareHouse)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutWareHouse$Type = ($BlockHutWareHouse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutWareHouse_ = $BlockHutWareHouse$Type;
}}
declare module "packages/com/minecolonies/api/colony/fields/modules/$IFieldModule" {
import {$IField, $IField$Type} from "packages/com/minecolonies/api/colony/fields/$IField"

export interface $IFieldModule {

 "getField"(): $IField

(): $IField
}

export namespace $IFieldModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFieldModule$Type = ($IFieldModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFieldModule_ = $IFieldModule$Type;
}}
declare module "packages/com/minecolonies/api/crafting/$CompostRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CompostRecipe, $CompostRecipe$Type} from "packages/com/minecolonies/api/crafting/$CompostRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CompostRecipe$Serializer implements $RecipeSerializer<($CompostRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CompostRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CompostRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CompostRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CompostRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompostRecipe$Serializer$Type = ($CompostRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompostRecipe$Serializer_ = $CompostRecipe$Serializer$Type;
}}
declare module "packages/com/minecolonies/api/colony/workorders/$IWorkManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$IWorkOrder, $IWorkOrder$Type} from "packages/com/minecolonies/api/colony/workorders/$IWorkOrder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IWorkManager {

 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "isDirty"(): boolean
 "setDirty"(arg0: boolean): void
 "addWorkOrder"(arg0: $IWorkOrder$Type, arg1: boolean): void
 "removeWorkOrder"(arg0: $IWorkOrder$Type): void
 "removeWorkOrder"(arg0: integer): void
 "onColonyTick"(arg0: $IColony$Type): void
 "getWorkOrdersOfType"<W extends $IWorkOrder>(arg0: $Class$Type<(W)>): $List<(W)>
 "getOrderedList"(arg0: $Predicate$Type<($IWorkOrder$Type)>, arg1: $BlockPos$Type): $List<($IWorkOrder)>
 "getOrderedList"<W extends $IWorkOrder>(arg0: $Class$Type<(W)>, arg1: $BlockPos$Type): $List<(W)>
 "getWorkOrder"(arg0: integer): $IWorkOrder
 "getWorkOrder"<W extends $IWorkOrder>(arg0: integer, arg1: $Class$Type<(W)>): W
 "getWorkOrders"(): $Map<(integer), ($IWorkOrder)>
 "getColony"(): $IColony
 "getUnassignedWorkOrder"<W extends $IWorkOrder>(arg0: $Class$Type<(W)>): W
 "clearWorkForCitizen"(arg0: $ICitizenData$Type): void
}

export namespace $IWorkManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorkManager$Type = ($IWorkManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorkManager_ = $IWorkManager$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/statemachine/basestatemachine/$IStateMachine" {
import {$IStateMachineTransition, $IStateMachineTransition$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/transitions/$IStateMachineTransition"
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"

export interface $IStateMachine<T extends $IStateMachineTransition<(S)>, S extends $IState> {

 "getState"(): S
 "reset"(): void
 "addTransition"(arg0: T): void
 "removeTransition"(arg0: T): void
 "checkTransition"(arg0: T): boolean
 "transitionToNext"(arg0: T): boolean
 "tick"(): void
}

export namespace $IStateMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateMachine$Type<T, S> = ($IStateMachine<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateMachine_<T, S> = $IStateMachine$Type<(T), (S)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemFood" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IMinecoloniesFoodItem, $IMinecoloniesFoodItem$Type} from "packages/com/minecolonies/api/items/$IMinecoloniesFoodItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFood extends $Item implements $IMinecoloniesFoodItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: string, arg2: integer)

public "getTier"(): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "tier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFood$Type = ($ItemFood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFood_ = $ItemFood$Type;
}}
declare module "packages/com/minecolonies/api/items/$ItemBlockHut" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockHut extends $BlockItem {
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

constructor(arg0: $AbstractBlockHut$Type<(any)>, arg1: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockHut$Type = ($ItemBlockHut);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockHut_ = $ItemBlockHut$Type;
}}
declare module "packages/com/minecolonies/api/research/$ModResearchCostTypes$ResearchCostType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IResearchCost, $IResearchCost$Type} from "packages/com/minecolonies/api/research/costs/$IResearchCost"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModResearchCostTypes$ResearchCostType {

constructor(arg0: $ResourceLocation$Type, arg1: $Function$Type<($ModResearchCostTypes$ResearchCostType$Type), ($IResearchCost$Type)>)

public "parseFromJson"(arg0: $JsonObject$Type): $IResearchCost
public "getId"(): $ResourceLocation
public "createInstance"(): $IResearchCost
public "hasCorrectJsonFields"(arg0: $JsonObject$Type): boolean
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModResearchCostTypes$ResearchCostType$Type = ($ModResearchCostTypes$ResearchCostType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModResearchCostTypes$ResearchCostType_ = $ModResearchCostTypes$ResearchCostType$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IColonyPackageManager" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IColonyPackageManager {

 "addCloseSubscriber"(arg0: $ServerPlayer$Type): void
 "updateAwayTime"(): void
 "updateSubscribers"(): void
 "getCloseSubscribers"(): $Set<($ServerPlayer)>
 "addImportantColonyPlayer"(arg0: $ServerPlayer$Type): void
 "sendColonyViewPackets"(): void
 "sendPermissionsPackets"(): void
 "removeImportantColonyPlayer"(arg0: $ServerPlayer$Type): void
 "removeCloseSubscriber"(arg0: $ServerPlayer$Type): void
 "getLastContactInHours"(): integer
 "setDirty"(): void
 "sendWorkOrderPackets"(): void
 "setLastContactInHours"(arg0: integer): void
 "getImportantColonyPlayers"(): $Set<($ServerPlayer)>
}

export namespace $IColonyPackageManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColonyPackageManager$Type = ($IColonyPackageManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColonyPackageManager_ = $IColonyPackageManager$Type;
}}
declare module "packages/com/minecolonies/api/research/effects/registry/$ResearchEffectEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IResearchEffect, $IResearchEffect$Type} from "packages/com/minecolonies/api/research/effects/$IResearchEffect"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResearchEffectEntry {


public "getRegistryName"(): $ResourceLocation
public "readFromNBT"(arg0: $CompoundTag$Type): $IResearchEffect<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResearchEffectEntry$Type = ($ResearchEffectEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResearchEffectEntry_ = $ResearchEffectEntry$Type;
}}
declare module "packages/com/minecolonies/api/colony/workorders/$IWorkOrderView" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WorkOrderType, $WorkOrderType$Type} from "packages/com/minecolonies/api/colony/workorders/$WorkOrderType"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IWorkOrderView {

 "getLocation"(): $BlockPos
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "isMirrored"(): boolean
 "getDisplayName"(): $Component
 "getRotation"(): integer
 "getClaimedBy"(): $BlockPos
 "getPackName"(): string
 "setClaimedBy"(arg0: $BlockPos$Type): void
 "getStructurePath"(): string
 "getWorkOrderType"(): $WorkOrderType
 "getTranslationKey"(): string
 "canBuildIgnoringDistance"(arg0: $BlockPos$Type, arg1: integer): boolean
 "shouldShowIn"(arg0: $IBuildingView$Type): boolean
}

export namespace $IWorkOrderView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorkOrderView$Type = ($IWorkOrderView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorkOrderView_ = $IWorkOrderView$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenDiseaseHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"

export interface $ICitizenDiseaseHandler {

 "cure"(): void
 "onCollission"(arg0: $AbstractEntityCitizen$Type): void
 "isSick"(): boolean
 "setSleepsAtHospital"(arg0: boolean): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "sleepsAtHospital"(): boolean
 "tick"(): void
 "isHurt"(): boolean
 "getDisease"(): string
}

export namespace $ICitizenDiseaseHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenDiseaseHandler$Type = ($ICitizenDiseaseHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenDiseaseHandler_ = $ICitizenDiseaseHandler$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutFlorist" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutFlorist extends $AbstractBlockHut<($BlockHutFlorist)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutFlorist$Type = ($BlockHutFlorist);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutFlorist_ = $BlockHutFlorist$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScrollGuardHelp" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractItemScroll, $AbstractItemScroll$Type} from "packages/com/minecolonies/core/items/$AbstractItemScroll"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollGuardHelp extends $AbstractItemScroll {
static readonly "TAG_COLONY_DIM": string
static readonly "TAG_BUILDING_POS": string
static readonly "FAIL_RESPONSES_TOTAL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollGuardHelp$Type = ($ItemScrollGuardHelp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollGuardHelp_ = $ItemScrollGuardHelp$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemBreadDough" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBreadDough extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBreadDough$Type = ($ItemBreadDough);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBreadDough_ = $ItemBreadDough$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/data/$IDataStoreManager" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IDataStore, $IDataStore$Type} from "packages/com/minecolonies/api/colony/requestsystem/data/$IDataStore"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IDataStoreManager {

 "remove"(arg0: $IToken$Type<(any)>): void
 "get"<T extends $IDataStore>(arg0: $IToken$Type<(any)>, arg1: $TypeToken$Type<(T)>): T
 "get"<T extends $IDataStore>(arg0: $IToken$Type<(any)>, arg1: $Supplier$Type<(T)>): T
 "removeAll"(): void
}

export namespace $IDataStoreManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataStoreManager$Type = ($IDataStoreManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataStoreManager_ = $IDataStoreManager$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemCookieDough" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCookieDough extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCookieDough$Type = ($ItemCookieDough);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCookieDough_ = $ItemCookieDough$Type;
}}
declare module "packages/com/minecolonies/api/crafting/$ImmutableItemStorage" {
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"

export class $ImmutableItemStorage extends $ItemStorage {

constructor(arg0: $ItemStorage$Type)

public "setAmount"(arg0: integer): void
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableItemStorage$Type = ($ImmutableItemStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableItemStorage_ = $ImmutableItemStorage$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScepterGuard" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScepterGuard extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScepterGuard$Type = ($ItemScepterGuard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScepterGuard_ = $ItemScepterGuard$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutBaker" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutBaker extends $AbstractBlockHut<($BlockHutBaker)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutBaker$Type = ($BlockHutBaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutBaker_ = $BlockHutBaker$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutTavern" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutTavern extends $AbstractBlockHut<($BlockHutTavern)> {
static readonly "BLOCKHUT_TAVERN": string
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutTavern$Type = ($BlockHutTavern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutTavern_ = $BlockHutTavern$Type;
}}
declare module "packages/com/minecolonies/core/entity/pathfinding/navigation/$AbstractAdvancedPathNavigate" {
import {$PathResult, $PathResult$Type} from "packages/com/minecolonies/core/entity/pathfinding/pathresults/$PathResult"
import {$GroundPathNavigation, $GroundPathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$GroundPathNavigation"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$TreePathResult, $TreePathResult$Type} from "packages/com/minecolonies/core/entity/pathfinding/pathresults/$TreePathResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStuckHandler, $IStuckHandler$Type} from "packages/com/minecolonies/api/entity/pathfinding/$IStuckHandler"
import {$PathingOptions, $PathingOptions$Type} from "packages/com/minecolonies/core/entity/pathfinding/$PathingOptions"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractPathJob, $AbstractPathJob$Type} from "packages/com/minecolonies/core/entity/pathfinding/pathjobs/$AbstractPathJob"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractAdvancedPathNavigate extends $GroundPathNavigation {

constructor(arg0: $Mob$Type, arg1: $Level$Type)

public "setSwimSpeedFactor"(arg0: double): void
public "setStuckHandler"(arg0: $IStuckHandler$Type): void
public "getPathingOptions"(): $PathingOptions
public "getDestination"(): $BlockPos
public "moveTowards"(arg0: $BlockPos$Type, arg1: double, arg2: double): $PathResult<($AbstractPathJob)>
public "moveToRandomPos"(arg0: integer, arg1: double, arg2: $Tuple$Type<($BlockPos$Type), ($BlockPos$Type)>): $PathResult<(any)>
public "moveToRandomPos"(arg0: double, arg1: double): $PathResult<(any)>
public "moveToXYZ"(arg0: double, arg1: double, arg2: double, arg3: double): $PathResult<(any)>
public "moveToTree"(arg0: integer, arg1: double, arg2: $List$Type<($ItemStorage$Type)>, arg3: integer, arg4: $IColony$Type): $TreePathResult
public "moveToTree"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: double, arg3: $List$Type<($ItemStorage$Type)>, arg4: integer, arg5: $IColony$Type): $TreePathResult
public "moveAwayFromXYZ"(arg0: $BlockPos$Type, arg1: double, arg2: double, arg3: boolean): $PathResult<(any)>
public "getDesiredPos"(): $BlockPos
public "moveToLivingEntity"(arg0: $Entity$Type, arg1: double): $PathResult<(any)>
public "getOurEntity"(): $Mob
public "moveAwayFromLivingEntity"(arg0: $Entity$Type, arg1: double, arg2: double): $PathResult<(any)>
public "tryMoveToBlockPos"(arg0: $BlockPos$Type, arg1: double): boolean
public "moveToRandomPosAroundX"(arg0: integer, arg1: double, arg2: $BlockPos$Type): $PathResult<(any)>
set "swimSpeedFactor"(value: double)
set "stuckHandler"(value: $IStuckHandler$Type)
get "pathingOptions"(): $PathingOptions
get "destination"(): $BlockPos
get "desiredPos"(): $BlockPos
get "ourEntity"(): $Mob
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAdvancedPathNavigate$Type = ($AbstractAdvancedPathNavigate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAdvancedPathNavigate_ = $AbstractAdvancedPathNavigate$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutGraveyard" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutGraveyard extends $AbstractBlockHut<($BlockHutGraveyard)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutGraveyard$Type = ($BlockHutGraveyard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutGraveyard_ = $BlockHutGraveyard$Type;
}}
declare module "packages/com/minecolonies/api/research/util/$ResearchState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ResearchState extends $Enum<($ResearchState)> {
static readonly "NOT_STARTED": $ResearchState
static readonly "IN_PROGRESS": $ResearchState
static readonly "FINISHED": $ResearchState


public static "values"(): ($ResearchState)[]
public static "valueOf"(arg0: string): $ResearchState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResearchState$Type = (("in_progress") | ("finished") | ("not_started")) | ($ResearchState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResearchState_ = $ResearchState$Type;
}}
declare module "packages/com/minecolonies/api/items/$ISupplyItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISupplyItem {

}

export namespace $ISupplyItem {
const SUPPLY_OFFSET_DISTANCE: integer
const SUPPLY_TOLERANCE_FRACTION: double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISupplyItem$Type = ($ISupplyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISupplyItem_ = $ISupplyItem$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockMinecoloniesNamedGrave" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$AbstractBlockMinecoloniesNamedGrave, $AbstractBlockMinecoloniesNamedGrave$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesNamedGrave"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMinecoloniesNamedGrave extends $AbstractBlockMinecoloniesNamedGrave<($BlockMinecoloniesNamedGrave)> {
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getPlacementState"(arg0: $BlockState$Type, arg1: $BlockEntity$Type, arg2: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMinecoloniesNamedGrave$Type = ($BlockMinecoloniesNamedGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMinecoloniesNamedGrave_ = $BlockMinecoloniesNamedGrave$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/$IGuardBuilding" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IGuardBuilding extends $IBuilding {

 "getTask"(): string
 "addPatrolTargets"(arg0: $BlockPos$Type): void
 "setGuardPos"(arg0: $BlockPos$Type): void
 "getPatrolDistance"(): integer
 "resetPatrolTargets"(): void
 "setRallyLocation"(arg0: $ILocation$Type): void
 "setPlayerToFollow"(arg0: $Player$Type): void
 "getPlayerToFollowOrRally"(): $Player
 "shallRetrieveOnLowHealth"(): boolean
 "requiresManualTarget"(): boolean
 "getNextPatrolTarget"(arg0: boolean): $BlockPos
 "setTempNextPatrolPoint"(arg0: $BlockPos$Type): void
 "shallPatrolManually"(): boolean
 "getPositionToFollow"(): $BlockPos
 "arrivedAtPatrolPoint"(arg0: $AbstractEntityCitizen$Type): void
 "getMinePos"(): $BlockPos
 "isTightGrouping"(): boolean
 "getGuardPos"(): $BlockPos
 "getRallyLocation"(): $ILocation
 "getBonusVision"(): integer
 "calculateMobs"(): void
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean): integer
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean, arg3: $JobEntry$Type): integer
 "hasCitizenCompletedRequestsToPickup"(arg0: $ICitizenData$Type): boolean
 "upgradeBuildingLevelToSchematicData"(): void
 "overruleNextOpenRequestOfCitizenWithStack"(arg0: $ICitizenData$Type, arg1: $ItemStack$Type): boolean
 "onRestart"(arg0: $ICitizenData$Type): void
 "destroy"(): void
 "canEat"(arg0: $ItemStack$Type): boolean
 "pickUp"(arg0: $Player$Type): void
 "isBuilt"(): boolean
 "getHandlers"(): $List<($IItemHandler)>
 "onPlayerEnterNearby"(arg0: $Player$Type): void
 "canBeBuiltByBuilder"(arg0: integer): boolean
 "resetGuardBuildingNear"(): void
 "getRequiredItemsAndAmount"(): $Map<($Predicate<($ItemStack)>), ($Tuple<(integer), (boolean)>)>
 "hasWorkerOpenRequestsFiltered"(arg0: integer, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): boolean
 "setCustomBuildingName"(arg0: string): void
 "isGuardBuildingNear"(): boolean
 "hasWorkerOpenRequests"(arg0: integer): boolean
 "onPlayerEnterBuilding"(arg0: $Player$Type): void
 "hasWorkerOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): boolean
 "getBuildingDisplayName"(): string
 "getCitizenForRequest"(arg0: $IToken$Type<(any)>): $Optional<($ICitizenData)>
 "getAllAssignedCitizen"(): $Set<($ICitizenData)>
 "getCompletedRequests"(arg0: $ICitizenData$Type): $Collection<($IRequest<(any)>)>
 "isItemStackInRequest"(arg0: $ItemStack$Type): boolean
 "getCompletedRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "cancelAllRequestsOfCitizen"(arg0: $ICitizenData$Type): void
 "getOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsByRequestableType"(): $Map<($TypeToken<(any)>), ($Collection<($IToken<(any)>)>)>
 "getSettingValueOrDefault"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>, arg1: S): S
 "getCompletedRequestsOfType"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "reservedStacksExcluding"(arg0: $IRequest$Type<(any)>): $Map<($ItemStorage), (integer)>
 "markRequestAsAccepted"(arg0: $ICitizenData$Type, arg1: $IToken$Type<(any)>): void
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "hasCitizenCompletedRequests"(arg0: $ICitizenData$Type): boolean
 "overruleNextOpenRequestWithStack"(arg0: $ItemStack$Type): void
 "createPickupRequest"(arg0: integer): boolean
 "onPlacement"(): void
 "getRequester"(): $IRequester
 "onDestroyed"(): void
 "markDirty"(): void
 "getSetting"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>): T
 "requestRepair"(arg0: $BlockPos$Type): void
 "canBeGathered"(): boolean
 "isMatchingBlock"(arg0: $Block$Type): boolean
 "hasOpenSyncRequest"(arg0: $ICitizenData$Type): boolean
 "getOpenRequests"(arg0: integer): $Collection<($IRequest<(any)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "requestUpgrade"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "requestRemoval"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "deconstruct"(): void
 "forceTransferStack"(arg0: $ItemStack$Type, arg1: $Level$Type): $ItemStack
 "removeWorkOrder"(): void
 "createRequest"<R extends $IRequestable>(arg0: R, arg1: boolean): $IToken<(any)>
 "createRequest"<R extends $IRequestable>(arg0: $ICitizenData$Type, arg1: R, arg2: boolean): $IToken<(any)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(arg0: integer): integer
 "calculateCorners"(): void
 "isInBuilding"(arg0: $BlockPos$Type): boolean
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "processOfflineTime"(arg0: long): void
 "createResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "onColonyTick"(arg0: $IColony$Type): void
 "getMaxToolLevel"(): integer
 "canAssignCitizens"(): boolean
 "getBuildingType"(): $BuildingEntry
 "getCustomName"(): string
 "onWakeUp"(): void
 "onCleanUp"(arg0: $ICitizenData$Type): void
 "getColony"(): $IColony
 "onUpgradeComplete"(arg0: integer): void
 "getTileEntity"(): $AbstractTileEntityColonyBuilding
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "addContainerPosition"(arg0: $BlockPos$Type): void
 "registerBlockPosition"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "registerBlockPosition"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "removeContainerPosition"(arg0: $BlockPos$Type): void
 "alterPickUpPriority"(arg0: integer): void
 "getPickUpPriority"(): integer
 "setTileEntity"(arg0: $AbstractTileEntityColonyBuilding$Type): void
 "getContainers"(): $List<($BlockPos)>
 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: $IBuildingModule$Type): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
 "getId"(): $IToken<(any)>
 "getLocation"(): $ILocation
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IGuardBuilding {
const PATROL_DISTANCE: integer
function checkIfGuardShouldTakeDamage(arg0: $AbstractEntityCitizen$Type, arg1: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuardBuilding$Type = ($IGuardBuilding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuardBuilding_ = $IGuardBuilding$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemChiefSword" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IChiefSwordItem, $IChiefSwordItem$Type} from "packages/com/minecolonies/api/items/$IChiefSwordItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemChiefSword extends $SwordItem implements $IChiefSwordItem {
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

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemChiefSword$Type = ($ItemChiefSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemChiefSword_ = $ItemChiefSword$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutComposter" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutComposter extends $AbstractBlockHut<($BlockHutComposter)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutComposter$Type = ($BlockHutComposter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutComposter_ = $BlockHutComposter$Type;
}}
declare module "packages/com/minecolonies/core/entity/pathfinding/$PathFindingStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PathFindingStatus extends $Enum<($PathFindingStatus)> {
static readonly "IN_PROGRESS_COMPUTING": $PathFindingStatus
static readonly "IN_PROGRESS_FOLLOWING": $PathFindingStatus
static readonly "CALCULATION_COMPLETE": $PathFindingStatus
static readonly "COMPLETE": $PathFindingStatus
static readonly "CANCELLED": $PathFindingStatus


public static "values"(): ($PathFindingStatus)[]
public static "valueOf"(arg0: string): $PathFindingStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathFindingStatus$Type = (("cancelled") | ("in_progress_computing") | ("calculation_complete") | ("complete") | ("in_progress_following")) | ($PathFindingStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathFindingStatus_ = $PathFindingStatus$Type;
}}
declare module "packages/com/minecolonies/api/quests/$IObjectiveInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $IObjectiveInstance extends $INBTSerializable<($CompoundTag)> {

 "getMissingQuantity"(): integer
 "isFulfilled"(): boolean
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IObjectiveInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IObjectiveInstance$Type = ($IObjectiveInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IObjectiveInstance_ = $IObjectiveInstance$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ISettingKey<T> {

 "getUniqueId"(): $ResourceLocation
 "getType"(): $Class<(any)>
}

export namespace $ISettingKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingKey$Type<T> = ($ISettingKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingKey_<T> = $ISettingKey$Type<(T)>;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockMinecolonies, $IBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"

export class $AbstractBlockMinecolonies<B extends $AbstractBlockMinecolonies<(B)>> extends $Block implements $IBlockMinecolonies<(B)> {
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

public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecolonies$Type<B> = ($AbstractBlockMinecolonies<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecolonies_<B> = $AbstractBlockMinecolonies$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemScrollBuff" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractItemScroll, $AbstractItemScroll$Type} from "packages/com/minecolonies/core/items/$AbstractItemScroll"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollBuff extends $AbstractItemScroll {
static readonly "TAG_COLONY_DIM": string
static readonly "TAG_BUILDING_POS": string
static readonly "FAIL_RESPONSES_TOTAL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollBuff$Type = ($ItemScrollBuff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollBuff_ = $ItemScrollBuff$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/$VisibleCitizenStatus" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VisibleCitizenStatus {
static readonly "EAT": $VisibleCitizenStatus
static readonly "HOUSE": $VisibleCitizenStatus
static readonly "RAIDED": $VisibleCitizenStatus
static readonly "MOURNING": $VisibleCitizenStatus
static readonly "BAD_WEATHER": $VisibleCitizenStatus
static readonly "SLEEP": $VisibleCitizenStatus
static readonly "SICK": $VisibleCitizenStatus
static readonly "WORKING": $VisibleCitizenStatus

constructor(arg0: $ResourceLocation$Type, arg1: string)

public "getIcon"(): $ResourceLocation
public static "getForId"(arg0: integer): $VisibleCitizenStatus
public "getId"(): integer
public "getTranslationKey"(): string
public static "getVisibleStatus"(): $Map<(integer), ($VisibleCitizenStatus)>
get "icon"(): $ResourceLocation
get "id"(): integer
get "translationKey"(): string
get "visibleStatus"(): $Map<(integer), ($VisibleCitizenStatus)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisibleCitizenStatus$Type = ($VisibleCitizenStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisibleCitizenStatus_ = $VisibleCitizenStatus$Type;
}}
declare module "packages/com/minecolonies/api/blocks/interfaces/$IBlockMinecolonies" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IBlockMinecolonies<B extends $IBlockMinecolonies<(B)>> {

 "registerBlock"(arg0: $IForgeRegistry$Type<($Block$Type)>): B
 "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
 "getRegistryName"(): $ResourceLocation
}

export namespace $IBlockMinecolonies {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockMinecolonies$Type<B> = ($IBlockMinecolonies<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockMinecolonies_<B> = $IBlockMinecolonies$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemRawPumpkinPie" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemRawPumpkinPie extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRawPumpkinPie$Type = ($ItemRawPumpkinPie);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRawPumpkinPie_ = $ItemRawPumpkinPie$Type;
}}
declare module "packages/com/minecolonies/api/colony/$ColonyState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IAIState, $IAIState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IAIState"

export class $ColonyState extends $Enum<($ColonyState)> implements $IAIState {
static readonly "INACTIVE": $ColonyState
static readonly "ACTIVE": $ColonyState
static readonly "UNLOADED": $ColonyState


public static "values"(): ($ColonyState)[]
public static "valueOf"(arg0: string): $ColonyState
public "isOkayToEat"(): boolean
get "okayToEat"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColonyState$Type = (("unloaded") | ("inactive") | ("active")) | ($ColonyState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColonyState_ = $ColonyState$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemFireArrow" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemFireArrow extends $ArrowItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFireArrow$Type = ($ItemFireArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFireArrow_ = $ItemFireArrow$Type;
}}
declare module "packages/com/minecolonies/api/research/$IGlobalResearch" {
import {$TranslatableContents, $TranslatableContents$Type} from "packages/net/minecraft/network/chat/contents/$TranslatableContents"
import {$IResearchCost, $IResearchCost$Type} from "packages/com/minecolonies/api/research/costs/$IResearchCost"
import {$ILocalResearchTree, $ILocalResearchTree$Type} from "packages/com/minecolonies/api/research/$ILocalResearchTree"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IResearchEffect, $IResearchEffect$Type} from "packages/com/minecolonies/api/research/effects/$IResearchEffect"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IResearchRequirement, $IResearchRequirement$Type} from "packages/com/minecolonies/api/research/$IResearchRequirement"

export interface $IGlobalResearch {

 "addRequirement"(arg0: $IResearchRequirement$Type): void
 "addCost"(arg0: $IResearchCost$Type): void
 "hasResearchedChild"(arg0: $ILocalResearchTree$Type): boolean
 "isInstant"(): boolean
 "getIconItemStack"(): $ItemStack
 "hasOnlyChild"(): boolean
 "getCostList"(): $List<($IResearchCost)>
 "setOnlyChild"(arg0: boolean): void
 "startResearch"(arg0: $ILocalResearchTree$Type): void
 "hasEnoughResources"(arg0: $IItemHandler$Type): boolean
 "getName"(): $TranslatableContents
 "isHidden"(): boolean
 "getParent"(): $ResourceLocation
 "getId"(): $ResourceLocation
 "setParent"(arg0: $ResourceLocation$Type): void
 "getChildren"(): $List<($ResourceLocation)>
 "addChild"(arg0: $ResourceLocation$Type): void
 "addChild"(arg0: $IGlobalResearch$Type): void
 "addEffect"(arg0: $IResearchEffect$Type<(any)>): void
 "canDisplay"(arg0: integer): boolean
 "getSubtitle"(): $TranslatableContents
 "getDepth"(): integer
 "isImmutable"(): boolean
 "getEffects"(): $List<($IResearchEffect<(any)>)>
 "getSortOrder"(): integer
 "getIconTextureResourceLocation"(): $ResourceLocation
 "getResearchRequirement"(): $List<($IResearchRequirement)>
 "getBranch"(): $ResourceLocation
 "isAutostart"(): boolean
 "canResearch"(arg0: integer, arg1: $ILocalResearchTree$Type): boolean
}

export namespace $IGlobalResearch {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGlobalResearch$Type = ($IGlobalResearch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGlobalResearch_ = $IGlobalResearch$Type;
}}
declare module "packages/com/minecolonies/api/items/$IChiefSwordItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChiefSwordItem {

}

export namespace $IChiefSwordItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChiefSwordItem$Type = ($IChiefSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChiefSwordItem_ = $IChiefSwordItem$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemSupplyCampDeployer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ISupplyItem, $ISupplyItem$Type} from "packages/com/minecolonies/api/items/$ISupplyItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlacementError, $PlacementError$Type} from "packages/com/ldtteam/structurize/placement/handlers/placement/$PlacementError"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSupplyCampDeployer extends $AbstractItemMinecolonies implements $ISupplyItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "canCampBePlaced"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($PlacementError$Type)>, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSupplyCampDeployer$Type = ($ItemSupplyCampDeployer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSupplyCampDeployer_ = $ItemSupplyCampDeployer$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IReproductionManager" {
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"

export interface $IReproductionManager {

 "onColonyTick"(arg0: $IColony$Type): void

(arg0: $IColony$Type): void
}

export namespace $IReproductionManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReproductionManager$Type = ($IReproductionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReproductionManager_ = $IReproductionManager$Type;
}}
declare module "packages/com/minecolonies/api/quests/$IQuestManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IQuestTemplate, $IQuestTemplate$Type} from "packages/com/minecolonies/api/quests/$IQuestTemplate"
import {$FinishedQuest, $FinishedQuest$Type} from "packages/com/minecolonies/api/quests/$FinishedQuest"
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IQuestManager extends $INBTSerializable<($CompoundTag)> {

 "getAvailableOrInProgressQuest"(arg0: $ResourceLocation$Type): $IQuestInstance
 "attemptAcceptQuest"(arg0: $ResourceLocation$Type, arg1: $Player$Type): boolean
 "getFinishedQuests"(): $List<($FinishedQuest)>
 "completeQuest"(arg0: $ResourceLocation$Type): void
 "getAvailableQuests"(): $List<($IQuestInstance)>
 "deleteQuest"(arg0: $ResourceLocation$Type): void
 "getInProgressQuests"(): $List<($IQuestInstance)>
 "injectAvailableQuest"(arg0: $IQuestInstance$Type): void
 "getReputation"(): double
 "alterReputation"(arg0: double): void
 "unlockQuest"(arg0: $ResourceLocation$Type): void
 "isUnlocked"(arg0: $ResourceLocation$Type): boolean
 "onColonyTick"(): void
 "onWorldLoad"(): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IQuestManager {
const GLOBAL_SERVER_QUESTS: $Map<($ResourceLocation), ($IQuestTemplate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuestManager$Type = ($IQuestManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuestManager_ = $IQuestManager$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutCook" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutCook extends $AbstractBlockHut<($BlockHutCook)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutCook$Type = ($BlockHutCook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutCook_ = $BlockHutCook$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutConcreteMixer" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutConcreteMixer extends $AbstractBlockHut<($BlockHutConcreteMixer)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutConcreteMixer$Type = ($BlockHutConcreteMixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutConcreteMixer_ = $BlockHutConcreteMixer$Type;
}}
declare module "packages/com/minecolonies/api/colony/colonyEvents/descriptions/$IColonyEventDescription" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IColonyEventDescription extends $INBTSerializable<($CompoundTag)> {

 "getName"(): string
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "serialize"(arg0: $FriendlyByteBuf$Type): void
 "setEventPos"(arg0: $BlockPos$Type): void
 "getEventPos"(): $BlockPos
 "getEventTypeId"(): $ResourceLocation
 "toDisplayString"(): string
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IColonyEventDescription {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColonyEventDescription$Type = ($IColonyEventDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColonyEventDescription_ = $IColonyEventDescription$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/$IBuilding" {
import {$IModuleContainer, $IModuleContainer$Type} from "packages/com/minecolonies/api/colony/modules/$IModuleContainer"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$IBuildingContainer, $IBuildingContainer$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuildingContainer"
import {$IRequestResolverProvider, $IRequestResolverProvider$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolverProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ISchematicProvider, $ISchematicProvider$Type} from "packages/com/minecolonies/api/colony/buildings/$ISchematicProvider"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IBuilding extends $IBuildingContainer, $IModuleContainer<($IBuildingModule)>, $IRequestResolverProvider, $IRequester, $ISchematicProvider {

 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean): integer
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean, arg3: $JobEntry$Type): integer
 "hasCitizenCompletedRequestsToPickup"(arg0: $ICitizenData$Type): boolean
 "upgradeBuildingLevelToSchematicData"(): void
 "overruleNextOpenRequestOfCitizenWithStack"(arg0: $ICitizenData$Type, arg1: $ItemStack$Type): boolean
 "onRestart"(arg0: $ICitizenData$Type): void
 "destroy"(): void
 "canEat"(arg0: $ItemStack$Type): boolean
 "pickUp"(arg0: $Player$Type): void
 "isBuilt"(): boolean
 "getHandlers"(): $List<($IItemHandler)>
 "onPlayerEnterNearby"(arg0: $Player$Type): void
 "canBeBuiltByBuilder"(arg0: integer): boolean
 "resetGuardBuildingNear"(): void
 "getRequiredItemsAndAmount"(): $Map<($Predicate<($ItemStack)>), ($Tuple<(integer), (boolean)>)>
 "hasWorkerOpenRequestsFiltered"(arg0: integer, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): boolean
 "setCustomBuildingName"(arg0: string): void
 "isGuardBuildingNear"(): boolean
 "hasWorkerOpenRequests"(arg0: integer): boolean
 "onPlayerEnterBuilding"(arg0: $Player$Type): void
 "hasWorkerOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): boolean
 "getBuildingDisplayName"(): string
 "getCitizenForRequest"(arg0: $IToken$Type<(any)>): $Optional<($ICitizenData)>
 "getAllAssignedCitizen"(): $Set<($ICitizenData)>
 "getCompletedRequests"(arg0: $ICitizenData$Type): $Collection<($IRequest<(any)>)>
 "isItemStackInRequest"(arg0: $ItemStack$Type): boolean
 "getCompletedRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "cancelAllRequestsOfCitizen"(arg0: $ICitizenData$Type): void
 "getOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsByRequestableType"(): $Map<($TypeToken<(any)>), ($Collection<($IToken<(any)>)>)>
 "getSettingValueOrDefault"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>, arg1: S): S
 "getCompletedRequestsOfType"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "reservedStacksExcluding"(arg0: $IRequest$Type<(any)>): $Map<($ItemStorage), (integer)>
 "markRequestAsAccepted"(arg0: $ICitizenData$Type, arg1: $IToken$Type<(any)>): void
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "hasCitizenCompletedRequests"(arg0: $ICitizenData$Type): boolean
 "overruleNextOpenRequestWithStack"(arg0: $ItemStack$Type): void
 "createPickupRequest"(arg0: integer): boolean
 "onPlacement"(): void
 "getRequester"(): $IRequester
 "onDestroyed"(): void
 "markDirty"(): void
 "getSetting"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>): T
 "requestRepair"(arg0: $BlockPos$Type): void
 "canBeGathered"(): boolean
 "isMatchingBlock"(arg0: $Block$Type): boolean
 "hasOpenSyncRequest"(arg0: $ICitizenData$Type): boolean
 "getOpenRequests"(arg0: integer): $Collection<($IRequest<(any)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "requestUpgrade"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "requestRemoval"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "deconstruct"(): void
 "forceTransferStack"(arg0: $ItemStack$Type, arg1: $Level$Type): $ItemStack
 "removeWorkOrder"(): void
 "createRequest"<R extends $IRequestable>(arg0: R, arg1: boolean): $IToken<(any)>
 "createRequest"<R extends $IRequestable>(arg0: $ICitizenData$Type, arg1: R, arg2: boolean): $IToken<(any)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(arg0: integer): integer
 "calculateCorners"(): void
 "isInBuilding"(arg0: $BlockPos$Type): boolean
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "processOfflineTime"(arg0: long): void
 "createResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "onColonyTick"(arg0: $IColony$Type): void
 "getMaxToolLevel"(): integer
 "canAssignCitizens"(): boolean
 "getBuildingType"(): $BuildingEntry
 "getCustomName"(): string
 "onWakeUp"(): void
 "onCleanUp"(arg0: $ICitizenData$Type): void
 "getColony"(): $IColony
 "onUpgradeComplete"(arg0: integer): void
 "getTileEntity"(): $AbstractTileEntityColonyBuilding
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "addContainerPosition"(arg0: $BlockPos$Type): void
 "registerBlockPosition"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "registerBlockPosition"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "removeContainerPosition"(arg0: $BlockPos$Type): void
 "alterPickUpPriority"(arg0: integer): void
 "getPickUpPriority"(): integer
 "setTileEntity"(arg0: $AbstractTileEntityColonyBuilding$Type): void
 "getContainers"(): $List<($BlockPos)>
 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: $IBuildingModule$Type): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
 "getId"(): $IToken<(any)>
 "getLocation"(): $ILocation
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IBuilding {
const WOOD_HUT_LEVEL: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuilding$Type = ($IBuilding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuilding_ = $IBuilding$Type;
}}
declare module "packages/com/minecolonies/api/entity/pathfinding/$IStuckHandler" {
import {$AbstractAdvancedPathNavigate, $AbstractAdvancedPathNavigate$Type} from "packages/com/minecolonies/core/entity/pathfinding/navigation/$AbstractAdvancedPathNavigate"

export interface $IStuckHandler {

 "checkStuck"(arg0: $AbstractAdvancedPathNavigate$Type): void

(arg0: $AbstractAdvancedPathNavigate$Type): void
}

export namespace $IStuckHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStuckHandler$Type = ($IStuckHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStuckHandler_ = $IStuckHandler$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager$RaidSpawnResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IRaiderManager$RaidSpawnResult extends $Enum<($IRaiderManager$RaidSpawnResult)> {
static readonly "SUCCESS": $IRaiderManager$RaidSpawnResult
static readonly "TOO_SMALL": $IRaiderManager$RaidSpawnResult
static readonly "CANNOT_RAID": $IRaiderManager$RaidSpawnResult
static readonly "NO_SPAWN_POINT": $IRaiderManager$RaidSpawnResult
static readonly "ERROR": $IRaiderManager$RaidSpawnResult


public static "values"(): ($IRaiderManager$RaidSpawnResult)[]
public static "valueOf"(arg0: string): $IRaiderManager$RaidSpawnResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRaiderManager$RaidSpawnResult$Type = (("too_small") | ("cannot_raid") | ("success") | ("no_spawn_point") | ("error")) | ($IRaiderManager$RaidSpawnResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRaiderManager$RaidSpawnResult_ = $IRaiderManager$RaidSpawnResult$Type;
}}
declare module "packages/com/minecolonies/api/quests/$IQuestInstance" {
import {$IQuestParticipant, $IQuestParticipant$Type} from "packages/com/minecolonies/api/quests/$IQuestParticipant"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IQuestGiver, $IQuestGiver$Type} from "packages/com/minecolonies/api/quests/$IQuestGiver"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IObjectiveInstance, $IObjectiveInstance$Type} from "packages/com/minecolonies/api/quests/$IObjectiveInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IQuestInstance extends $INBTSerializable<($CompoundTag)> {

 "getId"(): $ResourceLocation
 "isValid"(arg0: $IColony$Type): boolean
 "getObjectiveIndex"(): integer
 "getQuestGiverId"(): integer
 "getQuestTarget"(): integer
 "getParticipants"(): $List<(integer)>
 "advanceObjective"(arg0: $Player$Type): void
 "advanceObjective"(arg0: $Player$Type, arg1: integer): $IObjectiveInstance
 "getParticipant"(arg0: integer): $IQuestParticipant
 "onCompletion"(): void
 "onDeletion"(): void
 "getQuestGiver"(): $IQuestGiver
 "getAssignedPlayer"(): $UUID
 "onStart"(arg0: $Player$Type, arg1: $IColony$Type): void
 "onWorldLoad"(): void
 "getColony"(): $IColony
 "getCurrentObjectiveInstance"(): $IObjectiveInstance
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IQuestInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuestInstance$Type = ($IQuestInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuestInstance_ = $IQuestInstance$Type;
}}
declare module "packages/com/minecolonies/api/items/$IBlockOverlayItem$OverlayBox" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $IBlockOverlayItem$OverlayBox extends $Record {

constructor(bounds: $AABB$Type, color: integer, width: float, showThroughBlocks: boolean)

public "showThroughBlocks"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bounds"(): $AABB
public "color"(): integer
public "width"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockOverlayItem$OverlayBox$Type = ($IBlockOverlayItem$OverlayBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockOverlayItem$OverlayBox_ = $IBlockOverlayItem$OverlayBox$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$MinecoloniesCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $MinecoloniesCropBlock extends $AbstractBlockMinecolonies<($MinecoloniesCropBlock)> {
static "BELL_PEPPER": string
static "CABBAGE": string
static "CHICKPEA": string
static "DURUM": string
static "EGGPLANT": string
static "GARLIC": string
static "ONION": string
static "SOYBEAN": string
static "TOMATO": string
static "RICE": string
static readonly "AGE": $IntegerProperty
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

constructor(arg0: string, arg1: $Block$Type, arg2: $TagKey$Type<($Biome$Type)>)

public "isMaxAge"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getPreferredFarmland"(): $Block
public "getRegistryName"(): $ResourceLocation
public "attemptGrow"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): void
get "preferredFarmland"(): $Block
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecoloniesCropBlock$Type = ($MinecoloniesCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecoloniesCropBlock_ = $MinecoloniesCropBlock$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutStoneSmeltery" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutStoneSmeltery extends $AbstractBlockHut<($BlockHutStoneSmeltery)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutStoneSmeltery$Type = ($BlockHutStoneSmeltery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutStoneSmeltery_ = $BlockHutStoneSmeltery$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/factory/$IFactory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactoryController, $IFactoryController$Type} from "packages/com/minecolonies/api/colony/requestsystem/factory/$IFactoryController"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IFactory<Input, Output> {

 "getNewInstance"(arg0: $IFactoryController$Type, arg1: Input, ...arg2: (any)[]): Output
 "getFactoryOutputType"(): $TypeToken<(any)>
 "getFactoryInputType"(): $TypeToken<(any)>
 "deserialize"(arg0: $IFactoryController$Type, arg1: $FriendlyByteBuf$Type): Output
 "deserialize"(arg0: $IFactoryController$Type, arg1: $CompoundTag$Type): Output
 "serialize"(arg0: $IFactoryController$Type, arg1: Output, arg2: $FriendlyByteBuf$Type): void
 "serialize"(arg0: $IFactoryController$Type, arg1: Output): $CompoundTag
 "getSerializationId"(): short
}

export namespace $IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFactory$Type<Input, Output> = ($IFactory<(Input), (Output)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFactory_<Input, Output> = $IFactory$Type<(Input), (Output)>;
}}
declare module "packages/com/minecolonies/core/colony/buildings/$AbstractBuildingGuards$View" {
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractBuildingView, $AbstractBuildingView$Type} from "packages/com/minecolonies/core/colony/buildings/views/$AbstractBuildingView"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractBuildingGuards$View extends $AbstractBuildingView {

constructor(arg0: $IColonyView$Type, arg1: $BlockPos$Type)

public "deserialize"(arg0: $FriendlyByteBuf$Type): void
public "getMinePos"(): $BlockPos
public "setMinePos"(arg0: $BlockPos$Type): void
public "getGuards"(): $List<(integer)>
public "getPatrolTargets"(): $List<($BlockPos)>
get "minePos"(): $BlockPos
set "minePos"(value: $BlockPos$Type)
get "guards"(): $List<(integer)>
get "patrolTargets"(): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBuildingGuards$View$Type = ($AbstractBuildingGuards$View);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBuildingGuards$View_ = $AbstractBuildingGuards$View$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/combat/threat/$ThreatTableEntry" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ThreatTableEntry {

constructor(arg0: $LivingEntity$Type)

public "getThreat"(): integer
public "getLastSeen"(): long
public "getEntity"(): $LivingEntity
public "setLastSeen"(arg0: long): void
get "threat"(): integer
get "lastSeen"(): long
get "entity"(): $LivingEntity
set "lastSeen"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreatTableEntry$Type = ($ThreatTableEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreatTableEntry_ = $ThreatTableEntry$Type;
}}
declare module "packages/com/minecolonies/api/colony/$CitizenNameFile" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CitizenNameFile$NameOrder, $CitizenNameFile$NameOrder$Type} from "packages/com/minecolonies/api/colony/$CitizenNameFile$NameOrder"

export class $CitizenNameFile {
 "parts": integer
 "order": $CitizenNameFile$NameOrder
 "maleFirstNames": $List<(string)>
 "femalefirstNames": $List<(string)>
 "surnames": $List<(string)>

constructor(arg0: integer, arg1: $CitizenNameFile$NameOrder$Type, arg2: $List$Type<(string)>, arg3: $List$Type<(string)>, arg4: $List$Type<(string)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CitizenNameFile$Type = ($CitizenNameFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CitizenNameFile_ = $CitizenNameFile$Type;
}}
declare module "packages/com/minecolonies/api/colony/$ICitizen" {
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$InventoryCitizen, $InventoryCitizen$Type} from "packages/com/minecolonies/api/inventory/$InventoryCitizen"

export interface $ICitizen {

 "getSaturation"(): double
 "isFemale"(): boolean
 "getName"(): string
 "getId"(): integer
 "isChild"(): boolean
 "getInventory"(): $InventoryCitizen
 "isPaused"(): boolean
 "setPaused"(arg0: boolean): void
 "getColony"(): $IColony
}

export namespace $ICitizen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizen$Type = ($ICitizen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizen_ = $ICitizen$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemColonyFlagBanner" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BannerItem, $BannerItem$Type} from "packages/net/minecraft/world/item/$BannerItem"

export class $ItemColonyFlagBanner extends $BannerItem {
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

constructor(arg0: string, arg1: $Item$Properties$Type)
constructor(arg0: $Block$Type, arg1: $Block$Type, arg2: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
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
export type $ItemColonyFlagBanner$Type = ($ItemColonyFlagBanner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColonyFlagBanner_ = $ItemColonyFlagBanner$Type;
}}
declare module "packages/com/minecolonies/api/research/$IResearchManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IResearchEffectManager, $IResearchEffectManager$Type} from "packages/com/minecolonies/api/research/effects/$IResearchEffectManager"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ILocalResearchTree, $ILocalResearchTree$Type} from "packages/com/minecolonies/api/research/$ILocalResearchTree"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IResearchManager {

 "getResearchTree"(): $ILocalResearchTree
 "sendPackets"(arg0: $Set$Type<($ServerPlayer$Type)>, arg1: $Set$Type<($ServerPlayer$Type)>): void
 "isDirty"(): boolean
 "getResearchEffectIdFrom"(arg0: $Block$Type): $ResourceLocation
 "clearDirty"(): void
 "markDirty"(): void
 "checkAutoStartResearch"(): void
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "getResearchEffects"(): $IResearchEffectManager
}

export namespace $IResearchManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResearchManager$Type = ($IResearchManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResearchManager_ = $IResearchManager$Type;
}}
declare module "packages/com/minecolonies/core/entity/pathfinding/pathjobs/$AbstractPathJob" {
import {$PathResult, $PathResult$Type} from "packages/com/minecolonies/core/entity/pathfinding/pathresults/$PathResult"
import {$Path, $Path$Type} from "packages/net/minecraft/world/level/pathfinder/$Path"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$IPathJob, $IPathJob$Type} from "packages/com/minecolonies/api/entity/pathfinding/$IPathJob"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PathingOptions, $PathingOptions$Type} from "packages/com/minecolonies/core/entity/pathfinding/$PathingOptions"

export class $AbstractPathJob implements $Callable<($Path)>, $IPathJob {
static readonly "MAX_NODES": integer

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $PathResult$Type<(any)>, arg4: $Mob$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $PathResult$Type<(any)>, arg4: $Mob$Type)

public "getPathingOptions"(): $PathingOptions
public "getResult"(): $PathResult<(any)>
public "setPathingOptions"(arg0: $PathingOptions$Type): void
public "syncDebug"(): void
get "pathingOptions"(): $PathingOptions
get "result"(): $PathResult<(any)>
set "pathingOptions"(value: $PathingOptions$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPathJob$Type = ($AbstractPathJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPathJob_ = $AbstractPathJob$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IRegisteredStructureManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMysticalSite, $IMysticalSite$Type} from "packages/com/minecolonies/api/colony/buildings/$IMysticalSite"
import {$IWareHouse, $IWareHouse$Type} from "packages/com/minecolonies/api/colony/buildings/workerbuildings/$IWareHouse"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$IField, $IField$Type} from "packages/com/minecolonies/api/colony/fields/$IField"
import {$ITownHall, $ITownHall$Type} from "packages/com/minecolonies/api/colony/buildings/workerbuildings/$ITownHall"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IRegisteredStructureManager {

 "getRandomBuilding"(arg0: $Predicate$Type<($IBuilding$Type)>): $BlockPos
 "getTownHall"(): $ITownHall
 "sendPackets"(arg0: $Set$Type<($ServerPlayer$Type)>, arg1: $Set$Type<($ServerPlayer$Type)>): void
 "addField"(arg0: $IField$Type): boolean
 "removeWareHouse"(arg0: $IWareHouse$Type): void
 "getMysticalSites"(): $List<($IMysticalSite)>
 "cleanUpBuildings"(arg0: $IColony$Type): void
 "setTownHall"(arg0: $ITownHall$Type): void
 "removeMysticalSite"(arg0: $IMysticalSite$Type): void
 "getLeisureSites"(): $List<($BlockPos)>
 "hasMysticalSite"(): boolean
 "getFields"(arg0: $Predicate$Type<($IField$Type)>): $List<($IField)>
 "getField"(arg0: $Predicate$Type<($IField$Type)>): $Optional<($IField)>
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "removeField"(arg0: $Predicate$Type<($IField$Type)>): void
 "getFirstBuildingMatching"(arg0: $Predicate$Type<($IBuilding$Type)>): $BlockPos
 "addLeisureSite"(arg0: $BlockPos$Type): void
 "removeLeisureSite"(arg0: $BlockPos$Type): void
 "markFieldsDirty"(): void
 "removeBuilding"(arg0: $IBuilding$Type, arg1: $Set$Type<($ServerPlayer$Type)>): void
 "markBuildingsDirty"(): void
 "clearDirty"(): void
 "getWareHouses"(): $List<($IWareHouse)>
 "onColonyTick"(arg0: $IColony$Type): void
 "hasGuardBuildingNear"(arg0: $IBuilding$Type): boolean
 "guardBuildingChangedAt"(arg0: $IBuilding$Type, arg1: integer): void
 "getBestBuilding"(arg0: $AbstractEntityCitizen$Type, arg1: $Class$Type<(any)>): $BlockPos
 "getBestBuilding"(arg0: $BlockPos$Type, arg1: $Class$Type<(any)>): $BlockPos
 "getBuildings"(): $Map<($BlockPos), ($IBuilding)>
 "hasTownHall"(): boolean
 "hasWarehouse"(): boolean
 "getBuilding"(arg0: $BlockPos$Type): $IBuilding
 "getBuilding"<B extends $IBuilding>(arg0: $BlockPos$Type, arg1: $Class$Type<(B)>): B
 "addNewBuilding"(arg0: $AbstractTileEntityColonyBuilding$Type, arg1: $Level$Type): $IBuilding
 "onBuildingUpgradeComplete"(arg0: $IBuilding$Type, arg1: integer): void
 "canPlaceAt"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "getClosestWarehouseInColony"(arg0: $BlockPos$Type): $IWareHouse
 "getMysticalSiteMaxBuildingLevel"(): integer
 "getRandomLeisureSite"(): $BlockPos
 "keepChunkColonyLoaded"(arg0: $LevelChunk$Type): boolean
 "getHouseWithSpareBed"(): $IBuilding
}

export namespace $IRegisteredStructureManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegisteredStructureManager$Type = ($IRegisteredStructureManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegisteredStructureManager_ = $IRegisteredStructureManager$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemSifterMesh" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSifterMesh extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSifterMesh$Type = ($ItemSifterMesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSifterMesh_ = $ItemSifterMesh$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/data/$IDataStore" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"

export interface $IDataStore {

 "getId"(): $IToken<(any)>
 "setId"(arg0: $IToken$Type<(any)>): void
}

export namespace $IDataStore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataStore$Type = ($IDataStore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataStore_ = $IDataStore$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer" {
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export class $BuildingEntry$ModuleProducer<MODULECLASS extends $IBuildingModule, VIEWCLASS extends $IBuildingModuleView> {
readonly "key": string

constructor(arg0: string, arg1: $Supplier$Type<($IBuildingModule$Type)>, arg2: $Supplier$Type<($Supplier$Type<($IBuildingModuleView$Type)>)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "hasServerModule"(): boolean
public "hasView"(): boolean
public "getRuntimeID"(): integer
get "runtimeID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingEntry$ModuleProducer$Type<MODULECLASS, VIEWCLASS> = ($BuildingEntry$ModuleProducer<(MODULECLASS), (VIEWCLASS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingEntry$ModuleProducer_<MODULECLASS, VIEWCLASS> = $BuildingEntry$ModuleProducer$Type<(MODULECLASS), (VIEWCLASS)>;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutShepherd" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutShepherd extends $AbstractBlockHut<($BlockHutShepherd)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutShepherd$Type = ($BlockHutShepherd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutShepherd_ = $BlockHutShepherd$Type;
}}
declare module "packages/com/minecolonies/core/colony/buildings/views/$AbstractBuildingView" {
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractBuildingView implements $IBuildingView {


public "getOpenRequestsOfBuilding"(): $ImmutableList<($IRequest<(any)>)>
public "getLocation"(): $ILocation
public "getParent"(): $BlockPos
public "getId"(): $IToken<(any)>
public "isMirrored"(): boolean
public "getID"(): $BlockPos
public "getPosition"(): $BlockPos
public "registerModule"(arg0: $IBuildingModuleView$Type): void
public "getRotation"(): integer
public "deserialize"(arg0: $FriendlyByteBuf$Type): void
public "openGui"(arg0: boolean): void
public "getOpenRequestsOfType"<R>(arg0: $ICitizenDataView$Type, arg1: $Class$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
public "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
public "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenDataView$Type, arg1: $Class$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
public "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
public "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
public "getContainerList"(): $List<($BlockPos)>
public "setCustomName"(arg0: string): void
public "getStructurePath"(): string
public "getOpenRequests"(arg0: $ICitizenDataView$Type): $ImmutableList<($IRequest<(any)>)>
public "hasWorkOrder"(): boolean
public "getClaimRadius"(): integer
public "setBuildingType"(arg0: $BuildingEntry$Type): void
public "getBuildingType"(): $BuildingEntry
public "isDeconstructed"(): boolean
public "getWindow"(): $BOWindow
public "getOpenRequestsByCitizen"(): $Map<(integer), ($Collection<($IToken<(any)>)>)>
public "getCurrentWorkOrderLevel"(): integer
public "getStructurePack"(): string
public "getCustomName"(): string
public "getColony"(): $IColonyView
public "getBuildingLevel"(): integer
public "getModuleViewByType"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): T
public "getAllAssignedCitizens"(): $Set<(integer)>
public "getModuleViewMatching"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>, arg1: $Predicate$Type<(any)>): T
public "getBuildingMaxLevel"(): integer
public "isBuildingMaxLevel"(): boolean
public "isRepairing"(): boolean
public "getModuleViews"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): $List<(T)>
public "getAllModuleViews"(): $List<($IBuildingModuleView)>
public "getBuildingDmPrio"(): integer
public "isBuilding"(): boolean
public "isDeconstructing"(): boolean
public "allowsAssignment"(): boolean
public "getResolverIds"(): $ImmutableCollection<($IToken<(any)>)>
public "hasModuleView"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
public "getModuleView"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): V
public "getModuleView"(arg0: integer): $IBuildingModuleView
public "getBuildingDisplayName"(): string
get "openRequestsOfBuilding"(): $ImmutableList<($IRequest<(any)>)>
get "location"(): $ILocation
get "parent"(): $BlockPos
get "id"(): $IToken<(any)>
get "mirrored"(): boolean
get "iD"(): $BlockPos
get "position"(): $BlockPos
get "rotation"(): integer
get "containerList"(): $List<($BlockPos)>
set "customName"(value: string)
get "structurePath"(): string
get "claimRadius"(): integer
set "buildingType"(value: $BuildingEntry$Type)
get "buildingType"(): $BuildingEntry
get "deconstructed"(): boolean
get "window"(): $BOWindow
get "openRequestsByCitizen"(): $Map<(integer), ($Collection<($IToken<(any)>)>)>
get "currentWorkOrderLevel"(): integer
get "structurePack"(): string
get "customName"(): string
get "colony"(): $IColonyView
get "buildingLevel"(): integer
get "allAssignedCitizens"(): $Set<(integer)>
get "buildingMaxLevel"(): integer
get "buildingMaxLevel"(): boolean
get "repairing"(): boolean
get "allModuleViews"(): $List<($IBuildingModuleView)>
get "buildingDmPrio"(): integer
get "building"(): boolean
get "deconstructing"(): boolean
get "resolverIds"(): $ImmutableCollection<($IToken<(any)>)>
get "buildingDisplayName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBuildingView$Type = ($AbstractBuildingView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBuildingView_ = $AbstractBuildingView$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemSugaryBread" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSugaryBread extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSugaryBread$Type = ($ItemSugaryBread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSugaryBread_ = $ItemSugaryBread$Type;
}}
declare module "packages/com/minecolonies/api/entity/mobs/$AbstractEntityRaiderMob" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$Enemy, $Enemy$Type} from "packages/net/minecraft/world/entity/monster/$Enemy"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RaiderType, $RaiderType$Type} from "packages/com/minecolonies/api/entity/mobs/$RaiderType"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$AbstractFastMinecoloniesEntity, $AbstractFastMinecoloniesEntity$Type} from "packages/com/minecolonies/api/entity/other/$AbstractFastMinecoloniesEntity"
import {$IThreatTableEntity, $IThreatTableEntity$Type} from "packages/com/minecolonies/api/entity/ai/combat/threat/$IThreatTableEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"
import {$ITeleporter, $ITeleporter$Type} from "packages/net/minecraftforge/common/util/$ITeleporter"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$SpawnGroupData, $SpawnGroupData$Type} from "packages/net/minecraft/world/entity/$SpawnGroupData"
import {$ITickRateStateMachine, $ITickRateStateMachine$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/tickratestatemachine/$ITickRateStateMachine"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractAdvancedPathNavigate, $AbstractAdvancedPathNavigate$Type} from "packages/com/minecolonies/core/entity/pathfinding/navigation/$AbstractAdvancedPathNavigate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ThreatTable, $ThreatTable$Type} from "packages/com/minecolonies/api/entity/ai/combat/threat/$ThreatTable"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"

export class $AbstractEntityRaiderMob extends $AbstractFastMinecoloniesEntity implements $IThreatTableEntity, $Enemy {
readonly "randomVariance": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "moveControl": $MoveControl
 "navigation": $PathNavigation
 "goalSelector": $GoalSelector
 "targetSelector": $GoalSelector
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lastDamageSource": $DamageSource
 "lastDamageStamp": long
 "autoSpinAttackTicks": integer
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "finalizeSpawn"(arg0: $ServerLevelAccessor$Type, arg1: $DifficultyInstance$Type, arg2: $MobSpawnType$Type, arg3: $SpawnGroupData$Type, arg4: $CompoundTag$Type): $SpawnGroupData
public "getNavigation"(): $AbstractAdvancedPathNavigate
public "registerWithColony"(): void
public "initStatsFor"(arg0: double, arg1: double, arg2: double): void
public "setEventID"(arg0: integer): void
public "getLadderCounter"(): integer
public "getStuckCounter"(): integer
public "setStuckCounter"(arg0: integer): void
public "setLadderCounter"(arg0: integer): void
public "getSwimSpeedFactor"(): double
public "getRaiderType"(): $RaiderType
public "getThreatTable"(): $ThreatTable<(any)>
public "getAI"(): $ITickRateStateMachine<($IState)>
public "getEventID"(): integer
public "getDifficulty"(): double
public "m_6138_"(): void
public "playAmbientSound"(): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "remove"(arg0: $Entity$RemovalReason$Type): void
public "isPushedByFluid"(): boolean
public static "getDefaultAttributes"(): $AttributeSupplier$Builder
public "changeDimension"(arg0: $ServerLevel$Type, arg1: $ITeleporter$Type): $Entity
public "aiStep"(): void
public "die"(arg0: $DamageSource$Type): void
public "removeWhenFarAway"(arg0: double): boolean
public "setEnvDamageImmunity"(arg0: boolean): void
public "setEnvDamageInterval"(arg0: integer): void
public "setTempEnvDamageImmunity"(arg0: boolean): void
public "push"(arg0: $Entity$Type): void
public "getColony"(): $IColony
public "setColony"(arg0: $IColony$Type): void
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
get "navigation"(): $AbstractAdvancedPathNavigate
set "eventID"(value: integer)
get "ladderCounter"(): integer
get "stuckCounter"(): integer
set "stuckCounter"(value: integer)
set "ladderCounter"(value: integer)
get "swimSpeedFactor"(): double
get "raiderType"(): $RaiderType
get "threatTable"(): $ThreatTable<(any)>
get "aI"(): $ITickRateStateMachine<($IState)>
get "eventID"(): integer
get "difficulty"(): double
get "pushedByFluid"(): boolean
get "defaultAttributes"(): $AttributeSupplier$Builder
set "envDamageImmunity"(value: boolean)
set "envDamageInterval"(value: integer)
set "tempEnvDamageImmunity"(value: boolean)
get "colony"(): $IColony
set "colony"(value: $IColony$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEntityRaiderMob$Type = ($AbstractEntityRaiderMob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEntityRaiderMob_ = $AbstractEntityRaiderMob$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/statemachine/tickratestatemachine/$ITickRateStateMachine" {
import {$ITickingTransition, $ITickingTransition$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/tickratestatemachine/$ITickingTransition"
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"
import {$IStateMachine, $IStateMachine$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/basestatemachine/$IStateMachine"

export interface $ITickRateStateMachine<S extends $IState> extends $IStateMachine<($ITickingTransition<(S)>), (S)> {

 "getTickRate"(): integer
 "setCurrentDelay"(arg0: integer): void
 "checkTransition"(arg0: $ITickingTransition$Type<(S)>): boolean
 "tick"(): void
 "setTickRate"(arg0: integer): void
 "getState"(): S
 "reset"(): void
 "addTransition"(arg0: $ITickingTransition$Type<(S)>): void
 "removeTransition"(arg0: $ITickingTransition$Type<(S)>): void
 "transitionToNext"(arg0: $ITickingTransition$Type<(S)>): boolean
}

export namespace $ITickRateStateMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickRateStateMachine$Type<S> = ($ITickRateStateMachine<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickRateStateMachine_<S> = $ITickRateStateMachine$Type<(S)>;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutHospital" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutHospital extends $AbstractBlockHut<($BlockHutHospital)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutHospital$Type = ($BlockHutHospital);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutHospital_ = $BlockHutHospital$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/views/$IModuleContainerView" {
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export interface $IModuleContainerView {

 "registerModule"(arg0: $IBuildingModuleView$Type): void
 "getModuleViewByType"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): T
 "getModuleViewMatching"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>, arg1: $Predicate$Type<(any)>): T
 "getModuleViews"<T extends $IBuildingModuleView>(arg0: $Class$Type<(T)>): $List<(T)>
 "getAllModuleViews"(): $List<($IBuildingModuleView)>
 "hasModuleView"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModuleView"(arg0: integer): $IBuildingModuleView
 "getModuleView"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): V
}

export namespace $IModuleContainerView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleContainerView$Type = ($IModuleContainerView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleContainerView_ = $IModuleContainerView$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutEnchanter" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutEnchanter extends $AbstractBlockHut<($BlockHutEnchanter)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutEnchanter$Type = ($BlockHutEnchanter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutEnchanter_ = $BlockHutEnchanter$Type;
}}
declare module "packages/com/minecolonies/core/blocks/decorative/$BlockColonyFlagBanner" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractColonyFlagBanner, $AbstractColonyFlagBanner$Type} from "packages/com/minecolonies/api/blocks/decorative/$AbstractColonyFlagBanner"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockColonyFlagBanner extends $AbstractColonyFlagBanner<($BlockColonyFlagBanner)> {
static readonly "ROTATION": $IntegerProperty
static readonly "REGISTRY_NAME": string
static readonly "REGISTRY_NAME_WALL": string
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
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColonyFlagBanner$Type = ($BlockColonyFlagBanner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColonyFlagBanner_ = $BlockColonyFlagBanner$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScrollHighlight" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractItemScroll, $AbstractItemScroll$Type} from "packages/com/minecolonies/core/items/$AbstractItemScroll"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollHighlight extends $AbstractItemScroll {
static readonly "TAG_COLONY_DIM": string
static readonly "TAG_BUILDING_POS": string
static readonly "FAIL_RESPONSES_TOTAL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollHighlight$Type = ($ItemScrollHighlight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollHighlight_ = $ItemScrollHighlight$Type;
}}
declare module "packages/com/minecolonies/api/colony/$ICitizenDataView" {
import {$ICitizenSkillHandler, $ICitizenSkillHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenSkillHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$ICitizen, $ICitizen$Type} from "packages/com/minecolonies/api/colony/$ICitizen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$VisibleCitizenStatus, $VisibleCitizenStatus$Type} from "packages/com/minecolonies/api/entity/citizen/$VisibleCitizenStatus"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICitizenHappinessHandler, $ICitizenHappinessHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenHappinessHandler"
import {$IJobView, $IJobView$Type} from "packages/com/minecolonies/api/colony/jobs/$IJobView"
import {$IInteractionResponseHandler, $IInteractionResponseHandler$Type} from "packages/com/minecolonies/api/colony/interactionhandling/$IInteractionResponseHandler"
import {$InventoryCitizen, $InventoryCitizen$Type} from "packages/com/minecolonies/api/inventory/$InventoryCitizen"
import {$Tuple, $Tuple$Type} from "packages/com/minecolonies/api/util/$Tuple"

export interface $ICitizenDataView extends $ICitizen {

 "getColonyId"(): integer
 "setHomeBuilding"(arg0: $BlockPos$Type): void
 "getInteractionIcon"(): $ResourceLocation
 "getWorkBuilding"(): $BlockPos
 "getHomeBuilding"(): $BlockPos
 "getPosition"(): $BlockPos
 "getChildren"(): $List<(integer)>
 "getEntityId"(): integer
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "getCitizenSkillHandler"(): $ICitizenSkillHandler
 "getOrderedInteractions"(): $List<($IInteractionResponseHandler)>
 "getSpecificInteraction"(arg0: $Component$Type): $IInteractionResponseHandler
 "hasBlockingInteractions"(): boolean
 "hasVisibleInteractions"(): boolean
 "getHappinessHandler"(): $ICitizenHappinessHandler
 "getCustomTextureUUID"(): $UUID
 "hasPendingInteractions"(): boolean
 "getParents"(): $Tuple<(string), (string)>
 "getJob"(): string
 "getHealth"(): double
 "getStatusPosition"(): $BlockPos
 "getPartner"(): integer
 "getSiblings"(): $List<(integer)>
 "getCustomTexture"(): $ResourceLocation
 "getJobComponent"(): $MutableComponent
 "getVisibleStatus"(): $VisibleCitizenStatus
 "getJobView"(): $IJobView
 "getMaxHealth"(): double
 "setWorkBuilding"(arg0: $BlockPos$Type): void
 "getHappiness"(): double
 "setJobView"(arg0: $IJobView$Type): void
 "getSaturation"(): double
 "isFemale"(): boolean
 "getName"(): string
 "getId"(): integer
 "isChild"(): boolean
 "getInventory"(): $InventoryCitizen
 "isPaused"(): boolean
 "setPaused"(arg0: boolean): void
 "getColony"(): $IColony
}

export namespace $ICitizenDataView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenDataView$Type = ($ICitizenDataView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenDataView_ = $ICitizenDataView$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenMournHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $ICitizenMournHandler {

 "setMourning"(arg0: boolean): void
 "shouldMourn"(): boolean
 "addDeceasedCitizen"(arg0: string): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "getDeceasedCitizens"(): $Set<(string)>
 "removeDeceasedCitizen"(arg0: string): void
 "clearDeceasedCitizen"(): void
 "isMourning"(): boolean
}

export namespace $ICitizenMournHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenMournHandler$Type = ($ICitizenMournHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenMournHandler_ = $ICitizenMournHandler$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutChickenHerder" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutChickenHerder extends $AbstractBlockHut<($BlockHutChickenHerder)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutChickenHerder$Type = ($BlockHutChickenHerder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutChickenHerder_ = $BlockHutChickenHerder$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/workerbuildings/$ITownHall" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$PermissionEvent, $PermissionEvent$Type} from "packages/com/minecolonies/api/colony/permissions/$PermissionEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ITownHall extends $IBuilding {

 "removePermissionEvents"(arg0: $UUID$Type): void
 "addPermissionEvent"(arg0: $PermissionEvent$Type): void
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean): integer
 "buildingRequiresCertainAmountOfItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStorage$Type)>, arg2: boolean, arg3: $JobEntry$Type): integer
 "hasCitizenCompletedRequestsToPickup"(arg0: $ICitizenData$Type): boolean
 "upgradeBuildingLevelToSchematicData"(): void
 "overruleNextOpenRequestOfCitizenWithStack"(arg0: $ICitizenData$Type, arg1: $ItemStack$Type): boolean
 "onRestart"(arg0: $ICitizenData$Type): void
 "destroy"(): void
 "canEat"(arg0: $ItemStack$Type): boolean
 "pickUp"(arg0: $Player$Type): void
 "isBuilt"(): boolean
 "getHandlers"(): $List<($IItemHandler)>
 "onPlayerEnterNearby"(arg0: $Player$Type): void
 "canBeBuiltByBuilder"(arg0: integer): boolean
 "resetGuardBuildingNear"(): void
 "getRequiredItemsAndAmount"(): $Map<($Predicate<($ItemStack)>), ($Tuple<(integer), (boolean)>)>
 "hasWorkerOpenRequestsFiltered"(arg0: integer, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): boolean
 "setCustomBuildingName"(arg0: string): void
 "isGuardBuildingNear"(): boolean
 "hasWorkerOpenRequests"(arg0: integer): boolean
 "onPlayerEnterBuilding"(arg0: $Player$Type): void
 "hasWorkerOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): boolean
 "getBuildingDisplayName"(): string
 "getCitizenForRequest"(arg0: $IToken$Type<(any)>): $Optional<($ICitizenData)>
 "getAllAssignedCitizen"(): $Set<($ICitizenData)>
 "getCompletedRequests"(arg0: $ICitizenData$Type): $Collection<($IRequest<(any)>)>
 "isItemStackInRequest"(arg0: $ItemStack$Type): boolean
 "getCompletedRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "cancelAllRequestsOfCitizen"(arg0: $ICitizenData$Type): void
 "getOpenRequestsOfType"<R>(arg0: integer, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "getOpenRequestsByRequestableType"(): $Map<($TypeToken<(any)>), ($Collection<($IToken<(any)>)>)>
 "getSettingValueOrDefault"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>, arg1: S): S
 "getCompletedRequestsOfType"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>): $ImmutableList<($IRequest<(any)>)>
 "reservedStacksExcluding"(arg0: $IRequest$Type<(any)>): $Map<($ItemStorage), (integer)>
 "markRequestAsAccepted"(arg0: $ICitizenData$Type, arg1: $IToken$Type<(any)>): void
 "getOpenRequestsOfTypeFiltered"<R>(arg0: $ICitizenData$Type, arg1: $TypeToken$Type<(R)>, arg2: $Predicate$Type<($IRequest$Type<(any)>)>): $ImmutableList<($IRequest<(any)>)>
 "hasCitizenCompletedRequests"(arg0: $ICitizenData$Type): boolean
 "overruleNextOpenRequestWithStack"(arg0: $ItemStack$Type): void
 "createPickupRequest"(arg0: integer): boolean
 "onPlacement"(): void
 "getRequester"(): $IRequester
 "onDestroyed"(): void
 "markDirty"(): void
 "getSetting"<T extends $ISetting<(S)>, S>(arg0: $ISettingKey$Type<(T)>): T
 "requestRepair"(arg0: $BlockPos$Type): void
 "canBeGathered"(): boolean
 "isMatchingBlock"(arg0: $Block$Type): boolean
 "hasOpenSyncRequest"(arg0: $ICitizenData$Type): boolean
 "getOpenRequests"(arg0: integer): $Collection<($IRequest<(any)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "requestUpgrade"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "requestRemoval"(arg0: $Player$Type, arg1: $BlockPos$Type): void
 "deconstruct"(): void
 "forceTransferStack"(arg0: $ItemStack$Type, arg1: $Level$Type): $ItemStack
 "removeWorkOrder"(): void
 "createRequest"<R extends $IRequestable>(arg0: R, arg1: boolean): $IToken<(any)>
 "createRequest"<R extends $IRequestable>(arg0: $ICitizenData$Type, arg1: R, arg2: boolean): $IToken<(any)>
 "hasWorkOrder"(): boolean
 "getClaimRadius"(arg0: integer): integer
 "calculateCorners"(): void
 "isInBuilding"(arg0: $BlockPos$Type): boolean
 "setBuildingType"(arg0: $BuildingEntry$Type): void
 "getResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "processOfflineTime"(arg0: long): void
 "createResolvers"(): $ImmutableCollection<($IRequestResolver<(any)>)>
 "onColonyTick"(arg0: $IColony$Type): void
 "getMaxToolLevel"(): integer
 "canAssignCitizens"(): boolean
 "getBuildingType"(): $BuildingEntry
 "getCustomName"(): string
 "onWakeUp"(): void
 "onCleanUp"(arg0: $ICitizenData$Type): void
 "getColony"(): $IColony
 "onUpgradeComplete"(arg0: integer): void
 "getTileEntity"(): $AbstractTileEntityColonyBuilding
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "addContainerPosition"(arg0: $BlockPos$Type): void
 "registerBlockPosition"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "registerBlockPosition"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "removeContainerPosition"(arg0: $BlockPos$Type): void
 "alterPickUpPriority"(arg0: integer): void
 "getPickUpPriority"(): integer
 "setTileEntity"(arg0: $AbstractTileEntityColonyBuilding$Type): void
 "getContainers"(): $List<($BlockPos)>
 "hasModule"(arg0: $Class$Type<(any)>): boolean
 "hasModule"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): boolean
 "getModule"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): M
 "getModule"(arg0: integer): $IBuildingModule
 "registerModule"(arg0: $IBuildingModule$Type): void
 "getFirstModuleOccurance"<T2 extends T>(arg0: $Class$Type<(T2)>): T2
 "getModuleMatching"<T2 extends T>(arg0: $Class$Type<(T2)>, arg1: $Predicate$Type<(any)>): T2
 "getModulesByType"<T2 extends T>(arg0: $Class$Type<(T2)>): $List<(T2)>
 "getId"(): $IToken<(any)>
 "getLocation"(): $ILocation
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $ITownHall {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITownHall$Type = ($ITownHall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITownHall_ = $ITownHall$Type;
}}
declare module "packages/com/minecolonies/core/items/$AbstractItemMinecolonies" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractItemMinecolonies extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractItemMinecolonies$Type = ($AbstractItemMinecolonies);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractItemMinecolonies_ = $AbstractItemMinecolonies$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutFisherman" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutFisherman extends $AbstractBlockHut<($BlockHutFisherman)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutFisherman$Type = ($BlockHutFisherman);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutFisherman_ = $BlockHutFisherman$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutSchool" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutSchool extends $AbstractBlockHut<($BlockHutSchool)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutSchool$Type = ($BlockHutSchool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutSchool_ = $BlockHutSchool$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/request/$RequestState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntTag, $IntTag$Type} from "packages/net/minecraft/nbt/$IntTag"

export class $RequestState extends $Enum<($RequestState)> {
static readonly "CREATED": $RequestState
static readonly "REPORTED": $RequestState
static readonly "ASSIGNING": $RequestState
static readonly "ASSIGNED": $RequestState
static readonly "IN_PROGRESS": $RequestState
static readonly "RESOLVED": $RequestState
static readonly "FOLLOWUP_IN_PROGRESS": $RequestState
static readonly "COMPLETED": $RequestState
static readonly "OVERRULED": $RequestState
static readonly "CANCELLED": $RequestState
static readonly "RECEIVED": $RequestState
static readonly "FINALIZING": $RequestState
static readonly "FAILED": $RequestState


public static "values"(): ($RequestState)[]
public static "valueOf"(arg0: string): $RequestState
public static "deserialize"(arg0: $IntTag$Type): $RequestState
public static "deserialize"(arg0: $FriendlyByteBuf$Type): $RequestState
public "serialize"(): $IntTag
public "serialize"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestState$Type = (("overruled") | ("finalizing") | ("created") | ("received") | ("completed") | ("failed") | ("in_progress") | ("followup_in_progress") | ("reported") | ("cancelled") | ("assigned") | ("assigning") | ("resolved")) | ($RequestState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestState_ = $RequestState$Type;
}}
declare module "packages/com/minecolonies/api/research/$IResearchRequirement" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResearchRequirementEntry, $ResearchRequirementEntry$Type} from "packages/com/minecolonies/api/research/registry/$ResearchRequirementEntry"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IResearchRequirement {

 "getDesc"(): $MutableComponent
 "getRegistryEntry"(): $ResearchRequirementEntry
 "isFulfilled"(arg0: $IColony$Type): boolean
 "writeToNBT"(): $CompoundTag
}

export namespace $IResearchRequirement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResearchRequirement$Type = ($IResearchRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResearchRequirement_ = $IResearchRequirement$Type;
}}
declare module "packages/com/minecolonies/api/entity/ai/workers/util/$IBuilderUndestroyable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBuilderUndestroyable {

}

export namespace $IBuilderUndestroyable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuilderUndestroyable$Type = ($IBuilderUndestroyable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuilderUndestroyable_ = $IBuilderUndestroyable$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockScarecrow" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractBlockMinecoloniesDefault, $AbstractBlockMinecoloniesDefault$Type} from "packages/com/minecolonies/api/blocks/huts/$AbstractBlockMinecoloniesDefault"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IBuildingBrowsableBlock, $IBuildingBrowsableBlock$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBuildingBrowsableBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockScarecrow extends $AbstractBlockMinecoloniesDefault<($BlockScarecrow)> implements $EntityBlock, $IBuildingBrowsableBlock {
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
static readonly "BOTTOM_COLLISION": double
static readonly "START_COLLISION": double
static readonly "END_COLLISION": double
static readonly "HEIGHT_COLLISION": double
static readonly "REGISTRY_NAME": string
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
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getRegistryName"(): $ResourceLocation
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "shouldBrowseBuildings"(arg0: $PlayerInteractEvent$RightClickItem$Type): boolean
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockScarecrow$Type = ($BlockScarecrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockScarecrow_ = $BlockScarecrow$Type;
}}
declare module "packages/com/minecolonies/api/colony/colonyEvents/$IColonyEvent" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EventStatus, $EventStatus$Type} from "packages/com/minecolonies/api/colony/colonyEvents/$EventStatus"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IColonyEvent extends $INBTSerializable<($CompoundTag)> {

 "getID"(): integer
 "onFinish"(): void
 "getStatus"(): $EventStatus
 "onUpdate"(): void
 "setStatus"(arg0: $EventStatus$Type): void
 "onNightFall"(): void
 "onTileEntityBreak"(arg0: $BlockEntity$Type): void
 "getEventTypeID"(): $ResourceLocation
 "onStart"(): void
 "setColony"(arg0: $IColony$Type): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IColonyEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColonyEvent$Type = ($IColonyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColonyEvent_ = $IColonyEvent$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$MediumQuarry" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MediumQuarry extends $AbstractBlockHut<($MediumQuarry)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumQuarry$Type = ($MediumQuarry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MediumQuarry_ = $MediumQuarry$Type;
}}
declare module "packages/com/minecolonies/api/network/$IMessage" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export interface $IMessage {

 "toBytes"(arg0: $FriendlyByteBuf$Type): void
 "onExecute"(arg0: $NetworkEvent$Context$Type, arg1: boolean): void
 "getExecutionSide"(): $LogicalSide
 "fromBytes"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMessage$Type = ($IMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMessage_ = $IMessage$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockMinecoloniesGrave" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
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
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GraveType, $GraveType$Type} from "packages/com/minecolonies/api/blocks/types/$GraveType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$AbstractBlockMinecoloniesGrave, $AbstractBlockMinecoloniesGrave$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesGrave"

export class $BlockMinecoloniesGrave extends $AbstractBlockMinecoloniesGrave<($BlockMinecoloniesGrave)> {
static readonly "VARIANT": $EnumProperty<($GraveType)>
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getPlacementState"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
public "spawnAfterBreak"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: boolean): void
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMinecoloniesGrave$Type = ($BlockMinecoloniesGrave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMinecoloniesGrave_ = $BlockMinecoloniesGrave$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenInventoryHandler" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $ICitizenInventoryHandler {

 "isInventoryFull"(): boolean
 "getItemCountInInventory"(arg0: $Item$Type): integer
 "getItemCountInInventory"(arg0: $Block$Type): integer
 "findFirstSlotInInventoryWith"(arg0: $Item$Type): integer
 "findFirstSlotInInventoryWith"(arg0: $Block$Type): integer
 "hasItemInInventory"(arg0: $Block$Type): boolean
 "hasItemInInventory"(arg0: $Item$Type): boolean
}

export namespace $ICitizenInventoryHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenInventoryHandler$Type = ($ICitizenInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenInventoryHandler_ = $ICitizenInventoryHandler$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesGrave" {
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
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockMinecolonies, $AbstractBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecolonies"
import {$GraveType, $GraveType$Type} from "packages/com/minecolonies/api/blocks/types/$GraveType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockMinecoloniesGrave<B extends $AbstractBlockMinecoloniesGrave<(B)>> extends $AbstractBlockMinecolonies<(B)> implements $EntityBlock {
static readonly "VARIANT": $EnumProperty<($GraveType)>
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
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesGrave$Type<B> = ($AbstractBlockMinecoloniesGrave<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesGrave_<B> = $AbstractBlockMinecoloniesGrave$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutStonemason" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutStonemason extends $AbstractBlockHut<($BlockHutStonemason)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutStonemason$Type = ($BlockHutStonemason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutStonemason_ = $BlockHutStonemason$Type;
}}
declare module "packages/com/minecolonies/api/inventory/$InventoryCitizen" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $InventoryCitizen implements $IItemHandlerModifiable, $Nameable {

constructor(arg0: string, arg1: boolean, arg2: $ICitizenData$Type)
constructor(arg0: string, arg1: boolean)

public "moveArmorToInventory"(arg0: $EquipmentSlot$Type): void
public "transferArmorToSlot"(arg0: $EquipmentSlot$Type, arg1: integer): void
public "hasSpace"(): boolean
public "getArmorInSlot"(arg0: $EquipmentSlot$Type): $ItemStack
public "damageInventoryItem"<T extends $LivingEntity>(arg0: integer, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): boolean
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$Type): void
public "read"(arg0: $CompoundTag$Type): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "getName"(): $Component
public "getDisplayName"(): $Component
public "getSlots"(): integer
public "getIterableArmorAndHandInv"(): $Iterable<($ItemStack)>
public "hasCustomName"(): boolean
public "setCustomName"(arg0: string): void
public "isFull"(): boolean
public "getHeldItemSlot"(arg0: $InteractionHand$Type): integer
public "getHeldItem"(arg0: $InteractionHand$Type): $ItemStack
public "setHeldItem"(arg0: $InteractionHand$Type, arg1: integer): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "markDirty"(): void
public "forceArmorStackToSlot"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): void
public "forceClearArmorInSlot"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): void
public "shrinkInventoryItem"(arg0: integer): boolean
public "getCustomName"(): $Component
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getSlots"(): integer
public "getSlotLimit"(i: integer): integer
public "isMutable"(): boolean
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "setChanged"(): void
public "getHeight"(): integer
public "asContainer"(): $Container
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
get "empty"(): boolean
get "name"(): $Component
get "displayName"(): $Component
get "slots"(): integer
get "iterableArmorAndHandInv"(): $Iterable<($ItemStack)>
set "customName"(value: string)
get "full"(): boolean
get "customName"(): $Component
get "slots"(): integer
get "mutable"(): boolean
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryCitizen$Type = ($InventoryCitizen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryCitizen_ = $InventoryCitizen$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutFarmer" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutFarmer extends $AbstractBlockHut<($BlockHutFarmer)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutFarmer$Type = ($BlockHutFarmer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutFarmer_ = $BlockHutFarmer$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IGraveManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IGraveManager {

 "reserveNextFreeGrave"(): $BlockPos
 "getGraves"(): $Map<($BlockPos), (boolean)>
 "createCitizenGrave"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ICitizenData$Type): boolean
 "reserveGrave"(arg0: $BlockPos$Type): boolean
 "removeGrave"(arg0: $BlockPos$Type): void
 "addNewGrave"(arg0: $BlockPos$Type): boolean
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "unReserveGrave"(arg0: $BlockPos$Type): void
 "onColonyTick"(arg0: $IColony$Type): void
}

export namespace $IGraveManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGraveManager$Type = ($IGraveManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGraveManager_ = $IGraveManager$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IVisitorManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEntityManager, $IEntityManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEntityManager"
import {$ICivilianData, $ICivilianData$Type} from "packages/com/minecolonies/api/colony/$ICivilianData"
import {$IVisitorData, $IVisitorData$Type} from "packages/com/minecolonies/api/colony/$IVisitorData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"

export interface $IVisitorManager extends $IEntityManager {

 "getVisitor"<T extends $IVisitorData>(arg0: integer): T
 "getCivilianDataMap"(): $Map<(integer), ($ICivilianData)>
 "removeCivilian"(arg0: $ICivilianData$Type): void
 "sendPackets"(arg0: $Set$Type<($ServerPlayer$Type)>, arg1: $Set$Type<($ServerPlayer$Type)>): void
 "unregisterCivilian"(arg0: $AbstractCivilianEntity$Type): void
 "registerCivilian"(arg0: $AbstractCivilianEntity$Type): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "createAndRegisterCivilianData"(): $ICivilianData
 "spawnOrCreateCivilian"<T extends $ICivilianData>(arg0: T, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): T
 "clearDirty"(): void
 "markDirty"(): void
 "onColonyTick"(arg0: $IColony$Type): void
 "getCivilian"<T extends $ICivilianData>(arg0: integer): T
}

export namespace $IVisitorManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVisitorManager$Type = ($IVisitorManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVisitorManager_ = $IVisitorManager$Type;
}}
declare module "packages/com/minecolonies/core/blocks/decorative/$BlockGate" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$AbstractBlockGate, $AbstractBlockGate$Type} from "packages/com/minecolonies/api/blocks/decorative/$AbstractBlockGate"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockGate extends $AbstractBlockGate {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "IRON_GATE": string
static readonly "WOODEN_GATE": string
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(arg0: string, arg1: float, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGate$Type = ($BlockGate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGate_ = $BlockGate$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IHasDirty, $IHasDirty$Type} from "packages/com/minecolonies/api/util/$IHasDirty"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"

export interface $IBuildingModule extends $IHasDirty {

 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "serializeToView"(arg0: $FriendlyByteBuf$Type): void
 "setBuilding"(arg0: $IBuilding$Type): $IBuildingModule
 "getProducer"(): $BuildingEntry$ModuleProducer<(any), (any)>
 "setProducer"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): $IBuildingModule
 "getBuilding"(): $IBuilding
 "checkDirty"(): boolean
 "clearDirty"(): void
 "markDirty"(): void
}

export namespace $IBuildingModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuildingModule$Type = ($IBuildingModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuildingModule_ = $IBuildingModule$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/$Skill" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Skill extends $Enum<($Skill)> {
static readonly "Athletics": $Skill
static readonly "Dexterity": $Skill
static readonly "Strength": $Skill
static readonly "Agility": $Skill
static readonly "Stamina": $Skill
static readonly "Mana": $Skill
static readonly "Adaptability": $Skill
static readonly "Focus": $Skill
static readonly "Creativity": $Skill
static readonly "Knowledge": $Skill
static readonly "Intelligence": $Skill


public static "values"(): ($Skill)[]
public static "valueOf"(arg0: string): $Skill
public "getComplimentary"(): $Skill
public "getAdverse"(): $Skill
get "complimentary"(): $Skill
get "adverse"(): $Skill
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Type = (("dexterity") | ("strength") | ("mana") | ("stamina") | ("focus") | ("adaptability") | ("athletics") | ("agility") | ("creativity") | ("knowledge") | ("intelligence")) | ($Skill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill_ = $Skill$Type;
}}
declare module "packages/com/minecolonies/api/colony/colonyEvents/$EventStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EventStatus extends $Enum<($EventStatus)> {
static readonly "STARTING": $EventStatus
static readonly "PREPARING": $EventStatus
static readonly "PROGRESSING": $EventStatus
static readonly "WAITING": $EventStatus
static readonly "DONE": $EventStatus
static readonly "CANCELED": $EventStatus


public static "values"(): ($EventStatus)[]
public static "valueOf"(arg0: string): $EventStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventStatus$Type = (("canceled") | ("preparing") | ("waiting") | ("progressing") | ("starting") | ("done")) | ($EventStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventStatus_ = $EventStatus$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemAdventureToken" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemAdventureToken extends $AbstractItemMinecolonies {
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAdventureToken$Type = ($ItemAdventureToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAdventureToken_ = $ItemAdventureToken$Type;
}}
declare module "packages/com/minecolonies/api/util/$IHasDirty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHasDirty {

 "checkDirty"(): boolean
 "clearDirty"(): void
 "markDirty"(): void
}

export namespace $IHasDirty {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasDirty$Type = ($IHasDirty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasDirty_ = $IHasDirty$Type;
}}
declare module "packages/com/minecolonies/api/colony/$ICivilianData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$ICitizen, $ICitizen$Type} from "packages/com/minecolonies/api/colony/$ICitizen"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IInteractionResponseHandler, $IInteractionResponseHandler$Type} from "packages/com/minecolonies/api/colony/interactionhandling/$IInteractionResponseHandler"
import {$InventoryCitizen, $InventoryCitizen$Type} from "packages/com/minecolonies/api/inventory/$InventoryCitizen"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"

export interface $ICivilianData extends $ICitizen, $INBTSerializable<($CompoundTag)> {

 "setEntity"(arg0: $AbstractCivilianEntity$Type): void
 "triggerInteraction"(arg0: $IInteractionResponseHandler$Type): void
 "isRequestAsync"(arg0: $IToken$Type<(any)>): boolean
 "increaseSaturation"(arg0: double): void
 "initForNewCivilian"(): void
 "decreaseSaturation"(arg0: double): void
 "createRequestAsync"<R extends $IRequestable>(arg0: R): $IToken<(any)>
 "initEntityValues"(): void
 "setVoiceProfile"(arg0: integer): void
 "setSuffix"(arg0: string): void
 "getVoiceProfile"(): integer
 "getTextureSuffix"(): string
 "setGender"(arg0: boolean): void
 "onRequestCancelled"(arg0: $IToken$Type<(any)>): void
 "update"(): void
 "setName"(arg0: string): void
 "isDirty"(): boolean
 "getEntity"(): $Optional<(any)>
 "setGenderAndGenerateName"(arg0: boolean): void
 "updateEntityIfNecessary"(): void
 "serializeViewNetworkData"(arg0: $FriendlyByteBuf$Type): void
 "onResponseTriggered"(arg0: $Component$Type, arg1: integer, arg2: $Player$Type): void
 "getUUID"(): $UUID
 "clearDirty"(): void
 "markDirty"(arg0: integer): void
 "createRequest"<R extends $IRequestable>(arg0: R): $IToken<(any)>
 "getTextureId"(): integer
 "getSaturation"(): double
 "isFemale"(): boolean
 "getName"(): string
 "getId"(): integer
 "isChild"(): boolean
 "getInventory"(): $InventoryCitizen
 "isPaused"(): boolean
 "setPaused"(arg0: boolean): void
 "getColony"(): $IColony
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $ICivilianData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICivilianData$Type = ($ICivilianData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICivilianData_ = $ICivilianData$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutDeliveryman" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutDeliveryman extends $AbstractBlockHut<($BlockHutDeliveryman)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutDeliveryman$Type = ($BlockHutDeliveryman);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutDeliveryman_ = $BlockHutDeliveryman$Type;
}}
declare module "packages/com/minecolonies/core/items/$AbstractItemScroll" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractItemScroll extends $AbstractItemMinecolonies {
static readonly "TAG_COLONY_DIM": string
static readonly "TAG_BUILDING_POS": string
static readonly "FAIL_RESPONSES_TOTAL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: string, arg1: $Item$Properties$Type)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractItemScroll$Type = ($AbstractItemScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractItemScroll_ = $AbstractItemScroll$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/$ISettingsModule" {
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ISetting, $ISetting$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"

export interface $ISettingsModule extends $IBuildingModule {

 "getOptionalSetting"<T extends $ISetting<(any)>>(arg0: $ISettingKey$Type<(T)>): $Optional<(T)>
 "with"(arg0: $ISettingKey$Type<(any)>, arg1: $ISetting$Type<(any)>): $ISettingsModule
 "getSettingValueOrDefault"<S, T extends $ISetting<(S)>>(arg0: $ISettingKey$Type<(T)>, arg1: S): S
 "updateSetting"(arg0: $ISettingKey$Type<(any)>, arg1: $ISetting$Type<(any)>, arg2: $ServerPlayer$Type): void
 "getSetting"<T extends $ISetting<(any)>>(arg0: $ISettingKey$Type<(T)>): T
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "serializeToView"(arg0: $FriendlyByteBuf$Type): void
 "setBuilding"(arg0: $IBuilding$Type): $IBuildingModule
 "getProducer"(): $BuildingEntry$ModuleProducer<(any), (any)>
 "setProducer"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): $IBuildingModule
 "getBuilding"(): $IBuilding
 "checkDirty"(): boolean
 "clearDirty"(): void
 "markDirty"(): void
}

export namespace $ISettingsModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsModule$Type = ($ISettingsModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingsModule_ = $ISettingsModule$Type;
}}
declare module "packages/com/minecolonies/api/blocks/huts/$AbstractBlockMinecoloniesDefault" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractBlockMinecoloniesContainer, $AbstractBlockMinecoloniesContainer$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesContainer"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockMinecoloniesDefault<B extends $AbstractBlockMinecoloniesDefault<(B)>> extends $AbstractBlockMinecoloniesContainer<(B)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
static readonly "BOTTOM_COLLISION": double
static readonly "START_COLLISION": double
static readonly "END_COLLISION": double
static readonly "HEIGHT_COLLISION": double
static readonly "REGISTRY_NAME": string
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

public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesDefault$Type<B> = ($AbstractBlockMinecoloniesDefault<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesDefault_<B> = $AbstractBlockMinecoloniesDefault$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/entity/ai/statemachine/states/$IAIState" {
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"

export interface $IAIState extends $IState {

 "isOkayToEat"(): boolean

(): boolean
}

export namespace $IAIState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAIState$Type = ($IAIState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAIState_ = $IAIState$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/resolver/player/$IPlayerRequestResolver" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$IQueuedRequestResolver, $IQueuedRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IQueuedRequestResolver"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IPlayerRequestResolver extends $IQueuedRequestResolver<($IRequestable)> {

 "getAllAssignedRequests"(): $ImmutableList<($IToken<(any)>)>
 "onSystemReset"(): void
 "onAssignedRequestBeingCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "attemptResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IToken<(any)>)>
 "onAssignedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getSuitabilityMetric"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): integer
 "getFollowupRequestForCompletion"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $List<($IRequest<(any)>)>
 "getPriority"(): integer
 "onColonyUpdate"(arg0: $IRequestManager$Type, arg1: $Predicate$Type<($IRequest$Type<(any)>)>): void
 "canResolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): boolean
 "onRequestAssigned"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>, arg2: boolean): void
 "resolveRequest"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequestType"(): $TypeToken<(any)>
 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
}

export namespace $IPlayerRequestResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerRequestResolver$Type = ($IPlayerRequestResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerRequestResolver_ = $IPlayerRequestResolver$Type;
}}
declare module "packages/com/minecolonies/api/quests/$IQuestObjectiveTemplate" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$IObjectiveInstance, $IObjectiveInstance$Type} from "packages/com/minecolonies/api/quests/$IObjectiveInstance"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"

export interface $IQuestObjectiveTemplate {

 "createObjectiveInstance"(): $IObjectiveInstance
 "getTarget"(): integer
 "onCancellation"(arg0: $IQuestInstance$Type): void
 "getRewardUnlocks"(): $List<(integer)>
 "startObjective"(arg0: $IQuestInstance$Type): $IObjectiveInstance
 "getProgressText"(arg0: $IQuestInstance$Type, arg1: $Style$Type): $Component
 "onWorldLoad"(arg0: $IQuestInstance$Type): void
}

export namespace $IQuestObjectiveTemplate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuestObjectiveTemplate$Type = ($IQuestObjectiveTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuestObjectiveTemplate_ = $IQuestObjectiveTemplate$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/factory/$IFactoryController" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactory, $IFactory$Type} from "packages/com/minecolonies/api/colony/requestsystem/factory/$IFactory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ITypeOverrideHandler, $ITypeOverrideHandler$Type} from "packages/com/minecolonies/api/colony/requestsystem/factory/$ITypeOverrideHandler"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IFactoryController {

 "getNewInstance"<Input, Output>(arg0: $TypeToken$Type<(any)>, arg1: Input, ...arg2: (any)[]): Output
 "getNewInstance"<Output>(arg0: $TypeToken$Type<(any)>): Output
 "getFactoryForOutput"<Output>(arg0: string): $IFactory<(any), (Output)>
 "getFactoryForOutput"<Output>(arg0: short): $IFactory<(any), (Output)>
 "getFactoryForOutput"<Output>(arg0: $TypeToken$Type<(any)>): $IFactory<(any), (Output)>
 "registerNewTypeOverrideHandler"<Output>(arg0: $ITypeOverrideHandler$Type<(Output)>): void
 "getFactoryForSerializationId"<Output>(arg0: short): $IFactory<(any), (Output)>
 "deserialize"<Output>(arg0: $CompoundTag$Type): Output
 "deserialize"<Output>(arg0: $FriendlyByteBuf$Type): Output
 "serialize"<Output>(arg0: $FriendlyByteBuf$Type, arg1: Output): void
 "serialize"<Output>(arg0: Output): $CompoundTag
 "registerNewFactory"<Input, Output>(arg0: $IFactory$Type<(Input), (Output)>): void
 "getFactoryForIO"<Input, Output>(arg0: $TypeToken$Type<(any)>, arg1: $TypeToken$Type<(any)>): $IFactory<(Input), (Output)>
 "getFactoryForInput"<Input>(arg0: string): $IFactory<(Input), (any)>
 "getFactoryForInput"<Input>(arg0: $TypeToken$Type<(any)>): $IFactory<(Input), (any)>
}

export namespace $IFactoryController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFactoryController$Type = ($IFactoryController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFactoryController_ = $IFactoryController$Type;
}}
declare module "packages/com/minecolonies/api/quests/$IQuestParticipant" {
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IQuestParticipant {

 "getName"(): string
 "addQuestParticipation"(arg0: $IQuestInstance$Type): void
 "isParticipantOfQuest"(arg0: $ResourceLocation$Type): boolean
 "openDialogue"(arg0: $IQuestInstance$Type, arg1: integer): void
 "onQuestDeletion"(arg0: $ResourceLocation$Type): void
}

export namespace $IQuestParticipant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuestParticipant$Type = ($IQuestParticipant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuestParticipant_ = $IQuestParticipant$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/$IAssignsCitizen" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$HiringMode, $HiringMode$Type} from "packages/com/minecolonies/api/colony/buildings/$HiringMode"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"

export interface $IAssignsCitizen extends $IBuildingModule {

 "isFull"(): boolean
 "hasAssignedCitizen"(): boolean
 "hasAssignedCitizen"(arg0: $ICitizenData$Type): boolean
 "setHiringMode"(arg0: $HiringMode$Type): void
 "assignCitizen"(arg0: $ICitizenData$Type): boolean
 "getModuleMax"(): integer
 "removeCitizen"(arg0: $ICitizenData$Type): boolean
 "getHiringMode"(): $HiringMode
 "getAssignedCitizen"(): $List<($ICitizenData)>
 "getAssignedEntities"(): $List<($Optional<($AbstractEntityCitizen)>)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "serializeToView"(arg0: $FriendlyByteBuf$Type): void
 "setBuilding"(arg0: $IBuilding$Type): $IBuildingModule
 "getProducer"(): $BuildingEntry$ModuleProducer<(any), (any)>
 "setProducer"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): $IBuildingModule
 "getBuilding"(): $IBuilding
 "checkDirty"(): boolean
 "clearDirty"(): void
 "markDirty"(): void
}

export namespace $IAssignsCitizen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssignsCitizen$Type = ($IAssignsCitizen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssignsCitizen_ = $IAssignsCitizen$Type;
}}
declare module "packages/com/minecolonies/api/colony/$ICitizenData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICitizenMournHandler, $ICitizenMournHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenMournHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$ICitizenHappinessHandler, $ICitizenHappinessHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenHappinessHandler"
import {$IInteractionResponseHandler, $IInteractionResponseHandler$Type} from "packages/com/minecolonies/api/colony/interactionhandling/$IInteractionResponseHandler"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"
import {$IQuestParticipant, $IQuestParticipant$Type} from "packages/com/minecolonies/api/quests/$IQuestParticipant"
import {$ICitizenSkillHandler, $ICitizenSkillHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenSkillHandler"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CitizenNameFile, $CitizenNameFile$Type} from "packages/com/minecolonies/api/colony/$CitizenNameFile"
import {$ICivilianData, $ICivilianData$Type} from "packages/com/minecolonies/api/colony/$ICivilianData"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$VisibleCitizenStatus, $VisibleCitizenStatus$Type} from "packages/com/minecolonies/api/entity/citizen/$VisibleCitizenStatus"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IQuestGiver, $IQuestGiver$Type} from "packages/com/minecolonies/api/quests/$IQuestGiver"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IJob, $IJob$Type} from "packages/com/minecolonies/api/colony/jobs/$IJob"
import {$InventoryCitizen, $InventoryCitizen$Type} from "packages/com/minecolonies/api/inventory/$InventoryCitizen"
import {$Tuple, $Tuple$Type} from "packages/com/minecolonies/api/util/$Tuple"

export interface $ICitizenData extends $ICivilianData, $IQuestGiver, $IQuestParticipant {

 "isAsleep"(): boolean
 "setHomeBuilding"(arg0: $IBuilding$Type): void
 "setBedPos"(arg0: $BlockPos$Type): void
 "setIsChild"(arg0: boolean): void
 "setLastPosition"(arg0: $BlockPos$Type): void
 "setVisibleStatus"(arg0: $VisibleCitizenStatus$Type): void
 "getWorkBuilding"(): $IBuilding
 "getHomeBuilding"(): $IBuilding
 "isIdleAtJob"(): boolean
 "getChildren"(): $List<(integer)>
 "getRandom"(): $Random
 "getEntity"(): $Optional<($AbstractEntityCitizen)>
 "onDeath"(arg0: integer): void
 "getStatus"(): $VisibleCitizenStatus
 "isWorking"(): boolean
 "getCitizenSkillHandler"(): $ICitizenSkillHandler
 "getCitizenHappinessHandler"(): $ICitizenHappinessHandler
 "setInteractedRecently"(arg0: $UUID$Type): void
 "applyResearchEffects"(): void
 "setNextRespawnPosition"(arg0: $BlockPos$Type): void
 "getCitizenMournHandler"(): $ICitizenMournHandler
 "onInteractionClosed"(arg0: $Component$Type, arg1: $ServerPlayer$Type): void
 "generateName"(arg0: $Random$Type, arg1: string, arg2: string, arg3: $CitizenNameFile$Type): void
 "setParents"(arg0: string, arg1: string): void
 "getParents"(): $Tuple<(string), (string)>
 "getBedPos"(): $BlockPos
 "setJob"(arg0: $IJob$Type<(any)>): void
 "getJob"<J extends $IJob<(any)>>(arg0: $Class$Type<(J)>): J
 "getJob"(): $IJob<(any)>
 "needsBetterFood"(): boolean
 "restartDone"(): void
 "getLastPosition"(): $BlockPos
 "setJustAte"(arg0: boolean): void
 "onGoSleep"(): void
 "getStatusPosition"(): $BlockPos
 "setSaturation"(arg0: double): void
 "addSiblings"(...arg0: (integer)[]): void
 "getPartner"(): $ICitizenData
 "onRemoveBuilding"(arg0: $IBuilding$Type): void
 "justAte"(): boolean
 "addChildren"(...arg0: (integer)[]): void
 "setIdleAtJob"(arg0: boolean): void
 "setStatusPosition"(arg0: $BlockPos$Type): void
 "setPartner"(arg0: integer): void
 "shouldRestart"(): boolean
 "setAsleep"(arg0: boolean): void
 "scheduleRestart"(arg0: $ServerPlayer$Type): void
 "getSiblings"(): $List<(integer)>
 "setWorking"(arg0: boolean): void
 "isRelatedTo"(arg0: $ICitizenData$Type): boolean
 "hasCustomTexture"(): boolean
 "setIdleDays"(arg0: integer): void
 "onBuildingLoad"(): void
 "hasQuestAssignment"(): boolean
 "onQuestCompletion"(arg0: $ResourceLocation$Type): void
 "setCustomTexture"(arg0: $UUID$Type): void
 "getCustomTexture"(): $UUID
 "onResurrect"(): void
 "doesLiveWith"(arg0: $ICitizenData$Type): boolean
 "setEntity"(arg0: $AbstractCivilianEntity$Type): void
 "triggerInteraction"(arg0: $IInteractionResponseHandler$Type): void
 "isRequestAsync"(arg0: $IToken$Type<(any)>): boolean
 "increaseSaturation"(arg0: double): void
 "initForNewCivilian"(): void
 "decreaseSaturation"(arg0: double): void
 "createRequestAsync"<R extends $IRequestable>(arg0: R): $IToken<(any)>
 "initEntityValues"(): void
 "setVoiceProfile"(arg0: integer): void
 "setSuffix"(arg0: string): void
 "getVoiceProfile"(): integer
 "getTextureSuffix"(): string
 "setGender"(arg0: boolean): void
 "onRequestCancelled"(arg0: $IToken$Type<(any)>): void
 "update"(): void
 "setName"(arg0: string): void
 "isDirty"(): boolean
 "setGenderAndGenerateName"(arg0: boolean): void
 "updateEntityIfNecessary"(): void
 "serializeViewNetworkData"(arg0: $FriendlyByteBuf$Type): void
 "onResponseTriggered"(arg0: $Component$Type, arg1: integer, arg2: $Player$Type): void
 "getUUID"(): $UUID
 "clearDirty"(): void
 "markDirty"(arg0: integer): void
 "createRequest"<R extends $IRequestable>(arg0: R): $IToken<(any)>
 "getTextureId"(): integer
 "assignQuest"(arg0: $IQuestInstance$Type): void
 "getName"(): string
 "addQuestParticipation"(arg0: $IQuestInstance$Type): void
 "isParticipantOfQuest"(arg0: $ResourceLocation$Type): boolean
 "openDialogue"(arg0: $IQuestInstance$Type, arg1: integer): void
 "onQuestDeletion"(arg0: $ResourceLocation$Type): void
 "getSaturation"(): double
 "isFemale"(): boolean
 "getId"(): integer
 "isChild"(): boolean
 "getInventory"(): $InventoryCitizen
 "isPaused"(): boolean
 "setPaused"(arg0: boolean): void
 "getColony"(): $IColony
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $ICitizenData {
const MAX_SATURATION: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenData$Type = ($ICitizenData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenData_ = $ICitizenData$Type;
}}
declare module "packages/com/minecolonies/api/colony/$IColonyTagCapability" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IColonyTagCapability {

 "removeBuildingClaim"(arg0: integer, arg1: $BlockPos$Type, arg2: $LevelChunk$Type): void
 "setStaticColonyClaim"(arg0: $List$Type<(integer)>): void
 "getStaticClaimColonies"(): $List<(integer)>
 "reset"(arg0: $LevelChunk$Type): void
 "getAllClaimingBuildings"(): $Map<(integer), ($Set<($BlockPos)>)>
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "addColony"(arg0: integer, arg1: $LevelChunk$Type): void
 "addBuildingClaim"(arg0: integer, arg1: $BlockPos$Type, arg2: $LevelChunk$Type): void
 "removeColony"(arg0: integer, arg1: $LevelChunk$Type): void
 "setOwningColony"(arg0: integer, arg1: $LevelChunk$Type): void
 "getOwningColony"(): integer
}

export namespace $IColonyTagCapability {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColonyTagCapability$Type = ($IColonyTagCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColonyTagCapability_ = $IColonyTagCapability$Type;
}}
declare module "packages/com/minecolonies/api/colony/jobs/$IJobView" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IJobView {

 "getName"(): string
 "getEntry"(): $JobEntry
 "setEntry"(arg0: $JobEntry$Type): void
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "getAsyncRequests"(): $Set<($IToken<(any)>)>
}

export namespace $IJobView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJobView$Type = ($IJobView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJobView_ = $IJobView$Type;
}}
declare module "packages/com/minecolonies/api/colony/$CitizenNameFile$NameOrder" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CitizenNameFile$NameOrder extends $Enum<($CitizenNameFile$NameOrder)> {
static readonly "EASTERN": $CitizenNameFile$NameOrder
static readonly "WESTERN": $CitizenNameFile$NameOrder


public static "values"(): ($CitizenNameFile$NameOrder)[]
public static "valueOf"(arg0: string): $CitizenNameFile$NameOrder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CitizenNameFile$NameOrder$Type = (("eastern") | ("western")) | ($CitizenNameFile$NameOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CitizenNameFile$NameOrder_ = $CitizenNameFile$NameOrder$Type;
}}
declare module "packages/com/minecolonies/api/colony/permissions/$PermissionEvent" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Action, $Action$Type} from "packages/com/minecolonies/api/colony/permissions/$Action"

export class $PermissionEvent {

constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $UUID$Type, arg1: string, arg2: $Action$Type, arg3: $BlockPos$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getId"(): $UUID
public "getPosition"(): $BlockPos
public "getAction"(): $Action
public "serialize"(arg0: $FriendlyByteBuf$Type): void
get "name"(): string
get "id"(): $UUID
get "position"(): $BlockPos
get "action"(): $Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionEvent$Type = ($PermissionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionEvent_ = $PermissionEvent$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutBarracksTower" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutBarracksTower extends $AbstractBlockHut<($BlockHutBarracksTower)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "isVisible"(arg0: $CompoundTag$Type): boolean
public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutBarracksTower$Type = ($BlockHutBarracksTower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutBarracksTower_ = $BlockHutBarracksTower$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutSifter" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutSifter extends $AbstractBlockHut<($BlockHutSifter)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutSifter$Type = ($BlockHutSifter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutSifter_ = $BlockHutSifter$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutFletcher" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutFletcher extends $AbstractBlockHut<($BlockHutFletcher)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutFletcher$Type = ($BlockHutFletcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutFletcher_ = $BlockHutFletcher$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutCrusher" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutCrusher extends $AbstractBlockHut<($BlockHutCrusher)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutCrusher$Type = ($BlockHutCrusher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutCrusher_ = $BlockHutCrusher$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutBlacksmith" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutBlacksmith extends $AbstractBlockHut<($BlockHutBlacksmith)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutBlacksmith$Type = ($BlockHutBlacksmith);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutBlacksmith_ = $BlockHutBlacksmith$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$ICitizenJobHandler, $ICitizenJobHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenJobHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICitizenItemHandler, $ICitizenItemHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenItemHandler"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$IWalkToProxy, $IWalkToProxy$Type} from "packages/com/minecolonies/api/entity/pathfinding/proxy/$IWalkToProxy"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$ICitizenInventoryHandler, $ICitizenInventoryHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenInventoryHandler"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ICitizenDiseaseHandler, $ICitizenDiseaseHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenDiseaseHandler"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$IState, $IState$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/states/$IState"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$ICitizenColonyHandler, $ICitizenColonyHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenColonyHandler"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ITickRateStateMachine, $ITickRateStateMachine$Type} from "packages/com/minecolonies/api/entity/ai/statemachine/tickratestatemachine/$ITickRateStateMachine"
import {$ICitizenDataView, $ICitizenDataView$Type} from "packages/com/minecolonies/api/colony/$ICitizenDataView"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractAdvancedPathNavigate, $AbstractAdvancedPathNavigate$Type} from "packages/com/minecolonies/core/entity/pathfinding/navigation/$AbstractAdvancedPathNavigate"
import {$ICitizenExperienceHandler, $ICitizenExperienceHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenExperienceHandler"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ICitizenSleepHandler, $ICitizenSleepHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenSleepHandler"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$InventoryCitizen, $InventoryCitizen$Type} from "packages/com/minecolonies/api/inventory/$InventoryCitizen"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"

export class $AbstractEntityCitizen extends $AbstractCivilianEntity implements $MenuProvider {
static readonly "ENTITY_AI_TICKRATE": integer
static readonly "DATA_LEVEL": $EntityDataAccessor<(integer)>
static readonly "DATA_TEXTURE": $EntityDataAccessor<(integer)>
static readonly "DATA_IS_FEMALE": $EntityDataAccessor<(integer)>
static readonly "DATA_COLONY_ID": $EntityDataAccessor<(integer)>
static readonly "DATA_CITIZEN_ID": $EntityDataAccessor<(integer)>
static readonly "DATA_MODEL": $EntityDataAccessor<(string)>
static readonly "DATA_RENDER_METADATA": $EntityDataAccessor<(string)>
static readonly "DATA_IS_ASLEEP": $EntityDataAccessor<(boolean)>
static readonly "DATA_IS_CHILD": $EntityDataAccessor<(boolean)>
static readonly "DATA_BED_POS": $EntityDataAccessor<($BlockPos)>
static readonly "DATA_STYLE": $EntityDataAccessor<(string)>
static readonly "DATA_TEXTURE_SUFFIX": $EntityDataAccessor<(string)>
static readonly "DATA_JOB": $EntityDataAccessor<(string)>
readonly "randomVariance": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "moveControl": $MoveControl
 "navigation": $PathNavigation
 "goalSelector": $GoalSelector
 "targetSelector": $GoalSelector
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lastDamageSource": $DamageSource
 "lastDamageStamp": long
 "autoSpinAttackTicks": integer
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "setFemale"(arg0: boolean): void
public "setTextureId"(arg0: integer): void
public "setModelId"(arg0: $ResourceLocation$Type): void
public "getNavigation"(): $AbstractAdvancedPathNavigate
public "isFemale"(): boolean
public "onPlayerCollide"(arg0: $Player$Type): void
public "getCitizenData"(): $ICitizenData
public "getCitizenDataView"(): $ICitizenDataView
public "setTextureDirty"(): void
public "setRenderMetadata"(arg0: string): void
public "setOwnRotation"(arg0: float, arg1: float): void
public "getRotationYaw"(): float
public "getRotationPitch"(): float
public "checkCanDropLoot"(): boolean
public "callForHelp"(arg0: $Entity$Type, arg1: integer): void
public "getRecentlyHit"(): integer
public "markEquipmentDirty"(): void
public "getRenderMetadata"(): string
public "setIsChild"(arg0: boolean): void
public "onArmorRemove"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type): void
public "onArmorAdd"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type): void
public "playMoveAwaySound"(): void
public "getOffsetTicks"(): integer
public "decreaseSaturationForContinuousAction"(): void
public "getLocation"(): $ILocation
public "detectEquipmentUpdates"(): void
public "m_6138_"(): void
public "isPushable"(): boolean
public "setItemSlot"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): void
public "isPushedByFluid"(): boolean
public static "getDefaultAttributes"(): $AttributeSupplier$Builder
public "getModelType"(): $ResourceLocation
public "interactAt"(arg0: $Player$Type, arg1: $Vec3$Type, arg2: $InteractionHand$Type): $InteractionResult
public "aiStep"(): void
public "canPickUpLoot"(): boolean
public "isNoAi"(): boolean
public "isDead"(): boolean
public "getProxy"(): $IWalkToProxy
public "getCitizenDiseaseHandler"(): $ICitizenDiseaseHandler
public "getCitizenColonyHandler"(): $ICitizenColonyHandler
public "getCitizenJobHandler"(): $ICitizenJobHandler
public "getInventoryCitizen"(): $InventoryCitizen
public "decreaseSaturationForAction"(): void
public "getCitizenExperienceHandler"(): $ICitizenExperienceHandler
public "getCitizenItemHandler"(): $ICitizenItemHandler
public "getCitizenInventoryHandler"(): $ICitizenInventoryHandler
public "setCitizenInventoryHandler"(arg0: $ICitizenInventoryHandler$Type): void
public "isWorkerAtSiteWithMove"(arg0: $BlockPos$Type, arg1: integer): boolean
public "setCitizenDiseaseHandler"(arg0: $ICitizenDiseaseHandler$Type): void
public "setCitizenSleepHandler"(arg0: $ICitizenSleepHandler$Type): void
public "setCitizenJobHandler"(arg0: $ICitizenJobHandler$Type): void
public "setCitizenItemHandler"(arg0: $ICitizenItemHandler$Type): void
public "setCitizenColonyHandler"(arg0: $ICitizenColonyHandler$Type): void
public "setCitizenExperienceHandler"(arg0: $ICitizenExperienceHandler$Type): void
public "getEntityStateController"(): $ITickRateStateMachine<($IState)>
public "calculateDamageAfterAbsorbs"(arg0: $DamageSource$Type, arg1: float): float
public "getCitizenSleepHandler"(): $ICitizenSleepHandler
public "getItemHandlerCitizen"(): $IItemHandler
public "getTicksExisted"(): integer
public "getRandom"(): $RandomSource
public "isBlocking"(): boolean
public "push"(arg0: $Entity$Type): void
public "isControlledByLocalInstance"(): boolean
public "getTexture"(): $ResourceLocation
public "isSleeping"(): boolean
public "getTextureId"(): integer
public "getTasks"(): $GoalSelector
public "setTexture"(): void
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
set "female"(value: boolean)
set "textureId"(value: integer)
set "modelId"(value: $ResourceLocation$Type)
get "navigation"(): $AbstractAdvancedPathNavigate
get "female"(): boolean
get "citizenData"(): $ICitizenData
get "citizenDataView"(): $ICitizenDataView
set "renderMetadata"(value: string)
get "rotationYaw"(): float
get "rotationPitch"(): float
get "recentlyHit"(): integer
get "renderMetadata"(): string
set "isChild"(value: boolean)
get "offsetTicks"(): integer
get "location"(): $ILocation
get "pushable"(): boolean
get "pushedByFluid"(): boolean
get "defaultAttributes"(): $AttributeSupplier$Builder
get "modelType"(): $ResourceLocation
get "noAi"(): boolean
get "dead"(): boolean
get "proxy"(): $IWalkToProxy
get "citizenDiseaseHandler"(): $ICitizenDiseaseHandler
get "citizenColonyHandler"(): $ICitizenColonyHandler
get "citizenJobHandler"(): $ICitizenJobHandler
get "inventoryCitizen"(): $InventoryCitizen
get "citizenExperienceHandler"(): $ICitizenExperienceHandler
get "citizenItemHandler"(): $ICitizenItemHandler
get "citizenInventoryHandler"(): $ICitizenInventoryHandler
set "citizenInventoryHandler"(value: $ICitizenInventoryHandler$Type)
set "citizenDiseaseHandler"(value: $ICitizenDiseaseHandler$Type)
set "citizenSleepHandler"(value: $ICitizenSleepHandler$Type)
set "citizenJobHandler"(value: $ICitizenJobHandler$Type)
set "citizenItemHandler"(value: $ICitizenItemHandler$Type)
set "citizenColonyHandler"(value: $ICitizenColonyHandler$Type)
set "citizenExperienceHandler"(value: $ICitizenExperienceHandler$Type)
get "entityStateController"(): $ITickRateStateMachine<($IState)>
get "citizenSleepHandler"(): $ICitizenSleepHandler
get "itemHandlerCitizen"(): $IItemHandler
get "ticksExisted"(): integer
get "random"(): $RandomSource
get "blocking"(): boolean
get "controlledByLocalInstance"(): boolean
get "texture"(): $ResourceLocation
get "sleeping"(): boolean
get "textureId"(): integer
get "tasks"(): $GoalSelector
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEntityCitizen$Type = ($AbstractEntityCitizen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEntityCitizen_ = $AbstractEntityCitizen$Type;
}}
declare module "packages/com/minecolonies/api/colony/permissions/$Rank" {
import {$Action, $Action$Type} from "packages/com/minecolonies/api/colony/permissions/$Action"

export class $Rank {

constructor(arg0: integer, arg1: long, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean)
constructor(arg0: integer, arg1: string, arg2: boolean, arg3: boolean)

public "setHostile"(arg0: boolean): void
public "setColonyManager"(arg0: boolean): void
public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $Rank$Type): integer
public "getPermissions"(): long
public "getId"(): integer
public "isHostile"(): boolean
public "isColonyManager"(): boolean
public "isSubscriber"(): boolean
public "setSubscriber"(arg0: boolean): void
public "isInitial"(): boolean
public "addPermission"(arg0: $Action$Type): boolean
public "removePermission"(arg0: $Action$Type): boolean
set "hostile"(value: boolean)
set "colonyManager"(value: boolean)
get "name"(): string
get "permissions"(): long
get "id"(): integer
get "hostile"(): boolean
get "colonyManager"(): boolean
get "subscriber"(): boolean
set "subscriber"(value: boolean)
get "initial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rank$Type = ($Rank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rank_ = $Rank$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutMiner" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutMiner extends $AbstractBlockHut<($BlockHutMiner)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutMiner$Type = ($BlockHutMiner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutMiner_ = $BlockHutMiner$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemPlateArmor" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPlateArmor extends $ArmorItem {
static readonly "PLATE_ARMOR": $ArmorMaterial
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

constructor(arg0: string, arg1: $ArmorMaterial$Type, arg2: $ArmorItem$Type$Type, arg3: $Item$Properties$Type)

public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPlateArmor$Type = ($ItemPlateArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPlateArmor_ = $ItemPlateArmor$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemBuildGoggles" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBuildGoggles extends $ArmorItem {
static readonly "GOGGLES": $ArmorMaterial
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

constructor(arg0: string, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuildGoggles$Type = ($ItemBuildGoggles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuildGoggles_ = $ItemBuildGoggles$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScepterBeekeeper" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlockOverlayItem, $IBlockOverlayItem$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem"
import {$IBlockOverlayItem$OverlayBox, $IBlockOverlayItem$OverlayBox$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem$OverlayBox"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScepterBeekeeper extends $AbstractItemMinecolonies implements $IBlockOverlayItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getOverlayBoxes"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $List<($IBlockOverlayItem$OverlayBox)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScepterBeekeeper$Type = ($ItemScepterBeekeeper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScepterBeekeeper_ = $ItemScepterBeekeeper$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/$IBuildingContainer" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISchematicProvider, $ISchematicProvider$Type} from "packages/com/minecolonies/api/colony/buildings/$ISchematicProvider"
import {$AbstractTileEntityColonyBuilding, $AbstractTileEntityColonyBuilding$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityColonyBuilding"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBuildingContainer extends $ISchematicProvider, $ICapabilityProvider {

 "getTileEntity"(): $AbstractTileEntityColonyBuilding
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "addContainerPosition"(arg0: $BlockPos$Type): void
 "registerBlockPosition"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "registerBlockPosition"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
 "removeContainerPosition"(arg0: $BlockPos$Type): void
 "alterPickUpPriority"(arg0: integer): void
 "getPickUpPriority"(): integer
 "setTileEntity"(arg0: $AbstractTileEntityColonyBuilding$Type): void
 "getContainers"(): $List<($BlockPos)>
 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "markDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IBuildingContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuildingContainer$Type = ($IBuildingContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuildingContainer_ = $IBuildingContainer$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutDyer" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutDyer extends $AbstractBlockHut<($BlockHutDyer)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutDyer$Type = ($BlockHutDyer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutDyer_ = $BlockHutDyer$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemLargeBottle" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLargeBottle extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLargeBottle$Type = ($ItemLargeBottle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLargeBottle_ = $ItemLargeBottle$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutNetherWorker" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutNetherWorker extends $AbstractBlockHut<($BlockHutNetherWorker)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutNetherWorker$Type = ($BlockHutNetherWorker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutNetherWorker_ = $BlockHutNetherWorker$Type;
}}
declare module "packages/com/minecolonies/api/colony/permissions/$IPermissions" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Action, $Action$Type} from "packages/com/minecolonies/api/colony/permissions/$Action"
import {$ColonyPlayer, $ColonyPlayer$Type} from "packages/com/minecolonies/api/colony/permissions/$ColonyPlayer"
import {$Rank, $Rank$Type} from "packages/com/minecolonies/api/colony/permissions/$Rank"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IPermissions {

 "getRank"(arg0: $Player$Type): $Rank
 "getRank"(arg0: integer): $Rank
 "getRank"(arg0: $UUID$Type): $Rank
 "addPlayer"(arg0: $UUID$Type, arg1: string, arg2: $Rank$Type): boolean
 "addPlayer"(arg0: string, arg1: $Rank$Type, arg2: $Level$Type): boolean
 "addPlayer"(arg0: $GameProfile$Type, arg1: $Rank$Type): boolean
 "removePlayer"(arg0: $UUID$Type): boolean
 "canAlterPermission"(arg0: $Rank$Type, arg1: $Rank$Type, arg2: $Action$Type): boolean
 "getOwnerEntry"(): $Map$Entry<($UUID), ($ColonyPlayer)>
 "getRankHostile"(): $Rank
 "restoreOwnerIfNull"(): void
 "getFilteredPlayers"(arg0: $Predicate$Type<($Rank$Type)>): $Set<($ColonyPlayer)>
 "isColonyMember"(arg0: $Player$Type): boolean
 "getRankFriend"(): $Rank
 "getOwner"(): $UUID
 "setPermission"(arg0: $Rank$Type, arg1: $Action$Type, arg2: boolean): boolean
 "setOwner"(arg0: $Player$Type): boolean
 "getOwnerName"(): string
 "getPlayersByRank"(arg0: $Rank$Type): $Set<($ColonyPlayer)>
 "getPlayersByRank"(arg0: $Set$Type<($Rank$Type)>): $Set<($ColonyPlayer)>
 "hasPermission"(arg0: $Player$Type, arg1: $Action$Type): boolean
 "hasPermission"(arg0: $Rank$Type, arg1: $Action$Type): boolean
 "getPlayers"(): $Map<($UUID), ($ColonyPlayer)>
 "getRankOwner"(): $Rank
 "setPlayerRank"(arg0: $UUID$Type, arg1: $Rank$Type, arg2: $Level$Type): boolean
 "alterPermission"(arg0: $Rank$Type, arg1: $Rank$Type, arg2: $Action$Type, arg3: boolean): boolean
 "getRanks"(): $Map<(integer), ($Rank)>
 "isSubscriber"(arg0: $Player$Type): boolean
 "setOwnerAbandoned"(): void
 "getRankOfficer"(): $Rank
 "getRankNeutral"(): $Rank
 "addRank"(arg0: string): void
 "removeRank"(arg0: $Rank$Type): void
}

export namespace $IPermissions {
const OWNER_RANK_ID: integer
const OFFICER_RANK_ID: integer
const FRIEND_RANK_ID: integer
const NEUTRAL_RANK_ID: integer
const HOSTILE_RANK_ID: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPermissions$Type = ($IPermissions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPermissions_ = $IPermissions$Type;
}}
declare module "packages/com/minecolonies/api/blocks/types/$BarrelType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BarrelType extends $Enum<($BarrelType)> implements $StringRepresentable {
static readonly "ZERO": $BarrelType
static readonly "TWENTY": $BarrelType
static readonly "FORTY": $BarrelType
static readonly "SIXTY": $BarrelType
static readonly "EIGHTY": $BarrelType
static readonly "HUNDRED": $BarrelType
static readonly "WORKING": $BarrelType
static readonly "DONE": $BarrelType


public "getName"(): string
public "toString"(): string
public static "values"(): ($BarrelType)[]
public static "valueOf"(arg0: string): $BarrelType
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getTranslationKey"(): string
public "getMaterialColor"(): $MapColor
public static "byMetadata"(arg0: integer): $BarrelType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
get "metadata"(): integer
get "translationKey"(): string
get "materialColor"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelType$Type = (("zero") | ("sixty") | ("hundred") | ("working") | ("eighty") | ("done") | ("twenty") | ("forty")) | ($BarrelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelType_ = $BarrelType$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISetting" {
import {$ISettingKey, $ISettingKey$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingKey"
import {$Pane, $Pane$Type} from "packages/com/ldtteam/blockui/$Pane"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$ISettingsModuleView, $ISettingsModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/settings/$ISettingsModuleView"
import {$ISettingsModule, $ISettingsModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$ISettingsModule"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"

export interface $ISetting<S> {

 "trigger"(): void
 "getValue"(): S
 "isActive"(arg0: $ISettingsModuleView$Type): boolean
 "isActive"(arg0: $ISettingsModule$Type): boolean
 "copyValue"(arg0: $ISetting$Type<(any)>): void
 "setHoverPane"(arg0: $ISettingKey$Type<(any)>, arg1: $Pane$Type, arg2: $ISettingsModuleView$Type): void
 "onUpdate"(arg0: $IBuilding$Type, arg1: $ServerPlayer$Type): void
 "render"(arg0: $ISettingKey$Type<(any)>, arg1: $Pane$Type, arg2: $ISettingsModuleView$Type, arg3: $IBuildingView$Type, arg4: $BOWindow$Type): void
 "getLayoutItem"(): $ResourceLocation
 "updateSetting"(arg0: $ISetting$Type<(any)>): void
 "getInactiveReason"(): $Component
 "setupHandler"(arg0: $ISettingKey$Type<(any)>, arg1: $Pane$Type, arg2: $ISettingsModuleView$Type, arg3: $IBuildingView$Type, arg4: $BOWindow$Type): void
 "getToolTipText"(): $Component
 "shouldHideWhenInactive"(): boolean
}

export namespace $ISetting {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISetting$Type<S> = ($ISetting<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISetting_<S> = $ISetting$Type<(S)>;
}}
declare module "packages/com/minecolonies/api/entity/citizen/happiness/$IHappinessModifier" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"

export interface $IHappinessModifier {

 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "getId"(): string
 "getWeight"(): double
 "getFactor"(arg0: $ICitizenData$Type): double
}

export namespace $IHappinessModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHappinessModifier$Type = ($IHappinessModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHappinessModifier_ = $IHappinessModifier$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutSwineHerder" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutSwineHerder extends $AbstractBlockHut<($BlockHutSwineHerder)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutSwineHerder$Type = ($BlockHutSwineHerder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutSwineHerder_ = $BlockHutSwineHerder$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactoryController, $IFactoryController$Type} from "packages/com/minecolonies/api/colony/requestsystem/factory/$IFactoryController"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IDataStoreManager, $IDataStoreManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/data/$IDataStoreManager"
import {$IRetryingRequestResolver, $IRetryingRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/retrying/$IRetryingRequestResolver"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IRequestResolverProvider, $IRequestResolverProvider$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolverProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITickable, $ITickable$Type} from "packages/com/minecolonies/api/tileentities/$ITickable"
import {$RequestState, $RequestState$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$RequestState"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$IRequestResolver, $IRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/$IRequestResolver"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IRequester, $IRequester$Type} from "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester"
import {$IPlayerRequestResolver, $IPlayerRequestResolver$Type} from "packages/com/minecolonies/api/colony/requestsystem/resolver/player/$IPlayerRequestResolver"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRequestManager extends $INBTSerializable<($CompoundTag)>, $ITickable {

 "getRequestForToken"(arg0: $IToken$Type<(any)>): $IRequest<(any)>
 "getPlayerResolver"(): $IPlayerRequestResolver
 "getRetryingRequestResolver"(): $IRetryingRequestResolver
 "log"(arg0: string): void
 "reset"(): void
 "isDirty"(): boolean
 "deserialize"(arg0: $IFactoryController$Type, arg1: $FriendlyByteBuf$Type): void
 "serialize"(arg0: $IFactoryController$Type, arg1: $FriendlyByteBuf$Type): void
 "onColonyUpdate"(arg0: $Predicate$Type<($IRequest$Type<(any)>)>): void
 "setDirty"(arg0: boolean): void
 "updateRequestState"(arg0: $IToken$Type<(any)>, arg1: $RequestState$Type): void
 "assignRequest"(arg0: $IToken$Type<(any)>): void
 "reassignRequest"(arg0: $IToken$Type<(any)>, arg1: $Collection$Type<($IToken$Type<(any)>)>): $IToken<(any)>
 "overruleRequest"(arg0: $IToken$Type<(any)>, arg1: $ItemStack$Type): void
 "markDirty"(): void
 "createRequest"<T extends $IRequestable>(arg0: $IRequester$Type, arg1: T): $IToken<(any)>
 "getResolverForRequest"(arg0: $IToken$Type<(any)>): $IRequestResolver<(any)>
 "getDataStoreManager"(): $IDataStoreManager
 "getFactoryController"(): $IFactoryController
 "createAndAssignRequest"<T extends $IRequestable>(arg0: $IRequester$Type, arg1: T): $IToken<(any)>
 "onProviderRemovedFromColony"(arg0: $IRequestResolverProvider$Type): void
 "getResolverForToken"(arg0: $IToken$Type<(any)>): $IRequestResolver<(any)>
 "onProviderAddedToColony"(arg0: $IRequestResolverProvider$Type): void
 "onRequesterRemovedFromColony"(arg0: $IRequester$Type): void
 "getColony"(): $IColony
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
 "tick"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
 "tick"(): void
}

export namespace $IRequestManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequestManager$Type = ($IRequestManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequestManager_ = $IRequestManager$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemScrollColonyAreaTP" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractItemScroll, $AbstractItemScroll$Type} from "packages/com/minecolonies/core/items/$AbstractItemScroll"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemScrollColonyAreaTP extends $AbstractItemScroll {
static readonly "TAG_COLONY_DIM": string
static readonly "TAG_BUILDING_POS": string
static readonly "FAIL_RESPONSES_TOTAL": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScrollColonyAreaTP$Type = ($ItemScrollColonyAreaTP);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScrollColonyAreaTP_ = $ItemScrollColonyAreaTP$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutArchery" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutArchery extends $AbstractBlockHut<($BlockHutArchery)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutArchery$Type = ($BlockHutArchery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutArchery_ = $BlockHutArchery$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemGate" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemGate extends $BlockItem {
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

constructor(arg0: string, arg1: $Block$Type, arg2: $Item$Properties$Type)

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
export type $ItemGate$Type = ($ItemGate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGate_ = $ItemGate$Type;
}}
declare module "packages/com/minecolonies/api/quests/$IQuestTemplate" {
import {$IQuestObjectiveTemplate, $IQuestObjectiveTemplate$Type} from "packages/com/minecolonies/api/quests/$IQuestObjectiveTemplate"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IQuestTemplate {

 "unlockQuestRewards"(arg0: $IColony$Type, arg1: $Player$Type, arg2: $IQuestInstance$Type, arg3: $List$Type<(integer)>): void
 "getQuestTimeout"(): integer
 "getObjectiveCount"(): integer
 "attemptStart"(arg0: $IColony$Type): $IQuestInstance
 "getMaxOccurrence"(): integer
 "getName"(): $Component
 "getObjective"(arg0: integer): $IQuestObjectiveTemplate
 "getParents"(): $List<($ResourceLocation)>
}

export namespace $IQuestTemplate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuestTemplate$Type = ($IQuestTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQuestTemplate_ = $IQuestTemplate$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutKitchen" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutKitchen extends $AbstractBlockHut<($BlockHutKitchen)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutKitchen$Type = ($BlockHutKitchen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutKitchen_ = $BlockHutKitchen$Type;
}}
declare module "packages/com/minecolonies/api/colony/$IVisitorData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICitizenMournHandler, $ICitizenMournHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenMournHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$ICitizenHappinessHandler, $ICitizenHappinessHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenHappinessHandler"
import {$IInteractionResponseHandler, $IInteractionResponseHandler$Type} from "packages/com/minecolonies/api/colony/interactionhandling/$IInteractionResponseHandler"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"
import {$ICitizenSkillHandler, $ICitizenSkillHandler$Type} from "packages/com/minecolonies/api/entity/citizen/citizenhandlers/$ICitizenSkillHandler"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CitizenNameFile, $CitizenNameFile$Type} from "packages/com/minecolonies/api/colony/$CitizenNameFile"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$IQuestInstance, $IQuestInstance$Type} from "packages/com/minecolonies/api/quests/$IQuestInstance"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$VisibleCitizenStatus, $VisibleCitizenStatus$Type} from "packages/com/minecolonies/api/entity/citizen/$VisibleCitizenStatus"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IJob, $IJob$Type} from "packages/com/minecolonies/api/colony/jobs/$IJob"
import {$InventoryCitizen, $InventoryCitizen$Type} from "packages/com/minecolonies/api/inventory/$InventoryCitizen"
import {$Tuple, $Tuple$Type} from "packages/com/minecolonies/api/util/$Tuple"

export interface $IVisitorData extends $ICitizenData {

 "setRecruitCosts"(arg0: $ItemStack$Type): void
 "getRecruitCost"(): $ItemStack
 "getSittingPosition"(): $BlockPos
 "setSittingPosition"(arg0: $BlockPos$Type): void
 "isAsleep"(): boolean
 "setHomeBuilding"(arg0: $IBuilding$Type): void
 "setBedPos"(arg0: $BlockPos$Type): void
 "setIsChild"(arg0: boolean): void
 "setLastPosition"(arg0: $BlockPos$Type): void
 "setVisibleStatus"(arg0: $VisibleCitizenStatus$Type): void
 "getWorkBuilding"(): $IBuilding
 "getHomeBuilding"(): $IBuilding
 "isIdleAtJob"(): boolean
 "getChildren"(): $List<(integer)>
 "getRandom"(): $Random
 "getEntity"(): $Optional<($AbstractEntityCitizen)>
 "onDeath"(arg0: integer): void
 "getStatus"(): $VisibleCitizenStatus
 "isWorking"(): boolean
 "getCitizenSkillHandler"(): $ICitizenSkillHandler
 "getCitizenHappinessHandler"(): $ICitizenHappinessHandler
 "setInteractedRecently"(arg0: $UUID$Type): void
 "applyResearchEffects"(): void
 "setNextRespawnPosition"(arg0: $BlockPos$Type): void
 "getCitizenMournHandler"(): $ICitizenMournHandler
 "onInteractionClosed"(arg0: $Component$Type, arg1: $ServerPlayer$Type): void
 "generateName"(arg0: $Random$Type, arg1: string, arg2: string, arg3: $CitizenNameFile$Type): void
 "setParents"(arg0: string, arg1: string): void
 "getParents"(): $Tuple<(string), (string)>
 "getBedPos"(): $BlockPos
 "setJob"(arg0: $IJob$Type<(any)>): void
 "getJob"<J extends $IJob<(any)>>(arg0: $Class$Type<(J)>): J
 "getJob"(): $IJob<(any)>
 "needsBetterFood"(): boolean
 "restartDone"(): void
 "getLastPosition"(): $BlockPos
 "setJustAte"(arg0: boolean): void
 "onGoSleep"(): void
 "getStatusPosition"(): $BlockPos
 "setSaturation"(arg0: double): void
 "addSiblings"(...arg0: (integer)[]): void
 "getPartner"(): $ICitizenData
 "onRemoveBuilding"(arg0: $IBuilding$Type): void
 "justAte"(): boolean
 "addChildren"(...arg0: (integer)[]): void
 "setIdleAtJob"(arg0: boolean): void
 "setStatusPosition"(arg0: $BlockPos$Type): void
 "setPartner"(arg0: integer): void
 "shouldRestart"(): boolean
 "setAsleep"(arg0: boolean): void
 "scheduleRestart"(arg0: $ServerPlayer$Type): void
 "getSiblings"(): $List<(integer)>
 "setWorking"(arg0: boolean): void
 "isRelatedTo"(arg0: $ICitizenData$Type): boolean
 "hasCustomTexture"(): boolean
 "setIdleDays"(arg0: integer): void
 "onBuildingLoad"(): void
 "hasQuestAssignment"(): boolean
 "onQuestCompletion"(arg0: $ResourceLocation$Type): void
 "setCustomTexture"(arg0: $UUID$Type): void
 "getCustomTexture"(): $UUID
 "onResurrect"(): void
 "doesLiveWith"(arg0: $ICitizenData$Type): boolean
 "setEntity"(arg0: $AbstractCivilianEntity$Type): void
 "triggerInteraction"(arg0: $IInteractionResponseHandler$Type): void
 "isRequestAsync"(arg0: $IToken$Type<(any)>): boolean
 "increaseSaturation"(arg0: double): void
 "initForNewCivilian"(): void
 "decreaseSaturation"(arg0: double): void
 "createRequestAsync"<R extends $IRequestable>(arg0: R): $IToken<(any)>
 "initEntityValues"(): void
 "setVoiceProfile"(arg0: integer): void
 "setSuffix"(arg0: string): void
 "getVoiceProfile"(): integer
 "getTextureSuffix"(): string
 "setGender"(arg0: boolean): void
 "onRequestCancelled"(arg0: $IToken$Type<(any)>): void
 "update"(): void
 "setName"(arg0: string): void
 "isDirty"(): boolean
 "setGenderAndGenerateName"(arg0: boolean): void
 "updateEntityIfNecessary"(): void
 "serializeViewNetworkData"(arg0: $FriendlyByteBuf$Type): void
 "onResponseTriggered"(arg0: $Component$Type, arg1: integer, arg2: $Player$Type): void
 "getUUID"(): $UUID
 "clearDirty"(): void
 "markDirty"(arg0: integer): void
 "createRequest"<R extends $IRequestable>(arg0: R): $IToken<(any)>
 "getTextureId"(): integer
 "assignQuest"(arg0: $IQuestInstance$Type): void
 "getName"(): string
 "addQuestParticipation"(arg0: $IQuestInstance$Type): void
 "isParticipantOfQuest"(arg0: $ResourceLocation$Type): boolean
 "openDialogue"(arg0: $IQuestInstance$Type, arg1: integer): void
 "onQuestDeletion"(arg0: $ResourceLocation$Type): void
 "getSaturation"(): double
 "isFemale"(): boolean
 "getId"(): integer
 "isChild"(): boolean
 "getInventory"(): $InventoryCitizen
 "isPaused"(): boolean
 "setPaused"(arg0: boolean): void
 "getColony"(): $IColony
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IVisitorData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVisitorData$Type = ($IVisitorData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVisitorData_ = $IVisitorData$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemQuestLog" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemQuestLog extends $AbstractItemMinecolonies {
static readonly "TAG_COLONY": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemQuestLog$Type = ($ItemQuestLog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemQuestLog_ = $ItemQuestLog$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutLumberjack" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutLumberjack extends $AbstractBlockHut<($BlockHutLumberjack)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutLumberjack$Type = ($BlockHutLumberjack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutLumberjack_ = $BlockHutLumberjack$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView" {
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export interface $IBuildingModuleView {

 "getIcon"(): string
 "getDesc"(): string
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "setBuildingView"(arg0: $IBuildingView$Type): $IBuildingModuleView
 "isPageVisible"(): boolean
 "getProducer"<M extends $IBuildingModule, V extends $IBuildingModuleView>(): $BuildingEntry$ModuleProducer<(M), (V)>
 "setProducer"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): $IBuildingModuleView
 "getWindow"(): $BOWindow
 "getColony"(): $IColonyView
 "getBuildingView"(): $IBuildingView
}

export namespace $IBuildingModuleView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuildingModuleView$Type = ($IBuildingModuleView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuildingModuleView_ = $IBuildingModuleView$Type;
}}
declare module "packages/com/minecolonies/api/research/$ILocalResearchTree" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IResearchEffectManager, $IResearchEffectManager$Type} from "packages/com/minecolonies/api/research/effects/$IResearchEffectManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ILocalResearch, $ILocalResearch$Type} from "packages/com/minecolonies/api/research/$ILocalResearch"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IGlobalResearch, $IGlobalResearch$Type} from "packages/com/minecolonies/api/research/$IGlobalResearch"

export interface $ILocalResearchTree {

 "getResearchInProgress"(): $List<($ILocalResearch)>
 "getResearch"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): $ILocalResearch
 "attemptBeginResearch"(arg0: $Player$Type, arg1: $IColony$Type, arg2: $IGlobalResearch$Type): void
 "attemptResetResearch"(arg0: $Player$Type, arg1: $IColony$Type, arg2: $ILocalResearch$Type): void
 "hasCompletedResearch"(arg0: $ResourceLocation$Type): boolean
 "isComplete"(arg0: $ResourceLocation$Type): boolean
 "finishResearch"(arg0: $ResourceLocation$Type): void
 "branchFinishedHighestLevel"(arg0: $ResourceLocation$Type): boolean
 "readFromNBT"(arg0: $CompoundTag$Type, arg1: $IResearchEffectManager$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "addResearch"(arg0: $ResourceLocation$Type, arg1: $ILocalResearch$Type): void
}

export namespace $ILocalResearchTree {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocalResearchTree$Type = ($ILocalResearchTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILocalResearchTree_ = $ILocalResearchTree$Type;
}}
declare module "packages/com/minecolonies/core/entity/pathfinding/pathresults/$PathResult" {
import {$ExecutorService, $ExecutorService$Type} from "packages/java/util/concurrent/$ExecutorService"
import {$Path, $Path$Type} from "packages/net/minecraft/world/level/pathfinder/$Path"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$PathFindingStatus, $PathFindingStatus$Type} from "packages/com/minecolonies/core/entity/pathfinding/$PathFindingStatus"

export class $PathResult<T extends $Callable<($Path)>> {
 "costPerDist": double
 "searchedNodes": integer

constructor()

public "isPathReachingDestination"(): boolean
public "isInProgress"(): boolean
public "getPathLength"(): integer
public "isCalculatingPath"(): boolean
public "getPath"(): $Path
public "cancel"(): void
public "isCancelled"(): boolean
public "isDone"(): boolean
public "getStatus"(): $PathFindingStatus
public "startJob"(arg0: $ExecutorService$Type): void
public "isComputing"(): boolean
public "setStatus"(arg0: $PathFindingStatus$Type): void
public "setJob"(arg0: T): void
public "getJob"(): T
public "processCalculationResults"(): void
public "setPathReachesDestination"(arg0: boolean): void
public "failedToReachDestination"(): boolean
public "hasPath"(): boolean
get "pathReachingDestination"(): boolean
get "inProgress"(): boolean
get "pathLength"(): integer
get "calculatingPath"(): boolean
get "path"(): $Path
get "cancelled"(): boolean
get "done"(): boolean
get "status"(): $PathFindingStatus
get "computing"(): boolean
set "status"(value: $PathFindingStatus$Type)
set "job"(value: T)
get "job"(): T
set "pathReachesDestination"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathResult$Type<T> = ($PathResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathResult_<T> = $PathResult$Type<(T)>;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockBarrel" {
import {$BarrelType, $BarrelType$Type} from "packages/com/minecolonies/api/blocks/types/$BarrelType"
import {$AbstractTileEntityBarrel, $AbstractTileEntityBarrel$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityBarrel"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ITickableBlockMinecolonies, $ITickableBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$ITickableBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractBlockMinecoloniesHorizontal, $AbstractBlockMinecoloniesHorizontal$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesHorizontal"

export class $AbstractBlockBarrel<B extends $AbstractBlockBarrel<(B)>> extends $AbstractBlockMinecoloniesHorizontal<(B)> implements $ITickableBlockMinecolonies {
static readonly "VARIANT": $EnumProperty<($BarrelType)>
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

public static "changeStateOverFullness"(arg0: $AbstractTileEntityBarrel$Type, arg1: $BlockState$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockBarrel$Type<B> = ($AbstractBlockBarrel<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockBarrel_<B> = $AbstractBlockBarrel$Type<(B)>;
}}
declare module "packages/com/minecolonies/api/colony/jobs/$IJob" {
import {$ITickingStateAI, $ITickingStateAI$Type} from "packages/com/minecolonies/api/entity/ai/$ITickingStateAI"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAssignsJob, $IAssignsJob$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IAssignsJob"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$AbstractEntityCitizen, $AbstractEntityCitizen$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractEntityCitizen"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$JobEntry, $JobEntry$Type} from "packages/com/minecolonies/api/colony/jobs/registry/$JobEntry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"

export interface $IJob<AI extends $ITickingStateAI> extends $INBTSerializable<($CompoundTag)> {

 "triggerActivityChangeAction"(arg0: boolean): void
 "incrementActionsDone"(arg0: integer): void
 "incrementActionsDone"(): void
 "hasCheckedForFoodToday"(): boolean
 "initEntityValues"(arg0: $AbstractEntityCitizen$Type): void
 "isGuard"(): boolean
 "getCitizen"(): $ICitizenData
 "getWorkerAI"(): AI
 "ignoresDamage"(arg0: $DamageSource$Type): boolean
 "canAIBeInterrupted"(): boolean
 "setRegistryEntry"(arg0: $JobEntry$Type): void
 "getWorkBuilding"(): $IBuilding
 "isIdling"(): boolean
 "getNameTagDescription"(): string
 "triggerDeathAchievement"(arg0: $DamageSource$Type, arg1: $AbstractEntityCitizen$Type): void
 "getAsyncRequests"(): $Set<($IToken<(any)>)>
 "onRemoval"(): void
 "getModel"(): $ResourceLocation
 "getJobRegistryEntry"(): $JobEntry
 "assignTo"(arg0: $IAssignsJob$Type): boolean
 "createAI"(): void
 "setNameTag"(arg0: string): void
 "clearActionsDone"(): void
 "setCheckedForFood"(): void
 "pickupSuccess"(arg0: $ItemStack$Type): boolean
 "generateAI"(): AI
 "resetAI"(): void
 "allowsAvoidance"(): boolean
 "onStackPickUp"(arg0: $ItemStack$Type): boolean
 "markRequestSync"(arg0: $IToken$Type<(any)>): void
 "getActionsDone"(): integer
 "getBuildingPos"(): $BlockPos
 "getWorkModule"(): $IAssignsJob
 "getDiseaseModifier"(): integer
 "onLevelUp"(): void
 "getInactivityLimit"(): integer
 "serializeToView"(arg0: $FriendlyByteBuf$Type): void
 "processOfflineTime"(arg0: long): void
 "getIdleSeverity"(arg0: boolean): integer
 "onWakeUp"(): void
 "getColony"(): $IColony
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IJob {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJob$Type<AI> = ($IJob<(AI)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJob_<AI> = $IJob$Type<(AI)>;
}}
declare module "packages/com/minecolonies/api/colony/buildings/$ISchematicProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IBlueprintDataProviderBE, $IBlueprintDataProviderBE$Type} from "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISchematicProvider extends $INBTSerializable<($CompoundTag)> {

 "getBlueprintPath"(): string
 "setBlueprintPath"(arg0: string): void
 "getParent"(): $BlockPos
 "setParent"(arg0: $BlockPos$Type): void
 "isMirrored"(): boolean
 "getID"(): $BlockPos
 "isDirty"(): boolean
 "getPosition"(): $BlockPos
 "getChildren"(): $Set<($BlockPos)>
 "getRotation"(): integer
 "onUpgradeSchematicTo"(arg0: string, arg1: string, arg2: $IBlueprintDataProviderBE$Type): void
 "getMaxBuildingLevel"(): integer
 "clearDirty"(): void
 "markDirty"(): void
 "hasParent"(): boolean
 "setDeconstructed"(): void
 "setCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "isDeconstructed"(): boolean
 "getSchematicName"(): string
 "getStructurePack"(): string
 "setIsMirrored"(arg0: boolean): void
 "setStructurePack"(arg0: string): void
 "setBuildingLevel"(arg0: integer): void
 "getBuildingLevel"(): integer
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $ISchematicProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchematicProvider$Type = ($ISchematicProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchematicProvider_ = $ISchematicProvider$Type;
}}
declare module "packages/com/minecolonies/core/tileentities/$TileEntityRack" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IMateriallyTexturedBlockEntity, $IMateriallyTexturedBlockEntity$Type} from "packages/com/ldtteam/domumornamentum/entity/block/$IMateriallyTexturedBlockEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$ItemStorage, $ItemStorage$Type} from "packages/com/minecolonies/api/crafting/$ItemStorage"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$AbstractTileEntityRack, $AbstractTileEntityRack$Type} from "packages/com/minecolonies/api/tileentities/$AbstractTileEntityRack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TileEntityRack extends $AbstractTileEntityRack implements $IMateriallyTexturedBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer)

public "updateTextureDataWith"(arg0: $MaterialTextureData$Type): void
public "isEmpty"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCount"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): integer
public "getCount"(arg0: $ItemStorage$Type): integer
public "getItemCount"(arg0: $Predicate$Type<($ItemStack$Type)>): integer
public "getDisplayName"(): $Component
public "setChanged"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getModelData"(): $ModelData
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getTextureData"(): $MaterialTextureData
public "getAllContent"(): $Map<($ItemStorage), (integer)>
public "updateItemStorage"(): void
public "getFreeSlots"(): integer
public "getOtherChest"(): $AbstractTileEntityRack
public "getUpgradeSize"(): integer
public "setInWarehouse"(arg0: boolean): void
public "upgradeRackSize"(): void
public "hasItemStack"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): boolean
public "hasItemStack"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "hasSimilarStack"(arg0: $ItemStack$Type): boolean
public "createInventory"(arg0: integer): $ItemStackHandler
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
get "empty"(): boolean
get "displayName"(): $Component
get "updateTag"(): $CompoundTag
get "modelData"(): $ModelData
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "textureData"(): $MaterialTextureData
get "allContent"(): $Map<($ItemStorage), (integer)>
get "freeSlots"(): integer
get "otherChest"(): $AbstractTileEntityRack
get "upgradeSize"(): integer
set "inWarehouse"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityRack$Type = ($TileEntityRack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityRack_ = $TileEntityRack$Type;
}}
declare module "packages/com/minecolonies/api/util/$Tuple" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Tuple<A, B> {

constructor(arg0: A, arg1: B)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getA"(): A
public "getB"(): B
get "a"(): A
get "b"(): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tuple$Type<A, B> = ($Tuple<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tuple_<A, B> = $Tuple$Type<(A), (B)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemAncientTome" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractItemMinecolonies, $AbstractItemMinecolonies$Type} from "packages/com/minecolonies/core/items/$AbstractItemMinecolonies"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemAncientTome extends $AbstractItemMinecolonies {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAncientTome$Type = ($ItemAncientTome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAncientTome_ = $ItemAncientTome$Type;
}}
declare module "packages/com/minecolonies/api/blocks/interfaces/$IBuildingBrowsableBlock" {
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"

export interface $IBuildingBrowsableBlock {

 "shouldBrowseBuildings"(arg0: $PlayerInteractEvent$RightClickItem$Type): boolean
}

export namespace $IBuildingBrowsableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuildingBrowsableBlock$Type = ($IBuildingBrowsableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuildingBrowsableBlock_ = $IBuildingBrowsableBlock$Type;
}}
declare module "packages/com/minecolonies/api/entity/pathfinding/$IPathJob" {
import {$PathResult, $PathResult$Type} from "packages/com/minecolonies/core/entity/pathfinding/pathresults/$PathResult"
import {$Path, $Path$Type} from "packages/net/minecraft/world/level/pathfinder/$Path"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$PathingOptions, $PathingOptions$Type} from "packages/com/minecolonies/core/entity/pathfinding/$PathingOptions"

export interface $IPathJob extends $Callable<($Path)> {

 "getPathingOptions"(): $PathingOptions
 "getResult"(): $PathResult<(any)>
 "call"(): $Path
}

export namespace $IPathJob {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathJob$Type = ($IPathJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPathJob_ = $IPathJob$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutGuardTower" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutGuardTower extends $AbstractBlockHut<($BlockHutGuardTower)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutGuardTower$Type = ($BlockHutGuardTower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutGuardTower_ = $BlockHutGuardTower$Type;
}}
declare module "packages/com/minecolonies/api/colony/permissions/$ColonyPlayer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Rank, $Rank$Type} from "packages/com/minecolonies/api/colony/permissions/$Rank"

export class $ColonyPlayer {

constructor(arg0: $UUID$Type, arg1: string, arg2: $Rank$Type)

public "getRank"(): $Rank
public "getName"(): string
public "getID"(): $UUID
public "setRank"(arg0: $Rank$Type): void
get "rank"(): $Rank
get "name"(): string
get "iD"(): $UUID
set "rank"(value: $Rank$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColonyPlayer$Type = ($ColonyPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColonyPlayer_ = $ColonyPlayer$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemSantaHead" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSantaHead extends $ArmorItem {
static readonly "SANTA_HAT": $ArmorMaterial
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

constructor(arg0: string, arg1: $ArmorMaterial$Type, arg2: $ArmorItem$Type$Type, arg3: $Item$Properties$Type)

public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSantaHead$Type = ($ItemSantaHead);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSantaHead_ = $ItemSantaHead$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/token/$IToken" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IToken<T> {

 "getIdentifier"(): T

(): T
}

export namespace $IToken {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToken$Type<T> = ($IToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToken_<T> = $IToken$Type<(T)>;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutCombatAcademy" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutCombatAcademy extends $AbstractBlockHut<($BlockHutCombatAcademy)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutCombatAcademy$Type = ($BlockHutCombatAcademy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutCombatAcademy_ = $BlockHutCombatAcademy$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRetryable" {
import {$IRequestable, $IRequestable$Type} from "packages/com/minecolonies/api/colony/requestsystem/requestable/$IRequestable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export interface $IRetryable extends $IRequestable {

 "getSuperClasses"(): $Set<($TypeToken<(any)>)>

(): $Set<($TypeToken<(any)>)>
}

export namespace $IRetryable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRetryable$Type = ($IRetryable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRetryable_ = $IRetryable$Type;
}}
declare module "packages/com/minecolonies/core/entity/pathfinding/$PathingOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PathingOptions {
static readonly "MAX_COST": integer
 "jumpCost": double
 "dropCost": double
 "onPathCost": double
 "onRailCost": double
 "railsExitCost": double
 "swimCost": double
 "caveAirCost": double
 "swimCostEnter": double
 "traverseToggleAbleCost": double
 "nonLadderClimbableCost": double
 "walkInShapesCost": double
 "randomnessFactor": double
 "canDrop": boolean

constructor()

public "setCanOpenDoors"(arg0: boolean): void
public "setEnterDoors"(arg0: boolean): void
public "setCanUseRails"(arg0: boolean): void
public "withDropCost"(arg0: double): $PathingOptions
public "setPassDanger"(arg0: boolean): void
public "withJumpCost"(arg0: double): $PathingOptions
public "withNonLadderClimbableCost"(arg0: double): $PathingOptions
public "canSwim"(): boolean
public "importFrom"(arg0: $PathingOptions$Type): void
public "setCanSwim"(arg0: boolean): void
public "withToggleCost"(arg0: double): $PathingOptions
public "setCanClimbAdvanced"(arg0: boolean): void
public "canUseRails"(): boolean
public "canWalkUnderWater"(): boolean
public "canEnterDoors"(): boolean
public "withStartSwimCost"(arg0: double): $PathingOptions
public "withSwimCost"(arg0: double): $PathingOptions
public "withWalkUnderWater"(arg0: boolean): $PathingOptions
public "withCanEnterDoors"(arg0: boolean): $PathingOptions
public "withCanSwim"(arg0: boolean): $PathingOptions
public "withOnPathCost"(arg0: double): $PathingOptions
public "withOnRailCost"(arg0: double): $PathingOptions
public "canOpenDoors"(): boolean
public "setWalkUnderWater"(arg0: boolean): void
public "canClimbAdvanced"(): boolean
public "withRailExitCost"(arg0: double): $PathingOptions
public "canPassDanger"(): boolean
set "enterDoors"(value: boolean)
set "passDanger"(value: boolean)
set "walkUnderWater"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathingOptions$Type = ($PathingOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathingOptions_ = $PathingOptions$Type;
}}
declare module "packages/com/minecolonies/api/colony/requestsystem/requester/$IRequester" {
import {$IToken, $IToken$Type} from "packages/com/minecolonies/api/colony/requestsystem/token/$IToken"
import {$ILocation, $ILocation$Type} from "packages/com/minecolonies/api/colony/requestsystem/location/$ILocation"
import {$IRequestManager, $IRequestManager$Type} from "packages/com/minecolonies/api/colony/requestsystem/manager/$IRequestManager"
import {$IRequest, $IRequest$Type} from "packages/com/minecolonies/api/colony/requestsystem/request/$IRequest"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IRequester {

 "getLocation"(): $ILocation
 "getId"(): $IToken<(any)>
 "onRequestedRequestCancelled"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "onRequestedRequestComplete"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): void
 "getRequesterDisplayName"(arg0: $IRequestManager$Type, arg1: $IRequest$Type<(any)>): $MutableComponent
}

export namespace $IRequester {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequester$Type = ($IRequester);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequester_ = $IRequester$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$ICitizenManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$IHappinessModifier, $IHappinessModifier$Type} from "packages/com/minecolonies/api/entity/citizen/happiness/$IHappinessModifier"
import {$ICivilianData, $ICivilianData$Type} from "packages/com/minecolonies/api/colony/$ICivilianData"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEntityManager, $IEntityManager$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IEntityManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractCivilianEntity, $AbstractCivilianEntity$Type} from "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity"

export interface $ICitizenManager extends $IEntityManager {

 "getPotentialMaxCitizens"(): integer
 "getMaxCitizens"(): integer
 "getCitizens"(): $List<($ICitizenData)>
 "updateCitizenMourn"(arg0: $ICitizenData$Type, arg1: boolean): void
 "getCurrentCitizenCount"(): integer
 "getRandomCitizen"(): $ICitizenData
 "tickCitizenData"(): boolean
 "afterBuildingLoad"(): void
 "updateCitizenSleep"(arg0: boolean): void
 "setMaxCitizens"(arg0: integer): void
 "onCitizenSleep"(): void
 "getJoblessCitizen"(): $ICitizenData
 "injectModifier"(arg0: $IHappinessModifier$Type): void
 "calculateMaxCitizens"(): void
 "onWakeUp"(): void
 "resurrectCivilianData"(arg0: $CompoundTag$Type, arg1: boolean, arg2: $Level$Type, arg3: $BlockPos$Type): $ICitizenData
 "maxCitizensFromResearch"(): double
 "setPotentialMaxCitizens"(arg0: integer): void
 "spawnOrCreateCitizen"(arg0: $ICitizenData$Type, arg1: $Level$Type): $ICitizenData
 "spawnOrCreateCitizen"(): void
 "spawnOrCreateCitizen"(arg0: $ICitizenData$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $ICitizenData
 "checkCitizensForHappiness"(): void
 "getCivilianDataMap"(): $Map<(integer), ($ICivilianData)>
 "removeCivilian"(arg0: $ICivilianData$Type): void
 "sendPackets"(arg0: $Set$Type<($ServerPlayer$Type)>, arg1: $Set$Type<($ServerPlayer$Type)>): void
 "unregisterCivilian"(arg0: $AbstractCivilianEntity$Type): void
 "registerCivilian"(arg0: $AbstractCivilianEntity$Type): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "spawnOrCreateCivilian"<T extends $ICivilianData>(arg0: T, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): T
 "clearDirty"(): void
 "markDirty"(): void
 "onColonyTick"(arg0: $IColony$Type): void
}

export namespace $ICitizenManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICitizenManager$Type = ($ICitizenManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICitizenManager_ = $ICitizenManager$Type;
}}
declare module "packages/com/minecolonies/api/entity/citizen/$AbstractCivilianEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$Npc, $Npc$Type} from "packages/net/minecraft/world/entity/npc/$Npc"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$ICivilianData, $ICivilianData$Type} from "packages/com/minecolonies/api/colony/$ICivilianData"
import {$AbstractFastMinecoloniesEntity, $AbstractFastMinecoloniesEntity$Type} from "packages/com/minecolonies/api/entity/other/$AbstractFastMinecoloniesEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BaguAnimationController, $BaguAnimationController$Type} from "packages/bagu_chan/bagus_lib/animation/$BaguAnimationController"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Spectre, $Spectre$Type} from "packages/net/orcinus/galosphere/entities/$Spectre"

export class $AbstractCivilianEntity extends $AbstractFastMinecoloniesEntity implements $Npc {
readonly "randomVariance": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "moveControl": $MoveControl
 "navigation": $PathNavigation
 "goalSelector": $GoalSelector
 "targetSelector": $GoalSelector
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lastDamageSource": $DamageSource
 "lastDamageStamp": long
 "autoSpinAttackTicks": integer
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


public "setCivilianData"(arg0: $ICivilianData$Type): void
public "setCitizenId"(arg0: integer): void
public "queueSound"(arg0: $SoundEvent$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): void
public "queueSound"(arg0: $SoundEvent$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: float, arg5: float): void
public "getCivilianData"(): $ICivilianData
public "onPlayerCollide"(arg0: $Player$Type): void
public "getCivilianID"(): integer
public "toString"(): string
public "checkBedExists"(): boolean
public "startRiding"(arg0: $Entity$Type, arg1: boolean): boolean
public "push"(arg0: $Entity$Type): void
public "markDirty"(arg0: integer): void
public static "isSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
public static "addSpectreBoundedTags"(arg0: $Spectre$Type, arg1: $CompoundTag$Type): void
public static "canUseSpectreBoundedSpyglass"(arg0: $ItemStack$Type): boolean
set "civilianData"(value: $ICivilianData$Type)
set "citizenId"(value: integer)
get "civilianData"(): $ICivilianData
get "civilianID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCivilianEntity$Type = ($AbstractCivilianEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCivilianEntity_ = $AbstractCivilianEntity$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutLibrary" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutLibrary extends $AbstractBlockHut<($BlockHutLibrary)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutLibrary$Type = ($BlockHutLibrary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutLibrary_ = $BlockHutLibrary$Type;
}}
declare module "packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractEntityRaiderMob, $AbstractEntityRaiderMob$Type} from "packages/com/minecolonies/api/entity/mobs/$AbstractEntityRaiderMob"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRaiderManager$RaidSpawnResult, $IRaiderManager$RaidSpawnResult$Type} from "packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager$RaidSpawnResult"
import {$ICitizenData, $ICitizenData$Type} from "packages/com/minecolonies/api/colony/$ICitizenData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IRaiderManager {

 "getNightsSinceLastRaid"(): integer
 "getRandomBuilding"(): $BlockPos
 "isRaided"(): boolean
 "onLostCitizen"(arg0: $ICitizenData$Type): void
 "getColonyRaidLevel"(): integer
 "setPassThroughRaid"(): void
 "write"(arg0: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type): void
 "willRaidTonight"(): boolean
 "setNightsSinceLastRaid"(arg0: integer): void
 "getRaidDifficultyModifier"(): double
 "onNightFall"(): void
 "areSpiesEnabled"(): boolean
 "onRaiderDeath"(arg0: $AbstractEntityRaiderMob$Type): void
 "getLostCitizen"(): integer
 "setSpiesEnabled"(arg0: boolean): void
 "getLastSpawnPoints"(): $List<($BlockPos)>
 "calculateRaiderAmount"(arg0: integer): integer
 "calculateSpawnLocation"(): $BlockPos
 "setRaidNextNight"(arg0: boolean, arg1: string, arg2: boolean): void
 "setRaidNextNight"(arg0: boolean, arg1: string): void
 "setRaidNextNight"(arg0: boolean): void
 "raiderEvent"(arg0: string, arg1: boolean): $IRaiderManager$RaidSpawnResult
 "raiderEvent"(): void
 "raiderEvent"(arg0: string, arg1: boolean, arg2: boolean): $IRaiderManager$RaidSpawnResult
 "canRaid"(arg0: boolean): boolean
 "canRaid"(): boolean
 "setCanHaveRaiderEvents"(arg0: boolean): void
 "canHaveRaiderEvents"(): boolean
}

export namespace $IRaiderManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRaiderManager$Type = ($IRaiderManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRaiderManager_ = $IRaiderManager$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutMysticalSite" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutMysticalSite extends $AbstractBlockHut<($BlockHutMysticalSite)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutMysticalSite$Type = ($BlockHutMysticalSite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutMysticalSite_ = $BlockHutMysticalSite$Type;
}}
declare module "packages/com/minecolonies/api/colony/buildings/$HiringMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HiringMode extends $Enum<($HiringMode)> {
static readonly "DEFAULT": $HiringMode
static readonly "AUTO": $HiringMode
static readonly "MANUAL": $HiringMode
static readonly "LOCKED": $HiringMode


public static "values"(): ($HiringMode)[]
public static "valueOf"(arg0: string): $HiringMode
public "getTranslationKey"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HiringMode$Type = (("default") | ("auto") | ("manual") | ("locked")) | ($HiringMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HiringMode_ = $HiringMode$Type;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockPlantationField" {
import {$IAnchorBlock, $IAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$IAnchorBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickItem"
import {$AbstractBlockMinecoloniesHorizontal, $AbstractBlockMinecoloniesHorizontal$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesHorizontal"
import {$IBuilderUndestroyable, $IBuilderUndestroyable$Type} from "packages/com/minecolonies/api/entity/ai/workers/util/$IBuilderUndestroyable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IBuildingBrowsableBlock, $IBuildingBrowsableBlock$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBuildingBrowsableBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockPlantationField extends $AbstractBlockMinecoloniesHorizontal<($BlockPlantationField)> implements $IBuilderUndestroyable, $IAnchorBlock, $IBuildingBrowsableBlock, $EntityBlock {
static readonly "MIRROR": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
public "shouldBrowseBuildings"(arg0: $PlayerInteractEvent$RightClickItem$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlantationField$Type = ($BlockPlantationField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlantationField_ = $BlockPlantationField$Type;
}}
declare module "packages/com/minecolonies/core/items/$ItemPirateGear" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPirateGear extends $ArmorItem {
static readonly "PIRATE_ARMOR_1": $ArmorMaterial
static readonly "PIRATE_ARMOR_2": $ArmorMaterial
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

constructor(arg0: string, arg1: $ArmorMaterial$Type, arg2: $ArmorItem$Type$Type, arg3: $Item$Properties$Type)

public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPirateGear$Type = ($ItemPirateGear);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPirateGear_ = $ItemPirateGear$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutGlassblower" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutGlassblower extends $AbstractBlockHut<($BlockHutGlassblower)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutGlassblower$Type = ($BlockHutGlassblower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutGlassblower_ = $BlockHutGlassblower$Type;
}}
declare module "packages/com/minecolonies/api/blocks/decorative/$AbstractColonyFlagBanner" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockMinecolonies, $IBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractBannerBlock, $AbstractBannerBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractBannerBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractColonyFlagBanner<B extends $AbstractColonyFlagBanner<(B)>> extends $AbstractBannerBlock implements $IBlockMinecolonies<($AbstractColonyFlagBanner<(B)>)> {
static readonly "REGISTRY_NAME": string
static readonly "REGISTRY_NAME_WALL": string
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
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractColonyFlagBanner$Type<B> = ($AbstractColonyFlagBanner<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractColonyFlagBanner_<B> = $AbstractColonyFlagBanner$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/items/$ItemBowlFood" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BowlFoodItem, $BowlFoodItem$Type} from "packages/net/minecraft/world/item/$BowlFoodItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMinecoloniesFoodItem, $IMinecoloniesFoodItem$Type} from "packages/com/minecolonies/api/items/$IMinecoloniesFoodItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBowlFood extends $BowlFoodItem implements $IMinecoloniesFoodItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: string, arg2: integer)

public "getTier"(): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "tier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBowlFood$Type = ($ItemBowlFood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBowlFood_ = $ItemBowlFood$Type;
}}
declare module "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesFalling" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockMinecolonies, $IBlockMinecolonies$Type} from "packages/com/minecolonies/api/blocks/interfaces/$IBlockMinecolonies"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"

export class $AbstractBlockMinecoloniesFalling<B extends $AbstractBlockMinecoloniesFalling<(B)>> extends $FallingBlock implements $IBlockMinecolonies<(B)> {
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

public "registerBlockItem"(arg0: $IForgeRegistry$Type<($Item$Type)>, arg1: $Item$Properties$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockMinecoloniesFalling$Type<B> = ($AbstractBlockMinecoloniesFalling<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockMinecoloniesFalling_<B> = $AbstractBlockMinecoloniesFalling$Type<(B)>;
}}
declare module "packages/com/minecolonies/core/blocks/$BlockDecorationController" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IAnchorBlock, $IAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$IAnchorBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ILeveledBlueprintAnchorBlock, $ILeveledBlueprintAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$ILeveledBlueprintAnchorBlock"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IBuilderUndestroyable, $IBuilderUndestroyable$Type} from "packages/com/minecolonies/api/entity/ai/workers/util/$IBuilderUndestroyable"
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
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$AbstractBlockMinecoloniesDirectional, $AbstractBlockMinecoloniesDirectional$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockMinecoloniesDirectional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockDecorationController extends $AbstractBlockMinecoloniesDirectional<($BlockDecorationController)> implements $IBuilderUndestroyable, $IAnchorBlock, $EntityBlock, $ILeveledBlueprintAnchorBlock, $SimpleWaterloggedBlock {
static "MIRROR": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getLevel"(arg0: $CompoundTag$Type): integer
public "getRegistryName"(): $ResourceLocation
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "registryName"(): $ResourceLocation
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDecorationController$Type = ($BlockDecorationController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDecorationController_ = $BlockDecorationController$Type;
}}
declare module "packages/com/minecolonies/core/blocks/huts/$BlockHutCitizen" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BuildingEntry, $BuildingEntry$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractBlockHut, $AbstractBlockHut$Type} from "packages/com/minecolonies/api/blocks/$AbstractBlockHut"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockHutCitizen extends $AbstractBlockHut<($BlockHutCitizen)> {
static readonly "FACING": $DirectionProperty
static readonly "HARDNESS": float
static readonly "RESISTANCE": float
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

public "getHutName"(): string
public "getBuildingEntry"(): $BuildingEntry
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
get "hutName"(): string
get "buildingEntry"(): $BuildingEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHutCitizen$Type = ($BlockHutCitizen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHutCitizen_ = $BlockHutCitizen$Type;
}}
declare module "packages/com/minecolonies/api/blocks/interfaces/$ITickableBlockMinecolonies" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $ITickableBlockMinecolonies extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}

export namespace $ITickableBlockMinecolonies {
function createTickerHelper<E, A>(arg0: $BlockEntityType$Type<(A)>, arg1: $BlockEntityType$Type<(E)>, arg2: $BlockEntityTicker$Type<(any)>): $BlockEntityTicker<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableBlockMinecolonies$Type = ($ITickableBlockMinecolonies);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableBlockMinecolonies_ = $ITickableBlockMinecolonies$Type;
}}
