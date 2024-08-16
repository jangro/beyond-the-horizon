declare module "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder" {
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<($IRecipeSlotBuilder)> {

 "setSlotName"(arg0: string): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $IIngredientRenderer$Type<(T)>): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): $IRecipeSlotBuilder
 "setOverlay"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setBackground"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): $IRecipeSlotBuilder
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): $IRecipeSlotBuilder
 "addItemStack"(arg0: $ItemStack$Type): $IRecipeSlotBuilder
 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "addIngredients"<I>(arg0: $IIngredientType$Type<(I)>, arg1: $List$Type<(I)>): $IRecipeSlotBuilder
 "addIngredients"(arg0: $Ingredient$Type): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): $IRecipeSlotBuilder
}

export namespace $IRecipeSlotBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotBuilder$Type = ($IRecipeSlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotBuilder_ = $IRecipeSlotBuilder$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IRecipesGui" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipesGui {

 "showRecipes"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: $List$Type<(T)>, arg2: $List$Type<($IFocus$Type<(any)>)>): void
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "show"<V>(arg0: $IFocus$Type<(V)>): void
 "show"(arg0: $List$Type<($IFocus$Type<(any)>)>): void
 "showTypes"(arg0: $List$Type<($RecipeType$Type<(any)>)>): void
}

export namespace $IRecipesGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipesGui$Type = ($IRecipesGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipesGui_ = $IRecipesGui$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IJeiHelpers" {
import {$IModIdHelper, $IModIdHelper$Type} from "packages/mezz/jei/api/helpers/$IModIdHelper"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IColorHelper, $IColorHelper$Type} from "packages/mezz/jei/api/helpers/$IColorHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IPlatformFluidHelper, $IPlatformFluidHelper$Type} from "packages/mezz/jei/api/helpers/$IPlatformFluidHelper"
import {$IGuiHelper, $IGuiHelper$Type} from "packages/mezz/jei/api/helpers/$IGuiHelper"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"
import {$IStackHelper, $IStackHelper$Type} from "packages/mezz/jei/api/helpers/$IStackHelper"

export interface $IJeiHelpers {

 "getAllRecipeTypes"(): $Stream<($RecipeType<(any)>)>
 "getModIdHelper"(): $IModIdHelper
 "getPlatformFluidHelper"(): $IPlatformFluidHelper<(any)>
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "getGuiHelper"(): $IGuiHelper
 "getIngredientManager"(): $IIngredientManager
 "getFocusFactory"(): $IFocusFactory
 "getColorHelper"(): $IColorHelper
 "getStackHelper"(): $IStackHelper
}

export namespace $IJeiHelpers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiHelpers$Type = ($IJeiHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiHelpers_ = $IJeiHelpers$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IColorHelper" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IColorHelper {

 "getClosestColorName"(arg0: integer): string
 "getColors"(arg0: $ItemStack$Type, arg1: integer): $List<(integer)>
 "getColors"(arg0: $TextureAtlasSprite$Type, arg1: integer, arg2: integer): $List<(integer)>
}

export namespace $IColorHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorHelper$Type = ($IColorHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorHelper_ = $IColorHelper$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IStackHelper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IStackHelper {

 "getUniqueIdentifierForStack"(arg0: $ItemStack$Type, arg1: $UidContext$Type): string
 "isEquivalent"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $UidContext$Type): boolean
}

export namespace $IStackHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHelper$Type = ($IStackHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHelper_ = $IStackHelper$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusGroup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFocusGroup {

 "getItemStackFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
 "isEmpty"(): boolean
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<($IFocus<(T)>)>
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $RecipeIngredientRole$Type): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<(any)>)>
 "getAllFocuses"(): $List<($IFocus<(any)>)>
}

export namespace $IFocusGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusGroup$Type = ($IFocusGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusGroup_ = $IFocusGroup$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMapping" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiKeyMapping {

 "getTranslatedKeyMessage"(): $Component
 "isUnbound"(): boolean
 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
}

export namespace $IJeiKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMapping$Type = ($IJeiKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMapping_ = $IJeiKeyMapping$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientVisibility$IListener, $IIngredientVisibility$IListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility {

 "registerListener"(arg0: $IIngredientVisibility$IListener$Type): void
 "isIngredientVisible"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "isIngredientVisible"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): boolean
}

