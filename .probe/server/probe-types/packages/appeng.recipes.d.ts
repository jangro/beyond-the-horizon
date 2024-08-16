declare module "packages/appeng/recipes/handlers/$ChargerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ChargerRecipe implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($ChargerRecipe)>
readonly "ingredient": $Ingredient
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "result": $Item

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $Item$Type)

public "getIngredient"(): $Ingredient
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(): $ItemStack
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
get "ingredient"(): $Ingredient
get "id"(): $ResourceLocation
get "resultItem"(): $ItemStack
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
export type $ChargerRecipe$Type = ($ChargerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerRecipe_ = $ChargerRecipe$Type;
}}
declare module "packages/appeng/recipes/mattercannon/$MatterCannonAmmoSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$MatterCannonAmmo, $MatterCannonAmmo$Type} from "packages/appeng/recipes/mattercannon/$MatterCannonAmmo"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MatterCannonAmmoSerializer implements $RecipeSerializer<($MatterCannonAmmo)> {
static readonly "INSTANCE": $MatterCannonAmmoSerializer


public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MatterCannonAmmo
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MatterCannonAmmo$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $MatterCannonAmmo
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MatterCannonAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonAmmoSerializer$Type = ($MatterCannonAmmoSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterCannonAmmoSerializer_ = $MatterCannonAmmoSerializer$Type;
}}
declare module "packages/appeng/recipes/transform/$TransformRecipeSerializer" {
import {$TransformRecipe, $TransformRecipe$Type} from "packages/appeng/recipes/transform/$TransformRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TransformRecipeSerializer implements $RecipeSerializer<($TransformRecipe)> {
static readonly "INSTANCE": $TransformRecipeSerializer


public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TransformRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TransformRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TransformRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TransformRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformRecipeSerializer$Type = ($TransformRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformRecipeSerializer_ = $TransformRecipeSerializer$Type;
}}
declare module "packages/appeng/recipes/entropy/$StateMatcher" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"

export interface $StateMatcher {

 "getProperty"(): $Property<(any)>
 "matches"(arg0: $StateHolder$Type<(any), (any)>): boolean
 "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $StateMatcher {
function read(arg0: $StateDefinition$Type<(any), (any)>, arg1: $FriendlyByteBuf$Type): $StateMatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateMatcher$Type = ($StateMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateMatcher_ = $StateMatcher$Type;
}}
declare module "packages/appeng/recipes/transform/$TransformRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$TransformCircumstance, $TransformCircumstance$Type} from "packages/appeng/recipes/transform/$TransformCircumstance"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $TransformRecipe implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($TransformRecipe)>
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "output": $ItemStack
readonly "circumstance": $TransformCircumstance

constructor(arg0: $ResourceLocation$Type, arg1: $NonNullList$Type<($Ingredient$Type)>, arg2: $ItemStack$Type, arg3: $TransformCircumstance$Type)

public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
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
get "special"(): boolean
get "id"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $TransformRecipe$Type = ($TransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformRecipe_ = $TransformRecipe$Type;
}}
declare module "packages/appeng/recipes/entropy/$EntropyRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$StateApplier, $StateApplier$Type} from "packages/appeng/recipes/entropy/$StateApplier"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$StateMatcher, $StateMatcher$Type} from "packages/appeng/recipes/entropy/$StateMatcher"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$EntropyMode, $EntropyMode$Type} from "packages/appeng/recipes/entropy/$EntropyMode"

export class $EntropyRecipe implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($EntropyRecipe)>

constructor(arg0: $ResourceLocation$Type, arg1: $EntropyMode$Type, arg2: $Block$Type, arg3: $List$Type<($StateMatcher$Type)>, arg4: $Fluid$Type, arg5: $List$Type<($StateMatcher$Type)>, arg6: $Block$Type, arg7: $List$Type<($StateApplier$Type<(any)>)>, arg8: boolean, arg9: $Fluid$Type, arg10: $List$Type<($StateApplier$Type<(any)>)>, arg11: boolean, arg12: $List$Type<($ItemStack$Type)>)

