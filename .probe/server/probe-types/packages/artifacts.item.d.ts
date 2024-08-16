declare module "packages/artifacts/item/wearable/$WhoopeeCushionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WhoopeeCushionItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhoopeeCushionItem$Type = ($WhoopeeCushionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhoopeeCushionItem_ = $WhoopeeCushionItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$CrystalHeartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrystalHeartItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalHeartItem$Type = ($CrystalHeartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalHeartItem_ = $CrystalHeartItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$FireGauntletItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FireGauntletItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireGauntletItem$Type = ($FireGauntletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireGauntletItem_ = $FireGauntletItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$CloudInABottleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CloudInABottleItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "jump"(player: $Player$Type): void
public "getEquipSound"(): $SoundEvent
public static "getReducedFallDistance"(entity: $LivingEntity$Type, distance: float): float
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloudInABottleItem$Type = ($CloudInABottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CloudInABottleItem_ = $CloudInABottleItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$AnglersHatItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnglersHatItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnglersHatItem$Type = ($AnglersHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnglersHatItem_ = $AnglersHatItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$RootedBootsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RootedBootsItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public static "applyBoneMeal"(entity: $LivingEntity$Type, properties: $FoodProperties$Type): void
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootedBootsItem$Type = ($RootedBootsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootedBootsItem_ = $RootedBootsItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$PendantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PendantItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(strikeChance: $Supplier$Type<(double)>, cooldown: $Supplier$Type<(integer)>)

public "getEquipSound"(): $SoundEvent
public "getStrikeChance"(): double
get "equipSound"(): $SoundEvent
get "strikeChance"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendantItem$Type = ($PendantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PendantItem_ = $PendantItem$Type;
}}
declare module "packages/artifacts/item/wearable/$WearableArtifactItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ArtifactAttributeModifier, $ArtifactAttributeModifier$Type} from "packages/artifacts/item/wearable/$ArtifactAttributeModifier"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ArtifactItem, $ArtifactItem$Type} from "packages/artifacts/item/$ArtifactItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WearableArtifactItem extends $ArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()
constructor(properties: $Item$Properties$Type)

public "toggleItem"(player: $ServerPlayer$Type): void
public "getFortuneLevel"(): integer
public "getAttributeModifiers"(): $List<($ArtifactAttributeModifier)>
public "makesPiglinsNeutral"(): boolean
public "canWalkOnPowderedSnow"(): boolean
public "getEquipSound"(): $SoundEvent
public "onUnequip"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "onEquip"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isEquippedBy"(entity: $LivingEntity$Type): boolean
public "getLootingLevel"(): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltipList: $List$Type<(any)>, flags: $TooltipFlag$Type): void
public "addAttributeModifier"(attributeModifier: $ArtifactAttributeModifier$Type): void
public static "isActivated"(stack: $ItemStack$Type): boolean
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "findAllEquippedBy"(entity: $LivingEntity$Type): $Stream<($ItemStack)>
public static "setActivated"(stack: $ItemStack$Type, active: boolean): void
public "isCosmetic"(): boolean
get "fortuneLevel"(): integer
get "attributeModifiers"(): $List<($ArtifactAttributeModifier)>
get "equipSound"(): $SoundEvent
get "lootingLevel"(): integer
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WearableArtifactItem$Type = ($WearableArtifactItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WearableArtifactItem_ = $WearableArtifactItem$Type;
}}
declare module "packages/artifacts/item/$UmbrellaItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ArtifactItem, $ArtifactItem$Type} from "packages/artifacts/item/$ArtifactItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UmbrellaItem extends $ArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getUseDuration"(stack: $ItemStack$Type): integer
public "canPerformAction"(stack: $ItemStack$Type, toolAction: $ToolAction$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public static "isHoldingUmbrellaUpright"(entity: $LivingEntity$Type, hand: $InteractionHand$Type): boolean
public static "isHoldingUmbrellaUpright"(entity: $LivingEntity$Type): boolean
public "isCosmetic"(): boolean
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UmbrellaItem$Type = ($UmbrellaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UmbrellaItem_ = $UmbrellaItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$SnorkelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MobEffectItem, $MobEffectItem$Type} from "packages/artifacts/item/wearable/$MobEffectItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SnorkelItem extends $MobEffectItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "isEffectActive"(entity: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnorkelItem$Type = ($SnorkelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnorkelItem_ = $SnorkelItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$LuckyScarfItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LuckyScarfItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getFortuneLevel"(): integer
get "fortuneLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuckyScarfItem$Type = ($LuckyScarfItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuckyScarfItem_ = $LuckyScarfItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$CowboyHatItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MobEffectItem, $MobEffectItem$Type} from "packages/artifacts/item/wearable/$MobEffectItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CowboyHatItem extends $MobEffectItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CowboyHatItem$Type = ($CowboyHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CowboyHatItem_ = $CowboyHatItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$UniversalAttractorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalAttractorItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "makesPiglinsNeutral"(): boolean
public "hasNonCosmeticEffects"(): boolean
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalAttractorItem$Type = ($UniversalAttractorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalAttractorItem_ = $UniversalAttractorItem$Type;
}}
declare module "packages/artifacts/item/$EverlastingFoodItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ArtifactItem, $ArtifactItem$Type} from "packages/artifacts/item/$ArtifactItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EverlastingFoodItem extends $ArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(food: $FoodProperties$Type, eatingCooldown: $Supplier$Type<(integer)>, isEnabled: $Supplier$Type<(boolean)>)

public "isEdible"(): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(stack: $ItemStack$Type, world: $Level$Type, entity: $LivingEntity$Type): $ItemStack
public "isCosmetic"(): boolean
get "edible"(): boolean
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingFoodItem$Type = ($EverlastingFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingFoodItem_ = $EverlastingFoodItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$HeliumFlamingoItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HeliumFlamingoItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeliumFlamingoItem$Type = ($HeliumFlamingoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeliumFlamingoItem_ = $HeliumFlamingoItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$NightVisionGogglesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MobEffectItem, $MobEffectItem$Type} from "packages/artifacts/item/wearable/$MobEffectItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NightVisionGogglesItem extends $MobEffectItem {
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
export type $NightVisionGogglesItem$Type = ($NightVisionGogglesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NightVisionGogglesItem_ = $NightVisionGogglesItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$ObsidianSkullItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObsidianSkullItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "onLivingDamage"(entity: $LivingEntity$Type, damageSource: $DamageSource$Type, amount: float): void
public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianSkullItem$Type = ($ObsidianSkullItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObsidianSkullItem_ = $ObsidianSkullItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$ChorusTotemItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChorusTotemItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "teleport"(entity: $LivingEntity$Type, level: $ServerLevel$Type): void
public static "findTotem"(entity: $LivingEntity$Type): $ItemStack
public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusTotemItem$Type = ($ChorusTotemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusTotemItem_ = $ChorusTotemItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$PowerGloveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PowerGloveItem extends $WearableArtifactItem {
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
export type $PowerGloveItem$Type = ($PowerGloveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerGloveItem_ = $PowerGloveItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$CharmOfSinkingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CharmOfSinkingItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "shouldSink"(entity: $LivingEntity$Type): boolean
public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharmOfSinkingItem$Type = ($CharmOfSinkingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharmOfSinkingItem_ = $CharmOfSinkingItem$Type;
}}
declare module "packages/artifacts/item/wearable/$MobEffectItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MobEffectItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(mobEffect: $MobEffect$Type, isEnabled: $Supplier$Type<(boolean)>)
constructor(mobEffect: $MobEffect$Type, amplifier: $Supplier$Type<(integer)>, duration: integer)
constructor(mobEffect: $MobEffect$Type, duration: integer, isEnabled: $Supplier$Type<(boolean)>)

public "toggleItem"(player: $ServerPlayer$Type): void
public "onUnequip"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
public "isEffectActive"(entity: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectItem$Type = ($MobEffectItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectItem_ = $MobEffectItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$FlippersItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlippersItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlippersItem$Type = ($FlippersItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlippersItem_ = $FlippersItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$AquaDashersItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $AquaDashersItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
public static "onFluidCollision"(player: $LivingEntity$Type, fluidState: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquaDashersItem$Type = ($AquaDashersItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AquaDashersItem_ = $AquaDashersItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$DiggingClawsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiggingClawsItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "canDiggingClawsHarvest"(entity: $LivingEntity$Type, state: $BlockState$Type): boolean
public "getEquipSound"(): $SoundEvent
public static "getToolTier"(): $Optional<($Tier)>
public static "getSpeedBonus"(player: $Player$Type, state: $BlockState$Type): float
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
get "toolTier"(): $Optional<($Tier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiggingClawsItem$Type = ($DiggingClawsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiggingClawsItem_ = $DiggingClawsItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$PickaxeHeaterItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PickaxeHeaterItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "getRecipeFor"(item: $ItemStack$Type, level: $Level$Type): $Optional<($AbstractCookingRecipe)>
public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
public static "getModifiedBlockDrops"(items: $ObjectArrayList$Type<($ItemStack$Type)>, context: $LootContext$Type, ores: $TagKey$Type<($Block$Type)>, rawOres: $TagKey$Type<($Item$Type)>): $ObjectArrayList<($ItemStack)>
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickaxeHeaterItem$Type = ($PickaxeHeaterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickaxeHeaterItem_ = $PickaxeHeaterItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$SuperstitiousHatItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SuperstitiousHatItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getLootingLevel"(): integer
get "lootingLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperstitiousHatItem$Type = ($SuperstitiousHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperstitiousHatItem_ = $SuperstitiousHatItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$RunningShoesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RunningShoesItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunningShoesItem$Type = ($RunningShoesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunningShoesItem_ = $RunningShoesItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$VampiricGloveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VampiricGloveItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public static "onLivingDamage"(entity: $LivingEntity$Type, damageSource: $DamageSource$Type, amount: float): void
public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VampiricGloveItem$Type = ($VampiricGloveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VampiricGloveItem_ = $VampiricGloveItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$FeralClawsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FeralClawsItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeralClawsItem$Type = ($FeralClawsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeralClawsItem_ = $FeralClawsItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$SnowshoesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SnowshoesItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "canWalkOnPowderedSnow"(): boolean
public "hasNonCosmeticEffects"(): boolean
public static "getModifiedFriction"(friction: float, entity: $LivingEntity$Type, block: $Block$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnowshoesItem$Type = ($SnowshoesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnowshoesItem_ = $SnowshoesItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$ThornPendantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PendantItem, $PendantItem$Type} from "packages/artifacts/item/wearable/necklace/$PendantItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ThornPendantItem extends $PendantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThornPendantItem$Type = ($ThornPendantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThornPendantItem_ = $ThornPendantItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$PocketPistonItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PocketPistonItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketPistonItem$Type = ($PocketPistonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketPistonItem_ = $PocketPistonItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$PanicNecklaceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PanicNecklaceItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanicNecklaceItem$Type = ($PanicNecklaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PanicNecklaceItem_ = $PanicNecklaceItem$Type;
}}
declare module "packages/artifacts/item/wearable/belt/$AntidoteVesselItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AntidoteVesselItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "makesPiglinsNeutral"(): boolean
public "getEquipSound"(): $SoundEvent
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AntidoteVesselItem$Type = ($AntidoteVesselItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AntidoteVesselItem_ = $AntidoteVesselItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$OnionRingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OnionRingItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
public static "applyMiningSpeedBuff"(entity: $LivingEntity$Type, properties: $FoodProperties$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnionRingItem$Type = ($OnionRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OnionRingItem_ = $OnionRingItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$SteadfastSpikesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SteadfastSpikesItem extends $WearableArtifactItem {
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
export type $SteadfastSpikesItem$Type = ($SteadfastSpikesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteadfastSpikesItem_ = $SteadfastSpikesItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$DrinkingHatItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ModGameRules$DoubleValue, $ModGameRules$DoubleValue$Type} from "packages/artifacts/registry/$ModGameRules$DoubleValue"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrinkingHatItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(drinkingDurationMultiplier: $ModGameRules$DoubleValue$Type, eatingDurationMultiplier: $ModGameRules$DoubleValue$Type, hasSpecialTooltip: boolean)

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
public static "getDrinkingHatUseDuration"(entity: $LivingEntity$Type, action: $UseAnim$Type, duration: integer): integer
public "getDurationMultiplier"(action: $UseAnim$Type): double
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrinkingHatItem$Type = ($DrinkingHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrinkingHatItem_ = $DrinkingHatItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$ShockPendantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PendantItem, $PendantItem$Type} from "packages/artifacts/item/wearable/necklace/$PendantItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShockPendantItem extends $PendantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShockPendantItem$Type = ($ShockPendantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShockPendantItem_ = $ShockPendantItem$Type;
}}
declare module "packages/artifacts/item/wearable/hands/$GoldenHookItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoldenHookItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "makesPiglinsNeutral"(): boolean
public static "getExperienceBonus"(originalXP: integer, entity: $LivingEntity$Type, attacker: $Player$Type): integer
public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenHookItem$Type = ($GoldenHookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenHookItem_ = $GoldenHookItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$BunnyHoppersItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MobEffectItem, $MobEffectItem$Type} from "packages/artifacts/item/wearable/$MobEffectItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BunnyHoppersItem extends $MobEffectItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
public static "shouldCancelFallDamage"(entity: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BunnyHoppersItem$Type = ($BunnyHoppersItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BunnyHoppersItem_ = $BunnyHoppersItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$CrossNecklaceItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrossNecklaceItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "makesPiglinsNeutral"(): boolean
public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
public "wornTick"(entity: $LivingEntity$Type, stack: $ItemStack$Type): void
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrossNecklaceItem$Type = ($CrossNecklaceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrossNecklaceItem_ = $CrossNecklaceItem$Type;
}}
declare module "packages/artifacts/item/wearable/head/$VillagerHatItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerHatItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerHatItem$Type = ($VillagerHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerHatItem_ = $VillagerHatItem$Type;
}}
declare module "packages/artifacts/item/$ArtifactItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArtifactItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(properties: $Item$Properties$Type)
constructor()

public "addCooldown"(entity: $LivingEntity$Type, ticks: integer): void
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltipList: $List$Type<($Component$Type)>, flags: $TooltipFlag$Type): void
public "isCosmetic"(): boolean
public "isOnCooldown"(entity: $LivingEntity$Type): boolean
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactItem$Type = ($ArtifactItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactItem_ = $ArtifactItem$Type;
}}
declare module "packages/artifacts/item/wearable/feet/$KittySlippersItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WearableArtifactItem, $WearableArtifactItem$Type} from "packages/artifacts/item/wearable/$WearableArtifactItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KittySlippersItem extends $WearableArtifactItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "getEquipSound"(): $SoundEvent
public "hasNonCosmeticEffects"(): boolean
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KittySlippersItem$Type = ($KittySlippersItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KittySlippersItem_ = $KittySlippersItem$Type;
}}
declare module "packages/artifacts/item/wearable/necklace/$FlamePendantItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PendantItem, $PendantItem$Type} from "packages/artifacts/item/wearable/necklace/$PendantItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlamePendantItem extends $PendantItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor()

public "hasNonCosmeticEffects"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamePendantItem$Type = ($FlamePendantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlamePendantItem_ = $FlamePendantItem$Type;
}}
declare module "packages/artifacts/item/wearable/$ArtifactAttributeModifier" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ArtifactAttributeModifier {

constructor(attribute: $Attribute$Type, modifierId: $UUID$Type, modifierName: string)

public static "create"(attribute: $Attribute$Type, modifierId: $UUID$Type, modifierName: string, amount: $Supplier$Type<(double)>): $ArtifactAttributeModifier
public "getAttribute"(): $Attribute
public "getAmount"(): double
public "getOperation"(): $AttributeModifier$Operation
get "attribute"(): $Attribute
get "amount"(): double
get "operation"(): $AttributeModifier$Operation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactAttributeModifier$Type = ($ArtifactAttributeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactAttributeModifier_ = $ArtifactAttributeModifier$Type;
}}
