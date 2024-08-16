declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorInventoryMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResultContainer, $ResultContainer$Type} from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $AccessorInventoryMenu {

 "getOwner"(): $Player
 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
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
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorAbstractFurnaceBlockEntity" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessorAbstractFurnaceBlockEntity {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList<($ItemStack)>
}

export namespace $AccessorAbstractFurnaceBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractFurnaceBlockEntity$Type = ($AccessorAbstractFurnaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorAbstractFurnaceBlockEntity_ = $AccessorAbstractFurnaceBlockEntity$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTrimRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTrimRecipe {

 "getAddition"(): $Ingredient
 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTrimRecipe$Type = ($AccessorSmithingTrimRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTrimRecipe_ = $AccessorSmithingTrimRecipe$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTransformRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTransformRecipe {

 "getAddition"(): $Ingredient
 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTransformRecipe$Type = ($AccessorSmithingTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTransformRecipe_ = $AccessorSmithingTransformRecipe$Type;
}}
declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorCraftingMenu" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResultContainer, $ResultContainer$Type} from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $AccessorCraftingMenu {

 "getPlayer"(): $Player
 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
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