public "matches"(arg0: $EntropyMode$Type, arg1: $BlockState$Type, arg2: $FluidState$Type): boolean
public "getMode"(): $EntropyMode
public "getOutputFluidState"(arg0: $FluidState$Type): $FluidState
public "getOutputBlockState"(arg0: $BlockState$Type): $BlockState
public "getDrops"(): $List<($ItemStack)>
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getOutputBlock"(): $Block
public "getOutputBlockKeep"(): boolean
public "getInputBlock"(): $Block
public "getOutputFluidKeep"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getOutputFluid"(): $Fluid
public "getInputFluid"(): $Fluid
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
get "mode"(): $EntropyMode
get "drops"(): $List<($ItemStack)>
get "id"(): $ResourceLocation
get "outputBlock"(): $Block
get "outputBlockKeep"(): boolean
get "inputBlock"(): $Block
get "outputFluidKeep"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "outputFluid"(): $Fluid
get "inputFluid"(): $Fluid
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
export type $EntropyRecipe$Type = ($EntropyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe_ = $EntropyRecipe$Type;
}}
declare module "packages/appeng/recipes/entropy/$EntropyRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$EntropyRecipe, $EntropyRecipe$Type} from "packages/appeng/recipes/entropy/$EntropyRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $EntropyRecipeSerializer implements $RecipeSerializer<($EntropyRecipe)> {
static readonly "INSTANCE": $EntropyRecipeSerializer


public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $EntropyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $EntropyRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $EntropyRecipe
public "toJson"(arg0: $EntropyRecipe$Type, arg1: $JsonObject$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $EntropyRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipeSerializer$Type = ($EntropyRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipeSerializer_ = $EntropyRecipeSerializer$Type;
}}
declare module "packages/appeng/recipes/handlers/$InscriberRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InscriberRecipe, $InscriberRecipe$Type} from "packages/appeng/recipes/handlers/$InscriberRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $InscriberRecipeSerializer implements $RecipeSerializer<($InscriberRecipe)> {
static readonly "INSTANCE": $InscriberRecipeSerializer


public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $InscriberRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $InscriberRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $InscriberRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $InscriberRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberRecipeSerializer$Type = ($InscriberRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberRecipeSerializer_ = $InscriberRecipeSerializer$Type;
}}
declare module "packages/appeng/recipes/entropy/$EntropyMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntropyMode extends $Enum<($EntropyMode)> {
static readonly "HEAT": $EntropyMode
static readonly "COOL": $EntropyMode


public static "values"(): ($EntropyMode)[]
public static "valueOf"(arg0: string): $EntropyMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyMode$Type = (("heat") | ("cool")) | ($EntropyMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyMode_ = $EntropyMode$Type;
}}
declare module "packages/appeng/recipes/entropy/$StateApplier" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $StateApplier<T extends $Comparable<(T)>> {


public "getValueName"(): string
public "getProperty"(): $Property<(T)>
get "valueName"(): string
get "property"(): $Property<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateApplier$Type<T> = ($StateApplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateApplier_<T> = $StateApplier$Type<(T)>;
}}
declare module "packages/appeng/recipes/handlers/$InscriberProcessType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $InscriberProcessType extends $Enum<($InscriberProcessType)> {
static readonly "INSCRIBE": $InscriberProcessType
static readonly "PRESS": $InscriberProcessType


public static "values"(): ($InscriberProcessType)[]
public static "valueOf"(arg0: string): $InscriberProcessType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberProcessType$Type = (("inscribe") | ("press")) | ($InscriberProcessType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberProcessType_ = $InscriberProcessType$Type;
}}
declare module "packages/appeng/recipes/handlers/$ChargerRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChargerRecipe, $ChargerRecipe$Type} from "packages/appeng/recipes/handlers/$ChargerRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ChargerRecipeSerializer implements $RecipeSerializer<($ChargerRecipe)> {
static readonly "INSTANCE": $ChargerRecipeSerializer

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ChargerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ChargerRecipe$Type): void
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ChargerRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ChargerRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerRecipeSerializer$Type = ($ChargerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerRecipeSerializer_ = $ChargerRecipeSerializer$Type;
}}
declare module "packages/appeng/recipes/mattercannon/$MatterCannonAmmo" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MatterCannonAmmo implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($MatterCannonAmmo)>

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: float)

public "getAmmo"(): $Ingredient
public static "ammo"(arg0: $Consumer$Type<($FinishedRecipe$Type)>, arg1: $ResourceLocation$Type, arg2: $Ingredient$Type, arg3: float): void
public static "ammo"(arg0: $Consumer$Type<($FinishedRecipe$Type)>, arg1: $ResourceLocation$Type, arg2: $ItemLike$Type, arg3: float): void
public static "ammo"(arg0: $Consumer$Type<($FinishedRecipe$Type)>, arg1: $ResourceLocation$Type, arg2: $TagKey$Type<($Item$Type)>, arg3: float): void
public "getWeight"(): float
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
get "weight"(): float
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
export type $MatterCannonAmmo$Type = ($MatterCannonAmmo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterCannonAmmo_ = $MatterCannonAmmo$Type;
}}
declare module "packages/appeng/recipes/transform/$TransformCircumstance" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $TransformCircumstance {
static readonly "EXPLOSION": $TransformCircumstance

constructor(arg0: string)

public "isFluidTag"(arg0: $TagKey$Type<($Fluid$Type)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toJson"(): $JsonObject
public "isExplosion"(): boolean
public "isFluid"(arg0: $Fluid$Type): boolean
public "isFluid"(arg0: $FluidState$Type): boolean
public "isFluid"(): boolean
public static "fluid"(arg0: $TagKey$Type<($Fluid$Type)>): $TransformCircumstance
public static "explosion"(): $TransformCircumstance
public "getFluidsForRendering"(): $List<($Fluid)>
get "fluidsForRendering"(): $List<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformCircumstance$Type = ($TransformCircumstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformCircumstance_ = $TransformCircumstance$Type;
}}
declare module "packages/appeng/recipes/handlers/$InscriberRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$InscriberProcessType, $InscriberProcessType$Type} from "packages/appeng/recipes/handlers/$InscriberProcessType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $InscriberRecipe implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($InscriberRecipe)>

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: $Ingredient$Type, arg4: $Ingredient$Type, arg5: $InscriberProcessType$Type)

public "getBottomOptional"(): $Ingredient
public "getMiddleInput"(): $Ingredient
public "getTopOptional"(): $Ingredient
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(): $ItemStack
public "getProcessType"(): $InscriberProcessType
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
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
get "bottomOptional"(): $Ingredient
get "middleInput"(): $Ingredient
get "topOptional"(): $Ingredient
get "special"(): boolean
get "id"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "processType"(): $InscriberProcessType
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
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
export type $InscriberRecipe$Type = ($InscriberRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberRecipe_ = $InscriberRecipe$Type;
}}
