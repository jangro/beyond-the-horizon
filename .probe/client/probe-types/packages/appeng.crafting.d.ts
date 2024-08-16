declare module "packages/appeng/crafting/inv/$ListCraftingInventory$ChangeListener" {
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"

export interface $ListCraftingInventory$ChangeListener {

 "onChange"(arg0: $AEKey$Type): void

(arg0: $AEKey$Type): void
}

export namespace $ListCraftingInventory$ChangeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCraftingInventory$ChangeListener$Type = ($ListCraftingInventory$ChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListCraftingInventory$ChangeListener_ = $ListCraftingInventory$ChangeListener$Type;
}}
declare module "packages/appeng/crafting/pattern/$StonecuttingPatternItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EncodedPatternItem, $EncodedPatternItem$Type} from "packages/appeng/crafting/pattern/$EncodedPatternItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StonecutterRecipe, $StonecutterRecipe$Type} from "packages/net/minecraft/world/item/crafting/$StonecutterRecipe"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StonecuttingPatternItem extends $EncodedPatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "encode"(arg0: $StonecutterRecipe$Type, arg1: $AEItemKey$Type, arg2: $AEItemKey$Type, arg3: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecuttingPatternItem$Type = ($StonecuttingPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecuttingPatternItem_ = $StonecuttingPatternItem$Type;
}}
declare module "packages/appeng/crafting/$CraftingLinkNexus" {
import {$CraftingService, $CraftingService$Type} from "packages/appeng/me/service/$CraftingService"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CraftingLink, $CraftingLink$Type} from "packages/appeng/crafting/$CraftingLink"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"

export class $CraftingLinkNexus {

constructor(arg0: $UUID$Type)

public "removeNode"(): void
public "setRequest"(arg0: $CraftingLink$Type): void
public "getRequest"(): $CraftingLink
public "isDead"(arg0: $IGrid$Type, arg1: $CraftingService$Type): boolean
public "isRequester"(arg0: $ICraftingRequester$Type): boolean
set "request"(value: $CraftingLink$Type)
get "request"(): $CraftingLink
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLinkNexus$Type = ($CraftingLinkNexus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingLinkNexus_ = $CraftingLinkNexus$Type;
}}
declare module "packages/appeng/crafting/inv/$ListCraftingInventory" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ListCraftingInventory$ChangeListener, $ListCraftingInventory$ChangeListener$Type} from "packages/appeng/crafting/inv/$ListCraftingInventory$ChangeListener"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ICraftingInventory, $ICraftingInventory$Type} from "packages/appeng/crafting/inv/$ICraftingInventory"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $ListCraftingInventory implements $ICraftingInventory {
readonly "list": $KeyCounter

constructor(arg0: $ListCraftingInventory$ChangeListener$Type)

public "extract"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): long
public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): void
public "clear"(): void
public "readFromNBT"(arg0: $ListTag$Type): void
public "writeToNBT"(): $ListTag
public "findFuzzyTemplates"(arg0: $AEKey$Type): $Iterable<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCraftingInventory$Type = ($ListCraftingInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListCraftingInventory_ = $ListCraftingInventory$Type;
}}
declare module "packages/appeng/crafting/pattern/$CraftingPatternItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EncodedPatternItem, $EncodedPatternItem$Type} from "packages/appeng/crafting/pattern/$EncodedPatternItem"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingPatternItem extends $EncodedPatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "encode"(arg0: $CraftingRecipe$Type, arg1: ($ItemStack$Type)[], arg2: $ItemStack$Type, arg3: boolean, arg4: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingPatternItem$Type = ($CraftingPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingPatternItem_ = $CraftingPatternItem$Type;
}}
declare module "packages/appeng/crafting/pattern/$EncodedPatternItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EncodedPatternItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getOutput"(arg0: $ItemStack$Type): $ItemStack
public "decode"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: boolean): $IPatternDetails
public "decode"(arg0: $AEItemKey$Type, arg1: $Level$Type): $IPatternDetails
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncodedPatternItem$Type = ($EncodedPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EncodedPatternItem_ = $EncodedPatternItem$Type;
}}
declare module "packages/appeng/crafting/execution/$ElapsedTimeTracker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $ElapsedTimeTracker {

constructor(arg0: $CompoundTag$Type)
constructor(arg0: long)

