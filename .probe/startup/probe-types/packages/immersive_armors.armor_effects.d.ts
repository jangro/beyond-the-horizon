declare module "packages/immersive_armors/armor_effects/$ArmorEffect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ArmorEffect {

constructor()

public "applyArmorToDamage"(entity: $LivingEntity$Type, source: $DamageSource$Type, amount: float, armor: $ItemStack$Type): float
public "applyArmorToAttack"(target: $LivingEntity$Type, source: $DamageSource$Type, amount: float, armor: $ItemStack$Type): float
public "receiveCommand"(armor: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type, slot: integer, command: string): void
public "equippedTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type, slot: integer): void
public "appendTooltip"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorEffect$Type = ($ArmorEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorEffect_ = $ArmorEffect$Type;
}}
