declare module "packages/appeng/items/tools/quartz/$QuartzSwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$QuartzToolType, $QuartzToolType$Type} from "packages/appeng/items/tools/quartz/$QuartzToolType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzSwordItem extends $SwordItem {
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

constructor(arg0: $Item$Properties$Type, arg1: $QuartzToolType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSwordItem$Type = ($QuartzSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzSwordItem_ = $QuartzSwordItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$MatterCannonItem" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$LookDirection, $LookDirection$Type} from "packages/appeng/util/$LookDirection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AEBasePoweredItem, $AEBasePoweredItem$Type} from "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IBasicCellItem, $IBasicCellItem$Type} from "packages/appeng/api/storage/cells/$IBasicCellItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MatterCannonItem extends $AEBasePoweredItem implements $IBasicCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
public "getTotalTypes"(arg0: $ItemStack$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "getKeyType"(): $AEKeyType
public "getIdleDrain"(): double
public "getBytesPerType"(arg0: $ItemStack$Type): integer
public "fireCannon"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $LookDirection$Type): boolean
public "getBytes"(arg0: $ItemStack$Type): integer
public "storableInStorageCell"(): boolean
public static "getDamageFromPenetration"(arg0: float): integer
public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isStorageCell"(arg0: $ItemStack$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "getCellTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isEditable"(arg0: $ItemStack$Type): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonItem$Type = ($MatterCannonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterCannonItem_ = $MatterCannonItem$Type;
}}
declare module "packages/appeng/items/tools/fluix/$FluixSwordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$Type} from "packages/appeng/hooks/$IntrinsicEnchantItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluixSwordItem extends $SwordItem implements $IntrinsicEnchantItem {
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

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSwordItem$Type = ($FluixSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixSwordItem_ = $FluixSwordItem$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzCuttingKnifeItem" {
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$QuartzToolType, $QuartzToolType$Type} from "packages/appeng/items/tools/quartz/$QuartzToolType"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzCuttingKnifeItem extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $QuartzToolType$Type)

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingKnifeItem$Type = ($QuartzCuttingKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzCuttingKnifeItem_ = $QuartzCuttingKnifeItem$Type;
}}
declare module "packages/appeng/items/materials/$StorageComponentItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IStorageComponent, $IStorageComponent$Type} from "packages/appeng/api/implementations/items/$IStorageComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $StorageComponentItem extends $AEBaseItem implements $IStorageComponent {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "isStorageComponent"(arg0: $ItemStack$Type): boolean
public "getBytes"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageComponentItem$Type = ($StorageComponentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageComponentItem_ = $StorageComponentItem$Type;
}}
declare module "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IAEItemPowerStorage, $IAEItemPowerStorage$Type} from "packages/appeng/api/implementations/items/$IAEItemPowerStorage"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AEBasePoweredItem extends $AEBaseItem implements $IAEItemPowerStorage {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DoubleSupplier$Type, arg1: $Item$Properties$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAEMaxPower"(arg0: $ItemStack$Type): double
public "getPowerFlow"(arg0: $ItemStack$Type): $AccessRestriction
public "extractAEPower"(arg0: $ItemStack$Type, arg1: double, arg2: $Actionable$Type): double
public "getAECurrentPower"(arg0: $ItemStack$Type): double
public "injectAEPower"(arg0: $ItemStack$Type, arg1: double, arg2: $Actionable$Type): double
public "getChargeRate"(arg0: $ItemStack$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredItem$Type = ($AEBasePoweredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePoweredItem_ = $AEBasePoweredItem$Type;
}}
declare module "packages/appeng/items/materials/$MaterialItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $MaterialItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItem$Type = ($MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItem_ = $MaterialItem$Type;
}}
declare module "packages/appeng/items/parts/$ColoredPartItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PartItem, $PartItem$Type} from "packages/appeng/items/parts/$PartItem"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColoredPartItem<T extends $IPart> extends $PartItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Class$Type<(T)>, arg2: $Function$Type<($ColoredPartItem$Type<(T)>), (T)>, arg3: $AEColor$Type)

