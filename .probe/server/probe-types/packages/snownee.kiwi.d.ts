declare module "packages/snownee/kiwi/recipe/crafting/$DynamicShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DynamicShapedRecipe, $DynamicShapedRecipe$Type} from "packages/snownee/kiwi/recipe/crafting/$DynamicShapedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DynamicShapedRecipe$Serializer<T extends $DynamicShapedRecipe> implements $RecipeSerializer<(T)> {

constructor()

public static "fromNetwork"(arg0: $DynamicShapedRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "fromJson"(arg0: $DynamicShapedRecipe$Type, arg1: $JsonObject$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicShapedRecipe$Serializer$Type<T> = ($DynamicShapedRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicShapedRecipe$Serializer_<T> = $DynamicShapedRecipe$Serializer$Type<(T)>;
}}
declare module "packages/snownee/kiwi/mixin/$FireBlockAccess" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockAccess {

 "callSetFlammable"(arg0: $Block$Type, arg1: integer, arg2: integer): void

(arg0: $Block$Type, arg1: integer, arg2: integer): void
}

export namespace $FireBlockAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccess$Type = ($FireBlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockAccess_ = $FireBlockAccess$Type;
}}
declare module "packages/snownee/kiwi/mixin/$AxeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccess {

}

export namespace $AxeItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemAccess$Type = ($AxeItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemAccess_ = $AxeItemAccess$Type;
}}
declare module "packages/snownee/kiwi/mixin/$VillagerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerAccess {

}

export namespace $VillagerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerAccess$Type = ($VillagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerAccess_ = $VillagerAccess$Type;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$NoContainersShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $NoContainersShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ShapedRecipe$Type)

public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainersShapedRecipe$Type = ($NoContainersShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoContainersShapedRecipe_ = $NoContainersShapedRecipe$Type;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$DynamicShapedRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $DynamicShapedRecipe extends $CustomRecipe {
 "pattern": string
 "differentInputs": boolean
 "recipeOutput": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $CraftingBookCategory$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): boolean
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "search"(arg0: $CraftingContainer$Type): (integer)[]
public "item"(arg0: character, arg1: $CraftingContainer$Type, arg2: (integer)[]): $ItemStack
public "items"(arg0: character, arg1: $CraftingContainer$Type, arg2: (integer)[]): $List<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRecipeWidth"(): integer
public "getRecipeHeight"(): integer
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "recipeWidth"(): integer
get "recipeHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicShapedRecipe$Type = ($DynamicShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicShapedRecipe_ = $DynamicShapedRecipe$Type;
}}
declare module "packages/snownee/kiwi/mixin/$RecipeManagerAccess" {
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export interface $RecipeManagerAccess {

 "getContext"(): $ICondition$IContext

(): $ICondition$IContext
}

export namespace $RecipeManagerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccess$Type = ($RecipeManagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccess_ = $RecipeManagerAccess$Type;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$KiwiShapelessRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $KiwiShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type, arg1: boolean)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KiwiShapelessRecipe$Type = ($KiwiShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KiwiShapelessRecipe_ = $KiwiShapelessRecipe$Type;
}}
declare module "packages/snownee/kiwi/mixin/$HoeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccess {

}

export namespace $HoeItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItemAccess$Type = ($HoeItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoeItemAccess_ = $HoeItemAccess$Type;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$NoContainersShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NoContainersShapedRecipe, $NoContainersShapedRecipe$Type} from "packages/snownee/kiwi/recipe/crafting/$NoContainersShapedRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $NoContainersShapedRecipe$Serializer implements $RecipeSerializer<($NoContainersShapedRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $NoContainersShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $NoContainersShapedRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $NoContainersShapedRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $NoContainersShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainersShapedRecipe$Serializer$Type = ($NoContainersShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoContainersShapedRecipe$Serializer_ = $NoContainersShapedRecipe$Serializer$Type;
}}
declare module "packages/snownee/kiwi/mixin/forge/$ItemColorsAccess" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemColorsAccess {

 "getItemColors"(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>

(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>
}

export namespace $ItemColorsAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsAccess$Type = ($ItemColorsAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsAccess_ = $ItemColorsAccess$Type;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$KiwiShapelessRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$KiwiShapelessRecipe, $KiwiShapelessRecipe$Type} from "packages/snownee/kiwi/recipe/crafting/$KiwiShapelessRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $KiwiShapelessRecipe$Serializer implements $RecipeSerializer<($KiwiShapelessRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $KiwiShapelessRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $KiwiShapelessRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $KiwiShapelessRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $KiwiShapelessRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KiwiShapelessRecipe$Serializer$Type = ($KiwiShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KiwiShapelessRecipe$Serializer_ = $KiwiShapelessRecipe$Serializer$Type;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$RetextureRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$DynamicShapedRecipe$Serializer, $DynamicShapedRecipe$Serializer$Type} from "packages/snownee/kiwi/recipe/crafting/$DynamicShapedRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RetextureRecipe, $RetextureRecipe$Type} from "packages/snownee/kiwi/recipe/crafting/$RetextureRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RetextureRecipe$Serializer extends $DynamicShapedRecipe$Serializer<($RetextureRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RetextureRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RetextureRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RetextureRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RetextureRecipe$Serializer$Type = ($RetextureRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RetextureRecipe$Serializer_ = $RetextureRecipe$Serializer$Type;
}}
declare module "packages/snownee/kiwi/mixin/$ShovelItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccess {

}

export namespace $ShovelItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccess$Type = ($ShovelItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccess_ = $ShovelItemAccess$Type;
}}
declare module "packages/snownee/kiwi/mixin/forge/$BlockColorsAccess" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockColorsAccess {

 "getBlockColors"(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>

(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>
}

export namespace $BlockColorsAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsAccess$Type = ($BlockColorsAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsAccess_ = $BlockColorsAccess$Type;
}}
declare module "packages/snownee/kiwi/mixin/$ShapedRecipeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShapedRecipeAccess {

}

export namespace $ShapedRecipeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccess$Type = ($ShapedRecipeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeAccess_ = $ShapedRecipeAccess$Type;
}}
declare module "packages/snownee/kiwi/mixin/$TagsProviderAccess" {
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$TagBuilder, $TagBuilder$Type} from "packages/net/minecraft/tags/$TagBuilder"

export interface $TagsProviderAccess<T> {

 "getModId"(): string
 "callGetOrCreateRawBuilder"(arg0: $TagKey$Type<(T)>): $TagBuilder
 "getRegistryKey"(): $ResourceKey<(any)>
}

export namespace $TagsProviderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagsProviderAccess$Type<T> = ($TagsProviderAccess<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagsProviderAccess_<T> = $TagsProviderAccess$Type<(T)>;
}}
declare module "packages/snownee/kiwi/recipe/crafting/$RetextureRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DynamicShapedRecipe, $DynamicShapedRecipe$Type} from "packages/snownee/kiwi/recipe/crafting/$DynamicShapedRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $RetextureRecipe extends $DynamicShapedRecipe {
 "pattern": string
 "differentInputs": boolean
 "recipeOutput": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $CraftingBookCategory$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RetextureRecipe$Type = ($RetextureRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RetextureRecipe_ = $RetextureRecipe$Type;
}}
