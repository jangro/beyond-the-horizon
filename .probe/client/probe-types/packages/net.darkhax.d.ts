declare module "packages/net/darkhax/bookshelf/mixin/accessors/world/$AccessorStructureTemplatePool" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $AccessorStructureTemplatePool {

 "bookshelf$setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
 "bookshelf$getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "bookshelf$setTemplates"(arg0: $ObjectArrayList$Type<($StructurePoolElement$Type)>): void
 "bookshelf$getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
}

export namespace $AccessorStructureTemplatePool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorStructureTemplatePool$Type = ($AccessorStructureTemplatePool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorStructureTemplatePool_ = $AccessorStructureTemplatePool$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/item/$AccessorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $AccessorItem {

 "bookshelf$setCraftingRemainder"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $AccessorItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorItem$Type = ($AccessorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorItem_ = $AccessorItem$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/client/multiplayer/$AccessorClientAdvancements" {
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"
import {$AdvancementProgress, $AdvancementProgress$Type} from "packages/net/minecraft/advancements/$AdvancementProgress"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorClientAdvancements {

 "bookshelf$getProgress"(): $Map<($Advancement), ($AdvancementProgress)>

(): $Map<($Advancement), ($AdvancementProgress)>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorClientAdvancements$Type = ($AccessorClientAdvancements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorClientAdvancements_ = $AccessorClientAdvancements$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/client/$AccessorMinecraft" {
import {$FontManager, $FontManager$Type} from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $AccessorMinecraft {

 "bookshelf$getFontManager"(): $FontManager

(): $FontManager
}

export namespace $AccessorMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMinecraft$Type = ($AccessorMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMinecraft_ = $AccessorMinecraft$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/client/$AccessorFontManager" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorFontManager {

 "bookshelf$getFonts"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map<($ResourceLocation), ($FontSet)>
}

export namespace $AccessorFontManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFontManager$Type = ($AccessorFontManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorFontManager_ = $AccessorFontManager$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/inventory/$AccessorCraftingMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $AccessorCraftingMenu {

 "bookshelf$getPlayer"(): $Player

(): $Player
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCraftingMenu$Type = ($AccessorCraftingMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCraftingMenu_ = $AccessorCraftingMenu$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ShapedDurabilityRecipe$Serializer, $ShapedDurabilityRecipe$Serializer$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe$Serializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedDurabilityRecipe extends $ShapedRecipe {
static readonly "SERIALIZER": $ShapedDurabilityRecipe$Serializer
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: integer)

public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedDurabilityRecipe$Type = ($ShapedDurabilityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedDurabilityRecipe_ = $ShapedDurabilityRecipe$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ShapelessDurabilityRecipe, $ShapelessDurabilityRecipe$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessDurabilityRecipe$Serializer implements $RecipeSerializer<($ShapelessDurabilityRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapelessDurabilityRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapelessDurabilityRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapelessDurabilityRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapelessDurabilityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessDurabilityRecipe$Serializer$Type = ($ShapelessDurabilityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessDurabilityRecipe$Serializer_ = $ShapelessDurabilityRecipe$Serializer$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapedDurabilityRecipe, $ShapedDurabilityRecipe$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapedDurabilityRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedDurabilityRecipe$Serializer implements $RecipeSerializer<($ShapedDurabilityRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedDurabilityRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedDurabilityRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedDurabilityRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedDurabilityRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedDurabilityRecipe$Serializer$Type = ($ShapedDurabilityRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedDurabilityRecipe$Serializer_ = $ShapedDurabilityRecipe$Serializer$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/commands/args/$SingletonArgumentInfo" {
import {$SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$Type} from "packages/net/darkhax/bookshelf/api/commands/args/$SingletonArgumentInfo$Template"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"

export class $SingletonArgumentInfo<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo<(T), ($SingletonArgumentInfo$Template<(T)>)> {


public static "of"<T extends $ArgumentType<(any)>>(arg0: T): $SingletonArgumentInfo<(T)>
public static "of"<T extends $ArgumentType<(any)>>(arg0: $Supplier$Type<(T)>): $SingletonArgumentInfo<(T)>
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $SingletonArgumentInfo$Template<(T)>
public "unpack"(arg0: T): $SingletonArgumentInfo$Template<(T)>
public "serializeToNetwork"(arg0: $SingletonArgumentInfo$Template$Type<(T)>, arg1: $FriendlyByteBuf$Type): void
public "serializeToJson"(arg0: $SingletonArgumentInfo$Template$Type<(T)>, arg1: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$Type<T> = ($SingletonArgumentInfo<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo_<T> = $SingletonArgumentInfo$Type<(T)>;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/entity/$AccessorLivingEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessorLivingEntity {

 "bookshelf$getHurtSound"(arg0: $DamageSource$Type): $SoundEvent
 "bookshelf$getFallDamageSound"(arg0: integer): $SoundEvent
 "bookshelf$makePoofParticles"(): void
 "bookshelf$getDrinkingSound"(arg0: $ItemStack$Type): $SoundEvent
 "bookshelf$getDeathSound"(): $SoundEvent
}

export namespace $AccessorLivingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLivingEntity$Type = ($AccessorLivingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLivingEntity_ = $AccessorLivingEntity$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/item/crafting/$AccessorShapedRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorShapedRecipe {

}

export namespace $AccessorShapedRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorShapedRecipe$Type = ($AccessorShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorShapedRecipe_ = $AccessorShapedRecipe$Type;
}}
declare module "packages/net/darkhax/bookshelf/api/commands/args/$SingletonArgumentInfo$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $SingletonArgumentInfo$Template<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo$Template<(T)> {

constructor(arg0: $Supplier$Type<(T)>, arg1: $ArgumentTypeInfo$Type<(T), (any)>)

public "type"(): $ArgumentTypeInfo<(T), (any)>
public "instantiate"(arg0: $CommandBuildContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$Template$Type<T> = ($SingletonArgumentInfo$Template<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo$Template_<T> = $SingletonArgumentInfo$Template$Type<(T)>;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/entity/$AccessorEntity" {
import {$HoverEvent, $HoverEvent$Type} from "packages/net/minecraft/network/chat/$HoverEvent"

export interface $AccessorEntity {

 "bookshelf$createHoverEvent"(): $HoverEvent

(): $HoverEvent
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$Type = ($AccessorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/item/$AccessorItemCooldowns" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorItemCooldowns {

 "bookshelf$getCooldowns"(): $Map<($Item), (any)>
 "bookshelf$getTickCount"(): integer
}

export namespace $AccessorItemCooldowns {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorItemCooldowns$Type = ($AccessorItemCooldowns);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorItemCooldowns_ = $AccessorItemCooldowns$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/block/entity/$AccessorSignBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorSignBlockEntity {

 "bookshelf$markUpdated"(): void

(): void
}

export namespace $AccessorSignBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSignBlockEntity$Type = ($AccessorSignBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSignBlockEntity_ = $AccessorSignBlockEntity$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/effect/$AccessorMobEffectInstance" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $AccessorMobEffectInstance {

 "bookshelf$setHiddenEffect"(arg0: $MobEffectInstance$Type): void
 "bookshelf$tickDownDuration"(): integer
 "bookshelf$getHiddenEffect"(): $MobEffectInstance
 "setDuration"(arg0: integer): void
}

export namespace $AccessorMobEffectInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMobEffectInstance$Type = ($AccessorMobEffectInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMobEffectInstance_ = $AccessorMobEffectInstance$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/util/random/$AccessorWeightedRandomList" {
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"

export interface $AccessorWeightedRandomList<E> {

 "bookshelf$getEntries"(): $ImmutableList<(E)>
 "bookshelf$getTotalWeight"(): integer
}

export namespace $AccessorWeightedRandomList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWeightedRandomList$Type<E> = ($AccessorWeightedRandomList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorWeightedRandomList_<E> = $AccessorWeightedRandomList$Type<(E)>;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/entity/$AccessorMob" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"

export interface $AccessorMob {

 "bookshelf$getAmbientSound"(): $SoundEvent

(): $SoundEvent
}

export namespace $AccessorMob {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMob$Type = ($AccessorMob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMob_ = $AccessorMob$Type;
}}
declare module "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ShapelessDurabilityRecipe$Serializer, $ShapelessDurabilityRecipe$Serializer$Type} from "packages/net/darkhax/bookshelf/impl/data/recipes/crafting/$ShapelessDurabilityRecipe$Serializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapelessDurabilityRecipe extends $ShapelessRecipe {
static readonly "SERIALIZER": $ShapelessDurabilityRecipe$Serializer
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $ItemStack$Type, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: integer)

public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessDurabilityRecipe$Type = ($ShapelessDurabilityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessDurabilityRecipe_ = $ShapelessDurabilityRecipe$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/inventory/$AccessorInventoryMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $AccessorInventoryMenu {

 "bookshelf$getOwner"(): $Player

(): $Player
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorInventoryMenu$Type = ($AccessorInventoryMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorInventoryMenu_ = $AccessorInventoryMenu$Type;
}}
declare module "packages/net/darkhax/attributefix/mixin/$AccessorRangedAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRangedAttribute {

 "attributefix$setMaxValue"(arg0: double): void
 "attributefix$setMinValue"(arg0: double): void
}

export namespace $AccessorRangedAttribute {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRangedAttribute$Type = ($AccessorRangedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRangedAttribute_ = $AccessorRangedAttribute$Type;
}}
declare module "packages/net/darkhax/bookshelf/mixin/accessors/world/$AccessorRecipeManager" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessorRecipeManager {

 "bookshelf$getTypeMap"(arg0: $RecipeType$Type<(any)>): $Map<(any), (any)>

(arg0: $RecipeType$Type<(any)>): $Map<(any), (any)>
}

export namespace $AccessorRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRecipeManager$Type = ($AccessorRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRecipeManager_ = $AccessorRecipeManager$Type;
}}