public "getRemainingItemCount"(): long
public "writeToNBT"(): $CompoundTag
public "getElapsedTime"(): long
public "getStartItemCount"(): long
get "remainingItemCount"(): long
get "elapsedTime"(): long
get "startItemCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElapsedTimeTracker$Type = ($ElapsedTimeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElapsedTimeTracker_ = $ElapsedTimeTracker$Type;
}}
declare module "packages/appeng/crafting/pattern/$SmithingTablePatternItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SmithingRecipe, $SmithingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"
import {$EncodedPatternItem, $EncodedPatternItem$Type} from "packages/appeng/crafting/pattern/$EncodedPatternItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmithingTablePatternItem extends $EncodedPatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "encode"(arg0: $SmithingRecipe$Type, arg1: $AEItemKey$Type, arg2: $AEItemKey$Type, arg3: $AEItemKey$Type, arg4: $AEItemKey$Type, arg5: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTablePatternItem$Type = ($SmithingTablePatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTablePatternItem_ = $SmithingTablePatternItem$Type;
}}
declare module "packages/appeng/crafting/pattern/$ProcessingPatternItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EncodedPatternItem, $EncodedPatternItem$Type} from "packages/appeng/crafting/pattern/$EncodedPatternItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ProcessingPatternItem extends $EncodedPatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "encode"(arg0: ($GenericStack$Type)[], arg1: ($GenericStack$Type)[]): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingPatternItem$Type = ($ProcessingPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessingPatternItem_ = $ProcessingPatternItem$Type;
}}
declare module "packages/appeng/crafting/inv/$ICraftingInventory" {
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export interface $ICraftingInventory {

 "extract"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): long
 "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): void
 "findFuzzyTemplates"(arg0: $AEKey$Type): $Iterable<($AEKey)>
}

export namespace $ICraftingInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingInventory$Type = ($ICraftingInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingInventory_ = $ICraftingInventory$Type;
}}
declare module "packages/appeng/crafting/execution/$CraftingCpuLogic" {
import {$CraftingService, $CraftingService$Type} from "packages/appeng/me/service/$CraftingService"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICraftingPlan, $ICraftingPlan$Type} from "packages/appeng/api/networking/crafting/$ICraftingPlan"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$CraftingCPUCluster, $CraftingCPUCluster$Type} from "packages/appeng/me/cluster/implementations/$CraftingCPUCluster"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$IEnergyService, $IEnergyService$Type} from "packages/appeng/api/networking/energy/$IEnergyService"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$Type} from "packages/appeng/api/networking/crafting/$ICraftingSubmitResult"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ElapsedTimeTracker, $ElapsedTimeTracker$Type} from "packages/appeng/crafting/execution/$ElapsedTimeTracker"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$ListCraftingInventory, $ListCraftingInventory$Type} from "packages/appeng/crafting/inv/$ListCraftingInventory"

export class $CraftingCpuLogic {

constructor(arg0: $CraftingCPUCluster$Type)

public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): long
public "removeListener"(arg0: $Consumer$Type<($AEKey$Type)>): void
public "getAllItems"(arg0: $KeyCounter$Type): void
public "addListener"(arg0: $Consumer$Type<($AEKey$Type)>): void
public "cancel"(): void
public "getStored"(arg0: $AEKey$Type): long
public "getLastModifiedOnTick"(): long
public "getAllWaitingFor"(arg0: $Set$Type<($AEKey$Type)>): void
public "tickCraftingLogic"(arg0: $IEnergyService$Type, arg1: $CraftingService$Type): void
public "getLastLink"(): $ICraftingLink
public "getWaitingFor"(arg0: $AEKey$Type): long
public "getInventory"(): $ListCraftingInventory
public "isCantStoreItems"(): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getElapsedTimeTracker"(): $ElapsedTimeTracker
public "getFinalJobOutput"(): $GenericStack
public "trySubmitJob"(arg0: $IGrid$Type, arg1: $ICraftingPlan$Type, arg2: $IActionSource$Type, arg3: $ICraftingRequester$Type): $ICraftingSubmitResult
public "hasJob"(): boolean
public "executeCrafting"(arg0: integer, arg1: $CraftingService$Type, arg2: $IEnergyService$Type, arg3: $Level$Type): integer
public "storeItems"(): void
public "getPendingOutputs"(arg0: $AEKey$Type): long
get "lastModifiedOnTick"(): long
get "lastLink"(): $ICraftingLink
get "inventory"(): $ListCraftingInventory
get "cantStoreItems"(): boolean
get "elapsedTimeTracker"(): $ElapsedTimeTracker
get "finalJobOutput"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCpuLogic$Type = ($CraftingCpuLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCpuLogic_ = $CraftingCpuLogic$Type;
}}
declare module "packages/appeng/crafting/$CraftingLink" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICraftingCPU, $ICraftingCPU$Type} from "packages/appeng/api/networking/crafting/$ICraftingCPU"
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$CraftingLinkNexus, $CraftingLinkNexus$Type} from "packages/appeng/crafting/$CraftingLinkNexus"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"

export class $CraftingLink implements $ICraftingLink {

constructor(arg0: $CompoundTag$Type, arg1: $ICraftingRequester$Type)
constructor(arg0: $CompoundTag$Type, arg1: $ICraftingCPU$Type)

public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): long
public "isStandalone"(): boolean
public "cancel"(): void
public "isDone"(): boolean
public "getCraftingID"(): $UUID
public "setNexus"(arg0: $CraftingLinkNexus$Type): void
public "markDone"(): void
public "isCanceled"(): boolean
public "writeToNBT"(arg0: $CompoundTag$Type): void
get "standalone"(): boolean
get "done"(): boolean
get "craftingID"(): $UUID
set "nexus"(value: $CraftingLinkNexus$Type)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLink$Type = ($CraftingLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingLink_ = $CraftingLink$Type;
}}