public "getColor"(): $AEColor
public static "getId"(arg0: $IPartItem$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
get "color"(): $AEColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredPartItem$Type<T> = ($ColoredPartItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredPartItem_<T> = $ColoredPartItem$Type<(T)>;
}}
declare module "packages/appeng/items/tools/$MemoryCardItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$SettingsCategory, $SettingsCategory$Type} from "packages/appeng/items/tools/$SettingsCategory"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MemoryCardMessages, $MemoryCardMessages$Type} from "packages/appeng/api/implementations/items/$MemoryCardMessages"
import {$IMemoryCard, $IMemoryCard$Type} from "packages/appeng/api/implementations/items/$IMemoryCard"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemoryCardItem extends $AEBaseItem implements $IMemoryCard, $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getColorCode"(arg0: $ItemStack$Type): ($AEColor)[]
public static "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getData"(arg0: $ItemStack$Type): $CompoundTag
public "getColor"(arg0: $ItemStack$Type): integer
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "setMemoryCardContents"(arg0: $ItemStack$Type, arg1: string, arg2: $CompoundTag$Type): void
public static "importGenericSettings"(arg0: any, arg1: $CompoundTag$Type, arg2: $Player$Type): $Set<($SettingsCategory)>
public static "importGenericSettingsAndNotify"(arg0: any, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public static "exportGenericSettings"(arg0: any, arg1: $CompoundTag$Type): $Set<($SettingsCategory)>
public "getSettingsName"(arg0: $ItemStack$Type): string
public "notifyUser"(arg0: $Player$Type, arg1: $MemoryCardMessages$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$Type = ($MemoryCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardItem_ = $MemoryCardItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$EntropyManipulatorItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AEBasePoweredItem, $AEBasePoweredItem$Type} from "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IBlockTool, $IBlockTool$Type} from "packages/appeng/hooks/$IBlockTool"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntropyManipulatorItem extends $AEBasePoweredItem implements $IBlockTool {
static readonly "ENERGY_PER_USE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getChargeRate"(arg0: $ItemStack$Type): double
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyManipulatorItem$Type = ($EntropyManipulatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyManipulatorItem_ = $EntropyManipulatorItem$Type;
}}
declare module "packages/appeng/items/materials/$EnergyCardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UpgradeCardItem, $UpgradeCardItem$Type} from "packages/appeng/items/materials/$UpgradeCardItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyCardItem extends $UpgradeCardItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "getEnergyMultiplier"(): integer
get "energyMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCardItem$Type = ($EnergyCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCardItem_ = $EnergyCardItem$Type;
}}
declare module "packages/appeng/items/parts/$FacadeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IFacadeItem, $IFacadeItem$Type} from "packages/appeng/api/implementations/items/$IFacadeItem"
import {$FacadePart, $FacadePart$Type} from "packages/appeng/facade/$FacadePart"
import {$IFacadePart, $IFacadePart$Type} from "packages/appeng/api/parts/$IFacadePart"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FacadeItem extends $AEBaseItem implements $IFacadeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "canPlaceFacade"(arg0: $IPartHost$Type, arg1: $IFacadePart$Type): boolean
public static "createFacade"(arg0: $ItemStack$Type, arg1: $Direction$Type): $IFacadePart
public "getTextureItem"(arg0: $ItemStack$Type): $ItemStack
public "createFromID"(arg0: integer): $ItemStack
public "getName"(arg0: $ItemStack$Type): $Component
public "createFacadeForItemUnchecked"(arg0: $ItemStack$Type): $ItemStack
public "createPartFromItemStack"(arg0: $ItemStack$Type, arg1: $Direction$Type): $FacadePart
public "createFacadeForItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "getTextureBlockState"(arg0: $ItemStack$Type): $BlockState
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeItem$Type = ($FacadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadeItem_ = $FacadeItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$ChargedStaffItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEBasePoweredItem, $AEBasePoweredItem$Type} from "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargedStaffItem extends $AEBasePoweredItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getChargeRate"(arg0: $ItemStack$Type): double
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedStaffItem$Type = ($ChargedStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedStaffItem_ = $ChargedStaffItem$Type;
}}
declare module "packages/appeng/items/tools/fluix/$FluixSpadeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$Type} from "packages/appeng/hooks/$IntrinsicEnchantItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluixSpadeItem extends $ShovelItem implements $IntrinsicEnchantItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
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

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSpadeItem$Type = ($FluixSpadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixSpadeItem_ = $FluixSpadeItem$Type;
}}
declare module "packages/appeng/items/materials/$NamePressItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $NamePressItem extends $AEBaseItem {
static readonly "TAG_INSCRIBE_NAME": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamePressItem$Type = ($NamePressItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamePressItem_ = $NamePressItem$Type;
}}
declare module "packages/appeng/items/parts/$PartItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PartItem<T extends $IPart> extends $AEBaseItem implements $IPartItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $Class$Type<(T)>, arg2: $Function$Type<($IPartItem$Type<(T)>), (T)>)

