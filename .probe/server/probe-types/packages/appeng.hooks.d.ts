declare module "packages/appeng/hooks/$IBlockTool" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export interface $IBlockTool {

 "m_6225_"(arg0: $UseOnContext$Type): $InteractionResult

(arg0: $UseOnContext$Type): $InteractionResult
}

export namespace $IBlockTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockTool$Type = ($IBlockTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockTool_ = $IBlockTool$Type;
}}
declare module "packages/appeng/hooks/$IntrinsicEnchantItem" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IntrinsicEnchantItem {

 "getIntrinsicEnchantLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer

(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
}

export namespace $IntrinsicEnchantItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntrinsicEnchantItem$Type = ($IntrinsicEnchantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntrinsicEnchantItem_ = $IntrinsicEnchantItem$Type;
}}
declare module "packages/appeng/hooks/$AEToolItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AEToolItem {

}

export namespace $AEToolItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEToolItem$Type = ($AEToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEToolItem_ = $AEToolItem$Type;
}}
