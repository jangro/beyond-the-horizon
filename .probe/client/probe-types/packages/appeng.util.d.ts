declare module "packages/appeng/util/$ConfigMenuInventory" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemTransfer, $ItemTransfer$Type} from "packages/appeng/api/inventories/$ItemTransfer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConfigMenuInventory implements $InternalInventory {

constructor(arg0: $GenericStackInv$Type)

public "convertToSuitableStack"(arg0: $ItemStack$Type): $GenericStack
public "size"(): integer
public "getDelegate"(): $GenericStackInv
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "setItemDirect"(arg0: integer, arg1: $ItemStack$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "empty"(): $InternalInventory
public "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "sendChangeNotification"(arg0: integer): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
public static "wrapExternal"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ItemTransfer
public static "wrapExternal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ItemTransfer
public "toItemHandler"(): $IItemHandler
public "toContainer"(): $Container
public "simulateRemove"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "removeItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "removeSimilarItems"(arg0: integer, arg1: $ItemStack$Type, arg2: $FuzzyMode$Type, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
public "simulateAdd"(arg0: $ItemStack$Type): $ItemStack
public "addItems"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$Type): $ItemStack
public "mayAllowInsertion"(): boolean
public "getSlotInv"(arg0: integer): $InternalInventory
public "getRedstoneSignal"(): integer
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "delegate"(): $GenericStackInv
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMenuInventory$Type = ($ConfigMenuInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMenuInventory_ = $ConfigMenuInventory$Type;
}}
declare module "packages/appeng/util/inv/$AppEngInternalInventory" {
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$ItemTransfer, $ItemTransfer$Type} from "packages/appeng/api/inventories/$ItemTransfer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IAEItemFilter, $IAEItemFilter$Type} from "packages/appeng/util/inv/filter/$IAEItemFilter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseInternalInventory, $BaseInternalInventory$Type} from "packages/appeng/api/inventories/$BaseInternalInventory"