public "getPartClass"(): $Class<(T)>
public "createPart"(): T
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public static "getId"(arg0: $IPartItem$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
get "partClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartItem$Type<T> = ($PartItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartItem_<T> = $PartItem$Type<(T)>;
}}
declare module "packages/appeng/items/tools/$SettingsCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SettingsCategory extends $Enum<($SettingsCategory)> {
static readonly "UPGRADES": $SettingsCategory
static readonly "SETTINGS": $SettingsCategory
static readonly "CONFIG_INV": $SettingsCategory
static readonly "PRIORITY": $SettingsCategory


public static "values"(): ($SettingsCategory)[]
public static "valueOf"(arg0: string): $SettingsCategory
public "getLabel"(): $Component
get "label"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsCategory$Type = (("config_inv") | ("settings") | ("priority") | ("upgrades")) | ($SettingsCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsCategory_ = $SettingsCategory$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzPickaxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$QuartzToolType, $QuartzToolType$Type} from "packages/appeng/items/tools/quartz/$QuartzToolType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzPickaxeItem extends $PickaxeItem {
 "speed": float
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

constructor(arg0: $Item$Properties$Type, arg1: $QuartzToolType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzPickaxeItem$Type = ($QuartzPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzPickaxeItem_ = $QuartzPickaxeItem$Type;
}}
declare module "packages/appeng/items/storage/$SpatialStorageCellItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISpatialStorageCell, $ISpatialStorageCell$Type} from "packages/appeng/api/implementations/items/$ISpatialStorageCell"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpatialStorageCellItem extends $AEBaseItem implements $ISpatialStorageCell {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "isSpatialStorage"(arg0: $ItemStack$Type): boolean
public "doSpatialTransition"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer): boolean
public "getAllocatedPlotId"(arg0: $ItemStack$Type): integer
public "getMaxStoredDim"(arg0: $ItemStack$Type): integer
public "setStoredDimension"(arg0: $ItemStack$Type, arg1: integer, arg2: $BlockPos$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialStorageCellItem$Type = ($SpatialStorageCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialStorageCellItem_ = $SpatialStorageCellItem$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzToolType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $QuartzToolType extends $Enum<($QuartzToolType)> {
static readonly "CERTUS": $QuartzToolType
static readonly "NETHER": $QuartzToolType


public "getName"(): string
public static "values"(): ($QuartzToolType)[]
public static "valueOf"(arg0: string): $QuartzToolType
public "getToolTier"(): $Tier
get "name"(): string
get "toolTier"(): $Tier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzToolType$Type = (("nether") | ("certus")) | ($QuartzToolType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzToolType_ = $QuartzToolType$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzHoeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$QuartzToolType, $QuartzToolType$Type} from "packages/appeng/items/tools/quartz/$QuartzToolType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzHoeItem extends $HoeItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
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

constructor(arg0: $Item$Properties$Type, arg1: $QuartzToolType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzHoeItem$Type = ($QuartzHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzHoeItem_ = $QuartzHoeItem$Type;
}}
declare module "packages/appeng/items/materials/$UpgradeCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeCardItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeCardItem$Type = ($UpgradeCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeCardItem_ = $UpgradeCardItem$Type;
}}
declare module "packages/appeng/items/tools/fluix/$FluixAxeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$Type} from "packages/appeng/hooks/$IntrinsicEnchantItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluixAxeItem extends $AxeItem implements $IntrinsicEnchantItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
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

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixAxeItem$Type = ($FluixAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixAxeItem_ = $FluixAxeItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$ColorApplicatorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$IMouseWheelItem, $IMouseWheelItem$Type} from "packages/appeng/helpers/$IMouseWheelItem"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AEBasePoweredItem, $AEBasePoweredItem$Type} from "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem"
import {$IBlockTool, $IBlockTool$Type} from "packages/appeng/hooks/$IBlockTool"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IBasicCellItem, $IBasicCellItem$Type} from "packages/appeng/api/storage/cells/$IBasicCellItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColorApplicatorItem extends $AEBasePoweredItem implements $IBasicCellItem, $IBlockTool, $IMouseWheelItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "setActiveColor"(arg0: $ItemStack$Type, arg1: $AEColor$Type): void
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "onWheel"(arg0: $ItemStack$Type, arg1: boolean): void
public "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
public "getTotalTypes"(arg0: $ItemStack$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "getKeyType"(): $AEKeyType
public "getIdleDrain"(): double
public "getBytesPerType"(arg0: $ItemStack$Type): integer
public "getName"(arg0: $ItemStack$Type): $Component
public "getBytes"(arg0: $ItemStack$Type): integer
public "storableInStorageCell"(): boolean
public static "createFullColorApplicator"(): $ItemStack
public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "getColor"(arg0: $ItemStack$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "consumeItem"(arg0: $ItemStack$Type, arg1: $AEItemKey$Type, arg2: boolean): boolean
public "cycleColors"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getActiveColor"(arg0: $ItemStack$Type): $AEColor
public "consumeColor"(arg0: $ItemStack$Type, arg1: $AEColor$Type, arg2: boolean): boolean
public "isStorageCell"(arg0: $ItemStack$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "getCellTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isEditable"(arg0: $ItemStack$Type): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorApplicatorItem$Type = ($ColorApplicatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorApplicatorItem_ = $ColorApplicatorItem$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzWrenchItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $QuartzWrenchItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzWrenchItem$Type = ($QuartzWrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzWrenchItem_ = $QuartzWrenchItem$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzAxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$QuartzToolType, $QuartzToolType$Type} from "packages/appeng/items/tools/quartz/$QuartzToolType"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzAxeItem extends $AxeItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
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

constructor(arg0: $Item$Properties$Type, arg1: $QuartzToolType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzAxeItem$Type = ($QuartzAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzAxeItem_ = $QuartzAxeItem$Type;
}}
declare module "packages/appeng/items/misc/$WrappedGenericStack" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WrappedGenericStack extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "wrap"(arg0: $GenericStack$Type): $ItemStack
public static "wrap"(arg0: $AEKey$Type, arg1: long): $ItemStack
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "unwrapWhat"(arg0: $ItemStack$Type): $AEKey
public "unwrapAmount"(arg0: $ItemStack$Type): long
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedGenericStack$Type = ($WrappedGenericStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedGenericStack_ = $WrappedGenericStack$Type;
}}
declare module "packages/appeng/items/tools/$GuideItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $GuideItem extends $AEBaseItem {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuideItem$Type = ($GuideItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuideItem_ = $GuideItem$Type;
}}
declare module "packages/appeng/items/tools/$NetworkToolItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$NetworkToolMenuHost, $NetworkToolMenuHost$Type} from "packages/appeng/items/contents/$NetworkToolMenuHost"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AEToolItem, $AEToolItem$Type} from "packages/appeng/hooks/$AEToolItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetworkToolItem extends $AEBaseItem implements $IMenuItem, $AEToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public static "findNetworkToolInv"(arg0: $Player$Type): $NetworkToolMenuHost
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $NetworkToolMenuHost
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolItem$Type = ($NetworkToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkToolItem_ = $NetworkToolItem$Type;
}}
declare module "packages/appeng/items/storage/$ViewCellItem" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPartitionList, $IPartitionList$Type} from "packages/appeng/util/prioritylist/$IPartitionList"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ViewCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public static "createFilter"(arg0: $AEKeyFilter$Type, arg1: $Collection$Type<($ItemStack$Type)>): $IPartitionList
public static "createItemFilter"(arg0: $Collection$Type<($ItemStack$Type)>): $IPartitionList
public "isEditable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewCellItem$Type = ($ViewCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewCellItem_ = $ViewCellItem$Type;
}}
declare module "packages/appeng/items/tools/fluix/$FluixHoeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$Type} from "packages/appeng/hooks/$IntrinsicEnchantItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluixHoeItem extends $HoeItem implements $IntrinsicEnchantItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
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

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixHoeItem$Type = ($FluixHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixHoeItem_ = $FluixHoeItem$Type;
}}
declare module "packages/appeng/items/$AEBaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AEBaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "toString"(): string
public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseItem$Type = ($AEBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseItem_ = $AEBaseItem$Type;
}}
declare module "packages/appeng/items/storage/$BasicStorageCell" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AEToolItem, $AEToolItem$Type} from "packages/appeng/hooks/$AEToolItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IBasicCellItem, $IBasicCellItem$Type} from "packages/appeng/api/storage/cells/$IBasicCellItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasicStorageCell extends $AEBaseItem implements $IBasicCellItem, $AEToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $ItemLike$Type, arg2: $ItemLike$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: $AEKeyType$Type)