export namespace $IIngredientVisibility {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$Type = ($IIngredientVisibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility_ = $IIngredientVisibility$Type;
}}
declare module "packages/mezz/jei/api/registration/$ISubtypeRegistration" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IIngredientSubtypeInterpreter, $IIngredientSubtypeInterpreter$Type} from "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $ISubtypeRegistration {

 "registerSubtypeInterpreter"<B, I>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (I)>, arg1: B, arg2: $IIngredientSubtypeInterpreter$Type<(I)>): void
 "registerSubtypeInterpreter"(arg0: $Item$Type, arg1: $IIngredientSubtypeInterpreter$Type<($ItemStack$Type)>): void
 "useNbtForSubtypes"(...arg0: ($Fluid$Type)[]): void
 "useNbtForSubtypes"(...arg0: ($Item$Type)[]): void
}

export namespace $ISubtypeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeRegistration$Type = ($ISubtypeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeRegistration_ = $ISubtypeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IDrawableAnimated$StartDirection extends $Enum<($IDrawableAnimated$StartDirection)> {
static readonly "TOP": $IDrawableAnimated$StartDirection
static readonly "BOTTOM": $IDrawableAnimated$StartDirection
static readonly "LEFT": $IDrawableAnimated$StartDirection
static readonly "RIGHT": $IDrawableAnimated$StartDirection


public static "values"(): ($IDrawableAnimated$StartDirection)[]
public static "valueOf"(arg0: string): $IDrawableAnimated$StartDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$StartDirection$Type = (("top") | ("left") | ("bottom") | ("right")) | ($IDrawableAnimated$StartDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated$StartDirection_ = $IDrawableAnimated$StartDirection$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener" {
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility$IListener {

 "onIngredientVisibilityChanged"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void

(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void
}

export namespace $IIngredientVisibility$IListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$IListener$Type = ($IIngredientVisibility$IListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility$IListener_ = $IIngredientVisibility$IListener$Type;
}}
declare module "packages/mezz/jei/api/gui/$ITickTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITickTimer {

 "getValue"(): integer
 "getMaxValue"(): integer
}

export namespace $ITickTimer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickTimer$Type = ($ITickTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickTimer_ = $ITickTimer$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter" {
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientSubtypeInterpreter<T> {

 "apply"(arg0: T, arg1: $UidContext$Type): string

(arg0: T, arg1: $UidContext$Type): string
}

export namespace $IIngredientSubtypeInterpreter {
const NONE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSubtypeInterpreter$Type<T> = ($IIngredientSubtypeInterpreter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSubtypeInterpreter_<T> = $IIngredientSubtypeInterpreter$Type<(T)>;
}}
declare module "packages/mezz/jei/api/ingredients/$ITypedIngredient" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITypedIngredient<T> {

 "getType"(): $IIngredientType<(T)>
 "getItemStack"(): $Optional<($ItemStack)>
 "getIngredient"(): T
 "getIngredient"<V>(arg0: $IIngredientType$Type<(V)>): $Optional<(V)>
}

export namespace $ITypedIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedIngredient$Type<T> = ($ITypedIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedIngredient_<T> = $ITypedIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder" {
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"

export interface $IRecipeLayoutBuilder {

 "addSlot"(arg0: $RecipeIngredientRole$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$Type): $IIngredientAcceptor<(any)>
 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
 "setShapeless"(arg0: integer, arg1: integer): void
 "setShapeless"(): void
 "createFocusLink"(...arg0: ($IIngredientAcceptor$Type<(any)>)[]): void
}

export namespace $IRecipeLayoutBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutBuilder$Type = ($IRecipeLayoutBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutBuilder_ = $IRecipeLayoutBuilder$Type;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigFile" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IJeiConfigFile {

 "getPath"(): $Path
 "getCategories"(): $List<(any)>
}

export namespace $IJeiConfigFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigFile$Type = ($IJeiConfigFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigFile_ = $IJeiConfigFile$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $IRecipeTransferManager {

 "getRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>

(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>
}

export namespace $IRecipeTransferManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferManager$Type = ($IRecipeTransferManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferManager_ = $IRecipeTransferManager$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView" {
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IRecipeSlotsView {

 "getSlotViews"(): $List<($IRecipeSlotView)>
 "getSlotViews"(arg0: $RecipeIngredientRole$Type): $List<($IRecipeSlotView)>
 "findSlotByName"(arg0: string): $Optional<($IRecipeSlotView)>
}

export namespace $IRecipeSlotsView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotsView$Type = ($IRecipeSlotsView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotsView_ = $IRecipeSlotsView$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientHelper<V> {

 "getErrorInfo"(arg0: V): string
 "getUniqueId"(arg0: V, arg1: $UidContext$Type): string
 "getIngredientType"(): $IIngredientType<(V)>
 "hasSubtypes"(arg0: V): boolean
 "getWildcardId"(arg0: V): string
 "getDisplayModId"(arg0: V): string
 "getTagStream"(arg0: V): $Stream<($ResourceLocation)>
 "copyIngredient"(arg0: V): V
 "copyWithAmount"(arg0: V, arg1: long): V
 "getCheatItemStack"(arg0: V): $ItemStack
 "getTagEquivalent"(arg0: $Collection$Type<(V)>): $Optional<($ResourceLocation)>
 "getDisplayName"(arg0: V): string
 "isValidIngredient"(arg0: V): boolean
 "getAmount"(arg0: V): long
 "getResourceLocation"(arg0: V): $ResourceLocation
 "getColors"(arg0: V): $Iterable<(integer)>
 "isHiddenFromRecipeViewersByTags"(arg0: V): boolean
 "normalizeIngredient"(arg0: V): V
 "isIngredientOnServer"(arg0: V): boolean
}

export namespace $IIngredientHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientHelper$Type<V> = ($IIngredientHelper<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientHelper_<V> = $IIngredientHelper$Type<(V)>;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientListOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientListOverlay {

 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "hasKeyboardFocus"(): boolean
 "isListDisplayed"(): boolean
 "getVisibleIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
}

export namespace $IIngredientListOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientListOverlay$Type = ($IIngredientListOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientListOverlay_ = $IIngredientListOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory" {
import {$IJeiBrewingRecipe, $IJeiBrewingRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IJeiAnvilRecipe, $IJeiAnvilRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IVanillaRecipeFactory {

/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type): $IJeiBrewingRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
}

export namespace $IVanillaRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaRecipeFactory$Type = ($IVanillaRecipeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaRecipeFactory_ = $IVanillaRecipeFactory$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"

export interface $IGuiClickableArea {

 "getTooltipStrings"(): $List<($Component)>
 "onClick"(arg0: $IFocusFactory$Type, arg1: $IRecipesGui$Type): void
 "getArea"(): $Rect2i
 "isTooltipEnabled"(): boolean
}

export namespace $IGuiClickableArea {
function createBasic(arg0: integer, arg1: integer, arg2: integer, arg3: integer, ...arg4: ($RecipeType$Type<(any)>)[]): $IGuiClickableArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiClickableArea$Type = ($IGuiClickableArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiClickableArea_ = $IGuiClickableArea$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEditModeConfig$HideMode, $IEditModeConfig$HideMode$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IEditModeConfig {

 "isIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "getIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): $Set<($IEditModeConfig$HideMode)>
 "hideIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
 "showIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
}

export namespace $IEditModeConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$Type = ($IEditModeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig_ = $IEditModeConfig$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<(THIS)>> {

 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): THIS
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): THIS
 "addItemStack"(arg0: $ItemStack$Type): THIS
 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): THIS
 "addIngredients"<I>(arg0: $IIngredientType$Type<(I)>, arg1: $List$Type<(I)>): THIS
 "addIngredients"(arg0: $Ingredient$Type): THIS
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): THIS
 "addFluidStack"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): THIS
}

export namespace $IIngredientAcceptor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientAcceptor$Type<THIS> = ($IIngredientAcceptor<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientAcceptor_<THIS> = $IIngredientAcceptor$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientFilter" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientFilter {

 "getFilterText"(): string
 "getFilteredItemStacks"(): $List<($ItemStack)>
 "setFilterText"(arg0: string): void
 "getFilteredIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
}

export namespace $IIngredientFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientFilter$Type = ($IIngredientFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientFilter_ = $IIngredientFilter$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeLookup" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IRecipeLookup<R> {

 "get"(): $Stream<(R)>
 "includeHidden"(): $IRecipeLookup<(R)>
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeLookup<(R)>
}

export namespace $IRecipeLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLookup$Type<R> = ($IRecipeLookup<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLookup_<R> = $IRecipeLookup$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler" {
import {$IGhostIngredientHandler$Target, $IGhostIngredientHandler$Target$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IGhostIngredientHandler<T extends $Screen> {

 "onComplete"(): void
 "shouldHighlightTargets"(): boolean
 "getTargetsTyped"<I>(arg0: T, arg1: $ITypedIngredient$Type<(I)>, arg2: boolean): $List<($IGhostIngredientHandler$Target<(I)>)>
}

export namespace $IGhostIngredientHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Type<T> = ($IGhostIngredientHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler_<T> = $IGhostIngredientHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder" {
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IDrawableBuilder {

 "setTextureSize"(arg0: integer, arg1: integer): $IDrawableBuilder
 "build"(): $IDrawableStatic
 "trim"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "addPadding"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "buildAnimated"(arg0: $ITickTimer$Type, arg1: $IDrawableAnimated$StartDirection$Type): $IDrawableAnimated
 "buildAnimated"(arg0: integer, arg1: $IDrawableAnimated$StartDirection$Type, arg2: boolean): $IDrawableAnimated
}

export namespace $IDrawableBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableBuilder$Type = ($IDrawableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableBuilder_ = $IDrawableBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IRecipeSlotDrawable extends $IRecipeSlotView {

 "getRect"(): $Rect2i
 "getTooltip"(): $List<($Component)>
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): void
 "draw"(arg0: $GuiGraphics$Type): void
 "drawHoverOverlays"(arg0: $GuiGraphics$Type): void
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getRole"(): $RecipeIngredientRole
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "isEmpty"(): boolean
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
}

export namespace $IRecipeSlotDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawable$Type = ($IRecipeSlotDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawable_ = $IRecipeSlotDrawable$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableStatic" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableStatic extends $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
}

export namespace $IDrawableStatic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableStatic$Type = ($IDrawableStatic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableStatic_ = $IDrawableStatic$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiAnvilRecipe {

 "getRightInputs"(): $List<($ItemStack)>
 "getLeftInputs"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
 "getOutputs"(): $List<($ItemStack)>
}

export namespace $IJeiAnvilRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiAnvilRecipe$Type = ($IJeiAnvilRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiAnvilRecipe_ = $IJeiAnvilRecipe$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawable {

 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
}

export namespace $IDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawable$Type = ($IDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawable_ = $IDrawable$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IPlatformFluidHelper" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IPlatformFluidHelper<T> {

 "create"(arg0: $Fluid$Type, arg1: long): T
 "create"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): T
 "getFluidIngredientType"(): $IIngredientTypeWithSubtypes<($Fluid), (T)>
 "bucketVolume"(): long
}

export namespace $IPlatformFluidHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlatformFluidHelper$Type<T> = ($IPlatformFluidHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlatformFluidHelper_<T> = $IPlatformFluidHelper$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeTransferError$Type, $IRecipeTransferError$Type$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferError {

 "showError"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IRecipeSlotsView$Type, arg4: integer, arg5: integer): void
 "getTooltip"(): $List<($Component)>
 "getType"(): $IRecipeTransferError$Type
 "getButtonHighlightColor"(): integer
 "getMissingCountHint"(): integer

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IRecipeSlotsView$Type, arg4: integer, arg5: integer): void
}

export namespace $IRecipeTransferError {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type = ($IRecipeTransferError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError_ = $IRecipeTransferError$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientType<T> {

 "getUid"(): string
 "getIngredientClass"(): $Class<(any)>
 "castIngredient"(arg0: any): $Optional<(T)>

(): string
}

export namespace $IIngredientType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientType$Type<T> = ($IIngredientType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientType_<T> = $IIngredientType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGhostIngredientHandler$Target<I> extends $Consumer<(I)> {

 "accept"(arg0: I): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(I)>
}

export namespace $IGhostIngredientHandler$Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Target$Type<I> = ($IGhostIngredientHandler$Target<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler$Target_<I> = $IGhostIngredientHandler$Target$Type<(I)>;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IVanillaRecipeFactory, $IVanillaRecipeFactory$Type} from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"

export interface $IRecipeRegistration {

 "getIngredientVisibility"(): $IIngredientVisibility
 "getVanillaRecipeFactory"(): $IVanillaRecipeFactory
 "getJeiHelpers"(): $IJeiHelpers
 "getIngredientManager"(): $IIngredientManager
 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
 "addIngredientInfo"<T>(arg0: T, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addIngredientInfo"<T>(arg0: $List$Type<(T)>, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addItemStackInfo"(arg0: $List$Type<($ItemStack$Type)>, ...arg1: ($Component$Type)[]): void
 "addItemStackInfo"(arg0: $ItemStack$Type, ...arg1: ($Component$Type)[]): void
}

export namespace $IRecipeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeRegistration$Type = ($IRecipeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeRegistration_ = $IRecipeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeSlotView {

 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getRole"(): $RecipeIngredientRole
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "isEmpty"(): boolean
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
}

export namespace $IRecipeSlotView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotView$Type = ($IRecipeSlotView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotView_ = $IRecipeSlotView$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeManager" {
import {$IRecipeCatalystLookup, $IRecipeCatalystLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeLookup, $IRecipeLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeLookup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeLayoutDrawable, $IRecipeLayoutDrawable$Type} from "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeCategoriesLookup, $IRecipeCategoriesLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IScalableDrawable, $IScalableDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IScalableDrawable"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"

export interface $IRecipeManager {

 "hideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "unhideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "createRecipeSlotDrawable"(arg0: $RecipeIngredientRole$Type, arg1: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>, arg2: $Set$Type<(integer)>, arg3: integer, arg4: integer, arg5: integer): $IRecipeSlotDrawable
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type, arg3: $IScalableDrawable$Type, arg4: integer): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeCatalystLookup"(arg0: $RecipeType$Type<(any)>): $IRecipeCatalystLookup
 "createRecipeLookup"<R>(arg0: $RecipeType$Type<(R)>): $IRecipeLookup<(R)>
 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
 "hideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
 "unhideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
 "getRecipeCategory"<T>(arg0: $RecipeType$Type<(T)>): $IRecipeCategory<(T)>
 "createRecipeCategoryLookup"(): $IRecipeCategoriesLookup
}

export namespace $IRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManager$Type = ($IRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManager_ = $IRecipeManager$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiBrewingRecipe {

 "getBrewingSteps"(): integer
 "getIngredients"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
 "getPotionOutput"(): $ItemStack
 "getPotionInputs"(): $List<($ItemStack)>
}

export namespace $IJeiBrewingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiBrewingRecipe$Type = ($IJeiBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiBrewingRecipe_ = $IJeiBrewingRecipe$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocus" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocus<V> {

 "getRole"(): $RecipeIngredientRole
 "checkedCast"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<($IFocus<(T)>)>
 "getTypedValue"(): $ITypedIngredient<(V)>
}

export namespace $IFocus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocus$Type<V> = ($IFocus<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocus_<V> = $IFocus$Type<(V)>;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeType<T> {

constructor(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<T>(arg0: string, arg1: string, arg2: $Class$Type<(any)>): $RecipeType<(T)>
public "getRecipeClass"(): $Class<(any)>
public "getUid"(): $ResourceLocation
get "recipeClass"(): $Class<(any)>
get "uid"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeType$Type<T> = ($RecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeType_<T> = $RecipeType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeLayoutDrawable<R> {

 "getRecipe"(): R
 "getRectWithBorder"(): $Rect2i
 "getRecipeSlotsView"(): $IRecipeSlotsView
 "drawRecipe"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "getRect"(): $Rect2i
 "getItemStackUnderMouse"(arg0: integer, arg1: integer): $Optional<($ItemStack)>
 "getRecipeSlotUnderMouse"(arg0: double, arg1: double): $Optional<($IRecipeSlotDrawable)>
 "getRecipeTransferButtonArea"(): $Rect2i
 "getRecipeBookmarkButtonArea"(): $Rect2i
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getIngredientUnderMouse"<T>(arg0: integer, arg1: integer, arg2: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getRecipeCategory"(): $IRecipeCategory<(R)>
 "setPosition"(arg0: integer, arg1: integer): void
 "drawOverlays"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $IRecipeLayoutDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutDrawable$Type<R> = ($IRecipeLayoutDrawable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutDrawable_<R> = $IRecipeLayoutDrawable$Type<(R)>;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$UidContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UidContext extends $Enum<($UidContext)> {
static readonly "Ingredient": $UidContext
static readonly "Recipe": $UidContext


public static "values"(): ($UidContext)[]
public static "valueOf"(arg0: string): $UidContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UidContext$Type = (("ingredient") | ("recipe")) | ($UidContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UidContext_ = $UidContext$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IEditModeConfig$HideMode extends $Enum<($IEditModeConfig$HideMode)> {
static readonly "SINGLE": $IEditModeConfig$HideMode
static readonly "WILDCARD": $IEditModeConfig$HideMode


public static "values"(): ($IEditModeConfig$HideMode)[]
public static "valueOf"(arg0: string): $IEditModeConfig$HideMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$HideMode$Type = (("single") | ("wildcard")) | ($IEditModeConfig$HideMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig$HideMode_ = $IEditModeConfig$HideMode$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/$IRecipeCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeCategory<T> {

 "getIcon"(): $IDrawable
 "getTooltipStrings"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: double, arg3: double): $List<($Component)>
 "getRecipeType"(): $RecipeType<(T)>
 "handleInput"(arg0: T, arg1: double, arg2: double, arg3: $InputConstants$Key$Type): boolean
 "isHandled"(arg0: T): boolean
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getTitle"(): $Component
 "draw"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
 "getBackground"(): $IDrawable
 "getRegistryName"(arg0: T): $ResourceLocation
}

export namespace $IRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategory$Type<T> = ($IRecipeCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategory_<T> = $IRecipeCategory$Type<(T)>;
}}
declare module "packages/mezz/jei/api/helpers/$IModIdHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IModIdHelper {

 "getModNameForTooltip"<T>(arg0: $ITypedIngredient$Type<(T)>): $Optional<($Component)>
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: $ITypedIngredient$Type<(T)>): $List<($Component)>
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: T, arg2: $IIngredientHelper$Type<(T)>): $List<($Component)>
 "getFormattedModNameForModId"(arg0: string): string
 "isDisplayingModNameEnabled"(): boolean
 "getModNameForModId"(arg0: string): string
}

export namespace $IModIdHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModIdHelper$Type = ($IModIdHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModIdHelper_ = $IModIdHelper$Type;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeIngredientRole" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeIngredientRole extends $Enum<($RecipeIngredientRole)> {
static readonly "INPUT": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "CATALYST": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole


public static "values"(): ($RecipeIngredientRole)[]
public static "valueOf"(arg0: string): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeIngredientRole$Type = (("output") | ("input") | ("catalyst") | ("render_only")) | ($RecipeIngredientRole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeIngredientRole_ = $RecipeIngredientRole$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"

export interface $IRecipeCategoriesLookup {

 "get"(): $Stream<($IRecipeCategory<(any)>)>
 "includeHidden"(): $IRecipeCategoriesLookup
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeCategoriesLookup
 "limitTypes"(arg0: $Collection$Type<($RecipeType$Type<(any)>)>): $IRecipeCategoriesLookup
}

export namespace $IRecipeCategoriesLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoriesLookup$Type = ($IRecipeCategoriesLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoriesLookup_ = $IRecipeCategoriesLookup$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingGridHelper {

 "createAndSetOutputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<(T)>): $IRecipeSlotBuilder
 "createAndSetOutputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "setInputs"<T>(arg0: $List$Type<($IRecipeSlotBuilder$Type)>, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): void
 "createAndSetInputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetInputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($List$Type<($ItemStack$Type)>)>, arg2: integer, arg3: integer): $List<($IRecipeSlotBuilder)>
}

export namespace $ICraftingGridHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingGridHelper$Type = ($ICraftingGridHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingGridHelper_ = $ICraftingGridHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IScalableDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IScalableDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw"(arg0: $GuiGraphics$Type, arg1: $Rect2i$Type): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $IScalableDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScalableDrawable$Type = ($IScalableDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScalableDrawable_ = $IScalableDrawable$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IGuiHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$IDrawableBuilder, $IDrawableBuilder$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import {$ICraftingGridHelper, $ICraftingGridHelper$Type} from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IGuiHelper {

 "createTickTimer"(arg0: integer, arg1: integer, arg2: boolean): $ITickTimer
 "getSlotDrawable"(): $IDrawableStatic
 "createBlankDrawable"(arg0: integer, arg1: integer): $IDrawableStatic
 "createAnimatedDrawable"(arg0: $IDrawableStatic$Type, arg1: integer, arg2: $IDrawableAnimated$StartDirection$Type, arg3: boolean): $IDrawableAnimated
 "createDrawableItemStack"(arg0: $ItemStack$Type): $IDrawable
 "createCraftingGridHelper"(): $ICraftingGridHelper
 "createDrawable"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableStatic
 "createDrawableIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $IDrawable
 "createDrawableIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $IDrawable
 "drawableBuilder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableBuilder
}

export namespace $IGuiHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHelper$Type = ($IGuiHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHelper_ = $IGuiHelper$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager" {
import {$IIngredientManager$IIngredientListener, $IIngredientManager$IIngredientListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager {

 "getAllIngredients"<V>(arg0: $IIngredientType$Type<(V)>): $Collection<(V)>
 "getIngredientRenderer"<V>(arg0: V): $IIngredientRenderer<(V)>
 "getIngredientRenderer"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientRenderer<(V)>
 "getRegisteredIngredientTypes"(): $Collection<($IIngredientType<(any)>)>
 "getIngredientTypeForUid"(arg0: string): $Optional<($IIngredientType<(any)>)>
 "getIngredientTypeChecked"<V>(arg0: $Class$Type<(any)>): $Optional<($IIngredientType<(V)>)>
 "getIngredientTypeChecked"<V>(arg0: V): $Optional<($IIngredientType<(V)>)>
 "normalizeTypedIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $ITypedIngredient<(V)>
 "getTypedIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<($ITypedIngredient<(V)>)>
 "getAllItemStacks"(): $Collection<($ItemStack)>
/**
 * 
 * @deprecated
 */
 "getIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<(V)>
 "createTypedIngredient"<V>(arg0: V): $Optional<($ITypedIngredient<(V)>)>
 "createTypedIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $Optional<($ITypedIngredient<(V)>)>
 "registerIngredientListener"(arg0: $IIngredientManager$IIngredientListener$Type): void
 "removeIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "getIngredientHelper"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientHelper<(V)>
 "getIngredientHelper"<V>(arg0: V): $IIngredientHelper<(V)>
 "addIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
}

export namespace $IIngredientManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$Type = ($IIngredientManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager_ = $IIngredientManager$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

export interface $IRecipeSlotTooltipCallback {

 "onTooltip"(arg0: $IRecipeSlotView$Type, arg1: $List$Type<($Component$Type)>): void

(arg0: $IRecipeSlotView$Type, arg1: $List$Type<($Component$Type)>): void
}

export namespace $IRecipeSlotTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotTooltipCallback$Type = ($IRecipeSlotTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotTooltipCallback_ = $IRecipeSlotTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {

 "getMenuType"(): $Optional<($MenuType<(C)>)>
 "getRecipeType"(): $RecipeType<(R)>
 "getContainerClass"(): $Class<(any)>
 "transferRecipe"(arg0: C, arg1: R, arg2: $IRecipeSlotsView$Type, arg3: $Player$Type, arg4: boolean, arg5: boolean): $IRecipeTransferError
}

export namespace $IRecipeTransferHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferHandler$Type<C, R> = ($IRecipeTransferHandler<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferHandler_<C, R> = $IRecipeTransferHandler$Type<(C), (R)>;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<(I)> {

 "getBase"(arg0: I): B
 "getIngredientClass"(): $Class<(any)>
 "getIngredientBaseClass"(): $Class<(any)>
 "getUid"(): string
 "castIngredient"(arg0: any): $Optional<(I)>
}

export namespace $IIngredientTypeWithSubtypes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTypeWithSubtypes$Type<B, I> = ($IIngredientTypeWithSubtypes<(B), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTypeWithSubtypes_<B, I> = $IIngredientTypeWithSubtypes$Type<(B), (I)>;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiRuntime" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IEditModeConfig, $IEditModeConfig$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig"
import {$IJeiConfigManager, $IJeiConfigManager$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigManager"
import {$IIngredientFilter, $IIngredientFilter$Type} from "packages/mezz/jei/api/runtime/$IIngredientFilter"
import {$IBookmarkOverlay, $IBookmarkOverlay$Type} from "packages/mezz/jei/api/runtime/$IBookmarkOverlay"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$IIngredientListOverlay, $IIngredientListOverlay$Type} from "packages/mezz/jei/api/runtime/$IIngredientListOverlay"
import {$IRecipeManager, $IRecipeManager$Type} from "packages/mezz/jei/api/recipe/$IRecipeManager"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IJeiKeyMappings, $IJeiKeyMappings$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMappings"
import {$IScreenHelper, $IScreenHelper$Type} from "packages/mezz/jei/api/runtime/$IScreenHelper"
import {$IRecipeTransferManager, $IRecipeTransferManager$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IJeiRuntime {

 "getConfigManager"(): $IJeiConfigManager
 "getIngredientVisibility"(): $IIngredientVisibility
 "getIngredientListOverlay"(): $IIngredientListOverlay
 "getRecipeTransferManager"(): $IRecipeTransferManager
 "getJeiHelpers"(): $IJeiHelpers
 "getIngredientFilter"(): $IIngredientFilter
 "getIngredientManager"(): $IIngredientManager
 "getScreenHelper"(): $IScreenHelper
 "getKeyMappings"(): $IJeiKeyMappings
 "getBookmarkOverlay"(): $IBookmarkOverlay
 "getEditModeConfig"(): $IEditModeConfig
 "getRecipesGui"(): $IRecipesGui
 "getRecipeManager"(): $IRecipeManager
}

export namespace $IJeiRuntime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiRuntime$Type = ($IJeiRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiRuntime_ = $IJeiRuntime$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusFactory" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocusFactory {

 "createFocusGroup"(arg0: $Collection$Type<(any)>): $IFocusGroup
 "getEmptyFocusGroup"(): $IFocusGroup
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $ITypedIngredient$Type<(V)>): $IFocus<(V)>
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $IIngredientType$Type<(V)>, arg2: V): $IFocus<(V)>
}

export namespace $IFocusFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusFactory$Type = ($IFocusFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusFactory_ = $IFocusFactory$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableAnimated extends $IDrawable {

 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
}

export namespace $IDrawableAnimated {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$Type = ($IDrawableAnimated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated_ = $IDrawableAnimated$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientRenderer" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IIngredientRenderer<T> {

 "getTooltip"(arg0: T, arg1: $TooltipFlag$Type): $List<($Component)>
 "getWidth"(): integer
 "getHeight"(): integer
 "getFontRenderer"(arg0: $Minecraft$Type, arg1: T): $Font
 "render"(arg0: $GuiGraphics$Type, arg1: T): void
}

export namespace $IIngredientRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientRenderer$Type<T> = ($IIngredientRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientRenderer_<T> = $IIngredientRenderer$Type<(T)>;
}}
declare module "packages/mezz/jei/api/runtime/$IBookmarkOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IBookmarkOverlay {

 "getItemStackUnderMouse"(): $ItemStack
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
}

export namespace $IBookmarkOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookmarkOverlay$Type = ($IBookmarkOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookmarkOverlay_ = $IBookmarkOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IRecipeTransferError$Type extends $Enum<($IRecipeTransferError$Type)> {
static readonly "INTERNAL": $IRecipeTransferError$Type
static readonly "USER_FACING": $IRecipeTransferError$Type
static readonly "COSMETIC": $IRecipeTransferError$Type
readonly "allowsTransfer": boolean


public static "values"(): ($IRecipeTransferError$Type)[]
public static "valueOf"(arg0: string): $IRecipeTransferError$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type$Type = (("internal") | ("user_facing") | ("cosmetic")) | ($IRecipeTransferError$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError$Type_ = $IRecipeTransferError$Type$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMappings" {
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"

export interface $IJeiKeyMappings {

 "getShowRecipe"(): $IJeiKeyMapping
 "getShowUses"(): $IJeiKeyMapping
}

export namespace $IJeiKeyMappings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMappings$Type = ($IJeiKeyMappings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMappings_ = $IJeiKeyMappings$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeCatalystLookup {

 "get"<S>(arg0: $IIngredientType$Type<(S)>): $Stream<(S)>
 "get"(): $Stream<($ITypedIngredient<(any)>)>
 "getItemStack"(): $Stream<($ItemStack)>
 "includeHidden"(): $IRecipeCatalystLookup
}

export namespace $IRecipeCatalystLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCatalystLookup$Type = ($IRecipeCatalystLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCatalystLookup_ = $IRecipeCatalystLookup$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiProperties" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IGuiProperties {

 "getScreenWidth"(): integer
 "getScreenHeight"(): integer
 "getGuiTop"(): integer
 "getGuiLeft"(): integer
 "getGuiYSize"(): integer
 "getScreenClass"(): $Class<(any)>
 "getGuiXSize"(): integer
}

export namespace $IGuiProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiProperties$Type = ($IGuiProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiProperties_ = $IGuiProperties$Type;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IJeiConfigFile, $IJeiConfigFile$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigFile"

export interface $IJeiConfigManager {

 "getConfigFiles"(): $Collection<($IJeiConfigFile)>

(): $Collection<($IJeiConfigFile)>
}

export namespace $IJeiConfigManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigManager$Type = ($IJeiConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigManager_ = $IJeiConfigManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener" {
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager$IIngredientListener {

 "onIngredientsAdded"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
 "onIngredientsRemoved"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
}

export namespace $IIngredientManager$IIngredientListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$IIngredientListener$Type = ($IIngredientManager$IIngredientListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager$IIngredientListener_ = $IIngredientManager$IIngredientListener$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IClickableIngredient" {
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IClickableIngredient<T> {

 "getTypedIngredient"(): $ITypedIngredient<(T)>
 "getArea"(): $Rect2i
}

export namespace $IClickableIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableIngredient$Type<T> = ($IClickableIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClickableIngredient_<T> = $IClickableIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/runtime/$IScreenHelper" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$IGuiProperties, $IGuiProperties$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IGhostIngredientHandler, $IGhostIngredientHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import {$IGuiClickableArea, $IGuiClickableArea$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IScreenHelper {

 "getGuiProperties"<T extends $Screen>(arg0: T): $Optional<($IGuiProperties)>
 "getClickableIngredientUnderMouse"(arg0: $Screen$Type, arg1: double, arg2: double): $Stream<($IClickableIngredient<(any)>)>
 "getGuiClickableArea"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: double, arg2: double): $Stream<($IGuiClickableArea)>
 "getGuiExclusionAreas"(arg0: $Screen$Type): $Stream<($Rect2i)>
 "getGhostIngredientHandler"<T extends $Screen>(arg0: T): $Optional<($IGhostIngredientHandler<(T)>)>
}

export namespace $IScreenHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenHelper$Type = ($IScreenHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenHelper_ = $IScreenHelper$Type;
}}
