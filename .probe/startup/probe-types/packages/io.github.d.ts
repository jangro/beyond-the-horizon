declare module "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $FilmDevelopingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, filmIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getRemainingItems"(container: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmDevelopingRecipe$Type = ($FilmDevelopingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmDevelopingRecipe_ = $FilmDevelopingRecipe$Type;
}}
declare module "packages/io/github/mortuusars/exposure/mixin/$LecternBlockEntityAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"

export interface $LecternBlockEntityAccessor {

 "getDataAccess"(): $ContainerData
 "getBookAccess"(): $Container
}

export namespace $LecternBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternBlockEntityAccessor$Type = ($LecternBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LecternBlockEntityAccessor_ = $LecternBlockEntityAccessor$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$FrameAddedEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FrameAddedEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type)

public "getCameraStack"(): $ItemStack
public "getPlayer"(): $Player
public "getFrame"(): $CompoundTag
get "cameraStack"(): $ItemStack
get "player"(): $Player
get "frame"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameAddedEventJS$Type = ($FrameAddedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameAddedEventJS_ = $FrameAddedEventJS$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$SignedAlbumItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AlbumItem, $AlbumItem$Type} from "packages/io/github/mortuusars/exposure/item/$AlbumItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SignedAlbumItem extends $AlbumItem {
static readonly "TAG_PAGES": string
static readonly "TAG_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isEditable"(): boolean
public "getName"(stack: $ItemStack$Type): $Component
public "isFoil"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "editable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignedAlbumItem$Type = ($SignedAlbumItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SignedAlbumItem_ = $SignedAlbumItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$ShutterSpeed" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ShutterSpeed {
static readonly "DEFAULT": $ShutterSpeed

constructor(shutterSpeed: string)

public "getFormattedText"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "save"(tag: $CompoundTag$Type): $CompoundTag
public "getTicks"(): integer
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $ShutterSpeed
public "getMilliseconds"(): float
public "getStopsDifference"(relative: $ShutterSpeed$Type): float
public static "loadOrDefault"(tag: $CompoundTag$Type): $ShutterSpeed
get "formattedText"(): string
get "ticks"(): integer
get "milliseconds"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterSpeed$Type = ($ShutterSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShutterSpeed_ = $ShutterSpeed$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$PhotographItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotographItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getTooltipImage"(stack: $ItemStack$Type): $Optional<($TooltipComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographItem$Type = ($PhotographItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographItem_ = $PhotographItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$IFilmItem" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"

export interface $IFilmItem {

 "getExposedFramesCount"(stack: $ItemStack$Type): integer
 "getType"(): $FilmType
 "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
 "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
 "getFrameSize"(filmStack: $ItemStack$Type): integer
 "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
 "getDefaultFrameSize"(): integer
 "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer

(stack: $ItemStack$Type): integer
}

export namespace $IFilmItem {
const FRAME_COUNT_TAG: string
const FRAME_SIZE_TAG: string
const FRAMES_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilmItem$Type = ($IFilmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilmItem_ = $IFilmItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe$Serializer" {
import {$FilmDevelopingRecipe, $FilmDevelopingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$FilmDevelopingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FilmDevelopingRecipe$Serializer implements $RecipeSerializer<($FilmDevelopingRecipe)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $FilmDevelopingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $FilmDevelopingRecipe$Type): void
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $FilmDevelopingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FilmDevelopingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmDevelopingRecipe$Serializer$Type = ($FilmDevelopingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmDevelopingRecipe$Serializer_ = $FilmDevelopingRecipe$Serializer$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$DevelopedFilmItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFilmItem, $IFilmItem$Type} from "packages/io/github/mortuusars/exposure/item/$IFilmItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DevelopedFilmItem extends $Item implements $IFilmItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(type: $FilmType$Type, properties: $Item$Properties$Type)

public "getType"(): $FilmType
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getExposedFramesCount"(stack: $ItemStack$Type): integer
public "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
public "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
public "getFrameSize"(filmStack: $ItemStack$Type): integer
public "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "getDefaultFrameSize"(): integer
public "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
get "type"(): $FilmType
get "defaultFrameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DevelopedFilmItem$Type = ($DevelopedFilmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DevelopedFilmItem_ = $DevelopedFilmItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/$AttachmentSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AttachmentSound {
static readonly "NONE": $AttachmentSound
static readonly "FILM": $AttachmentSound
static readonly "FLASH": $AttachmentSound
static readonly "LENS": $AttachmentSound
static readonly "FILTER": $AttachmentSound

constructor(inserted: $Supplier$Type<($SoundEvent$Type)>, insertedVolume: float, insertedPitch: float)
constructor(inserted: $Supplier$Type<($SoundEvent$Type)>, insertedVolume: float, insertedPitch: float, removed: $Supplier$Type<($SoundEvent$Type)>, removedVolume: float, removedPitch: float)

public "getRemovedPitch"(): float
public "getInserted"(): $Supplier<($SoundEvent)>
public "getRemovedVolume"(): float
public "getInsertedPitch"(): float
public "getRemoved"(): $Supplier<($SoundEvent)>
public "getInsertedVolume"(): float
public "playOnePerPlayer"(player: $Player$Type, isRemoved: boolean): void
get "removedPitch"(): float
get "inserted"(): $Supplier<($SoundEvent)>
get "removedVolume"(): float
get "insertedPitch"(): float
get "removed"(): $Supplier<($SoundEvent)>
get "insertedVolume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSound$Type = ($AttachmentSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentSound_ = $AttachmentSound$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $PhotographCopyingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "transferNbt"(photographStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
public "getRemainingItems"(pInv: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographCopyingRecipe$Type = ($PhotographCopyingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographCopyingRecipe_ = $PhotographCopyingRecipe$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$AlbumPage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AlbumPage {
static readonly "PHOTOGRAPH_TAG": string
static readonly "NOTE_TAG": string
static readonly "NOTE_COMPONENT_TAG": string

constructor(photographStack: $ItemStack$Type, note: $Either$Type<(string), ($Component$Type)>)

public "isEditable"(): boolean
public "getPhotographStack"(): $ItemStack
public "setPhotographStack"(photographStack: $ItemStack$Type): $ItemStack
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "signed"(photographStack: $ItemStack$Type, note: $Component$Type): $AlbumPage
public "setNote"(note: $Either$Type<(string), ($Component$Type)>): void
public "getNote"(): $Either<(string), ($Component)>
public static "editable"(photographStack: $ItemStack$Type, note: string): $AlbumPage
public "toSigned"(): $AlbumPage
public "toTag"(tag: $CompoundTag$Type): $CompoundTag
public static "fromTag"(tag: $CompoundTag$Type, editable: boolean): $AlbumPage
get "photographStack"(): $ItemStack
set "photographStack"(value: $ItemStack$Type)
get "empty"(): boolean
set "note"(value: $Either$Type<(string), ($Component$Type)>)
get "note"(): $Either<(string), ($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumPage$Type = ($AlbumPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumPage_ = $AlbumPage$Type;
}}
declare module "packages/io/github/mortuusars/exposure/util/$ItemAndStack" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemAndStack<T extends $Item> {

constructor(stack: $ItemStack$Type)

public "toString"(): string
public "apply"(arg0: $BiConsumer$Type<(T), ($ItemStack$Type)>): $ItemAndStack<(T)>
public "getStack"(): $ItemStack
public "getItem"(): T
get "stack"(): $ItemStack
get "item"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAndStack$Type<T> = ($ItemAndStack<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAndStack_<T> = $ItemAndStack$Type<(T)>;
}}
declare module "packages/io/github/mortuusars/exposure/item/$ChromaticSheetItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
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

export class $ChromaticSheetItem extends $Item {
static readonly "EXPOSURES_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "finalize"(level: $Level$Type, stack: $ItemStack$Type, idPrefix: string, player: $ServerPlayer$Type): $ItemStack
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getExposures"(stack: $ItemStack$Type): $List<($CompoundTag)>
public "addExposure"(stack: $ItemStack$Type, frame: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChromaticSheetItem$Type = ($ChromaticSheetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChromaticSheetItem_ = $ChromaticSheetItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractNbtTransferringRecipe extends $CustomRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getTransferIngredient"(): $Ingredient
public "transferNbt"(transferIngredientStack: $ItemStack$Type, recipeResultStack: $ItemStack$Type): $ItemStack
public "matches"(container: $CraftingContainer$Type, level: $Level$Type): boolean
public "getResult"(): $ItemStack
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "assemble"(container: $CraftingContainer$Type, registryAccess: $RegistryAccess$Type): $ItemStack
get "transferIngredient"(): $Ingredient
get "result"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNbtTransferringRecipe$Type = ($AbstractNbtTransferringRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNbtTransferringRecipe_ = $AbstractNbtTransferringRecipe$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$PhotographFrameItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhotographFrameItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographFrameItem$Type = ($PhotographFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographFrameItem_ = $PhotographFrameItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$StackedPhotographsItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PhotographItem, $PhotographItem$Type} from "packages/io/github/mortuusars/exposure/item/$PhotographItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemAndStack, $ItemAndStack$Type} from "packages/io/github/mortuusars/exposure/util/$ItemAndStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StackedPhotographsItem extends $Item {
static readonly "PHOTOGRAPHS_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "addPhotographOnTop"(stack: $ItemStack$Type, photographStack: $ItemStack$Type): void
public "getPhotographs"(stack: $ItemStack$Type): $List<($ItemAndStack<($PhotographItem)>)>
public "getPhotographs"(stack: $ItemStack$Type, limit: integer): $List<($ItemAndStack<($PhotographItem)>)>
public "getTopPhotographs"(stack: $ItemStack$Type, count: integer): $List<($Either<(string), ($ResourceLocation)>)>
public "cyclePhotographs"(stack: $ItemStack$Type, player: $Player$Type): boolean
public "canAddPhotograph"(stack: $ItemStack$Type): boolean
public "removePhotograph"(stack: $ItemStack$Type, index: integer): $ItemAndStack<($PhotographItem)>
public "addPhotograph"(stack: $ItemStack$Type, photographStack: $ItemStack$Type, index: integer): void
public "getStackLimit"(): integer
public "getPhotographsCount"(stack: $ItemStack$Type): integer
public static "playAddSoundClientside"(player: $Player$Type): void
public "removeBottomPhotograph"(stack: $ItemStack$Type): $ItemAndStack<($PhotographItem)>
public static "playRemoveSoundClientside"(player: $Player$Type): void
public "getFirstIdOrTexture"(stack: $ItemStack$Type): $Either<(string), ($ResourceLocation)>
public "addPhotographToBottom"(stack: $ItemStack$Type, photographStack: $ItemStack$Type): void
public "removeTopPhotograph"(stack: $ItemStack$Type): $ItemAndStack<($PhotographItem)>
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(stack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type): boolean
public "getTooltipImage"(stack: $ItemStack$Type): $Optional<($TooltipComponent)>
get "stackLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedPhotographsItem$Type = ($StackedPhotographsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackedPhotographsItem_ = $StackedPhotographsItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilmType extends $Enum<($FilmType)> implements $StringRepresentable {
static readonly "BLACK_AND_WHITE": $FilmType
static readonly "COLOR": $FilmType
static readonly "CODEC": $StringRepresentable$EnumCodec<($FilmType)>
readonly "frameR": integer
readonly "frameG": integer
readonly "frameB": integer
readonly "filmR": float
readonly "filmG": float
readonly "filmB": float
readonly "filmA": float


public "createDevelopedItemStack"(): $ItemStack
public static "values"(): ($FilmType)[]
public static "valueOf"(name: string): $FilmType
public "getSerializedName"(): string
public static "byName"(name: string): $FilmType
public "createItemStack"(): $ItemStack
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmType$Type = (("color") | ("black_and_white")) | ($FilmType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmType_ = $FilmType$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FlashMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FlashMode extends $Enum<($FlashMode)> implements $StringRepresentable {
static readonly "OFF": $FlashMode
static readonly "ON": $FlashMode
static readonly "AUTO": $FlashMode


public static "values"(): ($FlashMode)[]
public static "valueOf"(name: string): $FlashMode
public "getId"(): string
public "getSerializedName"(): string
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $FlashMode
public "translate"(): $Component
public static "byIdOrOff"(id: string): $FlashMode
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "id"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlashMode$Type = (("auto") | ("off") | ("on")) | ($FlashMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashMode_ = $FlashMode$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$InterplanarProjectorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InterplanarProjectorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isConsumable"(stack: $ItemStack$Type): boolean
public "setDithered"(stack: $ItemStack$Type, dithered: boolean): void
public "getFilename"(stack: $ItemStack$Type): $Optional<(string)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, other: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "isDithered"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterplanarProjectorItem$Type = ($InterplanarProjectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterplanarProjectorItem_ = $InterplanarProjectorItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractNbtTransferringRecipe, $AbstractNbtTransferringRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$AbstractNbtTransferringRecipe"

export class $PhotographAgingRecipe extends $AbstractNbtTransferringRecipe {

constructor(id: $ResourceLocation$Type, transferIngredient: $Ingredient$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographAgingRecipe$Type = ($PhotographAgingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographAgingRecipe_ = $PhotographAgingRecipe$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$AlbumItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AlbumPage, $AlbumPage$Type} from "packages/io/github/mortuusars/exposure/item/$AlbumPage"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AlbumItem extends $Item implements $IForgeItem {
static readonly "TAG_PAGES": string
static readonly "TAG_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "getPages"(albumStack: $ItemStack$Type): $List<($AlbumPage)>
public "isEditable"(): boolean
public "sign"(album: $ItemStack$Type, title: string, author: string): $ItemStack
public "open"(player: $ServerPlayer$Type, albumStack: $ItemStack$Type, editable: boolean): void
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "getMaxPages"(): integer
public "addPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type): void
public "addPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type, index: integer): void
public "createEmptyPage"(): $AlbumPage
public "getPage"(albumStack: $ItemStack$Type, index: integer): $Optional<($AlbumPage)>
public "getPhotographsCount"(albumStack: $ItemStack$Type): integer
public "shouldPlayEquipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "setPage"(albumStack: $ItemStack$Type, page: $AlbumPage$Type, index: integer): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "editable"(): boolean
get "maxPages"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlbumItem$Type = ($AlbumItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlbumItem_ = $AlbumItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/$AttachmentType" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentSound, $AttachmentSound$Type} from "packages/io/github/mortuusars/exposure/camera/$AttachmentSound"

export class $AttachmentType extends $Record {

constructor(id: string, slot: integer, itemPredicate: $Predicate$Type<($ItemStack$Type)>, sound: $AttachmentSound$Type)

public "slot"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(stack: $ItemStack$Type): boolean
public "id"(): string
public "sound"(): $AttachmentSound
public "itemPredicate"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Type = ($AttachmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_ = $AttachmentType$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PhotographAgingRecipe, $PhotographAgingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$PhotographAgingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PhotographAgingRecipe$Serializer implements $RecipeSerializer<($PhotographAgingRecipe)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PhotographAgingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PhotographAgingRecipe$Type): void
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $PhotographAgingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PhotographAgingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographAgingRecipe$Serializer$Type = ($PhotographAgingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographAgingRecipe$Serializer_ = $PhotographAgingRecipe$Serializer$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$FocalRange" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FocalRange implements $StringRepresentable {
static readonly "ALLOWED_MIN": integer
static readonly "ALLOWED_MAX": integer

constructor(min: integer, max: integer)
constructor(fixedValue: integer)

public static "fromNetwork"(buffer: $FriendlyByteBuf$Type): $FocalRange
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): integer
public "max"(): integer
public static "getDefault"(): $FocalRange
public static "parse"(value: string): $FocalRange
public "getSerializedName"(): string
public "toNetwork"(buffer: $FriendlyByteBuf$Type): void
public "isPrime"(): boolean
public static "fromJson"(json: $JsonElement$Type): $FocalRange
public static "ofStack"(stack: $ItemStack$Type): $FocalRange
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "default"(): $FocalRange
get "serializedName"(): string
get "prime"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocalRange$Type = ($FocalRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocalRange_ = $FocalRange$Type;
}}
declare module "packages/io/github/mortuusars/exposure/block/$LightroomBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
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
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LightroomBlock extends $Block implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getAnalogOutputSignal"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, pIsMoving: boolean): void
public "use"(blockState: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public static "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public static "getBlockTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightroomBlock$Type = ($LightroomBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightroomBlock_ = $LightroomBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/camera/infrastructure/$CompositionGuide" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $CompositionGuide {

constructor(id: string)

public "getId"(): string
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $CompositionGuide
public "translate"(): $Component
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositionGuide$Type = ($CompositionGuide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositionGuide_ = $CompositionGuide$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$ShutterOpeningEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ShutterOpeningEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, lightLevel: integer, shouldFlashFire: boolean)

public "getCameraStack"(): $ItemStack
public "getPlayer"(): $Player
public "getLightLevel"(): integer
public "shouldFlashFire"(): boolean
get "cameraStack"(): $ItemStack
get "player"(): $Player
get "lightLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterOpeningEventJS$Type = ($ShutterOpeningEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShutterOpeningEventJS_ = $ShutterOpeningEventJS$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$CameraItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FlashMode, $FlashMode$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FlashMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShutterSpeed, $ShutterSpeed$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$ShutterSpeed"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AttachmentType, $AttachmentType$Type} from "packages/io/github/mortuusars/exposure/camera/$AttachmentType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemAndStack, $ItemAndStack$Type} from "packages/io/github/mortuusars/exposure/util/$ItemAndStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilmRollItem, $FilmRollItem$Type} from "packages/io/github/mortuusars/exposure/item/$FilmRollItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$CompositionGuide, $CompositionGuide$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$CompositionGuide"
import {$FocalRange, $FocalRange$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FocalRange"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CameraItem extends $Item implements $IForgeItem {
static readonly "FILM_ATTACHMENT": $AttachmentType
static readonly "FLASH_ATTACHMENT": $AttachmentType
static readonly "LENS_ATTACHMENT": $AttachmentType
static readonly "FILTER_ATTACHMENT": $AttachmentType
static readonly "ATTACHMENTS": $List<($AttachmentType)>
static readonly "SHUTTER_SPEEDS": $List<($ShutterSpeed)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)

public "isActive"(stack: $ItemStack$Type): boolean
public "getUseDuration"(stack: $ItemStack$Type): integer
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "exposeFrameClientside"(player: $Player$Type, hand: $InteractionHand$Type, exposureId: string, flashHasFired: boolean, lightLevel: integer): void
public "hasInterplanarProjectorFilter"(cameraStack: $ItemStack$Type): boolean
public "setSelfieModeWithEffects"(player: $Player$Type, stack: $ItemStack$Type, selfie: boolean): void
public "openCameraAttachmentsMenu"(player: $Player$Type, cameraSlotIndex: integer): void
public "getCompositionGuide"(cameraStack: $ItemStack$Type): $CompositionGuide
public "setCompositionGuide"(cameraStack: $ItemStack$Type, guide: $CompositionGuide$Type): void
public "spawnClientsideFlashEffects"(player: $Player$Type, cameraStack: $ItemStack$Type): void
public "onAttachmentChanged"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type): void
public "getDefaultFocalRange"(): $FocalRange
public "getAttachmentTypeForSlot"(cameraStack: $ItemStack$Type, slot: integer): $Optional<($AttachmentType)>
public "getAllShutterSpeeds"(cameraStack: $ItemStack$Type): $List<($ShutterSpeed)>
public "activate"(player: $Player$Type, stack: $ItemStack$Type): void
public "deactivate"(player: $Player$Type, stack: $ItemStack$Type): void
public "setActive"(stack: $ItemStack$Type, active: boolean): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, action: $ClickAction$Type, player: $Player$Type, access: $SlotAccess$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, components: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "isTooltipRemoved"(stack: $ItemStack$Type): boolean
public "getAttachment"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type): $Optional<($ItemStack)>
public "getAttachmentTypes"(cameraStack: $ItemStack$Type): $List<($AttachmentType)>
public "setAttachment"(cameraStack: $ItemStack$Type, attachmentType: $AttachmentType$Type, attachmentStack: $ItemStack$Type): void
public "setTooltipRemoved"(stack: $ItemStack$Type, removed: boolean): void
public "isInSelfieMode"(stack: $ItemStack$Type): boolean
public "isShutterOpen"(stack: $ItemStack$Type): boolean
public "setShutterOpen"(level: $Level$Type, stack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type, flashHasFired: boolean): void
public "openShutter"(player: $Player$Type, level: $Level$Type, stack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type, flashHasFired: boolean): void
public "setSelfieMode"(stack: $ItemStack$Type, selfie: boolean): void
public "playCameraSound"(player: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float): void
public "playCameraSound"(player: $Player$Type, originPlayer: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float, pitchVariety: float): void
public "playCameraSound"(player: $Player$Type, sound: $SoundEvent$Type, volume: float, pitch: float, pitchVariety: float): void
public "setShutterClosed"(stack: $ItemStack$Type): void
public "closeShutter"(player: $Player$Type, stack: $ItemStack$Type): void
public "getFilm"(cameraStack: $ItemStack$Type): $Optional<($ItemAndStack<($FilmRollItem)>)>
public "getShutterSpeed"(cameraStack: $ItemStack$Type): $ShutterSpeed
public "useCamera"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "tryUseFlash"(player: $Player$Type, cameraStack: $ItemStack$Type): boolean
public "getFocalLength"(cameraStack: $ItemStack$Type): float
public "addFrame"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frameTag: $CompoundTag$Type, entities: $List$Type<($Entity$Type)>): void
public "setFilm"(cameraStack: $ItemStack$Type, filmStack: $ItemStack$Type): void
public "addFrameData"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entitiesInFrame: $List$Type<($Entity$Type)>): void
public "onFrameAdded"(player: $ServerPlayer$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entities: $List$Type<($Entity$Type)>): void
public "addFrameToFilm"(cameraStack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "getFlashMode"(cameraStack: $ItemStack$Type): $FlashMode
public "setZoom"(cameraStack: $ItemStack$Type, focalLength: double): void
public "getFocalRange"(cameraStack: $ItemStack$Type): $FocalRange
public "setShutterSpeed"(cameraStack: $ItemStack$Type, shutterSpeed: $ShutterSpeed$Type): void
public "setFlashMode"(cameraStack: $ItemStack$Type, flashMode: $FlashMode$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "defaultFocalRange"(): $FocalRange
set "shutterClosed"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraItem$Type = ($CameraItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraItem_ = $CameraItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/block/$FlashBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlashBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(pos: $BlockPos$Type, blockState: $BlockState$Type): $BlockEntity
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "propagatesSkylightDown"(blockState: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
export type $FlashBlock$Type = ($FlashBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashBlock_ = $FlashBlock$Type;
}}
declare module "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$PhotographCopyingRecipe, $PhotographCopyingRecipe$Type} from "packages/io/github/mortuusars/exposure/recipe/$PhotographCopyingRecipe"

export class $PhotographCopyingRecipe$Serializer implements $RecipeSerializer<($PhotographCopyingRecipe)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $PhotographCopyingRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $PhotographCopyingRecipe$Type): void
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): $PhotographCopyingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PhotographCopyingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotographCopyingRecipe$Serializer$Type = ($PhotographCopyingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotographCopyingRecipe$Serializer_ = $PhotographCopyingRecipe$Serializer$Type;
}}
declare module "packages/io/github/mortuusars/exposure/item/$FilmRollItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IFilmItem, $IFilmItem$Type} from "packages/io/github/mortuusars/exposure/item/$IFilmItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FilmType, $FilmType$Type} from "packages/io/github/mortuusars/exposure/camera/infrastructure/$FilmType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilmRollItem extends $Item implements $IFilmItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(filmType: $FilmType$Type, barColor: integer, properties: $Item$Properties$Type)

public "getType"(): $FilmType
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "canAddFrame"(filmStack: $ItemStack$Type): boolean
public "addFrame"(filmStack: $ItemStack$Type, frame: $CompoundTag$Type): void
public "getExposedFramesCount"(stack: $ItemStack$Type): integer
public "hasExposedFrame"(filmStack: $ItemStack$Type, index: integer): boolean
public "getExposedFrames"(filmStack: $ItemStack$Type): $ListTag
public "getFrameSize"(filmStack: $ItemStack$Type): integer
public "getMaxFrameCount"(filmStack: $ItemStack$Type): integer
public "getDefaultFrameSize"(): integer
public "getDefaultMaxFrameCount"(filmStack: $ItemStack$Type): integer
get "type"(): $FilmType
get "defaultFrameSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilmRollItem$Type = ($FilmRollItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilmRollItem_ = $FilmRollItem$Type;
}}
declare module "packages/io/github/mortuusars/exposure/integration/kubejs/event/$ModifyFrameDataEventJS" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ModifyFrameDataEventJS extends $PlayerEventJS {

constructor(player: $Player$Type, cameraStack: $ItemStack$Type, frame: $CompoundTag$Type, entitiesInFrame: $List$Type<($Entity$Type)>)

public "getCameraStack"(): $ItemStack
public "getPlayer"(): $Player
public "getFrame"(): $CompoundTag
public "getEntitiesInFrame"(): $List<($Entity)>
get "cameraStack"(): $ItemStack
get "player"(): $Player
get "frame"(): $CompoundTag
get "entitiesInFrame"(): $List<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyFrameDataEventJS$Type = ($ModifyFrameDataEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyFrameDataEventJS_ = $ModifyFrameDataEventJS$Type;
}}
