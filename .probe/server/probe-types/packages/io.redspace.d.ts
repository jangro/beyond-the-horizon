declare module "packages/io/redspace/ironsspellbooks/item/curios/$SimpleAttributeCurio" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$CurioBaseItem, $CurioBaseItem$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleAttributeCurio extends $CurioBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Attribute$Type, arg2: $AttributeModifier$Type)

public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAttributeCurio$Type = ($SimpleAttributeCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleAttributeCurio_ = $SimpleAttributeCurio$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/attribute/$MagicRangedAttribute" {
import {$IMagicAttribute, $IMagicAttribute$Type} from "packages/io/redspace/ironsspellbooks/api/attribute/$IMagicAttribute"
import {$RangedAttribute, $RangedAttribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute"

export class $MagicRangedAttribute extends $RangedAttribute implements $IMagicAttribute {
static readonly "MAX_NAME_LENGTH": integer

constructor(arg0: string, arg1: double, arg2: double, arg3: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicRangedAttribute$Type = ($MagicRangedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicRangedAttribute_ = $MagicRangedAttribute$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$SpiderAspectEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $SpiderAspectEffect extends $MagicMobEffect {
static readonly "DAMAGE_PER_LEVEL": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderAspectEffect$Type = ($SpiderAspectEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiderAspectEffect_ = $SpiderAspectEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AngelWingsEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AngelWingsEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AngelWingsEffect$Type = ($AngelWingsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AngelWingsEffect_ = $AngelWingsEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$EchoingStrikesEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$LivingHurtEvent, $LivingHurtEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHurtEvent"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EchoingStrikesEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "createEcho"(arg0: $LivingHurtEvent$Type): void
public static "getDamageModifier"(arg0: integer, arg1: $LivingEntity$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoingStrikesEffect$Type = ($EchoingStrikesEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EchoingStrikesEffect_ = $EchoingStrikesEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$BloodCauldronBlock$CookExecution" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BloodCauldronBlock$CookExecution {

 "execute"(): void

(): void
}

export namespace $BloodCauldronBlock$CookExecution {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodCauldronBlock$CookExecution$Type = ($BloodCauldronBlock$CookExecution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodCauldronBlock$CookExecution_ = $BloodCauldronBlock$CookExecution$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$HitherThitherWand" {
import {$UniqueItem, $UniqueItem$Type} from "packages/io/redspace/ironsspellbooks/item/$UniqueItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HitherThitherWand extends $Item implements $IPresetSpellContainer, $UniqueItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitherThitherWand$Type = ($HitherThitherWand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitherThitherWand_ = $HitherThitherWand$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$FirewardRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FirewardRing extends $SimpleDescriptiveCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirewardRing$Type = ($FirewardRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirewardRing_ = $FirewardRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$TarnishedCrownArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TarnishedCrownArmorItem extends $ExtendedArmorItem implements $IPresetSpellContainer {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TarnishedCrownArmorItem$Type = ($TarnishedCrownArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TarnishedCrownArmorItem_ = $TarnishedCrownArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AbyssalShroudEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AbyssalShroudEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "doEffect"(arg0: $LivingEntity$Type, arg1: $DamageSource$Type): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public static "ambientParticles"(arg0: $ClientLevel$Type, arg1: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbyssalShroudEffect$Type = ($AbyssalShroudEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbyssalShroudEffect_ = $AbyssalShroudEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$RecastResult, $RecastResult$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastResult"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DefaultConfig, $DefaultConfig$Type} from "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$ICastDataSerializable, $ICastDataSerializable$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastDataSerializable"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$RecastInstance, $RecastInstance$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AnimationHolder, $AnimationHolder$Type} from "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$SpellDamageSource, $SpellDamageSource$Type} from "packages/io/redspace/ironsspellbooks/damage/$SpellDamageSource"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CastResult, $CastResult$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastResult"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $AbstractSpell {

constructor()

public "getSpellId"(): string
public "getComponentId"(): string
public "getDamageSource"(arg0: $Entity$Type): $SpellDamageSource
public "getDamageSource"(arg0: $Entity$Type, arg1: $Entity$Type): $SpellDamageSource
public "getSpellCooldown"(): integer
public "getCastType"(): $CastType
public "onServerCastTick"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type): void
public "getTargetingColor"(): $Vector3f
public "getSchoolType"(): $SchoolType
public "getSpellResource"(): $ResourceLocation
public "getLevelFor"(arg0: integer, arg1: $LivingEntity$Type): integer
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$Type): integer
public "getMinRarity"(): integer
public "getSpellPower"(arg0: integer, arg1: $Entity$Type): float
public "canBeCastedBy"(arg0: integer, arg1: $CastSource$Type, arg2: $MagicData$Type, arg3: $Player$Type): $CastResult
public "getCastTime"(arg0: integer): integer
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getEmptyCastData"(): $ICastDataSerializable
public "onClientCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $ICastData$Type): void
public "onServerPreCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$Type, arg1: $RecastInstance$Type, arg2: $RecastResult$Type, arg3: $ICastDataSerializable$Type): void
public "onClientPreCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type, arg4: $MagicData$Type): void
public "getMaxRarity"(): integer
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$Type): $List<($MutableComponent)>
public "allowCrafting"(): boolean
public "allowLooting"(): boolean
public "needsLearning"(): boolean
public "getDeathMessageId"(): string
public "canBeCraftedBy"(arg0: $Player$Type): boolean
public "obfuscateStats"(arg0: $Player$Type): boolean
public "isLearned"(arg0: $Player$Type): boolean
public "stopSoundOnCancel"(): boolean
public "getManaCost"(arg0: integer): integer
public "castSpell"(arg0: $Level$Type, arg1: integer, arg2: $ServerPlayer$Type, arg3: $CastSource$Type, arg4: boolean): void
public "onServerCastComplete"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type, arg4: boolean): void
public "getMinLevelForRarity"(arg0: $SpellRarity$Type): integer
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$Type, arg2: $LivingEntity$Type): boolean
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$Type): integer
public "getEntityPowerMultiplier"(arg0: $LivingEntity$Type): float
public "getSpellIconResource"(): $ResourceLocation
public "getCastStartAnimation"(): $AnimationHolder
public "getCastFinishAnimation"(): $AnimationHolder
public "attemptInitiateCast"(arg0: $ItemStack$Type, arg1: integer, arg2: $Level$Type, arg3: $Player$Type, arg4: $CastSource$Type, arg5: boolean, arg6: string): boolean
public "checkPreCastConditions"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $MagicData$Type): boolean
public "canBeInterrupted"(arg0: $Player$Type): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getDisplayName"(arg0: $Player$Type): $MutableComponent
public "isEnabled"(): boolean
public "getMaxLevel"(): integer
public "getMinLevel"(): integer
public "playSound"(arg0: $Optional$Type<($SoundEvent$Type)>, arg1: $Entity$Type): void
public "onCast"(arg0: $Level$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $CastSource$Type, arg4: $MagicData$Type): void
public "getRarity"(arg0: integer): $SpellRarity
public "getSpellName"(): string
get "spellId"(): string
get "componentId"(): string
get "spellCooldown"(): integer
get "castType"(): $CastType
get "targetingColor"(): $Vector3f
get "schoolType"(): $SchoolType
get "spellResource"(): $ResourceLocation
get "minRarity"(): integer
get "defaultConfig"(): $DefaultConfig
get "castStartSound"(): $Optional<($SoundEvent)>
get "castFinishSound"(): $Optional<($SoundEvent)>
get "emptyCastData"(): $ICastDataSerializable
get "maxRarity"(): integer
get "deathMessageId"(): string
get "spellIconResource"(): $ResourceLocation
get "castStartAnimation"(): $AnimationHolder
get "castFinishAnimation"(): $AnimationHolder
get "enabled"(): boolean
get "maxLevel"(): integer
get "minLevel"(): integer
get "spellName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpell$Type = ($AbstractSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpell_ = $AbstractSpell$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$ICastData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICastData {

 "reset"(): void

(): void
}

export namespace $ICastData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastData$Type = ($ICastData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICastData_ = $ICastData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$StaffItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CastingItem, $CastingItem$Type} from "packages/io/redspace/ironsspellbooks/item/$CastingItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffItem extends $CastingItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: double, arg2: double, arg3: $Map$Type<($Attribute$Type), ($AttributeModifier$Type)>)

public "getEnchantmentValue"(): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffItem$Type = ($StaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffItem_ = $StaffItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/player/$SpinAttackType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SpinAttackType extends $Enum<($SpinAttackType)> {
static readonly "FIRE": $SpinAttackType
static readonly "RIPTIDE": $SpinAttackType


public static "values"(): ($SpinAttackType)[]
public static "valueOf"(arg0: string): $SpinAttackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinAttackType$Type = (("fire") | ("riptide")) | ($SpinAttackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpinAttackType_ = $SpinAttackType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MagicMobEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicMobEffect$Type = ($MagicMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicMobEffect_ = $MagicMobEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicSwordItem extends $ExtendedSwordItem implements $IPresetSpellContainer {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: double, arg2: double, arg3: ($SpellDataRegistryHolder$Type)[], arg4: $Map$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg5: $Item$Properties$Type)

public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "getSpells"(): $List<($SpellData)>
get "spells"(): $List<($SpellData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$Type = ($MagicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicSwordItem_ = $MagicSwordItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$AffinityRing" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AffinityRing extends $SimpleDescriptiveCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffinityRing$Type = ($AffinityRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AffinityRing_ = $AffinityRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$SpellSlotUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellSlotUpgradeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: integer)

public "maxSlots"(): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSlotUpgradeItem$Type = ($SpellSlotUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSlotUpgradeItem_ = $SpellSlotUpgradeItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PlaguedArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlaguedArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaguedArmorItem$Type = ($PlaguedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaguedArmorItem_ = $PlaguedArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/gui/overlays/$SpellSelection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ISerializable, $ISerializable$Type} from "packages/io/redspace/ironsspellbooks/api/network/$ISerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $SpellSelection implements $ISerializable, $INBTSerializable<($CompoundTag)> {
 "equipmentSlot": string
 "index": integer
 "lastEquipmentSlot": string
 "lastIndex": integer

constructor(arg0: string, arg1: integer, arg2: string, arg3: integer)
constructor(arg0: string, arg1: integer)
constructor()

public "toString"(): string
public "isEmpty"(): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
public "makeSelection"(arg0: string, arg1: integer): void
public "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelection$Type = ($SpellSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelection_ = $SpellSelection$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPresetSpellContainer {

 "initializeSpellContainer"(arg0: $ItemStack$Type): void

(arg0: $ItemStack$Type): void
}

export namespace $IPresetSpellContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPresetSpellContainer$Type = ($IPresetSpellContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPresetSpellContainer_ = $IPresetSpellContainer$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$WaywardCompass" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WaywardCompass extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "missingWarning"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getCatacombsLocation"(arg0: $Entity$Type, arg1: $CompoundTag$Type): $GlobalPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaywardCompass$Type = ($WaywardCompass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaywardCompass_ = $WaywardCompass$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$GoldCrownArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoldCrownArmorItem extends $ExtendedArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldCrownArmorItem$Type = ($GoldCrownArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldCrownArmorItem_ = $GoldCrownArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$BloodCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LayeredCauldronBlock, $LayeredCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$LayeredCauldronBlock"
import {$Biome$Precipitation, $Biome$Precipitation$Type} from "packages/net/minecraft/world/level/biome/$Biome$Precipitation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BloodCauldronBlock$CookExecution, $BloodCauldronBlock$CookExecution$Type} from "packages/io/redspace/ironsspellbooks/block/$BloodCauldronBlock$CookExecution"

export class $BloodCauldronBlock extends $LayeredCauldronBlock {
static readonly "NO_WEATHER": $Predicate<($Biome$Precipitation)>
static readonly "MIN_FILL_LEVEL": integer
static readonly "MAX_FILL_LEVEL": integer
static readonly "LEVEL": $IntegerProperty
static readonly "RAIN": $Predicate<($Biome$Precipitation)>
static readonly "SNOW": $Predicate<($Biome$Precipitation)>
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
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

constructor()

public static "getInteractionMap"(): $Map<($Item), ($CauldronInteraction)>
public static "attemptCookEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: $BloodCauldronBlock$CookExecution$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
get "interactionMap"(): $Map<($Item), ($CauldronInteraction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodCauldronBlock$Type = ($BloodCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodCauldronBlock_ = $BloodCauldronBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$BlightEffect" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$LivingHealEvent, $LivingHealEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingHealEvent"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $BlightEffect extends $MagicMobEffect {
static readonly "DAMAGE_PER_LEVEL": float
static readonly "HEALING_PER_LEVEL": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "reduceHealing"(arg0: $LivingHealEvent$Type): void
public static "reduceDamageOutput"(arg0: $LivingDamageEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightEffect$Type = ($BlightEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlightEffect_ = $BlightEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$HeartstopEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $HeartstopEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartstopEffect$Type = ($HeartstopEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartstopEffect_ = $HeartstopEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$NetheriteMageArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetheriteMageArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteMageArmorItem$Type = ($NetheriteMageArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteMageArmorItem_ = $NetheriteMageArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ArmorCapeProvider" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ArmorCapeProvider {

 "getCapeResourceLocation"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $ArmorCapeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorCapeProvider$Type = ($ArmorCapeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorCapeProvider_ = $ArmorCapeProvider$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$SpellData" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"

export class $SpellData implements $Comparable<($SpellData)> {
static readonly "SPELL_ID": string
static readonly "SPELL_LEVEL": string
static readonly "SPELL_LOCKED": string
static readonly "EMPTY": $SpellData

constructor(arg0: $AbstractSpell$Type, arg1: integer)
constructor(arg0: $AbstractSpell$Type, arg1: integer, arg2: boolean)

public "isLocked"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $SpellData$Type): integer
public "getDisplayName"(): $Component
public "canRemove"(): boolean
public "getSpell"(): $AbstractSpell
public "getLevel"(): integer
public "getRarity"(): $SpellRarity
get "locked"(): boolean
get "displayName"(): $Component
get "spell"(): $AbstractSpell
get "level"(): integer
get "rarity"(): $SpellRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellData$Type = ($SpellData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellData_ = $SpellData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$DragonskinItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DragonskinItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonskinItem$Type = ($DragonskinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonskinItem_ = $DragonskinItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/network/$ISerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ISerializable {

 "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $ISerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializable$Type = ($ISerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializable_ = $ISerializable$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$IronsExtendedArmorMaterial" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export interface $IronsExtendedArmorMaterial extends $ArmorMaterial {

 "getAdditionalAttributes"(): $Map<($Attribute), ($AttributeModifier)>
 "getDefenseForType"(arg0: $ArmorItem$Type$Type): integer
 "getRepairIngredient"(): $Ingredient
 "getKnockbackResistance"(): float
 "getDurabilityForType"(arg0: $ArmorItem$Type$Type): integer
 "getEquipSound"(): $SoundEvent
 "getToughness"(): float
 "getEnchantmentValue"(): integer
 "getName"(): string
}

export namespace $IronsExtendedArmorMaterial {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronsExtendedArmorMaterial$Type = ($IronsExtendedArmorMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronsExtendedArmorMaterial_ = $IronsExtendedArmorMaterial$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DefaultConfig {
 "minRarity": $SpellRarity
 "schoolResource": $ResourceLocation
 "maxLevel": integer
 "enabled": boolean
 "cooldownInSeconds": double
 "allowCrafting": boolean

constructor(arg0: $Consumer$Type<($DefaultConfig$Type)>)
constructor()

public "setMaxLevel"(arg0: integer): $DefaultConfig
public "setMinRarity"(arg0: $SpellRarity$Type): $DefaultConfig
public "setSchoolResource"(arg0: $ResourceLocation$Type): $DefaultConfig
public "setCooldownSeconds"(arg0: double): $DefaultConfig
public "build"(): $DefaultConfig
public "setDeprecated"(arg0: boolean): $DefaultConfig
public "setAllowCrafting"(arg0: boolean): $DefaultConfig
set "maxLevel"(value: integer)
set "minRarity"(value: $SpellRarity$Type)
set "schoolResource"(value: $ResourceLocation$Type)
set "cooldownSeconds"(value: double)
set "deprecated"(value: boolean)
set "allowCrafting"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultConfig$Type = ($DefaultConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultConfig_ = $DefaultConfig$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PyromancerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PyromancerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PyromancerArmorItem$Type = ($PyromancerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PyromancerArmorItem_ = $PyromancerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AscensionEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AscensionEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public static "ambientParticles"(arg0: $ClientLevel$Type, arg1: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AscensionEffect$Type = ($AscensionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AscensionEffect_ = $AscensionEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$KeeperFlambergeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeeperFlambergeItem extends $ExtendedSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeeperFlambergeItem$Type = ($KeeperFlambergeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeeperFlambergeItem_ = $KeeperFlambergeItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$FortifyEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FortifyEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FortifyEffect$Type = ($FortifyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FortifyEffect_ = $FortifyEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$WanderingMagicianArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WanderingMagicianArmorItem extends $ExtendedArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderingMagicianArmorItem$Type = ($WanderingMagicianArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderingMagicianArmorItem_ = $WanderingMagicianArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$NetherwardTinctureItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetherwardTinctureItem extends $DrinkableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getDrinkingSound"(): $SoundEvent
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherwardTinctureItem$Type = ($NetherwardTinctureItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetherwardTinctureItem_ = $NetherwardTinctureItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$FireflyJar" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FireflyJar extends $Block {
static readonly "SHAPE": $VoxelShape
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireflyJar$Type = ($FireflyJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireflyJar_ = $FireflyJar$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/scroll_forge/$ScrollForgeBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ScrollForgeBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_TABLETOP": $VoxelShape
static readonly "SHAPE_LEG_1": $VoxelShape
static readonly "SHAPE_LEG_2": $VoxelShape
static readonly "SHAPE": $VoxelShape
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollForgeBlock$Type = ($ScrollForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollForgeBlock_ = $ScrollForgeBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/magic/$MagicData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerRecasts, $PlayerRecasts$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerRecasts"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PlayerCooldowns, $PlayerCooldowns$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerCooldowns"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$SyncedSpellData, $SyncedSpellData$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $MagicData {
static readonly "MANA": string
static readonly "COOLDOWNS": string
static readonly "RECASTS": string

constructor(arg0: $ServerPlayer$Type)
constructor()
constructor(arg0: boolean)

public "getCastingSpell"(): $SpellData
public "getCastingSpellId"(): string
public "getCastSource"(): $CastSource
public "getCastType"(): $CastType
public "handleCastDuration"(): void
public "getPlayerRecasts"(): $PlayerRecasts
public "getPlayerCooldowns"(): $PlayerCooldowns
public "initiateCast"(arg0: $AbstractSpell$Type, arg1: integer, arg2: integer, arg3: $CastSource$Type, arg4: string): void
public "resetCastingState"(): void
public "getSyncedData"(): $SyncedSpellData
public "getCastDurationRemaining"(): integer
public "getCastingSpellLevel"(): integer
public "getAdditionalCastData"(): $ICastData
public "setPlayerCastingItem"(arg0: $ItemStack$Type): void
public "setAdditionalCastData"(arg0: $ICastData$Type): void
public "resetAdditionalCastData"(): void
public "setSyncedData"(arg0: $SyncedSpellData$Type): void
public "saveNBTData"(arg0: $CompoundTag$Type): void
public "loadNBTData"(arg0: $CompoundTag$Type): void
public "setPlayerRecasts"(arg0: $PlayerRecasts$Type): void
public "toString"(): string
public "isCasting"(): boolean
public "addMana"(arg0: float): void
public "setMana"(arg0: float): void
public "popMarkedPoison"(): boolean
public "getCastDuration"(): integer
public "getMana"(): float
public "setServerPlayer"(arg0: $ServerPlayer$Type): void
public static "getPlayerMagicData"(arg0: $LivingEntity$Type): $MagicData
public "markPoisoned"(): void
public "getPlayerCastingItem"(): $ItemStack
public "getCastCompletionPercent"(): float
public "getCastingEquipmentSlot"(): string
get "castingSpell"(): $SpellData
get "castingSpellId"(): string
get "castSource"(): $CastSource
get "castType"(): $CastType
get "playerRecasts"(): $PlayerRecasts
get "playerCooldowns"(): $PlayerCooldowns
get "syncedData"(): $SyncedSpellData
get "castDurationRemaining"(): integer
get "castingSpellLevel"(): integer
get "additionalCastData"(): $ICastData
set "playerCastingItem"(value: $ItemStack$Type)
set "additionalCastData"(value: $ICastData$Type)
set "syncedData"(value: $SyncedSpellData$Type)
set "playerRecasts"(value: $PlayerRecasts$Type)
get "casting"(): boolean
set "mana"(value: float)
get "castDuration"(): integer
get "mana"(): float
set "serverPlayer"(value: $ServerPlayer$Type)
get "playerCastingItem"(): $ItemStack
get "castCompletionPercent"(): float
get "castingEquipmentSlot"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicData$Type = ($MagicData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicData_ = $MagicData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CastType extends $Enum<($CastType)> {
static readonly "NONE": $CastType
static readonly "INSTANT": $CastType
static readonly "LONG": $CastType
static readonly "CONTINUOUS": $CastType


public "immediatelySuppressRightClicks"(): boolean
/**
 * 
 * @deprecated
 */
public "holdToCast"(): boolean
public static "values"(): ($CastType)[]
public static "valueOf"(arg0: string): $CastType
public "getValue"(): integer
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastType$Type = (("continuous") | ("none") | ("long") | ("instant")) | ($CastType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastType_ = $CastType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedSwordItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Tier$Type, arg1: double, arg2: double, arg3: $Map$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg4: $Item$Properties$Type)

public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSwordItem$Type = ($ExtendedSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSwordItem_ = $ExtendedSwordItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$InstantManaEffect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomDescriptionMobEffect, $CustomDescriptionMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InstantManaEffect extends $CustomDescriptionMobEffect {
static readonly "manaPerAmplifier": integer
static readonly "manaPerAmplifierPercent": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyInstantenousEffect"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: double): void
public "isInstantenous"(): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantManaEffect$Type = ($InstantManaEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstantManaEffect_ = $InstantManaEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$RendEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $RendEffect extends $MobEffect {
static readonly "ARMOR_PER_LEVEL": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendEffect$Type = ($RendEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendEffect_ = $RendEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$ICastDataSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$ISerializable, $ISerializable$Type} from "packages/io/redspace/ironsspellbooks/api/network/$ISerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $ICastDataSerializable extends $ICastData, $ISerializable, $INBTSerializable<($CompoundTag)> {

 "reset"(): void
 "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $ICastDataSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastDataSerializable$Type = ($ICastDataSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICastDataSerializable_ = $ICastDataSerializable$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$SpellBook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CurioBaseItem, $CurioBaseItem$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ISpellbook, $ISpellbook$Type} from "packages/io/redspace/ironsspellbooks/api/item/$ISpellbook"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellBook extends $CurioBaseItem implements $ISpellbook, $IPresetSpellContainer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Item$Properties$Type)
constructor(arg0: integer, arg1: $SpellRarity$Type)
constructor()

public "isUnique"(): boolean
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "getMaxSpellSlots"(): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(): $SpellRarity
get "unique"(): boolean
get "maxSpellSlots"(): integer
get "rarity"(): $SpellRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBook$Type = ($SpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellBook_ = $SpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$CultistArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CultistArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CultistArmorItem$Type = ($CultistArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CultistArmorItem_ = $CultistArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$SpellbreakerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicSwordItem, $MagicSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellbreakerItem extends $MagicSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: ($SpellDataRegistryHolder$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellbreakerItem$Type = ($SpellbreakerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellbreakerItem_ = $SpellbreakerItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$FireAleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FireAleItem extends $DrinkableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getMaxStackSize"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireAleItem$Type = ($FireAleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireAleItem_ = $FireAleItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$AutoloaderCrossbow" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
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
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$CrossbowItem, $CrossbowItem$Type} from "packages/net/minecraft/world/item/$CrossbowItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AutoloaderCrossbow extends $CrossbowItem {
static readonly "LOADING": string
static readonly "LOADING_TIMESTAMP": string
static readonly "DEFAULT_RANGE": integer
 "startSoundPlayed": boolean
 "midLoadSoundPlayed": boolean
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "isLoading"(arg0: $ItemStack$Type): boolean
public static "startLoading"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "getLoadingTicks"(arg0: $ItemStack$Type): integer
public static "setLoadingTicks"(arg0: $ItemStack$Type, arg1: integer): void
public static "setLoading"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getChargeDuration"(arg0: $ItemStack$Type): integer
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoloaderCrossbow$Type = ($AutoloaderCrossbow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoloaderCrossbow_ = $AutoloaderCrossbow$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CurioBaseItem, $CurioBaseItem$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleDescriptiveCurio extends $CurioBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: string)
constructor(arg0: $Item$Properties$Type)

public "getDescription"(arg0: $ItemStack$Type): $Component
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "getDescriptionLines"(arg0: $ItemStack$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDescriptiveCurio$Type = ($SimpleDescriptiveCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDescriptiveCurio_ = $SimpleDescriptiveCurio$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$IMultihandWeapon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMultihandWeapon {

}

export namespace $IMultihandWeapon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultihandWeapon$Type = ($IMultihandWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultihandWeapon_ = $IMultihandWeapon$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$EldritchManuscript" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
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

export class $EldritchManuscript extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EldritchManuscript$Type = ($EldritchManuscript);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EldritchManuscript_ = $EldritchManuscript$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $SpellRarity extends $Enum<($SpellRarity)> {
static readonly "COMMON": $SpellRarity
static readonly "UNCOMMON": $SpellRarity
static readonly "RARE": $SpellRarity
static readonly "EPIC": $SpellRarity
static readonly "LEGENDARY": $SpellRarity


public static "getRawRarityConfig"(): $List<(double)>
public static "getRarityConfig"(): $List<(double)>
public static "values"(): ($SpellRarity)[]
public static "valueOf"(arg0: string): $SpellRarity
public "getValue"(): integer
public "getDisplayName"(): $MutableComponent
public static "rarityTest"(): void
public "getChatFormatting"(): $ChatFormatting
public "compareRarity"(arg0: $SpellRarity$Type): integer
get "rawRarityConfig"(): $List<(double)>
get "rarityConfig"(): $List<(double)>
get "value"(): integer
get "displayName"(): $MutableComponent
get "chatFormatting"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellRarity$Type = (("uncommon") | ("common") | ("legendary") | ("rare") | ("epic")) | ($SpellRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellRarity_ = $SpellRarity$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationHolder {
readonly "isPass": boolean
readonly "animatesLegs": boolean

constructor(arg0: string, arg1: boolean)
constructor(arg0: string, arg1: boolean, arg2: boolean)

public "getForMob"(): $Optional<($RawAnimation)>
public static "pass"(): $AnimationHolder
public static "none"(): $AnimationHolder
public "getForPlayer"(): $Optional<($ResourceLocation)>
get "forMob"(): $Optional<($RawAnimation)>
get "forPlayer"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationHolder$Type = ($AnimationHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationHolder_ = $AnimationHolder$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$SyncedSpellData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$SpinAttackType, $SpinAttackType$Type} from "packages/io/redspace/ironsspellbooks/player/$SpinAttackType"
import {$SpellSelection, $SpellSelection$Type} from "packages/io/redspace/ironsspellbooks/gui/overlays/$SpellSelection"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SyncedSpellData {
static readonly "ANGEL_WINGS": long
static readonly "EVASION": long
static readonly "HEARTSTOP": long
static readonly "ABYSSAL_SHROUD": long
static readonly "ASCENSION": long
static readonly "TRUE_INVIS": long
static readonly "CHARGED": long
static readonly "PLANAR_SIGHT": long
static readonly "HEAL_TARGET": long
static readonly "SYNCED_SPELL_DATA": $EntityDataSerializer<($SyncedSpellData)>

constructor(arg0: $LivingEntity$Type)
constructor(arg0: integer)

public "getCastingSpellId"(): string
public "setSpinAttackType"(arg0: $SpinAttackType$Type): void
public "getCastingSpellLevel"(): integer
public "getServerPlayerId"(): integer
public "hasLocalEffect"(arg0: long): boolean
public "hasDodgeEffect"(): boolean
public "removeLocalEffect"(arg0: long): void
public "getSpellSelection"(): $SpellSelection
public "addLocalEffect"(arg0: long): void
public "forgetAllSpells"(): void
public "saveNBTData"(arg0: $CompoundTag$Type): void
public "loadNBTData"(arg0: $CompoundTag$Type): void
public "subtractEvasionHit"(): void
public "addEffects"(arg0: long): void
public "removeEffects"(arg0: long): void
public "setIsCasting"(arg0: boolean, arg1: string, arg2: integer, arg3: string): void
public "learnSpell"(arg0: $AbstractSpell$Type): void
public "setSpellSelection"(arg0: $SpellSelection$Type): void
public "toString"(): string
public "isCasting"(): boolean
public "hasEffect"(arg0: long): boolean
public "getPersistentData"(): $SyncedSpellData
public "addHeartstopDamage"(arg0: float): void
public "doSync"(): void
public "getSpinAttackType"(): $SpinAttackType
public "getHeartstopAccumulatedDamage"(): float
public "setHeartstopAccumulatedDamage"(arg0: float): void
public "setEvasionHitsRemaining"(arg0: integer): void
public "getEvasionHitsRemaining"(): integer
public "getCastingEquipmentSlot"(): string
public "syncToPlayer"(arg0: $ServerPlayer$Type): void
public "isSpellLearned"(arg0: $AbstractSpell$Type): boolean
get "castingSpellId"(): string
set "spinAttackType"(value: $SpinAttackType$Type)
get "castingSpellLevel"(): integer
get "serverPlayerId"(): integer
get "spellSelection"(): $SpellSelection
set "spellSelection"(value: $SpellSelection$Type)
get "casting"(): boolean
get "persistentData"(): $SyncedSpellData
get "spinAttackType"(): $SpinAttackType
get "heartstopAccumulatedDamage"(): float
set "heartstopAccumulatedDamage"(value: float)
set "evasionHitsRemaining"(value: integer)
get "evasionHitsRemaining"(): integer
get "castingEquipmentSlot"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedSpellData$Type = ($SyncedSpellData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedSpellData_ = $SyncedSpellData$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/attribute/$IMagicAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMagicAttribute {

}

export namespace $IMagicAttribute {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagicAttribute$Type = ($IMagicAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagicAttribute_ = $IMagicAttribute$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$PlanarSightEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PlanarSightEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanarSightEffect$Type = ($PlanarSightEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanarSightEffect_ = $PlanarSightEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CustomDescriptionMobEffect extends $MagicMobEffect {


public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public static "handleCustomPotionTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: boolean, arg3: $MobEffectInstance$Type, arg4: $CustomDescriptionMobEffect$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDescriptionMobEffect$Type = ($CustomDescriptionMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomDescriptionMobEffect_ = $CustomDescriptionMobEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$InkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InkItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $SpellRarity$Type)

public static "getInkForRarity"(arg0: $SpellRarity$Type): $InkItem
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(): $SpellRarity
get "rarity"(): $SpellRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InkItem$Type = ($InkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InkItem_ = $InkItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$SummonTimer" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SummonTimer extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonTimer$Type = ($SummonTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonTimer_ = $SummonTimer$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICastDataSerializable, $ICastDataSerializable$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastDataSerializable"
import {$ISerializable, $ISerializable$Type} from "packages/io/redspace/ironsspellbooks/api/network/$ISerializable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $RecastInstance implements $ISerializable, $INBTSerializable<($CompoundTag)> {

constructor()
constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $CastSource$Type, arg5: $ICastDataSerializable$Type)

public "getSpellId"(): string
public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getRemainingRecasts"(): integer
public "toString"(): string
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "getTotalRecasts"(): integer
public "getTicksToLive"(): integer
public "getTicksRemaining"(): integer
public "writeToBuffer"(arg0: $FriendlyByteBuf$Type): void
public "readFromBuffer"(arg0: $FriendlyByteBuf$Type): void
public "getCastData"(): $ICastDataSerializable
get "spellId"(): string
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "remainingRecasts"(): integer
get "totalRecasts"(): integer
get "ticksToLive"(): integer
get "ticksRemaining"(): integer
get "castData"(): $ICastDataSerializable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastInstance$Type = ($RecastInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecastInstance_ = $RecastInstance$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$UpgradeType" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $UpgradeType {

 "getId"(): $ResourceLocation
 "getAttribute"(): $Attribute
 "getOperation"(): $AttributeModifier$Operation
 "getAmountPerUpgrade"(): float
}

export namespace $UpgradeType {
const UPGRADE_REGISTRY: $Map<($ResourceLocation), ($UpgradeType)>
function getUpgrade(arg0: $ResourceLocation$Type): $Optional<($UpgradeType)>
function registerUpgrade(arg0: $UpgradeType$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type = ($UpgradeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_ = $UpgradeType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$ShrivingStoneItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShrivingStoneItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrivingStoneItem$Type = ($ShrivingStoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShrivingStoneItem_ = $ShrivingStoneItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/alchemist_cauldron/$AlchemistCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AlchemistCauldronBlock extends $BaseEntityBlock {
static readonly "LIT": $BooleanProperty
static readonly "MAX_LEVELS": integer
static readonly "LEVEL": $IntegerProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "isBoiling"(arg0: $BlockState$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isFireSource"(arg0: $BlockState$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public static "getLevel"(arg0: $BlockState$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "isLit"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistCauldronBlock$Type = ($AlchemistCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemistCauldronBlock_ = $AlchemistCauldronBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$BloodStaffItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StaffItem, $StaffItem$Type} from "packages/io/redspace/ironsspellbooks/item/weapons/$StaffItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BloodStaffItem extends $StaffItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodStaffItem$Type = ($BloodStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodStaffItem_ = $BloodStaffItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$CastingItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IMultihandWeapon, $IMultihandWeapon$Type} from "packages/io/redspace/ironsspellbooks/item/weapons/$IMultihandWeapon"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CastingItem extends $Item implements $IMultihandWeapon {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastingItem$Type = ($CastingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastingItem_ = $CastingItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CastResult$Type, $CastResult$Type$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastResult$Type"

export class $CastResult {
readonly "type": $CastResult$Type
readonly "message": $Component

constructor(arg0: $CastResult$Type$Type)
constructor(arg0: $CastResult$Type$Type, arg1: $Component$Type)

public "isSuccess"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$Type = ($CastResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastResult_ = $CastResult$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecastResult extends $Enum<($RecastResult)> {
static readonly "TIMEOUT": $RecastResult
static readonly "COUNTERSPELL": $RecastResult
static readonly "DEATH": $RecastResult
static readonly "USED_ALL_RECASTS": $RecastResult
static readonly "COMMAND": $RecastResult
static readonly "USER_CANCEL": $RecastResult


public static "values"(): ($RecastResult)[]
public static "valueOf"(arg0: string): $RecastResult
public "isFailure"(): boolean
public "isSuccess"(): boolean
get "failure"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastResult$Type = (("death") | ("counterspell") | ("used_all_recasts") | ("user_cancel") | ("timeout") | ("command")) | ($RecastResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecastResult_ = $RecastResult$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/$ISpellbook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpellbook {

}

export namespace $ISpellbook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellbook$Type = ($ISpellbook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellbook_ = $ISpellbook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerCooldowns" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$CooldownInstance, $CooldownInstance$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$CooldownInstance"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerCooldowns {
static readonly "SPELL_ID": string
static readonly "SPELL_COOLDOWN": string
static readonly "COOLDOWN_REMAINING": string

constructor()

public "clearCooldowns"(): void
public "removeCooldown"(arg0: string): boolean
public "decrementCooldown"(arg0: $CooldownInstance$Type, arg1: integer): boolean
public "setTickBuffer"(arg0: integer): void
public "saveNBTData"(): $ListTag
public "loadNBTData"(arg0: $ListTag$Type): void
public "hasCooldownsActive"(): boolean
public "addCooldown"(arg0: string, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: string, arg1: integer): void
public "addCooldown"(arg0: $AbstractSpell$Type, arg1: integer): void
public "addCooldown"(arg0: $AbstractSpell$Type, arg1: integer, arg2: integer): void
public "getCooldownPercent"(arg0: $AbstractSpell$Type): float
public "tick"(arg0: integer): void
public "getSpellCooldowns"(): $Map<(string), ($CooldownInstance)>
public "syncToPlayer"(arg0: $ServerPlayer$Type): void
public "isOnCooldown"(arg0: $AbstractSpell$Type): boolean
set "tickBuffer"(value: integer)
get "spellCooldowns"(): $Map<(string), ($CooldownInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerCooldowns$Type = ($PlayerCooldowns);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerCooldowns_ = $PlayerCooldowns$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/pedestal/$PedestalBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PedestalBlock extends $BaseEntityBlock {
static readonly "SHAPE_COLUMN": $VoxelShape
static readonly "SHAPE_BOTTOM": $VoxelShape
static readonly "SHAPE_TOP": $VoxelShape
static readonly "SHAPE": $VoxelShape
static readonly "BOOKSHELF_OFFSETS": $List<($BlockPos)>
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$Type = ($PedestalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PedestalBlock_ = $PedestalBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastResult$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CastResult$Type extends $Enum<($CastResult$Type)> {
static readonly "SUCCESS": $CastResult$Type
static readonly "FAILURE": $CastResult$Type


public static "values"(): ($CastResult$Type)[]
public static "valueOf"(arg0: string): $CastResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$Type$Type = (("success") | ("failure")) | ($CastResult$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastResult$Type_ = $CastResult$Type$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$EvasionEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomDescriptionMobEffect, $CustomDescriptionMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EvasionEffect extends $CustomDescriptionMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public static "doEffect"(arg0: $LivingEntity$Type, arg1: $DamageSource$Type): boolean
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvasionEffect$Type = ($EvasionEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvasionEffect_ = $EvasionEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ArchevokerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArchevokerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchevokerArmorItem$Type = ($ArchevokerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchevokerArmorItem_ = $ArchevokerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$TestClaymoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TestClaymoreItem extends $ExtendedSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestClaymoreItem$Type = ($TestClaymoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestClaymoreItem_ = $TestClaymoreItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$UniqueItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $UniqueItem {

}

export namespace $UniqueItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueItem$Type = ($UniqueItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueItem_ = $UniqueItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/guiding_bolt/$GuidingBoltEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GuidingBoltEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuidingBoltEffect$Type = ($GuidingBoltEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuidingBoltEffect_ = $GuidingBoltEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/damage/$SpellDamageSource" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellDamageSource extends $DamageSource {


public "setFireTime"(arg0: integer): $SpellDamageSource
public "setLifestealPercent"(arg0: float): $SpellDamageSource
public "get"(): $DamageSource
public static "source"(arg0: $Entity$Type, arg1: $AbstractSpell$Type): $SpellDamageSource
public static "source"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $AbstractSpell$Type): $SpellDamageSource
public "getFireTime"(): integer
public "spell"(): $AbstractSpell
public "getLocalizedDeathMessage"(arg0: $LivingEntity$Type): $Component
public "getLifestealPercent"(): float
public "setFreezeTicks"(arg0: integer): $SpellDamageSource
public "hasPostHitEffects"(): boolean
public "getFreezeTicks"(): integer
set "fireTime"(value: integer)
set "lifestealPercent"(value: float)
get "fireTime"(): integer
get "lifestealPercent"(): float
set "freezeTicks"(value: integer)
get "freezeTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageSource$Type = ($SpellDamageSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellDamageSource_ = $SpellDamageSource$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$UpgradeOrbItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UpgradeType, $UpgradeType$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$UpgradeType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeOrbItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUpgradeType"(): $UpgradeType
get "upgradeType"(): $UpgradeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeOrbItem$Type = ($UpgradeOrbItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeOrbItem_ = $UpgradeOrbItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$Scroll" {
import {$IScroll, $IScroll$Type} from "packages/io/redspace/ironsspellbooks/api/item/$IScroll"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Scroll extends $Item implements $IScroll {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "attemptRemoveScrollAfterCast"(arg0: $ServerPlayer$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scroll$Type = ($Scroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Scroll_ = $Scroll$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$UniqueSpellBook" {
import {$UniqueItem, $UniqueItem$Type} from "packages/io/redspace/ironsspellbooks/item/$UniqueItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SimpleAttributeSpellBook, $SimpleAttributeSpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/spell_books/$SimpleAttributeSpellBook"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ISpellContainer, $ISpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ISpellContainer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniqueSpellBook extends $SimpleAttributeSpellBook implements $UniqueItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[], arg2: $Supplier$Type<($Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)>)
constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[], arg2: integer)
constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[], arg2: integer, arg3: $Supplier$Type<($Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)>)
constructor(arg0: $SpellRarity$Type, arg1: ($SpellDataRegistryHolder$Type)[])

public "getName"(arg0: $ItemStack$Type): $Component
public "isUnique"(): boolean
public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "getSpells"(): $List<($SpellData)>
public "initializeSpellContainerOLD"(arg0: $ItemStack$Type): $ISpellContainer
get "unique"(): boolean
get "spells"(): $List<($SpellData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueSpellBook$Type = ($UniqueSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueSpellBook_ = $UniqueSpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$StaffOfTheNines" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffOfTheNines extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getPosition"(arg0: $Vec3$Type, arg1: float, arg2: float, arg3: float, arg4: $Vec2$Type): $Vec3
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffOfTheNines$Type = ($StaffOfTheNines);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffOfTheNines_ = $StaffOfTheNines$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$BurningDashEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BurningDashEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningDashEffect$Type = ($BurningDashEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BurningDashEffect_ = $BurningDashEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$AirborneEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AirborneEffect extends $MobEffect {
static readonly "damage_per_amp": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public static "getDamageFromLevel"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirborneEffect$Type = ($AirborneEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirborneEffect_ = $AirborneEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$FrostwardRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FrostwardRing extends $SimpleDescriptiveCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostwardRing$Type = ($FrostwardRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostwardRing_ = $FrostwardRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ElectromancerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorCapeProvider, $ArmorCapeProvider$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ArmorCapeProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElectromancerArmorItem extends $ImbuableChestplateArmorItem implements $ArmorCapeProvider {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public "getCapeResourceLocation"(): $ResourceLocation
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
get "capeResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectromancerArmorItem$Type = ($ElectromancerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectromancerArmorItem_ = $ElectromancerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$SimpleElixir" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleElixir extends $DrinkableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($MobEffectInstance$Type)>)
constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($MobEffectInstance$Type)>, arg2: boolean)

public static "addPotionTooltip"(arg0: $MobEffectInstance$Type, arg1: $List$Type<($Component$Type)>, arg2: float): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getMobEffect"(): $MobEffectInstance
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "mobEffect"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleElixir$Type = ($SimpleElixir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleElixir_ = $SimpleElixir$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$ISpellContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ISpellContainer extends $INBTSerializable<($CompoundTag)> {

 "getSpellAtIndex"(arg0: integer): $SpellData
 "isEmpty"(): boolean
 "save"(arg0: $ItemStack$Type): void
 "getActiveSpells"(): $List<($SpellData)>
 "getMaxSpellCount"(): integer
 "addSpell"(arg0: $AbstractSpell$Type, arg1: integer, arg2: boolean, arg3: $ItemStack$Type): boolean
 "removeSpell"(arg0: $AbstractSpell$Type, arg1: $ItemStack$Type): boolean
 "addSpellAtIndex"(arg0: $AbstractSpell$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): boolean
 "getIndexForSpell"(arg0: $AbstractSpell$Type): integer
 "mustEquip"(): boolean
 "setMaxSpellCount"(arg0: integer): void
 "spellWheel"(): boolean
 "getAllSpells"(): ($SpellData)[]
 "removeSpellAtIndex"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getNextAvailableIndex"(): integer
 "getActiveSpellCount"(): integer
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $ISpellContainer {
function get(arg0: $ItemStack$Type): $ISpellContainer
function create(arg0: integer, arg1: boolean, arg2: boolean): $ISpellContainer
function getOrCreate(arg0: $ItemStack$Type): $ISpellContainer
function isSpellContainer(arg0: $ItemStack$Type): boolean
function createScrollContainer(arg0: $AbstractSpell$Type, arg1: integer, arg2: $ItemStack$Type): $ISpellContainer
function createImbuedContainer(arg0: $AbstractSpell$Type, arg1: integer, arg2: $ItemStack$Type): $ISpellContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellContainer$Type = ($ISpellContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellContainer_ = $ISpellContainer$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/inscription_table/$InscriptionTableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChestType, $ChestType$Type} from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $InscriptionTableBlock extends $HorizontalDirectionalBlock {
static readonly "PART": $EnumProperty<($ChestType)>
static readonly "SHAPE": $VoxelShape
static readonly "SHAPE_TABLETOP": $VoxelShape
static readonly "SHAPE_LEG_1": $VoxelShape
static readonly "SHAPE_LEG_2": $VoxelShape
static readonly "SHAPE_LEG_3": $VoxelShape
static readonly "SHAPE_LEG_4": $VoxelShape
static readonly "SHAPE_LEGS_EAST": $VoxelShape
static readonly "SHAPE_LEGS_WEST": $VoxelShape
static readonly "SHAPE_LEGS_NORTH": $VoxelShape
static readonly "SHAPE_LEGS_SOUTH": $VoxelShape
static readonly "FACING": $DirectionProperty
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriptionTableBlock$Type = ($InscriptionTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriptionTableBlock_ = $InscriptionTableBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$InvisibiltyRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InvisibiltyRing extends $SimpleDescriptiveCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibiltyRing$Type = ($InvisibiltyRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvisibiltyRing_ = $InvisibiltyRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$CryomancerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CryomancerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CryomancerArmorItem$Type = ($CryomancerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CryomancerArmorItem_ = $CryomancerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$PlayerRecasts" {
import {$RecastResult, $RecastResult$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastResult"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$RecastInstance, $RecastInstance$Type} from "packages/io/redspace/ironsspellbooks/capabilities/magic/$RecastInstance"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerRecasts {

constructor()
constructor(arg0: $ServerPlayer$Type)
constructor(arg0: $Map$Type<(string), ($RecastInstance$Type)>)

public "hasRecastForSpell"(arg0: string): boolean
public "hasRecastForSpell"(arg0: $AbstractSpell$Type): boolean
public "decrementRecastCount"(arg0: string): void
public "decrementRecastCount"(arg0: $AbstractSpell$Type): void
public "syncRemoveToPlayer"(arg0: string): void
public "getAllRecasts"(): $List<($RecastInstance)>
public "isRecastActive"(arg0: $RecastInstance$Type): boolean
public "saveNBTData"(): $ListTag
public "loadNBTData"(arg0: $ListTag$Type): void
public "hasRecastsActive"(): boolean
public "toString"(): string
public "removeAll"(arg0: $RecastResult$Type): void
public "getRemainingRecastsForSpell"(arg0: $AbstractSpell$Type): integer
public "getRemainingRecastsForSpell"(arg0: string): integer
public "getActiveRecasts"(): $List<($RecastInstance)>
public "tick"(arg0: integer): void
public "syncAllToPlayer"(): void
public "tickRecasts"(): void
public "syncToPlayer"(arg0: $RecastInstance$Type): void
public "getRecastInstance"(arg0: string): $RecastInstance
public "addRecast"(arg0: $RecastInstance$Type, arg1: $MagicData$Type): boolean
public "removeRecast"(arg0: $RecastInstance$Type, arg1: $RecastResult$Type): void
public "removeRecast"(arg0: string): void
public "forceAddRecast"(arg0: $RecastInstance$Type): void
get "allRecasts"(): $List<($RecastInstance)>
get "activeRecasts"(): $List<($RecastInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRecasts$Type = ($PlayerRecasts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerRecasts_ = $PlayerRecasts$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPresetSpellContainer, $IPresetSpellContainer$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$IPresetSpellContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IronsExtendedArmorMaterial, $IronsExtendedArmorMaterial$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$IronsExtendedArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImbuableChestplateArmorItem extends $ExtendedArmorItem implements $IPresetSpellContainer {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IronsExtendedArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuableChestplateArmorItem$Type = ($ImbuableChestplateArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuableChestplateArmorItem_ = $ImbuableChestplateArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$FurledMapItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FurledMapItem extends $Item {
static "FURLED_MAP_NBT": string
static "FURLED_MAP_LOCATION": string
static "FURLED_MAP_DESCRIPTION": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "of"(arg0: $ResourceLocation$Type, arg1: $MutableComponent$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurledMapItem$Type = ($FurledMapItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurledMapItem_ = $FurledMapItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/consumables/$DrinkableItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrinkableItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $BiConsumer$Type<($ItemStack$Type), ($LivingEntity$Type)>, arg2: $Item$Type, arg3: boolean)
constructor(arg0: $Item$Properties$Type, arg1: $BiConsumer$Type<($ItemStack$Type), ($LivingEntity$Type)>)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrinkableItem$Type = ($DrinkableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrinkableItem_ = $DrinkableItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $SchoolType {

constructor(arg0: $ResourceLocation$Type, arg1: $TagKey$Type<($Item$Type)>, arg2: $Component$Type, arg3: $LazyOptional$Type<($Attribute$Type)>, arg4: $LazyOptional$Type<($Attribute$Type)>, arg5: $LazyOptional$Type<($SoundEvent$Type)>, arg6: $ResourceKey$Type<($DamageType$Type)>)

public "getCastSound"(): $SoundEvent
public "getDamageType"(): $ResourceKey<($DamageType)>
public "getTargetingColor"(): $Vector3f
public "getResistanceFor"(arg0: $LivingEntity$Type): double
public "getPowerFor"(arg0: $LivingEntity$Type): double
public "getId"(): $ResourceLocation
public "getDisplayName"(): $Component
public "isFocus"(arg0: $ItemStack$Type): boolean
get "castSound"(): $SoundEvent
get "damageType"(): $ResourceKey<($DamageType)>
get "targetingColor"(): $Vector3f
get "id"(): $ResourceLocation
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolType$Type = ($SchoolType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolType_ = $SchoolType$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/$ArmorPileBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ArmorPileBlock extends $Block {
static readonly "FACING": $DirectionProperty
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

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "spawnAfterBreak"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorPileBlock$Type = ($ArmorPileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorPileBlock_ = $ArmorPileBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/spells/$CastSource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CastSource extends $Enum<($CastSource)> {
static readonly "SPELLBOOK": $CastSource
static readonly "SCROLL": $CastSource
static readonly "SWORD": $CastSource
static readonly "MOB": $CastSource
static readonly "COMMAND": $CastSource
static readonly "NONE": $CastSource


public "consumesMana"(): boolean
public "respectsCooldown"(): boolean
public static "values"(): ($CastSource)[]
public static "valueOf"(arg0: string): $CastSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastSource$Type = (("sword") | ("mob") | ("spellbook") | ("scroll") | ("none") | ("command")) | ($CastSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CastSource_ = $CastSource$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ShadowwalkerArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShadowwalkerArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowwalkerArmorItem$Type = ($ShadowwalkerArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadowwalkerArmorItem_ = $ShadowwalkerArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$CurioBaseItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CurioBaseItem extends $Item implements $ICurioItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "isEquippedBy"(arg0: $LivingEntity$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioBaseItem$Type = ($CurioBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioBaseItem_ = $CurioBaseItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$AmethystRapierItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MagicSwordItem, $MagicSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SpellDataRegistryHolder, $SpellDataRegistryHolder$Type} from "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmethystRapierItem extends $MagicSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: ($SpellDataRegistryHolder$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmethystRapierItem$Type = ($AmethystRapierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmethystRapierItem_ = $AmethystRapierItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PriestArmorItem" {
import {$ImbuableChestplateArmorItem, $ImbuableChestplateArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ImbuableChestplateArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PriestArmorItem extends $ImbuableChestplateArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriestArmorItem$Type = ($PriestArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PriestArmorItem_ = $PriestArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$LurkerRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LurkerRing extends $SimpleDescriptiveCurio {
static readonly "COOLDOWN_IN_TICKS": integer
static readonly "MULTIPLIER": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getDescription"(arg0: $ItemStack$Type): $Component
public "getDescriptionLines"(arg0: $ItemStack$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LurkerRing$Type = ($LurkerRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LurkerRing_ = $LurkerRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/spell_books/$SimpleAttributeSpellBook" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$SpellBook, $SpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/$SpellBook"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleAttributeSpellBook extends $SpellBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>, arg3: $Item$Properties$Type)
constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)
constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Attribute$Type, arg3: double, arg4: double)
constructor(arg0: integer, arg1: $SpellRarity$Type, arg2: $Attribute$Type, arg3: double)

public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAttributeSpellBook$Type = ($SimpleAttributeSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleAttributeSpellBook_ = $SimpleAttributeSpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$EnergizedCoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergizedCoreItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizedCoreItem$Type = ($EnergizedCoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizedCoreItem_ = $EnergizedCoreItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem" {
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$IronsExtendedArmorMaterial, $IronsExtendedArmorMaterial$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$IronsExtendedArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedArmorItem extends $ArmorItem implements $GeoItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $IronsExtendedArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "getTick"(arg0: any): double
public "isPerspectiveAware"(): boolean
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedArmorItem$Type = ($ExtendedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedArmorItem_ = $ExtendedArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$TrueInvisibilityEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TrueInvisibilityEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueInvisibilityEffect$Type = ($TrueInvisibilityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrueInvisibilityEffect_ = $TrueInvisibilityEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/item/$IScroll" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScroll {

}

export namespace $IScroll {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScroll$Type = ($IScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScroll_ = $IScroll$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/capabilities/magic/$CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CooldownInstance {

constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "getSpellCooldown"(): integer
public "decrementBy"(arg0: integer): void
public "decrement"(): void
public "getCooldownPercent"(): float
public "getCooldownRemaining"(): integer
get "spellCooldown"(): integer
get "cooldownPercent"(): float
get "cooldownRemaining"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownInstance$Type = ($CooldownInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CooldownInstance_ = $CooldownInstance$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$OakskinEffect" {
import {$LivingDamageEvent, $LivingDamageEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CustomDescriptionMobEffect, $CustomDescriptionMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$CustomDescriptionMobEffect"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $OakskinEffect extends $CustomDescriptionMobEffect {
static readonly "REDUCTION_PER_LEVEL": float
static readonly "BASE_REDUCTION": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getDescriptionLine"(arg0: $MobEffectInstance$Type): $Component
public static "reduceDamage"(arg0: $LivingDamageEvent$Type): void
public static "getReductionAmount"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OakskinEffect$Type = ($OakskinEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OakskinEffect_ = $OakskinEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$NecronomiconSpellBook" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$UniqueSpellBook, $UniqueSpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/$UniqueSpellBook"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NecronomiconSpellBook extends $UniqueSpellBook {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "initializeSpellContainer"(arg0: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NecronomiconSpellBook$Type = ($NecronomiconSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NecronomiconSpellBook_ = $NecronomiconSpellBook$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/curios/$PoisonwardRing" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SimpleDescriptiveCurio, $SimpleDescriptiveCurio$Type} from "packages/io/redspace/ironsspellbooks/item/curios/$SimpleDescriptiveCurio"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PoisonwardRing extends $SimpleDescriptiveCurio {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonwardRing$Type = ($PoisonwardRing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoisonwardRing_ = $PoisonwardRing$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/armor/$PumpkinArmorItem" {
import {$ExtendedArmorItem, $ExtendedArmorItem$Type} from "packages/io/redspace/ironsspellbooks/item/armor/$ExtendedArmorItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PumpkinArmorItem extends $ExtendedArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $ArmorItem$Type$Type, arg1: $Item$Properties$Type)

public "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
public "supplyRenderer"(): $GeoArmorRenderer<(any)>
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getId"(arg0: $ItemStack$Type): long
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpkinArmorItem$Type = ($PumpkinArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpkinArmorItem_ = $PumpkinArmorItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/weapons/$MagehunterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ExtendedSwordItem, $ExtendedSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$ExtendedSwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagehunterItem extends $ExtendedSwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagehunterItem$Type = ($MagehunterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagehunterItem_ = $MagehunterItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/block/arcane_anvil/$ArcaneAnvilBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ArcaneAnvilBlock extends $FallingBlock {
static readonly "FACING": $DirectionProperty
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

constructor()

public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneAnvilBlock$Type = ($ArcaneAnvilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcaneAnvilBlock_ = $ArcaneAnvilBlock$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$GluttonyEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$LivingEntityUseItemEvent$Finish, $LivingEntityUseItemEvent$Finish$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Finish"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $GluttonyEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "finishEating"(arg0: $LivingEntityUseItemEvent$Finish$Type): void
public static "ratioForAmplifier"(arg0: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonyEffect$Type = ($GluttonyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GluttonyEffect_ = $GluttonyEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/item/$ArcaneSalvageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArcaneSalvageItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneSalvageItem$Type = ($ArcaneSalvageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcaneSalvageItem_ = $ArcaneSalvageItem$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$ThunderstormEffect" {
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ThunderstormEffect extends $MagicMobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "getDamageFromAmplifier"(arg0: integer, arg1: $LivingEntity$Type): float
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderstormEffect$Type = ($ThunderstormEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThunderstormEffect_ = $ThunderstormEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/effect/$ChargeEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MagicMobEffect, $MagicMobEffect$Type} from "packages/io/redspace/ironsspellbooks/effect/$MagicMobEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ChargeEffect extends $MagicMobEffect {
static readonly "ATTACK_DAMAGE_PER_LEVEL": float
static readonly "SPEED_PER_LEVEL": float
static readonly "SPELL_POWER_PER_LEVEL": float

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeEffect$Type = ($ChargeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeEffect_ = $ChargeEffect$Type;
}}
declare module "packages/io/redspace/ironsspellbooks/api/registry/$SpellDataRegistryHolder" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $SpellDataRegistryHolder {

constructor(arg0: $RegistryObject$Type<($AbstractSpell$Type)>, arg1: integer)

public static "of"(...arg0: ($SpellDataRegistryHolder$Type)[]): ($SpellDataRegistryHolder)[]
public "getSpellData"(): $SpellData
get "spellData"(): $SpellData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDataRegistryHolder$Type = ($SpellDataRegistryHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellDataRegistryHolder_ = $SpellDataRegistryHolder$Type;
}}
