declare module "packages/cofh/lib/common/enchantment/$DamageEnchantmentCoFH" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $DamageEnchantmentCoFH extends $EnchantmentCoFH {
 "category": $EnchantmentCategory


public static "getExtraDamage"(arg0: integer): float
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageEnchantmentCoFH$Type = ($DamageEnchantmentCoFH);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageEnchantmentCoFH_ = $DamageEnchantmentCoFH$Type;
}}
declare module "packages/cofh/lib/common/effect/$CustomParticleMobEffect" {
import {$MobEffectCoFH, $MobEffectCoFH$Type} from "packages/cofh/lib/common/effect/$MobEffectCoFH"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $CustomParticleMobEffect extends $MobEffectCoFH {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getChance"(): integer
public "onApply"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "onTrack"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: $Player$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "onRemove"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "getParticle"(): $ParticleOptions
get "chance"(): integer
get "particle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomParticleMobEffect$Type = ($CustomParticleMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomParticleMobEffect_ = $CustomParticleMobEffect$Type;
}}
declare module "packages/cofh/lib/common/enchantment/$EnchantmentCoFH" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentCoFH extends $Enchantment {
 "category": $EnchantmentCategory


public "setEnable"(arg0: boolean): $EnchantmentCoFH
public "setMaxLevel"(arg0: integer): $EnchantmentCoFH
public "setTreasureEnchantment"(arg0: boolean): $EnchantmentCoFH
public "isEnabled"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getDescriptionId"(): string
public "setAllowOnBooks"(arg0: boolean): $EnchantmentCoFH
public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "isTreasureOnly"(): boolean
public "isAllowedOnBooks"(): boolean
public "isDiscoverable"(): boolean
public "isTradeable"(): boolean
set "enable"(value: boolean)
set "maxLevel"(value: integer)
set "treasureEnchantment"(value: boolean)
get "enabled"(): boolean
get "descriptionId"(): string
set "allowOnBooks"(value: boolean)
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "allowedOnBooks"(): boolean
get "discoverable"(): boolean
get "tradeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentCoFH$Type = ($EnchantmentCoFH);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentCoFH_ = $EnchantmentCoFH$Type;
}}
declare module "packages/cofh/lib/common/effect/$MobEffectCoFH" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobEffectCoFH extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "onApply"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "onTrack"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type, arg2: $Player$Type): void
public "onExpire"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyInstantenousEffect"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: double): void
public "onRemove"(arg0: $LivingEntity$Type, arg1: $MobEffectInstance$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectCoFH$Type = ($MobEffectCoFH);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectCoFH_ = $MobEffectCoFH$Type;
}}