public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "getTotalTypes"(arg0: $ItemStack$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "getKeyType"(): $AEKeyType
public "getIdleDrain"(): double
public "getBytesPerType"(arg0: $ItemStack$Type): integer
public "getBytes"(arg0: $ItemStack$Type): integer
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
public "isStorageCell"(arg0: $ItemStack$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "storableInStorageCell"(): boolean
public "getCellTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isEditable"(arg0: $ItemStack$Type): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicStorageCell$Type = ($BasicStorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicStorageCell_ = $BasicStorageCell$Type;
}}
declare module "packages/appeng/items/misc/$MeteoriteCompassItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $MeteoriteCompassItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteoriteCompassItem$Type = ($MeteoriteCompassItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeteoriteCompassItem_ = $MeteoriteCompassItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$WirelessTerminalItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AEBasePoweredItem, $AEBasePoweredItem$Type} from "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$IUpgradeableItem, $IUpgradeableItem$Type} from "packages/appeng/api/upgrades/$IUpgradeableItem"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WirelessTerminalItem extends $AEBasePoweredItem implements $IMenuItem, $IUpgradeableItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DoubleSupplier$Type, arg1: $Item$Properties$Type)

public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "openFromInventory"(arg0: $Player$Type, arg1: integer): boolean
public "getMenuType"(): $MenuType<(any)>
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
public "getLinkedPosition"(arg0: $ItemStack$Type): $GlobalPos
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "usePower"(arg0: $Player$Type, arg1: double, arg2: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "hasPower"(arg0: $Player$Type, arg1: double, arg2: $ItemStack$Type): boolean
public "asItem"(): $Item
get "menuType"(): $MenuType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalItem$Type = ($WirelessTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessTerminalItem_ = $WirelessTerminalItem$Type;
}}
declare module "packages/appeng/items/tools/fluix/$FluixPickaxeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$Type} from "packages/appeng/hooks/$IntrinsicEnchantItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluixPickaxeItem extends $PickaxeItem implements $IntrinsicEnchantItem {
 "speed": float
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

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixPickaxeItem$Type = ($FluixPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixPickaxeItem_ = $FluixPickaxeItem$Type;
}}
declare module "packages/appeng/items/tools/quartz/$QuartzSpadeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$QuartzToolType, $QuartzToolType$Type} from "packages/appeng/items/tools/quartz/$QuartzToolType"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzSpadeItem extends $ShovelItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
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

