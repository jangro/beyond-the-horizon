declare module "packages/cofh/ensorcellation/common/enchantment/curse/$CurseFoolEnchant" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $CurseFoolEnchant extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "isCurse"(): boolean
public "getMinCost"(arg0: integer): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurseFoolEnchant$Type = ($CurseFoolEnchant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurseFoolEnchant_ = $CurseFoolEnchant$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$FrostAspectEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FrostAspectEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public static "getExtraDamage"(arg0: integer): float
public static "validTarget"(arg0: $Entity$Type): boolean
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public static "onHit"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostAspectEnchantment$Type = ($FrostAspectEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostAspectEnchantment_ = $FrostAspectEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$PilferingEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $PilferingEnchantment extends $EnchantmentCoFH {
static "allowPlayerStealing": boolean
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PilferingEnchantment$Type = ($PilferingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PilferingEnchantment_ = $PilferingEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$PhalanxEnchantment" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $PhalanxEnchantment extends $EnchantmentCoFH {
static readonly "SPEED": double
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhalanxEnchantment$Type = ($PhalanxEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhalanxEnchantment_ = $PhalanxEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$SoulboundEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $SoulboundEnchantment extends $EnchantmentCoFH {
static "permanent": boolean
 "category": $EnchantmentCategory

constructor()

public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxLevel"(): integer
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulboundEnchantment$Type = ($SoulboundEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulboundEnchantment_ = $SoulboundEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$LeechEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $LeechEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeechEnchantment$Type = ($LeechEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeechEnchantment_ = $LeechEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$ExcavatingEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $ExcavatingEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingEnchantment$Type = ($ExcavatingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcavatingEnchantment_ = $ExcavatingEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$CavalierEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $CavalierEnchantment extends $EnchantmentCoFH {
static "damageMult": float
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CavalierEnchantment$Type = ($CavalierEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CavalierEnchantment_ = $CavalierEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$XpBoostEnchantment" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $XpBoostEnchantment extends $EnchantmentCoFH {
static "xp": integer
 "category": $EnchantmentCategory

constructor()

public static "getExp"(arg0: integer, arg1: integer, arg2: $RandomSource$Type): integer
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpBoostEnchantment$Type = ($XpBoostEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpBoostEnchantment_ = $XpBoostEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$ProtectionEnchantmentMagic" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $ProtectionEnchantmentMagic extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor(arg0: $Enchantment$Rarity$Type, arg1: ($EquipmentSlot$Type)[])

public "getMaxCost"(arg0: integer): integer
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getDamageProtection"(arg0: integer, arg1: $DamageSource$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectionEnchantmentMagic$Type = ($ProtectionEnchantmentMagic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtectionEnchantmentMagic_ = $ProtectionEnchantmentMagic$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$DamageEnderEnchantment" {
import {$DamageEnchantmentCoFH, $DamageEnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$DamageEnchantmentCoFH"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DamageEnderEnchantment extends $DamageEnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public static "validTarget"(arg0: $Entity$Type): boolean
public "doPostAttack"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageEnderEnchantment$Type = ($DamageEnderEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageEnderEnchantment_ = $DamageEnderEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$AnglerEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $AnglerEnchantment extends $EnchantmentCoFH {
static "chance": integer
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnglerEnchantment$Type = ($AnglerEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnglerEnchantment_ = $AnglerEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$InstigatingEnchantment" {
import {$DamageEnchantmentCoFH, $DamageEnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$DamageEnchantmentCoFH"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $InstigatingEnchantment extends $DamageEnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstigatingEnchantment$Type = ($InstigatingEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstigatingEnchantment_ = $InstigatingEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$VitalityEnchantment" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $VitalityEnchantment extends $EnchantmentCoFH {
static "health": integer
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VitalityEnchantment$Type = ($VitalityEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VitalityEnchantment_ = $VitalityEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$GourmandEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $GourmandEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GourmandEnchantment$Type = ($GourmandEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GourmandEnchantment_ = $GourmandEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$FrostRebukeEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FrostRebukeEnchantment extends $EnchantmentCoFH {
static "chance": integer
static "mobsAffectPlayers": boolean
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public static "shouldHit"(arg0: integer, arg1: $RandomSource$Type): boolean
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public static "onHit"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostRebukeEnchantment$Type = ($FrostRebukeEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostRebukeEnchantment_ = $FrostRebukeEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$ReachEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $ReachEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReachEnchantment$Type = ($ReachEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReachEnchantment_ = $ReachEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$TrueshotEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $TrueshotEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueshotEnchantment$Type = ($TrueshotEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrueshotEnchantment_ = $TrueshotEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$FireRebukeEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FireRebukeEnchantment extends $EnchantmentCoFH {
static "chance": integer
static "mobsAffectPlayers": boolean
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public static "setFireToMobs"(): void
public static "shouldHit"(arg0: integer, arg1: $RandomSource$Type): boolean
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public static "onHit"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireRebukeEnchantment$Type = ($FireRebukeEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireRebukeEnchantment_ = $FireRebukeEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$DamageVillagerEnchantment" {
import {$DamageEnchantmentCoFH, $DamageEnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$DamageEnchantmentCoFH"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DamageVillagerEnchantment extends $DamageEnchantmentCoFH {
static "enableEmeraldDrops": boolean
 "category": $EnchantmentCategory

constructor()

public static "validTarget"(arg0: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageVillagerEnchantment$Type = ($DamageVillagerEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageVillagerEnchantment_ = $DamageVillagerEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/curse/$CurseMercyEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $CurseMercyEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "isCurse"(): boolean
public "getMinCost"(arg0: integer): integer
get "curse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurseMercyEnchantment$Type = ($CurseMercyEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurseMercyEnchantment_ = $CurseMercyEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$AirAffinityEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $AirAffinityEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirAffinityEnchantment$Type = ($AirAffinityEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirAffinityEnchantment_ = $AirAffinityEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$VolleyEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $VolleyEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolleyEnchantment$Type = ($VolleyEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolleyEnchantment_ = $VolleyEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$DamageIllagerEnchantment" {
import {$DamageEnchantmentCoFH, $DamageEnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$DamageEnchantmentCoFH"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DamageIllagerEnchantment extends $DamageEnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public static "validTarget"(arg0: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageIllagerEnchantment$Type = ($DamageIllagerEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageIllagerEnchantment_ = $DamageIllagerEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$MagicEdgeEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DamageEnchantmentCoFH, $DamageEnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$DamageEnchantmentCoFH"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MagicEdgeEnchantment extends $DamageEnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public static "getExtraDamage"(arg0: integer): float
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public static "onHit"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicEdgeEnchantment$Type = ($MagicEdgeEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicEdgeEnchantment_ = $MagicEdgeEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$QuickdrawEnchantment" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $QuickdrawEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickdrawEnchantment$Type = ($QuickdrawEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuickdrawEnchantment_ = $QuickdrawEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$HunterEnchantment" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $HunterEnchantment extends $EnchantmentCoFH {
static "chance": integer
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HunterEnchantment$Type = ($HunterEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HunterEnchantment_ = $HunterEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$VorpalEnchantment" {
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $VorpalEnchantment extends $EnchantmentCoFH {
static "critBase": integer
static "critLevel": integer
static "critDamage": integer
static "headBase": integer
static "headLevel": integer
 "category": $EnchantmentCategory

constructor()

public "getMinCost"(arg0: integer): integer
public static "onHit"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VorpalEnchantment$Type = ($VorpalEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VorpalEnchantment_ = $VorpalEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$DisplacementEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DisplacementEnchantment extends $EnchantmentCoFH {
static "chance": integer
static "mobsAffectPlayers": boolean
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
public static "shouldHit"(arg0: integer, arg1: $RandomSource$Type): boolean
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "m_5975_"(arg0: $Enchantment$Type): boolean
public "getMinCost"(arg0: integer): integer
public static "onHit"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplacementEnchantment$Type = ($DisplacementEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplacementEnchantment_ = $DisplacementEnchantment$Type;
}}
declare module "packages/cofh/ensorcellation/common/enchantment/$BulwarkEnchantment" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$EnchantmentCoFH, $EnchantmentCoFH$Type} from "packages/cofh/lib/common/enchantment/$EnchantmentCoFH"

export class $BulwarkEnchantment extends $EnchantmentCoFH {
 "category": $EnchantmentCategory

constructor()

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulwarkEnchantment$Type = ($BulwarkEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulwarkEnchantment_ = $BulwarkEnchantment$Type;
}}