export class $AppEngInternalInventory extends $BaseInternalInventory {

constructor(arg0: $InternalInventoryHost$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: $InternalInventoryHost$Type, arg1: integer, arg2: integer)
constructor(arg0: $InternalInventoryHost$Type, arg1: integer, arg2: integer, arg3: $IAEItemFilter$Type)

public "size"(): integer
public "getHost"(): $InternalInventoryHost
public "setEnableClientEvents"(arg0: boolean): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "setMaxStackSize"(arg0: integer, arg1: integer): void
public "setFilter"(arg0: $IAEItemFilter$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "setItemDirect"(arg0: integer, arg1: $ItemStack$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type, arg1: string): void
public "writeToNBT"(arg0: $CompoundTag$Type, arg1: string): void
public static "empty"(): $InternalInventory
public static "wrapExternal"(arg0: $BlockEntity$Type, arg1: $Direction$Type): $ItemTransfer
public static "wrapExternal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $ItemTransfer
get "host"(): $InternalInventoryHost
set "enableClientEvents"(value: boolean)
set "filter"(value: $IAEItemFilter$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AppEngInternalInventory$Type = ($AppEngInternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AppEngInternalInventory_ = $AppEngInternalInventory$Type;
}}
declare module "packages/appeng/util/$SettingsFrom" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SettingsFrom extends $Enum<($SettingsFrom)> {
static readonly "DISMANTLE_ITEM": $SettingsFrom
static readonly "MEMORY_CARD": $SettingsFrom


public static "values"(): ($SettingsFrom)[]
public static "valueOf"(arg0: string): $SettingsFrom
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsFrom$Type = (("memory_card") | ("dismantle_item")) | ($SettingsFrom);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsFrom_ = $SettingsFrom$Type;
}}
declare module "packages/appeng/util/$ConfigInventory" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"
import {$ConfigMenuInventory, $ConfigMenuInventory$Type} from "packages/appeng/util/$ConfigMenuInventory"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $ConfigInventory extends $GenericStackInv {
static readonly "EMPTY_TYPES": $ConfigInventory


public "getKey"(arg0: integer): $AEKey
public "keySet"(): $Set<($AEKey)>
public "getStack"(arg0: integer): $GenericStack
public "addFilter"(arg0: $ItemLike$Type): $ConfigInventory
public "addFilter"(arg0: $AEKey$Type): $ConfigInventory
public "addFilter"(arg0: $Fluid$Type): $ConfigInventory
public static "storage"(arg0: $AEKeyFilter$Type, arg1: integer, arg2: $Runnable$Type): $ConfigInventory
public static "storage"(arg0: integer, arg1: $Runnable$Type): $ConfigInventory
public "setStack"(arg0: integer, arg1: $GenericStack$Type): void
public static "configTypes"(arg0: integer, arg1: $Runnable$Type): $ConfigInventory
public static "configTypes"(arg0: $AEKeyFilter$Type, arg1: integer, arg2: $Runnable$Type): $ConfigInventory
public "getMaxAmount"(arg0: $AEKey$Type): long
public "createMenuWrapper"(): $ConfigMenuInventory
public static "configStacks"(arg0: $AEKeyFilter$Type, arg1: integer, arg2: $Runnable$Type, arg3: boolean): $ConfigInventory
public static "checkPreconditions"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigInventory$Type = ($ConfigInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigInventory_ = $ConfigInventory$Type;
}}
declare module "packages/appeng/util/prioritylist/$IPartitionList$Builder" {
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$IPartitionList, $IPartitionList$Type} from "packages/appeng/util/prioritylist/$IPartitionList"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $IPartitionList$Builder {


public "build"(): $IPartitionList
public "add"(arg0: $AEKey$Type): void
public "addAll"(arg0: $Iterable$Type<($AEKey$Type)>): void
public "fuzzyMode"(arg0: $FuzzyMode$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartitionList$Builder$Type = ($IPartitionList$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartitionList$Builder_ = $IPartitionList$Builder$Type;
}}
declare module "packages/appeng/util/$IConfigManagerListener" {
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Setting, $Setting$Type} from "packages/appeng/api/config/$Setting"

export interface $IConfigManagerListener {

 "onSettingChanged"(arg0: $IConfigManager$Type, arg1: $Setting$Type<(any)>): void

(arg0: $IConfigManager$Type, arg1: $Setting$Type<(any)>): void
}

export namespace $IConfigManagerListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManagerListener$Type = ($IConfigManagerListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigManagerListener_ = $IConfigManagerListener$Type;
}}
declare module "packages/appeng/util/inv/filter/$IAEItemFilter" {
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IAEItemFilter {

 "allowInsert"(arg0: $InternalInventory$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "allowExtract"(arg0: $InternalInventory$Type, arg1: integer, arg2: integer): boolean
}

export namespace $IAEItemFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEItemFilter$Type = ($IAEItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEItemFilter_ = $IAEItemFilter$Type;
}}
declare module "packages/appeng/util/inv/$InternalInventoryHost" {
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"

export interface $InternalInventoryHost {

 "isClientSide"(): boolean
 "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
 "saveChanges"(): void
}

export namespace $InternalInventoryHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalInventoryHost$Type = ($InternalInventoryHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalInventoryHost_ = $InternalInventoryHost$Type;
}}
declare module "packages/appeng/util/$LookDirection" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $LookDirection {

constructor(arg0: $Vec3$Type, arg1: $Vec3$Type)

public "getA"(): $Vec3
public "getB"(): $Vec3
get "a"(): $Vec3
get "b"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LookDirection$Type = ($LookDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LookDirection_ = $LookDirection$Type;
}}
declare module "packages/appeng/util/prioritylist/$IPartitionList" {
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IPartitionList$Builder, $IPartitionList$Builder$Type} from "packages/appeng/util/prioritylist/$IPartitionList$Builder"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IncludeExclude, $IncludeExclude$Type} from "packages/appeng/api/config/$IncludeExclude"

export interface $IPartitionList {

 "isEmpty"(): boolean
 "getItems"(): $Iterable<($AEKey)>
 "matchesFilter"(arg0: $AEKey$Type, arg1: $IncludeExclude$Type): boolean
 "isListed"(arg0: $AEKey$Type): boolean
}

export namespace $IPartitionList {
function builder(): $IPartitionList$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartitionList$Type = ($IPartitionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartitionList_ = $IPartitionList$Type;
}}