constructor(arg0: $Item$Properties$Type, arg1: $QuartzToolType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSpadeItem$Type = ($QuartzSpadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzSpadeItem_ = $QuartzSpadeItem$Type;
}}
declare module "packages/appeng/items/tools/fluix/$FluixSmithingTemplateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SmithingTemplateItem, $SmithingTemplateItem$Type} from "packages/net/minecraft/world/item/$SmithingTemplateItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluixSmithingTemplateItem extends $SmithingTemplateItem {
static readonly "TITLE_FORMAT": $ChatFormatting
static readonly "DESCRIPTION_FORMAT": $ChatFormatting
static readonly "INGREDIENTS_TITLE": $Component
static readonly "APPLIES_TO_TITLE": $Component
static readonly "NETHERITE_UPGRADE": $Component
static readonly "ARMOR_TRIM_APPLIES_TO": $Component
static readonly "ARMOR_TRIM_INGREDIENTS": $Component
static readonly "ARMOR_TRIM_BASE_SLOT_DESCRIPTION": $Component
static readonly "ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "NETHERITE_UPGRADE_APPLIES_TO": $Component
static readonly "NETHERITE_UPGRADE_INGREDIENTS": $Component
static readonly "NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION": $Component
static readonly "NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "EMPTY_SLOT_HELMET": $ResourceLocation
static readonly "EMPTY_SLOT_CHESTPLATE": $ResourceLocation
static readonly "EMPTY_SLOT_LEGGINGS": $ResourceLocation
static readonly "EMPTY_SLOT_BOOTS": $ResourceLocation
static readonly "EMPTY_SLOT_HOE": $ResourceLocation
static readonly "EMPTY_SLOT_AXE": $ResourceLocation
static readonly "EMPTY_SLOT_SWORD": $ResourceLocation
static readonly "EMPTY_SLOT_SHOVEL": $ResourceLocation
static readonly "EMPTY_SLOT_PICKAXE": $ResourceLocation
static readonly "EMPTY_SLOT_INGOT": $ResourceLocation
static readonly "EMPTY_SLOT_REDSTONE_DUST": $ResourceLocation
static readonly "EMPTY_SLOT_QUARTZ": $ResourceLocation
static readonly "EMPTY_SLOT_EMERALD": $ResourceLocation
static readonly "EMPTY_SLOT_DIAMOND": $ResourceLocation
static readonly "EMPTY_SLOT_LAPIS_LAZULI": $ResourceLocation
static readonly "EMPTY_SLOT_AMETHYST_SHARD": $ResourceLocation
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
export type $FluixSmithingTemplateItem$Type = ($FluixSmithingTemplateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixSmithingTemplateItem_ = $FluixSmithingTemplateItem$Type;
}}
declare module "packages/appeng/items/storage/$StorageTier" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StorageTier extends $Record {
static readonly "SIZE_1K": $StorageTier
static readonly "SIZE_4K": $StorageTier
static readonly "SIZE_16K": $StorageTier
static readonly "SIZE_64K": $StorageTier
static readonly "SIZE_256K": $StorageTier

constructor(index: integer, namePrefix: string, bytes: integer, idleDrain: double, componentSupplier: $Supplier$Type<($Item$Type)>)

public "idleDrain"(): double
public "componentSupplier"(): $Supplier<($Item)>
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bytes"(): integer
public "namePrefix"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTier$Type = ($StorageTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTier_ = $StorageTier$Type;
}}
declare module "packages/appeng/items/contents/$NetworkToolMenuHost" {
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$Type} from "packages/appeng/api/networking/$IInWorldGridNodeHost"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $NetworkToolMenuHost extends $ItemMenuHost implements $InternalInventoryHost {

constructor(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $IInWorldGridNodeHost$Type)

public "getGridHost"(): $IInWorldGridNodeHost
public "getInternalInventory"(): $InternalInventory
public "getInventory"(): $InternalInventory
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "saveChanges"(): void
public "isClientSide"(): boolean
get "gridHost"(): $IInWorldGridNodeHost
get "internalInventory"(): $InternalInventory
get "inventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolMenuHost$Type = ($NetworkToolMenuHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkToolMenuHost_ = $NetworkToolMenuHost$Type;
}}
declare module "packages/appeng/items/misc/$PaintBallItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"

