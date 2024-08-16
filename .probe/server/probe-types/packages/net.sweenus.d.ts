declare module "packages/net/sweenus/simplyswords/effect/$FlameSeedEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FlameSeedEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
 "additionalData": integer

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$Type): void
public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlameSeedEffect$Type = ($FlameSeedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlameSeedEffect_ = $FlameSeedEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$EchoEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EchoEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoEffect$Type = ($EchoEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EchoEffect_ = $EchoEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$HiveheartSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HiveheartSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HiveheartSwordItem$Type = ($HiveheartSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HiveheartSwordItem_ = $HiveheartSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$UniqueSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $UniqueSwordItem extends $SwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getName"(stack: $ItemStack$Type): $Component
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, clickType: $ClickAction$Type, player: $Player$Type, cursorStackReference: $SlotAccess$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueSwordItem$Type = ($UniqueSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueSwordItem_ = $UniqueSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$FreezeEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FreezeEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezeEffect$Type = ($FreezeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezeEffect_ = $FreezeEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$StormEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $StormEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormEffect$Type = ($StormEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormEffect_ = $StormEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$ElementalVortexEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ElementalVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
 "additionalData": integer

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "removeAttributeModifiers"(entity: $LivingEntity$Type, attributes: $AttributeMap$Type, amplifier: integer): void
public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$Type): void
public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalVortexEffect$Type = ($ElementalVortexEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalVortexEffect_ = $ElementalVortexEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$StormbringerSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StormbringerSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormbringerSwordItem$Type = ($StormbringerSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormbringerSwordItem_ = $StormbringerSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$SporeSwarmEffect" {
import {$WideOrbitingEffect, $WideOrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$WideOrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SporeSwarmEffect extends $WideOrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(duration: integer, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeSwarmEffect$Type = ($SporeSwarmEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporeSwarmEffect_ = $SporeSwarmEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$EmberIreSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EmberIreSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmberIreSwordItem$Type = ($EmberIreSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmberIreSwordItem_ = $EmberIreSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$VoidcloakEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $VoidcloakEffect extends $OrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidcloakEffect$Type = ($VoidcloakEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidcloakEffect_ = $VoidcloakEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$OnslaughtEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $OnslaughtEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnslaughtEffect$Type = ($OnslaughtEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OnslaughtEffect_ = $OnslaughtEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$RendSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RendSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendSwordItem$Type = ($RendSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendSwordItem_ = $RendSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$RibbonwrathEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $RibbonwrathEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbonwrathEffect$Type = ($RibbonwrathEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbonwrathEffect_ = $RibbonwrathEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$WildfireEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WildfireEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfireEffect$Type = ($WildfireEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildfireEffect_ = $WildfireEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$RunicTabletItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RunicTabletItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicTabletItem$Type = ($RunicTabletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicTabletItem_ = $RunicTabletItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$StormsEdgeSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StormsEdgeSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormsEdgeSwordItem$Type = ($StormsEdgeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormsEdgeSwordItem_ = $StormsEdgeSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$SoulSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoulSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulSwordItem$Type = ($SoulSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulSwordItem_ = $SoulSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$WatcherSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WatcherSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatcherSwordItem$Type = ($WatcherSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatcherSwordItem_ = $WatcherSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$ImmolationEffect" {
import {$WideOrbitingEffect, $WideOrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$WideOrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ImmolationEffect extends $WideOrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolationEffect$Type = ($ImmolationEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmolationEffect_ = $ImmolationEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$WideOrbitingEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WideOrbitingEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideOrbitingEffect$Type = ($WideOrbitingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideOrbitingEffect_ = $WideOrbitingEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$FrostfallSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FrostfallSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostfallSwordItem$Type = ($FrostfallSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostfallSwordItem_ = $FrostfallSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$StormSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StormSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormSwordItem$Type = ($StormSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormSwordItem_ = $StormSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$IcewhisperSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IcewhisperSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcewhisperSwordItem$Type = ($IcewhisperSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IcewhisperSwordItem_ = $IcewhisperSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$BattleFatigueEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $BattleFatigueEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BattleFatigueEffect$Type = ($BattleFatigueEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BattleFatigueEffect_ = $BattleFatigueEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$WickpiercerSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WickpiercerSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickpiercerSwordItem$Type = ($WickpiercerSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WickpiercerSwordItem_ = $WickpiercerSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$OrbitingEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $OrbitingEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrbitingEffect$Type = ($OrbitingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrbitingEffect_ = $OrbitingEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$WardEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WardEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WardEffect$Type = ($WardEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WardEffect_ = $WardEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$EmberlashSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EmberlashSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmberlashSwordItem$Type = ($EmberlashSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmberlashSwordItem_ = $EmberlashSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$EmpoweredRemnantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmpoweredRemnantItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmpoweredRemnantItem$Type = ($EmpoweredRemnantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmpoweredRemnantItem_ = $EmpoweredRemnantItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$HarbingerSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HarbingerSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarbingerSwordItem$Type = ($HarbingerSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HarbingerSwordItem_ = $HarbingerSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$ArcanethystSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ArcanethystSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanethystSwordItem$Type = ($ArcanethystSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcanethystSwordItem_ = $ArcanethystSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$LivyatanSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LivyatanSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivyatanSwordItem$Type = ($LivyatanSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivyatanSwordItem_ = $LivyatanSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$FrostVortexEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FrostVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
 "additionalData": integer

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$Type): void
public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostVortexEffect$Type = ($FrostVortexEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostVortexEffect_ = $FrostVortexEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$MagispearSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagispearSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagispearSwordItem$Type = ($MagispearSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagispearSwordItem_ = $MagispearSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$StarsEdgeSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StarsEdgeSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarsEdgeSwordItem$Type = ($StarsEdgeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarsEdgeSwordItem_ = $StarsEdgeSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$NetherfusedGemItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetherfusedGemItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getName"(stack: $ItemStack$Type): $Component
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, clickType: $ClickAction$Type, player: $Player$Type, cursorStackReference: $SlotAccess$Type): boolean
public "onCraftedBy"(stack: $ItemStack$Type, world: $Level$Type, player: $Player$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherfusedGemItem$Type = ($NetherfusedGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetherfusedGemItem_ = $NetherfusedGemItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$SimplySwordsSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimplySwordsSwordItem extends $SwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, ...repairIngredient: (string)[])

public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsSwordItem$Type = ($SimplySwordsSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplySwordsSwordItem_ = $SimplySwordsSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$ThunderbrandSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ThunderbrandSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderbrandSwordItem$Type = ($ThunderbrandSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThunderbrandSwordItem_ = $ThunderbrandSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$VoidAssaultEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $VoidAssaultEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
 "additionalData": integer

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$Type): void
public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidAssaultEffect$Type = ($VoidAssaultEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidAssaultEffect_ = $VoidAssaultEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$WhisperwindSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WhisperwindSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhisperwindSwordItem$Type = ($WhisperwindSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhisperwindSwordItem_ = $WhisperwindSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$SimplySwordsNetheriteSwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimplySwordsNetheriteSwordItem extends $SwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, ...repairIngredient: (string)[])

public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsNetheriteSwordItem$Type = ($SimplySwordsNetheriteSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplySwordsNetheriteSwordItem_ = $SimplySwordsNetheriteSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$MoltenEdgeSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MoltenEdgeSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoltenEdgeSwordItem$Type = ($MoltenEdgeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoltenEdgeSwordItem_ = $MoltenEdgeSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$MagiscytheSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagiscytheSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagiscytheSwordItem$Type = ($MagiscytheSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagiscytheSwordItem_ = $MagiscytheSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$DormantRelicSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DormantRelicSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DormantRelicSwordItem$Type = ($DormantRelicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DormantRelicSwordItem_ = $DormantRelicSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$ContainedRemnantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ContainedRemnantItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getName"(stack: $ItemStack$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainedRemnantItem$Type = ($ContainedRemnantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainedRemnantItem_ = $ContainedRemnantItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$PainEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $PainEffect extends $MobEffect {
 "sourceEntity": $LivingEntity
 "additionalData": integer

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$Type): void
public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PainEffect$Type = ($PainEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PainEffect_ = $PainEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$TaintedRelicSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TaintedRelicSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaintedRelicSwordItem$Type = ($TaintedRelicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaintedRelicSwordItem_ = $TaintedRelicSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$RibboncleaveEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RibboncleaveEffect extends $OrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibboncleaveEffect$Type = ($RibboncleaveEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibboncleaveEffect_ = $RibboncleaveEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$PlagueSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlagueSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlagueSwordItem$Type = ($PlagueSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlagueSwordItem_ = $PlagueSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$FireSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FireSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireSwordItem$Type = ($FireSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireSwordItem_ = $FireSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$SmoulderingEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SmoulderingEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoulderingEffect$Type = ($SmoulderingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmoulderingEffect_ = $SmoulderingEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$WaxweaverSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WaxweaverSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxweaverSwordItem$Type = ($WaxweaverSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxweaverSwordItem_ = $WaxweaverSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$MagislamEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MagislamEffect extends $OrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(duration: integer, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagislamEffect$Type = ($MagislamEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagislamEffect_ = $MagislamEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$LichbladeSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LichbladeSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
 "damageTracker": integer
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, user: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LichbladeSwordItem$Type = ($LichbladeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LichbladeSwordItem_ = $LichbladeSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$SoulPyreSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoulPyreSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulPyreSwordItem$Type = ($SoulPyreSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulPyreSwordItem_ = $SoulPyreSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$FatalFlickerEffect" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FatalFlickerEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public static "performDash"(user: $LivingEntity$Type, world: $Level$Type, radius: integer): void
public "applyEffectTick"(user: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FatalFlickerEffect$Type = ($FatalFlickerEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FatalFlickerEffect_ = $FatalFlickerEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$FlamewindSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FlamewindSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamewindSwordItem$Type = ($FlamewindSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlamewindSwordItem_ = $FlamewindSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$VolcanicFurySwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VolcanicFurySwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolcanicFurySwordItem$Type = ($VolcanicFurySwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolcanicFurySwordItem_ = $VolcanicFurySwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$RunefusedGemItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RunefusedGemItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getName"(stack: $ItemStack$Type): $Component
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, clickType: $ClickAction$Type, player: $Player$Type, cursorStackReference: $SlotAccess$Type): boolean
public "onCraftedBy"(stack: $ItemStack$Type, world: $Level$Type, player: $Player$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunefusedGemItem$Type = ($RunefusedGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunefusedGemItem_ = $RunefusedGemItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$BrambleSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BrambleSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrambleSwordItem$Type = ($BrambleSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrambleSwordItem_ = $BrambleSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$ShadowstingSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShadowstingSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowstingSwordItem$Type = ($ShadowstingSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadowstingSwordItem_ = $ShadowstingSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$FireVortexEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FireVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
 "additionalData": integer

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$Type): void
public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireVortexEffect$Type = ($FireVortexEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireVortexEffect_ = $FireVortexEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$StealSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StealSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "mineBlock"(stack: $ItemStack$Type, world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, miner: $LivingEntity$Type): boolean
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StealSwordItem$Type = ($StealSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StealSwordItem_ = $StealSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$HasteSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HasteSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HasteSwordItem$Type = ($HasteSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HasteSwordItem_ = $HasteSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$MagibladeSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MagibladeSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagibladeSwordItem$Type = ($MagibladeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagibladeSwordItem_ = $MagibladeSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$MagistormEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$HighOrbitingEffect, $HighOrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$HighOrbitingEffect"

export class $MagistormEffect extends $HighOrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(duration: integer, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagistormEffect$Type = ($MagistormEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagistormEffect_ = $MagistormEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$ResilienceEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ResilienceEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(pLivingEntity: $LivingEntity$Type, pAmplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResilienceEffect$Type = ($ResilienceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResilienceEffect_ = $ResilienceEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$TempestSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TempestSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempestSwordItem$Type = ($TempestSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempestSwordItem_ = $TempestSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/$RunicSwordItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RunicSwordItem extends $SwordItem {
static "maxUseTime": integer
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "getName"(stack: $ItemStack$Type): $Component
public "getUseDuration"(stack: $ItemStack$Type): integer
public "onUseTick"(world: $Level$Type, user: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseTicks: integer): void
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$Type, otherStack: $ItemStack$Type, slot: $Slot$Type, clickType: $ClickAction$Type, player: $Player$Type, cursorStackReference: $SlotAccess$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "onCraftedBy"(stack: $ItemStack$Type, world: $Level$Type, player: $Player$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$Type, world: $Level$Type, user: $LivingEntity$Type, remainingUseTicks: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicSwordItem$Type = ($RunicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicSwordItem_ = $RunicSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$HighOrbitingEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $HighOrbitingEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighOrbitingEffect$Type = ($HighOrbitingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighOrbitingEffect_ = $HighOrbitingEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$EnigmaSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnigmaSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaSwordItem$Type = ($EnigmaSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaSwordItem_ = $EnigmaSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$RibboncleaverSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RibboncleaverSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibboncleaverSwordItem$Type = ($RibboncleaverSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibboncleaverSwordItem_ = $RibboncleaverSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/effect/$FrenzyEffect" {
import {$OrbitingEffect, $OrbitingEffect$Type} from "packages/net/sweenus/simplyswords/effect/$OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FrenzyEffect extends $OrbitingEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "applyEffectTick"(livingEntity: $LivingEntity$Type, amplifier: integer): void
public "isDurationEffectTick"(pDuration: integer, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrenzyEffect$Type = ($FrenzyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrenzyEffect_ = $FrenzyEffect$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$SunfireSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SunfireSwordItem extends $UniqueSwordItem {
static "scalesWithSpellPower": boolean
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunfireSwordItem$Type = ($SunfireSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SunfireSwordItem_ = $SunfireSwordItem$Type;
}}
declare module "packages/net/sweenus/simplyswords/item/custom/$RighteousRelicSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$UniqueSwordItem, $UniqueSwordItem$Type} from "packages/net/sweenus/simplyswords/item/$UniqueSwordItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RighteousRelicSwordItem extends $UniqueSwordItem {
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

constructor(toolMaterial: $Tier$Type, attackDamage: integer, attackSpeed: float, settings: $Item$Properties$Type)

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipContext: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RighteousRelicSwordItem$Type = ($RighteousRelicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RighteousRelicSwordItem_ = $RighteousRelicSwordItem$Type;
}}