export class $PaintBallItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type, arg1: $AEColor$Type, arg2: boolean)

public "isLumen"(): boolean
public "getColor"(): $AEColor
get "lumen"(): boolean
get "color"(): $AEColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintBallItem$Type = ($PaintBallItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintBallItem_ = $PaintBallItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$WirelessCraftingTerminalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IUniversalWirelessTerminalItem, $IUniversalWirelessTerminalItem$Type} from "packages/de/mari_023/ae2wtlib/terminal/$IUniversalWirelessTerminalItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$WirelessTerminalItem, $WirelessTerminalItem$Type} from "packages/appeng/items/tools/powered/$WirelessTerminalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WirelessCraftingTerminalItem extends $WirelessTerminalItem implements $ICurioItem, $IUniversalWirelessTerminalItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $DoubleSupplier$Type, arg1: $Item$Properties$Type)

public "getMenuType"(): $MenuType<(any)>
public "getMenuType"(arg0: $ItemStack$Type): $MenuType<(any)>
public "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
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
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
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
public "open"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $MenuLocator$Type, arg3: boolean): boolean
public "checkUniversalPreconditions"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "getConfigManager"(arg0: $ItemStack$Type): $IConfigManager
public "getMenuHost"(arg0: $Player$Type, arg1: $MenuLocator$Type, arg2: $ItemStack$Type): $ItemMenuHost
public "tryOpen"(arg0: $Player$Type, arg1: $MenuLocator$Type, arg2: $ItemStack$Type, arg3: boolean): boolean
public "asItem"(): $Item
get "menuType"(): $MenuType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingTerminalItem$Type = ($WirelessCraftingTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessCraftingTerminalItem_ = $WirelessCraftingTerminalItem$Type;
}}
declare module "packages/appeng/items/storage/$CreativeCellItem" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreativeCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public static "ofItems"(...arg0: ($ItemLike$Type)[]): $ItemStack
public static "ofFluids"(...arg0: ($Fluid$Type)[]): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isEditable"(arg0: $ItemStack$Type): boolean
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCellItem$Type = ($CreativeCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeCellItem_ = $CreativeCellItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$PortableCellItem" {
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$IBasicCellItem, $IBasicCellItem$Type} from "packages/appeng/api/storage/cells/$IBasicCellItem"
import {$AbstractPortableCell, $AbstractPortableCell$Type} from "packages/appeng/items/tools/powered/$AbstractPortableCell"
import {$StorageTier, $StorageTier$Type} from "packages/appeng/items/storage/$StorageTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableCellItem extends $AbstractPortableCell implements $IBasicCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $AEKeyType$Type, arg1: integer, arg2: $MenuType$Type<(any)>, arg3: $StorageTier$Type, arg4: $Item$Properties$Type, arg5: integer)

public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "getTotalTypes"(arg0: $ItemStack$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "getKeyType"(): $AEKeyType
public "getIdleDrain"(): double
public "getBytesPerType"(arg0: $ItemStack$Type): integer
public "getRecipeId"(): $ResourceLocation
public "getTier"(): $StorageTier
public "getBytes"(arg0: $ItemStack$Type): integer
public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
public "isStorageCell"(arg0: $ItemStack$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "storableInStorageCell"(): boolean
public "getCellTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "asItem"(): $Item
get "keyType"(): $AEKeyType
get "idleDrain"(): double
get "recipeId"(): $ResourceLocation
get "tier"(): $StorageTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableCellItem$Type = ($PortableCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableCellItem_ = $PortableCellItem$Type;
}}
declare module "packages/appeng/items/tools/powered/$AbstractPortableCell" {
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$Type} from "packages/appeng/api/storage/cells/$ICellWorkbenchItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$FuzzyMode, $FuzzyMode$Type} from "packages/appeng/api/config/$FuzzyMode"
import {$AEToolItem, $AEToolItem$Type} from "packages/appeng/hooks/$AEToolItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AEBasePoweredItem, $AEBasePoweredItem$Type} from "packages/appeng/items/tools/powered/powersink/$AEBasePoweredItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractPortableCell extends $AEBasePoweredItem implements $ICellWorkbenchItem, $IMenuItem, $AEToolItem, $DyeableLeatherItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $MenuType$Type<(any)>, arg1: $Item$Properties$Type, arg2: integer)

public "getRecipeId"(): $ResourceLocation
public "insert"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $AEKey$Type, arg3: $AEKeyType$Type, arg4: long, arg5: $Actionable$Type): long
public "getColor"(arg0: $ItemStack$Type): integer
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getChargeRate"(arg0: $ItemStack$Type): double
public "getUpgrades"(arg0: $ItemStack$Type): $IUpgradeInventory
public "openFromInventory"(arg0: $Player$Type, arg1: integer): boolean
public "onUpgradesChanged"(arg0: $ItemStack$Type, arg1: $IUpgradeInventory$Type): void
public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "getConfigInventory"(arg0: $ItemStack$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$Type, arg1: $FuzzyMode$Type): void
public "isEditable"(arg0: $ItemStack$Type): boolean
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "asItem"(): $Item
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPortableCell$Type = ($AbstractPortableCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPortableCell_ = $AbstractPortableCell$Type;
}}
